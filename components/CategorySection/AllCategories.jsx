"use client";
import CategorySection from "./CategorySection.jsx";
import CategoryDummyData from "../../CategoryDummyData.js";

export default function AllCategories() {
  const categories = CategoryDummyData;
  const allCategories = categories.map((item) => (
    <CategorySection
      categoryHeader={item.category.title}
      categoryDecription={item.category.description}
    ></CategorySection>
  ));
  return allCategories;
}
