import { faker } from '@faker-js/faker';

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

export const generateFakeProducts = (count: number): Product[] => {
  const products: Product[] = [];

  for (let i = 0; i < count; i++) {
const categories = ['Clothing', 'Accessories', 'Equipment'];
const cricketProductNames = [
  'SS Master 5000 Bat',
  'SG Test Ball',
  'MRF Genius Pads',
  'Shrey Pro Helmet',
  'Adidas Cricket Shoes',
  'Kookaburra Wicket Gloves',
  'Gray Nicolls Kit Bag'
];
    
    const category = categories[Math.floor(Math.random() * categories.length)];

     const name = cricketProductNames[Math.floor(Math.random() * cricketProductNames.length)];

    products.push({
      id: faker.string.uuid(),
      name: name,
      price: parseFloat(faker.commerce.price({ min: 10, max: 100, dec: 2 })),
      image: faker.image.urlPicsumPhotos({ width: 300, height: 300 }),
      description: faker.commerce.productDescription(),
      category: category, 
    });
  }

  return products;
};
