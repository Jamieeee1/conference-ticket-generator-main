const form = document.getElementById("form");
const droparea = document.getElementById("droparea");
const fileInput = document.getElementById("avatar");
const avatar = document.getElementById("avatar-icon");
const imageEdit = document.getElementById("imageEdit");
const dragText = document.getElementById("dragtodrop");
const buttons = document.querySelectorAll(".button");
const removeButton = document.getElementById("removeimage");
const changeButton = document.getElementById("changeimage");

// input
const names = document.getElementById("name");
const email = document.getElementById("email");
const github = document.getElementById("github");

// errors
const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const githubError = document.getElementById("github-error");

// Prevent default drag behaviors
// ["dragenter", "dragover", "dragleave", "drop"].forEach((eventName) => {
//   droparea.addEventListener(eventName, preventDefaults, false);
//   document.body.addEventListener(eventName, preventDefaults, false);
// });

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
  });
});

fileInput.addEventListener("change", updateAvatar);

function updateAvatar() {
  const file = fileInput.files[0];
  if (!file) {
    avatar.src = "/assets/images/icon-upload.svg";
    imageEdit.classList.add("hidden");
    dragText.classList.remove("hidden");
    return;
  } else if (file) {
    let imgUrl = URL.createObjectURL(file);
    avatar.src = imgUrl;
    imageEdit.classList.remove("hidden");
    dragText.classList.add("hidden");
  }
}

removeButton.addEventListener("click", () => {
  fileInput.value = "";
  updateAvatar();
});

changeButton.addEventListener("click", () => {
  fileInput.click();
});

droparea.addEventListener("dragover", (e) => {
  e.preventDefault();
});

droparea.addEventListener("drop", (e) => {
  e.preventDefault();
  fileInput.files = e.dataTransfer.files;
  updateAvatar();
});

let nameCheck;

names.addEventListener("keyup", checkname);
const regex = /^[A-Za-z]{2,}\s[A-Za-z]{2,}$/;
function checkname() {
  if (names.value.trim() === "") {
    nameError.classList.remove("invisible");
    names.classList.remove("border-Neutral-300");
    names.classList.add("border-Orange-500");
    nameCheck = false;
  } else if (regex.test(names.value)) {
    nameError.classList.add("invisible");
    names.classList.remove("border-Orange-500");
    names.classList.add("border-Neutral-300");
    nameCheck = true;
  } else if (regex.test(names.value) === false) {
    nameError.classList.remove("invisible");
    names.classList.remove("border-Neutral-300");
    names.classList.add("border-Orange-500");
    nameCheck = false;
  } else {
    return true;
  }
}

// const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// if (emailRegex.test(email.value.trim())) {
//   // valid email
// } else {
//   // invalid email
// }
