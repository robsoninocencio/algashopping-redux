import React from "react";
import { Wrapper, Title, Array } from "./ShoppingList.styles";
import Checkbox from "../../shared/Checkbox";

import { useSelector, useDispatch } from "react-redux";
import {
  selectSelectedProducts,
  selectAllProducts,
} from "../../store/Products/Products.selector";

import { toggleProduct } from "../../store/Products/Products.actions";

function ShoppingList({ title, displayOnlySelected }) {
  const products = useSelector(
    displayOnlySelected ? selectSelectedProducts : selectAllProducts
  );

  const dispatch = useDispatch();

  function handleToggle(id) {
    dispatch(toggleProduct(id));
  }

  return (
    <Wrapper>
      <Title>{title}:</Title>
      <Array>
        {products.map((product) => (
          <Checkbox
            key={product.id}
            value={product.checked}
            title={product.name}
            onClick={() => handleToggle(product.id)}
          />
        ))}
      </Array>
    </Wrapper>
  );
}

export default ShoppingList;
