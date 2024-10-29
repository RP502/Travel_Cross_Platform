import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { app } from '@/firebaseConfig'; // Adjust path to your Firebase config file

const db = getFirestore(app);

export const fetchTickets = async () => {
  try {
    const ticketsCollection = collection(db, 'tickets');
    const ticketsSnapshot = await getDocs(ticketsCollection);
    const ticketsList = ticketsSnapshot.docs.map(doc => ({
      id: doc.id, 
      ...doc.data()
    }));
    return ticketsList;
  } catch (error: any) {
    console.error('Error fetching sliders:', error.message);
  }
};
