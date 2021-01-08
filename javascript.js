var myViewModel = {
  personalIntroduction:
    "I am a highly motivated and organised individual, who demonstrates \
    the qualities of independent and critical thinking through my \
    university, work, and hobby life. With a strong attention to detail, \
    I consistently meet personal and school goals on time and to an \
    excellent standard.",
};

ko.applyBindings(myViewModel);

if ($(this).scrollTop() == 0) {
  $(".fa-user").fadeIn(200);
} else {
  $(".fa-user").css("display", "none");
}

var toHome = () => {
  $("html, body").animate({ scrollTop: 0 }, 100);
};

var internExperienceAndProjects = () => {
  $("html, body").animate(
    { scrollTop: $("#internExperienceAndProjects").offset().top - 100 },
    100
  );
};

var volunteeringAndOthers = () => {
  $("html, body").animate(
    { scrollTop: $("#volunteeringAndOthers").offset().top - 100 },
    100
  );
};

var personalStatements = () => {
  $("html, body").animate(
    { scrollTop: $("#personalStatements").offset().top - 100 },
    100
  );
};

var toBottom = () => {
  $("html, body").animate({ scrollTop: $(document).height() }, 100);
};

// When the user scrolls the page, execute function
window.onscroll = () => {
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

  if (scrollPosition < internExperienceAndProjects) {
    $(".fa-user").fadeIn();
  } else {
    $(".fa-user").css("display", "none");
  }
  if (
    scrollPosition >= internExperienceAndProjects &&
    scrollPosition < skills
  ) {
    $(".fa-lightbulb").fadeIn();
  } else {
    $(".fa-lightbulb").css("display", "none");
  }
  if (scrollPosition >= skills && scrollPosition < volunteeringAndOthers) {
    $(".fa-star").fadeIn();
  } else {
    $(".fa-star").css("display", "none");
  }
  if (scrollPosition >= volunteeringAndOthers && scrollPosition < employments) {
    $(".fa-hands-helping").fadeIn();
  } else {
    $(".fa-hands-helping").css("display", "none");
  }
  if (scrollPosition >= employments && scrollPosition < personalStatements) {
    $(".fa-building").fadeIn();
  } else {
    $(".fa-building").css("display", "none");
  }
  if (scrollPosition >= personalStatements && scrollPosition < education) {
    $(".fa-info").fadeIn();
  } else {
    $(".fa-info").css("display", "none");
  }
  if (scrollPosition >= education && scrollPosition < cars) {
    $(".fa-university").fadeIn();
  } else {
    $(".fa-university").css("display", "none");
  }
  if (scrollPosition >= cars && scrollPosition < contact - 800) {
    $(".fa-car").fadeIn();
  } else {
    $(".fa-car").css("display", "none");
  }
  if (scrollPosition >= contact - 799) {
    $(".special-envelope").fadeIn();
  } else {
    $(".special-envelope").css("display", "none");
  }

  if ($(this).scrollTop() > $(document).height() * 0.04) {
    $(".backToTop").fadeIn();
  } else {
    $(".backToTop").fadeOut();
  }

  if (
    $(this).scrollTop() > $(document).height() * 0.02 &&
    $(this).scrollTop() < $(document).height() * 0.9
  ) {
    $(".toBottom").fadeIn();
  } else {
    $(".toBottom").fadeOut();
  }

  if ($(this).scrollTop() > $(document).height() * 0.04) {
    $(".mobile-util-menu").css("right", "0vw");
  } else {
    $(".mobile-util-menu").css("right", "-15vw");
  }

  var top = $(window).scrollTop() + $(window).height(),
    isVisible = top > $(".skill-set").offset().top;

  $(".skill-set").toggleClass("animate", isVisible);
};

var starNumber = () => {
  return 10 + Math.floor(Math.random() * Math.floor(30));
};

var starSpecs = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

var starPosition = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

for (var i = 0; i <= starNumber(); i++) {
  starDimensions = starSpecs(100, 500) / 1000;
  starXPos = starPosition(500) / 10;
  starYPos = starPosition(1000) / 10;
  $(".frontLeftPic").prepend(
    `<div class="stars blink d-none d-xl-flex" style="top: ${starYPos}%; left: ${starXPos}%; width: ${starDimensions}vw; height: ${starDimensions}vw"></div>`
  );
}

$(".scrollDown").click(function () {
  $("html, body").animate(
    { scrollTop: $("#internExperienceAndProjects").offset().top },
    100
  );
});

$(".catchUp").click(function () {
  $("html, body").animate({ scrollTop: $(document).height() }, 100);
});

var mobileDevice = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      mobileDevice.Android() ||
      mobileDevice.BlackBerry() ||
      mobileDevice.iOS() ||
      mobileDevice.Opera() ||
      mobileDevice.Windows()
    );
  },
};

/* if the device is not ios hide the download button */
if (mobileDevice.iOS()) {
  $(".mobile-back-to-top").css("visibility", "hidden");
}
