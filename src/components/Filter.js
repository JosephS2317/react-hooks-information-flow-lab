import React from "react";



    function Filter({ onCategoryChange , itemsToDisplay }){
        return (
          <div className="Filter">
            <select name="filter" onChange={onCategoryChange}>
              <option value="All">Filter by category</option>
              <option value="Produce">Produce</option>
              <option value="Dairy">Dairy</option>
              <option value="Dessert">Dessert</option>
              {itemsToDisplay}
            </select>
          </div>
        )
            
      
    }

export default Filter;