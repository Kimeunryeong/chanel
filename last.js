document.addEventListener("DOMContentLoaded", function () {
  const hiddenTexts = document.getElementsByClassName("hidden-text");
  const hiddenButtons = document.getElementsByClassName("hidden-button");

  // hiddenButtons에 대해 이벤트 리스너 등록
  for (let i = 0; i < hiddenButtons.length; i++) {
    hiddenButtons[i].addEventListener("click", function () {
      // 현재 클릭된 hiddenButton의 index를 통해 해당 hiddenText 찾기
      const currentHiddenText = hiddenTexts[i];

      // hiddenText 요소의 display 속성을 토글
      currentHiddenText.style.display =
        currentHiddenText.style.display === "none" ? "block" : "none";

      // 버튼에 clicked 클래스 토글
      hiddenButtons[i].classList.toggle("clicked");
    });
  }
});
// 네브바 숨겼다 나타내기
let navBar = document.getElementById("nav-bar");

window.addEventListener("scroll", function () {
  let scrollPosition = window.scrollY;

  if (scrollPosition >= 570) {
    navBar.style.top = "0"; // 네브바를 보이도록 함
  } else {
    navBar.style.top = "-60px"; // 네브바를 숨김
  }
});

// 이미지 로고 1초뒤에
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.getElementById("chanelLogo").style.opacity = "1";
  }, 1000);
// 텍스트 3초뒤에
  setTimeout(function () {
    document.getElementById("mainTitle").style.opacity = "1";
  }, 3000);
});
