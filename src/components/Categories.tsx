import { Card } from 'antd';
import { BookOutlined, DownOutlined } from '@ant-design/icons';
import './Categories.css';

interface CategoryItemProps {
  title: string;
  offers: string;
  isMore?: boolean;
}

const CategoryItem: React.FC<CategoryItemProps> = ({
  title,
  offers,
  isMore,
}) => {
  return (
    <Card bordered className="category-item">
      <div className="category-content">
        <h3 className="category-title">{title}</h3>
        {isMore ? (
          <DownOutlined className="more-icon" />
        ) : (
          <div className="category-offers">
            <BookOutlined className="bookmark-icon" />
            <span className="offers-text">{offers}</span>
          </div>
        )}
      </div>
      <div className="divider"></div>
    </Card>
  );
};

const Categories = () => {
  return (
    <div className="categories-container">
      <CategoryItem title="Apartments" offers="6.4K offers" />
      <CategoryItem title="Commercial" offers="12.8K offers" />
      <CategoryItem title="Daily rental" offers="42.4K offers" />
      <CategoryItem title="New buildings" offers="42.4K offers" />
      <CategoryItem title="Villas" offers="22.52K offers" />
      <CategoryItem title="More" offers="" isMore />
    </div>
  );
};

export default Categories;
