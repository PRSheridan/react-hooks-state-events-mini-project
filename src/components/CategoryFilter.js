import React from "react";

function CategoryFilter( {categories, selectCategory} ) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => {
        return (
          <button key={category} onClick={selectCategory}>{ category }</button>
        )
      })}
    </div>
  );
}

export default CategoryFilter;
