import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { app } from '@/firebaseConfig'; // Adjust path to your Firebase config file

const db = getFirestore(app);

export const fetchHotels = async () => {
  try {
    const hotelsCollection = collection(db, 'hotels');
    const hotelsSnapshot = await getDocs(hotelsCollection);
    const hotelsList = hotelsSnapshot.docs.map(doc => ({
      id: doc.id, 
      ...doc.data()
    }));
    return hotelsList;
  } catch (error: any) {
    console.error('Error fetching sliders:', error.message);
  }
};
