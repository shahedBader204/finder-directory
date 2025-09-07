import { useParams } from 'react-router-dom';

type ListingProps = {};

const SingleListing = (props: ListingProps) => {
  const { id } = useParams<{ id: string }>();

  return <div>Listing ID: {id}</div>;
};

export default SingleListing;
