import { createSlice } from '@reduxjs/toolkit';
import data from './data/data.json';

interface Review {
  customer: string;
  review: string;
  score: number;
}

interface Sales {
  weekEnding: string;
  retailSales: number;
  wholesaleSales: number;
  unitsSold: number;
  retailerMargin: number;
}

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