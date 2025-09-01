
import { useState, useEffect } from "react";

export function useListings() {
  const [listings, setListings] = useState<any[]>([]);

  useEffect(() => {
    // مؤقتاً خليه يرجع بيانات وهمية
    setListings([{ id: 1, title: "Test Listing" }]);
  }, []);

  return listings;
}