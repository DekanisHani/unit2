const STRIVE_URL = "https://striveschool-api.herokuapp.com/api/product/";
const prodRow = document.querySelector("#main .row");

const caricamento = () => {
  let spinner = document.querySelector(".spinner-border");
  spinner.classList.add("d-none");
}

const getFromAPI = async function() {
  try {
    let response = await fetch(STRIVE_URL, {
      headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0NzE3MGY4MWI0MjAwMTM5YjJhZjAiLCJpYXQiOjE2NzkyMzM5OTQsImV4cCI6MTY4MDQ0MzU5NH0.8P6CdDJDQJ6I5Jhs9OCMXXYBdQ9xYtg3LrZN003SBRM",
      },
    });
    console.log(response);
    if(response.ok) {
      let objs = await response.json();
      caricamento();
      console.log("el")
      objs.forEach((el) => {
        card(el.imageUrl, el.name, el._id, el.price)
      });
    }
    else{
      console.log("ciao")
    }
  }catch (error){
    console.log(error);
  }
};

getFromAPI();

let card = (prodImg, prodName, prodId, prodPrice) => {
  let newCol = document.createElement("div");
  newCol.setAttribute("class", "col-12 col-md-4 col-xl-3");
  newCol.innerHTML = `<div class="card border-0" style="width: 80%; height: 500px"><img src="${prodImg}" class="card-img-top" alt="..."><div class="card-body"><div class="mb-2"><h5 class="card-title">${prodName}</h5><span class="badge bg-dark rounded-5" style="font-size: 20px">${prodPrice}€</span></div><a href="./dettagli.html?prodId=${prodId}" id="btnMore" class="btn btn-primary me-2 border border-none">Dettagli</a><a href="./backOffice.html?prodId=${prodId}" id="btnModify" class="btn btn-secondary me-2 border border-none">Modifica</a></div></div>`;
  prodRow.appendChild(newCol);
};



