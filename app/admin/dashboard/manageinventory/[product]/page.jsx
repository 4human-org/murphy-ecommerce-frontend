"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ConfirmDelete from "../../../../../components/AdminDashboard/ConfirmDelete";
import CategoryDummyData from "../../../../../CategoryDummyData"

const categoriesOptions = CategoryDummyData
  .filter(category => category.category.title !== "Recommended Items" && category.category.title != "Popular Items")
  .map(cat => cat.category.title)

const offstlying = 'rounded-md m-2 p-4 bg-gray-300 transition-all duration-200' 
const onstyling = 'rounded-md m-2 p-4 bg-blue-500 text-white transition-all duration-200'

export default function Page() {
  const router = useRouter();
  const [currImageUrl, setCurrImageUrl] = useState("")
  const [productData, setProductData] = useState({
    id: "",
    categories: [],
    description: "",
    imagesUrl: [],
    name: "",
    price: 0,
    sourcing: "",
    stock: 0
  });
  const [modal, setModal] = useState(false);

  const handleKeyPress = (e) => {
    console.log('hm');
    if (e.key === "Enter") {
      console.log('asd');
      e.preventDefault();
      handleAddImageUrl();
    }

  };

  const handleAddImageUrl = () => {
    if (currImageUrl.trim() !== "") {
      setProductData((prevData) => ({
        ...prevData,
        imagesUrl: [...prevData.imagesUrl, currImageUrl],
      }));
      setCurrImageUrl("");
    }
  };

  const handleimagesUrlChange = (e) => {
    setCurrImageUrl(e.target.value)
  }

  const removeUrl = (urlIndex) => {
    setProductData((prevData) => ({
      ...prevData,
      imagesUrl: prevData.imagesUrl.filter((_, i) => i !== urlIndex) 
    }))
  }

  const imagesUrlsElements = productData.imagesUrl.map((url, i) => {
    return (
      <div className="items-center flex justify-between rounded-md m-2 pt-3 pb-3 pl-5 pr-4 bg-gray-300" key={i}>
        <p>{url}</p>
        <button className="bg-red-300 pt-2 pb-2 pl-3 pr-3 rounded-md" type="button" onClick={() => removeUrl(i)}>
          Remove
        </button>
      </div>
    )
  })



  useEffect(() => {
    const product = JSON.parse(localStorage.getItem("product"));
    setProductData({
        id: product.id,
        categories: product.categories,
        description: product.description,
        imagesUrl: product.imagesUrl,
        name: product.name,
        price: product.price,
        sourcing: product.sourcing,
        stock: product.stock
    });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

    const toggleCategory = (category) => {
    if (productData.categories.includes(category)) {
      setProductData({
        ...productData,
        categories: productData.categories.filter((cat) => cat !== category),
      });
    } else {
      setProductData({
        ...productData,
        categories: [...productData.categories, category],
      });
    }
  };
  


  const handleSave = async (e) => {
    console.log(e.target);
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:3030/products/${productData.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(productData),
        },
      );
      console.log(productData);
      if (response.ok) {
        alert("Product updated successfully!");
        router.push("/admin/dashboard/manageinventory");
      } else {
        console.log(response);
        alert("Failed to update product.");
      }
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  const handleDelete = async () => {
    const confirmIntentionalDelete = window.confirm(
      "Are you sure you wish to delete this product? It is irrecoverable.",
    );
    if (!confirmIntentionalDelete) {
      return;
    }
    
    try {
      const response = await fetch(
        `http://localhost:3030/products/${productData.id}`,
        {
          method: "DELETE",
        },
      );
      if (response.ok) {
        alert("Product deleted successfully!");
        router.push("/admin/dashboard/manageinventory");
      } else {
        alert("Failed to delete product.");
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const openConfirmDelete = () => {
    setModal(true);
  };

  const onConfirmDelete = () => {
    setModal(false);
    handleDelete();
  };

  const onCancelDelete = (e) => {
    setModal(false);
    alert("No deletion. Updating product.");
  };

  return (
    <div className="flex w-screen flex-col bg-slate-100 p-6 pl-[10%] text-lg">
      <h1 className="justify-center text-2xl font-bold">Edit Product</h1>
      <form onSubmit={handleSave}>
      <div className="flex flex-row items-center">
          <label htmlFor="name">Name: </label>
          <input
            id="name"
            type="text"
            placeholder="Product Name"
            name="name"
            className="m-2 rounded bg-slate-200 p-2 shadow w-full"
            value={productData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col items-left">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            placeholder="Product Description"
            name="description"
            className="mt-2 rounded bg-slate-200 p-2 shadow w-full"
            value={productData.description}
            onChange={handleInputChange}
          >

          </textarea>
        </div>
        <div>
          <label htmlFor="sourcing">Sourcing:</label>
          <textarea
            id="sourcing"
            value={productData.sourcing}
            placeholder="Product Sourcing"
            name="sourcing"
            className="mt-2 rounded bg-slate-200 p-2 shadow w-full"
            onInput={handleInputChange}
          >

          </textarea>
        </div>
        <div>
            <label htmlFor="imagesUrl">imagesUrl:</label>
            <input
              id="imagesUrl"
              value={currImageUrl}
              placeholder="Enter image URL"
              name="imagesUrl"
              className="mt-2 rounded bg-slate-200 p-2 shadow w-full"
              onChange={handleimagesUrlChange}
              onKeyDown={handleKeyPress}
            />
            <button type="button" onClick={handleAddImageUrl} className="mt-2 mb-2 w-full rounded bg-blue-500 p-2 text-white">Add Image URL</button>
            {imagesUrlsElements}
          </div>
        <div>
          <label htmlFor="categories">Categories:</label>
          <div>
            {categoriesOptions.map((category) => (
            <button
              type="button"
              key={category}
              className={productData.categories.includes(category) ? onstyling : offstlying}
              onClick={() => toggleCategory(category)}
            >
                {category}
            </button>
            ))}
        </div>
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            id="price"
            type="number"
            placeholder="0"
            name="price"
            className="m-2 rounded bg-slate-200 p-2 shadow"
            value={productData.price}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="stock">Stock:</label>
          <input
            id="stock"
            type="number"
            placeholder="0"
            name="stock"
            className="m-2 rounded bg-slate-200 p-2 shadow"
            value={productData.stock}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <button type="submit" className="m-2 rounded bg-slate-200 p-4 shadow">
            Save Changes
          </button>
          <button
            type="button"
            className="m-2 rounded bg-slate-200 p-4 shadow"
            onClick={openConfirmDelete}
          >
            Delete Product
            <ConfirmDelete
              show={modal}
              message="Are you sure you want to delete this product?"
              onConfirm={onConfirmDelete}
              onCancel={onCancelDelete}
            />
          </button>
        </div>
      </form>
    </div>
  );
}
