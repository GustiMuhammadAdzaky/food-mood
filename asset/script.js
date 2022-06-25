// async function fetchData() {
//   const response = await fetch(
//     "https://graph.instagram.com/me/media?fields=id,media_type,caption,media_url,username,timestamp&access_token=IGQVJWYU9Qcl9WX2VTblNtV05DOW5OaXRodktDWkwwbDkxR1JBMk16eTQwVm9RWU8wdC0tcGJ5RVRxOHk1Q1VVa3hPNUczWXJYdTlVN2N1ZADJzTnZAxNjdvUVdKQmJmYkljcHZAMTlpaRlhzTnZAHcVkyVgZDZD",
//     {
//       method: "GET",
//     }
//   );

//   let json = await response.json();
//   const results = json.data;
// }

// fetchData();

// const API_URL =
//   "https://graph.instagram.com/me/media?fields=id,media_type,caption,media_url,username,timestamp&access_token=IGQVJWYU9Qcl9WX2VTblNtV05DOW5OaXRodktDWkwwbDkxR1JBMk16eTQwVm9RWU8wdC0tcGJ5RVRxOHk1Q1VVa3hPNUczWXJYdTlVN2N1ZADJzTnZAxNjdvUVdKQmJmYkljcHZAMTlpaRlhzTnZAHcVkyVgZDZD";

// document.querySelector(".card-jual");

// async function getCard() {
//   const response = await fetch(API_URL);
//   const json = await response.json();
//   const result = json.data;
//   console.log(result)

//   // <div class="col-sm mt-3">
//   //   <div class="card" style="width: 18rem">
//   //     <img class="card-img-top" src="#" alt="Card image cap" />
//   //     <div class="card-body">
//   //       <p class="card-text">
//   //         Some quick example text to build on the card title and make up the
//   //         bulk of the card's content.
//   //       </p>
//   //       <a href="#" class="btn btn-primary">
//   //         Beli
//   //       </a>
//   //     </div>
//   //   </div>
//   // </div>;

//   result.forEach((cardPenjualan) => {
//     const columnElement = document.createElement("div");
//     columnElement.classList.add("col-sm mt-3");
//   });
// }

// getCard();
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "db454b5d5emshb2e3bfeea4c4a1ep138358jsn79b2a9563952",
    "X-RapidAPI-Host": "quotes15.p.rapidapi.com",
  },
};

fetch("https://quotes15.p.rapidapi.com/quotes/random/", options)
  .then((data) => data.json())
  .then((datas) => {
    let desc = datas.content;
    let quotesBy = datas.originator.name;
    document.getElementById("quotes").innerHTML = desc;
    document.getElementById("quotes-by").innerHTML = quotesBy;
  });
// Image Change
fetch(
  "https://graph.instagram.com/me?fields=id,username&access_token=IGQVJWYU9Qcl9WX2VTblNtV05DOW5OaXRodktDWkwwbDkxR1JBMk16eTQwVm9RWU8wdC0tcGJ5RVRxOHk1Q1VVa3hPNUczWXJYdTlVN2N1ZADJzTnZAxNjdvUVdKQmJmYkljcHZAMTlpaRlhzTnZAHcVkyVgZDZD"
)
  .then((data) => data.json())
  .then((datas) => {
    let userName = datas.username;
    let classUserName = document.getElementsByClassName("user-name");
    for (let i = 0; i < classUserName.length; i++) {
      classUserName[i].innerHTML = userName;
    }
  });

// Tersedia

fetch(
  "https://graph.instagram.com/me/media?fields=id,media_type,caption,media_url,username,timestamp&access_token=IGQVJWYU9Qcl9WX2VTblNtV05DOW5OaXRodktDWkwwbDkxR1JBMk16eTQwVm9RWU8wdC0tcGJ5RVRxOHk1Q1VVa3hPNUczWXJYdTlVN2N1ZADJzTnZAxNjdvUVdKQmJmYkljcHZAMTlpaRlhzTnZAHcVkyVgZDZD"
)
  .then((data) => data.json())
  .then((datas) => {
    let res = datas.data;
    let indexArray = 0;
    // console.log(res);

    res.forEach(() => {
      let columnElement = document.createElement("div");
      columnElement.setAttribute("class", "col-sm mt-3 coba");
      document.getElementById("card-jual").appendChild(columnElement);

      let cardElement = document.createElement("div");
      cardElement.setAttribute("class", "card");
      cardElement.setAttribute("style", "width: 18rem");
      columnElement.appendChild(cardElement);

      let cardImage = document.createElement("img");
      cardImage.setAttribute("class", "card-img-top");
      cardImage.setAttribute("alt", "Card image cap");
      cardImage.src = res[indexArray].media_url;
      cardElement.appendChild(cardImage);

      let cardBody = document.createElement("div");
      cardBody.setAttribute("class", "card-body");
      cardElement.appendChild(cardBody);

      let cardText = document.createElement("p");
      cardText.setAttribute("class", "card-text");
      cardText.innerHTML = res[indexArray].caption;
      cardBody.appendChild(cardText);

      let btnElement = document.createElement("a");
      btnElement.setAttribute("class", "btn btn-primary font");
      btnElement.setAttribute(
        "href",
        `https://api.whatsapp.com/send?phone=+6289691789422&text=hay%20saya%20ingin%20memesan%20kue%20yang%20berdeskripisi:%20${res[indexArray].caption}`
      );
      btnElement.innerHTML = "Beli";

      cardBody.appendChild(btnElement);
      indexArray++;
    });
  });
