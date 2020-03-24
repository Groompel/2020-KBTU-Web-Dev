let pgCtgNmInitialOffset;

function assignOffsetTop() {

  pgCtgNmInitialOffset = $("#page-categorie-name").offset().top;
}

// function imageAnimate(productId, productUrl) {
//   const loadingImgPath = "assets/images/loading.gif"
//   const img = $("#img-"+productId);
//   const loadingImg = $("#img-loading-"+productId);


//   const imgLoad = imagesLoaded(img);

//   imgLoad.on("always", (instance) => {

//     console.log("progress!");

//     // if(loadingImg.css("visibility") === "hidden"){
//     //   console.log("dine");
//     //   img.css("visibility", "hidden");
//     //   loadingImg.css("visibility", "visible");
//     // }

//     // img.ready(() => {
//     //   loadingImg.css("visibility", "hidden");
//     //   img.css("visibility", "visible");
//     //   return;
//     // });
//   });



// }

// Scrolling funcitons
$(window).scroll(function (e) {
  const categoriesContainer = $(".categories-container");
  const categoriesContainerOffsetTop = 50;
  const pageCategorieName = $("#page-categorie-name");
  const pageTitle = pageCategorieName.parent();
  const offsetFromTheTop = 20;
  var isPositionFixed = (categoriesContainer.css('position') == 'fixed');


  //Change color of title
  if($(this).scrollTop() > pageCategorieName.offset().top - pageCategorieName.css("height").substring(0,2) - 4) {
    pageCategorieName.css({
      "color": "white",
      "font-size": "1.6rem"
  });

  }
  else {
    pageCategorieName.css({
      "color": "black",
      "font-size": "2rem"
  })
  }

  // Change position of title
  if($(this).scrollTop() > pageCategorieName.offset().top - offsetFromTheTop) {
    const pageTitleHeight = pageTitle.css("height").substring(0,2);
    pageTitle.css("height", pageTitleHeight);
    pageCategorieName.addClass("page-categorie-name-fixed");
    pageCategorieName.css({
      "margin-left": `-${pageCategorieName.css("width").substring(0,3) / 2 - 25 }px`,
    });
  }
  if($(this).scrollTop() < pgCtgNmInitialOffset - offsetFromTheTop) {
    pageCategorieName.removeClass("page-categorie-name-fixed");
    pageCategorieName.css({
      "margin-left": `auto`,
    });
  }


  if ($(this).scrollTop() > 40 + categoriesContainerOffsetTop && !isPositionFixed) {
    categoriesContainer.css({ 'position': 'fixed', 'top': categoriesContainerOffsetTop + "px" });
  }
  if ($(this).scrollTop() < 40 + categoriesContainerOffsetTop && isPositionFixed) {
    categoriesContainer.css({ 'position': 'absolute', 'top': '0px' });
  }
});

// Zoom
$(document).ready(() => {


  $(".img-magnifier").mousemove((e) => {
    const img = $(e.target).prev().children();
    const imgContainer = $(e.target).prev();
    const width = imgContainer.css("width").substring(0, 3);
    const height = imgContainer.css("height").substring(0, 3);


    const imgCenter = {
      x: width / 2 + 135,
      y: height / 2 + 135,
    }

    img.css("width", "200%");

    imgContainer.css("border", "1px solid gray");

    img.css("position", "absolute");
    const left = e.offsetX;
    const top = e.offsetY;

    img.css("left", `-${setPos(e.offsetX, imgCenter.x)}px`);
    img.css("top", `-${setPos(e.offsetY, imgCenter.y)}px`);
  });

  function setPos(pos, maxPos) {
    return pos < maxPos ? pos : maxPos;
  }

  $(".img-magnifier").mouseout((e) => {
    const img = $(e.target).prev().children();

    const imgContainer = $(e.target).prev();

    img.css("width", "100%");

    imgContainer.css("border", "none");
    img.css("transition", "0s ease");
    img.css("position", "relative");

    img.css("top", "0");
    img.css("left", "0");


  });


});


