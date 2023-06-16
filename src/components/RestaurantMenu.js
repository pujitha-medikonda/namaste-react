import { useEffect, useState } from "react";
import restList, { swiggyRestMenuUrl } from "../utilities/constants";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [restMenu, setRestMenu] = useState(null);
  console.log(useParams());
  const { resId } = useParams();
  async function getRestMenu() {
    var restResponse = await fetch(swiggyRestMenuUrl + resId);
    var response = await restResponse.json();
    setRestMenu(response?.data);
    console.log(response?.data);
  }
  useEffect(() => {
    getRestMenu();
  }, []);

  if (restMenu === null) {
    return <div>Restaurant is closed</div>;
  }
  const { name, costForTwoMessage } = restMenu?.cards[0].card.card.info;
  const { itemCards } =
    restMenu.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card.card;
  return (
    <div>
      <div>
        <h1>{name}</h1>
        <h4>{costForTwoMessage}</h4>
      </div>
      <div>
        {itemCards.map((element) => {
          return <li key={element.card.info.id}>{element.card.info.name}</li>;
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
