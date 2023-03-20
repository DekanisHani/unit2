const STRIVE_URL = "https://striveschool-api.herokuapp.com/api/product/";
let prodId = new URLSearchParams(window.location.search).get("prodId");
const backForm = document.getElementById("backForm");

backForm.addEventListener("reset", (ev) => {
  if (!window.confirm("Confermi di voler resettare i valori?")) {
    ev.preventDefault();
  }
});

let backDel = async () => {
  if (window.confirm("Confermi di voler eliminare questo prodotto?")) {
    let response = await fetch(STRIVE_URL + prodId, {
      method: "DELETE",
      headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0NzE3MGY4MWI0MjAwMTM5YjJhZjAiLCJpYXQiOjE2NzkyMzM5OTQsImV4cCI6MTY4MDQ0MzU5NH0.8P6CdDJDQJ6I5Jhs9OCMXXYBdQ9xYtg3LrZN003SBRM",
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      alert("Prodotto eliminato!");
      window.location = "./progetto.html";
    } else {
      alert("Errore, il prodotto non è stato eliminato!");
    }
  } else {
    window.location = "./progetto.html";
  }
};

if (prodId) {
  fetch(STRIVE_URL + prodId, {
    method: "GET",
    headers: {
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0NzE3MGY4MWI0MjAwMTM5YjJhZjAiLCJpYXQiOjE2NzkyMzM5OTQsImV4cCI6MTY4MDQ0MzU5NH0.8P6CdDJDQJ6I5Jhs9OCMXXYBdQ9xYtg3LrZN003SBRM",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        return new Error("Error!");
      }
    })
    .then((prodData) => {
      console.log(prodData);

      document.getElementById("prodName").value = prodData.name;
      document.getElementById("prodDespt").value = prodData.description;
      document.getElementById("prodBrand").value = prodData.brand;
      document.getElementById("prodImg").value = prodData.imageUrl;
      document.getElementById("prodPrice").value = prodData.price;

      document.getElementById("submit").innerHTML = "MODIFICA";

      let deleteBtn = document.getElementById("backDelete");
      deleteBtn.classList.remove("invisible");
      deleteBtn.addEventListener("click", backDel);
    })
    .catch((error) => {
      console.log(error);
    });
}

const queryProd = async function (newProd) {
  try {
    let url = prodId ? STRIVE_URL + prodId : STRIVE_URL;

    let response = await fetch(url, {
      method: prodId ? "PUT" : "POST",
      body: JSON.stringify(newProd),
      headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0NzE3MGY4MWI0MjAwMTM5YjJhZjAiLCJpYXQiOjE2NzkyMzM5OTQsImV4cCI6MTY4MDQ0MzU5NH0.8P6CdDJDQJ6I5Jhs9OCMXXYBdQ9xYtg3LrZN003SBRM",
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      alert("Prodotto aggiunto!");
    } else {
      alert("Errore, prodotto non aggiunto!");
    }
  } catch (error) {
    console.log(error);
  }
};

let formReference = document.getElementsByTagName("form")[0];
formReference.addEventListener("submit", (e) => {
  e.preventDefault();
  let newProd = {
    name: document.getElementById("prodName").value,
    description: document.getElementById("prodDespt").value,
    brand: document.getElementById("prodBrand").value,
    imageUrl: document.getElementById("prodImg").value,
    price: document.getElementById("prodPrice").value,
  };
  queryProd(newProd);
});