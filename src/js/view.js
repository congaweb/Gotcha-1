export function viewFunc() {
  let tabBtn = document.querySelectorAll(".viewTab-btnMove");
  let viewTabItems = document.querySelectorAll(".viewTab__tabPanel--item");
  let basicInfo = document.querySelector(".basic-info");
  let contentDetail = document.querySelector(".content-detail");
  let similarContent = document.querySelector(".similar-content");
  let viewTab = document.querySelector(".viewTab");
  let likeBtn = document.querySelectorAll(".comment__like");
  //탭 생성 및 이미지 처리
  tabBtn[0].addEventListener("click", function (event) {
    for (let i = 0; i < viewTabItems.length; i++) {
      viewTabItems[i].classList.remove("is-active");
    }
    basicInfo.classList.add("is-active");
    viewTab.setAttribute("style", "backdrop-filter:none;");
  });
  tabBtn[1].addEventListener("click", function (event) {
    for (let i = 0; i < viewTabItems.length; i++) {
      viewTabItems[i].classList.remove("is-active");
    }
    contentDetail.classList.add("is-active");
    viewTab.setAttribute("style", "backdrop-filter:brightness(30%);");
  });
  tabBtn[2].addEventListener("click", function (event) {
    for (let i = 0; i < viewTabItems.length; i++) {
      viewTabItems[i].classList.remove("is-active");
    }
    similarContent.classList.add("is-active");
    viewTab.setAttribute("style", "backdrop-filter:brightness(30%);");
  });
  //좋아요 버튼 업

  likeBtn.forEach((el) => {
    el.addEventListener("click", function () {
      ++el.innerHTML;
    });
  });
}
