import natureReservesData from '../data/nature-reserves.json';
import woodlandWalksData from '../data/woodland-walks.json';
import yorkshireDalesWalksData from '../data/yorkshire-dales-walks.json';

export type NatureReserve = {
  id: string;
  name: string;
  slug: string;
  primary_keyword: string;
  region: string;
  nation: string;
  nearest_town: string;
  os_grid_ref: string;
  latitude: number | null;
  longitude: number | null;
  size_hectares: string;
  managing_body: string;
  habitat_type: string;
  access_difficulty: string;
  nnr_status: boolean;
  classification: string;
  description: string;
  history: string;
  wildlife: string;
  nearby_places: string[];
  facilities: string;
  best_season: string;
  fun_facts: string[];
  faqs: { question: string; answer: string }[];
  related_slugs: string[];
  seo_title: string;
  seo_description: string;
  seo_h1: string;
};

export type WoodlandWalk = {
  id: string;
  name: string;
  slug: string;
  primary_keyword: string;
  region: string;
  nation: string;
  nearest_town: string;
  os_grid_ref: string;
  latitude: number | null;
  longitude: number | null;
  size_hectares: string;
  managing_body: string;
  woodland_type: string;
  walk_length: string;
  difficulty: string;
  dog_policy: string;
  description: string;
  history: string;
  trees_wildlife: string;
  nearby_places: string[];
  facilities: string;
  best_season: string;
  fun_facts: string[];
  faqs: { question: string; answer: string }[];
  related_slugs: string[];
  seo_title: string;
  seo_description: string;
  seo_h1: string;
};

export type YorkshireDalesWalk = {
  id: string;
  name: string;
  slug: string;
  primary_keyword: string;
  region: string;
  nation: string;
  sub_region: string;
  nearest_towns: string[];
  trailhead: string;
  parking: string;
  dog_policy: string;
  national_park: string;
  difficulty_range: string;
  number_of_routes: string;
  description: string;
  history: string;
  best_walks: string;
  nearby_places: string[];
  facilities: string;
  best_season: string;
  fun_facts: string[];
  faqs: { question: string; answer: string }[];
  related_slugs: string[];
  seo_title: string;
  seo_description: string;
  seo_h1: string;
};

const natureReserves: NatureReserve[] = natureReservesData as NatureReserve[];
const woodlandWalks: WoodlandWalk[] = woodlandWalksData as WoodlandWalk[];
const yorkshireDalesWalks: YorkshireDalesWalk[] = yorkshireDalesWalksData as YorkshireDalesWalk[];

export function getAllNatureReserves(): NatureReserve[] {
  return natureReserves;
}

export function getNatureReserveBySlug(slug: string): NatureReserve | undefined {
  return natureReserves.find(r => r.slug === slug);
}

export function getRelatedNatureReserves(slug: string, count: number = 4): NatureReserve[] {
  const current = natureReserves.find(r => r.slug === slug);
  if (!current) return [];
  return current.related_slugs
    .map(s => natureReserves.find(r => r.slug === s))
    .filter((r): r is NatureReserve => r !== undefined)
    .slice(0, count);
}

export function getAllWoodlandWalks(): WoodlandWalk[] {
  return woodlandWalks;
}

export function getWoodlandWalkBySlug(slug: string): WoodlandWalk | undefined {
  return woodlandWalks.find(w => w.slug === slug);
}

export function getRelatedWoodlandWalks(slug: string, count: number = 4): WoodlandWalk[] {
  const current = woodlandWalks.find(w => w.slug === slug);
  if (!current) return [];
  return current.related_slugs
    .map(s => woodlandWalks.find(w => w.slug === s))
    .filter((w): w is WoodlandWalk => w !== undefined)
    .slice(0, count);
}

export function getAllYorkshireDalesWalks(): YorkshireDalesWalk[] {
  return yorkshireDalesWalks;
}

export function getYorkshireDalesWalkBySlug(slug: string): YorkshireDalesWalk | undefined {
  return yorkshireDalesWalks.find(w => w.slug === slug);
}

export function getRelatedYorkshireDalesWalks(slug: string, count: number = 4): YorkshireDalesWalk[] {
  const current = yorkshireDalesWalks.find(w => w.slug === slug);
  if (!current) return [];
  return current.related_slugs
    .map(s => yorkshireDalesWalks.find(w => w.slug === s))
    .filter((w): w is YorkshireDalesWalk => w !== undefined)
    .slice(0, count);
}
