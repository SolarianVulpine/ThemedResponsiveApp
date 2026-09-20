// Hero img: src/assets/workshop.jpg
// Products page: has a section that shows a list of item categories on the left and a list of products, each with an image, title, description, and price. The products are displayed in a grid layout that is responsive; on md and larger the products are displayed in three columns, on smaller screens the products are displayed in two columns. Each product has a button to add it to the cart. The products page also has a footer with links to social media and contact information. The footer is always at the bottom of the page and is responsive, with social media links on the left and contact information on the right.
// uses zustand for state management, react-router-dom for routing, and tailwindcss for styling. The app is fully responsive and works on all screen sizes. The app is built with React and TypeScript.
// components are provided using shadcn/ui and shadcn/icons.
// components: ProductList, ProductCard, Footer
// List of product categories: Swords, Shields, Armor, Potions, Scrolls, Accessories
// List of products (six products per category) and their prices: Swords: Longsword: $100, Shortsword: $50, Katana: $200, Rapier: $150, Scimitar: $120, Greatsword: $250; Shields: Buckler: $30, Kite Shield: $80, Tower Shield: $150, Round Shield: $60, Heater Shield: $100, Pavise: $200; Armor: Leather Armor: $75, Chainmail Armor: $125, Plate Armor: $250, Scale Armor: $175, Brigandine Armor: $200, Gambeson: $50; Potions: Healing Potion: $25, Mana Potion: $30, Strength Potion: $40, Invisibility Potion: $50, Speed Potion: $35, Fire Resistance Potion: $45; Scrolls: Scroll of Fireball: $60, Scroll of Teleportation: $75, Scroll of Summoning: $80, Scroll of Protection: $90, Scroll of Healing: $85, Scroll of Invisibility: $95; Accessories: Ring of Strength: $100, Amulet of Health: $125, Belt of Giant Strength: $150, Cloak of Invisibility: $200, Boots of Speed: $75, Gloves of Dexterity: $60
// List of 'Featured Products' (one product per category) and percent of sale: Longsword: 10%, Kite Shield: 15%, Plate Armor: 20%, Healing Potion: 25%, Scroll of Fireball: 30%, Ring of Strength: 35%

import React from "react";
import { ProductList } from "@/components/ProductList";
import { Footer } from "@/components/Footer";
