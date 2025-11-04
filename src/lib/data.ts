import mountainsData from '../data/mountains.json';
import imagesData from '../data/images.json';
import routesData from '../data/routes.json';

export type Mountain = {
  id: string;
  name: string;
  slug: string;
  height_meters: number;
  height_feet: number;
  latitude: number;
  longitude: number;
  region: string;
  county: string | null;
  description: string | null;
  history: string | null;
  fun_facts: string[] | null;
  nearby_places: string[] | null;
  facilities: string[] | null;
  restaurants: string[] | null;
  classification: string | null;
  prominence_meters: number | null;
  grid_reference: string | null;
  gaelic_name: string | null;
  welsh_name: string | null;
  national_park: string | null;
  area: string | null;
  difficulty_rating: string | null;
  parent_range: string | null;
  is_munro: boolean;
  is_corbett: boolean;
  is_graham: boolean;
  is_wainwright: boolean;
  is_hewitt: boolean;
  is_nuttall: boolean;
  is_marilyn: boolean;
  created_at: string;
  updated_at: string;
};

export type MountainImage = {
  id: string;
  mountain_id: string;
  image_url: string;
  alt_text: string;
  order: number;
  created_at: string;
};

export type Route = {
  id: string;
  mountain_id: string;
  name: string;
  description: string | null;
  distance_km: number | null;
  distance_miles: number | null;
  ascent_meters: number | null;
  ascent_feet: number | null;
  estimated_time_hours: number | null;
  difficulty: string | null;
  starting_point: string | null;
  postcode: string | null;
  gpx_data: string | null;
  route_notes: string | null;
  seasonal_notes: string | null;
  order: number;
  created_at: string;
};

const mountains: Mountain[] = mountainsData as Mountain[];
const images: MountainImage[] = imagesData as MountainImage[];
const routes: Route[] = routesData as Route[];

export function getAllMountains(): Mountain[] {
  return mountains;
}

export function getMountainBySlug(slug: string): Mountain | undefined {
  return mountains.find(m => m.slug === slug);
}

export function getMountainImages(mountainId: string): MountainImage[] {
  return images
    .filter(img => img.mountain_id === mountainId)
    .sort((a, b) => a.order - b.order);
}

export function getMountainRoutes(mountainId: string): Route[] {
  return routes
    .filter(r => r.mountain_id === mountainId)
    .sort((a, b) => a.order - b.order);
}

export function searchMountains(
  query?: string,
  region?: string,
  classification?: string,
  difficulty?: string
): Mountain[] {
  let filtered = [...mountains];

  if (query) {
    const lowerQuery = query.toLowerCase();
    filtered = filtered.filter(m =>
      m.name.toLowerCase().includes(lowerQuery) ||
      m.region.toLowerCase().includes(lowerQuery) ||
      m.county?.toLowerCase().includes(lowerQuery) ||
      m.area?.toLowerCase().includes(lowerQuery)
    );
  }

  if (region && region !== 'all') {
    filtered = filtered.filter(m => m.region === region);
  }

  if (classification && classification !== 'all') {
    const classField = `is_${classification}` as keyof Mountain;
    filtered = filtered.filter(m => m[classField] === true);
  }

  if (difficulty && difficulty !== 'all') {
    filtered = filtered.filter(m => m.difficulty_rating === difficulty);
  }

  return filtered.sort((a, b) => b.height_meters - a.height_meters);
}

export function getMountainsWithImages(limit?: number): (Mountain & { image_url?: string })[] {
  const mountainsWithImages = mountains.map(m => {
    const mountainImages = getMountainImages(m.id);
    return {
      ...m,
      image_url: mountainImages[0]?.image_url
    };
  });

  if (limit) {
    return mountainsWithImages.slice(0, limit);
  }

  return mountainsWithImages;
}
