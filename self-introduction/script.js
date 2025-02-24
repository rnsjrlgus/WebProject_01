const about = document.querySelector(".about");
const sections = about.querySelectorAll("div");
const quickIconContainer = document.querySelector(".quick-icons");
const icons = quickIconContainer.querySelectorAll("li");

const homeIcon = icons[0].firstChild;
homeIcon.addEventListener("click", () => {
  icons.forEach((icon) => icon.classList.remove("icon-active")); // 클릭 시 모든 아이콘에서 icon-active 클래스를 제거거
});

const options = {
  root : null, // default : viewport .. 부모컨테이너를 지정해줄 수 있다.
  rootMargin : `0px`, // 마진을 주면, 내가 보는 화면보다 기준 영역이 그 만큼 더 늘어나게 된다.
  threshold : 0.5, // 얼마만큼 보여져야 콜백함수를 호출할지 결정 (0~1)
};

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) { // 요소가 화면에 보일 때
      switch (entry.target.id) {  // 각 세션 ID 에 따라
        case "home" : 
          icons.forEach((icon) => icon.classList.remove("icon-active")); // 모든 아이콘의 active 상태를 제거하고
          icons[0].classList.add("icon-active"); // 해당하는 아이콘에 active 상태 추가
          break; // 다른 섹션들도 같은 패턴으로 처리
        case "about_games" :
          icons.forEach((icon) => icon.classList.remove("icon-active"));
          icons[1].classList.add("icon-active");
          break;
        case "about_major" :
          icons.forEach((icon) => icon.classList.remove("icon-active"));
          icons[2].classList.add("icon-active");
          break;
        case "about_sports" :
          icons.forEach((icon) => icon.classList.remove("icon-active"));
          icons[3].classList.add("icon-active");
          break;
        case "about_singing" :
          icons.forEach((icon) => icon.classList.remove("icon-active"));
          icons[4].classList.add("icon-active");
          break;
        default :
          icons.forEach((icon) => icon.classList.remove("icon-active"));
          break;
      }
    } else {
      switch (entry.target.id) {
        case "home" :
          icons.forEach((icon) => icon.classList.remove("icon-active"));
          break;
      }
    }
  });
};

const observer = new IntersectionObserver(callback, options);
sections.forEach((section) => observer.observe(section)); // section 들을 관찰자가 관찰하도록 명령

// aside On and Off
// at footer
const footerOptions = {
  threshold : 0.5,
};

const handleFooter = (entries) => {
  if (entries[0].isIntersecting) { // footer 가 보이면
    quickIconContainer.classList.add("show-off"); // icon-container 숨김
  } else {
    quickIconContainer.classList.remove("show-off"); // icon-container 표시
  }
};

const footerObserver = new IntersectionObserver(handleFooter, footerOptions);
const footer = document.querySelector("footer");
footerObserver.observe(footer);

// at header
const home = document.querySelector(".home");
const homeOptions = {
  threshold : 0.8,
};

const handleHome = (entries) => {
  if (entries[0].isIntersecting) { // 헤더가 80% 이상 보이면
    quickIconContainer.classList.add("show-off"); // icon-container 숨김
  } else {
    quickIconContainer.classList.remove("show-off"); // icon-container 표시
  }
};

const headerObserver = new IntersectionObserver(handleHome, homeOptions);
headerObserver.observe(home);

document.addEventListener('DOMContentLoaded', function() {
  const sections = ['home', 'about_games', 'about_major', 'about_singing'];
  const quickIcons = document.querySelectorAll('.quick-icons li');

  // icon click event 생성
  quickIcons.forEach(icon => {
    icon.addEventListener('click', function() {
      quickIcons.forEach(i => i.classList.remove('icon-active')); // 모든 icon 의 active 상태 제거
      this.classList.add('icon-active'); // 클릭된 icon에 active 상태 추가
    });
  });

  // 스크롤 이벤트 핸들러
  window.addEventListener('scroll', function() {
    // 현재 스크롤 위치
    const sections = ['home', 'about_games', 'about_major', 'about_sports', 'about_singing'];
    const currentScroll = window.pageYOffset;

    // Check each section
    sections.forEach((sectionId, index) => {
      const section = document.getElementById(sectionId);
      if (section) {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        const offset = 200; // Offset for earlier activation

        // If current scroll position is within section bounds
        if (currentScroll >= sectionTop - offset && currentScroll < sectionBottom) {
          // Remove active class from all icons
          quickIcons.forEach(icon => icon.classList.remove('icon-active'));
          // Add active class to corresponding icon
          if (quickIcons[index]) {
            quickIcons[index].classList.add('icon-active');
          }
        }
      }
    });
    // Handle icon container visibility
    const home = document.querySelector('.home');
    const homeBottom = home.offsetTop + home.offsetHeight;
    const footerTop = footer.offsetTop;

    if (currentScroll <= homeBottom || currentScroll >= footerTop - 100) {
      quickIconContainer.classList.add('show-off');
    } else {
      quickIconContainer.classList.remove('show-off');
    }
  });
});