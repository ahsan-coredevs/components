
const Rating = ({ rating=0 }) => {
  const stars = Array(5).fill(0);

  return (
    <div className={`flex space-x-1`}>
      {stars.map((_, index) => (
        <svg
          key={index}
          className={`w-[18px] h-[18px] ${index < rating ? 'text-yellow-400' : 'text-gray-300'} `}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
};

export default Rating;