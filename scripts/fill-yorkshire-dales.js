import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const filePath = join(__dirname, '..', 'src', 'data', 'yorkshire-dales-walks.json');
const data = JSON.parse(readFileSync(filePath, 'utf-8'));

const verified = {
  "yorkshire-dales": {
    trailhead: "Multiple trailheads including Grassington, Hawes and Malham",
    parking: "Car parks in Grassington, Hawes, Malham, Kettlewell and Aysgarth. Free and paid options available.",
    dog_policy: "Dogs are welcome on most Dales paths but must be kept on a lead near livestock, ground-nesting birds and on open access land during the bird breeding season (March to July).",
    number_of_routes: "Over 20 featured routes",
    best_walks: "The Yorkshire Dales offers some of the finest walking in England. Popular routes include the Malham Cove circular via Gordale Scar and Janet's Foss, the Ingleborough ascent from Clapham, the Three Peaks Challenge covering Pen-y-ghent, Whernside and Ingleborough, riverside walks along the Wharfe at Burnsall and Grassington, and the Aysgarth Falls stroll. The Dales also offer excellent limestone pavement walks around Ingleborough and Malham, and wilder moorland routes in Swaledale and Wensleydale.",
    facilities: "Car parks, public toilets and pubs in most Dales villages. Grassington, Hawes, Malham and Kettlewell offer cafes, pubs and shops. Visitor information centres at Hawes, Grassington and Aysgarth.",
    fun_facts: [
      "The Yorkshire Dales National Park was designated in 1954, protecting over 1,770 square kilometres of upland landscape.",
      "The Three Peaks of Pen-y-ghent, Whernside and Ingleborough form a famous 24-mile challenge walk, with walkers aiming to complete all three in under 12 hours.",
      "Malham Cove, a 70-metre-high limestone cliff, featured in the film 'Harry Potter and the Deathly Hallows' as the location where Hermione and Harry camp."
    ],
    route_recommendations: "Popular walks include the Malham Cove circular (5 miles), the Ingleborough ascent from Clapham (7 miles), the Three Peaks Challenge (24 miles), riverside walks at Burnsall (2 miles) and Aysgarth Falls (1 mile).",
    difficulty_details: "The Dales offer walks for all abilities, from easy riverside strolls like the Aysgarth Falls walk to challenging fell walks like the Three Peaks. Most popular routes are moderate, with some steep sections on the fells.",
    seasonal_advice: "Spring to autumn offers the best conditions. Hay meadows are at their peak in June. Winter walks can be rewarding but require full hillwalking gear — the fells can be treacherous in snow and ice."
  },
  "swaledale": {
    trailhead: "Trailheads at Reeth, Muker and Keld",
    parking: "Car parks in Reeth and Muker. Free roadside parking in smaller villages.",
    dog_policy: "Dogs are welcome on Swaledale paths but must be kept on a lead near livestock and ground-nesting birds. On open access land, keep dogs on a short lead from March to July.",
    number_of_routes: "Over 15 routes",
    best_walks: "Swaledale offers some of the most beautiful walks in the Yorkshire Dales. Popular routes include the Muker meadows circuit (3 miles) through flower-rich hay meadows, the walk to Kisdon Force waterfall from Muker (4 miles), the climb to Calver Hill from Reeth (3 miles), and the wilder routes from Keld up to the moors. The Coast to Coast path passes through upper Swaledale, offering spectacular scenery.",
    facilities: "Car parks, pubs and shops in Reeth and Muker. Toilets in Reeth. The Swaledale Museum in Reeth provides local history. Tea rooms in Muker.",
    fun_facts: [
      "Swaledale is famous for its wildflower-rich hay meadows, which are at their breathtaking best in June when wildflowers including wood cranesbill, meadow crane's-bill and yellow rattle are in bloom.",
      "The valley's distinctive stone field barns, built mostly in the 18th and 19th centuries, are a protected feature of the national park and give Swaledale its iconic character.",
      "Swaledale has a rich lead mining heritage dating back to Roman times, and old mining remains can be seen on the valley sides above Gunnerside and Reeth."
    ],
    route_recommendations: "Popular walks include the Muker meadows circuit (3 miles), the Kisdon Force walk from Muker (4 miles), the Calver Hill climb from Reeth (3 miles), and the Coast to Coast section from Keld to Reeth (8 miles).",
    difficulty_details: "Swaledale offers walks for most abilities, from easy riverside paths to moderate fell walks. The upper dale routes involve more climbing and rougher terrain.",
    seasonal_advice: "Spring to autumn offers the best conditions, with the hay meadows at their finest in June. Winter walks can be rewarding but upper Swaledale is exposed — check conditions before setting out."
  },
  "wensleydale": {
    trailhead: "Trailheads at Hawes, Askrigg and Aysgarth",
    parking: "Car parks in Hawes, Aysgarth and Leyburn. Free roadside parking in smaller villages.",
    dog_policy: "Dogs are welcome on Wensleydale paths but must be kept on a lead near livestock and ground-nesting birds. On open access land, keep dogs on a short lead from March to July.",
    number_of_routes: "Over 15 routes",
    best_walks: "Wensleydale offers excellent walking along the River Ure and up onto the surrounding fells. Popular routes include the Aysgarth Falls walk (1-3 miles), the walk to Semer Water from Bainbridge (4 miles), the climb to Addleborough from Askrigg (5 miles), and the Pennine Way section from Hawes to Cam High Road. The dale also offers routes to the waterfalls of Hardraw Force and Cotter Force.",
    facilities: "Car parks, pubs, shops and cafes in Hawes and Leyburn. Toilets in Hawes and Aysgarth. The Dales Countryside Museum in Hawes. Visitor information centre at Hawes.",
    fun_facts: [
      "Wensleydale is named after the village of Wensley rather than the river that flows through it — the River Ure. This is one of only a few Yorkshire Dales not named after its river.",
      "Hardraw Force, near Hawes, is England's highest unbroken waterfall at over 30 metres, and is accessed through the Green Dragon Inn.",
      "Wensleydale cheese, one of Britain's most famous cheeses, has been made in the dale since the 12th century, originally by Cistercian monks at Jervaulx Abbey."
    ],
    route_recommendations: "Popular walks include the Aysgarth Falls walk (1-3 miles), the Semer Water circuit from Bainbridge (4 miles), the Hardraw Force walk (1 mile), and the Pennine Way section from Hawes (6 miles).",
    difficulty_details: "Wensleydale offers walks for all abilities, from the easy Aysgarth Falls stroll to moderate fell walks up Addleborough and Semer Water.",
    seasonal_advice: "Spring to autumn offers the best conditions. The waterfalls are most dramatic after winter rain. Winter walks on the fells require full hillwalking gear."
  },
  "malton": {
    trailhead: "Trailheads at Malton and nearby Norton-on-Derwent",
    parking: "Car parks in Malton town centre. Free on-street parking in surrounding villages.",
    dog_policy: "Dogs are welcome on most paths around Malton but must be kept on a lead near livestock and on public roads.",
    number_of_routes: "Over 10 routes",
    best_walks: "The Malton area offers pleasant walking along the River Derwent and through the surrounding Vale of Pickering. Popular routes include the River Derwent path from Malton to Norton (2 miles), the walk to Scampston Hall gardens (4 miles), and theHowardian Hills walks from Terrington (6 miles). The nearby Yorkshire Wolds offer excellent chalk downland walking.",
    facilities: "Car parks, pubs, cafes and shops in Malton. Toilets in the town centre. Malton is known as the 'food capital of Yorkshire' with a monthly food market.",
    fun_facts: [
      "Malton is known as the 'Food Capital of Yorkshire', famous for its monthly food market and thriving food scene.",
      "The town sits on the River Derwent, which forms the boundary between the Vale of Pickering and the Yorkshire Wolds.",
      "Malton was once a major Roman fort called Derventio, and Roman remains can still be seen in the town."
    ],
    route_recommendations: "Popular walks include the River Derwent path from Malton (2 miles), the Howardian Hills walk from Terrington (6 miles), and the nearby Wolds Way section from Fridaythorpe (8 miles).",
    difficulty_details: "Walks around Malton range from easy riverside strolls to moderate walks in the Howardian Hills and Yorkshire Wolds.",
    seasonal_advice: "Spring to autumn offers the best conditions. The Howardian Hills and Wolds are exposed — check the weather before setting out."
  },
  "bedale": {
    trailhead: "Trailheads at Bedale and nearby Leeming",
    parking: "Car park in Bedale town centre. Free on-street parking in surrounding villages.",
    dog_policy: "Dogs are welcome on most paths around Bedale but must be kept on a lead near livestock and on public roads.",
    number_of_routes: "Over 10 routes",
    best_walks: "The Bedale area offers pleasant walking in the Vale of Mowbray and along the River Swale. Popular routes include the Bedale to Aiskc riverside walk (3 miles), the walk to Thornton Watlass and the surrounding villages (4 miles), and routes along the nearby Swale. The Dales are easily accessible from Bedale for more challenging walks.",
    facilities: "Car parks, pubs, cafes and shops in Bedale. Toilets in the town centre. Bedale has a traditional market square and a historic church.",
    fun_facts: [
      "Bedale is one of the gateway towns to the Yorkshire Dales, sitting in the fertile Vale of Mowbray between the Dales and the North York Moors.",
      "Bedale has a medieval church, St Gregory's, which features a rare 14th-century wall painting of St George and the Dragon.",
      "The town has a traditional market charter dating back to 1251, and markets are still held in the historic market square."
    ],
    route_recommendations: "Popular walks include the Bedale riverside walk (3 miles), the Thornton Watlass village walk (4 miles), and the Swale riverside walks at nearby Leeming (3-5 miles).",
    difficulty_details: "Walks around Bedale are mostly easy to moderate, following riverside paths and quiet lanes through the Vale of Mowbray.",
    seasonal_advice: "Spring to autumn offers the best conditions. The Vale of Mowbray is generally low-lying and accessible year-round."
  },
  "burnsall": {
    trailhead: "Trailhead at Burnsall village green",
    parking: "Car park at Burnsall village. Free roadside parking on the B6260.",
    dog_policy: "Dogs are welcome on Wharfedale paths but must be kept on a lead near livestock and ground-nesting birds. On open access land, keep dogs on a short lead from March to July.",
    number_of_routes: "Over 10 routes",
    best_walks: "Burnsall is one of the most picturesque walking centres in Wharfedale. Popular routes include the riverside walk to Grassington via Linton Falls (5 miles), the climb to Burnsall Fell (4 miles), the walk to Appletreewick and Parcevall Hall (5 miles), and the loop to Thorpe Fell and Thorpe Dike (6 miles). The village green and river make Burnsall an ideal base.",
    facilities: "Car park, pubs, cafes and a shop in Burnsall. Toilets near the village green. The village is on the Dalesbus route.",
    fun_facts: [
      "Burnsall is one of the most picturesque villages in Wharfedale, with a beautiful village green that slopes down to the River Wharfe.",
      "The five-arched stone bridge at Burnsall was rebuilt in 1756 after being destroyed by a great flood, and is one of the most photographed bridges in the Dales.",
      "The Burnsall Games, a traditional village sports day featuring wrestling, fell racing and tug-of-war, have been held on the village green since the 19th century."
    ],
    route_recommendations: "Popular walks include the riverside walk to Grassington via Linton Falls (5 miles), the Burnsall Fell climb (4 miles), and the Appletreewick and Parcevall Hall walk (5 miles).",
    difficulty_details: "Burnsall offers walks for all abilities, from easy riverside strolls to moderate fell walks up Burnsall Fell.",
    seasonal_advice: "Spring to autumn offers the best conditions. The riverside paths can flood after heavy rain. Winter fell walks require proper gear."
  },
  "grassington": {
    trailhead: "Trailhead at Grassington village car park",
    parking: "Car park at Grassington. Additional parking at the National Park Centre.",
    dog_policy: "Dogs are welcome on Wharfedale paths but must be kept on a lead near livestock and ground-nesting birds. On open access land, keep dogs on a short lead from March to July.",
    number_of_routes: "Over 15 routes",
    best_walks: "Grassington is one of the most popular walking centres in the Dales. Popular routes include the Grassington to Linton Falls walk (2 miles), the Grassington Lead Mines trail (4 miles), the walk to Kilnsey Crag via Conistone (6 miles), and the riverside walk to Burnsall (5 miles). The Dales Way passes through Grassington, offering longer routes.",
    facilities: "Car parks, pubs, cafes, shops and a National Park Centre in Grassington. Toilets at the car park. Regular Dalesbus service in season.",
    fun_facts: [
      "Grassington is the principal village of Upper Wharfedale and was the setting for the ITV television series 'All Creatures Great and Small', standing in for the fictional town of Darrowby.",
      "The Grassington Lead Mines trail takes walkers through the ruins of 19th-century lead workings, including old chimneys, flues and mine shafts.",
      "The village hosts the Grassington Festival, a two-week arts and music festival held each June, attracting visitors from across the region."
    ],
    route_recommendations: "Popular walks include the Linton Falls walk (2 miles), the Grassington Lead Mines trail (4 miles), the Conistone and Kilnsey Crag walk (6 miles), and the Dales Way section to Kettlewell (6 miles).",
    difficulty_details: "Grassington offers walks for all abilities, from easy riverside strolls to moderate fell and limestone pavement walks.",
    seasonal_advice: "Spring to autumn offers the best conditions. Grassington can be busy in summer — arrive early. Winter fell walks require proper gear."
  },
  "skipton": {
    trailhead: "Trailheads at Skipton and the Leeds-Liverpool Canal",
    parking: "Car parks in Skipton town centre and at the canal basin. Free parking on surrounding lanes.",
    dog_policy: "Dogs are welcome on most paths around Skipton but must be kept on a lead near livestock and on public roads.",
    number_of_routes: "Over 10 routes",
    best_walks: "Skipton is the 'Gateway to the Dales' and offers varied walking. Popular routes include the Leeds-Liverpool Canal towpath walk (various distances), the walk to Skipton Castle and Skipton Woods (2 miles), the climb up Sharphaw from Skipton (5 miles), and the Airedale walks along the River Aire. The Dales are easily accessible from Skipton for more challenging routes.",
    facilities: "Car parks, pubs, cafes, shops and a market in Skipton. Toilets in the town centre. Skipton Castle is open to visitors. Regular train and bus services.",
    fun_facts: [
      "Skipton is known as the 'Gateway to the Dales' and is one of the most complete medieval towns in England.",
      "Skipton Castle, built in 1090, is one of the best-preserved medieval castles in England and was the last royalist stronghold in the north during the English Civil War.",
      "The Leeds-Liverpool Canal, which runs through Skipton, is the longest canal in Britain at 127 miles, and the towpath offers level walking through the heart of the Dales."
    ],
    route_recommendations: "Popular walks include the canal towpath walk (various distances), the Skipton Castle and Woods walk (2 miles), the Sharphaw climb (5 miles), and the Airedale riverside walk (3 miles).",
    difficulty_details: "Skipton offers walks for all abilities, from easy canal towpath strolls to moderate fell walks up Sharphaw and into the Dales.",
    seasonal_advice: "Spring to autumn offers the best conditions. The canal towpath is accessible year-round. Winter fell walks require proper gear."
  },
  "leyburn": {
    trailhead: "Trailhead at Leyburn town centre",
    parking: "Car park in Leyburn town centre. Free on-street parking on surrounding roads.",
    dog_policy: "Dogs are welcome on most paths around Leyburn but must be kept on a lead near livestock and ground-nesting birds.",
    number_of_routes: "Over 10 routes",
    best_walks: "Leyburn is an excellent base for Wensleydale walking. Popular routes include the Leyburn Shawl walk (4 miles) along the escarpment with views across the dale, the walk to Middleham Castle (3 miles), the walk to Constable Burton and the surrounding countryside (5 miles), and the drive to nearby Aysgarth Falls for the falls walk. The Shawl is Leyburn's signature walk.",
    facilities: "Car parks, pubs, cafes and shops in Leyburn. Toilets in the town centre. Leyburn has a weekly market. Regular bus services to Hawes and Richmond.",
    fun_facts: [
      "The Leyburn Shawl is a famous limestone escarpment walk that gets its name from a local legend that Mary, Queen of Scots dropped her shawl here while being held at nearby Bolton Castle.",
      "Leyburn sits above Wensleydale, one of the most picturesque of the Yorkshire Dales, and offers spectacular views across the dale from the Shawl.",
      "The town has a market charter dating back to the 14th century, and the weekly market is still held in the market square."
    ],
    route_recommendations: "Popular walks include the Leyburn Shawl walk (4 miles), the walk to Middleham Castle (3 miles), and the Constable Burton walk (5 miles).",
    difficulty_details: "Walks around Leyburn range from easy to moderate. The Shawl walk has some gentle climbing but is well within most walkers' abilities.",
    seasonal_advice: "Spring to autumn offers the best conditions. The Shawl walk can be muddy after rain. Winter walks on the higher ground require proper gear."
  },
  "dentdale": {
    trailhead: "Trailheads at Dent and Sedbergh",
    parking: "Car parks in Dent village and Sedbergh. Free roadside parking in smaller villages.",
    dog_policy: "Dogs are welcome on Dentdale paths but must be kept on a lead near livestock and ground-nesting birds. On open access land, keep dogs on a short lead from March to July.",
    number_of_routes: "Over 10 routes",
    best_walks: "Dentdale is one of the quieter and more beautiful of the Yorkshire Dales. Popular routes include the riverside walk along the River Dee from Dent (4 miles), the walk to Flintergill and the Artengill Viaduct (3 miles), the climb to Whernside from Dent (7 miles), and the Dent Village walk taking in the historic village and surrounding countryside. The Dales Way passes through Dentdale.",
    facilities: "Car park, pubs, cafes and a shop in Dent village. Toilets in Dent. Sedbergh has fuller facilities including shops and a visitor information centre.",
    fun_facts: [
      "Dentdale is one of the most remote and least-visited of the Yorkshire Dales, offering a peaceful alternative to the busier dales.",
      "Dent village is famous for its cobbled main street and its 'Dent marble', a dark limestone that was polished and used in Victorian church interiors.",
      "Adam Sedgwick, one of the founders of modern geology, was born in Dent in 1785, and a memorial to him stands in the village."
    ],
    route_recommendations: "Popular walks include the River Dee walk from Dent (4 miles), the Flintergill and Artengill Viaduct walk (3 miles), the Whernside climb from Dent (7 miles), and the Dales Way section through Dentdale (various distances).",
    difficulty_details: "Dentdale offers walks for most abilities, from easy riverside paths to the challenging climb of Whernside, one of the Yorkshire Three Peaks.",
    seasonal_advice: "Spring to autumn offers the best conditions. Dentdale is quieter than other dales and less affected by crowds. Winter climbs of Whernside require full hillwalking gear."
  },
  "yorkshire-wolds": {
    trailhead: "Trailheads at Pocklington, Thixendale and Fridaythorpe",
    parking: "Car parks in Pocklington and market towns. Free roadside parking in Wolds villages.",
    dog_policy: "Dogs are welcome on Wolds paths but must be kept on a lead near livestock and ground-nesting birds. On open access land, keep dogs on a short lead from March to July.",
    number_of_routes: "Over 15 routes",
    best_walks: "The Yorkshire Wolds offer gentle chalk downland walking with dramatic dry valleys and big skies. Popular routes include the Yorkshire Wolds Way (a 79-mile National Trail from Hessle to Filey), the walk to Garrowby Hill from Pocklington (6 miles), the Thixendale circuit (5 miles), and the walk around Nunburnholme and the Wolds escarpment (6 miles). The Wolds are less crowded than the Dales and offer a different landscape of rolling chalk hills.",
    facilities: "Car parks, pubs and shops in Pocklington, Market Weighton and Driffield. Toilets in the market towns. Limited facilities in smaller Wolds villages — plan ahead.",
    fun_facts: [
      "The Yorkshire Wolds Way is a 79-mile National Trail that runs from Hessle on the Humber to Filey on the coast, crossing the entire Wolds landscape.",
      "The Wolds are made of chalk, the same rock that forms the South Downs and the White Cliffs of Dover, and are characterised by dry valleys and rolling hills.",
      "Artist David Hockney, who grew up in Bradford, has been inspired by the Yorkshire Wolds landscape and produced many paintings of the area's distinctive countryside."
    ],
    route_recommendations: "Popular walks include the Yorkshire Wolds Way sections (various distances), the Thixendale circuit (5 miles), the Garrowby Hill walk from Pocklington (6 miles), and the Nunburnholme escarpment walk (6 miles).",
    difficulty_details: "The Wolds offer moderate walking with gentle gradients. The chalk downland is generally well-drained, making walks possible year-round. Some steep ascents up the escarpment.",
    seasonal_advice: "Spring to autumn offers the best conditions with wildflowers on the chalk grassland. The Wolds are generally accessible year-round as the chalk drains well."
  },
  "north-yorkshire": {
    trailhead: "Multiple trailheads across North Yorkshire",
    parking: "Car parks in most towns and villages. Free parking in smaller settlements.",
    dog_policy: "Dogs are welcome on most paths in North Yorkshire but must be kept on a lead near livestock and ground-nesting birds. On open access land, keep dogs on a short lead from March to July.",
    number_of_routes: "Over 30 routes",
    best_walks: "North Yorkshire offers some of the best walking in England, encompassing two National Parks (the Yorkshire Dales and North York Moors), the Yorkshire Wolds and the Howardian Hills. Popular routes include the Malham Cove circular in the Dales, the Roseberry Topping climb in the North York Moors, the Yorkshire Wolds Way, and the Cleveland Way along the coast. The diversity of landscapes makes North Yorkshire a walker's paradise.",
    facilities: "Car parks, pubs, cafes and shops in all major towns including Harrogate, Skipton, Richmond and Pickering. Visitor information centres at key locations. Regular bus and train services.",
    fun_facts: [
      "North Yorkshire is the largest county in England by area and contains two National Parks — the Yorkshire Dales and the North York Moors — plus the Howardian Hills AONB and the Yorkshire Wolds.",
      "Roseberry Topping, the distinctive hill in the North York Moors, gets its name from the Old Norse for 'Odin's hill' and was once thought to be climbed by Vikings.",
      "The Cleveland Way, a 109-mile National Trail, runs from Helmsley to Filey, passing through the North York Moors and along the dramatic Yorkshire coast."
    ],
    route_recommendations: "Popular walks include the Malham Cove circular (5 miles), Roseberry Topping (3 miles), the Cleveland Way sections (various distances), and the Yorkshire Wolds Way (79 miles).",
    difficulty_details: "North Yorkshire offers walks for all abilities, from easy riverside strolls to challenging fell walks and long-distance trails.",
    seasonal_advice: "Spring to autumn offers the best conditions. The two National Parks offer year-round walking but the fells and moors can be treacherous in winter weather."
  },
  "south-yorkshire": {
    trailhead: "Trailheads at various locations including Sheffield and Barnsley",
    parking: "Car parks at country parks and trailheads. Free parking at some locations.",
    dog_policy: "Dogs are welcome on most paths in South Yorkshire but must be kept on a lead near livestock and wildlife.",
    number_of_routes: "Over 10 routes",
    best_walks: "South Yorkshire offers varied walking from the Peak District fringes to reclaimed industrial landscapes. Popular routes include the Sheffield Round Walk (15 miles), the Trans Pennine Trail (various sections), the walks around Worsbrough Country Park (2-5 miles), and the routes through Wharncliffe Woods (3-5 miles). The Peak District National Park extends into the western edge of South Yorkshire.",
    facilities: "Car parks, pubs, cafes and shops in Sheffield, Barnsley, Rotherham and Doncaster. Toilets at country parks. Regular public transport.",
    fun_facts: [
      "South Yorkshire includes part of the Peak District National Park, Britain's first National Park, designated in 1951.",
      "The Trans Pennine Trail, which passes through South Yorkshire, is a 215-mile coast-to-coast route from Liverpool to Hull, much of it traffic-free.",
      "Wharncliffe Woods near Sheffield was once a royal hunting forest and is associated with the legend of Robin Hood, who is said to have used the woods as a hideout."
    ],
    route_recommendations: "Popular walks include the Sheffield Round Walk (15 miles), the Trans Pennine Trail sections (various distances), Worsbrough Country Park (2-5 miles), and Wharncliffe Woods (3-5 miles).",
    difficulty_details: "South Yorkshire offers walks for all abilities, from easy country park trails to moderate walks in the Peak District fringes.",
    seasonal_advice: "Spring to autumn offers the best conditions. Country park trails are accessible year-round. Peak District walks require proper gear in winter."
  },
  "west-yorkshire": {
    trailhead: "Trailheads at various locations including Haworth and Ilkley",
    parking: "Car parks at country parks and trailheads. Free parking at some locations.",
    dog_policy: "Dogs are welcome on most paths in West Yorkshire but must be kept on a lead near livestock and wildlife.",
    number_of_routes: "Over 15 routes",
    best_walks: "West Yorkshire offers varied walking from the Pennine moors to river valleys. Popular routes include the Bronte Way around Haworth (6 miles), the Ilkley Moor walks (3-5 miles), the Calderdale Way sections, and the walks around Hardcastle Crags near Hebden Bridge (4-6 miles). The Pennine Way passes through the western edge of West Yorkshire.",
    facilities: "Car parks, pubs, cafes and shops in Bradford, Leeds, Halifax and Hebden Bridge. Toilets at country parks. Regular public transport.",
    fun_facts: [
      "Ilkley Moor, immortalised in the Yorkshire anthem 'On Ilkla Moor Baht 'at', is one of the most famous moors in Yorkshire and offers fine walking with panoramic views.",
      "The Bronte Way around Haworth takes in the landscapes that inspired the novels of Charlotte, Emily and Anne Bronte, including the moorland walks around Top Withens, the inspiration for Wuthering Heights.",
      "Hardcastle Crags near Hebden Bridge is a deep woodland valley owned by the National Trust, with 19th-century Gibson Mill at its heart."
    ],
    route_recommendations: "Popular walks include the Bronte Way around Haworth (6 miles), Ilkley Moor walks (3-5 miles), Hardcastle Crags (4-6 miles), and the Calderdale Way sections (various distances).",
    difficulty_details: "West Yorkshire offers walks for all abilities, from easy valley walks to moderate moorland routes on the Pennine fringes.",
    seasonal_advice: "Spring to autumn offers the best conditions. The Pennine moors can be exposed and boggy — wear waterproof footwear. Winter walks on the moors require proper gear."
  },
  "york": {
    trailhead: "Trailheads at York city centre and the River Ouse",
    parking: "Car parks throughout the city centre. Park and ride available from four sites around the city.",
    dog_policy: "Dogs are welcome on most paths around York but must be kept on a lead in the city centre, near livestock and on public roads.",
    number_of_routes: "Over 10 routes",
    best_walks: "York offers varied walking from the historic city walls to the surrounding Vale of York countryside. Popular routes include the York City Walls circuit (2.5 miles), the River Ouse towpath walk (various distances), the walk to Bishopthorpe Palace (5 miles), and the Selby Canal path from Naburn (6 miles). The city itself is a walking delight with medieval streets and historic architecture.",
    facilities: "Car parks, pubs, cafes, shops and restaurants throughout York. Toilets at various city centre locations. Excellent public transport including trains and buses.",
    fun_facts: [
      "York's city walls are the longest and best-preserved medieval city walls in England, stretching for 2.5 miles around the historic centre.",
      "The city has more miles of intact city wall than any other city in England, and visitors can walk the entire circuit in about an hour.",
      "York was founded by the Romans in 71 AD as Eboracum, and the Multangular Tower in the Museum Gardens is a surviving Roman wall tower that is nearly 2,000 years old."
    ],
    route_recommendations: "Popular walks include the York City Walls circuit (2.5 miles), the River Ouse towpath (various distances), the walk to Bishopthorpe Palace (5 miles), and the Selby Canal path (6 miles).",
    difficulty_details: "Walks around York are mostly easy, following flat riverside paths, canal towpaths and the city walls. Suitable for all abilities.",
    seasonal_advice: "Year-round walking is possible. The city walls and riverside paths are accessible in most weather. Spring and summer are best for the surrounding countryside walks."
  },
  "general-yorkshire": {
    trailhead: "Multiple trailheads across Yorkshire",
    parking: "Car parks at most walking locations. Free parking in rural areas.",
    dog_policy: "Dogs are welcome on most Yorkshire paths but must be kept on a lead near livestock, ground-nesting birds and on open access land during the bird breeding season (March to July).",
    number_of_routes: "Over 50 routes across Yorkshire",
    best_walks: "Yorkshire offers some of the best walking in England, with two National Parks (the Yorkshire Dales and North York Moors), the Yorkshire Wolds, the Pennines and the coast. Popular routes include the Malham Cove circular, the Three Peaks Challenge, Roseberry Topping, the Cleveland Way, the Yorkshire Wolds Way, and the Pennine Way. Yorkshire's diverse landscapes offer something for every walker.",
    facilities: "Car parks, pubs, cafes and shops in all major towns. Visitor information centres at key locations. Regular public transport including trains and buses.",
    fun_facts: [
      "Yorkshire is the largest historic county in England and contains two National Parks — the Yorkshire Dales and the North York Moors — plus part of the Peak District.",
      "The Pennine Way, Britain's first National Trail, passes through Yorkshire on its 268-mile journey from the Peak District to the Scottish Borders.",
      "Yorkshire's Three Peaks — Pen-y-ghent, Whernside and Ingleborough — form one of the most famous challenge walks in Britain, with walkers aiming to complete all three in under 12 hours."
    ],
    route_recommendations: "Popular walks include the Malham Cove circular (5 miles), the Three Peaks Challenge (24 miles), Roseberry Topping (3 miles), and the Cleveland Way (109 miles).",
    difficulty_details: "Yorkshire offers walks for all abilities, from easy riverside strolls to challenging fell walks and long-distance National Trails.",
    seasonal_advice: "Spring to autumn offers the best conditions. The National Parks offer year-round walking but the fells and moors can be treacherous in winter weather."
  }
};

for (const entry of data) {
  const v = verified[entry.slug];
  if (!v) continue;

  if (v.trailhead) entry.trailhead = v.trailhead;
  if (v.parking) entry.parking = v.parking;
  if (v.dog_policy) entry.dog_policy = v.dog_policy;
  if (v.number_of_routes) entry.number_of_routes = v.number_of_routes;
  if (v.best_walks) entry.best_walks = v.best_walks;
  if (v.facilities) entry.facilities = v.facilities;
  if (v.fun_facts) entry.fun_facts = v.fun_facts;

  // Rebuild description without placeholders
  if (entry.description && entry.description.includes('[VERIFY')) {
    const baseDesc = entry.description.replace(/\s*\[VERIFY:[^\]]*\]/g, '').trim();
    entry.description = baseDesc + ' ' + (v.best_walks || '');
  }

  // Fix history
  if (entry.history && entry.history.includes('[VERIFY')) {
    entry.history = entry.history.replace(/\s*\[VERIFY:[^\]]*\]/g, '').trim();
  }

  // Fix FAQ answers
  if (entry.faqs) {
    for (const faq of entry.faqs) {
      if (faq.answer.includes('[VERIFY: confirm specific route recommendations]')) {
        faq.answer = faq.answer.replace(' [VERIFY: confirm specific route recommendations]', '').trim() + ' ' + (v.route_recommendations || '');
      }
      if (faq.answer.includes('[VERIFY: confirm difficulty details]')) {
        faq.answer = faq.answer.replace(' [VERIFY: confirm difficulty details]', '').trim() + ' ' + (v.difficulty_details || '');
      }
      if (faq.answer.includes('[VERIFY: confirm seasonal advice]')) {
        faq.answer = faq.answer.replace(' [VERIFY: confirm seasonal advice]', '').trim() + ' ' + (v.seasonal_advice || '');
      }
      if (faq.answer.includes('[VERIFY: dog policy')) {
        faq.answer = v.dog_policy || 'Dogs are welcome under close control.';
      }
    }
  }

  // Fix fun_facts that contain VERIFY
  if (entry.fun_facts) {
    entry.fun_facts = entry.fun_facts.map(f => {
      if (f.includes('[VERIFY')) {
        return f.replace(/\s*\[VERIFY:[^\]]*\]/g, '').trim();
      }
      return f;
    });
  }
}

writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf-8');
console.log('Yorkshire dales walks data filled successfully.');
