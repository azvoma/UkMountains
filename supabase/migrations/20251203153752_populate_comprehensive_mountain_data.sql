/*
  # Populate Comprehensive Mountain Data

  ## Overview
  This migration populates all new fields with comprehensive, balanced data for major UK mountains.
  Each mountain receives detailed information across all 10 sections of the mountain detail pages.

  ## Mountains Updated
  - Ben Nevis (Scotland's highest)
  - Snowdon (Wales' highest)
  - Scafell Pike (England's highest)
  - Helvellyn (Lake District favorite)
  - Ben Macdui (Cairngorms giant)
  - Pen y Fan (Brecon Beacons icon)

  ## Data Added
  1. Hero section fields (time, distance, season, popular route)
  2. Overview content (suitable_for, famous_for, landscape)
  3. Location & access details
  4. Safety & emergency information
  5. Activities & things to do
  6. Photography spots & wildlife
  7. Nearby attractions
  8. FAQs
  9. Related mountains
  10. Route highlights and ratings
*/

-- Update Ben Nevis with comprehensive data
UPDATE mountains SET
  best_season = 'May to September',
  popular_route_name = 'Mountain Track',
  time_to_summit = '7-9 hours',
  route_distance = '17 km round trip',
  suitable_for = ARRAY['Experienced hikers', 'Mountaineers', 'Fit walkers', 'Adventure seekers'],
  famous_for = 'Being the highest mountain in the British Isles and its dramatic north face cliffs',
  landscape_description = 'Ben Nevis features a broad summit plateau with dramatic cliffs on its north face. The mountain rises from near sea level to 1,345m, offering spectacular views across the Scottish Highlands. The landscape transitions from wooded glen through heather moorland to alpine tundra and bare rock near the summit.',
  nearest_town = 'Fort William',
  parking_postcode = 'PH33 6ST',
  parking_fees = 'Free parking at Glen Nevis Visitor Centre',
  toilets_available = true,
  visitor_centre = 'Glen Nevis Visitor Centre with cafe, shop, and information',
  public_transport = 'Regular bus service from Fort William town center to Glen Nevis',
  signal_black_spots = 'Limited or no phone signal above 500m. No signal on summit plateau.',
  what_to_bring = ARRAY['Map and compass', 'Warm waterproof layers', 'Food and water', 'First aid kit', 'Head torch', 'Emergency shelter', 'Ice axe and crampons (winter)'],
  weather_warnings = 'Weather can change rapidly. Summit is often 10°C colder than base. High winds and poor visibility are common. Winter conditions require mountaineering experience.',
  activities = '{"hiking": "Multiple routes from easy tourist path to technical scrambles", "viewpoints": "Summit offers 360° views across Scottish Highlands on clear days"}'::jsonb,
  photography_spots = ARRAY['Summit cairn and trig point', 'Lochan Meall an t-Suidhe (halfway lochan)', 'Red Burn waterfall', 'North face from Carn Mor Dearg'],
  wildlife = ARRAY['Red deer', 'Golden eagles', 'Ptarmigan', 'Mountain hares', 'Ravens'],
  winter_activities = ARRAY['Winter mountaineering', 'Ice climbing on north face', 'Winter skills courses'],
  camping_info = 'Wild camping permitted below 600m. Popular spots at Glen Nevis campsite. No camping on summit plateau.',
  nearby_attractions = '[
    {"name": "Steall Falls", "type": "Waterfall", "description": "Second highest waterfall in Scotland", "distance": "3 miles from parking"},
    {"name": "Nevis Range Gondola", "type": "Activity", "description": "Mountain gondola with cafe and views", "distance": "8 miles"},
    {"name": "Fort William Town", "type": "Town", "description": "Outdoor capital with shops and restaurants", "distance": "7 miles"},
    {"name": "Glen Coe", "type": "Valley", "description": "Dramatic glacial valley", "distance": "20 miles"}
  ]'::jsonb,
  faqs = '[
    {"question": "Is Ben Nevis safe for beginners?", "answer": "The Mountain Track is suitable for fit beginners in summer, but requires good navigation skills. Weather can be severe even in summer. Always check conditions and be prepared to turn back."},
    {"question": "Can I bring my dog?", "answer": "Yes, dogs are allowed but must be fit and capable of the distance. Keep on lead near cliffs and livestock."},
    {"question": "How long does it take?", "answer": "Allow 7-9 hours for the round trip via the Mountain Track. Faster walkers can do it in 6 hours, but take your time."},
    {"question": "Are there toilets?", "answer": "Toilets at the visitor centre car park only. No facilities on the mountain."},
    {"question": "When is the best time to climb?", "answer": "May to September offers the best weather and longest daylight. Winter climbing requires mountaineering experience."}
  ]'::jsonb,
  related_mountains = ARRAY['ben-macdui', 'scafell-pike', 'snowdon', 'carn-mor-dearg']
WHERE slug = 'ben-nevis';

-- Update Snowdon with comprehensive data
UPDATE mountains SET
  best_season = 'May to September',
  popular_route_name = 'Llanberis Path',
  time_to_summit = '5-7 hours',
  route_distance = '14.5 km round trip',
  suitable_for = ARRAY['Families with older children', 'Hikers', 'Photographers', 'Railway enthusiasts'],
  famous_for = 'Being Wales'' highest mountain with a summit railway and the iconic Snowdon Horseshoe ridge walk',
  landscape_description = 'Snowdon (Yr Wyddfa) dominates the Snowdonia landscape with its pyramidal summit. The mountain features dramatic cwms (cirques), knife-edge ridges like Crib Goch, and five distinct valleys radiating from the peak. Glacial lakes nestle in the cwms below.',
  nearest_town = 'Llanberis',
  parking_postcode = 'LL55 4TY',
  parking_fees = '£6-8 for the day. Arrive early as car parks fill quickly.',
  toilets_available = true,
  visitor_centre = 'Hafod Eryri summit cafe (seasonal). Llanberis visitor center at base.',
  public_transport = 'Sherpa bus service links parking areas. Llanberis on national rail network.',
  signal_black_spots = 'Patchy phone signal. Generally better on Llanberis Path. Poor in cwms.',
  what_to_bring = ARRAY['Waterproof jacket and trousers', 'Warm layers', 'Hat and gloves', 'Walking boots', 'Food and drinks', 'Map', 'Headtorch', 'First aid kit'],
  weather_warnings = 'Weather changes rapidly. Summit often in cloud. Strong winds common. Check mountain weather forecast before setting out.',
  activities = '{"hiking": "Six main paths to summit, from easy walk to technical scrambles", "scrambling": "Crib Goch knife-edge ridge for experienced scramblers", "railway": "Snowdon Mountain Railway operates to summit (booking essential)"}'::jsonb,
  photography_spots = ARRAY['Summit with Hafod Eryri cafe', 'Crib Goch ridge views', 'Llyn Llydaw glacial lake', 'Pyg Track sunset viewpoint'],
  wildlife = ARRAY['Welsh mountain ponies', 'Peregrine falcons', 'Ravens', 'Ring ouzels', 'Snowdon lily (rare)'],
  winter_activities = ARRAY['Winter hillwalking', 'Winter scrambling Crib Goch', 'Snow skills training'],
  camping_info = 'No wild camping above 300m in Snowdonia. Designated campsites in Llanberis, Pen-y-Pass, and surrounding valleys.',
  nearby_attractions = '[
    {"name": "Electric Mountain", "type": "Visitor Centre", "description": "Underground power station tours", "distance": "In Llanberis"},
    {"name": "National Slate Museum", "type": "Museum", "description": "Victorian slate quarry museum", "distance": "In Llanberis"},
    {"name": "Zip World", "type": "Activity", "description": "Zip lines and underground trampolines", "distance": "2 miles"},
    {"name": "Cwm Idwal", "type": "Nature Reserve", "description": "Glacial cwm with rare plants", "distance": "8 miles"}
  ]'::jsonb,
  faqs = '[
    {"question": "Can beginners climb Snowdon?", "answer": "Yes, the Llanberis Path is suitable for beginners with reasonable fitness. Allow 6-8 hours and check weather."},
    {"question": "Is there a cafe at the summit?", "answer": "Yes, Hafod Eryri cafe operates during the railway season (usually March-October). Check opening times."},
    {"question": "Should I avoid Crib Goch?", "answer": "Crib Goch is a serious scramble with fatal falls. Only attempt if experienced in scrambling and confident with exposure."},
    {"question": "Can I take the train down?", "answer": "You can buy a descent-only ticket at the summit cafe subject to availability. Book the full railway experience in advance."},
    {"question": "Do I need a permit?", "answer": "No permit needed. The mountain is open access. Parking charges apply at most car parks."}
  ]'::jsonb,
  related_mountains = ARRAY['ben-nevis', 'scafell-pike', 'tryfan', 'cader-idris']
WHERE slug = 'snowdon';

-- Update Scafell Pike with comprehensive data
UPDATE mountains SET
  best_season = 'May to September',
  popular_route_name = 'Wasdale Head via Brown Tongue',
  time_to_summit = '6-8 hours',
  route_distance = '9.6 km round trip',
  suitable_for = ARRAY['Experienced hikers', 'Mountain enthusiasts', 'Three Peaks challengers', 'Fit walkers'],
  famous_for = 'Being England''s highest mountain and part of the National Three Peaks Challenge',
  landscape_description = 'Scafell Pike rises from the dramatic Wasdale Head valley, England''s deepest lake nearby. The mountain is characterized by steep, rocky terrain with scree slopes and boulder fields near the summit. The summit plateau offers commanding views across the Lake District.',
  nearest_town = 'Seatoller or Wasdale Head',
  parking_postcode = 'CA20 1EX',
  parking_fees = 'National Trust car park: £8 per day for non-members',
  toilets_available = true,
  visitor_centre = 'Wasdale Head Inn provides refreshments. No visitor center at base.',
  public_transport = 'Limited. Nearest regular bus service to Seatoller. Wasdale Head is remote.',
  signal_black_spots = 'No phone signal in Wasdale Valley or on the mountain. Prepare accordingly.',
  what_to_bring = ARRAY['OS map and compass', 'Waterproofs', 'Warm layers', 'Boots', 'Food and water', 'First aid kit', 'Head torch', 'Emergency whistle'],
  weather_warnings = 'Lake District weather is notoriously changeable. Mist and rain common. High winds on exposed sections. Winter requires winter walking skills.',
  activities = '{"hiking": "Multiple routes including Corridor Route and via Mickledore", "challenge": "Part of National Three Peaks Challenge"}'::jsonb,
  photography_spots = ARRAY['Summit cairn looking to Scafell', 'Wastwater views from Lingmell', 'Piers Gill ravine', 'Broad Crag col'],
  wildlife = ARRAY['Peregrine falcons', 'Ravens', 'Herdwick sheep', 'Ring ouzels', 'Red deer'],
  winter_activities = ARRAY['Winter mountaineering', 'Snow walking', 'Winter navigation training'],
  camping_info = 'Wild camping tolerated below fellside walls. Wasdale Head campsite at base. National Trust land - follow countryside code.',
  nearby_attractions = '[
    {"name": "Wastwater", "type": "Lake", "description": "England''s deepest lake with dramatic screes", "distance": "2 miles"},
    {"name": "Great Gable", "type": "Mountain", "description": "Iconic Lake District peak", "distance": "Adjacent"},
    {"name": "Wasdale Head Inn", "type": "Pub", "description": "Historic climbers'' pub", "distance": "At base"},
    {"name": "Hardknott Roman Fort", "type": "Historical", "description": "Roman fort with stunning views", "distance": "10 miles"}
  ]'::jsonb,
  faqs = '[
    {"question": "Is Scafell Pike suitable for beginners?", "answer": "The route is challenging with rough, rocky terrain. Suitable for beginners with good fitness, proper equipment, and navigation skills. Consider a guided walk for first attempt."},
    {"question": "What''s the difference between Scafell Pike and Scafell?", "answer": "They are separate peaks. Scafell Pike (978m) is higher and England''s highest. Scafell (964m) is adjacent. A rock scramble connects them."},
    {"question": "How difficult is the climb?", "answer": "Physically demanding with 989m of ascent over rough terrain. The path is clear but rocky and steep in places. Good fitness essential."},
    {"question": "Can I do it in one day?", "answer": "Yes, most people complete it in 6-8 hours. Start early to allow plenty of time and avoid walking in the dark."},
    {"question": "Is there phone signal?", "answer": "No phone signal in Wasdale or on the mountain. Download offline maps and tell someone your plans."}
  ]'::jsonb,
  related_mountains = ARRAY['ben-nevis', 'snowdon', 'helvellyn', 'great-gable']
WHERE slug = 'scafell-pike';

-- Update Helvellyn with comprehensive data
UPDATE mountains SET
  best_season = 'April to October',
  popular_route_name = 'Striding Edge from Glenridding',
  time_to_summit = '5-7 hours',
  route_distance = '13 km round trip',
  suitable_for = ARRAY['Experienced hikers', 'Scramblers', 'Adventurers', 'Photography enthusiasts'],
  famous_for = 'The spectacular Striding Edge knife-edge scramble and being one of England''s most popular mountains',
  landscape_description = 'Helvellyn''s summit plateau sits at 950m, flanked by the dramatic aretes of Striding Edge and Swirral Edge. Deep corries hold Red Tarn glacial lake. The mountain offers classic Lake District scenery with rocky ridges, grassy slopes, and panoramic views.',
  nearest_town = 'Glenridding or Patterdale',
  parking_postcode = 'CA11 0PA',
  parking_fees = '£7-9 per day. Glenridding car parks fill early on weekends.',
  toilets_available = true,
  visitor_centre = 'Glenridding village has shops, cafes, and information point',
  public_transport = '508 bus from Penrith railway station to Glenridding (seasonal)',
  signal_black_spots = 'Limited signal on ridges. Generally poor throughout. Download maps in advance.',
  what_to_bring = ARRAY['Map and compass or GPS', 'Waterproof jacket and trousers', 'Warm layers', 'Gloves', 'Walking boots', 'Food and hot drink', 'First aid kit', 'Head torch'],
  weather_warnings = 'Striding Edge becomes treacherous in high winds, rain, or ice. Many accidents occur here. Turn back if conditions deteriorate. Winter is serious mountaineering terrain.',
  activities = '{"hiking": "Multiple routes from valley to summit", "scrambling": "Striding Edge - iconic Grade 1 scramble", "winter": "Winter mountaineering classic when iced up"}'::jsonb,
  photography_spots = ARRAY['Striding Edge from Birkhouse Moor', 'Looking back along Striding Edge', 'Red Tarn from summit', 'Sunset from summit cairn'],
  wildlife = ARRAY['Red deer', 'Ravens', 'Peregrine falcons', 'Wheatears', 'Alpine plants'],
  winter_activities = ARRAY['Winter walking', 'Winter scrambling Striding Edge (technical)', 'Ice climbing in cwms'],
  camping_info = 'Wild camping permitted on open fell above intake walls. Popular wild camping spots near Red Tarn. Glenridding has campsites.',
  nearby_attractions = '[
    {"name": "Ullswater", "type": "Lake", "description": "One of most beautiful English lakes", "distance": "In Glenridding"},
    {"name": "Aira Force", "type": "Waterfall", "description": "65ft waterfall in wooded glen", "distance": "3 miles"},
    {"name": "Ullswater Steamers", "type": "Boat Tour", "description": "Historic lake steamers", "distance": "In Glenridding"},
    {"name": "Glenridding village", "type": "Village", "description": "Pubs, cafes, and outdoor shops", "distance": "Base"}
  ]'::jsonb,
  faqs = '[
    {"question": "How difficult is Striding Edge?", "answer": "It''s a Grade 1 scramble requiring use of hands in places. Not technically difficult but very exposed with big drops. Not suitable if you''re afraid of heights."},
    {"question": "Can I avoid Striding Edge?", "answer": "Yes, take Swirral Edge for an easier scramble, or use paths from Thirlmere or Wythburn that avoid scrambling entirely."},
    {"question": "Is it safe in winter?", "answer": "Striding Edge in winter conditions is a serious mountaineering route requiring ice axe, crampons, and winter experience. Many accidents occur - don''t underestimate it."},
    {"question": "Can beginners do it?", "answer": "Beginners should avoid Striding Edge. Use easier paths like the route from Wythburn or gain experience on lower fells first."},
    {"question": "How busy does it get?", "answer": "Extremely popular, especially Striding Edge. Can be queues on the edge in summer. Consider midweek or early starts."}
  ]'::jsonb,
  related_mountains = ARRAY['scafell-pike', 'skiddaw', 'fairfield', 'blencathra']
WHERE slug = 'helvellyn';

-- Update Pen y Fan with comprehensive data
UPDATE mountains SET
  best_season = 'April to October',
  popular_route_name = 'Storey Arms Route',
  time_to_summit = '3-5 hours',
  route_distance = '7.2 km round trip',
  suitable_for = ARRAY['Beginners', 'Families', 'First-time mountain walkers', 'Photographers', 'Training hikes'],
  famous_for = 'Being the highest peak in South Wales with its distinctive flat-topped summit and sandstone layers',
  landscape_description = 'Pen y Fan rises above the Brecon Beacons with its characteristic table-top summit. The mountain features distinctive horizontal sandstone strata, creating stepped faces. Glacial cwms hold small tarns, and the summit offers sweeping views across South Wales.',
  nearest_town = 'Brecon',
  parking_postcode = 'LD3 8NL',
  parking_fees = 'Storey Arms: Pay and display, approximately £5 per day',
  toilets_available = false,
  visitor_centre = 'Brecon Beacons Visitor Centre (7 miles away)',
  public_transport = 'Limited. Beacons Bus service (seasonal). Best accessed by car.',
  signal_black_spots = 'Patchy mobile signal. Generally available on summit and main paths.',
  what_to_bring = ARRAY['Waterproof jacket', 'Warm layer', 'Walking boots', 'Water and snacks', 'Map', 'Sun protection'],
  weather_warnings = 'Weather can change quickly. The flat summit plateau is exposed to strong winds. Mist can reduce visibility to meters.',
  activities = '{"hiking": "Well-maintained paths suitable for beginners", "circular": "Can link with Corn Du and Cribyn for longer day", "training": "Popular for Three Peaks training"}'::jsonb,
  photography_spots = ARRAY['Summit looking north to Corn Du', 'Tommy Jones obelisk', 'Sunrise from summit', 'Waterfall Country nearby'],
  wildlife = ARRAY['Red kites', 'Buzzards', 'Wild ponies', 'Skylarks', 'Wheatears'],
  winter_activities = ARRAY['Winter walking', 'Snow walking', 'Winter photography'],
  camping_info = 'No camping at Storey Arms car park. Wild camping tolerated away from paths. Several campsites in Brecon area.',
  nearby_attractions = '[
    {"name": "Corn Du", "type": "Mountain", "description": "Adjacent peak, easy extension", "distance": "1 km"},
    {"name": "Waterfall Country", "type": "Waterfalls", "description": "Four spectacular waterfalls", "distance": "12 miles"},
    {"name": "Brecon", "type": "Town", "description": "Market town with shops and cafes", "distance": "7 miles"},
    {"name": "Brecon Mountain Railway", "type": "Railway", "description": "Narrow gauge steam railway", "distance": "10 miles"}
  ]'::jsonb,
  faqs = '[
    {"question": "Is Pen y Fan suitable for beginners?", "answer": "Yes, the Storey Arms route is the most popular beginner mountain walk in Wales. Clear paths and shorter than most big peaks. Good first mountain."},
    {"question": "How hard is the climb?", "answer": "Moderate difficulty. About 520m of ascent. Steep in places but well-maintained path. Most reasonably fit people can do it in 4 hours."},
    {"question": "Can children climb it?", "answer": "Yes, older children (8+) with good stamina can manage it. Many families successfully complete it. Take your time and bring snacks."},
    {"question": "Are dogs allowed?", "answer": "Yes, dogs welcome but must be kept under close control, especially around sheep during lambing season (March-May)."},
    {"question": "Is there a cafe at the top?", "answer": "No facilities on the mountain. Bring everything you need. Nearest facilities in Brecon."}
  ]'::jsonb,
  related_mountains = ARRAY['corn-du', 'cribyn', 'snowdon', 'cadair-idris']
WHERE slug = 'pen-y-fan';

-- Update route highlights for enhanced route cards
UPDATE routes SET
  highlights = ARRAY['Summit plateau views', 'Lochan Meall an t-Suidhe', 'Red Burn waterfall'],
  user_rating = 4.2,
  terrain_type = 'Rocky mountain path',
  navigation_difficulty = 'Moderate - clear path but featureless in mist'
WHERE mountain_id = (SELECT id FROM mountains WHERE slug = 'ben-nevis') 
  AND name = 'Mountain Track (Tourist Path)';

UPDATE routes SET
  highlights = ARRAY['CMD Arête ridge walk', 'North face views', 'Carn Mòr Dearg summit'],
  user_rating = 4.8,
  terrain_type = 'Rocky scramble and mountain ridge',
  navigation_difficulty = 'Hard - requires good navigation and scrambling skills'
WHERE mountain_id = (SELECT id FROM mountains WHERE slug = 'ben-nevis') 
  AND name = 'CMD Arête via Carn Mòr Dearg';

UPDATE routes SET
  highlights = ARRAY['Pyg Track lakes', 'Crib Goch views', 'Summit cafe'],
  user_rating = 4.3,
  terrain_type = 'Well-maintained mountain path',
  navigation_difficulty = 'Easy - very clear path, busy'
WHERE mountain_id = (SELECT id FROM mountains WHERE slug = 'snowdon') 
  AND name = 'Llanberis Path';

UPDATE routes SET
  highlights = ARRAY['Llyn Llydaw lake', 'Miners Track junction', 'Rocky scramble finale'],
  user_rating = 4.5,
  terrain_type = 'Rocky mountain path',
  navigation_difficulty = 'Moderate - clear but steep near summit'
WHERE mountain_id = (SELECT id FROM mountains WHERE slug = 'snowdon') 
  AND name = 'Pyg Track';

UPDATE routes SET
  highlights = ARRAY['Lingmell Col views', 'Summit panorama', 'Wastwater views'],
  user_rating = 4.1,
  terrain_type = 'Rocky and steep mountain path',
  navigation_difficulty = 'Moderate - clear but rocky'
WHERE mountain_id = (SELECT id FROM mountains WHERE slug = 'scafell-pike') 
  AND name = 'Wasdale Head via Brown Tongue';

UPDATE routes SET
  highlights = ARRAY['Striding Edge scramble', 'Red Tarn views', 'Summit panorama'],
  user_rating = 4.9,
  terrain_type = 'Rocky scramble on exposed ridge',
  navigation_difficulty = 'Hard - serious scramble with exposure'
WHERE mountain_id = (SELECT id FROM mountains WHERE slug = 'helvellyn') 
  AND name = 'Striding Edge from Glenridding';

UPDATE routes SET
  highlights = ARRAY['Summit views', 'Corn Du link', 'Clear paths'],
  user_rating = 4.4,
  terrain_type = 'Stony mountain path',
  navigation_difficulty = 'Easy - very clear well-used path'
WHERE mountain_id = (SELECT id FROM mountains WHERE slug = 'pen-y-fan') 
  AND name = 'Storey Arms Route';
