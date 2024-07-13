const getData = async () => {
  const { data } = await axios.get(`https://dummyjson.com/products`);
  return data;
};
const displayData = async () => {
  const productse = await getData();
  const result = productse.products
    .map((product) => {
      return `
            <div class="product">
            <h2>${product.title}</h2>
            <img src="${product.thumbnail}"/>
            <a href="details.html?id=${product.id}">Show Details</a>
            </div>
                `;
    })
    .join("");
  document.querySelector(".products").innerHTML = result;
};
displayData();
