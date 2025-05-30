//
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
//
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "#000000dd";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
}
// Виберіть елементи
const carousel = document.querySelector(".carousel");
const firstImage = carousel.querySelector("img");
const arrowIcons = document.querySelectorAll(".wrapper i");
// Змінні для управління станом
let isDragging = false;
let startX = 0;
let scrollStart = 0;
let scrollDiff = 0;
// Допоміжна функція для перемикання видимості стрілок
const toggleArrowIcons = () => {
  setTimeout(() => {
    const maxScroll = Math.round(carousel.scrollWidth - carousel.clientWidth);
    arrowIcons[0].style.display = carousel.scrollLeft <= 0 ? "none" : "block";
    arrowIcons[1].style.display = Math.round(carousel.scrollLeft) >= maxScroll ? "none" : "block";
  }, 100);
};
// Допоміжна функція для плавного прокручування каруселі
const scrollCarousel = (direction) => {
  const cardWidth = firstImage.clientWidth + 14; // Image width + margin
  const maxScroll = carousel.scrollWidth - carousel.clientWidth;
  const scrollAmount = direction === "right" ? cardWidth : -cardWidth;
  carousel.scrollLeft = Math.min(Math.max(carousel.scrollLeft + scrollAmount, 0), maxScroll);
  toggleArrowIcons();
};
// Слухачі подій для стрілок
arrowIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    const direction = icon.id === "right" ? "right" : "left";
    scrollCarousel(direction);
  });
});
// Автоматичне налаштування після перетягування
const autoCenterImage = () => {
  const cardWidth = firstImage.clientWidth + 14;
  const offset = carousel.scrollLeft % cardWidth;
  const maxScroll = carousel.scrollWidth - carousel.clientWidth;
  if (carousel.scrollLeft > 0 && carousel.scrollLeft < maxScroll) {
    if (offset > cardWidth / 3) {
      carousel.scrollLeft += cardWidth - offset; // Перейти до наступного зображення
    } else {
      carousel.scrollLeft -= offset; // Перейти до попереднього зображення
    }
  }
  toggleArrowIcons();
};
// Логіка перетягування
const startDragging = (event) => {
  isDragging = true;
  startX = event.pageX || event.touches[0].pageX;
  scrollStart = carousel.scrollLeft;
  carousel.classList.add("dragging");
};
const duringDrag = (event) => {
  if (!isDragging) return;

  const currentX = event.pageX || event.touches[0].pageX;
  scrollDiff = currentX - startX;

  carousel.scrollLeft = scrollStart - scrollDiff;
};
const stopDragging = () => {
  if (!isDragging) return;
  isDragging = false;
  carousel.classList.remove("dragging");
  if (Math.abs(scrollDiff) > 10) {
    autoCenterImage();
  }
};
// Приєднати слухачів подій
carousel.addEventListener("mousedown", startDragging);
carousel.addEventListener("touchstart", startDragging);
document.addEventListener("mousemove", duringDrag);
carousel.addEventListener("touchmove", duringDrag);
document.addEventListener("mouseup", stopDragging);
carousel.addEventListener("touchend", stopDragging);
// Початкове налаштування
toggleArrowIcons();
// 
(adsbygoogle = window.adsbygoogle || []).push({});
try {
  fetch(new Request("", { method: 'HEAD', mode: 'no-cors' })).then(function(response) {
    return true;
  }).catch(function(e) {
    var carbonScript = document.createElement("script");
    carbonScript.src = "//cdn.carbonads.com/carbon.js?serve=CE7DC2JW&placement=wwwcssscriptcom";
    carbonScript.id = "_carbonads_js";
    document.getElementById("carbon-block").appendChild(carbonScript);
  });
} catch (error) {
  console.log(error);
}
//
window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-LLWL5N9CSM');
  

  const btnUp = {
      el: document.querySelector('.btn-up'),
      show() {
        // видалити клас із кнопок btn-up_hide
        this.el.classList.remove('btn-up_hide');
      },
      hide() {
        // додати клас до кнопки btn-up_hide
        this.el.classList.add('btn-up_hide');
      },
      addEventListener() {
        // під час прокручування вмісту сторінки
        window.addEventListener('scroll', () => {
          // визначити величину прокручування
          const scrollY = window.scrollY || document.documentElement.scrollTop;
          // якщо сторінка прокручується більше ніж на 400 пікселів, то ми робимо кнопку видимою, інакше ми її ховаємо
          scrollY > 400 ? this.show() : this.hide();
        });
        // при натисканні кнопки .btn-up
        document.querySelector('.btn-up').onclick = () => {
          // перейти до верхньої частини сторінки
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
        }
      }
    }
    btnUp.addEventListener();



  


  