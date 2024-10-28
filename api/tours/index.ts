import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { app } from '@/firebaseConfig'; // Adjust path to your Firebase config file

const db = getFirestore(app);

export const fetchTours = async () => {
  try {
    const toursCollection = collection(db, 'tours');
    const toursSnapshot = await getDocs(toursCollection);
    const toursList = toursSnapshot.docs.map(doc => ({
      id: doc.id, 
      ...doc.data()
    }));
    return toursList;
  } catch (error: any) {
    console.error('Error fetching sliders:', error.message);
  }
};
