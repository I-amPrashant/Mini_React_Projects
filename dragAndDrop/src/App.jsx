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

  const handleDrop = (dataContainer) => {
    if (dataContainer === draggedIndex.dataContainer) {
      return;
    }
    const newItems = [{ ...dataItems.data1, ...dataItems.data2 }];
    const deleteContainer = draggedIndex.dataContainer;
    const removedItemsContainerData = dataItems[`${deleteContainer}`].filter(
      (i) => i !== dataItems[`${deleteContainer}`][draggedIndex.index]
    );

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
