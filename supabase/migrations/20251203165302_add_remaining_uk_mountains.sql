/*
  # Add Remaining UK Mountains - Final Set
  
  This migration adds the final set of mountains to complete the collection.
  
  ## New Mountains Added
  
  ### Scottish Mountains
  - Beinn Luibhean - 858m Arrochar Alps
  - Beinn Bhrotain - 1157m Cairngorms plateau
  - Mount Keen - 939m most easterly Munro
  - Ben Vane - 915m Arrochar Alps
  - Sgor Gaoith - 1118m Cairngorms plateau
  - Meall nan Tarmachan - 1044m Breadalbane
  - Beinn Dorain - 1076m distinctive cone-shaped peak
  - Beinn an Dothaidh - 1004m Bridge of Orchy
  - Ben Rinnes - 840m highest in Moray
  - Stob Dearg - 1021m main peak of Buachaille Etive Mor
  
  ### English Mountains
  - Merrick - 843m highest in Southern Uplands
  - Simonside - 430m Northumberland
  
  ### Welsh Mountains
  - Moel Famau - 554m highest in Clwydian Range
  - Arenig Fawr - 854m isolated peak
  
  ### Irish Mountains
  - Slieve Bearnagh - 739m Mourne Mountains
  - Slieve Croob - 534m County Down
  
  ### Other Notable Hills
  - Moorfoot Hills High Point - 636m Scottish Borders
  - Black Mountain (Carmarthen) - 802m Brecon Beacons
  - Culter Fell - 748m Southern Uplands
  
  ## Security
  - Table already has RLS enabled
  - No changes to security policies needed
*/

-- Add remaining Scottish Mountains
INSERT INTO mountains (
  name, slug, height_meters, height_feet, latitude, longitude, region, county,
  description, classification, is_munro, is_corbett, is_graham, is_marilyn,
  prominence_meters, grid_reference
)
VALUES
  (
    'Beinn Luibhean',
    'beinn-luibhean',
    858,
    2815,
    56.2333,
    -4.8167,
    'Scotland',
    'Argyll and Bute',
    'Beinn Luibhean is a distinctive peak in the Arrochar Alps, forming part of the classic horseshoe ridge with Beinn Ìme. The mountain offers excellent ridge walking and spectacular views over Loch Long and the surrounding peaks.',
    'Munro',
    true,
    false,
    false,
    false,
    120,
    'NN247084'
  ),
  (
    'Beinn Bhrotain',
    'beinn-bhrotain',
    1157,
    3796,
    56.9303,
    -3.7147,
    'Scotland',
    'Aberdeenshire',
    'Beinn Bhrotain is a remote Munro in the Cairngorms, standing on the vast plateau south of the Lairig Ghru. The mountain offers a true wilderness experience with extensive views across the Cairngorms plateau.',
    'Munro',
    true,
    false,
    false,
    true,
    530,
    'NN954923'
  ),
  (
    'Mount Keen',
    'mount-keen',
    939,
    3081,
    56.9319,
    -2.9758,
    'Scotland',
    'Aberdeenshire',
    'Mount Keen is the most easterly Munro in Scotland, offering a relatively straightforward ascent with rewarding views. The mountain stands isolated from the main Cairngorms, providing a unique perspective over Deeside and Angus.',
    'Munro',
    true,
    false,
    false,
    true,
    812,
    'NO409869'
  ),
  (
    'Ben Vane',
    'ben-vane',
    915,
    3002,
    56.2442,
    -4.7206,
    'Scotland',
    'Stirling',
    'Ben Vane is a compact Munro in the Arrochar Alps, offering a steep and challenging ascent. Despite its modest height, the mountain rewards climbers with spectacular views over Loch Lomond and the surrounding peaks.',
    'Munro',
    true,
    false,
    false,
    true,
    640,
    'NN278098'
  ),
  (
    'Sgor Gaoith',
    'sgor-gaoith',
    1118,
    3668,
    57.0806,
    -3.8581,
    'Scotland',
    'Highland',
    'Sgor Gaoith, meaning "Peak of Wind," is a spectacular Munro on the edge of the Cairngorms plateau. The summit features dramatic cliffs overlooking Loch Einich, offering some of the most impressive mountain scenery in Scotland.',
    'Munro',
    true,
    false,
    false,
    false,
    180,
    'NN903989'
  ),
  (
    'Meall nan Tarmachan',
    'meall-nan-tarmachan',
    1044,
    3425,
    56.5294,
    -4.3358,
    'Scotland',
    'Perth and Kinross',
    'Meall nan Tarmachan is a popular Munro north of Ben Lawers, offering an excellent ridge walk with several tops. The mountain provides stunning views over Loch Tay and is known for its distinctive rocky summit.',
    'Munro',
    true,
    false,
    false,
    true,
    520,
    'NN585390'
  ),
  (
    'Beinn Dorain',
    'beinn-dorain',
    1076,
    3530,
    56.4758,
    -4.7011,
    'Scotland',
    'Argyll and Bute',
    'Beinn Dorain is one of Scotland''s most distinctive mountains, with its perfect cone shape dominating the view from Bridge of Orchy. The mountain offers a steep but rewarding ascent with magnificent views across the Southern Highlands.',
    'Munro',
    true,
    false,
    false,
    true,
    810,
    'NN326378'
  ),
  (
    'Beinn an Dothaidh',
    'beinn-an-dothaidh',
    1004,
    3294,
    56.4758,
    -4.7306,
    'Scotland',
    'Argyll and Bute',
    'Beinn an Dothaidh sits alongside its neighbor Beinn Dorain near Bridge of Orchy. The mountain offers excellent ridge walking and is often climbed in combination with Beinn Dorain, providing magnificent views across the West Highlands.',
    'Munro',
    true,
    false,
    false,
    false,
    150,
    'NN332408'
  ),
  (
    'Ben Rinnes',
    'ben-rinnes',
    840,
    2756,
    57.4331,
    -3.2294,
    'Scotland',
    'Moray',
    'Ben Rinnes is the highest mountain in Moray, standing prominently above the Speyside whisky region. The mountain offers relatively straightforward walking with spectacular 360-degree views from its distinctive summit.',
    'Corbett',
    false,
    true,
    false,
    true,
    730,
    'NJ255355'
  ),
  (
    'Stob Dearg',
    'stob-dearg',
    1021,
    3350,
    56.6533,
    -4.9503,
    'Scotland',
    'Highland',
    'Stob Dearg is the main summit of Buachaille Etive Mor and one of Scotland''s most iconic peaks. The pyramid-shaped mountain dominates the entrance to Glen Coe and offers classic mountaineering routes including the famous Curved Ridge.',
    'Munro',
    true,
    false,
    false,
    false,
    160,
    'NN223543'
  );

-- Add remaining English and Scottish Border Mountains
INSERT INTO mountains (
  name, slug, height_meters, height_feet, latitude, longitude, region, county,
  description, classification, is_corbett, is_marilyn,
  prominence_meters, grid_reference
)
VALUES
  (
    'Merrick',
    'merrick',
    843,
    2766,
    55.1561,
    -4.4847,
    'Scotland',
    'Dumfries and Galloway',
    'The Merrick is the highest peak in the Southern Uplands of Scotland. This impressive Corbett offers a challenging climb with spectacular views across Galloway and to the Isle of Man and Ireland on clear days.',
    'Corbett',
    true,
    true,
    743,
    'NX428855'
  ),
  (
    'Simonside',
    'simonside',
    430,
    1411,
    55.3083,
    -2.0444,
    'England',
    'Northumberland',
    'Simonside is a popular hill in Northumberland National Park, famous for its distinctive rocky ridge and Simonside Crags. The summit offers panoramic views across Northumberland and provides excellent walking with dramatic rocky outcrops.',
    'Marilyn',
    false,
    true,
    250,
    'NU027993'
  ),
  (
    'Moorfoot Hills High Point',
    'moorfoot-hills-high-point',
    636,
    2087,
    55.7183,
    -3.1419,
    'Scotland',
    'Scottish Borders',
    'The Moorfoot Hills High Point, also known as Windlestraw Law, is the highest summit in the Moorfoot Hills. This remote hill offers peaceful walking with extensive views across the Scottish Borders and southern Scotland.',
    'Marilyn',
    false,
    true,
    400,
    'NT374433'
  ),
  (
    'Culter Fell',
    'culter-fell',
    748,
    2454,
    55.5147,
    -3.4931,
    'Scotland',
    'South Lanarkshire',
    'Culter Fell is the highest point in the Culter Hills and offers excellent ridge walking in the Southern Uplands. The mountain provides expansive views and a sense of remoteness despite its accessibility from central Scotland.',
    'Corbett',
    true,
    true,
    564,
    'NT052291'
  );

-- Add remaining Welsh Mountains
INSERT INTO mountains (
  name, slug, height_meters, height_feet, latitude, longitude, region, county,
  description, classification, is_hewitt, is_marilyn,
  prominence_meters, grid_reference
)
VALUES
  (
    'Moel Famau',
    'moel-famau',
    554,
    1818,
    53.1658,
    -3.2528,
    'Wales',
    'Denbighshire',
    'Moel Famau is the highest peak in the Clwydian Range, crowned by the distinctive Jubilee Tower. This popular hill offers spectacular views across North Wales, Cheshire, and Lancashire, with well-maintained paths making it accessible year-round.',
    'Marilyn',
    false,
    true,
    446,
    'SJ160627'
  ),
  (
    'Arenig Fawr',
    'arenig-fawr',
    854,
    2802,
    52.9231,
    -3.7742,
    'Wales',
    'Gwynedd',
    'Arenig Fawr is a prominent isolated mountain in the Arenig range of Snowdonia. The summit offers spectacular panoramic views and features a memorial to the crew of a B-17 Flying Fortress that crashed there in 1943.',
    'Hewitt',
    true,
    true,
    622,
    'SH827369'
  ),
  (
    'Black Mountain (Carmarthen)',
    'black-mountain-carmarthen',
    802,
    2631,
    51.8944,
    -3.8583,
    'Wales',
    'Carmarthenshire',
    'The Black Mountain, also known as Carmarthen Fan or Fan Brycheiniog, is the highest peak in the western part of the Brecon Beacons. This remote mountain offers dramatic cliffs and pristine wilderness walking.',
    'Hewitt',
    true,
    true,
    572,
    'SN825222'
  );

-- Add remaining Irish Mountains
INSERT INTO mountains (
  name, slug, height_meters, height_feet, latitude, longitude, region, county,
  description, classification, is_marilyn,
  prominence_meters, grid_reference
)
VALUES
  (
    'Slieve Bearnagh',
    'slieve-bearnagh',
    739,
    2425,
    54.1872,
    -5.9783,
    'Northern Ireland',
    'County Down',
    'Slieve Bearnagh is one of the most spectacular peaks in the Mourne Mountains, famous for its distinctive granite tors. The summit offers breathtaking views across the Mournes and is a favorite among hillwalkers for its dramatic rocky outcrops.',
    'Marilyn',
    true,
    334,
    'J327283'
  ),
  (
    'Slieve Croob',
    'slieve-croob',
    534,
    1752,
    54.3228,
    -5.9372,
    'Northern Ireland',
    'County Down',
    'Slieve Croob is the highest peak in the rolling hills between Belfast and the Mourne Mountains. The summit offers excellent views across County Down, Belfast, and the Mournes, with an easy access road making it a popular destination.',
    'Marilyn',
    true,
    450,
    'J292405'
  );
