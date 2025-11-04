import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase credentials');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function exportData() {
  console.log('Exporting mountains data...');

  const { data: mountains, error: mountainsError } = await supabase
    .from('mountains')
    .select('*')
    .order('height_meters', { ascending: false });

  if (mountainsError) {
    console.error('Error fetching mountains:', mountainsError);
    process.exit(1);
  }

  console.log(`Fetched ${mountains.length} mountains`);

  console.log('Exporting images data...');
  const { data: images, error: imagesError } = await supabase
    .from('mountain_images')
    .select('*')
    .order('mountain_id, order');

  if (imagesError) {
    console.error('Error fetching images:', imagesError);
    process.exit(1);
  }

  console.log(`Fetched ${images.length} images`);

  console.log('Exporting routes data...');
  const { data: routes, error: routesError } = await supabase
    .from('routes')
    .select('*')
    .order('mountain_id, order');

  if (routesError) {
    console.error('Error fetching routes:', routesError);
  }

  console.log(`Fetched ${routes?.length || 0} routes`);

  const dataDir = path.join(__dirname, '../src/data');
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  fs.writeFileSync(
    path.join(dataDir, 'mountains.json'),
    JSON.stringify(mountains, null, 2)
  );

  fs.writeFileSync(
    path.join(dataDir, 'images.json'),
    JSON.stringify(images, null, 2)
  );

  fs.writeFileSync(
    path.join(dataDir, 'routes.json'),
    JSON.stringify(routes || [], null, 2)
  );

  console.log('Data exported successfully!');
  console.log(`- ${mountains.length} mountains`);
  console.log(`- ${images.length} images`);
  console.log(`- ${routes?.length || 0} routes`);
}

exportData().catch(console.error);
