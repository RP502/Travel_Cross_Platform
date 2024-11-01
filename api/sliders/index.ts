import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { app } from '@/firebaseConfig'; // Adjust path to your Firebase config file

const db = getFirestore(app);

export const fetchSliders = async () => {
  try {
    const slidersCollection = collection(db, 'sliders');
    const slidersSnapshot = await getDocs(slidersCollection);
    const slidersList = slidersSnapshot.docs.map(doc => ({
      id: doc.id, 
      ...doc.data()
    }));
    
    return slidersList;
  } catch (error: any) {
    console.error('Error fetching sliders:', error.message);
  }
};
