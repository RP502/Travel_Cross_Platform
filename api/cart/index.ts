import {
  getFirestore,
  collection,
  getDocs,
  doc,
  setDoc,
} from "firebase/firestore";
import { app } from "@/firebaseConfig"; // Adjust path to your Firebase config file
import { Cart } from "@/redux/cart/cartsType";

const db1 = getFirestore();
const db = getFirestore(app);

export const insertCart = async (cart: Cart) => {
  try {
    await setDoc(doc(db1, "carts", cart.cartId), cart);
    console.log(`cart added successfully.`);
  } catch (error) {
    console.error("Error adding location: ", error);
  }
};

export const fetchCarts = async (userId: string) => {
  try {
    const ticketsCollection = collection(db, "carts");
    const ticketsSnapshot = await getDocs(ticketsCollection);
    const ticketsList = ticketsSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return ticketsList;
  } catch (error: any) {
    console.error("Error fetching sliders:", error.message);
  }
};
