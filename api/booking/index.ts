import { InforBooking } from "@/model/infoBooking";
import { getFirestore, doc, setDoc } from "firebase/firestore";
const db = getFirestore();

export const createBooking = async (infoBooking: InforBooking) => {
  try {
    await setDoc(doc(db, "bookings", infoBooking.bookingId), infoBooking);
    console.log(`Infor bokking added successfully.`);
  } catch (error) {
    console.error("Error adding location: ", error);
  }
};
