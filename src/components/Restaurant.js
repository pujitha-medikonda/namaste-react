const Restaurant = (props) => {
  const { name, cloudinaryImageId, avgRating, cuisines, maxDeliveryTime } =
    props.resObj?.data;

  return (
    <div className="flex flex-col w-72 text-sm">
      <div className="m-2">
        <img
          src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
            cloudinaryImageId
          }
        />
        <div className="flex flex-col flex-wrap pt-2">
          <p className="mb-1 font-bold text-lg">{name}</p>
          <p className="mb-1">{cuisines.join(", ")}</p>
          <div className="mb-1">{maxDeliveryTime} mins </div>
          <div>{avgRating}</div>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
