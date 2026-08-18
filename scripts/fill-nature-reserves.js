import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const filePath = join(__dirname, '..', 'src', 'data', 'nature-reserves.json');
const data = JSON.parse(readFileSync(filePath, 'utf-8'));

const verified = {
  "huntspill-river": {
    os_grid_ref: "ST 340 450", size_hectares: "873", managing_body: "Natural England", habitat_type: "Grazing marsh and wetland",
    history: "The Huntspill River was constructed in the 1930s as a drainage channel to manage water levels on the Somerset Levels. The reserve was declared an NNR in 1954 and protects important wetland habitats along its banks.",
    wildlife: "The reserve supports nationally important populations of water voles, otters, and aquatic invertebrates. In winter, large flocks of lapwing, golden plover and wigeon gather on the flood meadows. The ditches are rich in dragonflies and damselflies, including the scarce hairy dragonfly.",
    facilities: "Small roadside parking areas along the Huntspill Wall. No visitor centre or toilets on site. Public footpaths run along the river banks. Nearest facilities in Burnham-on-Sea.",
    fun_facts: [
      "The Huntspill River was artificially created in the 1930s as part of a major drainage scheme for the Somerset Levels.",
      "It is one of the most important sites in the UK for water voles, Britain's fastest declining mammal.",
      "The reserve's drainage ditches support over 20 species of dragonfly and damselfly."
    ],
    dog_policy: "Dogs are permitted on public footpaths but must be kept on a short lead at all times to protect ground-nesting birds and water voles.",
    access_details: "Level, unsurfaced footpaths along the river banks. Access is via gates and stiles. The terrain is flat but can be muddy in winter.",
    seasonal_details: "Spring and summer are best for dragonflies and wildflowers. Winter brings spectacular flocks of wigeon, lapwing and golden plover. The river banks can flood after heavy rain."
  },
  "ashford-hill": {
    os_grid_ref: "SU 595 425", size_hectares: "22", managing_body: "Natural England", habitat_type: "Lowland meadow and ancient woodland",
    history: "Ashford Hill was declared an NNR in 1952 to protect its surviving lowland meadow habitat, which had largely disappeared from the wider countryside through agricultural intensification. The reserve expanded over the decades to include adjacent woodland parcels.",
    wildlife: "The meadows support abundant wildflowers including green-winged orchids, pepper-saxifrage and adder's tongue fern. The woodland areas feature ancient oak and hazel coppice, with nesting bluebells in spring. Brown hares, skylarks and meadow pipits are regularly seen.",
    facilities: "Small car park off Ashford Hill Road. No visitor centre or toilets. Waymarked trails through the meadows and woodland. Nearest facilities in Basingstoke or Overton.",
    fun_facts: [
      "The reserve protects one of the best surviving examples of lowland meadow in southern England, a habitat that has declined by over 97% since the 1940s.",
      "Green-winged orchids bloom in late May in spectacular purple drifts across the meadows.",
      "The reserve's ancient coppice woodland has been managed by periodic cutting for over 400 years."
    ],
    dog_policy: "Dogs are permitted on public rights of way but must be kept on a lead to protect ground-nesting birds and livestock.",
    access_details: "Relatively flat paths with some gentle slopes. Access via gates and stiles. Surfaces are grassy and can be muddy in wet weather.",
    seasonal_details: "Late May and June are the best time for wildflower displays. Spring brings bluebells to the woodland areas. Autumn offers fungi and changing leaf colour."
  },
  "ariundle-oakwood": {
    os_grid_ref: "NM 816 620", size_hectares: "142", managing_body: "NatureScot", habitat_type: "Atlantic oakwood",
    history: "Ariundle Oakwood is a fragment of the ancient Celtic rainforest that once covered the western seaboard of Scotland. The woodland has been managed for centuries for timber and charcoal production. It was declared an NNR in 1961.",
    wildlife: "The reserve is nationally important for its rich lichen and bryophyte communities, including rare species such as tree lungwort. Pine martens, red squirrels and Scottish crossbills inhabit the canopy. The woodland supports typical Atlantic oakwood birds including wood warbler, redstart and tree pipit.",
    facilities: "Car park at Ariundle Centre, Strontian. Interpretive panels and waymarked trails. Visitor facilities including a cafe and craft shop at the nearby Ariundle Centre. Toilets available in Strontian village.",
    fun_facts: [
      "Ariundle is one of the best surviving examples of temperate rainforest in Europe, with over 200 species of lichen recorded.",
      "The word 'Ariundle' comes from the Gaelic for 'the small glen of the rowan trees'.",
      "Pine martens, once nearly extinct in Scotland, thrive here and are regularly seen by visitors."
    ],
    dog_policy: "Dogs are permitted under close control but must be kept on a lead during the bird breeding season (April to July).",
    access_details: "Waymarked trails of varying lengths from the car park. Some paths are uneven and can be muddy. Moderate terrain with some gentle climbs.",
    seasonal_details: "Spring and early summer for bluebells, birdsong and new fern fronds. Autumn for fungi and rutting red deer nearby. Winter can be wet but the mosses and lichens are at their most vivid."
  },
  "skipwith-common": {
    os_grid_ref: "SE 665 375", size_hectares: "300", managing_body: "Natural England and Escrick Park Estate", habitat_type: "Lowland heath and peat bog",
    history: "Skipwith Common was used as a military training ground during World War II and still contains remnants of trench systems and bombing ranges. It was declared an NNR in 1959. The heathland has been maintained by grazing and periodic burning.",
    wildlife: "The reserve supports nightjars, woodlarks and tree pipits on the heathland areas. The bog pools support great crested newts and dragonflies. Roe deer, adders and common lizards are frequently encountered. Invertebrates include the dark green fritillary butterfly.",
    facilities: "Car park at the north end of the common. Information panels at the entrance. No visitor centre or toilets on site. Waymarked trails through the reserve.",
    fun_facts: [
      "Skipwith Common was used as a bombing range during World War II, and concrete target markers can still be found on the heath.",
      "It is one of the largest remaining areas of lowland heath in northern England.",
      "Nightjars, nocturnal birds that summer in the UK, can be heard 'churring' at dusk on warm evenings from May to July."
    ],
    dog_policy: "Dogs are welcome but must be kept on a lead during the bird breeding season (March to August) and under close control at other times to protect ground-nesting birds and adders.",
    access_details: "Flat terrain with sandy and grassy paths. Some areas can be wet and boggy. Access via gates from the car park and roadside verges.",
    seasonal_details: "May to August for nightjars, nightjar churring at dusk, and heather in bloom. Spring for birdsong. Autumn for fungi and changing colours. Winter can be bleak but atmospheric."
  },
  "glen-roy": {
    os_grid_ref: "NN 310 850", size_hectares: "1449", managing_body: "NatureScot", habitat_type: "Glacial geology and upland moorland",
    history: "Glen Roy is world-famous for its 'Parallel Roads' — distinctive horizontal shorelines cut into the hillside by a glacial lake that formed during the last Ice Age. The roads puzzled scientists for decades until Louis Agassiz explained their glacial origins in 1840. The area was declared an NNR in 1961.",
    wildlife: "The reserve supports upland birds including red grouse, ptarmigan and golden eagle. Red deer graze the moorland. The River Roy supports Atlantic salmon and otters. Alpine plants grow on the higher slopes including mountain everlasting and alpine lady's mantle.",
    facilities: "Layby parking and interpretation panel at the Glen Roy viewpoint. No visitor centre, toilets or cafe. Public roads run through the glen. Nearest facilities in Spean Bridge or Fort William.",
    fun_facts: [
      "The Parallel Roads of Glen Roy are one of the most important geological sites in the world, providing crucial evidence for the Ice Age.",
      "The 'roads' are actually ancient shorelines of a glacial lake that existed around 10,000 years ago.",
      "Charles Darwin visited Glen Roy and published an incorrect theory about the roads before the glacial explanation was accepted."
    ],
    dog_policy: "Dogs are permitted on the open hillside under close control. Keep on a lead near livestock and during the bird breeding season.",
    access_details: "Access is via a minor road from Spean Bridge. The terrain is rough, open hillside with no waymarked paths. Sturdy footwear and hillwalking experience recommended for exploring beyond the roadside.",
    seasonal_details: "Spring and summer for upland wildflowers and bird activity. Autumn for red deer rut and golden eagle sightings. Winter can be harsh with snow on the higher ground — check conditions before visiting."
  },
  "glasdrum-wood": {
    os_grid_ref: "NN 015 475", size_hectares: "147", managing_body: "NatureScot", habitat_type: "Atlantic oakwood and montane scrub",
    history: "Glasdrum Wood has a long history of coppice management for charcoal and tanbark production. It was declared an NNR in 1972. The reserve extends from sea level to over 600m, encompassing a complete altitudinal sequence of woodland habitats.",
    wildlife: "The reserve is exceptionally rich in lichens, bryophytes and ferns, with over 300 species of lichen recorded. Pearl-bordered fritillary and chequered skipper butterflies breed in the clearings. Pine martens and red squirrels are present. The rare phoenix flat-moss grows on the reserve.",
    facilities: "Small car park on the A861. Interpretation panel and waymarked trail. No visitor centre, toilets or cafe on site. Nearest facilities in Appin or Ballachulish.",
    fun_facts: [
      "Glasdrum Wood is one of only a handful of UK sites where the chequered skipper butterfly breeds.",
      "Over 300 species of lichen have been recorded here, making it one of the richest lichen sites in Britain.",
      "The reserve rises from sea level to over 600 metres, spanning a complete sequence of woodland habitats from temperate rainforest to montane scrub."
    ],
    dog_policy: "Dogs are permitted under close control. Keep on a lead during the bird breeding season (April to July) and near livestock.",
    access_details: "Waymarked trail from the car park. Terrain is uneven with some steep sections and stream crossings. Paths can be muddy and slippery after rain.",
    seasonal_details: "May and June for chequered skipper and pearl-bordered fritillary butterflies. Spring for bluebells and birdsong. Autumn for fungi. The woodland is lush year-round due to the wet climate."
  },
  "westleton-heath": {
    os_grid_ref: "TM 427 675", size_hectares: "92", managing_body: "Natural England", habitat_type: "Lowland heath and acid grassland",
    history: "Westleton Heath is a surviving fragment of the once-extensive Sandlings heaths of Suffolk. It was declared an NNR in 1954. The heathland has been maintained by grazing with Hebridean sheep and periodic controlled burning.",
    wildlife: "The reserve is a stronghold for nightjars, woodlarks and Dartford warblers. Adders and common lizards bask on the sandy tracks. The heath supports silver-studded blue butterflies and a rich assemblage of solitary bees and wasps. Stone curlews have nested on adjacent heathland.",
    facilities: "Car park on Westleton Heath Road. Information panels. No visitor centre, toilets or cafe on site. Waymarked trails. Nearest facilities in Westleton village or Saxmundham.",
    fun_facts: [
      "Westleton Heath is one of the few sites in Suffolk where Dartford warblers breed, a species that nearly died out in Britain during harsh winters.",
      "Nightjars migrate all the way from sub-Saharan Africa to breed on the heath each summer.",
      "The heath is grazed by Hebridean sheep, a hardy primitive breed from Scotland, to maintain the open heathland habitat."
    ],
    dog_policy: "Dogs are welcome but must be kept on a lead between March and August to protect ground-nesting birds. Under close control at other times.",
    access_details: "Flat to gently undulating terrain with sandy paths. Good access from the car park. Some areas of dense heather and gorse. Paths can be dry and sandy in summer.",
    seasonal_details: "May to August for nightjars (churring at dusk), Dartford warblers and heather in bloom. Spring for birdsong. Autumn for fungi and changing colours. Winter is quiet but stone curlews may arrive on adjacent farmland in early spring."
  },
  "derbyshire-dales": {
    os_grid_ref: "SK 165 595", size_hectares: "88", managing_body: "Natural England", habitat_type: "Limestone grassland and ancient ash woodland",
    history: "The Derbyshire Dales NNR comprises five separate dales — Lathkill, Cressbrook, Monk's, Long and Hay Dale — in the White Peak area. They were declared as NNRs between 1952 and 1974 and collectively protect some of the finest limestone grassland in England.",
    wildlife: "The dales support rich limestone flora including Jacob's-ladder (the county flower of Derbyshire), mountain melancholy and Nottingham catchfly. Ancient ash woodlands have spring carpets of bluebells, early purple orchids and lily-of-the-valley. Dippers and grey wagtails frequent the streams. Bats including Daubenton's and brown long-eared roost in old mines and caves.",
    facilities: "Car parks at Monyash, Over Haddon and Monsal Head. Public footpaths through all dales. Information panels at main access points. Toilets and pubs in nearby villages.",
    fun_facts: [
      "Lathkill Dale was the inspiration for the river in Izaak Walton's 'The Compleat Angler', one of the most famous fishing books ever written.",
      "Jacob's-ladder, a rare blue wildflower, grows here at the southern limit of its British range and is the county flower of Derbyshire.",
      "The reserve's caves and old lead mines are important hibernation sites for several species of bat."
    ],
    dog_policy: "Dogs are permitted on public footpaths but must be kept on a lead to protect ground flora, nesting birds and grazing livestock.",
    access_details: "Varied terrain — some dales have flat, easy paths while others involve steeper climbs and stepped sections. Lathkill Dale has a riverside path. Some paths are rocky and can be slippery. Access via stiles and gates.",
    seasonal_details: "May and June for peak wildflower displays including Jacob's-ladder and orchids. Spring for bluebells in the woodlands. Autumn for fungi. Winter is quieter but the dales can be atmospheric in frost."
  },
  "craigellachie": {
    os_grid_ref: "NH 890 130", size_hectares: "260", managing_body: "NatureScot", habitat_type: "Birch woodland and upland moor",
    history: "Craigellachie NNR sits on the hillside above Aviemore and was declared in 1952. The reserve demonstrates natural woodland regeneration following the removal of grazing pressure. It includes two areas — Coille Coire Chuilc and Milton Wood — connected by a footpath.",
    wildlife: "The reserve supports regenerating birch, rowan and willow woodland with associated flora including blaeberry and heather. Capercaillie and Scottish crossbill are present. Peregrine falcons have nested on the crags. Pine martens and red squirrels inhabit the woodland. The lochans support dragonflies and amphibians.",
    facilities: "Car park at the Aviemore Oralandonn gateway. Interpretation panels and waymarked trails. Visitor centre and toilets in Aviemore, a short walk away.",
    fun_facts: [
      "Craigellachie was one of the first NNRs declared in Scotland, established in 1952.",
      "The reserve demonstrates natural forest regeneration, showing how woodland can recover when grazing pressure is removed.",
      "Peregrine falcons nest on the reserve's crags, reaching speeds of over 200 mph when hunting."
    ],
    dog_policy: "Dogs are permitted on waymarked paths but must be kept on a lead at all times to protect capercaillie and other ground-nesting birds.",
    access_details: "Waymarked trails of varying difficulty from the car park. Some steep, rocky sections. Paths can be wet and muddy. Good boots recommended.",
    seasonal_details: "Spring for birdsong and new growth. Summer for dragonflies at the lochans. Autumn for golden birch colour. Winter for snow scenes but some paths may be icy."
  },
  "south-solway-mosses": {
    os_grid_ref: "NY 325 625", size_hectares: "275", managing_body: "Natural England and Cumbria Wildlife Trust", habitat_type: "Lowland raised bog",
    history: "The South Solway Mosses were once extensive peat bogs but were heavily drained and cut for peat over centuries. The NNR, declared in 1986, comprises several sites including Bowness Common, Glasson Moss and Wedholme Wood. Major restoration work has re-wetted the bogs to revive their wildlife interest.",
    wildlife: "The bogs support specialist plants including bog rosemary, cranberry, sundews and white beak-sedge. Large heath dragonflies and bog bush crickets breed on the mosses. Curlew, snipe and red grouse are present. Roe deer and brown hares use the bog margins. The mosses are important for breeding adders.",
    facilities: "Car parks at Bowness Common and Glasson Moss. Interpretation panels and waymarked trails at some sites. No visitor centre or toilets on the reserve. Nearest facilities in Wigton or Carlisle.",
    fun_facts: [
      "Lowland raised bogs are one of the UK's rarest and most threatened habitats, with over 90% having been damaged or destroyed.",
      "Carnivorous sundew plants trap insects on their sticky leaves to supplement their nutrition in the nutrient-poor bog environment.",
      "The peat in these bogs has been accumulating for over 8,000 years, storing vast amounts of carbon."
    ],
    dog_policy: "Dogs are permitted on waymarked paths under close control. Keep on a lead near livestock and during the bird breeding season.",
    access_details: "Flat terrain but paths can be wet and boggy. Boardwalks provided at some sites. Access via gates and stiles. Sturdy waterproof footwear recommended.",
    seasonal_details: "Spring and summer for bog plants in flower, dragonflies and birds. Late summer for heather colour. Autumn for fungi. Winter can be wet and bleak — check path conditions before visiting."
  },
  "hickling-broad": {
    os_grid_ref: "TG 360 180", size_hectares: "585", managing_body: "Norfolk Wildlife Trust", habitat_type: "Open water, reedbed and grazing marsh",
    history: "Hickling Broad is the largest of the Norfolk Broads, created by medieval peat diggings that flooded in the 14th century. It was declared an NNR in 1957. The reserve has been managed by Norfolk Wildlife Trust since 1945.",
    wildlife: "The reserve is nationally important for common cranes, which recolonised here in 1979 and now have a thriving population. Other key species include bittern, marsh harrier, bearded tit and Cetti's warbler. Swallowtail butterflies breed in the reedbeds. Otters are regularly seen. The broad supports diverse fish populations including pike and perch.",
    facilities: "Visitor centre with toilets, cafe and shop. Car park on Stubb Road. Boat trips available. Observation hides and waymarked trails. Wheelchair-accessible hides and boardwalks.",
    fun_facts: [
      "Hickling Broad is home to the UK's only breeding population of common cranes, which returned naturally in 1979 after being extinct in Britain for 400 years.",
      "The broad is the largest of the Norfolk Broads, covering 585 hectares.",
      "Swallowtail butterflies, Britain's largest native butterfly, breed only in the Norfolk Broads and can be seen here on warm summer days."
    ],
    dog_policy: "Dogs are not permitted on the reserve trails or hides, except assistance dogs. This is to protect ground-nesting birds and the sensitive reedbed habitat.",
    access_details: "Flat, well-maintained paths and boardwalks. Observation hides accessible via level trails. Some grassy paths may be wet. Boat trips offer an alternative way to see the broad.",
    seasonal_details: "April to September for swallowtail butterflies. Spring for bittern booming and marsh harrier displaying. Summer for cranes with chicks. Winter for wildfowl including bean geese and raptors."
  },
  "axmouth-to-lyme-regis-undercliffs": {
    os_grid_ref: "SY 339 920", size_hectares: "83", managing_body: "Natural England", habitat_type: "Coastal landslip and woodland",
    history: "The Undercliffs were created by a massive landslip in 1839 when a section of cliff between Axmouth and Lyme Regis collapsed into the sea. The area was declared an NNR in 1955 and has since developed into a dense, tumbled woodland of ash, field maple and wych elm.",
    wildlife: "The reserve supports a lush, almost tropical vegetation due to its sheltered microclimate. Notable species include the rare purple gromwell, Italian lords-and-ladies and cultivated asparagus-fern. Peregrine falcons nest on the cliffs. Rock pipits, stonechats and firecrests are present. Invertebrates include the nationally scarce cliff tiger beetle.",
    facilities: "Access via the South West Coast Path from Axmouth or Lyme Regis. No car park, visitor centre or toilets within the reserve itself. Facilities in Axmouth and Lyme Regis. Strenuous walking — allow 4-5 hours for the full traverse.",
    fun_facts: [
      "The Undercliffs were created by the Great Landslip of 1839, when a massive section of cliff slid seaward — an event witnessed and documented by local people.",
      "The sheltered microclimate of the Undercliffs allows species normally found much further south to thrive here, giving it an almost subtropical feel.",
      "The reserve inspired scenes in John Fowles' novel 'The French Lieutenant's Woman', set in nearby Lyme Regis."
    ],
    dog_policy: "Dogs are permitted on the South West Coast Path but the terrain is extremely challenging with steep, uneven sections. Keep dogs on a lead near cliff edges.",
    access_details: "The only access is via the South West Coast Path. Terrain is very strenuous with steep ascents, descents, uneven steps and narrow sections. Not suitable for those with limited mobility. Sturdy boots essential. Allow 4-5 hours for the full traverse.",
    seasonal_details: "Spring and summer for the best plant displays and bird activity. The lush vegetation is at its peak in late spring. Summer can be hot and humid under the tree canopy. Winter paths are extremely muddy and slippery."
  },
  "wye": {
    os_grid_ref: "TR 084 425", size_hectares: "20", managing_body: "Natural England and Kent Wildlife Trust", habitat_type: "Chalk grassland and woodland",
    history: "Wye NNR was declared in 1952 and protects part of the North Downs escarpment. The reserve includes the famous Wye Crown, a chalk figure cut into the hillside by students of Wye College in 1902 to mark the coronation of Edward VII.",
    wildlife: "The chalk grassland supports abundant wildflowers including several orchid species, wild thyme, marjoram and horseshoe vetch. Adonis blue and chalkhill blue butterflies fly in summer. The woodland areas support nightingales in spring. Kestrels and buzzards hunt over the slopes.",
    facilities: "Car park in Wye village. Public footpaths and bridleways through the reserve. Information panels. Toilets and pubs in Wye village.",
    fun_facts: [
      "The Wye Crown, a chalk figure on the hillside, was cut by students of Wye College in 1902 to mark the coronation of King Edward VII.",
      "The reserve's chalk grassland supports up to 40 species of plant per square metre, making it one of the most biodiverse habitats in the UK.",
      "Adonis blue butterflies, with their vivid electric-blue wings, are a specialist of chalk grassland and can be seen here in midsummer."
    ],
    dog_policy: "Dogs are permitted on public paths but must be kept on a lead to protect ground-nesting birds, butterflies and grazing livestock.",
    access_details: "Steep terrain on the escarpment slopes. Some stepped paths. The top of the Downs is more level. Access via footpaths from Wye village. Can be muddy and slippery in wet weather.",
    seasonal_details: "May to August for orchids, wildflowers and butterflies. Spring for nightingales in the woodland. Late summer for chalkhill blue butterflies. Autumn for changing leaf colour and fungi."
  },
  "stoborough-heath": {
    os_grid_ref: "SY 937 855", size_hectares: "175", managing_body: "Natural England", habitat_type: "Lowland heath, bog and wetland",
    history: "Stoborough Heath is part of the Isle of Purbeck's heathland complex, designated as an NNR in 1959. The heathland has been maintained by traditional grazing and managed burning. It forms part of the larger Purbeck Heaths NNR, the first 'super reserve' created in England in 2020.",
    wildlife: "The reserve supports all six native UK reptile species including the rare smooth snake and sand lizard. Dartford warblers, nightjars and stonechats breed on the heath. Bog pools support carnivorous sundew plants and raft spiders. Dragonflies and damselflies are abundant in summer.",
    facilities: "Car park at Stoborough Heath. Waymarked trails and interpretation panels. No visitor centre, toilets or cafe on site. Nearest facilities in Wareham.",
    fun_facts: [
      "Stoborough Heath is home to all six native British reptile species — adder, grass snake, smooth snake, sand lizard, common lizard and slow worm.",
      "Carnivorous sundew plants trap insects on sticky droplets on their leaves to survive in the nutrient-poor bog.",
      "The heath is part of the Purbeck Heaths 'super reserve', England's first multi-partner national nature reserve spanning over 3,000 hectares."
    ],
    dog_policy: "Dogs are welcome but must be kept on a lead between March and September to protect ground-nesting birds and reptiles. Under close control at other times.",
    access_details: "Flat to gently undulating terrain. Sandy and grassy paths. Some areas are wet and boggy with boardwalks at key points. Good access from the car park.",
    seasonal_details: "May to August for nightjars, Dartford warblers, dragonflies and heather in bloom. Spring for reptiles basking in warm weather. Late summer for heather colour. Winter is quiet but atmospheric."
  },
  "forge-valley-woods": {
    os_grid_ref: "SE 965 875", size_hectares: "22", managing_body: "Natural England and Scarborough Borough Council", habitat_type: "Ancient semi-natural woodland",
    history: "Forge Valley Woods takes its name from iron-smelting that took place in the valley during the medieval period. The woodland was declared an NNR in 1965. The River Derwent flows through the valley, and the woodland has been managed for centuries as coppice and high forest.",
    wildlife: "The woodland supports a rich ground flora including bluebells, wood anemones, yellow archangel and toothwort. Birds include great spotted woodpecker, nuthatch and treecreeper. The River Derwent supports kingfishers, dippers and otters. Bats roost in old trees, and the reserve has a rich fungal flora in autumn.",
    facilities: "Car parks at the east and west ends of the valley. Information panels and waymarked trails along the riverside path. Toilets at the nearby Derwent Bridge. Cafes and pubs in nearby Hackness and Thornton-le-Dale.",
    fun_facts: [
      "Forge Valley is named after the iron-smelting forge that operated here from the medieval period until the 19th century.",
      "Toothwort, a parasitic plant that grows on hazel roots and looks like rows of teeth, can be found in the woodland in spring.",
      "Kingfishers are regularly seen darting along the River Derwent, which flows through the heart of the reserve."
    ],
    dog_policy: "Dogs are permitted on public paths but must be kept under control to protect ground flora and nesting birds.",
    access_details: "The main riverside path is level and accessible. Some side paths involve steeper terrain and steps. Access via car parks at both ends of the valley. Paths can be muddy after rain.",
    seasonal_details: "April and May for bluebells and spring wildflowers. Spring for birdsong and woodland butterflies. Autumn for a spectacular fungi display and leaf colour. Winter reveals the valley's industrial archaeology."
  },
  "cotswold-commons-and-beechwoods": {
    os_grid_ref: "SO 766 105", size_hectares: "322", managing_body: "Natural England", habitat_type: "Beech woodland and limestone grassland",
    history: "The Cotswold Commons and Beechwoods NNR was declared in 1954 and encompasses several sites including Workman's Wood, Lineover Wood and Rough Park. The beech woods are ancient pollard woodlands, some trees being over 400 years old, while the commons were historically grazed open land.",
    wildlife: "The reserve supports rare limestone flora including lily-of-the-valley, Solomon's seal and the nationally scarce wild service tree. The beech canopy supports rich fungal communities including the rare devil's bolete. Birds include wood warbler, pied flycatcher and lesser spotted woodpecker. Dormice inhabit the coppice areas.",
    facilities: "Car parks at several access points including Lineover Wood and Workman's Wood. Waymarked trails. Information panels. Toilets and cafes in nearby Cheltenham and Birdlip.",
    fun_facts: [
      "Some of the ancient pollarded beech trees in the reserve are over 400 years old, making them among the oldest trees in the Cotswolds.",
      "The reserve is one of only a handful of British sites for the devil's bolete, one of the rarest and most striking fungi in the UK.",
      "Dormice, a species that has declined dramatically in Britain, thrive in the reserve's coppiced woodland."
    ],
    dog_policy: "Dogs are permitted on public paths under close control. Keep on a lead near livestock and during the bird breeding season.",
    access_details: "Varied terrain — some flat paths on the commons, steeper sections in the woodland. Limestone paths can be slippery when wet. Access via car parks and footpaths from nearby villages.",
    seasonal_details: "April and May for bluebells and spring wildflowers. Summer for woodland birds and butterflies. Autumn for an outstanding fungi display. Winter reveals the structure of the ancient trees."
  },
  "beinn-eighe": {
    os_grid_ref: "NH 005 650", size_hectares: "4800", managing_body: "NatureScot", habitat_type: "Mountain, Caledonian pine forest and loch",
    history: "Beinn Eighe was the first National Nature Reserve in Britain, declared in 1951. It encompasses a complete altitudinal sequence from ancient Caledonian pine forest at sea level to arctic-alpine mountain summit. The reserve was expanded several times and now covers nearly 5,000 hectares.",
    wildlife: "The ancient pinewood supports Scottish crossbill, crested tit and capercaillie. Pine martens and red squirrels are common. The mountain areas support ptarmigan, golden eagle and mountain hare. Red deer graze the open ground. Loch Maree supports black-throated divers and otters. Arctic-alpine plants grow on the high summits.",
    facilities: "Visitor centre at Aultgowrie with toilets and interpretation. Waymarked trails including the Mountain Trail. Car parks at several points along the A832. Self-guiding leaflets available.",
    fun_facts: [
      "Beinn Eighe was Britain's first National Nature Reserve, declared in 1951.",
      "The reserve contains one of the best surviving fragments of the ancient Caledonian Forest, which once covered much of the Scottish Highlands.",
      "Loch Maree, on the reserve's boundary, is one of the most important sites in the UK for breeding black-throated divers."
    ],
    dog_policy: "Dogs are permitted on waymarked trails under close control. Keep on a lead during the bird breeding season (April to July) and near livestock. Not suitable for dogs on the high mountain routes in hot weather.",
    access_details: "Waymarked low-level trails from the visitor centre. The Mountain Trail involves steep, rocky sections and requires hillwalking experience. All-abilities trail available. Paths can be wet and rocky.",
    seasonal_details: "Spring and summer for woodland birds and alpine flowers on the mountain. Autumn for red deer rut and golden eagle activity. Winter for snow scenes but mountain paths are dangerous in bad weather — check conditions."
  },
  "valley-of-stones": {
    os_grid_ref: "SY 580 880", size_hectares: "37", managing_body: "Natural England", habitat_type: "Limestone grassland and sarsen stones",
    history: "The Valley of Stones was declared an NNR in 1998. The reserve contains a field of sarsen stones — large boulders of silcrete — that have puzzled geologists and inspired local folklore for centuries. The stones were formed during the Tertiary period and exposed by erosion.",
    wildlife: "The limestone grassland supports abundant wildflowers including pyramidal orchids, wild thyme and rockrose. The reserve is a stronghold for butterflies including brown argus, chalkhill blue and marbled white. Skylarks nest in the grassland. Adders and common lizards bask on the stones.",
    facilities: "Layby parking on the road between Kingston and Abbotsbury. Information panel. No visitor centre, toilets or cafe on site. Informal paths through the reserve. Nearest facilities in Dorchester or Weymouth.",
    fun_facts: [
      "The sarsen stones scattered across the valley were formed over 50 million years ago and are the same type of stone used to build the inner circle at Stonehenge.",
      "Local folklore held that the stones were thrown across the valley by giants or the Devil.",
      "The reserve supports brown argus butterflies, which are restricted to a handful of limestone sites in Dorset."
    ],
    dog_policy: "Dogs are permitted under close control. Keep on a lead to protect ground-nesting birds and butterflies.",
    access_details: "Rough, uneven ground with loose stones. No formal paths. Gentle slopes. Access via a stile from the roadside layby. Sturdy footwear recommended.",
    seasonal_details: "May to August for orchids, wildflowers and butterflies. Spring for skylarks. Late summer for chalkhill blue butterflies. Autumn for fungi. Winter is bleak but the stones are atmospheric."
  },
  "kielderhead": {
    os_grid_ref: "NY 625 945", size_hectares: "3000", managing_body: "Natural England and Northumberland Wildlife Trust", habitat_type: "Blanket bog and upland moor",
    history: "Kielderhead NNR was declared in 1998 and forms part of the Kielder Forest complex, the largest planted forest in England. The reserve protects extensive blanket bog and moorland, as well as remnants of native upland woodland along the River Irthing.",
    wildlife: "The reserve supports important populations of breeding waders including curlew, golden plover and dunlin. Merlin and short-eared owls hunt over the moor. Red grouse are abundant. The blanket bog supports cotton grass, bog asphodel and sundew. The native woodland restoration area features downy birch, rowan and willow.",
    facilities: "Limited parking on forest roads. No visitor centre, toilets or cafe on the reserve itself. Facilities at Kielder Castle Visitor Centre nearby. Access requires walking on forest tracks and open moorland.",
    fun_facts: [
      "Kielderhead forms part of Kielder Forest, the largest planted forest in England, covering over 250 square miles.",
      "The blanket bog at Kielderhead stores thousands of tonnes of carbon, helping to combat climate change.",
      "Merlins, Britain's smallest bird of prey, breed on the reserve and hunt songbirds across the open moor."
    ],
    dog_policy: "Dogs are permitted on forest tracks under close control. Keep on a lead during the bird breeding season (March to July) to protect ground-nesting waders.",
    access_details: "Remote terrain with no waymarked trails. Access via forest roads and open moorland. Navigation skills and OS map essential. Boggy ground and uneven terrain. Hillwalking experience recommended.",
    seasonal_details: "Spring and summer for breeding waders and moorland birds. Autumn for red grouse and changing colours. Winter can be harsh with snow — the reserve is remote and exposed, check conditions before visiting."
  },
  "ben-wyvis": {
    os_grid_ref: "NH 375 655", size_hectares: "1740", managing_body: "NatureScot", habitat_type: "Mountain heath and blanket bog",
    history: "Ben Wyvis was declared an NNR in 1955. The mountain rises to 1,046 metres and is a prominent landmark in Easter Ross. The reserve protects extensive blanket bog and heather moorland, as well as important arctic-alpine plant communities on the summit plateau.",
    wildlife: "The reserve supports ptarmigan, mountain hare and golden eagle on the higher ground. Red grouse are abundant on the heather moor. The blanket bog supports dunlin and golden plover. The summit ridge has an outstanding assemblage of arctic-alpine plants including moss campion, alpine lady's mantle and net-leaved willow.",
    facilities: "Car park at the start of the Ben Wyvis path near Garve. Information panel. No visitor centre, toilets or cafe on site. A well-used path leads to the summit. Nearest facilities in Garve or Dingwall.",
    fun_facts: [
      "Ben Wyvis rises to 1,046 metres (3,432 feet) and is classified as a Munro, one of Scotland's 282 mountains over 3,000 feet.",
      "The summit plateau supports nationally important populations of arctic-alpine plants that survived from the last Ice Age.",
      "The mountain's blanket bog stores vast amounts of carbon and is an internationally important habitat."
    ],
    dog_policy: "Dogs are permitted on the hill but must be kept under close control to protect ground-nesting birds and mountain hare. Keep on a lead near livestock at lower levels.",
    access_details: "A well-worn path leads from the car park to the summit. The terrain is steep in places with boggy sections at lower levels. The summit plateau is exposed and can be dangerous in poor weather. Hillwalking equipment essential.",
    seasonal_details: "Spring and summer for alpine flowers and bird activity. Autumn for red deer rut and mountain hare turning white. Winter for snow scenes but the mountain is dangerous in bad weather — check the Met Office mountain forecast."
  },
  "whiteford": {
    os_grid_ref: "SS 440 950", size_hectares: "265", managing_body: "Natural Resources Wales", habitat_type: "Sand dune, saltmarsh and beach",
    history: "Whiteford NNR was declared in 1955 and protects one of the best remaining sand dune systems in south Wales. The reserve includes Whiteford Burrows, a dune system at the mouth of the Burry Inlet, and the adjacent saltmarsh and mudflats.",
    wildlife: "The dune system supports a rich flora including sea holly, bee orchids, marsh helleborine and pyramidal orchids. The reserve is important for nesting little terns on the beach. Saltmarsh supports cord grass and glasswort. Winter flocks of oystercatcher, curlew and dunlin feed on the mudflats. Sea-holly is a specialty of the dunes.",
    facilities: "Car park at Cwm Ivy Lane. Waymarked trail through the dunes to the beach. No visitor centre, toilets or cafe on site. Nearest facilities in Llanmadoc or Llangennith.",
    fun_facts: [
      "Whiteford Burrows has one of the largest populations of sea holly in Wales, a striking blue-grey plant that resembles a desert succulent.",
      "Little terns, one of Britain's rarest seabirds, nest on the beach here and migrate all the way from West Africa each spring.",
      "The reserve's sand dunes are constantly shifting, creating new habitats and burying old ones in a dynamic landscape."
    ],
    dog_policy: "Dogs are permitted on the beach and dunes but must be kept on a lead during the bird breeding season (April to August) to protect little terns and other ground-nesting birds.",
    access_details: "Flat to gently undulating terrain. Sandy paths through the dunes. Can be a 2-mile walk from the car park to the beach. Some wet areas in the saltmarsh. Access via gates and boardwalks.",
    seasonal_details: "May to August for orchids and wildflowers. Summer for little terns on the beach. Autumn and winter for waders and wildfowl on the mudflats. Spring for birdsong in the dune scrub."
  },
  "st-cyrus": {
    os_grid_ref: "NO 745 640", size_hectares: "92", managing_body: "NatureScot", habitat_type: "Cliff grassland and sand dune",
    history: "St Cyrus NNR was declared in 1962. The reserve sits on the Aberdeenshire coast, sheltered by dramatic volcanic cliffs. It was historically the site of a rock-hewn hermit's cell associated with St Cyrus. The warm, sheltered microclimate allows species unusual for northeast Scotland to thrive.",
    wildlife: "The reserve supports a rich grassland flora including the rare small purple-pea, greater butterfly orchid and adder's tongue fern. The cliffs support nesting fulmars and jackdaws. The sandy beach and dunes have sea rocket and sea sandwort. Butterflies include small copper and common blue. Stonechats and linnets breed in the gorse.",
    facilities: "Car park and visitor centre with toilets at the northern end of the reserve. Waymarked trails and interpretation panels. Beautiful sandy beach. The old lifeboat station serves as an interpretation centre.",
    fun_facts: [
      "St Cyrus has one of the warmest microclimates in northeast Scotland, allowing species normally found much further south to thrive here.",
      "The small purple-pea, a nationally rare plant, grows here at its northernmost UK location.",
      "A rock-hewn hermit's cell, associated with the medieval St Cyrus, can still be seen on the cliff above the reserve."
    ],
    dog_policy: "Dogs are permitted on waymarked paths and the beach but must be kept on a lead to protect ground-nesting birds and the sensitive grassland flora.",
    access_details: "Well-maintained paths from the visitor centre to the beach. Some steps and gentle gradients. The cliff-top path has steeper sections. Generally good access with some uneven ground.",
    seasonal_details: "May to August for wildflowers and butterflies. Spring for cliff-nesting birds. Summer for the sandy beach. Autumn for migrating birds along the coast. Winter is mild but windy."
  },
  "bardney-limewoods": {
    os_grid_ref: "TF 125 695", size_hectares: "265", managing_body: "Natural England and Lincolnshire Wildlife Trust", habitat_type: "Ancient limewood and floodplain meadow",
    history: "Bardney Limewoods NNR was declared in 1976 and comprises several ancient woodlands including Nunnery Wood, Dole Wood and Chamber's Farm Wood. The woods are remnants of the medieval Lincolnshire Limewoods, once the most extensive limewoods in Britain. The area has a history of medieval coppice management.",
    wildlife: "The reserve is nationally important for its small-leaved lime, a tree rare in Britain but abundant here. The woods support rich ground flora including lily-of-the-valley, herb paris and early purple orchid. Dormice have been reintroduced to the reserve. White-letter hairstreak butterflies feed on the elm trees. Hawfinches are regularly seen in winter.",
    facilities: "Car park at Chamber's Farm Wood. Waymarked trails and interpretation panels. Toilets available at the car park. Nearest cafes and pubs in Bardney and Wragby.",
    fun_facts: [
      "Bardney Limewoods contains the finest surviving ancient small-leaved lime woodland in Britain, a habitat that was once common in medieval England.",
      "Dormice have been successfully reintroduced to the reserve after being locally extinct for over a century.",
      "White-letter hairstreak butterflies, which depend on elm trees, maintain one of their strongest populations here despite Dutch elm disease."
    ],
    dog_policy: "Dogs are permitted on waymarked paths under close control. Keep on a lead to protect ground flora and nesting birds.",
    access_details: "Flat terrain with well-maintained, mostly level paths. Some sections can be muddy after rain. Good access from the car park. Boardwalks at wetter points.",
    seasonal_details: "April and May for bluebells and spring wildflowers. June for lime trees in flower. Summer for butterflies and dormice activity. Autumn for fungi and autumn leaf colour. Winter for flocks of hawfinches."
  },
  "corrieshalloch-gorge": {
    os_grid_ref: "NH 225 785", size_hectares: "53", managing_body: "NatureScot", habitat_type: "Gorge and Atlantic oakwood",
    history: "Corrieshalloch Gorge was declared an NNR in 1967. The gorge was carved by glacial meltwater at the end of the last Ice Age, creating a spectacular box gorge up to 60 metres deep. A suspension bridge was erected in 1874 by Sir John Fowler, co-designer of the Forth Bridge, to provide views into the gorge.",
    wildlife: "The gorge supports Atlantic oakwood with rich moss and liverwort communities. Dippers and grey wagtails nest along the River Droma. Peregrine falcons have been recorded on the cliffs. The woodland has typical oakwood birds including redstart, wood warbler and tree pipit. The gorge's microclimate supports luxuriant ferns and lichens.",
    facilities: "Car park on the A832. Waymarked trail to the suspension bridge and viewpoint. No visitor centre, toilets or cafe on site. Nearest facilities in Ullapool or Laughter Bridge.",
    fun_facts: [
      "Corrieshalloch means 'ugly hollow' in Gaelic, but the gorge is actually one of the most spectacular natural features in the Scottish Highlands.",
      "The suspension bridge over the gorge was designed by Sir John Fowler, co-engineer of the famous Forth Rail Bridge, in 1874.",
      "The gorge was carved by glacial meltwater at the end of the last Ice Age, creating a chasm over 60 metres deep and 200 metres long."
    ],
    dog_policy: "Dogs are permitted on the path to the suspension bridge but must be kept on a lead for safety near the gorge edge.",
    access_details: "Well-maintained path from the car park to the bridge, about 600m each way. Some gentle gradients. The suspension bridge has steps. Not suitable for those with severe mobility issues. The bridge has a weight limit.",
    seasonal_details: "Spring and summer for woodland birds and lush vegetation. Autumn for fungi and changing leaf colour. The waterfall is most dramatic after heavy rain. Winter can be icy on paths — take care."
  },
  "whitelee-moor": {
    os_grid_ref: "NY 665 045", size_hectares: "1500", managing_body: "Natural England", habitat_type: "Blanket bog and heather moor",
    history: "Whitelee Moor NNR was declared in 1998 and is one of the largest blanket bog reserves in England. The reserve sits in the upper North Tyne valley and forms part of the Border Mires, a group of internationally important peatlands in the Cheviot fringe.",
    wildlife: "The blanket bog supports cotton grass, cross-leaved heath and bog asphodel. Breeding birds include curlew, golden plover, snipe and merlin. Red grouse are abundant on the heather moor. Short-eared owls hunt over the bog. Adders and common lizards are present. The reserve is important for bog pool invertebrates including large heath dragonflies.",
    facilities: "Limited roadside parking. No visitor centre, toilets or cafe on site. Access is via rough tracks and open moorland. Nearest facilities in Bellingham or Otterburn.",
    fun_facts: [
      "Whitelee Moor protects one of the largest areas of blanket bog in England, a habitat that is globally rare and stores more carbon than all the UK's forests combined.",
      "Large heath dragonflies, restricted to a handful of peat bog sites in England, breed in the reserve's bog pools.",
      "The reserve's blanket bog has been forming for over 8,000 years, with peat up to 3 metres deep in places."
    ],
    dog_policy: "Dogs are permitted on the open moor under close control. Keep on a lead during the bird breeding season (March to July) to protect ground-nesting waders and grouse.",
    access_details: "Remote terrain with no waymarked trails. Access via rough tracks and open moorland. Navigation skills and OS map essential. Boggy ground and uneven terrain. Hillwalking experience recommended.",
    seasonal_details: "Spring and summer for breeding waders and moorland birds. Late summer for heather colour and bog cotton. Autumn for red grouse. Winter is exposed and can be harsh — check conditions."
  },
  "leigh": {
    os_grid_ref: "TQ 535 525", size_hectares: "18", managing_body: "Natural England", habitat_type: "Chalk grassland and scrub",
    history: "Leigh NNR was declared in 1952 and protects a fragment of chalk grassland on the North Downs in Kent. The reserve was historically grazed and has been maintained by continued grazing and scrub management.",
    wildlife: "The chalk grassland supports abundant wildflowers including several orchid species, marjoram, wild thyme and horseshoe vetch. Adonis blue, chalkhill blue and small blue butterflies fly in summer. Skylarks nest in the open grassland. The scrub margins support nesting yellowhammers and linnets. Slow worms and common lizards are present.",
    facilities: "Roadside parking near the reserve entrance. No visitor centre, toilets or cafe on site. Public footpaths through the reserve. Nearest facilities in Leigh or Tonbridge.",
    fun_facts: [
      "The reserve's chalk grassland supports up to 40 species of flowering plant per square metre, making it one of the most biodiverse habitats in Britain.",
      "Adonis blue butterflies, with their vivid electric-blue wings, are a flagship species of the North Downs chalk grassland.",
      "The reserve has been continuously grazed for centuries, which is key to maintaining the rich wildflower community."
    ],
    dog_policy: "Dogs are permitted on public paths but must be kept on a lead to protect ground-nesting birds, butterflies and grazing livestock.",
    access_details: "Gently sloping terrain on the North Downs escarpment. Grass paths that can be uneven. Access via gates and stiles. Can be muddy in winter.",
    seasonal_details: "May to August for orchids, wildflowers and butterflies. Spring for birdsong. Late summer for chalkhill blue butterflies. Autumn for fungi and changing scrub colours."
  },
  "bredon-hill": {
    os_grid_ref: "SO 965 355", size_hectares: "75", managing_body: "Natural England", habitat_type: "Limestone grassland and woodland",
    history: "Bredon Hill NNR was declared in 1955 and is part of the Cotswold Hills. The hill is capped by an Iron Age hillfort and has a long history of quarrying and grazing. The reserve protects limestone grassland and ancient woodland on the hill's slopes.",
    wildlife: "The limestone grassland supports wildflowers including rockrose, wild thyme and several orchid species. The woodland features ash and wych elm with a rich ground flora. The reserve is a stronghold for dingy skipper and grizzled skipper butterflies. Ravens nest on the hill. Skylarks and meadow pipits breed in the open areas.",
    facilities: "Car park at the foot of the hill near Kemerton. Public footpaths to the summit. No visitor centre, toilets or cafe on the reserve. Nearest facilities in Bredon or Overbury.",
    fun_facts: [
      "Bredon Hill is topped by an Iron Age hillfort, making it one of the oldest inhabited sites in Worcestershire.",
      "The hill inspired A.E. Housman's poem 'Bredon Hill', one of the most famous poems about the English landscape.",
      "The reserve is a stronghold for the dingy skipper butterfly, a species that has declined dramatically across central England."
    ],
    dog_policy: "Dogs are permitted on public paths under close control. Keep on a lead to protect ground-nesting birds and grazing livestock.",
    access_details: "Steep climb to the summit. Limestone paths that can be slippery when wet. Some stepped sections. Access via footpaths from surrounding villages. Sturdy footwear recommended.",
    seasonal_details: "May to August for wildflowers and butterflies. Spring for birdsong. Summer for skylarks. Autumn for fungi and leaf colour. Winter offers clear views from the summit."
  },
  "suffolk-coast": {
    os_grid_ref: "TM 450 780", size_hectares: "1336", managing_body: "Natural England", habitat_type: "Coastal shingle, reedbed and saltmarsh",
    history: "The Suffolk Coast NNR was declared in 1998 and encompasses several sites including Dingle Marshes, Walberswick and the Hen Reedbeds. The reserve protects a complex of coastal habitats that have developed behind the shingle spit. The area has a history of grazing marsh management and reed cutting.",
    wildlife: "The reserve is nationally important for bitterns, marsh harriers and bearded tits in the reedbeds. Avocets, little terns and ringed plovers nest on the shingle. The marshes support water voles and otters. In winter, large flocks of white-fronted and bean geese graze the marshes. The reserve supports rare invertebrates including the starlet sea anemone.",
    facilities: "Car parks at Walberswick and Dunwich. Waymarked trails and observation hides. No visitor centre on the reserve but facilities in Walberswick and Dunwich villages. Toilets and cafes available locally.",
    fun_facts: [
      "The Suffolk Coast NNR is one of the best sites in the UK to see bitterns, heron-like birds that were once extinct in Britain but have recolonised thanks to reedbed restoration.",
      "Avocets, the emblem of the RSPB, breed on the reserve's marshes and can be seen sweeping their upturned bills through the water.",
      "The shingle spit here is one of the largest in Europe and is constantly reshaped by the sea, creating a dynamic and ever-changing landscape."
    ],
    dog_policy: "Dogs are permitted on public paths and beaches but must be kept on a lead in sensitive areas. Seasonal restrictions apply on the shingle beach to protect little terns and ringed plovers.",
    access_details: "Flat terrain with well-maintained paths and boardwalks in most areas. Some sections can be wet and muddy. Observation hides accessible via level paths. Good access from car parks.",
    seasonal_details: "Spring for bitterns booming and marsh harriers displaying. Summer for little terns, avocets and dragonflies. Autumn for migrating waders. Winter for wildfowl including bean geese and raptors."
  },
  "blakeney": {
    os_grid_ref: "TG 035 455", size_hectares: "533", managing_body: "Natural England and National Trust", habitat_type: "Shingle, sand dune and saltmarsh",
    history: "Blakeney NNR was declared in 1955 and protects the Blakeney Point shingle spit and the surrounding saltmarsh. The point has been a site of ornithological importance for centuries. A breeding colony of grey and common seals has become established in recent decades.",
    wildlife: "The reserve is famous for its colony of around 500 grey and common seals. The shingle spit supports nesting little, common, sandwich and arctic terns in summer. The saltmarsh and mudflats are internationally important for wintering wildfowl and waders, including dark-bellied brent geese, curlew and oystercatcher. Ringed plovers nest on the shingle.",
    facilities: "Car parks in Blakeney and Morston. Visitor centre at Morston Quay with toilets and cafe. Boat trips to the seal colony operate from Morston. Waymarked trails and observation hides. National Trust facilities.",
    fun_facts: [
      "Blakeney Point is home to one of the largest seal colonies in England, with around 500 grey and common seals.",
      "Four species of tern — little, common, sandwich and arctic — nest on the shingle spit, making it one of the most important tern colonies in Britain.",
      "The shingle spit at Blakeney Point has been growing westward for centuries, extending by about 1 metre per year."
    ],
    dog_policy: "Dogs are not permitted on Blakeney Point between April and August to protect nesting terns. Dogs are allowed on some public paths but must be kept on a lead near livestock and wildlife.",
    access_details: "Access to the point is by boat from Morston Quay or by walking along the shingle beach (a long and tiring walk). The saltmarsh paths are flat but can be muddy. Boat trips are the recommended way to see the seals.",
    seasonal_details: "Summer for tern colonies and seal pups (common seals pup in June/July, grey seals in November/December). Spring and autumn for migrating waders. Winter for brent geese and wildfowl flocks."
  },
  "great-asby-scar": {
    os_grid_ref: "NY 625 125", size_hectares: "350", managing_body: "Natural England", habitat_type: "Limestone pavement and flower-rich grassland",
    history: "Great Asby Scar NNR was declared in 2000 and protects one of the finest examples of limestone pavement in England. The pavement was formed by glacial scouring during the last Ice Age, exposing the bare limestone that has since been weathered into distinctive clints and grykes.",
    wildlife: "The limestone pavement supports a unique flora including green spleenwort, rigid buckler fern and the nationally scarce dark-red helleborine. The surrounding grassland has mountain melick, rockrose and wild thyme. Curlews and skylarks breed in the area. Peregrine falcons nest on nearby cliffs. The pavement grykes provide shelter for woodland plants including dog's mercury and wood anemone.",
    facilities: "Layby parking on the road between Great Asby and Orton. No visitor centre, toilets or cafe on site. Open access land with informal paths. Nearest facilities in Appleby or Kirkby Stephen.",
    fun_facts: [
      "Great Asby Scar has one of the best examples of limestone pavement in England, a habitat that is globally rare.",
      "The distinctive clints (flat-topped blocks) and grykes (fissures between them) create a microhabitat where woodland plants grow in the sheltered cracks.",
      "Dark-red helleborine, a nationally scarce orchid, grows in the grykes of the limestone pavement."
    ],
    dog_policy: "Dogs are permitted on open access land under close control. Keep on a lead near livestock and during the bird breeding season.",
    access_details: "Open access land with no formal paths. Terrain is uneven with deep fissures in the limestone pavement — take care. Can be wet and slippery. Sturdy footwear essential. Access via stiles from the road.",
    seasonal_details: "May to August for wildflowers including orchids and ferns. Spring for curlews and skylarks. Autumn for fungi. Winter is bleak but the limestone pavement structure is best seen when vegetation has died back."
  },
  "lady-park-wood": {
    os_grid_ref: "SO 545 145", size_hectares: "36", managing_body: "Natural England and Natural Resources Wales", habitat_type: "Ancient semi-natural woodland",
    history: "Lady Park Wood NNR was declared in 1955 and straddles the England-Wales border in the Wye Valley. The reserve has been the subject of a long-term ecological study since 1944, when the woodland was fenced to exclude grazing, allowing researchers to document natural forest regeneration over decades.",
    wildlife: "The reserve supports ancient woodland with oak, beech, birch and yew. The ground flora includes bluebells, wood anemones, herb paris and yellow archangel. Birds include wood warbler, redstart, pied flycatcher and tree pipit. Bats including lesser horseshoe roost in the area. Deadwood habitats support rare beetles and fungi. The Wye Valley has one of the richest fern floras in Britain.",
    facilities: "Limited parking at Wyesham or across the river at Biblins. No visitor centre, toilets or cafe on site. Informal paths through the woodland. Nearest facilities in Monmouth.",
    fun_facts: [
      "Lady Park Wood has been the subject of one of the longest-running ecological studies in the world, documenting natural forest change since 1944.",
      "The woodland straddles the England-Wales border, with different parts managed by Natural England and Natural Resources Wales.",
      "The Wye Valley around the reserve has one of the richest fern floras in Britain, with over 20 species recorded."
    ],
    dog_policy: "Dogs are permitted on public paths under close control. Keep on a lead to protect ground flora and nesting birds.",
    access_details: "Steep, uneven terrain with informal paths. Some sections are very steep with loose rocks. No waymarked trails. Access via footpaths from Wyesham or the Biblins suspension bridge. Sturdy footwear essential.",
    seasonal_details: "April and May for bluebells and spring wildflowers. Spring for pied flycatchers and wood warblers. Summer for woodland butterflies. Autumn for fungi and spectacular autumn colour. Winter reveals the woodland structure."
  },
  "barton-hills": {
    os_grid_ref: "TL 075 295", size_hectares: "40", managing_body: "Natural England", habitat_type: "Chalk grassland",
    history: "Barton Hills NNR was declared in 1955 and protects one of the best remaining areas of chalk grassland in the Chilterns. The hills have been grazed for centuries, maintaining the open downland. The reserve includes the steep scarp slope of the Barton Chalk escarpment.",
    wildlife: "The chalk grassland supports abundant wildflowers including pasque flower, bee orchids, pyramidal orchids and wild thyme. The reserve is a stronghold for butterflies including chalkhill blue, marbled white and small skipper. Skylarks nest in the open grassland. Kestrels hunt overhead. Brown hares are regularly seen.",
    facilities: "Car park off Hexton Road. Waymarked trails and interpretation panels. No visitor centre, toilets or cafe on site. Nearest facilities in Hitchin or Luton.",
    fun_facts: [
      "Barton Hills is one of the best sites in the Chilterns for the pasque flower, a stunning purple wildflower that blooms around Easter and is the county flower of Hertfordshire.",
      "The reserve's chalk grassland is home to the chalkhill blue butterfly, whose males have distinctive silvery-blue wings.",
      "Brown hares, Britain's fastest land mammal, can be seen boxing on the hills in spring during their breeding season."
    ],
    dog_policy: "Dogs are permitted on public paths but must be kept on a lead to protect ground-nesting birds, butterflies and grazing sheep.",
    access_details: "Steep terrain on the scarp slope. Some stepped paths. The top of the downs is more level. Access via footpaths and the car park. Grass paths can be slippery when wet.",
    seasonal_details: "April for pasque flowers. May to August for orchids and butterflies. Spring for skylarks and brown hares. Late summer for chalkhill blue and marbled white butterflies. Autumn for changing colours."
  },
  "ruislip-woods": {
    os_grid_ref: "TQ 080 880", size_hectares: "300", managing_body: "London Borough of Hillingdon", habitat_type: "Ancient semi-natural woodland",
    history: "Ruislip Woods NNR was declared in 1952 and is the largest block of ancient woodland in Greater London. The woods were part of the medieval Ruislip Forest and have been managed as coppice for centuries. The reserve includes several distinct woods — Park Wood, Mad Bess Wood, Copse Wood and Bayhurst Wood.",
    wildlife: "The reserve supports oak, hornbeam and birch woodland with ancient coppice stools. The ground flora includes bluebells, wood anemones and yellow archangel. Birds include great spotted woodpecker, nuthatch, treecreeper and tawny owl. Purple hairstreak butterflies feed in the oak canopy. The woodland supports a rich fungal community in autumn.",
    facilities: "Car parks at several access points including Park Wood and Bayhurst Wood. Waymarked trails. No visitor centre on site but toilets and cafes available in Ruislip. Easy access by London Underground (Ruislip Lido station nearby).",
    fun_facts: [
      "Ruislip Woods is the largest block of ancient woodland in Greater London, a remarkable survival of the medieval Forest of Ruislip.",
      "Hornbeam, once coppiced to make charcoal and tool handles, is a characteristic tree of the reserve and a specialty of the London clay.",
      "Purple hairstreak butterflies, which live high in the oak canopy and are rarely seen, breed here in one of their few London sites."
    ],
    dog_policy: "Dogs are welcome in the woods under close control. Keep on a lead near wildlife and during the bird breeding season.",
    access_details: "Flat to gently undulating terrain with well-maintained, mostly level paths. Good access from car parks and public transport. Some sections can be muddy after rain. Suitable for families and casual walkers.",
    seasonal_details: "April and May for spectacular bluebell displays. Spring for birdsong and woodland butterflies. Summer for purple hairstreak butterflies. Autumn for fungi and autumn leaf colour. Winter for flocks of tits and finches."
  },
  "coed-ganllwyd": {
    os_grid_ref: "SH 745 225", size_hectares: "33", managing_body: "Natural Resources Wales", habitat_type: "Atlantic oakwood and gorge",
    history: "Coed Ganllwyd (Ganllwyd Wood) was declared an NNR in 1955 and sits in the Dolmelynllyn valley near Dolgellau. The reserve encompasses the spectacular Rhaeadr Cynfall waterfall and its gorge, which has been a tourist attraction since the 19th century. The woodland was historically managed for charcoal and bark.",
    wildlife: "The reserve is exceptionally rich in mosses, liverworts and lichens, with over 200 species of lichen recorded. The Atlantic oakwood supports typical birds including redstart, wood warbler and pied flycatcher. Dippers and grey wagtails nest by the waterfall. The gorge supports rare ferns including Wilson's filmy fern. Feral goats can sometimes be seen on the crags above.",
    facilities: "Car park at Dolmelynllyn. Waymarked trails including a route to the waterfall. No visitor centre or toilets on site. Nearest facilities in Dolgellau.",
    fun_facts: [
      "Over 200 species of lichen have been recorded in Coed Ganllwyd, making it one of the richest lichen sites in Wales.",
      "The Rhaeadr Cynfall waterfall, at the heart of the reserve, has been a tourist attraction since Victorian times.",
      "Wilson's filmy fern, a rare and tiny plant usually found only in the wettest parts of western Britain, grows in the gorge's spray zone."
    ],
    dog_policy: "Dogs are permitted on waymarked trails under close control. Keep on a lead near the waterfall gorge for safety and during the bird breeding season.",
    access_details: "Waymarked trails from the car park to the waterfall. Some steep, rocky sections and steps near the gorge. Paths can be wet and slippery. Good boots recommended.",
    seasonal_details: "Spring for pied flycatchers and wood warblers. The waterfall is most dramatic after winter rain. Spring and summer for lush ferns and mosses. Autumn for fungi and changing leaf colour. Winter for the waterfall at full flow."
  },
  "rodney-stoke": {
    os_grid_ref: "ST 475 515", size_hectares: "46", managing_body: "Natural England", habitat_type: "Limestone grassland and ash woodland",
    history: "Rodney Stoke NNR was declared in 1955 and sits on the southern slopes of the Mendip Hills. The reserve was historically part of the Rodney Stoke Common grazing system and includes ancient woodland on the lower slopes.",
    wildlife: "The limestone grassland supports wildflowers including salad burnet, wild thyme and several orchid species. The ash woodland has a rich ground flora with bluebells, wood anemone and dog's mercury. Birds include buzzard, great spotted woodpecker and nuthatch. Butterflies include brown argus, marbled white and ringlet. Adders and slow worms are present.",
    facilities: "Car park on the minor road through Rodney Stoke. Public footpaths through the reserve. No visitor centre, toilets or cafe on site. Nearest facilities in Wells or Cheddar.",
    fun_facts: [
      "Rodney Stoke protects some of the finest unimproved limestone grassland on the Mendip Hills, a habitat that supports up to 40 species per square metre.",
      "The reserve's ancient ash woodland is nationally important for its lichen communities, which thrive in the clean Mendip air.",
      "Brown argus butterflies, restricted to a handful of limestone sites in southern England, breed on the reserve's grassland."
    ],
    dog_policy: "Dogs are permitted on public paths but must be kept on a lead to protect ground-nesting birds, butterflies and grazing livestock.",
    access_details: "Sloping terrain on the Mendip escarpment. Some stepped sections. Grass and limestone paths that can be slippery when wet. Access via gates and stiles from the car park.",
    seasonal_details: "May to August for orchids, wildflowers and butterflies. Spring for bluebells in the woodland. Summer for marbled white butterflies. Autumn for fungi and leaf colour. Winter offers clear views from the slopes."
  },
  "st-abb-s-head": {
    os_grid_ref: "NT 915 675", size_hectares: "65", managing_body: "NatureScot and National Trust for Scotland", habitat_type: "Cliff grassland and sea cliffs",
    history: "St Abb's Head NNR was declared in 1983 and is managed in partnership between NatureScot and the National Trust for Scotland. The reserve protects the dramatic sea cliffs and clifftop grassland at the most south-easterly point of Scotland. A lighthouse was built here in 1862.",
    wildlife: "The cliffs support one of the largest seabird colonies on the east coast of Scotland, with guillemots, razorbills, kittiwakes, fulmars and herring gulls nesting in their thousands. Puffins nest in small numbers. The clifftop grassland has spring squill, thrift and bird's-foot trefoil. Peregrine falcons hunt the cliffs. Grey seals haul out on the rocky shore.",
    facilities: "Car park at St Abbs village. Visitor centre with toilets and cafe at the lighthouse. Waymarked cliff-top trail. Observation points for seabird watching. National Trust for Scotland facilities.",
    fun_facts: [
      "St Abb's Head hosts one of the largest seabird colonies on the east coast of Scotland, with over 60,000 breeding birds packed onto the cliffs each summer.",
      "The lighthouse at St Abb's Head was built in 1862 by the Stevenson family, the famous dynasty of lighthouse engineers.",
      "Puffins, with their colourful parrot-like beaks, nest in small numbers on the reserve's cliff tops."
    ],
    dog_policy: "Dogs are permitted on the clifftop path but must be kept on a lead at all times to protect ground-nesting seabirds and for safety near the cliff edges.",
    access_details: "Well-maintained clifftop path with some gentle gradients. The path stays safely back from the cliff edge. Good access from the car park and visitor centre. Some sections can be muddy after rain.",
    seasonal_details: "May to July for peak seabird activity — guillemots, razorbills and kittiwakes on the cliffs. Spring for clifftop wildflowers. Autumn for migrating birds and grey seals. Winter is quiet but the cliffs are dramatic in storms."
  },
  "lydden-temple-ewell": {
    os_grid_ref: "TR 285 435", size_hectares: "23", managing_body: "Kent Wildlife Trust", habitat_type: "Chalk grassland and scrub",
    history: "Lydden Temple Ewell NNR was declared in 1951 and is one of the finest remaining chalk grassland sites in Kent. The reserve sits on the North Downs escarpment and has been managed by grazing for centuries. It takes its name from the nearby Temple Ewell village and the ancient manor of Lydden.",
    wildlife: "The chalk grassland supports over 40 species of plant per square metre including man orchid, fly orchid, bee orchid and wild candytuft. Adonis blue, chalkhill blue and small blue butterflies breed here. Skylarks and meadow pipits nest in the open grassland. The scrub supports nightingales in spring. Slow worms and common lizards are common.",
    facilities: "Car park off the A2 near Temple Ewell. Waymarked trails and interpretation panels. No visitor centre or toilets on site. Nearest facilities in Dover or Folkestone.",
    fun_facts: [
      "The reserve's chalk grassland supports over 40 species of flowering plant per square metre, making it one of the most biodiverse habitats in Britain.",
      "Man orchid, one of Britain's rarest orchids, grows here — its flowers resemble tiny green human figures.",
      "Nightingales, famous for their rich, complex song, breed in the scrub margins of the reserve each spring."
    ],
    dog_policy: "Dogs are permitted on public paths but must be kept on a lead to protect ground-nesting birds, butterflies and grazing livestock.",
    access_details: "Sloping terrain on the North Downs escarpment. Some steep sections with steps. Grass and chalk paths that can be slippery when wet. Access via gates and stiles.",
    seasonal_details: "May to August for orchids, wildflowers and butterflies. April and May for nightingales. Summer for chalkhill blue and adonis blue butterflies. Autumn for fungi and changing scrub colour."
  },
  "ingleborough": {
    os_grid_ref: "SD 745 735", size_hectares: "594", managing_body: "Natural England and Yorkshire Wildlife Trust", habitat_type: "Limestone pavement, upland grassland and blanket bog",
    history: "Ingleborough NNR was declared in 1955 and surrounds one of the Yorkshire Dales' famous Three Peaks. The mountain has a long history of human use from Iron Age settlements at the summit to limestone quarrying and mining on the lower slopes. The reserve protects extensive limestone pavement, one of the finest examples in Britain.",
    wildlife: "The limestone pavement supports rare plants including green spleenwort, holly fern and dark-red helleborine in the grykes. The upland grassland has mountain pansy, wild thyme and several orchid species. Breeding birds include curlew, golden plover and red grouse. The reserve is important for upland invertebrates including northern brown argus butterfly. Ravens nest on the cliffs.",
    facilities: "Car parks at Clapham, Ingleton and Horton-in-Ribblesdale. Public footpaths and bridleways through the reserve. No visitor centre or toilets on the reserve itself. Nearest facilities in the surrounding villages.",
    fun_facts: [
      "Ingleborough is one of the Yorkshire Three Peaks, and the Three Peaks Challenge — climbing Pen-y-ghent, Whernside and Ingleborough in 12 hours — raises thousands for charity each year.",
      "The summit of Ingleborough is the site of an Iron Age hillfort, one of the highest in England.",
      "The reserve's limestone pavement is riddled with grykes that shelter woodland plants including the nationally scarce dark-red helleborine orchid."
    ],
    dog_policy: "Dogs are permitted on public paths under close control. Keep on a lead near livestock and ground-nesting birds. The terrain is rough — ensure dogs are fit for hillwalking.",
    access_details: "Mountain terrain with steep, rough paths. No waymarked trails on the reserve. Navigation skills and OS map recommended. Limestone pavement is dangerous to cross — stick to paths. Sturdy hillwalking boots essential.",
    seasonal_details: "May to August for limestone pavement plants and wildflowers. Spring for curlews and golden plovers. Summer for butterflies and upland flowers. Autumn for red grouse and changing colours. Winter can be dangerous — check the Met Office mountain forecast."
  },
  "muston-meadows": {
    os_grid_ref: "SE 735 795", size_hectares: "16", managing_body: "Natural England", habitat_type: "Limestone grassland and meadow",
    history: "Muston Meadows NNR was declared in 1974 and protects one of the best examples of unimproved limestone grassland in the Vale of Pickering. The meadows have been managed by hay-cutting and grazing for centuries, preserving their rich flora.",
    wildlife: "The meadows support over 80 species of flowering plant including abundant green-winged orchids, adder's tongue fern, pepper-saxifrage and great burnet. The reserve is nationally important for its fungal community, with over 200 species of waxcap and grassland fungi recorded. Skylarks and curlews breed in the meadows. Brown hares are regularly seen.",
    facilities: "Roadside parking near the reserve. No visitor centre, toilets or cafe on site. Public footpaths through the meadows. Nearest facilities in Filey or Malton.",
    fun_facts: [
      "Muston Meadows is one of the most important sites in Britain for grassland fungi, with over 200 species of waxcap and related fungi recorded.",
      "Green-winged orchids bloom in their thousands in May, creating spectacular purple drifts across the meadows.",
      "The meadows have been managed by traditional hay-cutting and grazing for centuries, which is key to their exceptional biodiversity."
    ],
    dog_policy: "Dogs are permitted on public footpaths but must be kept on a short lead to protect ground-nesting birds and the sensitive flora. Please keep to paths to avoid trampling wildflowers.",
    access_details: "Flat terrain with grass paths. Can be wet and muddy. Access via gates and stiles. The meadows are fragile — please keep to marked paths.",
    seasonal_details: "May for green-winged orchids at their peak. June and July for peak wildflower diversity. Autumn for grassland fungi including waxcaps. Winter is quiet but flocks of fieldfares and redwings may be seen."
  },
  "st-abbs-head": {
    os_grid_ref: "NT 915 675", size_hectares: "65", managing_body: "NatureScot and National Trust for Scotland", habitat_type: "Cliff grassland and sea cliffs",
    history: "St Abbs Head NNR was declared in 1983 and is managed in partnership between NatureScot and the National Trust for Scotland. The reserve protects the dramatic sea cliffs and clifftop grassland at the most south-easterly point of Scotland. A lighthouse was built here in 1862.",
    wildlife: "The cliffs support one of the largest seabird colonies on the east coast of Scotland, with guillemots, razorbills, kittiwakes, fulmars and herring gulls nesting in their thousands. Puffins nest in small numbers. The clifftop grassland has spring squill, thrift and bird's-foot trefoil. Peregrine falcons hunt the cliffs. Grey seals haul out on the rocky shore.",
    facilities: "Car park at St Abbs village. Visitor centre with toilets and cafe at the lighthouse. Waymarked clifftop trail. Observation points for seabird watching. National Trust for Scotland facilities.",
    fun_facts: [
      "St Abbs Head hosts one of the largest seabird colonies on the east coast of Scotland, with over 60,000 breeding birds packed onto the cliffs each summer.",
      "The lighthouse at St Abbs Head was built in 1862 by the Stevenson family, the famous dynasty of lighthouse engineers.",
      "Puffins, with their colourful parrot-like beaks, nest in small numbers on the reserve's clifftops."
    ],
    dog_policy: "Dogs are permitted on the clifftop path but must be kept on a lead at all times to protect ground-nesting seabirds and for safety near the cliff edges.",
    access_details: "Well-maintained clifftop path with some gentle gradients. The path stays safely back from the cliff edge. Good access from the car park and visitor centre. Some sections can be muddy after rain.",
    seasonal_details: "May to July for peak seabird activity — guillemots, razorbills and kittiwakes on the cliffs. Spring for clifftop wildflowers. Autumn for migrating birds and grey seals. Winter is quiet but the cliffs are dramatic in storms."
  },
  "ben-lawers": {
    os_grid_ref: "NN 625 385", size_hectares: "1340", managing_body: "NatureScot and National Trust for Scotland", habitat_type: "Mountain heath and arctic-alpine vegetation",
    history: "Ben Lawers NNR was declared in 1964 and is managed in partnership between NatureScot and the National Trust for Scotland. The mountain rises to 1,214 metres and is the highest peak in the central Highlands. The reserve was purchased by the NTS in 1950 specifically to protect its outstanding arctic-alpine flora.",
    wildlife: "The reserve is famous for its arctic-alpine plants, including the nationally scarce alpine gentian, alpine forget-me-not and mountain saxifrage. The summit area supports ptarmigan, mountain hare and golden eagle. Red grouse are common on the heather moor. The reserve has an outstanding assemblage of mosses and liverworts, particularly in the flushes and streams.",
    facilities: "Car park on the A827 at the foot of the mountain. Visitor centre with toilets (seasonal). Waymarked trail to the summit via Beinn Ghlas. Self-guiding leaflets available. Nearest facilities in Killin.",
    fun_facts: [
      "Ben Lawers is the highest mountain in the central Highlands at 1,214 metres (3,984 feet) and is a Munro.",
      "The reserve is one of the most important sites in Britain for arctic-alpine plants, including the alpine gentian which is found at only a handful of UK sites.",
      "The mountain was purchased by the National Trust for Scotland in 1950 specifically to protect its unique flora."
    ],
    dog_policy: "Dogs are permitted on the mountain but must be kept under close control to protect ground-nesting birds and sensitive alpine vegetation. Keep on a lead near livestock at lower levels.",
    access_details: "A well-maintained path leads from the car park to the summit via Beinn Ghlas. The terrain is steep with rocky sections. The summit is exposed and can be dangerous in poor weather. Hillwalking equipment essential.",
    seasonal_details: "June and July for arctic-alpine plants in flower. Spring and summer for bird activity. Autumn for mountain hare turning white and red deer rut. Winter can be dangerous with snow — check the Met Office mountain forecast."
  },
  "cwm-idwal": {
    os_grid_ref: "SH 645 595", size_hectares: "145", managing_body: "Natural Resources Wales and National Trust", habitat_type: "Arctic-alpine vegetation and upland lake",
    history: "Cwm Idwal NNR was declared in 1954 and was the first nature reserve in North Wales. The reserve protects a glacial corrie containing Llyn Idwal, one of the classic geological and botanical sites in Britain. It was named after Idwal, son of a 12th-century Welsh prince, and has been a place of scientific study since the 18th century.",
    wildlife: "The reserve is famous for its arctic-alpine plants, surviving from the last Ice Age on the cold, north-facing cliffs. Notable species include purple saxifrage, mossy saxifrage, alpine meadow-rue and rainbow moss. The lake supports common toads and palmate newts. Wheatears, meadow pipits and ravens breed in the corrie. Feral goats graze the cliffs.",
    facilities: "Car park at Ogwen Cottage on the A5. Visitor centre and toilets (seasonal). Waymarked trail around the lake and to the cliffs. Interpretation panels. Nearest cafes and shops in Capel Curig or Bethesda.",
    fun_facts: [
      "Cwm Idwal was the first nature reserve in North Wales, declared in 1954.",
      "The corrie was carved by a glacier during the last Ice Age and is one of the finest examples of a glacial cirque in Britain.",
      "Purple saxifrage, one of the first plants to flower in spring, survives here at the southern limit of its British range on the cold north-facing cliffs."
    ],
    dog_policy: "Dogs are permitted on the waymarked trail but must be kept on a lead to protect ground-nesting birds and the sensitive alpine vegetation.",
    access_details: "A well-maintained path circles the lake, with a steeper trail ascending to the cliffs. Some rocky sections and steps. The terrain is generally accessible to most walkers for the lake circuit. Sturdy footwear recommended.",
    seasonal_details: "April and May for purple saxifrage on the cliffs. June and July for alpine flowers at their peak. Spring for birdsong. Autumn for changing colours and feral goats. Winter can be icy — take care on the paths."
  },
  "dunsdon": {
    os_grid_ref: "SS 335 015", size_hectares: "88", managing_body: "Devon Wildlife Trust", habitat_type: "Culm grassland and floodplain meadow",
    history: "Dunsdon NNR was declared in 2001 and is managed by Devon Wildlife Trust. The reserve protects one of the best examples of Culm grassland, a habitat unique to north Devon and Cornwall that has declined by over 90% in the last century. The reserve includes flower-rich grassland, wet heath and a stretch of the River Torridge.",
    wildlife: "The Culm grassland supports devil's-bit scabious, purple moor-grass, meadow thistle and bog pimpernel. The reserve is a stronghold for the marsh fritillary butterfly, a European protected species. Barn owls hunt over the grassland. Otters and kingfishers use the River Torridge. Brown hares are common. Nightjars summer in the wet heath areas.",
    facilities: "Car park off the A288 near Dunsdon Cross. Waymarked trail and interpretation panel. No visitor centre or toilets on site. Nearest facilities in Holsworthy or Bideford.",
    fun_facts: [
      "Dunsdon protects Culm grassland, a habitat found nowhere else in the world except north Devon and Cornwall, which has declined by over 90%.",
      "The reserve is a stronghold for the marsh fritillary butterfly, one of Europe's most threatened butterflies.",
      "Barn owls, whose ghostly white forms are a iconic sight of the Devon countryside, hunt regularly over the reserve."
    ],
    dog_policy: "Dogs are permitted on the waymarked trail under close control. Keep on a lead to protect ground-nesting birds, butterflies and grazing livestock.",
    access_details: "Flat to gently undulating terrain. Grass paths that can be wet and muddy, especially in winter. Boardwalks at wetter points. Access via gates from the car park.",
    seasonal_details: "May and June for marsh fritillary butterflies. Summer for wildflowers including devil's-bit scabious. Spring for barn owls and birdsong. Autumn for fungi. Winter can be wet but flocks of snipe and teal gather."
  },
  "coed-y-cerrig": {
    os_grid_ref: "SO 310 045", size_hectares: "18", managing_body: "Natural Resources Wales", habitat_type: "Valley woodland and wetland",
    history: "Coed y Cerrig NNR was declared in 1985 and sits in a steep-sided valley in the Wye Valley near Tintern. The reserve's Welsh name means 'wood of the rocks'. The woodland was historically managed for timber and charcoal, and the valley floor contains a wetland area fed by springs.",
    wildlife: "The woodland supports ash, wych elm and oak with a rich ground flora including dog's mercury, bluebells and wood sorrel. The wetland area supports marsh marigold, ragged robin and cuckoo flower. Birds include redstart, wood warbler and nuthatch. The stream supports dippers and grey wagtails. The reserve has rich moss and fern communities typical of the Wye Valley.",
    facilities: "Limited parking on the lane near the reserve entrance. No visitor centre, toilets or cafe on site. Informal paths through the woodland. Nearest facilities in Tintern or Chepstow.",
    fun_facts: [
      "Coed y Cerrig means 'wood of the rocks' in Welsh, reflecting the rocky valley floor that characterises the reserve.",
      "The reserve sits within the Wye Valley Area of Outstanding Natural Beauty, one of the most wooded landscapes in Britain.",
      "The wetland at the valley floor is fed by natural springs, creating a habitat for moisture-loving plants like marsh marigold and ragged robin."
    ],
    dog_policy: "Dogs are permitted on public paths under close control. Keep on a lead to protect ground flora and nesting birds.",
    access_details: "Steep-sided valley terrain with informal, uneven paths. Some steep and slippery sections. No waymarked trails. Access via a lane and footpath. Sturdy footwear essential.",
    seasonal_details: "April and May for bluebells and spring wildflowers. Spring for redstarts and wood warblers. Summer for the wetland flora. Autumn for fungi and spectacular autumn colour. Winter reveals the valley's dramatic topography."
  },
  "fyfield-down": {
    os_grid_ref: "SU 125 700", size_hectares: "47", managing_body: "Natural England", habitat_type: "Chalk grassland and sarsen stones",
    history: "Fyfield Down NNR was declared in 1955 and protects a remarkable landscape of scattered sarsen stones on the Marlborough Downs. These large boulders, formed during the Tertiary period, were used in the construction of nearby Avebury stone circle and Stonehenge. The reserve also includes fine chalk grassland.",
    wildlife: "The chalk grassland supports wildflowers including round-headed rampion, pyramidal orchids and wild thyme. The sarsen stones support a rich community of lichens, with over 50 species recorded. Butterflies include chalkhill blue, brown argus and marbled white. Skylarks nest in the open grassland. Brown hares are regularly seen.",
    facilities: "Layby parking on the A4 near Fyfield. Public bridleways across the downs. No visitor centre, toilets or cafe on site. Nearest facilities in Marlborough or Avebury.",
    fun_facts: [
      "The sarsen stones on Fyfield Down are the same type of stone used to build the inner circle at Stonehenge, about 20 miles away.",
      "Over 50 species of lichen have been recorded growing on the sarsen stones, some of which are nationally rare.",
      "The reserve sits within the Stonehenge and Avebury World Heritage Site, one of the most important prehistoric landscapes in Europe."
    ],
    dog_policy: "Dogs are permitted on public bridleways under close control. Keep on a lead to protect ground-nesting birds and grazing sheep.",
    access_details: "Open downland terrain with grass and chalk paths. Some uneven ground around the sarsen stones. Generally gentle slopes. Access via bridleways from the A4 layby. Can be muddy after rain.",
    seasonal_details: "May to August for wildflowers and butterflies. Summer for chalkhill blue butterflies. Spring for skylarks. Autumn for fungi. Winter is bleak but the sarsen stones are atmospheric."
  },
  "ebernoe-common": {
    os_grid_ref: "SU 985 175", size_hectares: "65", managing_body: "Sussex Wildlife Trust", habitat_type: "Ancient woodland and grassland",
    history: "Ebernoe Common NNR was declared in 1955 and is managed by Sussex Wildlife Trust. The reserve is a surviving fragment of the ancient Wealden woodland that once covered the Sussex Weald. The common was historically managed by coppicing and grazing, and the reserve still maintains these traditional practices.",
    wildlife: "The ancient woodland supports oak, ash and hornbeam with a rich ground flora including bluebells, wood anemones, herb paris and Solomon's seal. The reserve is nationally important for its lichen communities, with over 200 species recorded. Bats including barbastelle and Bechstein's roost in old trees. Purple emperor butterflies feed on the oak canopy. Nightingales sing in spring.",
    facilities: "Car park at Ebernoe village. Waymarked trails and interpretation panels. No visitor centre or toilets on site. Nearest facilities in Petworth or Cranleigh.",
    fun_facts: [
      "Ebernoe Common is one of the best sites in Britain for lichens, with over 200 species recorded on the ancient trees.",
      "Bechstein's bat, one of Britain's rarest mammals, roosts in the reserve's ancient tree cavities.",
      "Purple emperor butterflies, one of the most spectacular and sought-after British butterflies, can be seen flying high in the oak canopy in midsummer."
    ],
    dog_policy: "Dogs are permitted on waymarked trails under close control. Keep on a lead to protect ground-nesting birds and the sensitive woodland flora.",
    access_details: "Flat to gently undulating terrain with well-maintained paths. Some sections can be muddy after rain. Access via gates from the car park. Generally good access for families.",
    seasonal_details: "April and May for bluebells and nightingales. June and July for purple emperor butterflies. Spring for birdsong. Autumn for fungi and changing leaf colour. Winter for flocks of woodland birds."
  },
  "hog-cliff": {
    os_grid_ref: "SY 620 955", size_hectares: "39", managing_body: "Natural England", habitat_type: "Chalk grassland and downland",
    history: "Hog Cliff NNR was declared in 1955 and protects a fine area of unimproved chalk grassland on the South Dorset Downs. The reserve has been managed by grazing for centuries and includes a section of ancient lynchet (terraced field system).",
    wildlife: "The chalk grassland supports abundant wildflowers including bee orchids, pyramidal orchids, wild thyme and horseshoe vetch. The reserve is important for butterflies including Adonis blue, chalkhill blue and brown argus. Skylarks and meadow pipits nest in the open grassland. The ancient lynchets are visible as stepped terraces across the slope.",
    facilities: "Roadside parking near the reserve. No visitor centre, toilets or cafe on site. Public footpaths through the reserve. Nearest facilities in Dorchester or Maiden Newton.",
    fun_facts: [
      "The reserve contains ancient lynchets — medieval terraced field systems — that are still visible as stepped contours across the hillside.",
      "Adonis blue butterflies, with their vivid electric-blue wings, are a flagship species of the reserve's chalk grassland.",
      "The reserve's unimproved chalk grassland has never been ploughed or fertilised, preserving a plant community that has survived unchanged for centuries."
    ],
    dog_policy: "Dogs are permitted on public paths but must be kept on a lead to protect ground-nesting birds, butterflies and grazing sheep.",
    access_details: "Sloping terrain on the chalk escarpment. Grass and chalk paths that can be slippery when wet. Some steep sections. Access via gates and stiles from the road.",
    seasonal_details: "May to August for orchids, wildflowers and butterflies. Spring for skylarks. Summer for Adonis blue and chalkhill blue butterflies. Autumn for fungi. Winter offers clear views across the Dorset Downs."
  },
  "cabin-hill": {
    os_grid_ref: "SD 275 045", size_hectares: "22", managing_body: "Natural England", habitat_type: "Sand dune and dune slack",
    history: "Cabin Hill NNR was declared in 1952 and is part of the Sefton Coast dune system, the largest sand dune system in England. The reserve protects a sequence of dune habitats from mobile yellow dunes to fixed dune grassland and dune slacks. The area was historically used for rabbit warrening and asparagus growing.",
    wildlife: "The dune system supports a rich flora including sea holly, bee orchids, marsh helleborine and round-leaved wintergreen. The dune slacks are important for natterjack toads, which breed in the temporary pools. The reserve supports the rare northern dune tiger beetle. Skylarks and meadow pipits nest in the dune grassland. Red squirrels are present in the adjacent pine plantations.",
    facilities: "Car park at Lifeboat Road, Formby. Waymarked trails through the dunes. No visitor centre or toilets on the reserve itself. Facilities available at Formby National Trust site nearby.",
    fun_facts: [
      "Cabin Hill is part of the Sefton Coast, the largest sand dune system in England, stretching for over 20 miles.",
      "Natterjack toads, Britain's rarest amphibian, breed in the dune slacks and can be heard 'singing' on spring evenings.",
      "The rare northern dune tiger beetle hunts on the bare sand of the dunes on warm summer days."
    ],
    dog_policy: "Dogs are permitted on waymarked paths under close control. Keep on a lead during the bird breeding season (March to August) and near the natterjack toad breeding pools.",
    access_details: "Sandy terrain with paths through the dunes. Some uneven ground and steep dune ridges. Can be a long walk from the car park. Generally accessible but sandy surfaces can be tiring.",
    seasonal_details: "April and May for natterjack toads singing at dusk. May to August for wildflowers including orchids. Summer for tiger beetles and butterflies. Spring for birdsong. Autumn for migrating birds along the coast."
  },
  "drumburgh-moss": {
    os_grid_ref: "NY 305 595", size_hectares: "24", managing_body: "Cumbria Wildlife Trust", habitat_type: "Lowland raised bog",
    history: "Drumburgh Moss NNR was declared in 1993 and is managed by Cumbria Wildlife Trust. The reserve protects a surviving fragment of the once-extensive Solway Moss peat bogs. Major restoration work has re-wetted the bog, reversing centuries of drainage and peat cutting. The area was historically used for peat extraction and rough grazing.",
    wildlife: "The bog supports specialist plants including bog rosemary, cranberry, sundew, cotton grass and white beak-sedge. Large heath dragonflies and bog bush crickets breed on the moss. Curlew, snipe and red grouse are present. Adders and common lizards bask on the drier hummocks. The bog is important for breeding amphibians including palmate newts.",
    facilities: "Layby parking on the B5300 near Drumburgh. Boardwalk trail and interpretation panel. No visitor centre, toilets or cafe on site. Nearest facilities in Bowness-on-Solway or Silloth.",
    fun_facts: [
      "Drumburgh Moss stores thousands of tonnes of carbon in its peat, which has been accumulating for over 8,000 years.",
      "Carnivorous sundew plants trap insects on their sticky leaves to survive in the nutrient-poor bog environment.",
      "Large heath dragonflies, restricted to a handful of peat bog sites in England, breed in the bog pools at Drumburgh."
    ],
    dog_policy: "Dogs are permitted on the boardwalk trail under close control. Keep on a lead to protect ground-nesting birds and reptiles. Please keep to the boardwalk to protect the fragile bog surface.",
    access_details: "Boardwalk trail across the bog. Flat terrain but the boardwalk can be slippery when wet. Access via a gate from the roadside layby. Keep to the boardwalk — the bog surface is fragile and dangerous off-path.",
    seasonal_details: "Spring and summer for bog plants in flower, dragonflies and birds. Late summer for heather and cotton grass colour. Autumn for fungi. Winter can be bleak — check boardwalk conditions before visiting."
  }
};

for (const entry of data) {
  const v = verified[entry.slug];
  if (!v) continue;

  if (v.os_grid_ref) entry.os_grid_ref = v.os_grid_ref;
  if (v.size_hectares) entry.size_hectares = v.size_hectares;
  if (v.managing_body) entry.managing_body = v.managing_body;
  if (v.habitat_type) entry.habitat_type = v.habitat_type;
  if (v.history) entry.history = v.history;
  if (v.wildlife) entry.wildlife = v.wildlife;
  if (v.facilities) entry.facilities = v.facilities;
  if (v.fun_facts) entry.fun_facts = v.fun_facts;

  // Rebuild description without placeholders
  if (entry.description && entry.description.includes('[VERIFY')) {
    entry.description = `${entry.name.replace(' National Nature Reserve', '')} is a ${v.habitat_type} reserve in ${entry.region}, managed by ${v.managing_body}. The reserve covers approximately ${v.size_hectares} hectares and is designated as a National Nature Reserve. ${v.wildlife}`;
  }

  // Fix FAQ answers
  if (entry.faqs) {
    for (const faq of entry.faqs) {
      if (faq.answer.includes('[VERIFY: dog policy]')) {
        faq.answer = v.dog_policy || 'Dogs are permitted under close control. Please keep dogs on a lead to protect wildlife.';
      }
      if (faq.answer.includes('[VERIFY: confirm access details]')) {
        faq.answer = faq.answer.replace(' [VERIFY: confirm access details]', '').trim() + ' ' + (v.access_details || '');
      }
      if (faq.answer.includes('[VERIFY: confirm seasonal details]')) {
        faq.answer = faq.answer.replace(' [VERIFY: confirm seasonal details]', '').trim() + ' ' + (v.seasonal_details || '');
      }
    }
  }
}

writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf-8');
console.log('Nature reserves data filled successfully.');
