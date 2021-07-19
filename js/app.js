// search input
let searchInput = document.querySelector(".input-search input");
let blinkCursor = document.querySelector(".input-search .blinking-cursor");
let searchVal = document.getElementById("search-val");
let searchResult = document.querySelector(".search-part p");
let searchParent = document.querySelector(".input-search i");
searchInput.addEventListener("click", function () {
  blinkCursor.style.display = "none";
});
searchInput.addEventListener("keyup", function (e) {
  localStorage.setItem("val1", searchInput.value);
  if (e.which == 13) {
    window.open("search.html");
  }
});
searchParent.addEventListener("click", function () {
  window.open("search.html");
});

// counter in home page
const percentCount = document.querySelector(".counter-percent");
if (percentCount) {
  const posts = 82;
  let i = 0;
  const counterInterval = setInterval(() => {
    i++;
    percentCount.innerHTML = i + "%";
    if (i >= posts) {
      clearInterval(counterInterval);
    }
  }, 10);
}
const lawyerCount = document.querySelector(".counter-lawyer");
if (lawyerCount) {
  const posts = 103;
  let i = 0;
  const counterInterval = setInterval(() => {
    i++;
    lawyerCount.innerHTML = i;
    if (i >= posts) {
      clearInterval(counterInterval);
    }
  }, 10);
}
// form validation in contact page
const name2 = document.getElementById("input");
const email = document.getElementById("email");
const textArea = document.getElementById("textarea");
const phone = document.getElementById("phone");
const submitForm = document.querySelector(".contact-form .contact-btn .btn");
if (submitForm) {
  submitForm.addEventListener("click", function (e) {
    e.preventDefault();
    if (document.myForm.Name.value == "") {
      name2.style.border = "1px solid red";
    }
    let check = document.myForm.Email.value.includes("@gmail.com");
    if (document.myForm.Email.value == "" && !check) {
      email.style.border = "1px solid red";
    }
    if (document.myForm.text.value == "") {
      textArea.style.border = "1px solid red";
    }
    if (document.myForm.Phone.value == "") {
      phone.style.border = "1px solid red";
    }
    return true;
  });
}
if (name2) {
  name2.addEventListener("keyup", function () {
    if (document.myForm.Name.value !== "") {
      name2.style.border = "1px solid green";
    }
  });
}
if (email) {
  email.addEventListener("keyup", function () {
    let check = document.myForm.Email.value.includes("@gmail.com");
    if (document.myForm.Email.value !== "" && check) {
      email.style.border = "1px solid green";
    }
  });
}
if (textArea) {
  textArea.addEventListener("keyup", function () {
    if (document.myForm.text.value !== "") {
      textArea.style.border = "1px solid green";
    }
  });
}
if (phone) {
  phone.addEventListener("keyup", function () {
    if (document.myForm.Phone.value !== "") {
      phone.style.border = "1px solid green";
    }
  });
}
if (submitForm) {
  submitForm.addEventListener("click", function () {
    if (
      document.myForm.Name.value !== "" &&
      document.myForm.Email.value !== ""
    ) {
      submitForm.innerHTML = "submitting...";
      const setInput = setInterval(function () {
        email.value = "";
        name2.value = "";
        textArea.value = "";
        phone.value = "";
        phone.style.border = "none";
        textArea.style.border = "none";
        email.style.border = "none";
        name2.style.border = "none";
        submitForm.innerHTML = "submitted";
      }, 4000);
    }
  });
}
// burger menu
$(function () {
  let windowSize = $(window).width();
  $(".burger-icon").hide();
  $(".icon-menu").show();
  if (windowSize <= 970) {
    $(".menu li:last-child").hide();
    $(".burger-icon").show();
    $(".icon-close").hide();
    $(".icon-menu").on("click", function () {
      $(".menu").css("right", "0");
      $(".icon-menu").hide();
      $(".icon-close").show();
    });
    $(".icon-close").on("click", function () {
      $(".menu").css("right", "-100%");
      $(".icon-menu").show();
      $(".icon-close").hide();
    });
  }
  // search
  $(".search").hide();
  $(".icon-search").on("click", function (e) {
    e.preventDefault();
    $(".icon-close").show();
    $(".search").fadeIn();
  });
  $(".icon-close").on("click", function () {
    $(".search").fadeOut();
  });
  // elevator
  $(".elevator").click(function () {
    $("body , html").animate({ scrollTop: 0 }, 1000);
  });
  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      $(".elevator").fadeIn();
    } else {
      $(".elevator").fadeOut();
    }
  });
  try {
    var url = "search.html";
    if ("url:contains('search.html')") {
      searchVal.value = localStorage.getItem("val1");
      searchResult.innerHTML += localStorage.getItem("val1");
    }
  } catch (error) {
    console.log("error");
  }
});
