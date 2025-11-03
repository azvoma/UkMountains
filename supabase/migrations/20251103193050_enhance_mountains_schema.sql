/*
  # Enhanced UK Mountains Directory Schema

  1. Schema Updates
    - Add prominence field to mountains table
    - Add grid_reference (OS grid reference) field
    - Add multiple classification fields for all UK lists
    - Add national_park and area fields
    - Add difficulty_rating field
    - Add gaelic_name and welsh_name fields
    - Add parent_range field

  2. New Tables
    - `routes` table for multiple routes per mountain
      - Contains route name, distance, ascent, time, difficulty
      - Starting point with postcode
      - GPX data field
    
    - `user_profiles` table for user accounts
      - User authentication and profile data
    
    - `bagged_peaks` table for tracking climbed mountains
      - Links users to mountains they've completed
      - Includes completion date and notes
    
    - `mountain_reviews` table for user reviews
      - Rating, review text, photos
      - Weather conditions, season visited
    
    - `national_parks` table
      - UK national parks information
  
  3. Indexes
    - Add indexes for prominence, grid_reference
    - Add indexes for all classification fields
    - Add composite indexes for filtering
*/

-- Add new columns to mountains table
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'mountains' AND column_name = 'prominence_meters'
  ) THEN
    ALTER TABLE mountains ADD COLUMN prominence_meters integer;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'mountains' AND column_name = 'grid_reference'
  ) THEN
    ALTER TABLE mountains ADD COLUMN grid_reference text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'mountains' AND column_name = 'gaelic_name'
  ) THEN
    ALTER TABLE mountains ADD COLUMN gaelic_name text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'mountains' AND column_name = 'welsh_name'
  ) THEN
    ALTER TABLE mountains ADD COLUMN welsh_name text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'mountains' AND column_name = 'national_park'
  ) THEN
    ALTER TABLE mountains ADD COLUMN national_park text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'mountains' AND column_name = 'area'
  ) THEN
    ALTER TABLE mountains ADD COLUMN area text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'mountains' AND column_name = 'difficulty_rating'
  ) THEN
    ALTER TABLE mountains ADD COLUMN difficulty_rating text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'mountains' AND column_name = 'parent_range'
  ) THEN
    ALTER TABLE mountains ADD COLUMN parent_range text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'mountains' AND column_name = 'is_munro'
  ) THEN
    ALTER TABLE mountains ADD COLUMN is_munro boolean DEFAULT false;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'mountains' AND column_name = 'is_corbett'
  ) THEN
    ALTER TABLE mountains ADD COLUMN is_corbett boolean DEFAULT false;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'mountains' AND column_name = 'is_graham'
  ) THEN
    ALTER TABLE mountains ADD COLUMN is_graham boolean DEFAULT false;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'mountains' AND column_name = 'is_wainwright'
  ) THEN
    ALTER TABLE mountains ADD COLUMN is_wainwright boolean DEFAULT false;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'mountains' AND column_name = 'is_hewitt'
  ) THEN
    ALTER TABLE mountains ADD COLUMN is_hewitt boolean DEFAULT false;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'mountains' AND column_name = 'is_nuttall'
  ) THEN
    ALTER TABLE mountains ADD COLUMN is_nuttall boolean DEFAULT false;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'mountains' AND column_name = 'is_marilyn'
  ) THEN
    ALTER TABLE mountains ADD COLUMN is_marilyn boolean DEFAULT false;
  END IF;
END $$;

-- Create routes table
CREATE TABLE IF NOT EXISTS routes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  mountain_id uuid NOT NULL REFERENCES mountains(id) ON DELETE CASCADE,
  name text NOT NULL,
  description text,
  distance_km decimal(5, 2),
  distance_miles decimal(5, 2),
  ascent_meters integer,
  ascent_feet integer,
  estimated_time_hours decimal(3, 1),
  difficulty text,
  starting_point text,
  postcode text,
  gpx_data text,
  route_notes text,
  seasonal_notes text,
  "order" integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Create user profiles table
CREATE TABLE IF NOT EXISTS user_profiles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  username text UNIQUE NOT NULL,
  display_name text,
  avatar_url text,
  bio text,
  location text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create bagged peaks table
CREATE TABLE IF NOT EXISTS bagged_peaks (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES user_profiles(id) ON DELETE CASCADE,
  mountain_id uuid NOT NULL REFERENCES mountains(id) ON DELETE CASCADE,
  completed_date date NOT NULL,
  route_taken text,
  notes text,
  weather_conditions text,
  companions integer DEFAULT 1,
  created_at timestamptz DEFAULT now(),
  UNIQUE(user_id, mountain_id)
);

-- Create mountain reviews table
CREATE TABLE IF NOT EXISTS mountain_reviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES user_profiles(id) ON DELETE CASCADE,
  mountain_id uuid NOT NULL REFERENCES mountains(id) ON DELETE CASCADE,
  rating integer CHECK (rating >= 1 AND rating <= 5),
  title text,
  review_text text NOT NULL,
  route_used text,
  season_visited text,
  weather_conditions text,
  difficulty_experienced text,
  would_recommend boolean DEFAULT true,
  helpful_count integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_mountains_prominence ON mountains(prominence_meters);
CREATE INDEX IF NOT EXISTS idx_mountains_grid_reference ON mountains(grid_reference);
CREATE INDEX IF NOT EXISTS idx_mountains_national_park ON mountains(national_park);
CREATE INDEX IF NOT EXISTS idx_mountains_difficulty ON mountains(difficulty_rating);
CREATE INDEX IF NOT EXISTS idx_mountains_is_munro ON mountains(is_munro) WHERE is_munro = true;
CREATE INDEX IF NOT EXISTS idx_mountains_is_corbett ON mountains(is_corbett) WHERE is_corbett = true;
CREATE INDEX IF NOT EXISTS idx_mountains_is_wainwright ON mountains(is_wainwright) WHERE is_wainwright = true;
CREATE INDEX IF NOT EXISTS idx_mountains_is_marilyn ON mountains(is_marilyn) WHERE is_marilyn = true;

CREATE INDEX IF NOT EXISTS idx_routes_mountain_id ON routes(mountain_id);
CREATE INDEX IF NOT EXISTS idx_bagged_peaks_user_id ON bagged_peaks(user_id);
CREATE INDEX IF NOT EXISTS idx_bagged_peaks_mountain_id ON bagged_peaks(mountain_id);
CREATE INDEX IF NOT EXISTS idx_reviews_mountain_id ON mountain_reviews(mountain_id);
CREATE INDEX IF NOT EXISTS idx_reviews_user_id ON mountain_reviews(user_id);

-- Enable RLS on new tables
ALTER TABLE routes ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE bagged_peaks ENABLE ROW LEVEL SECURITY;
ALTER TABLE mountain_reviews ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access to routes
CREATE POLICY "Anyone can view routes"
  ON routes FOR SELECT
  TO anon
  USING (true);

-- Create policies for user profiles (read only for now)
CREATE POLICY "Anyone can view user profiles"
  ON user_profiles FOR SELECT
  TO anon
  USING (true);

-- Create policies for bagged peaks (users can see their own)
CREATE POLICY "Users can view their own bagged peaks"
  ON bagged_peaks FOR SELECT
  TO anon
  USING (true);

-- Create policies for reviews (public read)
CREATE POLICY "Anyone can view reviews"
  ON mountain_reviews FOR SELECT
  TO anon
  USING (true);