document.addEventListener("DOMContentLoaded", function () {
  let firstBlock = document.getElementById("firstBlock");
  let secondBlock = document.getElementById("secondBlock");
  let thirdBlock = document.getElementById("thirdBlock");
  let fourthBlock = document.getElementById("fourthBlock");

  let firstTitle = document.getElementById("firstTitle");
  firstTitle.addEventListener("click", function () {
    setStylesToOrderBox(
      secondBlock,
      thirdBlock,
      fourthBlock,
      secondTitle,
      thirdTitle,
      fourthTitle,
      firstBlock,
      firstTitle
    );
  });

  let secondTitle = document.getElementById("secondTitle");
  secondTitle.addEventListener("click", function () {
    setStylesToOrderBox(
      firstBlock,
      thirdBlock,
      fourthBlock,
      firstTitle,
      thirdTitle,
      fourthTitle,
      secondBlock,
      secondTitle
    );
  });

  let thirdTitle = document.getElementById("thirdTitle");
  thirdTitle.addEventListener("click", function () {
    setStylesToOrderBox(
      firstBlock,
      secondBlock,
      fourthBlock,
      firstTitle,
      secondTitle,
      fourthTitle,
      thirdBlock,
      thirdTitle
    );
  });

  let fourthTitle = document.getElementById("fourthTitle");
  fourthTitle.addEventListener("click", function () {
    setStylesToOrderBox(
      firstBlock,
      secondBlock,
      thirdBlock,
      firstTitle,
      secondTitle,
      thirdTitle,
      fourthBlock,
      fourthTitle
    );
  });

  function setStylesToOrderBox(
    block1,
    block2,
    block3,
    title1,
    title2,
    title3,
    blockFlex,
    titleBlue
  ) {
    blockFlex.style.display = "flex";
    block1.style.display = "none";
    block2.style.display = "none";
    block3.style.display = "none";
    title1.style.color = "black";
    title2.style.color = "black";
    title3.style.color = "black";
    titleBlue.style.color = "blue";
    title1.style.borderBottom = "1px dashed #515151";
    title2.style.borderBottom = "1px dashed #515151";
    title3.style.borderBottom = "1px dashed #515151";
    titleBlue.style.borderBottom = "2px solid blue";
  }

  let openModal = document.getElementById("openModal");
  let elementModal = document.getElementById("elementModal");
  let closeModal = document.getElementById("closeModal");
  openModal.addEventListener("click", function (event) {
    event.preventDefault();
    elementModal.style.display = "block";
  });
  closeModal.addEventListener("click", function () {
    elementModal.style.display = "none";
  });

  let form = document.querySelector("form");
  let btnSubmit = document.querySelector("#formSubmitBtn");
  let regExpName = /^[A-Za-z]{3,16}$/;
  let regExpPhone = /^8\s\d{3}\s\d{3}\s\d{2}\s\d{2}$/;
  btnSubmit.addEventListener("click", function (event) {
    event.preventDefault();
    let validateElem = function (elem) {
      if (elem.name == "username") {
        if (!regExpName.test(elem.value) && elem.value !== "") {
          elem.nextElementSibling.textContent = "Введите имя пользователя!";
        } else {
          elem.nextElementSibling.textContent = "";
        }
      }
      if (elem.name == "phone") {
        if (!regExpPhone.test(elem.value) && elem.value !== "") {
          elem.nextElementSibling.textContent =
            "Введите корректный номер телефона!";
        } else {
          elem.nextElementSibling.textContent = "";
        }
      }
    };
    for (let elem of form.elements) {
      if (elem.tagName !== "BUTTON" && elem.value == "") {
        elem.nextElementSibling.textContent = "Данное поле не заполнено!";
        elem.classList.add("invalid");
      } else if (elem.value !== "") {
        validateElem(elem);
        elem.classList.remove("invalid");
      }
    }
  });
});
