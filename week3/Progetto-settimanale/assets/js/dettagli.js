const detailRow = document.querySelector("#productsDetails .row");
const STRIVE_URL = "https://striveschool-api.herokuapp.com/api/product/";
let prodId = new URLSearchParams(window.location.search).get("prodId");

let showDetail = async () => {
  let response = await fetch(STRIVE_URL + prodId, {
    method: "GET",
    headers: {
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0NzE3MGY4MWI0MjAwMTM5YjJhZjAiLCJpYXQiOjE2NzkyMzM5OTQsImV4cCI6MTY4MDQ0MzU5NH0.8P6CdDJDQJ6I5Jhs9OCMXXYBdQ9xYtg3LrZN003SBRM",
    },
  });
  let prodData = await response.json();
  let prodDetail = document.createElement("div");
  prodDetail.classList.add("col-12");
  prodDetail.innerHTML = `<div class="card mb-3 border-0" style="width: 100%"><div class="row g-0"><div class="col-md-4"><img src="${prodData.imageUrl}" class="img-fluid rounded-2"></div><div class="col-md-8 text-center"><div class="card-body"><h2 class="card-title">${prodData.name}</h2><p class="card-text">${prodData.description}</p><p class="card-text"><small class="text-muted">${prodData.brand}</small></p><p>Prezzo: ${prodData.price}$</p></div></div></div></div>`;
  detailRow.appendChild(prodDetail);
};
showDetail();