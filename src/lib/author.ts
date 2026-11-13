// Single source of truth for page attribution.
// IMPORTANT: only put a named person here if they are real and the credentials can be verified
// (e.g. a Mountain Training ML number or a public profile linked from /about/).
export const AUTHOR = {
  name: 'UK Mountains Directory Editorial Team',
  credentials: 'Facts checked against Ordnance Survey and the Database of British and Irish Hills',
  bio: 'The UK Mountains Directory editorial team compiles and checks mountain, route and access information against Ordnance Survey mapping, the Database of British and Irish Hills (DoBIH) and official landowner and operator guidance. Spotted an error? Use the corrections form on our contact page and we will review it.',
  url: 'https://ukmountainsdirectory.co.uk/about/',
};

/** schema.org author object (Organization, because no individual is credited). */
export const authorSchema = {
  '@type': 'Organization',
  name: AUTHOR.name,
  url: AUTHOR.url,
};
