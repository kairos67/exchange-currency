//1  box 2
//2. dropdown
//3. currency inform
//4. click : change item
//5. exchange
//6. 숫자를 한국어로
//7. 밑에서 숫자를 바꿔도 위에서도

/* When the user clicks on the button,
// toggle between hiding and showing the dropdown content */
// function myFunction() {
//     document.getElementById("from-button").classList.toggle("show");
// }

// // Close the dropdown menu if the user clicks outside of it
// window.onclick = function (event) {
//     if (!event.target.matches(".dropbtn")) {
//         var dropdown = document.getElementsByClassName("dropdown-content");
//         var i;
//         for (i = 0; i < dropdown.length; i++) {
//             var openDropdown = dropdown[i];
//             if (openDropdown.classList.contains("show")) {
//                 openDropdown.classList.remove("show");
//             }
//         }
//     }
// };

let currencyRatio = {
  USD: {
    KRW: 1224.71,
    USD: 1,
    VND: 22864.5,
    unit: "달러",
  },
  KRW: {
    KRW: 1,
    USD: 0.00082,
    VND: 18.67,
    unit: "원",
  },
  VND: {
    KRW: 0.054,
    USD: 0.000044,
    VND: 1,
    unit: "동",
  },
};

//console.log(currencyRatio.USD.unit);
//currencyRatio["KRW"]["unit"]

let fromCurrency = "USD";
let toCurrency = "USD";

document.querySelectorAll("#from-currency-list a").forEach((menu) =>
  menu.addEventListener("click", function () {
    //1.버튼을 가져온다
    //2.버튼에 값을 바꾼다
    //3.선택된 currency값을 변수에 저장해준다
    document.getElementById("from-button").textContent = this.textContent;
    fromCurrency = this.textContent;
    console.log("from crurrency is" + fromCurrency);
    convert();
  })
);

document.querySelectorAll("#to-currency-list a").forEach((menu) =>
  menu.addEventListener("click", function () {
    document.getElementById("to-button").textContent = this.textContent;
    toCurrency = this.textContent;
    convert();
  })
);

function convert(type) {
  let amount = 0;

  amount = document.getElementById("from-input").value;

  let convertedAmount = amount * currencyRatio[fromCurrency][toCurrency];
  document.getElementById("to-input").value = convertedAmount;
}

// function convert(type) {
   let amount = 0;

//   if (type == "from") {
//     amount = document.getElementById("from-input").value;

//     let convertedAmount = amount * currencyRatio[fromCurrency][toCurrency];
//     document.getElementById("to-input").value = convertedAmount;
//   } else {
//     amount = document.getElementById("to-input").value;

//     let convertedAmount = amount * currencyRatio[toCurrency][fromCurrency];
//     document.getElementById("from-input").value = convertedAmount;
//   }
// }
