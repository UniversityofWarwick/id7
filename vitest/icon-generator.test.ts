import { expect, test } from 'vitest';
import { file, dir } from 'chai-files';
import * as generator from '../tools/icon-generator';

test('icon-generator', async function() {
  const created = await generator.generateCustomIcons('vitest/resources/toucan.svg', '_build/test-icons', {
    backgroundColour: generator.COLOURS.lavender
  });

  expect(created).to.not.be.empty;
  for (const path of created) {
    expect(file(path)).to.not.be.empty;
  }
})
