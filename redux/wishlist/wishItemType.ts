export type WishItem = {
  wishId: string;
  userId: string;
  type: 'tour' | 'hotel' | 'ticket';
  tourId?: string;
  hotelId?: string;
  ticketId?: string;
}