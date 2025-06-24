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

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
  });
});

fileInput.addEventListener("change", updateAvatar);
names.addEventListener("keyup", checkname);
email.addEventListener("keyup", checkEmail);
github.addEventListener("keyup", checkGithub);

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
function checkname() {
  const regex = /^[A-Za-z]{2,}\s[A-Za-z]{2,}$/;
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

let emailCheck;
function checkEmail() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.value.trim() === "") {
    emailError.classList.remove("invisible");
    email.classList.remove("border-Neutral-300");
    email.classList.add("border-Orange-500");
    emailCheck = false;
  } else if (emailRegex.test(email.value.trim())) {
    emailError.classList.add("invisible");
    email.classList.remove("border-Orange-500");
    email.classList.add("border-Neutral-300");
    emailCheck = true;
  } else {
    emailError.classList.remove("invisible");
    email.classList.remove("border-Neutral-300");
    email.classList.add("border-Orange-500");
    emailCheck = false;
  }
}

let githubCheck;
function checkGithub() {
  const githubRegex = /^@([a-zA-Z\d](?:[a-zA-Z\d-]{0,37}[a-zA-Z\d])?)$/;
  if (github.value.trim() === "") {
    githubError.classList.remove("invisible");
    github.classList.remove("border-Neutral-300");
    github.classList.add("border-Orange-500");
    githubCheck = false;
  } else if (githubRegex.test(github.value.trim())) {
    githubError.classList.add("invisible");
    github.classList.remove("border-Orange-500");
    github.classList.add("border-Neutral-300");
    githubCheck = true;
  } else {
    githubError.classList.remove("invisible");
    github.classList.remove("border-Neutral-300");
    github.classList.add("border-Orange-500");
    githubCheck = false;
  }
}

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   checkname();
//   checkEmail();
//   checkGithub();

//   if (nameCheck && emailCheck && githubCheck) {
//     form.submit();
//   } else {
//     if (!nameCheck) {
//       names.classList.add("border-Orange-500");
//     }
//     if (!emailCheck) {
//       email.classList.add("border-Orange-500");
//     }
//     if (!githubCheck) {
//       github.classList.add("border-Orange-500");
//     }
//   }
// });
