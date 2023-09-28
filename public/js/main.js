//! Clock Start
// document.addEventListener("DOMContentLoaded", () => {
//   let hours = document.getElementById("hrs");
//   let minute = document.getElementById("min");
//   let second = document.getElementById("sec");

//   let currentTime = new Date();
//   hours.innerHTML =
//     (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
//   minute.innerHTML =
//     (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
//   second.innerHTML =
//     (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();

//   setInterval(() => {
//     currentTime = new Date();

//     hours.innerHTML =
//       (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
//     minute.innerHTML =
//       (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
//     second.innerHTML =
//       (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();
//   }, 1000);
// });

document.addEventListener("DOMContentLoaded", () => {
  let hours = document.getElementById("hrs");
  let minute = document.getElementById("min");

  function updateClock() {
    let currentTime = new Date();
    let currentHours = currentTime.getHours();
    let ampm = currentHours >= 12 ? "PM" : "AM";

    // conversion to 12 hours
    currentHours = currentHours % 12;
    currentHours = currentHours ? currentHours : 12;

    hours.innerHTML = (currentHours < 10 ? "0" : "") + currentHours;
    minute.innerHTML =
      (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();

    // add am or pm
    document.getElementById("ampm").innerHTML = ampm;
  }

  // display clock
  updateClock();

  // update clock
  setInterval(updateClock, 1000);
});

//! Clock End

//! Menu Function Start
const openMenuBtn = document.getElementById("open-menu-btn");
const closeMenuBtn = document.getElementById("close-menu-btn");
const humMenu = document.getElementById("hum-menu");
const body = document.body;
// let isMenuOpen = false;

openMenuBtn.addEventListener("click", () => {
  humMenu.style.left = "0%";
  body.style.overflow = "hidden";
});

closeMenuBtn.addEventListener("click", () => {
  humMenu.style.left = "-100%";
  body.style.overflow = "auto";
});
//! Menu Function End

//! message system start
const scriptURL =
  "https://script.google.com/macros/s/AKfycbzRsm9eqhKFh8luEkcRHjYvkPKDVRq7n98ECuc6l8XVerSVpEqXiXukBOBVMFkf52lk-g/exec";
const form = document.forms["artahendraa-contact-form"];

const btnSubmit = document.querySelector("#send-button");
const btnLoading = document.querySelector("#loading-btn");
const alertMassage = document.querySelector(".alert");
const alertFiledMassage = document.querySelector(".alert-filed");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  btnLoading.classList.toggle("hidden");
  btnSubmit.classList.toggle("hidden");

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      console.log("Success!", response);
      btnLoading.classList.toggle("hidden");
      btnSubmit.classList.toggle("hidden");
      alertMassage.classList.toggle("hidden");
      form.reset();
    })
    .catch((error) => {
      console.error("Error!", error.message);
      alertFiledMassage.classList.toggle("hidden");
    });
});

const closeButtons = document.querySelectorAll(".close");

closeButtons.forEach((closeButton) => {
  closeButton.addEventListener("click", () => {
    alertMassage.classList.toggle("hidden");
  });
});
//! message system end
