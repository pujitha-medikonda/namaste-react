import restList from "../utilities/constants";
import Restaurant from "./Restaurant";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestuarants, setListOfRestuarants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredList, setFilteredList] = useState([]);
  console.log("Im rendered");
  const fetchRest = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4492116&lng=78.41820489999999&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await response.json();
    setListOfRestuarants(jsonData.data.cards[2].data.data.cards);
    setFilteredList(jsonData.data.cards[2].data.data.cards);
  };

  useEffect(() => {
    fetchRest();
  }, []);

  if (listOfRestuarants == 0) {
    return (
      <div className="shimmer-Container">
        <div className="shimmerCard"></div>
        <div className="shimmerCard"></div>
        <div className="shimmerCard"></div>
        <div className="shimmerCard"></div>
        <div className="shimmerCard"></div>
      </div>
    );
  }

  return (
    <div className="grid mt-1 border-black border-solid border-2">
      <div className="btn-container">
        {" "}
        <div className="searchDiv">
          <input
            type="text"
            className="searchText"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          ></input>
          <button
            btn="searchBtn"
            onClick={(e) => {
              const filteredList = listOfRestuarants.filter((restuarant) => {
                return restuarant.data?.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilteredList(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <div>
          <button
            className="btnClass"
            onClick={() => {
              const filteredList = listOfRestuarants.filter(
                (restuarant) => restuarant.data?.avgRating > 4
              );
              setFilteredList(filteredList);
            }}
          >
            Top 5 Restaurants
          </button>
        </div>
      </div>

      <div className="flex flex-wrap">
        {filteredList.map((restaurant) => {
          console.log(restaurant);
          return (
            <Link className="mr-2 mt-3 ml-4" to={"/rest/" + restaurant.data.id}>
              <Restaurant resObj={restaurant} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
