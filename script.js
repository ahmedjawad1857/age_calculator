// // let userInput = document.getElementById("date");
// // // console.log(new Date().toISOString().split("T"));
// // userInput.max = new Date().toISOString().split("T")[0];

// // const calculateAge = (e) => {
// //   e.preventDefault();
// //   let birthDate = new Date(userInput.value);

// //   let d1 = birthDate.getDate();
// //   let m1 = birthDate.getMonth() + 1;
// //   let y1 = birthDate.getFullYear();
// //   let today = new Date();
// //   let d2 = today.getDate();
// //   let m2 = today.getMonth() + 1;
// //   let y2 = today.getFullYear();

// //   let d3, m3, y3;
// //   y3 = y2 - y1;
// //   if (m2 < m1) {
// //     m3 = 12 + m2 - m1;
// //     y3--;
// //   } else {
// //     m3 = m2 - m1;
// //   }
// //   if (d2 < d1) {
// //     d3 = getDateInMonth(m1, y1) + d2 - d1;
// //     m3--;
// //   } else {
// //     d3 = d2 - d1;
// //   }

// //   if (m3 < 0) {
// //     y3--;
// //     m3 = 11;
// //   }
// //   console.log(m3, y3, d3);
// //   document.getElementById(
// //     "result"
// //   ).innerText = `${y3} years, ${m3} months, ${d3} days`;
// // };
// // const getDateInMonth = (month, year) => {
// //   return new Date(year, month, 0).getDate();
// // };
// let userInput = document.getElementById("date");
// userInput.max = new Date().toISOString().split("T")[0];

// const calculateAge = (e) => {
//   e.preventDefault(); // Prevent the form from reloading the page

//   let birthDate = new Date(userInput.value);

//   // Check if a date is selected
//   if (isNaN(birthDate.getTime())) {
//     document.getElementById("result").innerText = "Please select a date";
//     document.getElementById("result").classList.add("error");
//     return;
//   }

//   // Remove error class if a valid date is entered
//   document.getElementById("result").classList.remove("error");

//   let d1 = birthDate.getDate();
//   let m1 = birthDate.getMonth() + 1;
//   let y1 = birthDate.getFullYear();
//   let today = new Date();
//   let d2 = today.getDate();
//   let m2 = today.getMonth() + 1;
//   let y2 = today.getFullYear();

//   let d3, m3, y3;
//   y3 = y2 - y1;
//   if (m2 < m1) {
//     m3 = 12 + m2 - m1;
//     y3--;
//   } else {
//     m3 = m2 - m1;
//   }
//   if (d2 < d1) {
//     d3 = getDateInMonth(m1, y1) + d2 - d1;
//     m3--;
//   } else {
//     d3 = d2 - d1;
//   }

//   if (m3 < 0) {
//     y3--;
//     m3 = 11;
//   }

//   document.getElementById(
//     "result"
//   ).innerText = `${y3} years, ${m3} months, ${d3} days`;
// };

// const getDateInMonth = (month, year) => {
//   return new Date(year, month, 0).getDate();
// };
let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];

const calculateAge = (e) => {
  e.preventDefault(); // Prevent the form from reloading the page

  let birthDate = new Date(userInput.value);

  // Check if a date is selected
  if (isNaN(birthDate.getTime())) {
    document.getElementById("result").innerText = "Please select a date";
    document.getElementById("result").classList.add("error");
    return;
  }

  // Remove error class if a valid date is entered
  document.getElementById("result").classList.remove("error");

  let d1 = birthDate.getDate();
  let m1 = birthDate.getMonth() + 1;
  let y1 = birthDate.getFullYear();
  let today = new Date();
  let d2 = today.getDate();
  let m2 = today.getMonth() + 1;
  let y2 = today.getFullYear();

  let d3, m3, y3;
  y3 = y2 - y1;
  if (m2 < m1) {
    m3 = 12 + m2 - m1;
    y3--;
  } else {
    m3 = m2 - m1;
  }
  if (d2 < d1) {
    d3 = getDateInMonth(m1, y1) + d2 - d1;
    m3--;
  } else {
    d3 = d2 - d1;
  }

  if (m3 < 0) {
    y3--;
    m3 = 11;
  }

  // Convert the age to different formats
  let totalMonths = y3 * 12 + m3;
  let totalDays = y3 * 365 + m3 * 30 + d3;
  let weeks = Math.floor(totalDays / 7);
  let days = totalDays % 7;

  let result = `
    <strong>Years, Months, Days:</strong> ${y3} years, ${m3} months, ${d3} days<br> <br>
    <strong>Months and Days:</strong> ${totalMonths} months and ${d3} days <br> <br>
    <strong>Weeks and Days:</strong> ${weeks} weeks and ${days} days <br> <br>
    <strong>Days:</strong> ${totalDays} days
  `;

  document.getElementById("result").innerHTML = result;
};

const getDateInMonth = (month, year) => {
  return new Date(year, month, 0).getDate();
};
