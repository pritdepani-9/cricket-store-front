// Generates fake cricket product data including name, price, image, description, category, and sizes.
// Uses predefined cricket product names, categories, sizes, and descriptions with Faker for realistic data.


import { faker } from '@faker-js/faker';

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
    sizes?: string[];
}

export const generateFakeProducts = (count: number): Product[] => {
  const products: Product[] = [];

  const categories = ['Cricket Bats', 'Cricket Balls', 'Protective Gear', 'Cricket Clothing', 'Cricket Footwear', 'Cricket Accessories'];

  const categorySizes: Record<string, string[]> = {
    'Cricket Bats': ['Short Handle', 'Long Handle', 'Harrow', 'Size 6', 'Size 5'],
    'Cricket Balls': ['Standard (156g)', 'Junior (133g)', 'Training (142g)'],
    'Protective Gear': ['S', 'M', 'L', 'XL', 'XXL'],
    'Cricket Clothing': ['S', 'M', 'L', 'XL', 'XXL'],
    'Cricket Footwear': ['US 7', 'US 8', 'US 9', 'US 10', 'US 11', 'US 12'],
    'Cricket Accessories': ['One Size']
  };
  
  const cricketProductNames = {
    'Cricket Bats': [
      'SS Ton Player Edition',
      'MRF Genius Grand Edition',
      'Kookaburra Ghost Pro',
      'Gray Nicolls Predator 3.0',
      'New Balance DC 1080',
      'SG Savage Xtreme',
      'DSC Scorer Bat',
      'BAS Vampire Bat'
    ],
    'Cricket Balls': [
      'SG Test Match Ball',
      'Kookaburra Turf Ball',
      'Dukes Cricket Ball',
      'Readers Club Cricket Ball',
      'Gray Nicolls Tournament Ball',
      'Cosco Triumph Ball',
      'SS Ton Leather Ball'
    ],
    'Protective Gear': [
      'Shrey Pro Helmet',
      'SS Test Helmet',
      'GM Original Leg Guards',
      'Kookaburra Pro Batting Pads',
      'MRF Genius Thigh Guard',
      'SG Test Chest Guard',
      'New Balance Arm Guard',
      'Kookaburra Wicket Keeping Gloves'
    ],
    'Cricket Clothing': [
      'SG Test Match Jersey',
      'Kookaburra Pro Cricket Pants',
      'SS Premium Cricket T-Shirt',
      'Adidas Club Cap',
      'Gray Nicolls Compression Shirt',
      'New Balance Cricket Socks',
      'Nike Dry Fit Cricket Polo'
    ],
    'Cricket Footwear': [
      'Adidas Adipower Cricket Shoes',
      'ASICS Gel-300 Batting Shoes',
      'New Balance DC 1080 Shoes',
      'Kookaburra Pace Pro Shoes',
      'Puma Evopower Cricket Spikes',
      'SS Master Cricket Shoes'
    ],
    'Cricket Accessories': [
      'SG Bat Grip',
      'SS Bat Cover',
      'Kookaburra Ball Polisher',
      'MRF Batting Gloves',
      'Gray Nicolls Bat Repair Kit',
      'Cricket Stump Set',
      'Bails (Premium)',
      'Cricket Kit Bag'
    ]
  };

  const productDescriptions = {
  'Cricket Bats': 'Handcrafted with premium English willow for explosive strokeplay and exceptional balance.',
  'Cricket Balls': 'High-quality leather cricket balls designed for match and practice sessions with excellent seam durability.',
  'Protective Gear': 'Top-grade protective gear offering superior comfort and safety for batsmen and wicketkeepers.',
  'Cricket Clothing': 'Lightweight, breathable cricket apparel engineered for peak performance in all conditions.',
  'Cricket Footwear': 'Advanced cricket shoes providing excellent grip, support, and comfort on turf and synthetic pitches.',
  'Cricket Accessories': 'Essential cricket accessories to keep your game sharp, from grips to gloves and kits.'
};


  for (let i = 0; i < count; i++) {
    const category = categories[Math.floor(Math.random() * categories.length)];
    const name = cricketProductNames[category as keyof typeof cricketProductNames][
      Math.floor(Math.random() * cricketProductNames[category as keyof typeof cricketProductNames].length)
    ];
     const description = productDescriptions[category as keyof typeof productDescriptions];

      const sizes = categorySizes[category];

    products.push({
      id: faker.string.uuid(),
      name: name,
      price: parseFloat(faker.commerce.price({ min: 10, max: 100, dec: 2 })),
      image: faker.image.urlPicsumPhotos({ width: 300, height: 300 }),
      description: description,
      category: category,
         sizes: sizes
    });
  }

  return products;
};