$(document).ready(function () {
  $(".loader").fadeOut(2000, function () {
    $("#loading").fadeOut(1000, function () {
      $("body").css("overflow", "auto");
      $("#loading").remove();
    });
  });
  $(document).ready(function () {});
});

let offset = $(".offer").offset();
let offerTop = offset.top;
$(window).scroll(function () {
  let windowScroll = $(window).scrollTop();
  if (windowScroll > 1) {
    $(".navbar").css(
      "cssText",
      `position: fixed;
  top: 0px !important;
  left: 0 !important ;
  z-index:999999;
  width: 100%;`
    );
  } else {
    $(".navbar").css(
      "cssText",
      ` position: fixed;
  top:80px !important;
  left: 0 !important ;
  z-index:999999;
  width: 100%`
    );
  }
  if (windowScroll < offerTop) {
    $("#scrollIcons").fadeOut(500);
  } else {
    $("#scrollIcons").fadeIn(500);
  }
});
$("#scrollIcons").click(function () {
  scrollTopAnimated();
});
function scrollTopAnimated() {
  $("html, body").animate({ scrollTop: "0" }, 3000);
}
$("a").click(function (e) {
  let linkHred = e.target.getAttribute("href");
  let sectionOffSet = $(linkHred).offset().top;
  $("html, body").animate({ scrollTop: sectionOffSet - 50 }, 2000);
  console.log(sectionOffSet, linkHred);
});
// ===============
window.onload = function () {
  countDownToTime("10 october 2024 9:56:00");
};

function countDownToTime(countTo) {
  let futureDate = new Date(countTo);
  futureDate = futureDate.getTime() / 1000;

  let now = new Date();
  now = now.getTime() / 1000;

  timeDifference = futureDate - now;

  let days = Math.floor(timeDifference / (24 * 60 * 60));
  let hours = Math.floor((timeDifference - days * (24 * 60 * 60)) / 3600);
  let mins = Math.floor(
    (timeDifference - days * (24 * 60 * 60) - hours * 3600) / 60
  );
  let secs = Math.floor(
    timeDifference - days * (24 * 60 * 60) - hours * 3600 - mins * 60
  );

  $(".days").html(`${days} D`);
  $(".hours").html(`${hours} h`);
  $(".minutes").html(`${mins} m`);
  $(".seconds").html(`${secs} s`);

  setInterval(function () {
    countDownToTime(countTo);
  }, 1000);
}

//================================================================
