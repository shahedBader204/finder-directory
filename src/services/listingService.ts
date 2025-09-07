import { db, storage } from '../firebase/config';
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  DocumentData,
  QueryDocumentSnapshot,
} from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export interface ListingData {
  id?: string;
  title: string;
  description: string;
  userId: string;
  imageUrl?: string;
}

const listingsRef = collection(db, 'listings');

export const addListing = async (
  data: ListingData,
  imageFile?: File,
): Promise<void> => {
  let imageUrl: string | undefined = undefined;

  if (imageFile) {
    const storageRef = ref(storage, `listings/${Date.now()}_${imageFile.name}`);
    const snapshot = await uploadBytes(storageRef, imageFile);
    imageUrl = await getDownloadURL(snapshot.ref);
  }

  await addDoc(listingsRef, {
    ...data,
    imageUrl,
    createdAt: new Date(),
  });
};

export const getListings = async (): Promise<ListingData[]> => {
  const snapshot = await getDocs(listingsRef);
  return snapshot.docs.map((doc: QueryDocumentSnapshot<DocumentData>) => {
    const data = doc.data();
    return {
      id: doc.id,
      title: data.title,
      description: data.description,
      userId: data.userId,
      imageUrl: data.imageUrl,
    } as ListingData;
  });
};

export const getUserListings = async (
  userId: string,
): Promise<ListingData[]> => {
  const q = query(listingsRef, where('userId', '==', userId));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc: QueryDocumentSnapshot<DocumentData>) => {
    const data = doc.data();
    return {
      id: doc.id,
      title: data.title,
      description: data.description,
      userId: data.userId,
      imageUrl: data.imageUrl,
    } as ListingData;
  });
};
