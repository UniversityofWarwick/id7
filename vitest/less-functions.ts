import less from 'less';
import css from 'css';

// Partial interface for the return type of css.parse,
// to make it a bit easier to work with.
export interface CssAst {
  type: 'stylesheet';
  stylesheet: {
    source: any;
    parsingErrors: any[];
    rules: CssRule[];
  };
}

export interface CssRule {
  selectors: string[];
  declarations: {
    property: string;
    value: string;
  }[];
}

export async function renderLessFiles(paths, suffix): Promise<string> {
  const srcs = paths.map(path => `@import (reference) "${path}";\n`);
  //const props = properties.map(p => `@${p.name}: ${p.value};`).join('\n');
  const result = await less.render(srcs.join("") + suffix, {
    paths: ['node_modules', 'node_modules/@universityofwarwick/id7']
  });
  return result.css;
}

export async function evaluateVariable(variableName) {
  const lessFiles = [
    'less/variables.less',
    'less/mixins/branding.less',
  ];
  const siteLess = `p { x: @${variableName}; }`;
  const cssString = await renderLessFiles(lessFiles, siteLess);
  const ast: CssAst = css.parse(cssString);
  return getValueFromAst(ast, 'x');
}

export function parse(cssString: string): CssAst {
  return css.parse(cssString);
}

// Gets the value of a named property from the first rule in a CSS AST.
export function getValueFromAst(ast: CssAst, name: string): string {
  const decs = ast.stylesheet.rules[0].declarations;
  return decs.find(d => d.property === name)?.value;
}

export function getValuesFromAst(ast: CssAst): Record<string, string> {
  const rules = ast.stylesheet.rules;
  if (rules.length !== 1) {
    throw new Error('Expected one rule, got ' + rules.length + ': ' + ast.stylesheet.rules.map(r => r.selectors));
  }
  const decs = rules[0].declarations;
  return Object.fromEntries(decs.map(d => [d.property, d.value]));
}

/**
 * Given a background colour, return the contrast ratios against light and dark text.
 * @param backgroundColour a CSS colour string
 * @returns the contrast ratios against 1 for light and dark text.
 */
export async function getContrastRatios(backgroundColour: string): Promise<{ light: number, dark: number }> {
  const lessFiles = [
    './less/variables.less',
    './less/mixins/wcag.less',
  ];
  const siteLess = `p { 
        color: #wcag.contrast(${backgroundColour}, white, @text-color)[@result];
        light-ratio: #wcag.contrast-ratio(${backgroundColour}, white)[@result];
        dark-ratio: #wcag.contrast-ratio(${backgroundColour}, @text-color)[@result]1;
    }`;
  const r = await renderLessFiles(lessFiles, siteLess);
  const ast = parse(r);
  const light = parseFloat(getValueFromAst(ast, 'light-ratio'));
  const dark = parseFloat(getValueFromAst(ast, 'dark-ratio'));
  return { light, dark };
}
