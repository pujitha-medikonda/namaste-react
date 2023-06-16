const Restaurant = (props) => {
  const { name, cloudinaryImageId, avgRating, cuisines, maxDeliveryTime } =
    props.resObj?.data;

  return (
    <div className="grid">
      <img
        className="w-52"
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
      />
      <div className="grid grid-rows-4">
        <p className="">{name}</p>
        <p>{cuisines.join(", ")}</p>
        <div>{maxDeliveryTime} mins </div>
        <div>{avgRating}</div>
      </div>
    </div>
  );
};

export default Restaurant;
