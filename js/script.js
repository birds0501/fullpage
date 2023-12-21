$(function () {
  //대상을 변수에 저장
  const $btnTop = $(".btn-top");
  const $header = $("#header");

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

    //스크롤바 생성되게
    scrollBar: true,

    //큰 영역으로 이동할 때 상단에 철컥 붙게
    bigSectionsDestination: top,

    //영역의 로딩이 되고 나서
    afterLoad: function (anchorLink, index) {
      var loadedSection = $(this);
      console.log("로딩된 후:" + anchorLink, index, loadedSection);

      if (anchorLink === "sec4") {
        $btnTop.fadeIn();
      }

      //두번째 영역에서는 자동 스크롤 취소
      if (anchorLink === "sec2") {
        $.fn.fullpage.setAutoScrolling(false);
      } else {
        $.fn.fullpage.setAutoScrolling(true);
      }
    },

    //영역에서 떠날 때
    onLeave: function (index, nextIndex, direction) {
      var leavingSection = $(this);
      console.log(
        "영역에서 떠날 때:" + index,
        nextIndex,
        direction,
        leavingSection
      );

      if (index === 4 && direction === "up") {
        $btnTop.fadeOut();
      }

      if (direction === "down") {
        $header.addClass("hide");
      } else {
        $header.removeClass("hide");
      }
    },
  });

  //처음에는 숨기고

  $btnTop.hide();

  //go-top 버튼 클릭했을 때
  $btnTop.on("click", function (e) {
    e.preventDefault();

    //fullpage 메서드 : 원하는 영역 이동
    $.fn.fullpage.moveTo(1);
  });

  $(".btn-silent").on("click", function () {
    //원하는 곳으로 조용히(즉시) 이동
    $.fn.fullpage.silentMoveTo(1);
  });

  $(".btn-up").on("click", function () {
    //btn-up 버튼 클릭했을때 한 영역 위로 이동
    $.fn.fullpage.moveSectionUp();
  });

  $(".btn-down").on("click", function () {
    //btn-down 버튼 클릭했을때 한 영역 아래로 이동
    $.fn.fullpage.moveSectionDown();
  });
});
