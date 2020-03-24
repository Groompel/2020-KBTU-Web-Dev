// $(document).on("load", function(){
//     const loading = $("#loading").css("display", "block");
//     const pics = $("#pictures").css("display", "none");
// });

// $(document).ready(function () { 
//     const loading = $("#loading").css("display", "none");
//     const pics = $("#pictures").css("display", "block");
// });

$("#pictures").on("load", () => {
    const loading = $("#loading").css("display", "block");
    const pics = $("#pictures").css("display", "none");
})

$("#pictures").ready(function () { 
    const loading = $("#loading").css("display", "none");
    const pics = $("#pictures").css("display", "block");
});