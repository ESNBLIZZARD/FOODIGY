import {CDN_URL} from "../utils/constants";


const ResturantCard = (props) => {
    const {resData} = props;
    const {
        name, cuisines, avgRating, costForTwo, cloudinaryImageId
    } = resData?.info;
    return (
        <div className="res-card">
            <img className="res-logo" 
            src=
            {CDN_URL + cloudinaryImageId}
            />
            <h1>{name}</h1>
            <p>{cuisines.join(", ")}</p>
            <h4>{avgRating}</h4>
            <h5>{costForTwo}</h5>
            <h5>{resData.info.sla.deliveryTime} mins</h5>
        </div>
    );
};

export default ResturantCard;