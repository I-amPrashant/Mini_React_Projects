import React, { useState } from "react";

export default function App() {
  const [dataItems, setDataItems] = useState({
    data1: ["item 1", "item 2", "item 3"],
    data2: ["item A", "item B", "item C"],
  });

  const [draggedIndex, setDraggedIndex] = useState({
    index: "",
    dataContainer: "",
  });

  const handleDragStart = (index, dataContainer) => {
    setDraggedIndex({
      index: index,
      dataContainer: dataContainer,
    });
  };

  //preventing default behavior of not being able to drop into the container
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  //drag and drop for container
  const handleDrop = (dataContainer) => {
    if (dataContainer === draggedIndex.dataContainer) {
      return;
    }

    //create a new object by merging the two objects
    const newItems = [{ ...dataItems.data1, ...dataItems.data2 }];
    const deleteContainer = draggedIndex.dataContainer;

    //filter method does not affect the original array.
    const removedItemsContainerData = dataItems[`${deleteContainer}`].filter(
      (i) => i !== dataItems[`${deleteContainer}`][draggedIndex.index]
    );


    //append the removed item to the new array using the spread operator
    const addedItemsContainerData = [
      ...dataItems[`${dataContainer}`],
      dataItems[`${deleteContainer}`][draggedIndex.index],
    ];

    setDataItems({
      ...newItems,
      [`${draggedIndex.dataContainer}`]: removedItemsContainerData,
      [`${dataContainer}`]: addedItemsContainerData,
    });

    setDraggedIndex({
      index: "",
      dataContainer: "",
    });
  };

  const handleSameContainerDrop = (e, index, dataContainer) => {
    e.stopPropagation();
    if (dataContainer !== draggedIndex.dataContainer) {
      return;
    }
    //splice directly affects the original state so we create a copy of the original state
    const newItems = [...dataItems[`${dataContainer}`]];
    const [removedData] = newItems.splice(
      draggedIndex.index,
      1
    );
    newItems.splice(index, 0, removedData);
    setDataItems({ ...dataItems, [`${dataContainer}`]: newItems});
    setDraggedIndex({
      index: "",
      dataContainer: "",
    });
  };

  return (
    <div className="main-container">
      <div className="item-container">
        <h2>First Data Container</h2>

        <div
          className="items-wrapper"
          onDragOver={(e) => handleDragOver(e)}
          onDrop={() => handleDrop("data1")}
        >
          {dataItems.data1.map((item, index) => {
            return (
              <div
                className="item"
                key={index}
                draggable={true}
                onDragStart={() => handleDragStart(index, "data1")}
                onDragOver={(e) => handleDragOver(e)}
                onDrop={(e) => handleSameContainerDrop(e, index, "data1")}
              >
                {item}
              </div>
            );
          })}
        </div>
      </div>
      <div className="item-container">
        <h2>Second Data Container</h2>

        <div
          className="items-wrapper"
          onDragOver={(e) => handleDragOver(e)}
          onDrop={() => handleDrop("data2")}
        >
          {dataItems.data2.map((item, index) => {
            return (
              <div
                className="item"
                key={index}
                draggable={true}
                onDragStart={() => handleDragStart(index, "data2")}
                onDragOver={(e) => handleDragOver(e)}
                onDrop={(e) => handleSameContainerDrop(e, index, "data2")}
              >
                {item}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
