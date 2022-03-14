var myViewModel = {
  personalIntroduction:
    "I am a highly motivated and organised individual, who demonstrates \
    the qualities of independent and critical thinking through my \
    university, work, and hobby life. With strong attention to detail, \
    I consistently meet personal and professional goals on time and to an \
    excellent standard.",
  productionYear: new Date().getFullYear(),
  phoneRepairExperience: new Date().getFullYear() - 2015,
};

// Enable knockout
ko.applyBindings(myViewModel);

$(this).scrollTop() == 0
  ? $(".fa-user").fadeIn(200)
  : $(".fa-user").css("display", "none");

var toHome = () => $("html, body").animate({ scrollTop: 0 }, 100);

var introduction = () =>
  $("html, body").animate({ scrollTop: $("center").offset().top }, 100);

var internExperienceAndProjects = () =>
  $("html, body").animate(
    { scrollTop: $("#internExperienceAndProjects").offset().top - 100 },
    100
  );

var volunteeringAndOthers = () =>
  $("html, body").animate(
    { scrollTop: $("#volunteeringAndOthers").offset().top - 100 },
    100
  );

var personalStatements = () =>
  $("html, body").animate(
    { scrollTop: $("#personalStatements").offset().top - 100 },
    100
  );

var toBottom = () =>
  $("html, body").animate({ scrollTop: $(document).height() }, 100);

// When the user scrolls the page, execute function
window.onscroll = () => {
  let replaceClass = (id, newClass) => {
    var className = $(`#${id}`).attr("class");
    var elem = $(`#${id}`);
    if (elem.hasClass(className)) elem.removeClass(className);
    elem.addClass(newClass);
  };

  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("prograssOverlayBar").style.height = scrolled + "%";

  var scrollPosition = $(this).scrollTop();
  var internExperienceAndProjects = $("#internExperienceAndProjects").offset()
    .top;
  var skills = $("#skills").offset().top;
  var volunteeringAndOthers = $("#volunteeringAndOthers").offset().top;
  var employments = $("#employments").offset().top;
  var personalStatements = $("#personalStatements").offset().top;
  var education = $("#education").offset().top;
  var cars = $("#cars").offset().top;
  var contact = $("#contact").offset().top;

  if (scrollPosition < internExperienceAndProjects)
    replaceClass("sideIconDesktopNav", "fas fa-user");

  if (scrollPosition >= internExperienceAndProjects && scrollPosition < skills)
    replaceClass("sideIconDesktopNav", "fas fa-lightbulb");

  if (scrollPosition >= skills && scrollPosition < volunteeringAndOthers)
    replaceClass("sideIconDesktopNav", "fas fa-star");

  if (scrollPosition >= volunteeringAndOthers && scrollPosition < employments)
    replaceClass("sideIconDesktopNav", "fas fa-hands-helping");

  if (scrollPosition >= employments && scrollPosition < personalStatements)
    replaceClass("sideIconDesktopNav", "fas fa-building");

  if (scrollPosition >= personalStatements && scrollPosition < education)
    replaceClass("sideIconDesktopNav", "fas fa-info");

  if (scrollPosition >= education && scrollPosition < cars - 200)
    replaceClass("sideIconDesktopNav", "fas fa-university");

  if (scrollPosition >= cars - 200 && scrollPosition < contact - 300)
    replaceClass("sideIconDesktopNav", "fas fa-car");

  if (scrollPosition >= contact - 300)
    replaceClass("sideIconDesktopNav", "fas fa-envelope special-envelope");

  $(this).scrollTop() > $(document).height() * 0.04
    ? $(".backToTop").fadeIn()
    : $(".backToTop").fadeOut();

  $(this).scrollTop() > $(document).height() * 0.02 &&
  $(this).scrollTop() < $(document).height() * 0.9
    ? $(".toBottom").fadeIn()
    : $(".toBottom").fadeOut();

  $(this).scrollTop() > $(document).height() * 0.04
    ? $(".mobile-util-menu").css("right", "0vw")
    : $(".mobile-util-menu").css("right", "-15vw");

  var top = $(window).scrollTop() + $(window).height(),
    isVisible = top > $(".skill-set").offset().top;

  $(".skill-set").toggleClass("animate", isVisible);
};

var starNumber = () => 10 + Math.floor(Math.random() * Math.floor(30));

var starSpecs = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

var starPosition = (max) => Math.floor(Math.random() * Math.floor(max));

for (var i = 0; i <= starNumber(); i++) {
  starDimensions = starSpecs(100, 500) / 1000;
  starXPos = starPosition(1000);
  starYPos = starPosition(1000) / 10;
  $(".frontLeftPic").prepend(
    `<div class="stars blink d-none d-xl-flex" style="top: ${starYPos}vh; left: ${starXPos}px; width: ${starDimensions}vw; height: ${starDimensions}vw"></div>`
  );
}

$(".scrollDown").click(() => introduction());

$(".catchUp").click(() =>
  $("html, body").animate({ scrollTop: $(document).height() }, 100)
);

var myName = () => {
  window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
};

var mobileDevice = {
  Android: () => navigator.userAgent.match(/Android/i),
  BlackBerry: () => navigator.userAgent.match(/BlackBerry/i),
  iOS: () => navigator.userAgent.match(/iPhone|iPad|iPod/i),
  Opera: () => navigator.userAgent.match(/Opera Mini/i),
  Windows: () => navigator.userAgent.match(/IEMobile/i),
  any: () =>
    mobileDevice.Android() ||
    mobileDevice.BlackBerry() ||
    mobileDevice.iOS() ||
    mobileDevice.Opera() ||
    mobileDevice.Windows(),
};

/* if the device is not ios hide the download button */
if (mobileDevice.iOS()) $(".mobile-back-to-top").css("visibility", "hidden");

const toggle = document.querySelector(".dark-mode-button");
toggle.checked = false;

if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  toggle.checked = true;

  document
    .querySelector("meta[name='twitter:widgets:theme']")
    .setAttribute("content", "dark");

  $("#dark-mode").addClass("dark-mode-theme");
}

$(".dark-mode-button").click(() => {
  $("#dark-mode").hasClass("dark-mode-theme")
    ? $("#dark-mode").removeClass()
    : $("#dark-mode").addClass("dark-mode-theme");
});

// https://codepen.io/thenutz/pen/VwYeYEE
const slider = document.querySelector(".car-scroll-wrapper");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener("mouseleave", () => {
  isDown = false;
  slider.classList.remove("active");
});
slider.addEventListener("mouseup", () => {
  isDown = false;
  slider.classList.remove("active");
});
slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 1; //scroll-speed
  slider.scrollLeft = scrollLeft - walk;
  console.log(walk);
});

const websiteLoaded = () => {
  $(".loading-wrapper").fadeOut("slow");
  $("html").css("overflow-y", "scroll");
};

// enabke aos
AOS.init();
