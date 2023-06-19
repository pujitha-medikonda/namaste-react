import Restaurant from "./Restaurant";
import { useState, useEffect, useDeferredValue, useContext } from "react";
import { Link } from "react-router-dom";
import user from "./userContext";

const Body = () => {
  const [listOfRestuarants, setListOfRestuarants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredList, setFilteredList] = useState([]);
  const deferredList = useDeferredValue(filteredList);

  console.log(useContext(user));
  const fetchRest = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4492116&lng=78.41820489999999&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await response.json();
    setListOfRestuarants(jsonData.data.cards[2].data.data.cards);
    setFilteredList(jsonData.data.cards[2].data.data.cards);
  };
  console.log("Normal Render");
  useEffect(() => {
    fetchRest();
  }, []);

  if (listOfRestuarants.length == 0) {
    return (
      <div className="flex flex-wrap p-2 ">
        <div className="bg-gray-100 border-solid border-x-slate-400 w-64 h-72 m-2"></div>
        <div className="bg-gray-100 border-solid border-x-slate-400 w-64 h-72 m-2"></div>
        <div className="bg-gray-100 border-solid border-x-slate-400 w-64 h-72 m-2"></div>
        <div className="bg-gray-100 border-solid border-x-slate-400 w-64 h-72 m-2"></div>
        <div className="bg-gray-100 border-solid border-x-slate-400 w-64 h-72 m-2"></div>
        <div className="bg-gray-100 border-solid border-x-slate-400 w-64 h-72 m-2"></div>
        <div className="bg-gray-100 border-solid border-x-slate-400 w-64 h-72 m-2"></div>
        <div className="bg-gray-100 border-solid border-x-slate-400 w-64 h-72 m-2"></div>
        <div className="bg-gray-100 border-solid border-x-slate-400 w-64 h-72 m-2"></div>
        <div className="bg-gray-100 border-solid border-x-slate-400 w-64 h-72 m-2"></div>
      </div>
    );
  }

  return (
    <div className="grid mt-3">
      <div className="btn-container">
        {" "}
        <div className="inline-block mb-3 ml-1">
          <input
            type="text"
            className="border-solid border-2 mr-1"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="mr-4 border-solid border-2 px-2 rounded-sm bg-slate-200 text-fuchsia-900"
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

          <button
            className=" border-solid border-2 px-2 rounded-md bg-blue-400 text-white"
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
            <Link className="" to={"/rest/" + restaurant.data.id}>
              <Restaurant resObj={restaurant} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
