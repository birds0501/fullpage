$(function () {
  //fullpage 초기화
  $("#fullpage").fullpage({
    //1.앵커 설정
    anchors: ["sec1", "sec2", "sec3", "sec4", "secondPage"],
    // navigation: true, //인디케이터 우리 거 붙일거임

    //2.menu적용(인디케이터 커스텀)
    menu: "#menu", //html과 script에 붙여놓고 css로 변경해주기
  });
});
