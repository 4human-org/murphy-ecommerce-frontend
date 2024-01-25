function ItemPlaceHolderComponent() {
  return (
    <div className="">
      <img src="" className="bg-red-400 w-40 h-40" />
      <h4>Product Name</h4>
      <h4>$20.00</h4>
    </div>
  );
}

export default function CategoryDisplaySection() {
  return (
    <div className="container bg-gray-600 flex justify-between ">
      <ItemPlaceHolderComponent />
      <ItemPlaceHolderComponent />
      <ItemPlaceHolderComponent />
      <ItemPlaceHolderComponent />
      <ItemPlaceHolderComponent />
      <ItemPlaceHolderComponent />
    </div>
  );
}
