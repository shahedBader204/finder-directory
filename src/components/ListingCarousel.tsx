import React from 'react';
import { Button, Card, Carousel, Tag } from 'antd';
import {
  HomeOutlined,
  CarOutlined,
  UserOutlined,
  HeartOutlined,
  LeftOutlined,
  RightOutlined,
} from '@ant-design/icons';

type Listing = {
  id: number;
  image: string;
  price: string;
  title: string;
  area: string;
  bedrooms: number;
  bathrooms: number;
  parking: number;
  badges: string[];
};

const listings: Listing[] = [
  {
    id: 1,
    image: 'https://source.unsplash.com/600x400/?house,villa',
    price: '$250,000',
    title: 'Luxury Family House',
    area: '3500 sqft',
    bedrooms: 4,
    bathrooms: 3,
    parking: 2,
    badges: ['Verified', 'New', 'For Sale'],
  },
  {
    id: 2,
    image: 'https://source.unsplash.com/600x400/?apartment',
    price: '$1,200 / month',
    title: 'Modern Apartment',
    area: '950 sqft',
    bedrooms: 2,
    bathrooms: 1,
    parking: 1,
    badges: ['For Rent'],
  },
  {
    id: 3,
    image: 'https://source.unsplash.com/600x400/?real-estate',
    price: '$330,000',
    title: 'Cozy Suburban Home',
    area: '2800 sqft',
    bedrooms: 3,
    bathrooms: 2,
    parking: 1,
    badges: ['Verified', 'For Sale'],
  },
];

const ListingCard: React.FC<{ listing: Listing }> = ({ listing }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition">
      {/* Image Section */}
      <div className="relative">
        <img
          src={listing.image}
          alt={listing.title}
          className="w-full h-56 object-cover"
        />
        {/* Overlay Wishlist */}
        <button className="absolute top-3 right-3 bg-white/80 hover:bg-white p-2 rounded-full shadow">
          <HeartOutlined className="text-red-500" />
        </button>

        {/* Badges */}
        <div className="absolute bottom-3 left-3 flex gap-2 flex-wrap">
          {listing.badges.map((badge, i) => (
            <Tag
              key={i}
              color={
                badge === 'Verified'
                  ? 'green'
                  : badge === 'New'
                    ? 'blue'
                    : badge === 'For Sale'
                      ? 'red'
                      : 'orange'
              }
              className="rounded-full px-3 py-1 text-xs"
            >
              {badge}
            </Tag>
          ))}
        </div>
      </div>

      {/* Body */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{listing.price}</h3>
        <p className="text-gray-600 text-sm mb-2">{listing.title}</p>
        <p className="text-gray-400 text-xs mb-3">{listing.area}</p>

        {/* Facilities */}
        <div className="flex justify-between text-gray-500 text-sm">
          <span className="flex items-center gap-1">
            <UserOutlined /> {listing.bedrooms}
          </span>
          <span className="flex items-center gap-1">
            <HomeOutlined /> {listing.bathrooms}
          </span>
          <span className="flex items-center gap-1">
            <CarOutlined /> {listing.parking}
          </span>
        </div>
      </div>
    </div>
  );
};

const ListingCarousel: React.FC = () => {
  const carouselRef = React.useRef<any>(null);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Top Offers</h2>
        <div className="flex gap-2">
          <Button
            shape="circle"
            icon={<LeftOutlined />}
            onClick={() => carouselRef.current.prev()}
          />
          <Button
            shape="circle"
            icon={<RightOutlined />}
            onClick={() => carouselRef.current.next()}
          />
        </div>
      </div>

      {/* Carousel */}
      <Carousel
        ref={carouselRef}
        slidesToShow={3}
        dots={false}
        infinite
        responsive={[
          { breakpoint: 1024, settings: { slidesToShow: 2 } },
          { breakpoint: 768, settings: { slidesToShow: 1 } },
        ]}
      >
        {listings.map((listing) => (
          <div key={listing.id} className="px-2">
            <ListingCard listing={listing} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ListingCarousel;
