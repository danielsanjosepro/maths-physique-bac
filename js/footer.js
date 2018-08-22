$(function(){
    /*
    padding: 7px;
    margin-top: 30px;
    background-color: #004f98;
    color: white;
     */
    $("footer").css("padding", "7px");
    $("footer").css("marginTop", "30px");
    $("footer").css("backgroundColor", "#004f98");
    $("footer").css("color", "white");


    $("footer").attr("class","page-footer");

    // $("footer").load("html/footer.html");
    let h5Element = $("<h5> </h5>").html("<a> About me </a>");
    $("footer").append(h5Element);

    $("footer h5").attr("class", "text-center font-weight-light");

    $("footer h5 a").attr("id", "aboutMeLink");
    $("footer h5 a").attr("data-toggle","modal");
    $("footer h5 a").attr("data-target","#aboutMeModal");
    
    let buttonEmail = $("<button> </button>").html('<i id="iconEmail" class="far fa-envelope"></i>');
    $("footer h5").append(buttonEmail);

    $("footer h5 button").attr("class","btn btn-outline-light");
    $("footer h5 button").attr("onclick","changeIconEmail()");
    $("footer h5 button").attr("data-toggle","popover");
    $("footer h5 button").attr("data-placement","top");
    $("footer h5 button").attr("data-content","Email: website.daniels@gmail.com");
    $("footer h5 button").attr("data-container","body");
    $("footer h5 button").attr("type","button");
})