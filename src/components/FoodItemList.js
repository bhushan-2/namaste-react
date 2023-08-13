import {CDN_URL} from '../utils/constants';

const FoodItemList = ({ data }) => {
  return (
    <div>
      {data.map((item) => (
        <div className="flex justify-between">
          <div className="w-9/12 p-2 m-2 border-gray-200 border-b-2 text-left">
            <span className="font-bold text-sm">
              {item.card.info.name}
            </span>
            <span className='text-sm'>
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            <div className="text-xs">{item.card.info.description}</div>
          </div>
          <div className="w-3/12 p-4">
            <img className="w-full" src={CDN_URL + item?.card?.info.imageId}/>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FoodItemList;
