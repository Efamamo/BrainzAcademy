import emptyImg from "../images/empty.png";
import './EmptyIndicator.css'

const EmptyIndicator = ({ text }) => {
  return (
    <div className="empty-indicator">
      <img src={emptyImg} alt="Empty Indicator" className="empty-img" />
      <p className="empty-text">{text}</p>
    </div>
  );
};

export default EmptyIndicator;
