/* eslint-disable react/prop-types */
const BookCard = ({ title, author, image }) => {
    return (
      <div className="bg-white rounded shadow p-4">
        <img src={image} alt={title} className="h-40 w-full object-cover mb-2" />
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-gray-500">{author}</p>
      </div>
    );
  };
  
  export default BookCard;
  