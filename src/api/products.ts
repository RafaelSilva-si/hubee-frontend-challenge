export const getProducts = () => fetch("http://localhost:3000/products");

export const getProductsById = (id: number) =>
  fetch(`http://localhost:3000/products/${id}`);
