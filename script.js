const form = document.getElementById("form");
const droparea = document.getElementById("droparea");
const fileInput = document.getElementById("avatar");
const avatar = document.getElementById("avatar-icon");

fileInput.addEventListener("change", updateAvatar);

function updateAvatar() {
  const file = fileInput.files[0];
  let imgUrl = URL.createObjectURL(file);
  avatar.src = imgUrl;
}
