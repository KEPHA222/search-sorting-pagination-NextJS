import React from "react";

const Products = (props) => {
  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      {props.products.map((product) => {
        return (
          <div key={product.id} class="col">
            <div class="card shadow-sm">
              <img src={product.image} height={200} />

              <div class="card-body">
                <p class="card-text">{product.title}</p>
                <div class="d-flex justify-content-between align-items-center">
                  <small class="text-muted">Kes.{product.price}</small>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
