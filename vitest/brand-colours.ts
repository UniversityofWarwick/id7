import * as less from './less-functions';

type CssColor = string;
type BrandColour = {
  name: string;
  description: string;
  colour: CssColor;
  enabled?: boolean;
  expectFailure?: boolean;
};

const id7BrandVarPrefix = 'id7-brand-';

/**
 * Partial definitions of brand colours. The values themselves are resolved from the LESS
 * so as not to get out of sync.
 */
const definitions = [
  { name: 'purple', description: 'Aubergine' },
  { name: 'gray', description: 'Gray' },
  { name: 'red', description: 'Dark Ruby' },
  { name: 'red-bright', description: 'Bright Ruby', expectFailure: true },
  { name: 'orange', description: 'Dark Orange' },
  { name: 'orange-bright', description: 'Bright Orange', expectFailure: true },
  { name: 'blue', description: 'Dark Blue' },
  { name: 'blue-bright', description: 'Bright Blue', expectFailure: true },
  // Green isn't really green anymore, almost turquoise, so we expect it to look bad
  { name: 'green', description: 'Dark Green', expectFailure: true },
  { name: 'green-bright', description: 'Bright Green', expectFailure: true },
  { name: 'teal', description: 'Teal' },
  { name: 'teal-bright', description: 'Bright Teal', expectFailure: true },
  { name: 'gold', description: 'Gold', expectFailure: true },
  { name: 'gold-bright', description: 'Bright Gold', expectFailure: true },
] as const satisfies Omit<BrandColour, 'colour'>[];

// All known brand colour identifiers
export type BrandColourName = typeof definitions[number]['name'];
// Just the ones not marked as disabled
export type EnabledBrandColourName = Exclude<typeof definitions[number], { enabled: false }>['name'];

export const values: BrandColour[] = await resolveBrandColours();

/**
 * Evaluate our LESS to get the actual values for the brand colours.
 */
async function resolveBrandColours(): Promise<BrandColour[]> {
  // As evaluateVariable is async, we do a little dance to get
  // a list of promises then use Promise.all to make it a promise of a list.
  return await Promise.all(definitions.filter(d => !("enabled" in d && d.enabled === false)).map(async (d) =>
  ({
    ...d,
    colour: await less.evaluateVariable(`${id7BrandVarPrefix}${d.name}`),
  })
  ));
}
