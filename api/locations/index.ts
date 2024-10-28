import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { app } from '@/firebaseConfig'; // Adjust path to your Firebase config file

const db = getFirestore(app);

export const fetchLocations = async () => {
  try {
    const locationsCollection = collection(db, 'locations');
    const locationsSnapshot = await getDocs(locationsCollection);
    const locationsList = locationsSnapshot.docs.map(doc => ({
      id: doc.id, 
      ...doc.data()
    }));
    return locationsList;
  } catch (error: any) {
    console.error('Error fetching sliders:', error.message);
  }
};
