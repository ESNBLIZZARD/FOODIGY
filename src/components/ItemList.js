import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({items}) => {
    
    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        dispatch(addItem(item));
    };

    return (
        <div>
            {items.map((item) => (
                <div key = {item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
                 <div className="w-9/12">
                    <div className="py-2">
                        <span>{item.card.info.name}</span>
                        <span>
                            - ₹{item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}
                        </span>
                    </div>
                    <p className="text-xs">{item.card.info.description}</p>
                 </div>
                 <div className="w-3/12 h-auto p-4">
                    <div className="absolute flex">
                        <button className="p-1 px-2 mx-16  rounded-lg bg-black shadow-lg text-white" 
                        onClick={() => handleAddItem(item)}>
                            +
                        </button>
                    </div>
                         <img src = {CDN_URL + item.card.info.imageId} className="border rounded"/>
                        </div>
                </div>
            ))}
        </div>
    );
};
export default ItemList;