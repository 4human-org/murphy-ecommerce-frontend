  "use client";
  import { useState, useEffect  } from "react";
  import { useRouter } from "next/navigation";
  import CategoryDummyData from "CategoryDummyData"

  const categoriesOptions = CategoryDummyData
    .filter(category => category.category.title !== "Recommended Items" && category.category.title != "Popular Items")
    .map(cat => cat.category.title)

  const offstlying = 'rounded-md m-2 p-4 bg-gray-300 transition-all duration-200' 
  const onstyling = 'rounded-md m-2 p-4 bg-blue-500 text-white transition-all duration-200'
    
  export default function AddProductForm() {  
    const router = useRouter();

    const [currImageUrl, setCurrImageUrl] = useState("")

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

    const [productData, setProductData] = useState({
      name: "",
      description: "",
      sourcing: "",
      imagesUrl: [],
      categories: [],
      price: 0,
      stock: 0
    });
    
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

    const handleInputChange = (e) => {
      const { name, value, type } = e.target;
      let newValue = value;
      if (type === "number") {
        newValue = parseFloat(value);
      }
      setProductData((prevData) => ({
        ...prevData,
        [name]: newValue,
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
    

    // not done 
    const handleSubmit = async (e) => {
      e.preventDefault();

      console.log(productData);
      try {
        console.log('here');
        const response = await fetch(`http://localhost:3030/products/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(productData),
        });
        if (response.ok) {
          alert("Product added successfully!");
          router.push("/admin/dashboard/manageinventory");
        } else {
          console.log(response);
          alert("Failed to create product.");
        }
      } catch (error) {
        console.error("Error on creating product:", error);
      }
    };

    return (
      <div className="flex w-screen flex-col bg-slate-100 p-6 pl-[10%] text-lg">
        <form onSubmit={handleSubmit}>
          <legend className="text-2xl font-bold">Create New Product</legend>
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
              placeholder={0}
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
              placeholder={0}
              name="stock"
              className="m-2 rounded bg-slate-200 p-2 shadow"
              value={productData.stock}
              onChange={handleInputChange}
            />
          </div>
          
          <button
            type="submit"
            className="m-2 w-fit rounded bg-slate-200 p-4 shadow"
          >
            Create
          </button>
        </form>
      </div>
    );
  }
