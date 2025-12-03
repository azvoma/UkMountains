/*
  # Add Comprehensive Fields to Mountains Table

  ## Overview
  This migration adds all necessary fields to support comprehensive mountain detail pages.

  ## New Columns Added

  ### Hero Section
  - `best_season` - Optimal visiting season
  - `popular_route_name` - Name of most popular route
  - `time_to_summit` - Typical time to summit
  - `route_distance` - Distance of popular route
  
  ### Overview
  - `suitable_for` - Target audience array
  - `famous_for` - What makes this mountain special
  - `landscape_description` - Terrain description
  
  ### Location & Access
  - `nearest_town` - Closest town
  - `parking_postcode` - Parking postcode
  - `parking_info` - Detailed parking info (JSON)
  - `parking_fees` - Cost information
  - `toilets_available` - Boolean for facilities
  - `visitor_centre` - Visitor centre details
  - `public_transport` - Transport options
  
  ### Safety
  - `mountain_rescue_contact` - Emergency contact
  - `signal_black_spots` - No signal areas
  - `what_to_bring` - Essential items
  - `weather_warnings` - Important warnings
  
  ### Activities
  - `activities` - Structured activities (JSON)
  - `photography_spots` - Photo locations
  - `wildlife` - Wildlife to see
  - `winter_activities` - Winter activities
  - `camping_info` - Camping information
  
  ### Other
  - `nearby_attractions` - Points of interest (JSON)
  - `faqs` - Frequently asked questions (JSON)
  - `related_mountains` - Similar mountains
  
  ## Route Enhancements
  - `highlights` - Route highlights
  - `user_rating` - Average user rating
  - `terrain_type` - Type of terrain
  - `navigation_difficulty` - Navigation complexity
*/

-- Add Hero Section fields
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'mountains' AND column_name = 'best_season') THEN
    ALTER TABLE mountains ADD COLUMN best_season text;
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'mountains' AND column_name = 'popular_route_name') THEN
    ALTER TABLE mountains ADD COLUMN popular_route_name text;
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'mountains' AND column_name = 'time_to_summit') THEN
    ALTER TABLE mountains ADD COLUMN time_to_summit text;
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'mountains' AND column_name = 'route_distance') THEN
    ALTER TABLE mountains ADD COLUMN route_distance text;
  END IF;
END $$;

-- Add Overview fields
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'mountains' AND column_name = 'suitable_for') THEN
    ALTER TABLE mountains ADD COLUMN suitable_for text[];
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'mountains' AND column_name = 'famous_for') THEN
    ALTER TABLE mountains ADD COLUMN famous_for text;
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'mountains' AND column_name = 'landscape_description') THEN
    ALTER TABLE mountains ADD COLUMN landscape_description text;
  END IF;
END $$;

-- Add Location & Access fields
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'mountains' AND column_name = 'nearest_town') THEN
    ALTER TABLE mountains ADD COLUMN nearest_town text;
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'mountains' AND column_name = 'parking_postcode') THEN
    ALTER TABLE mountains ADD COLUMN parking_postcode text;
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'mountains' AND column_name = 'parking_info') THEN
    ALTER TABLE mountains ADD COLUMN parking_info jsonb DEFAULT '{}'::jsonb;
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'mountains' AND column_name = 'parking_fees') THEN
    ALTER TABLE mountains ADD COLUMN parking_fees text;
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'mountains' AND column_name = 'toilets_available') THEN
    ALTER TABLE mountains ADD COLUMN toilets_available boolean DEFAULT false;
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'mountains' AND column_name = 'visitor_centre') THEN
    ALTER TABLE mountains ADD COLUMN visitor_centre text;
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'mountains' AND column_name = 'public_transport') THEN
    ALTER TABLE mountains ADD COLUMN public_transport text;
  END IF;
END $$;

-- Add Safety fields
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'mountains' AND column_name = 'mountain_rescue_contact') THEN
    ALTER TABLE mountains ADD COLUMN mountain_rescue_contact text DEFAULT 'Dial 999 or 112 and ask for Police then Mountain Rescue';
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'mountains' AND column_name = 'signal_black_spots') THEN
    ALTER TABLE mountains ADD COLUMN signal_black_spots text;
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'mountains' AND column_name = 'what_to_bring') THEN
    ALTER TABLE mountains ADD COLUMN what_to_bring text[];
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'mountains' AND column_name = 'weather_warnings') THEN
    ALTER TABLE mountains ADD COLUMN weather_warnings text;
  END IF;
END $$;

-- Add Activities fields
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'mountains' AND column_name = 'activities') THEN
    ALTER TABLE mountains ADD COLUMN activities jsonb DEFAULT '{}'::jsonb;
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'mountains' AND column_name = 'photography_spots') THEN
    ALTER TABLE mountains ADD COLUMN photography_spots text[];
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'mountains' AND column_name = 'wildlife') THEN
    ALTER TABLE mountains ADD COLUMN wildlife text[];
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'mountains' AND column_name = 'winter_activities') THEN
    ALTER TABLE mountains ADD COLUMN winter_activities text[];
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'mountains' AND column_name = 'camping_info') THEN
    ALTER TABLE mountains ADD COLUMN camping_info text;
  END IF;
END $$;

-- Add Other fields
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'mountains' AND column_name = 'nearby_attractions') THEN
    ALTER TABLE mountains ADD COLUMN nearby_attractions jsonb DEFAULT '[]'::jsonb;
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'mountains' AND column_name = 'faqs') THEN
    ALTER TABLE mountains ADD COLUMN faqs jsonb DEFAULT '[]'::jsonb;
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'mountains' AND column_name = 'related_mountains') THEN
    ALTER TABLE mountains ADD COLUMN related_mountains text[];
  END IF;
END $$;

-- Add Route Enhancement fields
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'routes' AND column_name = 'highlights') THEN
    ALTER TABLE routes ADD COLUMN highlights text[];
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'routes' AND column_name = 'user_rating') THEN
    ALTER TABLE routes ADD COLUMN user_rating decimal(2,1);
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'routes' AND column_name = 'terrain_type') THEN
    ALTER TABLE routes ADD COLUMN terrain_type text;
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'routes' AND column_name = 'navigation_difficulty') THEN
    ALTER TABLE routes ADD COLUMN navigation_difficulty text;
  END IF;
END $$;

-- Create indexes for new searchable columns
CREATE INDEX IF NOT EXISTS idx_mountains_best_season ON mountains(best_season);
CREATE INDEX IF NOT EXISTS idx_mountains_nearest_town ON mountains(nearest_town);
CREATE INDEX IF NOT EXISTS idx_mountains_suitable_for ON mountains USING gin(suitable_for);
