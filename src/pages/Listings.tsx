import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Card, Spin, Row, Col } from 'antd';
import { getListings } from '../services/listingService';

const Listings: React.FC = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['listings'],
    queryFn: getListings,
  });

  if (isLoading)
    return (
      <Spin size="large" style={{ display: 'block', margin: '40px auto' }} />
    );
  if (isError)
    return (
      <p style={{ color: 'red', textAlign: 'center' }}> Error loading data</p>
    );

  return (
    <Row gutter={[20, 20]} style={{ padding: 20 }}>
      {data && data.length > 0 ? (
        data.map((listing) => (
          <Col key={listing.id} xs={24} sm={12} md={8} lg={6}>
            <Card
              hoverable
              cover={
                listing.imageUrl && (
                  <img alt={listing.title} src={listing.imageUrl} />
                )
              }
              title={listing.title}
            >
              <p>{listing.description}</p>
              <small>Created by: {listing.userId}</small>
            </Card>
          </Col>
        ))
      ) : (
        <p style={{ textAlign: 'center' }}>No data currently available</p>
      )}
    </Row>
  );
};

export default Listings;
