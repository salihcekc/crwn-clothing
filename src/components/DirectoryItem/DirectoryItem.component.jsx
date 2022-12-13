import React from "react";
import "./DirectoryItem.styles.scss";

function DirectoryItem({ category }) {
  const { title, imageUrl } = category;
  return (
    <div className="directory-item-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="directory-item-body-container">
        <h2> {title} </h2>
        <p>Show Now</p>
      </div>
    </div>
  );
}

export default DirectoryItem;
