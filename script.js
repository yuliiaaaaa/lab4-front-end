document.addEventListener("DOMContentLoaded", function () {
  const imageContainer = document.querySelector(".image-container");
  const addImageBtn = document.getElementById("add-button");
  const increaseBtn = document.getElementById("increase-button");
  const decreaseBtn = document.getElementById("decrease-button");
  const deleteBtn = document.getElementById("delete-button");
  const image = imageContainer.querySelector("img");

  addImageBtn.addEventListener("click", function () {
    const newImage = document.createElement("img");
    newImage.src = image.src;
    imageContainer.appendChild(newImage);
  });

  increaseBtn.addEventListener("click", function () {
    const currentImages = imageContainer.querySelectorAll("img");
    const lastImage = currentImages[currentImages.length - 1];
    const currentWidth = parseFloat(getComputedStyle(lastImage).width);
    lastImage.style.width = currentWidth * 1.2 + "px";
  });

  decreaseBtn.addEventListener("click", function () {
    const currentImages = imageContainer.querySelectorAll("img");
    const lastImage = currentImages[currentImages.length - 1];
    const currentWidth = parseFloat(getComputedStyle(lastImage).width);
    lastImage.style.width = currentWidth / 1.2 + "px";
  });

  deleteBtn.addEventListener("click", function () {
    const currentImages = imageContainer.querySelectorAll("img");
    if (currentImages.length > 0) {
      const lastImage = currentImages[currentImages.length - 1];
      imageContainer.removeChild(lastImage);
    }
  });


  //firstTask
 const thirdElement = document.getElementById('third-element');
    let isColorChanged = false;

    function changeColor(element) {
        if (!isColorChanged) {
            element.style.backgroundColor = isColorChanged ? '' : 'yellow';
            element.style.color = isColorChanged ? '' : 'blue';
            isColorChanged = !isColorChanged;
        } else {
            element.style.backgroundColor = isColorChanged ? 'green' : '';
            element.style.color = isColorChanged ? "white" : "";
            isColorChanged = !isColorChanged;
        }
    }

    thirdElement.addEventListener('click', function () {
        changeColor(thirdElement);
    });
});

