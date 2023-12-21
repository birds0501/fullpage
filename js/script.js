$(function () {
  //fullpage 초기화(Initialization)
  $("#fullpage").fullpage({
    //1.앵커 설정
    anchors: ["sec1", "sec2", "sec3", "sec4", "secondPage"],
    // navigation: true, //인디케이터 우리 거 붙일거임

    //2.menu적용(인디케이터 커스텀)
    menu: "#myMenu", //html과 script에 붙여놓고 css로 변경해주기
    //3.필요 옵션 적용
    //스크롤 속도 : 기본값 700
    scrollingSpeed: 1400,

    //고정시킬 요소(헤더 보이게 하기)
    fixedElements: "#header",

    //영역 컨텐츠의 세로 정렬
    verticalCentered: false,
  });
});
