const changeLikeIconColor = (iconElement) => {
  iconElement.classList.add('like--red');
}

const handleLike = (event) => {
  const iconElement = event.target;
  changeLikeIconColor(iconElement);
}

window.addEventListener('turbolinks:load', function () {
  const iconElement = document.getElementById("like");
  if (iconElement) {
    iconElement.addEventListener("click", handleLike);
  }
})
