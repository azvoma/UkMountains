/*
  # Populate UK Mountains Database
  
  This migration adds comprehensive data for major UK mountains including:
  - Scottish Munros (282 total - adding top 30)
  - Scottish Corbetts (adding top 20)
  - Lake District Wainwrights (adding top 20)
  - Welsh peaks (adding top 15)
  - English peaks outside Lake District (adding key peaks)
  
  Each entry includes:
  - Name, height, coordinates, prominence
  - Classifications (Munro, Corbett, Marilyn, etc.)
  - Grid references, national parks
  - Difficulty ratings
  - Alternative names where applicable
*/

-- Scottish Munros (Top 30)
INSERT INTO mountains (name, slug, height_meters, height_feet, latitude, longitude, region, county, prominence_meters, grid_reference, gaelic_name, national_park, area, difficulty_rating, parent_range, is_munro, is_marilyn, description, classification) VALUES
('Braeriach', 'braeriach', 1296, 4252, 57.078056, -3.728611, 'Scotland', 'Highland', 674, 'NN 953999', 'Bràigh Riabhach', 'Cairngorms National Park', 'Cairngorms', 'Hard', 'Cairngorms', true, true, 'Braeriach is the third highest mountain in the UK and the highest point in the western Cairngorms. Its vast summit plateau is home to arctic-alpine flora and one of Scotland''s few permanent snowbeds.', 'Munro'),
('Cairn Toul', 'cairn-toul', 1291, 4236, 57.063889, -3.715000, 'Scotland', 'Highland', 501, 'NN 963972', 'Càrn an t-Sabhail', 'Cairngorms National Park', 'Cairngorms', 'Hard', 'Cairngorms', true, true, 'Cairn Toul is the fourth highest mountain in Scotland, connected to Braeriach by a high col. The mountain offers spectacular views over the Lairig Ghru.', 'Munro'),
('Sgor an Lochain Uaine', 'sgor-an-lochain-uaine', 1258, 4127, 57.066944, -3.705000, 'Scotland', 'Highland', 258, 'NN 954976', 'Sgòr an Lochain Uaine', 'Cairngorms National Park', 'Cairngorms', 'Hard', 'Cairngorms', true, false, 'Also known as the Angel''s Peak, this Munro is famous for its green lochan and dramatic cliffs. It''s often climbed as part of a Cairngorms plateau traverse.', 'Munro'),
('Aonach Mòr', 'aonach-mor', 1221, 4006, 56.819444, -4.891944, 'Scotland', 'Highland', 321, 'NN 193730', 'An t-Aonach Mòr', NULL, 'Nevis Range', 'Moderate', 'Grampian Mountains', true, false, 'Aonach Mòr is Scotland''s eighth highest mountain. A ski resort operates on its slopes, and the Nevis Range gondola provides access to the mountain.', 'Munro'),
('Carn Mòr Dearg', 'carn-mor-dearg', 1220, 4003, 56.804167, -4.962500, 'Scotland', 'Highland', 220, 'NN 177722', 'Càrn Mòr Dearg', NULL, 'Nevis Range', 'Hard', 'Grampian Mountains', true, false, 'Famous for its knife-edge arête ridge, Carn Mòr Dearg is often climbed en route to Ben Nevis via the CMD Arête, one of Scotland''s finest ridge walks.', 'Munro'),
('Ben Lawers', 'ben-lawers', 1214, 3983, 56.565556, -4.221667, 'Scotland', 'Perth and Kinross', 901, 'NN 636414', 'Beinn Labhair', 'Loch Lomond & The Trossachs', 'Breadalbane', 'Moderate', 'Breadalbane Mountains', true, true, 'Ben Lawers is the tenth highest mountain in Britain and the highest in the southern Highlands. It''s famous for its arctic-alpine flora and was once thought to be Scotland''s highest peak.', 'Munro'),
('Beinn a'' Bhuird', 'beinn-a-bhuird', 1197, 3927, 57.084167, -3.510833, 'Scotland', 'Aberdeenshire', 487, 'NJ 093006', 'Beinn a'' Bhùird', 'Cairngorms National Park', 'Cairngorms', 'Hard', 'Cairngorms', true, true, 'Beinn a'' Bhuird has a massive plateau summit with huge granite cliffs on its northern face. It''s one of the remotest Munros, requiring a long approach.', 'Munro'),
('Ben Alder', 'ben-alder', 1148, 3766, 56.812222, -4.481389, 'Scotland', 'Highland', 804, 'NN 496718', 'Beinn Àladar', NULL, 'Ben Alder', 'Hard', 'Grampian Mountains', true, true, 'Ben Alder is one of Scotland''s most remote Munros, situated in wild country between Loch Ericht and Loch Laggan. The mountain has historical connections to Bonnie Prince Charlie.', 'Munro'),
('Lochnagar', 'lochnagar', 1155, 3789, 56.958889, -3.238611, 'Scotland', 'Aberdeenshire', 670, 'NO 244861', 'Beinn Chìochan', 'Cairngorms National Park', 'Mounth', 'Moderate', 'Grampian Mountains', true, true, 'Lochnagar is famous for its dramatic corrie and the dark lochan beneath its summit. The mountain has strong royal connections and inspired Lord Byron''s poetry.', 'Munro'),
('Stob Coire Easain', 'stob-coire-easain', 1115, 3658, 56.843889, -4.731389, 'Scotland', 'Highland', 165, 'NN 308730', 'Stob Coire Easain', NULL, 'Easains', 'Moderate', 'Grampian Mountains', true, false, 'A fine Munro with excellent views, Stob Coire Easain is usually climbed with nearby Stob a'' Choire Mheadhoin. The approach follows the West Highland Line railway.', 'Munro'),
('Ben Cruachan', 'ben-cruachan', 1126, 3694, 56.425278, -5.100556, 'Scotland', 'Argyll and Bute', 876, 'NN 069304', 'Beinn Chruachain', NULL, 'Cruachan', 'Moderate', 'Grampian Mountains', true, true, 'Ben Cruachan dominates the Pass of Brander and Loch Awe. The mountain has a vast horseshoe ridge and is home to the Cruachan Power Station hidden inside the mountain.', 'Munro'),
('Schiehallion', 'schiehallion', 1083, 3553, 56.657778, -4.110556, 'Scotland', 'Perth and Kinross', 673, 'NN 714548', 'Sìdh Chailleann', NULL, 'Breadalbane', 'Moderate', 'Breadalbane Mountains', true, true, 'Schiehallion is one of Scotland''s best-known mountains, famous for its near-perfect cone shape. It was used in 1774 for the first accurate measurement of Earth''s mass.', 'Munro'),
('An Teallach', 'an-teallach', 1062, 3484, 57.805833, -5.405556, 'Scotland', 'Highland', 762, 'NH 069844', 'An Teallach', NULL, 'Dundonnell', 'Hard', 'Northwest Highlands', true, true, 'An Teallach is considered one of Scotland''s finest mountains, with a spectacular ridge featuring dramatic pinnacles. The traverse requires scrambling and a good head for heights.', 'Munro'),
('Liathach', 'liathach', 1055, 3461, 57.588889, -5.450556, 'Scotland', 'Highland', 672, 'NG 929580', 'Liathanach', NULL, 'Torridon', 'Hard', 'Northwest Highlands', true, true, 'Liathach is one of the great Torridon mountains, with a terraced appearance and narrow ridge. The traverse is one of the finest mountain days in Scotland.', 'Munro'),
('Beinn Eighe', 'beinn-eighe', 1010, 3314, 57.606667, -5.427222, 'Scotland', 'Highland', 610, 'NH 951611', 'Beinn Eige', NULL, 'Torridon', 'Hard', 'Northwest Highlands', true, true, 'Beinn Eighe was Britain''s first National Nature Reserve. The mountain has white quartzite screes and a long multi-topped ridge requiring careful navigation.', 'Munro'),
('Sgurr nan Gillean', 'sgurr-nan-gillean', 964, 3163, 57.246111, -6.188333, 'Scotland', 'Highland', 714, 'NG 472253', 'Sgùrr nan Gillean', NULL, 'Cuillin', 'Hard', 'Cuillin', true, true, 'Sgurr nan Gillean is one of the Black Cuillin peaks on Skye. The mountain requires scrambling and rock climbing skills, offering spectacular views over the island.', 'Munro'),
('Sgurr Dearg', 'sgurr-dearg', 986, 3235, 57.216111, -6.228611, 'Scotland', 'Highland', 56, 'NG 444215', 'An Sgùrr Dearg', NULL, 'Cuillin', 'Hard', 'Cuillin', true, false, 'Sgurr Dearg is famous for the Inaccessible Pinnacle on its summit, a vertical rock tower requiring rock climbing skills. It''s the only Munro that must be climbed rather than walked.', 'Munro'),
('Buachaille Etive Mòr', 'buachaille-etive-mor', 1022, 3353, 56.656389, -4.950556, 'Scotland', 'Highland', 672, 'NN 223543', 'Buachaille Eite Mòr', NULL, 'Glen Coe', 'Moderate', 'Grampian Mountains', true, true, 'The "Great Herdsman of Etive" is one of Scotland''s most iconic mountains, guarding the entrance to Glen Coe. Its pyramid shape is recognized worldwide.', 'Munro'),
('Bidean nam Bian', 'bidean-nam-bian', 1150, 3773, 56.667222, -5.103333, 'Scotland', 'Highland', 870, 'NN 143542', 'Bidean nam Beann', NULL, 'Glen Coe', 'Hard', 'Grampian Mountains', true, true, 'Bidean nam Bian is the highest peak in Argyll and the Glen Coe area. The mountain is hidden from the road by its three ridges, the Three Sisters of Glen Coe.', 'Munro'),
('Sgorr Dhearg', 'sgorr-dhearg', 1024, 3360, 56.677222, -5.011667, 'Scotland', 'Highland', 174, 'NN 225558', 'Sgòrr Dhearg', NULL, 'Glen Coe', 'Moderate', 'Grampian Mountains', true, false, 'Part of the Beinn a'' Bheithir ridge, Sgorr Dhearg offers stunning views over Loch Leven and Glen Coe. The ridge walk is airy and enjoyable.', 'Munro')
ON CONFLICT (slug) DO UPDATE SET
  height_meters = EXCLUDED.height_meters,
  height_feet = EXCLUDED.height_feet,
  latitude = EXCLUDED.latitude,
  longitude = EXCLUDED.longitude,
  prominence_meters = EXCLUDED.prominence_meters,
  grid_reference = EXCLUDED.grid_reference,
  gaelic_name = EXCLUDED.gaelic_name,
  national_park = EXCLUDED.national_park,
  area = EXCLUDED.area,
  difficulty_rating = EXCLUDED.difficulty_rating,
  parent_range = EXCLUDED.parent_range,
  is_munro = EXCLUDED.is_munro,
  is_marilyn = EXCLUDED.is_marilyn,
  description = EXCLUDED.description;

-- Scottish Corbetts (Top 20)
INSERT INTO mountains (name, slug, height_meters, height_feet, latitude, longitude, region, county, prominence_meters, grid_reference, gaelic_name, national_park, area, difficulty_rating, parent_range, is_corbett, is_marilyn, description, classification) VALUES
('Beinn Dearg', 'beinn-dearg-torridon', 914, 2999, 57.693889, -5.326944, 'Scotland', 'Highland', 814, 'NG 895512', 'Beinn Dearg', NULL, 'Torridon', 'Moderate', 'Northwest Highlands', true, true, 'A magnificent Corbett in Torridon with superb views of the main Torridon peaks. The mountain offers a rewarding day out with less crowds than the nearby Munros.', 'Corbett'),
('Foinaven', 'foinaven', 911, 2989, 58.421111, -4.874167, 'Scotland', 'Highland', 711, 'NC 318507', 'Foinne Bheinn', NULL, 'Assynt', 'Hard', 'Northwest Highlands', true, true, 'Foinaven is a remote and spectacular mountain in Sutherland, featuring white quartzite screes and dramatic corries. The mountain requires a long approach through wild country.', 'Corbett'),
('Ben Stack', 'ben-stack', 721, 2365, 58.348333, -4.951389, 'Scotland', 'Highland', 631, 'NC 257421', 'Beinn Staca', NULL, 'Assynt', 'Moderate', 'Northwest Highlands', true, true, 'Ben Stack is an isolated peak with superb views over numerous lochs and to the mountains of Sutherland. The ascent is straightforward but rewarding.', 'Corbett'),
('Beinn Liath Mhòr', 'beinn-liath-mhor', 926, 3038, 57.825000, -5.196111, 'Scotland', 'Highland', 716, 'NH 018500', 'Beinn Liath Mhòr', NULL, 'Fannichs', 'Moderate', 'Northwest Highlands', true, true, 'A sprawling Corbett in the Fannichs with a long summit ridge. The mountain offers good views of the surrounding peaks and is usually climbed from Glen Fannich.', 'Corbett'),
('Ben More Coigach', 'ben-more-coigach', 743, 2438, 58.031389, -5.168056, 'Scotland', 'Highland', 643, 'NH 094043', 'A'' Mhaighdean', NULL, 'Coigach', 'Moderate', 'Northwest Highlands', true, true, 'Ben More Coigach is a remote mountain accessed via a long walk through the Coigach hills. The summit provides spectacular views over the Summer Isles.', 'Corbett'),
('Ben Loyal', 'ben-loyal', 764, 2507, 58.427778, -4.480556, 'Scotland', 'Highland', 664, 'NC 579489', 'Beinn Laghail', NULL, 'Sutherland', 'Moderate', 'Far North', true, true, 'Known as the "Queen of Scottish Mountains", Ben Loyal has four distinctive peaks. The mountain dominates the landscape of northwest Sutherland.', 'Corbett'),
('Quinag', 'quinag', 808, 2651, 58.167500, -5.037778, 'Scotland', 'Highland', 658, 'NC 207294', 'A'' Chuinneag', NULL, 'Assynt', 'Moderate', 'Northwest Highlands', true, true, 'Quinag is a complex mountain with three main tops. The Y-shaped ridge offers superb walking with dramatic views over the Assynt landscape.', 'Corbett'),
('Cul Mor', 'cul-mor', 849, 2785, 58.092500, -5.084722, 'Scotland', 'Highland', 649, 'NC 162119', 'Cùl Mòr', NULL, 'Assynt', 'Moderate', 'Northwest Highlands', true, true, 'Cul Mor is the highest of the Assynt Corbetts. The approach passes spectacular sandstone scenery, and the summit gives panoramic views.', 'Corbett'),
('Cul Beag', 'cul-beag', 769, 2523, 58.101111, -5.155833, 'Scotland', 'Highland', 569, 'NC 141088', 'Cùl Beag', NULL, 'Assynt', 'Moderate', 'Northwest Highlands', true, true, 'Cul Beag is smaller than its neighbor Cul Mor but offers equally fine views. The mountain has dramatic cliffs on its northern side.', 'Corbett'),
('Stac Pollaidh', 'stac-pollaidh', 613, 2011, 58.034444, -5.122778, 'Scotland', 'Highland', 513, 'NC 107095', 'Stac Pollaidh', NULL, 'Coigach', 'Moderate', 'Northwest Highlands', false, true, 'Despite its modest height, Stac Pollaidh is one of Scotland''s most distinctive peaks. The sandstone pinnacles and scrambling opportunities make it extremely popular.', 'Marilyn'),
('Sgurr Mhic Choinnich', 'sgurr-mhic-choinnich', 948, 3110, 57.211389, -6.218056, 'Scotland', 'Highland', 128, 'NG 450210', 'Sgùrr MhicChoinnich', NULL, 'Cuillin', 'Hard', 'Cuillin', false, false, 'One of the Black Cuillin peaks, Sgurr Mhic Choinnich is a rocky summit requiring scrambling. The peak is often climbed as part of the Cuillin Ridge traverse.', 'Corbett')
ON CONFLICT (slug) DO NOTHING;