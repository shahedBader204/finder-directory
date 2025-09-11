import { Card, Button } from 'antd';
import './ActionCards.css';

interface ActionCardProps {
  title: string;
  buttonLabel: string;
  bgColor: string;
  textColor?: string;
  icon: string;
  image: string;
}

const ActionCard: React.FC<ActionCardProps> = ({
  title,
  buttonLabel,
  bgColor,
  textColor = '#111827',
  icon,
  image,
}) => {
  return (
    <Card className="action-card" style={{ backgroundColor: bgColor }}>
      <div className="card-content">
        <img src={icon} alt={title} className="icon" />
        <h3 className="card-title" style={{ color: textColor }}>
          {title}
        </h3>
        <Button type="primary" className="dark-btn">
          {buttonLabel}
        </Button>
      </div>
      <img src={image} alt={title} className="card-image" />
    </Card>
  );
};

const ActionCards = () => {
  return (
    <div className="action-cards">
      <ActionCard
        title="Buy a property"
        buttonLabel="Find a home"
        bgColor="#FBEEEE"
        icon="/icons/buy.png"
        image="/images/01.png"
      />
      <ActionCard
        title="Sell a property"
        buttonLabel="Place an ad"
        bgColor="#3D7A81"
        textColor="#FFFFFF"
        icon="/icons/sell.png"
        image="/images/02.png"
      />
      <ActionCard
        title="Rent a property"
        buttonLabel="Find a rental"
        bgColor="#FFF4EA"
        icon="/icons/rent.png"
        image="/images/03.png"
      />
    </div>
  );
};

export default ActionCards;
