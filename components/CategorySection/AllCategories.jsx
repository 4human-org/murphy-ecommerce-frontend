"use client";
import CategorySection from "./CategorySection.jsx";
import CategoryDummyData from "../../CategoryDummyData.js";

export default function AllCategories() {
  const categories = CategoryDummyData;
  const allCategories = categories.map((item) => (
    <CategorySection
      key={item.category.title}
      categoryHeader={item.category.title}
      categoryDescription={item.category.description}
    ></CategorySection>
  ));
  return allCategories;
}
