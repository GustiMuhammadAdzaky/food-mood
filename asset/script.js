// Section Quotes ----------------------------------------------

// Build options to Params to second paramas in Fetch
const options = {
  // Using getMethod
  method: "GET",
  // Headers for Key Api and key Host
  headers: {
    "X-RapidAPI-Key": "db454b5d5emshb2e3bfeea4c4a1ep138358jsn79b2a9563952",
    "X-RapidAPI-Host": "quotes15.p.rapidapi.com",
  },
};

// Fetch Url and second params -> Options
fetch("https://quotes15.p.rapidapi.com/quotes/random/", options)
  // if fix resolve we can parse the data to JSON
  .then((data) => data.json())
  // Put Datas Params after get Json
  .then((datas) => {
    // is that in conditional, Karena pada Api qoutes itu berbentuk Objek dengan Propertis content, Jadi kita bisa ambil, dan di taroh pada Variable desc
    let desc = datas.content;
    // Mengambil Objek Nama dari Penulis Qoutes dari object originator dan propertis Name
    let quotesBy = datas.originator.name;
    // Mengambil Element ID Quotes dan mengganti text dengan variable yag dibuat sebelumnya
    document.getElementById("quotes").innerHTML = desc;
    // Mengambil Element ID quotes-by dan mengganti text dengan variable yag dibuat sebelumnya
    document.getElementById("quotes-by").innerHTML = `~ ${quotesBy}`;
  });
// Section Quotes ----------------------------------------------

// Change Footer And Title(Body) TEXT-----------------------------------
// Fetch Url and access and put fields yang diinginkan
// Kalo saya ambil Id dan username fields=id,username, dan terakhir masukkan Token dari instagram
fetch(
  "https://graph.instagram.com/me?fields=id,username&access_token=IGQVJWYU9Qcl9WX2VTblNtV05DOW5OaXRodktDWkwwbDkxR1JBMk16eTQwVm9RWU8wdC0tcGJ5RVRxOHk1Q1VVa3hPNUczWXJYdTlVN2N1ZADJzTnZAxNjdvUVdKQmJmYkljcHZAMTlpaRlhzTnZAHcVkyVgZDZD"
)
  // if fix resolve we can parse the data to JSON
  .then((data) => data.json())
  // Put Datas Params after get Json
  .then((datas) => {
    // Mendeskripsikan Variable username untuk ambil data pada object
    let userName = datas.username;
    // Mendeskripsikan Variable classUserName untuk menselect value user-name
    let classUserName = document.getElementsByClassName("user-name");
    // Melakukan Perulangan data
    for (let i = 0; i < classUserName.length; i++) {
      // Mengganti setiap data dengan array i yang sudah dilakukan perulangan untuk diisi dengan text userName
      classUserName[i].innerHTML = userName;
    }
  });
// Change Footer And Title(Body) TEXT------------------------------

// Section Recomend Mood Booster Foods-----------------------------
// Fetch Url and access and put fields yang diinginkan
// Pada Kasus ini ambil fields=id,media_type,caption,media_url,username,timestamp terakhir masukkan Token dari instagram
fetch(
  "https://graph.instagram.com/me/media?fields=id,media_type,caption,media_url,username,timestamp&access_token=IGQVJWYU9Qcl9WX2VTblNtV05DOW5OaXRodktDWkwwbDkxR1JBMk16eTQwVm9RWU8wdC0tcGJ5RVRxOHk1Q1VVa3hPNUczWXJYdTlVN2N1ZADJzTnZAxNjdvUVdKQmJmYkljcHZAMTlpaRlhzTnZAHcVkyVgZDZD"
)
  // if fix resolve we can parse the data to JSON
  .then((data) => data.json())
  // Put Datas Params after get Json
  .then((datas) => {
    // mendeklarasikan variable res yang berisi data
    let res = datas.data;
    // Mendeskripsikan Variable IndexArray untuk menjadi length dari array
    let indexArray = 0;

    // Melakukan perulangan pada data res
    res.forEach(() => {
      // <div class="col-sm mt-3 coba">
      //   <div class="card" style="width: 18rem">
      //     <img class="card-img-top" alt="Card image cap" src="">
      //       <div class="card-body">
      //         <p class="card-text"></p>
      //         <a class="btn btn-primary font" href="">Beli</a>
      //     </div>
      //   </div>
      // </div>
      //

      // Alasan saya membuat dengan ribet, Agar Element bennar benar di buat(Agar Web tidak merender Code tapi yang dilakukan perulangan adalah Element nya)

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

// Section Recomend Mood Booster Foods-----------------------------
