export default function createCarousel(container, wrapper, images = []) {
  console.log("started");
  // Images

  images.forEach((src, index) => {
    const image = new Image();
    image.src = src;
    image.classList.add("img");
    container.appendChild(image);
    image.style.display = index === 0 ? "block" : "none";
  });

  // Buttons

  const leftButton = document.createElement("button");
  const rightButton = document.createElement("button");

  leftButton.textContent = "<";
  rightButton.textContent = ">";

  leftButton.classList.add("left-btn");
  rightButton.classList.add("right-btn");

  container.appendChild(leftButton);
  container.appendChild(rightButton);

  // Circles

  const circleContainer = document.createElement("div");
  circleContainer.classList.add("circle-wrapper");

  for (let i = 0; i < images.length; i++) {
    const circle = document.createElement("div");
    circle.classList.add("circle");
    if (i === 0) {
      circle.style.backgroundColor = "#000";
    }
    circleContainer.appendChild(circle);
  }

  wrapper.appendChild(circleContainer);

  // Buttons EventListeners

  let currentImage = 0;
  const imageElements = document.querySelectorAll(".img");

  leftButton.addEventListener("click", () => {
    if (currentImage === 0) {
      currentImage = imageElements.length;
    }

    for (let index = 0; index < imageElements.length; index++) {
      const element = imageElements[index];
      if (index === currentImage) {
        element.style.display = "none";
      } else if (index === currentImage - 1) {
        element.style.display = "block";
      } else if (currentImage === imageElements.length) {
        imageElements[0].style.display = "none";
      }
    }

    currentImage -= 1;

    for (let i = 0; i < circleContainer.children.length; i++) {
      if (currentImage === i) {
        for (let j = 0; j < circleContainer.children.length; j++) {
          circleContainer.children[j].style.backgroundColor = "transparent";
        }
        circleContainer.children[i].style.backgroundColor = "#000";
      }
    }
  });

  rightButton.addEventListener("click", () => {
    if (currentImage === imageElements.length - 1) {
      currentImage = -1;
    }

    for (let index = 0; index < imageElements.length; index++) {
      const element = imageElements[index];
      if (index === currentImage) {
        element.style.display = "none";
      } else if (index === currentImage + 1) {
        element.style.display = "block";
      } else if (currentImage === -1) {
        imageElements[imageElements.length - 1].style.display = "none";
      }
    }

    currentImage += 1;

    for (let i = 0; i < circleContainer.children.length; i++) {
      if (currentImage === i) {
        for (let j = 0; j < circleContainer.children.length; j++) {
          circleContainer.children[j].style.backgroundColor = "transparent";
        }
        circleContainer.children[i].style.backgroundColor = "#000";
      }
    }
  });
}
