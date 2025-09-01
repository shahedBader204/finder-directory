import { db } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function Listings() {
  const [listings, setListings] = useState<any[]>([]);

  useEffect(() => {
    const fetchListings = async () => {
      const querySnapshot = await getDocs(collection(db, "listings"));
      setListings(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    fetchListings();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Listings</h1>
      {listings.map(listing => (
        <div key={listing.id}>
          <h3>{listing.title}</h3>
          <p>{listing.description}</p>
        </div>
      ))}
    </div>
  );
}
