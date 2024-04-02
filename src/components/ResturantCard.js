import {CDN_URL} from "../utils/constants";


const ResturantCard = (props) => {
    const {resData} = props;
    const {
        name, cuisines, avgRating, costForTwo, cloudinaryImageId
    } = resData?.info;
    return (
        <div className="m-4 p-4 w-[250px] h-[500px] bg-gray-100 rounded-lg hover:bg-gray-200">
            <img className="h-[200px] w-[230px] rounded-lg" 
            src=
            {CDN_URL + cloudinaryImageId}
            />
            <h1 className="font-bold text-lg py-2">{name}</h1>
            <p className="font-sans">{cuisines.join(", ")}</p>
            <h4>{avgRating}</h4>
            <h5>{costForTwo}</h5>
            <h5>{resData.info.sla.deliveryTime} mins</h5>
        </div>
    );
};

export default ResturantCard;