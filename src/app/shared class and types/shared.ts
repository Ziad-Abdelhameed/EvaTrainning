export interface IProduct {
  productId: number;
  productName: string;
  productQuantity: number;
  productPrice: number;
  productImg: string;
}
export interface ICategory {
  categoryId: number;
  categoryName: string;
}
export enum DiscountOffers {
  'No Discount',
  '10%',
  '15%',
}
