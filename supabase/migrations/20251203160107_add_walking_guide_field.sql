/*
  # Add Walking Guide Field to Mountains Table

  ## Overview
  Adds a text field to store comprehensive walking guides for each mountain.

  ## Changes
  - Adds `walking_guide` column to mountains table
*/

DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'mountains' AND column_name = 'walking_guide') THEN
    ALTER TABLE mountains ADD COLUMN walking_guide text;
  END IF;
END $$;
