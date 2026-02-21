import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;
    const data = resData.info || resData.data;
    
    return (
        <div className="res-card">
            <img
              className="res-logo"
              alt="res-logo"
              src={CDN_URL + data.cloudinaryImageId}
            />
            <div className="res-info">
                <h3>{data.name}</h3>
                <p className="cuisines">{data.cuisines.join(", ")}</p>
                <div className="res-details">
                    <span className="rating">⭐ {data.avgRating}</span>
                    <span className="delivery-time">🕒 {data.sla?.deliveryTime || data.deliveryTime} mins</span>
                </div>
                <p className="cost">₹{data.costForTwo/100} for two</p>
            </div>
        </div>
    )
}

export default RestaurantCard;
