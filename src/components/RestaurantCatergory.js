import FoodItemList from "./FoodItemList";

const RestaurantCategory = ({ data, showItem, setShowItemIndex }) => {
    const handleClick = () => {
        setShowItemIndex();
      };
  return (
    <div className="w-6/12 mx-auto my-4 shadow-lg p-4 bg-gray-50">
      <div>
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data?.title} ({data?.itemCards?.length})
          </span>
          <span>⬇️</span>
        </div>
      </div>
      <div>{showItem && <FoodItemList data={data.itemCards} />}</div>
    </div>
  );
};

export default RestaurantCategory;
