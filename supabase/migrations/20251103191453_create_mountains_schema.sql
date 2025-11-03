/*
  # UK Mountains Directory Database Schema

  1. New Tables
    - `mountains`
      - `id` (uuid, primary key)
      - `name` (text, not null) - Mountain name
      - `slug` (text, unique, not null) - URL-friendly slug
      - `height_meters` (integer, not null) - Height in meters
      - `height_feet` (integer, not null) - Height in feet
      - `latitude` (decimal, not null) - Latitude coordinate
      - `longitude` (decimal, not null) - Longitude coordinate
      - `region` (text, not null) - Region (Scotland, Wales, England, etc.)
      - `county` (text) - County
      - `description` (text) - Brief description
      - `history` (text) - Historical information
      - `fun_facts` (text[]) - Array of fun facts
      - `nearby_places` (text[]) - Array of nearby places
      - `facilities` (text[]) - Array of available facilities
      - `restaurants` (text[]) - Array of nearby restaurants
      - `classification` (text) - Mountain classification (Munro, Corbett, etc.)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

    - `mountain_images`
      - `id` (uuid, primary key)
      - `mountain_id` (uuid, foreign key) - References mountains table
      - `image_url` (text, not null) - Image URL
      - `alt_text` (text, not null) - Image alt text for accessibility
      - `order` (integer, default 0) - Display order
      - `created_at` (timestamptz)

    - `legal_pages`
      - `id` (uuid, primary key)
      - `slug` (text, unique, not null) - Page slug
      - `title` (text, not null) - Page title
      - `content` (text, not null) - Page content
      - `updated_at` (timestamptz)

  2. Security
    - Enable RLS on all tables
    - Add policies for public read access
    - No write access for anonymous users (data managed by admin)
*/

-- Create mountains table
CREATE TABLE IF NOT EXISTS mountains (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text UNIQUE NOT NULL,
  height_meters integer NOT NULL,
  height_feet integer NOT NULL,
  latitude decimal(10, 7) NOT NULL,
  longitude decimal(10, 7) NOT NULL,
  region text NOT NULL,
  county text,
  description text,
  history text,
  fun_facts text[],
  nearby_places text[],
  facilities text[],
  restaurants text[],
  classification text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create mountain_images table
CREATE TABLE IF NOT EXISTS mountain_images (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  mountain_id uuid NOT NULL REFERENCES mountains(id) ON DELETE CASCADE,
  image_url text NOT NULL,
  alt_text text NOT NULL,
  "order" integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Create legal_pages table
CREATE TABLE IF NOT EXISTS legal_pages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  title text NOT NULL,
  content text NOT NULL,
  updated_at timestamptz DEFAULT now()
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_mountains_slug ON mountains(slug);
CREATE INDEX IF NOT EXISTS idx_mountains_region ON mountains(region);
CREATE INDEX IF NOT EXISTS idx_mountains_height ON mountains(height_meters);
CREATE INDEX IF NOT EXISTS idx_mountains_name ON mountains(name);
CREATE INDEX IF NOT EXISTS idx_mountain_images_mountain_id ON mountain_images(mountain_id);
CREATE INDEX IF NOT EXISTS idx_legal_pages_slug ON legal_pages(slug);

-- Enable Row Level Security
ALTER TABLE mountains ENABLE ROW LEVEL SECURITY;
ALTER TABLE mountain_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE legal_pages ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Anyone can view mountains"
  ON mountains FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Anyone can view mountain images"
  ON mountain_images FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Anyone can view legal pages"
  ON legal_pages FOR SELECT
  TO anon
  USING (true);

-- Create full-text search indexes
CREATE INDEX IF NOT EXISTS idx_mountains_name_search ON mountains USING gin(to_tsvector('english', name));
CREATE INDEX IF NOT EXISTS idx_mountains_description_search ON mountains USING gin(to_tsvector('english', coalesce(description, '')));