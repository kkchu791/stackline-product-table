import { createSlice } from '@reduxjs/toolkit';
import data from './data/data.json';

// Review interface for the product reviews
interface Review {
  customer: string;
  review: string;
  score: number;
}

// Sales interface for the sales data
interface Sales {
  weekEnding: string;
  retailSales: number;
  wholesaleSales: number;
  unitsSold: number;
  retailerMargin: number;
}

// Product interface that matches the structure of the data
interface Product {
  id: string;
  title: string;
  image: string;
  subtitle: string;
  brand: string;
  reviews: Review[]; // Array of reviews
  retailer: string;
  details: string[]; // Array of product details
  tags: string[]; // Array of tags
  sales: Sales[]; // Array of sales data
}

// Interface for the Redux state
interface ProductState {
  products: Product[];
}

const initialState: ProductState = {
  products: data,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
});

export default productSlice.reducer;