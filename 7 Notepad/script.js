// Change text style by clicking on I,B
function toggle(style,id) {
  let x = document.getElementById(id);
    if (x.classList.contains(style)) {
      x.classList.remove(style);
    } else {
      x.classList.add(style);
    };
};

function changeStyleButtons (el1, el2) {
  document.getElementById("bold_button").addEventListener("click", () => {
    toggle(`bold`,el1);
    toggle(`bold`,el2);
    document.getElementById("bold_button").classList.toggle("button_active");
  });

  document.getElementById("italic_button").addEventListener("click", () => {
    toggle(`italic`,el1);
    toggle(`italic`,el2);
    document.getElementById("italic_button").classList.toggle("button_active");
  });
};

changeStyleButtons ("header", "text");

// Refresh title
function titleChange () {
  if (document.getElementById('header').value !== "") {
  text = document.getElementById('header').value
  document.getElementById("title").innerHTML = text;
  }
};

function refreshTitle(){
  setInterval(titleChange, 2000);
};

refreshTitle();

// Get text and update
let currentText = "";

function updateText(e) {
  let text = e.target.value
  currentText = text;
};

document.getElementById('text').addEventListener("keyup", updateText );


//Share text
const shareBtn = document.getElementById("share");
const title = "header";

shareBtn.addEventListener('click', () => {
  if (navigator.share) {
    navigator.share({
      title: title,
      text: currentText,
      url: window.location.href
    }).then(() => {
      showMessage(shareBtn, 'Thanks!');
    })
    .catch(err => {
      showMessage(shareBtn, `Couldn't share`);
    });
  } else {
    showMessage(shareBtn, 'Not supported');
    console.log({
      title: title,
      text: currentText,
      url: window.location.href
    });
  }
});

function showMessage(element, msg) {
  element.textContent = msg;
  setTimeout(() => {
    element.textContent = "Share";
  }, 2000);
}

//---To Do---
// зробити щоб текст оновлювало і передавало в функцію share
// під час помилки має кидати в консоль об'єкт і не виводити текст
// поврапати функції
// замість setInterval використовувати onChange

//+ Оптимізувати поле хедер через css і поле текст не має розширюватись
//+ Виправити адаптив (видалити статичну ширину і переміщувати або зменшувати кнопки для малих екранів)
//+ Зробити нижній бордер для імпутів
