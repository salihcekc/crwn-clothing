import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { getCategoriesAndDocuments } from "../../utils/firebase/Firebase.utils";
import { setCategories } from "../../store/categories/category.action";
import CategoriesPreview from "../CategoriesPreview/CategoriesPreview.component";
import Category from "../Category/Category.component";

import "./Shop.styles.scss";

const Shop = () => {
  const dispatch = useDispatch();
  const getCategoriesMap = async () => {
    const categoriesArray = await getCategoriesAndDocuments();
    dispatch(setCategories(categoriesArray));
  };
  useEffect(() => {
    getCategoriesMap();
  }, []);
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
