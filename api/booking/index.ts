import { InforBooking } from "@/model/infoBooking";
import {
  getFirestore,
  doc,
  setDoc,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
const db = getFirestore();

export const createBooking = async (infoBooking: InforBooking) => {
  try {
    infoBooking.createdAt = new Date().toISOString();
    await setDoc(doc(db, "bookings", infoBooking.bookingId), infoBooking);
    console.log(`Infor bokking added successfully.`);
  } catch (error) {
    console.error("Error adding location: ", error);
  }
};

export const fetchBookingsByUserId: any = async (userId: string) => {
  try {
    const bookingsRef = collection(db, "bookings");
    const q = query(bookingsRef, where("userId", "==", userId));
    const querySnapshot = await getDocs(q);
    const bookings: InforBooking[] = [];

    querySnapshot.forEach((doc) => {
      bookings.push({ bookingId: doc.id, ...doc.data() } as InforBooking);
    });

    return bookings;
  } catch (error: any) {
    console.error("Error fetching sliders:", error.message);
  }
};
