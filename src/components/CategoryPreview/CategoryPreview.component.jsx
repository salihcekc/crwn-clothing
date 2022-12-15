import "./CategoryPreview.styles.scss";
import { useSelector } from "react-redux";
import { selectCategoriesIsLoading } from "../../store/categories/category.selector";
import ProductCard from "../ProductCard/ProductCard.component";
import { Link } from "react-router-dom";
import Spinner from "../Spinner/Spinner.component";

const CategoryPreview = ({ title, products }) => {
  const isLoading = useSelector(selectCategoriesIsLoading);
  return (
    <div className="category-preview-container">
      {isLoading && <Spinner />}
      <h2>
        <Link className="title" to={title}>
          {title.toUpperCase()}
        </Link>
      </h2>
      <div className="preview">
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
