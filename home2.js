
function reactionButton(){
  const likeButton = document.querySelector(".like_button");
  var buttonWrapper = document.querySelector(".button_wrapper")
  const allLikesWrapper = document.querySelector(".all_likes_wrapper")
  var like_button = document.querySelector(".like_button svg");
  likeButton.addEventListener('click', (event) => {
    event.currentTarget.classList.toggle("active");
  });
  buttonWrapper.addEventListener("mouseover", () => {
    allLikesWrapper.classList.add("active");
  });
  buttonWrapper.addEventListener("mouseout", () => {
    allLikesWrapper.classList.remove("active");
  });
  allLikesWrapper.querySelectorAll("div").forEach((like_image) => {
    like_image.addEventListener("click", (event) => {
      let dataTitle = event.currentTarget.dataset.title;
      likeButton.innerHTML = `<img src ="imagesreact/${dataTitle.toLowerCase()}.png"/>${dataTitle} `
      console.log(`<img src ="images/${event.currentTarget.dataset.title.toLowerCase()}png"/>${event.currentTarget.dataset.title}`);
      if (dataTitle === "like") {
        likeButton.style.color = "#2086FE";
      } else if (dataTitle === "love") {
        likeButton.style.color = "#EC2050";
      } else if (dataTitle === "care" || dataTitle === 'Haha' || dataTitle === 'Wow' || dataTitle === 'Sad') {
        likeButton.style.color = "#FAC551";
      } else if (dataTitle === "Angry") {
        likeButton.style.color = "#E24E05";
      }
    });
  }
  )};
