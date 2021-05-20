/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Profile: undefined;
  Cart: undefined;
  More: undefined;
};

export type HomeStackParamList = {
  HomeScreen: undefined;
  ProductDetails: undefined;
};

export type Category = {
  id: string;
  categoryName: string;
  product: Product[];
};

export type Product = {
  id: string;
  imageUri: string;
  price: number;
  productName: string;
  productDescription?: string;
};
