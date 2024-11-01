import {
  getFirestore,
  collection,
  getDocs,
  doc,
  setDoc,
  query,
  where,
  deleteDoc,
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

export const fetchCartsByUserId: any = async (userId: string) => {
  try {
    const cartsRef = collection(db, "carts");
    const q = query(cartsRef, where("userId", "==", userId));
    const querySnapshot = await getDocs(q);
    const carts: Cart[] = [];

    querySnapshot.forEach((doc) => {
      carts.push({ cartId: doc.id, ...doc.data() } as Cart);
    });

    return carts;
  } catch (error: any) {
    console.error("Error fetching sliders:", error.message);
  }
};

export const updateCart = async (cart: Cart) => {
  try {
    const cartRef = doc(db, "carts", cart.cartId);
    await setDoc(cartRef, cart);
    console.log(`Cart with ID ${cart.cartId} has been updated.`);
  } catch (error) {
    console.error("Error updating cart: ", error);
  }
}

export const deleteCartById = async (cartId: string) => {
  try {
    const cartRef = doc(db, "carts", cartId);
    await deleteDoc(cartRef);
    console.log(`Cart with ID ${cartId} has been deleted.`);
  } catch (error) {
    console.error("Error deleting cart: ", error);
  }
}