import React, { useContext, useState } from "react";
import RestaurantFinder from "../apis/RestaurantFinder.js";
import { RestaurantsContext } from "../context/RestaurantsContext.js";

const AddRestaurant = () => {
  const { addRestaurant } = useContext(RestaurantsContext);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("Price Range");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await RestaurantFinder.post("/", {
      name,
      location,
      price_range: priceRange,
    });
    addRestaurant(response.data.data.restaurant);
    setName("");
    setLocation("");
    setPriceRange("Price Range");
    console.log(response);
  };

  return (
    <div className="mb-4 mx-4">
      <form action="">
        <div className="form-row d-flex gap-3">
          <div className="col">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="form-control"
              placeholder="name"
            />
          </div>
          <div className="col">
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              type="text"
              className="form-control"
              placeholder="location"
            />
          </div>
          <div className="col">
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="w-75 h-100 custom-select my-1 mr-sm-2"
            >
              <option disabled>Price Range</option>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
              <option value="5">$$$$$</option>
            </select>
            <button
              onClick={handleSubmit}
              type="submit"
              className="btn btn-primary w-25"
            >
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddRestaurant;
