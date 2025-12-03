/*
  # Populate Interesting Facts and Walking Guides

  ## Overview
  Updates all major mountains with:
  - 10 interesting facts per mountain
  - Comprehensive walking guides

  ## Sources
  - Facts compiled from Skyhook Adventure, mountain authorities, and historical records
  - Walking guides based on established routes and best practices
*/

-- Ben Nevis: 10 Interesting Facts and Walking Guide
UPDATE mountains SET
  fun_facts = ARRAY[
    'Ben Nevis is the highest mountain in the British Isles at 1,345 meters (4,413 feet)',
    'The summit plateau is actually the collapsed dome of an ancient volcano that was active 350-400 million years ago',
    'A weather observatory operated on the summit from 1883 to 1904, with staff living there year-round in extreme conditions',
    'The annual Ben Nevis Race has been held since 1895, with the record being an incredible 1 hour 25 minutes',
    'Snow can remain on the mountain year-round, particularly in gullies on the north face',
    'The first recorded ascent was made in 1771 by botanist James Robertson, though locals likely climbed it earlier',
    'In 1911, a Model T Ford was driven to the summit as a publicity stunt, taking 5 days to get up',
    'The ruins of the old observatory still stand on the summit, including the emergency shelter',
    'Ben Nevis attracts over 150,000 walkers annually, making it one of the UK''s most climbed mountains',
    'The mountain''s name comes from Gaelic "Beinn Nibheis" meaning either "malicious mountain" or "mountain with its head in the clouds"'
  ],
  walking_guide = 'The most popular route up Ben Nevis is the Mountain Track (also called the Tourist Path or Pony Track), starting from Glen Nevis Visitor Centre. This well-maintained path zigzags up the western slopes, gaining 1,352m over approximately 8.5km to the summit. The route starts gently through glen scenery before steepening as you climb. At halfway, you''ll pass Lochan Meall an t-Suidhe, a perfect spot for a rest with views back down the glen. From here, the path becomes rockier and steeper, winding up through a series of switchbacks. The final section crosses the summit plateau - featureless in mist, so navigation skills are essential. Allow 7-9 hours for the round trip. The path is clear in good weather but can be treacherous in winter when it becomes a serious mountaineering route requiring ice axe, crampons, and winter skills. Weather changes rapidly on Ben Nevis, with the summit often 10°C colder than the base and frequently in cloud even when the glen is sunny. Start early, carry warm and waterproof layers, take plenty of food and water, and be prepared to turn back if conditions deteriorate. The descent is hard on the knees, so walking poles are recommended.'
WHERE slug = 'ben-nevis';

-- Snowdon: 10 Interesting Facts and Walking Guide
UPDATE mountains SET
  fun_facts = ARRAY[
    'Snowdon (Yr Wyddfa in Welsh) is the highest mountain in Wales at 1,085 meters (3,560 feet)',
    'The Snowdon Mountain Railway has carried passengers to the summit since 1896, making it over 125 years old',
    'On a clear day, you can see Ireland, Scotland, England, and Wales from the summit',
    'The mountain has five distinct valleys radiating from the summit, carved by glaciers during the Ice Age',
    'Snowdon''s summit cafe, Hafod Eryri, was rebuilt in 2009 and is the highest building in Wales',
    'The rare Snowdon lily (Gagea serotina) grows only on Snowdon and in the Alps',
    'Sir Edmund Hillary trained on Snowdon before his successful Everest expedition in 1953',
    'The Welsh name "Yr Wyddfa" means "the tumulus" - a burial mound, from the legend that giant Rhita Gawr is buried there',
    'Over 582,000 people climb Snowdon annually, making it one of the busiest mountains in the UK',
    'The Crib Goch route includes a knife-edge ridge that''s responsible for more mountain accidents in Snowdonia than any other feature'
  ],
  walking_guide = 'Snowdon offers six main paths to the summit, with the Llanberis Path being the most popular and suitable for beginners. Starting from Llanberis village (parking charges apply, arrive early), this 14.5km round trip follows the railway line for much of the route, gaining 1,010m over approximately 5 miles. The path is well-maintained and clearly marked, zigzagging up the mountainside with the railway as a constant companion. The ascent is steady rather than steep, making it manageable for most reasonably fit walkers. Allow 6-7 hours for the round trip. Other routes include the Pyg Track and Miners Track from Pen-y-Pass, both shorter but steeper. The Snowdon Horseshoe, taking in Crib Goch, is a serious scramble requiring experience and a head for heights - many accidents occur here, especially in winter or poor weather. Whatever route you choose, be prepared for changeable weather - the summit is often in cloud even when the valleys are clear. Carry waterproofs, warm layers, food, and water. The summit cafe operates seasonally (typically Easter to October) and the railway runs from March to October, weather permitting. In winter, all routes become serious mountaineering propositions requiring winter skills and equipment. Navigation skills are essential as mist can descend rapidly, making it easy to take the wrong path on the descent.'
WHERE slug = 'snowdon';

-- Scafell Pike: 10 Interesting Facts and Walking Guide
UPDATE mountains SET
  fun_facts = ARRAY[
    'Scafell Pike is England''s highest mountain at 978 meters (3,209 feet)',
    'It''s part of the famous National Three Peaks Challenge along with Ben Nevis and Snowdon',
    'The mountain was donated to the National Trust in 1919 as a memorial to the men of the Lake District who died in World War I',
    'Wastwater, England''s deepest lake at 79 meters, lies at the base of the mountain',
    'The summit was used as a training ground for soldiers during World War II',
    'Despite being England''s highest, nearby Scafell (964m) is considered a harder climb',
    'The first recorded ascent of the neighboring Scafell via Lord''s Rake was in 1802',
    'The mountain is made of volcanic rock formed from ancient lava flows 450 million years ago',
    'Over 250,000 people attempt to climb Scafell Pike each year',
    'The mountain has appeared in several films and was featured in the 2012 Olympic torch relay'
  ],
  walking_guide = 'The classic route up Scafell Pike starts from Wasdale Head, with parking at the National Trust car park (£8 for non-members). This 9.6km round trip is the shortest but steepest route to the summit, climbing 990m. The path begins gently along the valley floor before steepening dramatically up Brown Tongue, a shoulder of the mountain. The climb is relentless, with rocky terrain requiring careful foot placement. As you gain height, the path becomes rockier and more challenging. At Mickledore col, you face a final steep scramble over large boulders to reach the summit cairn. The views from the top are spectacular on a clear day, encompassing the entire Lake District. Allow 6-8 hours for the round trip. The descent is tough on knees and ankles due to the steep, rocky terrain - walking poles are highly recommended. An alternative, longer but less steep route starts from Seathwaite and follows Grains Gill via the Corridor Route. Whichever route you choose, Scafell Pike demands respect. Navigation can be challenging in mist as there are multiple paths and cairns that can be confusing. Carry map, compass, and know how to use them. There is no phone signal in Wasdale, so download offline maps. Weather changes rapidly - bring full waterproofs and warm layers even in summer. In winter, this is a serious mountaineering challenge requiring ice axe, crampons, and winter skills.'
WHERE slug = 'scafell-pike';

-- Helvellyn: 10 Interesting Facts and Walking Guide
UPDATE mountains SET
  fun_facts = ARRAY[
    'Helvellyn is England''s third highest mountain at 950 meters (3,117 feet)',
    'It features two dramatic knife-edge ridges: Striding Edge and Swirral Edge',
    'More people have died on Striding Edge than on any other mountain feature in England',
    'In 1926, the first aircraft landing on an English mountain took place on Helvellyn''s summit',
    'Red Tarn, a glacial corrie lake below the summit, is one of the Lake District''s highest tarns',
    'The poet William Wordsworth wrote about Helvellyn in his poem "Fidelity" after a walker died there',
    'Sir Walter Scott and William Wordsworth climbed Helvellyn together in 1805',
    'The summit area contains rare alpine plants found nowhere else in England at such altitudes',
    'Over 200,000 people climb Helvellyn each year, making it one of England''s most popular mountains',
    'In winter, Striding Edge becomes a Grade I winter climb, dramatically increasing the difficulty'
  ],
  walking_guide = 'The classic and most dramatic route up Helvellyn is via Striding Edge from Glenridding. This 13km round trip involves a Grade 1 scramble along a spectacular knife-edge ridge with steep drops on both sides. Start from Glenridding car park (£7-9, arrive early) and follow the path via Mires Beck toward Birkhouse Moor. The initial climb is steep but well-pathed. As you approach Striding Edge, the terrain becomes rockier and more exposed. The edge itself is an exhilarating scramble requiring use of hands in places, with dramatic exposure - not suitable for those with a fear of heights. Take your time, three points of contact, and move carefully. From the end of Striding Edge, a steep, loose path climbs to Helvellyn''s summit plateau. The summit is broad and can be confusing in mist. For descent, most people take Swirral Edge (another scramble, slightly easier) forming a horseshoe, or take the longer but easier path down via the old Greenside Mine. Allow 6-7 hours for the round trip. Striding Edge should NOT be attempted in high winds, rain, or winter conditions without full winter mountaineering equipment and experience. Several people die here each year, usually from slips or being blown off in strong winds. Alternative routes avoiding scrambling include the path from Thirlmere or the Wythburn route - both are straightforward mountain walks. Always check the weather forecast and be honest about your abilities. If in doubt, choose an easier route - Helvellyn will always be there for another attempt.'
WHERE slug = 'helvellyn';

-- Pen y Fan: 10 Interesting Facts and Walking Guide
UPDATE mountains SET
  fun_facts = ARRAY[
    'Pen y Fan is the highest peak in South Wales at 886 meters (2,907 feet)',
    'The distinctive flat-topped summit is visible for miles around and a landmark of South Wales',
    'The name "Pen y Fan" means "top of the place" in Welsh',
    'Tommy Jones, a five-year-old boy, died on the mountain in 1900 - an obelisk marks where he was found',
    'The mountain is made of old red sandstone deposited 400 million years ago',
    'SAS selection training includes a timed march across the Brecon Beacons including Pen y Fan',
    'On a clear day, you can see the Bristol Channel and even Exmoor from the summit',
    'The mountain formed part of an ancient desert, and the red sandstone reveals this desert origin',
    'Over 350,000 people climb Pen y Fan each year, making it one of the most climbed mountains in Wales',
    'The summit plateau can be bitterly cold and windy even on warm summer days in the valleys below'
  ],
  walking_guide = 'The most popular route up Pen y Fan starts from the Storey Arms car park on the A470. This 7.2km round trip is relatively short but involves 520m of ascent, making it a good introduction to mountain walking. The path is clear and well-maintained throughout, starting with a gentle climb across moorland before steepening as you approach Corn Du, Pen y Fan''s near neighbor. From the car park, follow the broad path heading south - you can''t miss it as it''s well-worn and marked. The first section is gradual, crossing open hillside with excellent views. As you climb higher, the path steepens and becomes rockier. Many walkers link Corn Du and Pen y Fan in a short horseshoe, adding minimal extra distance for two summits. The final climb to Pen y Fan''s distinctive flat top involves a steep push up stone steps and rocky path. The summit itself is a small plateau with a trig point and cairn, offering panoramic views on clear days. Allow 4-5 hours for the round trip at a leisurely pace. The descent follows the same route. Despite being considered a "beginner" mountain, Pen y Fan should not be underestimated - weather can change rapidly, and the exposed summit is often windy. Several people get into difficulties each year, particularly in winter when the path becomes icy. Essential equipment includes walking boots, waterproofs, warm layers, food, water, map, and compass. In winter, the mountain can be snow-covered and icy - microspikes or crampons may be needed. Start early to avoid crowds, especially on summer weekends when the path becomes very busy. Parking at Storey Arms is pay-and-display (about £5) and fills quickly - arrive before 9am on good weather days.'
WHERE slug = 'pen-y-fan';

-- Ben Macdui: 10 Interesting Facts and Walking Guide
UPDATE mountains SET
  fun_facts = ARRAY[
    'Ben Macdui is the second highest mountain in Britain at 1,309 meters (4,295 feet)',
    'For many years it was thought to be higher than Ben Nevis',
    'The mountain is said to be haunted by the "Big Grey Man" (Am Fear Liath Mòr) - a supernatural presence',
    'The summit sits on the vast Cairngorm plateau, one of the UK''s largest areas above 1,000m',
    'Ben Macdui is named after the Clan MacDuff, who held lands in the area',
    'The first recorded ascent of Ben Macdui was in 1810, though locals likely climbed it earlier',
    'During World War II, a Halifax bomber crashed near the summit in 1944 - wreckage remains today',
    'The mountain is home to Britain''s only herd of reindeer, introduced in 1952',
    'In winter, the Cairngorm plateau experiences sub-Arctic conditions with temperatures below -20°C',
    'The summit cairn marks one of the most remote high points in the UK, miles from the nearest road'
  ],
  walking_guide = 'Ben Macdui can be approached from several directions, with the most popular route starting from the Cairngorm ski area car park. Take the funicular railway or walk up alongside it to the Ptarmigan Station (1,097m), then follow the path across the plateau toward Ben Macdui. The walk across the high plateau is unique in the UK - vast, open, and exposed, with a genuine alpine feel. Navigation is critical as there are few landmarks and the plateau can be disorientingly featureless, especially in poor weather or winter. From the Ptarmigan Station, head southwest across the plateau, passing Lochan Buidhe, then climbing gradually to the summit. The final approach involves a steeper climb over boulder fields to the large summit cairn. Allow 6-8 hours for the round trip from the car park (or 4-5 hours if using the funicular). This is a serious mountain expedition requiring excellent navigation skills - many people have become lost on the plateau, even experienced walkers. The plateau is exposed to extreme weather, and conditions can change from benign to life-threatening within minutes. Wind speeds can be ferocious, and even in summer, blizzards can occur. Essential equipment includes full waterproofs, warm layers including hat and gloves, emergency shelter, food, water, map, compass (and GPS), and the ability to navigate in zero visibility. In winter, this becomes an extreme mountaineering environment requiring ice axe, crampons, winter clothing, and considerable experience. The plateau experiences arctic conditions with deep snow, high winds, and extreme cold. Only attempt Ben Macdui if you have solid mountain experience and can navigate confidently in poor visibility. Alternative, lower-level walks in the Cairngorms are available if the plateau conditions are too severe.'
WHERE slug = 'ben-macdui';
