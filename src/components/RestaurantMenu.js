import { useParams } from "react-router-dom";
import Shimmer from "./Shimmers";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null || !resInfo.title) return <Shimmer />;

  const { title, category, price, description } = resInfo;

  console.log("Product Data:", resInfo);

  return (
    <div className="menu">
      <h1>{title}</h1>
      <p>
        {category} - Rs.{price}
      </p>

      <h2>Description</h2>
      <p>{description}</p>
    </div>
  );
};

export default RestaurantMenu;
