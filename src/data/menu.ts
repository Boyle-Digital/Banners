export type MenuItem = {
  name: string
  desc?: string
  price?: string
  fave?: boolean
}

export type MenuCategory = {
  id: string
  label: string
  note?: string
  items: MenuItem[]
  footer?: string
}

export const ORDER_URL = 'http://bannerslexinto.hrpos.heartland.us'

export const menu: MenuCategory[] = [
  {
    id: 'appetizers',
    label: 'Appetizers',
    items: [
      { name: 'Egg Roll of the Month', desc: 'Rotating house made egg roll, with signature sauce.', price: '11', fave: true },
      { name: 'Banners Elite Nachos', desc: 'Fried tortilla chips covered in queso and topped with pickled red onion, grilled jalapenos, shredded lettuce, pico de gallo, salsa, sour cream and guacamole. Your choice of chicken, steak, BBQ pulled pork, or fajita style veggies.', price: '15', fave: true },
      { name: "Chips 'N Dips", desc: 'White corn tortilla chips served with your choice of salsa, queso, or fresh guacamole.', price: 'One 6.50 / Two 8.50 / Three 10' },
      { name: 'Buffalo Chicken Dip', desc: 'Served with celery, carrots and cajun house chips.', price: '11' },
      { name: 'Spinach Dip', desc: 'Served with celery, carrots, and tortilla chips.', price: '10' },
      { name: 'Quesadilla', desc: 'Your choice of grilled steak, chicken, or veggie quesadilla, with cheddar and colby jack cheese blend and pico de gallo. Add queso for 2.', price: '12.50' },
      { name: 'KY Beer Cheese', desc: 'House made beer cheese served with crisp celery, carrots, and house cajun seasoned chips.', price: '10' },
      { name: "Rupp's Runts", desc: 'Mini corn dogs served with choice of honey mustard or spicy mustard.', price: '10' },
      { name: 'Potato Skins', desc: 'Loaded with melted cheddar and colby jack cheese blend and crispy crumbled bacon, scallions, and a side of sour cream.', price: '10.50' },
      { name: "Banners' Spuds", desc: 'Your choice of tots or fries smothered in queso or melted cheddar cheese sauce, crispy crumbled bacon, and scallions. Served with a side of ranch or sour cream.', price: '11' },
      { name: 'Pepper Jack Cheese Balls', desc: 'Addictive spicy cheese bites fried golden brown and served with ranch or marinara.', price: '10' },
      { name: 'Warm Bavarian Pretzels', desc: 'Served with your choice of queso or warm beer cheese.', price: '9.50' },
      { name: 'Breaded Banana Peppers', desc: 'Hand breaded banana pepper rings served with ranch or cocktail sauce.', price: '9.50' },
      { name: 'Beer Battered Mushrooms', desc: 'Hand battered mushrooms served with your choice of our horsey sauce or ranch dressing.', price: '10' },
      { name: 'Beer Battered Onion Rings', desc: 'Thick cut, beer battered sweet onions served with our bistro sauce.', price: '9.50' },
      { name: 'Fried Pickles', desc: 'Crisp kosher pickle chips, hand breaded and served with choice of ranch or horsey mayo.', price: '9.50' },
      { name: 'Wisconsin Cheese Curds', desc: 'All natural Wisconsin white cheddar cheese curds with a light garlic breading. Served with choice of ranch, horsey mayo, or marinara.', price: '10' },
      { name: 'Chicken Tenders', desc: 'Hand breaded golden crispy chicken tenders served with your choice of one of our house sauces for dipping.', price: '11' },
      { name: 'Fried Brussel Sprouts & Pork Belly', desc: 'Fried Brussel sprouts and pork belly drizzled with balsamic glaze.', price: '12.50' },
    ],
  },
  {
    id: 'flatbreads',
    label: 'Flatbreads',
    note: 'All flatbreads served on 10-inch garlic flatbread with mozzarella cheese. Add additional toppings for an additional charge.',
    items: [
      { name: 'Buffalo Chicken', desc: 'Grilled chicken, red onions, banana peppers, buffalo chicken dip, drizzled with smoked jalapeno ranch.', price: '14', fave: true },
      { name: 'C.B.R.', desc: 'Chicken, bacon, ranch.', price: '13' },
      { name: 'The Veg', desc: 'Grilled vegetable medley, spinach dip, parmesan cheese and finished with balsamic glaze.', price: '13' },
    ],
  },
  {
    id: 'salads',
    label: 'Salads',
    footer: 'House made dressings: Bleu Cheese, Honey Mustard, Thousand Island, Balsamic Vinaigrette, Smoked Jalapeno Ranch, Ranch, Cilantro Lime Vinaigrette, Lime Crema. Additional dressings .50 each.',
    items: [
      { name: 'Grilled California Chicken Salad', desc: 'Crisp spring mix topped with cheddar and colby jack cheese blend, fresh guacamole, tomatoes, cucumbers, pickled red onion, bacon, grilled chicken, and crispy tortilla strips. Served with house made cilantro-lime vinaigrette. Substitute grilled salmon 5.', price: '12', fave: true },
      { name: 'Caprese', desc: 'Spring mix, diced tomatoes, red onion, cucumbers, and mozzarella cheese tossed in balsamic vinaigrette. Add chicken 4, salmon 6, shrimp 8.', price: '9' },
      { name: 'House', desc: 'Crisp spring mix lettuce topped with cheddar and colby jack cheese blend, tomatoes, cucumbers, red onion, bacon, and croutons.', price: '10' },
      { name: 'Classic Chicken Salad', desc: 'Crisp spring mix topped with cheddar and colby jack cheese blend, tomatoes, cucumbers, red onion, bacon, and croutons with choice of grilled or crispy chicken breast.', price: '12.50' },
      { name: 'Grilled Chicken Caesar', desc: 'A bed of fresh romaine, parmesan cheese, grilled chicken breast and croutons. Substitute grilled salmon 6.', price: '14' },
      { name: 'Chef', desc: 'Crisp spring mix topped with cheddar and colby jack cheese blend, tomato, cucumber, red onion, bacon, ham, turkey, egg, and croutons.', price: '14' },
      { name: 'Italian Salad', desc: 'Crisp spring mix, ham, pepperoni, salami, bacon, banana peppers, red onion, tomatoes, parmesan cheese and choice of dressing.', price: '14' },
      { name: 'Buffalo Chicken Salad', desc: 'Choice of grilled or fried chicken tossed in your choice of sauce on top of spring mix with banana peppers, red onion, diced tomato, croutons and bleu cheese crumbles served with choice of dressing.', price: '14' },
    ],
  },
  {
    id: 'burgers',
    label: 'Burgers',
    note: 'All burgers are hand pattied, never frozen, half pound choice Angus beef and served with chips and pickle spear. Substitute chicken breast or vegan patty for any burger. Add beer cheese, bacon, guacamole, or mushrooms for an additional charge. Substitute a side for an additional charge.',
    items: [
      { name: 'Hangover Burger', desc: 'Topped with double American cheese, bacon, mayo, and an over easy egg.', price: '14.50', fave: true },
      { name: 'Banner Burger', desc: 'Grilled to order and topped with lettuce, tomato, red onion, mayo, pickles and your choice of cheese: American, Swiss, cheddar, bleu cheese, provolone, or pepper jack.', price: '14' },
      { name: 'The Banner Mac', desc: 'Two 4 oz smashed patties topped with shredded lettuce, onion, pickles, American cheese and house special sauce.', price: '14.50' },
      { name: 'Mushroom & Swiss', desc: 'Loaded with sautéed mushrooms and Swiss cheese.', price: '14.50' },
      { name: 'Championship Ring Burger', desc: 'Topped with cheddar, crisp bacon, lettuce, tomato, mayo and beer battered onion rings.', price: '15.50' },
      { name: 'Inferno Burger', desc: 'Topped with pepper jack cheese, jalapenos, and Inferno Sauce.', price: '14.50' },
      { name: 'Big Bleu Burger', desc: 'Blackened and topped with bleu cheese dressing and crumbles.', price: '14.50' },
      { name: 'Beer Cheese Burger', desc: 'Topped with house made beer cheese, crisp pork belly.', price: '14.50' },
      { name: 'Cuban Burger', desc: 'Topped with ham, in house smoked BBQ pork, Swiss cheese, spicy mustard and pickles.', price: '16' },
      { name: 'BBQ Burger', desc: 'Topped with house made BBQ, cheddar, and bacon, beer battered onion ring.', price: '15.50' },
      { name: "Mac N' Cheese Bacon Burger", desc: "Topped with our mac n' cheese and crisp bacon.", price: '15' },
      { name: 'Cheeseburger in Paradise', desc: 'Topped with crisp bacon, guacamole, pico de gallo, and cheddar cheese.', price: '15' },
      { name: 'Banners Sliders', desc: 'Four mini burgers served with sautéed onions and pickles and choice of cheese: American, Swiss, cheddar, provolone, or pepper jack.', price: '14.50' },
      { name: 'Patty Melt', desc: 'Burger sandwiched between slices of grilled swirled rye with Swiss cheese and sautéed onions.', price: '14.50' },
      { name: 'Veggie Burger', desc: 'Our protein rich vegan friendly patty is topped with lettuce, tomato, red onion, and pickles.', price: '12' },
    ],
  },
  {
    id: 'sandwiches',
    label: 'Sandwiches',
    note: 'All sandwiches are served with chips and pickle spear. All sandwiches can be made into a wrap. Substitute a side for an additional charge.',
    items: [
      { name: 'Reuben', desc: 'The classic deli sandwich, served on grilled rye stacked with in house smoked corned beef, sauerkraut, Swiss cheese, and finished with 1000 island dressing.', price: '14', fave: true },
      { name: 'Grilled Italian Sub', desc: 'Grilled salami, ham, and pepperoni on a baked hoagie topped with Italian dressing, mayo, banana peppers, provolone, lettuce, tomato, and onion.', price: '14', fave: true },
      { name: 'BLT', desc: 'Crispy strips of bacon, lettuce, tomatoes, and mayo piled onto toasted bread.', price: '12' },
      { name: 'Meatball Sub', desc: 'House made Angus ground beef and spicy Italian sausage meatballs topped with melted mozzarella, house marinara and banana peppers.', price: '13' },
      { name: 'California Chicken Wrap', desc: 'Grilled or fried chicken, guacamole, cheddar, bacon, and pickled red onion wrapped in a grilled flour tortilla.', price: '13' },
      { name: 'The Big Cuz', desc: 'Grilled ham, grilled roast beef, provolone, Swiss, grilled jalapeno, grilled pickled red onion, horsey mayo.', price: '14' },
      { name: 'Chicken Sandwich', desc: 'Grilled or fried marinated chicken on a toasted bun with lettuce, tomato, red onion, pickles and mayo.', price: '13' },
      { name: 'Buffalo Bleu Chicken Sandwich', desc: 'Grilled or fried marinated chicken tossed in your choice of sauce, topped with lettuce, tomato, red onion and bleu cheese dressing and crumbles.', price: '14' },
      { name: 'Double Decker Club', desc: 'A towering sandwich with sliced ham and turkey, crisp bacon, Swiss cheese, lettuce, tomato, and mayo all packed between three slices of toasted bread, served with honey mustard.', price: '14' },
      { name: 'BLT Chicken Club', desc: 'Grilled or fried marinated chicken, on a toasted bun, with choice of cheese, lettuce, bacon, tomato, red onion, house made jalapeno ranch.', price: '14' },
      { name: 'Buffalo Chicken Wrap', desc: 'A warm tortilla stuffed with choice of grilled or crispy chicken rolled in buffalo sauce with lettuce, red onion, tomato, cheddar and colby jack cheese blend, and bleu cheese crumbles.', price: '13.50' },
      { name: 'Philly Cheesesteak', desc: 'Choice of chicken or steak with provolone cheese, grilled onion, green peppers, mushrooms, and mayo.', price: '14' },
      { name: 'Cajun Chicken Salad Sandwich', desc: 'House-made blackened chicken salad, lettuce, tomato.', price: '13' },
      { name: 'Beef and Cheese', desc: 'Roast beef piled high on a toasted bun with grilled white onion, choice of beer cheese or melted cheddar cheese sauce and our sweet and tangy red sauce.', price: '14' },
      { name: 'Pulled Pork Sandwich', desc: 'House smoked and tossed in BBQ sauce with sliced red onion and choice of cheese.', price: '14' },
      { name: 'Big Dipper', desc: 'Sliced roast beef stacked on our hoagie with grilled white onion, provolone and a side of au jus.', price: '13.50' },
      { name: 'Big Game Fish Sandwich', desc: 'Hand breaded cod filet served on a toasted bun with lettuce, tomato, red onion, and house made tartar sauce on the side.', price: '14' },
      { name: 'Tender Melt', desc: 'Hand breaded chicken tenders on toasted sourdough with pepper jack cheese, bacon, lettuce, tomato, onion, and mayo. Try our tenders tossed in one of our Championship Sauces.', price: '13.50' },
      { name: 'Turkey Melt', desc: 'Grilled turkey on toasted sourdough with mayo, pepper jack, bacon, lettuce, tomato, and onion.', price: '13.50' },
      { name: 'Bacon Egg & American Cheese', desc: 'Your choice of toasted bread with melted American cheese, two over easy eggs, crispy bacon, mayo, and spicy garlic sauce.', price: '12.50' },
    ],
  },
  {
    id: 'tacos',
    label: 'Tacos',
    note: 'All tacos served on grilled flour tortillas and with choice of side.',
    items: [
      { name: 'Chicken or Steak Tacos', desc: 'Three choice of grilled chicken or steak tacos topped with queso, grilled jalapenos, pico de gallo, and pickled red onion.', price: '14' },
      { name: 'Buffalo Chicken Taco', desc: 'Two hand breaded chicken tenders tossed in spicy garlic wing sauce and topped with shredded lettuce, diced tomato and red onion, and drizzled with jalapeno ranch.', price: '14' },
      { name: 'Shrimp Taco', desc: 'Two fried shrimp tacos, bacon, fried brussel sprouts, spicy mayo.', price: '15' },
      { name: 'Pulled Pork Taco', desc: 'Two in house smoked BBQ pulled pork tacos, grilled onions and queso.', price: '14' },
      { name: 'Pork Belly Taco', desc: 'Two crispy pork belly tacos topped with beer cheese and pickled red onions.', price: '15' },
      { name: 'Fish Tacos', desc: 'Three fried cod tacos topped with colby jack cheese, pico de gallo, and cilantro lime crema.', price: '14' },
    ],
  },
  {
    id: 'entrees',
    label: 'Entrees',
    note: 'Ask your server about our daily specials.',
    items: [
      { name: 'Grilled Pork Chop', desc: 'A pair of bone-in pork chops seared and roasted with a honey garlic bourbon glaze. Choice of two sides.', price: '16.50', fave: true },
      { name: 'Grilled Salmon', desc: 'Grilled Norwegian salmon filet seasoned with your choice of lemon pepper, blackened, or honey garlic bourbon glaze. Served with choice of two sides.', price: '16.50' },
      { name: 'Blackened Salmon Pasta', desc: 'Grilled salmon filet over a bed of penne, topped with sundried-tomato cream sauce, topped with parmesan.', price: '17' },
      { name: 'Penne and Meatballs', desc: 'Marinara served with house made meatball, topped with parmesan.', price: '15' },
      { name: 'Smoked Meatloaf', desc: 'In house smoked meatloaf covered in sweet and tangy red sauce served with your choice of two sides.', price: '16' },
      { name: "Fish 'N Chips", desc: 'Hand breaded cod filet, served with French fries and cole slaw.', price: '15' },
    ],
  },
  {
    id: 'sides',
    label: 'Sides',
    note: 'Price listed is substitution charge.',
    items: [
      { name: 'French Fries', price: '2.50' },
      { name: 'Tots', price: '2.50' },
      { name: 'Cole Slaw', price: '3.50' },
      { name: "Mac N' Cheese", price: '3.50' },
      { name: 'Onion Rings', price: '4' },
      { name: 'Bowl of Chili', price: '4' },
      { name: 'Side Salad', price: '4.50' },
      { name: 'Sweet Potato Fries', price: '3' },
      { name: 'Vegetable Medley', price: '4' },
      { name: 'Rice Pilaf', price: '3.50' },
      { name: 'Fried Balsamic Brussel Sprouts', price: '4.50' },
    ],
  },
  {
    id: 'kids',
    label: 'Kids',
    note: "Children 12 and under. All kids' meals include choice of side and a drink. Kids eat FREE every Monday — one free kids meal per adult entree.",
    items: [
      { name: 'Cheeseburger', price: '5' },
      { name: 'Chicken Tenders', price: '5' },
      { name: 'Penne Pasta', desc: 'With marinara.', price: '5' },
      { name: 'Mini Corn Dogs', price: '5' },
      { name: 'Grilled Cheese', price: '5' },
      { name: 'Mac N Cheese', price: '5' },
    ],
  },
  {
    id: 'desserts',
    label: 'Desserts',
    items: [
      { name: 'Fried Oreos', desc: "Hand battered, deep fried, served with Hershey's chocolate syrup and powdered sugar.", price: '6' },
      { name: 'Chocolate Stuffed Crunchurros', desc: "Topped with Hershey's chocolate syrup, with a scoop of vanilla ice cream.", price: '7' },
    ],
  },
  {
    id: 'beverages',
    label: 'Beverages',
    items: [
      { name: 'Fountain Drinks', desc: 'Pepsi, Diet Pepsi, Dr. Pepper, Mt Dew, Sierra Mist, Schweppes Ginger Ale.', price: '3' },
      { name: 'Orange Juice', price: '3' },
      { name: 'Gatorade', price: '3' },
      { name: "Freddie's Root Beer", price: '3.25' },
    ],
  },
]

// Championship sauces, hottest first (as printed on the menu heat scale)
export const sauces = [
  'EFF Around and Find Out',
  'Scorched Earth',
  'Inferno',
  'Hot',
  'Blackberry Habanero',
  'Hot BBQ',
  'Spicy Garlic',
  'Smokehouse Buffalo',
  'Honey Garlic Buffalo',
  'Medium',
  'Mild',
  'Korean BBQ',
  'BBQ',
  'Honey BBQ',
  'Garlic Parmesan',
]
