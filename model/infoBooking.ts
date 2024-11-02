import { Participant } from "./participant";
import { TourBooker } from "./tourBooker";

export interface CreditCardInfo {
  type: string;
  number: string;
  expiry: string;
  cvc: string;
}

export interface InforBooking {
  bookingId: string;
  userId: string;
  tourId: string;
  totalPrice: number;
  booker: TourBooker;
  participants: Participant[];
  creditCard: CreditCardInfo;
  status?: string;
  createdAt?: string;
  dateStart?: string;
}
