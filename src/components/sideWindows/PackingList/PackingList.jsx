import React, { useState, useEffect } from "react";
import axios from "axios";
import apiUrl from "../../../apiConfig";
import ListForm from "../../shared/ListForm/ListForm";
import "./PackingList.scss";

const PackingList = ({ match, packingListData, setTrip }) => {
  const [listItems, setListItems] = useState([]);

  useEffect(() => {
    setListItems([...packingListData]);
  }, [packingListData]);

  const handleSubmit = (item) => {
    updatePackingList([...listItems, item]);
  };


  const updatePackingList = async (items) => {
    try {
      const response = await axios.put(
        `${apiUrl}/trips/${match.params.id}/updatePackingList`,
        { packingList: JSON.stringify(items) }
      );
      setTrip(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = (deletedItem) => {
    console.log("handle delete", deletedItem);
    const itemIndex = packingListData.indexOf(deletedItem);
    if(itemIndex > -1){
      const updatedList = packingListData.filter((item, index) => index !== itemIndex)
      updatePackingList(updatedList);
    }
    };

  let displayList = listItems.map((item, index) => (
    <li key={index}>
      {item}
      <button
        className="delete-button"
        onClick={() => {
          handleDelete(item);
        }}
      >
        x
      </button>
    </li>
  ));

  return (
      <div className="packing-list">
        <p>Add your packing list items:</p>
        <ListForm
          placeholder={"Add an item"}
          handleSubmit={handleSubmit}
        />
        <ol className="packing-list-items">{displayList}</ol>
      </div>
  );
};

export default PackingList;
