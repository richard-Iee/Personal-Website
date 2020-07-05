function closeTopBar() {
  document.getElementById("t_sidebar").style.top = "-20vw";
  document.getElementById("t_sidebar").style.opacity = 0;
}

function openSideBar() {
  document.getElementById("t_sidebar").style.top = "0%";
  document.getElementById("t_sidebar").style.opacity = 1;
}

function m_closeSideBar() {
  document.getElementById("m_topBar").style.top = "-135vw";
  document.getElementById("m_topBar").style.opacity = 0;
}

function m_openSideBar() {
  document.getElementById("m_topBar").style.top = "0%";
  document.getElementById("m_topBar").style.opacity = 1;
}

var isMobile = {
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
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    );
  },
};
/* if the device is not ios hide the download button */
if (isMobile.iOS()) {
  $(".m_FixedBarBackToTop").css("visibility", "hidden");
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

$(document).ready(function () {
  $(window).on("scroll", function (e) {
    var top = $(window).scrollTop() + $(window).height(),
      isVisible = top > $("#Javascript").offset().top;

    $("#Javascript").toggleClass("animate", isVisible);
  });

  $(window).on("scroll", function (e) {
    var top = $(window).scrollTop() + $(window).height(),
      isVisible = top > $("#Python").offset().top;

    $("#Python").toggleClass("animate", isVisible);
  });

  $(window).on("scroll", function (e) {
    var top = $(window).scrollTop() + $(window).height(),
      isVisible = top > $("#Typescript").offset().top;

    $("#Typescript").toggleClass("animate", isVisible);
  });

  $(window).on("scroll", function (e) {
    var top = $(window).scrollTop() + $(window).height(),
      isVisible = top > $("#React").offset().top;

    $("#React").toggleClass("animate", isVisible);
  });

  $(window).on("scroll", function (e) {
    var top = $(window).scrollTop() + $(window).height(),
      isVisible = top > $("#Adobe").offset().top;

    $("#Adobe").toggleClass("animate", isVisible);
  });

  $(window).on("scroll", function (e) {
    var top = $(window).scrollTop() + $(window).height(),
      isVisible = top > $("#AWS").offset().top;

    $("#AWS").toggleClass("animate", isVisible);
  });

  $(window).on("scroll", function (e) {
    var top = $(window).scrollTop() + $(window).height(),
      isVisible = top > $("#t_Javascript").offset().top;

    $("#t_Javascript").toggleClass("animate", isVisible);
  });

  $(window).on("scroll", function (e) {
    var top = $(window).scrollTop() + $(window).height(),
      isVisible = top > $("#t_Python").offset().top;

    $("#t_Python").toggleClass("animate", isVisible);
  });

  $(window).on("scroll", function (e) {
    var top = $(window).scrollTop() + $(window).height(),
      isVisible = top > $("#t_Typescript").offset().top;

    $("#t_Typescript").toggleClass("animate", isVisible);
  });

  $(window).on("scroll", function (e) {
    var top = $(window).scrollTop() + $(window).height(),
      isVisible = top > $("#t_React").offset().top;

    $("#t_React").toggleClass("animate", isVisible);
  });

  $(window).on("scroll", function (e) {
    var top = $(window).scrollTop() + $(window).height(),
      isVisible = top > $("#t_Adobe").offset().top;

    $("#t_Adobe").toggleClass("animate", isVisible);
  });

  $(window).on("scroll", function (e) {
    var top = $(window).scrollTop() + $(window).height(),
      isVisible = top > $("#t_AWS").offset().top;

    $("#t_AWS").toggleClass("animate", isVisible);
  });

  $(window).on("scroll", function (e) {
    var top = $(window).scrollTop() + $(window).height(),
      isVisible = top > $("#m_Javascript").offset().top;

    $("#m_Javascript").toggleClass("animate", isVisible);
  });

  $(window).on("scroll", function (e) {
    var top = $(window).scrollTop() + $(window).height(),
      isVisible = top > $("#m_Python").offset().top;

    $("#m_Python").toggleClass("animate", isVisible);
  });

  $(window).on("scroll", function (e) {
    var top = $(window).scrollTop() + $(window).height(),
      isVisible = top > $("#m_Typescript").offset().top;

    $("#m_Typescript").toggleClass("animate", isVisible);
  });

  $(window).on("scroll", function (e) {
    var top = $(window).scrollTop() + $(window).height(),
      isVisible = top > $("#m_React").offset().top;

    $("#m_React").toggleClass("animate", isVisible);
  });

  $(window).on("scroll", function (e) {
    var top = $(window).scrollTop() + $(window).height(),
      isVisible = top > $("#m_Adobe").offset().top;

    $("#m_Adobe").toggleClass("animate", isVisible);
  });

  $(window).on("scroll", function (e) {
    var top = $(window).scrollTop() + $(window).height(),
      isVisible = top > $("#m_AWS").offset().top;

    $("#m_AWS").toggleClass("animate", isVisible);
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > $(document).height() * 0.04) {
      $("#backToTop").fadeIn();
    } else {
      $("#backToTop").fadeOut();
    }
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > $(document).height() * 0.05) {
      $("#t_flexButtons").css("right", "0vw");
    } else {
      $("#t_flexButtons").css("right", "-5vw");
    }
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > $(document).height() * 0.02) {
      $("#m_BackToTopAndMenu").css("right", "0vw");
    } else {
      $("#m_BackToTopAndMenu").css("right", "-15vw");
    }
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > $(document).height() * 0.05) {
      $("#t_backToTop").fadeIn();
    } else {
      $("#t_backToTop").fadeOut();
    }
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > $(document).height() * 0.02) {
      $("#m_backToTop").fadeIn();
    } else {
      $("#m_backToTop").fadeOut();
    }
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > $(document).height() * 0.02) {
      $("#m_hideMenu").fadeIn();
    } else {
      $("#m_hideMenu").fadeOut();
    }
  });

  $(window).scroll(function () {
    if (
      $(this).scrollTop() < $(document).height() * 0.87 &&
      $(this).scrollTop() > $(document).height() * 0.05
    ) {
      $("#toBottom").fadeIn();
    } else {
      $("#toBottom").fadeOut();
    }
  });

  $(window).scroll(function () {
    if (
      $(this).scrollTop() < $(document).height() * 0.87 &&
      $(this).scrollTop() > $(document).height() * 0.05
    ) {
      $("#t_toBottom").fadeIn();
    } else {
      $("#t_toBottom").fadeOut();
    }
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() < $(document).height() * 0.04) {
      $("#line1").fadeIn(200);
      $("#button1").css({ "background-color": "#2f3a4e" });
    } else {
      $("#line1").fadeOut(200);
      $("#button1").css({ "background-color": "#2a3344", transition: "0.2s" });
    }
  });

  $(window).scroll(function () {
    if (
      $(this).scrollTop() > $(document).height() * 0.04 &&
      $(this).scrollTop() < $(document).height() * 0.24
    ) {
      $("#line2").fadeIn(200);
      $("#button2").css({ "background-color": "#2f3a4e" });
    } else {
      $("#line2").fadeOut(200);
      $("#button2").css({ "background-color": "#2a3344", transition: "0.2s" });
    }
  });

  $(window).scroll(function () {
    if (
      $(this).scrollTop() > $(document).height() * 0.24 &&
      $(this).scrollTop() < $(document).height() * 0.5
    ) {
      $("#line3").fadeIn(200);
      $("#button3").css({ "background-color": "#2f3a4e" });
    } else {
      $("#line3").fadeOut(200);
      $("#button3").css({ "background-color": "#2a3344", transition: "0.2s" });
    }
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > $(document).height() * 0.5) {
      $("#line4").fadeIn(200);
      $("#button4").css({ "background-color": "#2f3a4e" });
    } else {
      $("#line4").fadeOut(200);
      $("#button4").css({ "background-color": "#2a3344", transition: "0.2s" });
    }
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > $(document).height() * 0.05) {
      $("#t_scrollMenu").fadeIn();
    } else {
      $("#t_scrollMenu").fadeOut();
    }
  });

  $("#backToTop").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 100);
  });

  $("#t_backToTop").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 100);
  });

  $("#m_backToTop").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 100);
  });

  $("#toBottom").click(function () {
    $("html, body").animate({ scrollTop: $(document).height() }, 100);
  });
  $("#t_toBottom").click(function () {
    $("html, body").animate({ scrollTop: $(document).height() }, 100);
  });

  $("#catchUp").click(function () {
    $("html, body").animate({ scrollTop: $(document).height() }, 100);
  });

  $("#t_catchUp").click(function () {
    $("html, body").animate({ scrollTop: $(document).height() }, 100);
  });
});
