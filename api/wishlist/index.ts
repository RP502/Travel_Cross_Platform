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
import { WishItem } from "@/redux/wishlist/wishItemType";

const db1 = getFirestore();
const db = getFirestore(app);

export const insertWishList = async (wishItem: WishItem) => {
  try {
    await setDoc(doc(db1, "wishlist", wishItem.wishId), wishItem);
    console.log(`wish item  added successfully.`);
  } catch (error) {
    console.error("Error adding location: ", error);
  }
};

export const fetchWishListByUserId: any = async (userId: string) => {
  try {
    const wishlistRef = collection(db, "wishlist");
    const q = query(wishlistRef, where("userId", "==", userId));
    const querySnapshot = await getDocs(q);
    const wishlist: WishItem[] = [];

    querySnapshot.forEach((doc) => {
      wishlist.push({ wishId: doc.id, ...doc.data() } as WishItem);
    });

    return wishlist;
  } catch (error: any) {
    console.error("Error fetching sliders:", error.message);
  }
};

export const deleteWishListById = async (wishId: string) => {
  try {
    const wishListRef = doc(db, "wishlist", wishId);
    await deleteDoc(wishListRef);
    console.log(`Cart with ID ${wishId} has been deleted.`);
  } catch (error) {
    console.error("Error deleting cart: ", error);
  }
};
