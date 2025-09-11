
import { Select, Slider, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "./HeroSection.css";

const { Option } = Select;

const HeroSection = () => {
  return (
    <div className="hero-container">
      {/* Left text */}
      <div className="hero-text">
        <h1 className="hero-title">Easy way to find a perfect property</h1>
        <p className="hero-subtitle">
          We provide a complete service for the sale, purchase or rental of real estate.
        </p>
      </div>

      {/* Background images + big text */}
      <div className="hero-images">
        <div className="buy-box">
          <span className="buy-text">Buy</span>
        </div>
        <div className="rent-box">
          <span className="rent-text">Rent</span>
        </div>
      </div>

      {/* Search form */}
      <div className="search-form">
        <Select defaultValue="For rent" size="large" className="search-select">
          <Option value="rent">For rent</Option>
          <Option value="buy">For buy</Option>
        </Select>

        <Select defaultValue="Property type" size="large" className="search-select">
          <Option value="apartment">Apartment</Option>
          <Option value="house">House</Option>
        </Select>

        <div className="price-slider">
          <span className="price-label">Price</span>
          <Slider defaultValue={1500} min={500} max={5000} className="slider" />
        </div>

        <Button type="primary" size="large" className="search-btn" icon={<SearchOutlined />}>
          Search
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
