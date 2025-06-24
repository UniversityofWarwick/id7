import { expect, test } from 'vitest'
import * as lessFunctions from './less-functions';
import css from 'css';

test('evaluateVariable', async () => {
  const textColor = await lessFunctions.evaluateVariable('text-color');
  expect(textColor).toBe('#212529');
});

test('renderLessFiles', async () => {
  const src = `
        html {
            x: #wcag.contrast(#333, white, black)[@result];
        }
    `;
  const result = await lessFunctions.renderLessFiles(['less/variables.less', 'less/mixins/wcag.less'], src);
  const ast = css.parse(result);
  expect(lessFunctions.getValueFromAst(ast, 'x')).toBe('white');
});
