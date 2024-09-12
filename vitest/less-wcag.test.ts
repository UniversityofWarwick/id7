
import { describe, expect, it } from 'vitest'

import {
  evaluateVariable,
  renderLessFiles,
  parse,
  getContrastRatios, getValuesFromAst,
} from './less-functions';

import * as brandColours from './brand-colours';

const lightTextColor = await evaluateVariable('id7-brand-white');
//const textColor = await evaluateVariable('text-color');
const aaContrastRatio = 4.5;

// TODO this is simply a check of the colour as a background using the WCAG-aware function,
// and it doesn't (yet) check that the actual branding rules are using this function,
// or any ratios for derived colours (such as secondary nav, or box styles).
async function checkWcag(colour: string) {
  const lessFiles = [
    './less/variables.less',
    './less/mixins.less',
    './bootstrap/less/mixins.less',
  ];
  // Find out the chosen "best" colour, and also
  // get the WCAG contrast ratio for both so we can check we have chosen
  // the most contrasting and also that that one meets the AA standard.
  const siteLess = `html { 
        color: #wcag.contrast(${colour}, ${lightTextColor}, @text-color)[@result];
        @brand: .apply-brand(${colour});
        
        // extract elements of the apply-brand result here so that we can
        // easily fetch them in the test.
        
        linkColour: @brand[@link-colour];
    }`;
  const r = await renderLessFiles(lessFiles, siteLess);
  const ast = parse(r);
  const {
    color: chosenColor,
    linkColour,
  } = getValuesFromAst(ast);

  const { light: lightRatio, dark: darkRatio } = await getContrastRatios(colour);

  const bestRatio = Math.max(lightRatio, darkRatio);
  const contrastRatio = chosenColor === lightTextColor ? lightRatio : darkRatio;

  it(`selects most contrasting text colour (chose: ${chosenColor})`, async () => {
    // Did we choose the best foreground colour?
    if (contrastRatio !== bestRatio) {
      expect.fail(`Chose ${chosenColor} (${contrastRatio}:1) but the other colour would have given ${bestRatio}:1`);
    }
  });

  it(`as a background, has AA contrast against ${chosenColor}`, async () => {
    // Does the chosen colour meet the AA standard for normal text?
    expect.soft(contrastRatio).toBeGreaterThanOrEqual(aaContrastRatio);
  });

  // Note: this is directly checking against white, not evaluating the branding output.
  it(`links have AA contrast against white`, async () => {
    const { light } = await getContrastRatios(linkColour);
    expect.soft(light).toBeGreaterThanOrEqual(aaContrastRatio);
  });


}

describe('Brand colours', async () => {
  for (const brandColour of brandColours.values) {
    const { description, colour, enabled } = brandColour;
    if (enabled !== false) {
      describe.skipIf(brandColour.expectFailure)(`${description} (${colour})`, async () => {
        await checkWcag(colour);
      });
    }
  }
});
