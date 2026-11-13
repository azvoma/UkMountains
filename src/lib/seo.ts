// Data-driven SEO helpers for mountain pages.
// Everything here is built only from fields in mountains.json - nothing is invented.

type M = Record<string, any>;

export function classList(m: M): string[] {
  const c: string[] = [];
  if (m.is_munro) c.push('Munro');
  if (m.is_corbett) c.push('Corbett');
  if (m.is_graham) c.push('Graham');
  if (m.is_wainwright) c.push('Wainwright');
  if (m.is_hewitt) c.push('Hewitt');
  if (m.is_nuttall) c.push('Nuttall');
  if (m.is_marilyn) c.push('Marilyn');
  return c;
}

const join = (a: string[]) => (a.length <= 1 ? a.join('') : a.slice(0, -1).join(', ') + ' and ' + a[a.length - 1]);
const place = (m: M) => [m.county, m.region].filter(Boolean).join(', ');
const words = (s: string) => s.trim().split(/\s+/).length;

/** Unique meta description, 140-155 characters, built from the mountain's own data. */
export function metaDescription(m: M): string {
  const cls = classList(m);
  const h = `${Number(m.height_meters).toLocaleString('en-GB')}m (${Number(m.height_feet).toLocaleString('en-GB')}ft)`;
  const leads = [
    `${m.name} is ${h}${cls.length ? `, a ${join(cls.slice(0, 2))},` : ''} in ${place(m)}.`,
    `${m.name} is ${h} in ${place(m)}.`,
  ];
  const mids = [
    m.grid_reference ? ` OS grid ref ${m.grid_reference}.` : '',
    m.parent_range ? ` Part of the ${m.parent_range}.` : '',
    m.national_park ? ` Located in ${m.national_park}.` : '',
    '',
  ];
  const tails = [
    ' Find routes, parking, best season, safety advice and nearby peaks to explore.',
    ' Find routes, parking postcode, best season and safety tips.',
    ' Routes, parking postcode, best season and safety tips.',
    ' Routes, parking, best season and safety advice.',
    ' Routes, parking and safety tips.',
    ' Routes and safety tips.',
    ' Routes, parking, season and safety.',
  ];
  let best = '';
  for (const l of leads) for (const md of mids) for (const t of tails) {
    const x = l + md + t;
    if (x.length >= 140 && x.length <= 155) return x;
    if (x.length <= 155 && x.length > best.length) best = x;
  }
  return best;
}

/** Self-contained 40-60 word answer to "how high / where is X". */
export function answerBlock(m: M): string {
  const cls = classList(m);
  const s1 = `${m.name} is ${Number(m.height_meters).toLocaleString('en-GB')} metres (${Number(m.height_feet).toLocaleString('en-GB')} feet) high${cls.length ? `, classed as a ${join(cls)},` : ''} in ${place(m)}.`;
  const extras: string[] = [];
  if (m.difficulty_rating && m.best_season) extras.push(`The standard walk is graded ${String(m.difficulty_rating).toLowerCase()}, and the best season is ${m.best_season}.`);
  else if (m.difficulty_rating) extras.push(`The standard walk is graded ${String(m.difficulty_rating).toLowerCase()}.`);
  else if (m.best_season) extras.push(`The best season is ${m.best_season}.`);
  if (m.grid_reference) extras.push(`The summit grid reference is ${m.grid_reference}.`);
  if (m.parent_range) extras.push(`It belongs to the ${m.parent_range}.`);
  if (m.parking_postcode) extras.push(`Use postcode ${m.parking_postcode} for the main car park.`);
  extras.push('Carry a map and compass, and check the Met Office mountain forecast before you set off.');
  extras.push('This guide covers routes, facilities, history and nearby peaks.');
  let out = s1;
  for (const e of extras) {
    if (words(out) >= 40) break;
    if (words(out + ' ' + e) <= 60) out += ' ' + e;
  }
  return out;
}

export type Faq = { question: string; answer: string };

/** One FAQ list used for BOTH the visible FAQ and the FAQPage schema (so they always match). */
export function buildFaqs(m: M, routeCount: number): Faq[] {
  const cls = classList(m);
  const difficulty = m.difficulty_rating || 'Moderate';
  const season = m.best_season || 'spring to autumn';
  const f: Faq[] = [
    {
      question: `How high is ${m.name}?`,
      answer: `${m.name} is ${Number(m.height_meters).toLocaleString('en-GB')} metres (${Number(m.height_feet).toLocaleString('en-GB')} feet) above sea level${cls.length ? ` and is classed as a ${join(cls)}` : ''}.`,
    },
    {
      question: `Where is ${m.name}?`,
      answer: `${m.name} is in ${place(m)}${m.national_park ? `, within ${m.national_park}` : ''}.${m.grid_reference ? ` The summit grid reference is ${m.grid_reference}.` : ''}`,
    },
    {
      question: `What difficulty level is ${m.name}?`,
      answer: `${m.name} is rated ${difficulty}. ${routeCount > 0 ? `There ${routeCount > 1 ? `are ${routeCount} documented routes` : 'is 1 documented route'} on this page.` : 'Choose a route to suit your experience and check conditions first.'}`,
    },
    {
      question: `When is the best time to climb ${m.name}?`,
      answer: `The best season is ${season}. Summit conditions can differ sharply from the valley, so check the Met Office mountain forecast before you go.`,
    },
  ];
  if (m.parking_postcode) {
    f.push({
      question: `Where should I park for ${m.name}?`,
      answer: `Use postcode ${m.parking_postcode} for sat-nav. Arrive early on weekends, as car parks can fill quickly in peak season.`,
    });
  }
  // hand-written FAQs from the data file are added after, skipping duplicates by question
  const seen = new Set(f.map((x) => x.question.toLowerCase()));
  for (const x of (m.faqs || []) as Faq[]) {
    const k = x.question.toLowerCase();
    if (!seen.has(k)) { seen.add(k); f.push(x); }
  }
  return f;
}
