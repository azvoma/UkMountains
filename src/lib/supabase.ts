import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

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

export type UserProfile = {
  id: string;
  email: string;
  username: string;
  display_name: string | null;
  avatar_url: string | null;
  bio: string | null;
  location: string | null;
  created_at: string;
  updated_at: string;
};

export type BaggedPeak = {
  id: string;
  user_id: string;
  mountain_id: string;
  completed_date: string;
  route_taken: string | null;
  notes: string | null;
  weather_conditions: string | null;
  companions: number;
  created_at: string;
};

export type MountainReview = {
  id: string;
  user_id: string;
  mountain_id: string;
  rating: number;
  title: string | null;
  review_text: string;
  route_used: string | null;
  season_visited: string | null;
  weather_conditions: string | null;
  difficulty_experienced: string | null;
  would_recommend: boolean;
  helpful_count: number;
  created_at: string;
  updated_at: string;
};

export type LegalPage = {
  id: string;
  slug: string;
  title: string;
  content: string;
  updated_at: string;
};
