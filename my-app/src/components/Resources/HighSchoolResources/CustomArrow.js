// Custom Left Arrow Component
export const PrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...arrowStyles, left: '-40px' }} // Adjust 'left' for positioning
      onClick={onClick}
    />
  );
};

// Custom Right Arrow Component
export const NextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...arrowStyles, right: '0' }} // Adjust 'right' for positioning
      onClick={onClick}
    />
  );
};

const arrowStyles = {
  position: 'absolute',
  top: '50%',
  zIndex: 1,
  cursor: 'pointer',
  backgroundColor: '#e0e0e0', // Light Gray
  borderRadius: '50%',
  padding: '10px',
  transform: 'translateY(-50%)',
  color: '#333333', // Dark Gray
  fontSize: '20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};
