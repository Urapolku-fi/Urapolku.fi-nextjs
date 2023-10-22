import './adCard.css';

const AdCard = ({ text }: any) => {
  return (
    <div className="ad-card">
      <div className="ad-card-overlay">
        <div className="ad-card-text-container">
          <div className="ad-card-text">{text}</div>
        </div>
      </div>
    </div>
  );
};

export default AdCard;
