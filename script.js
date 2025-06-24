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
const name = document.getElementById("name");
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

const regex = /^[A-Za-z]{2,}\s[A-Za-z]{2,}$/;
