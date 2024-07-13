const getData = async () => {
  const params = new URLSearchParams(window.location.search);
  const param = params.get("id");
  console.log(param);
  const { data } = await axios.get(`https://dummyjson.com/products/${param}`);
  return data;
};
const display = async () => {
  const Details = await getData();
  const images = Details.images
    .map((img) => {
      return `<img src='${img}'/>`;
    })
    .join("");
  const result = `
    <h1>${Details.title}</h1>
    <p>${Details.description}</p>
    `;
  const reviews = Details.reviews
    .map((review) => {
      return `
        <div class="review">
        <h2>${review.reviewerName}</h2>
        <p>${review.comment}</p>
        </div>
        `;
    })
    .join("");
  console.log(reviews);
  document.querySelector(".img").innerHTML = images;
  document.querySelector(".disc").innerHTML = result;
  document.querySelector(".reviews").innerHTML += reviews;
};
display();
