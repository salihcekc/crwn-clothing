import { FC } from "react";
import { useNavigate } from "react-router-dom";
import "./DirectoryItem.styles.scss";
import { DirectoryCategory } from "../Directory/Directory.component";

type DirectoryItemProps = {
  category: DirectoryCategory;
};

const DirectoryItem: FC<DirectoryItemProps> = ({ category }) => {
  const { title, imageUrl, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <div className="directory-item-container" onClick={onNavigateHandler}>
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
};

export default DirectoryItem;
