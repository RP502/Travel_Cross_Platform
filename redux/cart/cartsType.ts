export interface TourCart {
  tourId: string;
  tourName: string;
  tourImage: string;
  tourShortDesc: string;
  adult: number;
  child: number;
  date: string;
  totalPrice: number;
  price: number;
  childrenPrice: number;
  sale: number;
}

export type Cart = {
  cartId: string;
  userId: string;
  type: "tour" | "hotel" | "ticket";
  tour?: TourCart;
  totalPrice: number;
  isSelecting?: boolean;
};
