export interface TourCart {
  tourId: string;
  tourImage: string;
  adult: number;
  child: number;
  date: string;
  totalPrice: number;
}

export type Cart = {
  cartId: string;
  userId: string;
  type: "tour" | "hotel" | "ticket";
  tourId?: TourCart;
  totalPrice: number;
};
