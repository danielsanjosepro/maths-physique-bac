function changeCards(id) {
    if($(id).attr("id") != $(".activeCards").attr("id")){
        $(".activeCards").fadeOut(700,function () {
            $(".activePage").addClass("btnPage");
            $(".activePage").removeClass("activePage");
            $(".activeCards").removeClass("activeCards");
            let number = $(id).attr("id").substr(-1);
            $(id).addClass("activeCards");
            $("#pageButton"+number).addClass("activePage");
            $("#pageButton"+number).removeClass("btnPage");
            $(id).fadeIn(700);
            $("html, body").animate({
                scrollTop: 0
            }, 400);
        });
    }
}

function previous_or_next(option){
    let numberAsString = $(".activePage").attr("id").substr(-1);
    let number = parseInt(numberAsString);
    if(option == "previous"){
        if(number > 1){
            $(".activeCards").fadeOut(700,function () {
                $(".activePage").addClass("btnPage");
                $(".activePage").removeClass("activePage");
                $(".activeCards").removeClass("activeCards");
                $("#cardPage"+(number-1).toString()).addClass("activeCards");
                $("#pageButton"+(number-1).toString()).addClass("activePage");
                $("#pageButton"+(number-1).toString()).removeClass("btnPage");
                $("#cardPage"+(number-1).toString()).fadeIn(700);
                $("html, body").animate({
                    scrollTop: 0
                }, 400);
            })
        }
    }else if(option == "next"){
        let lastNumberAsString = $("#mathCards").children().last().attr("id").substr(-1);
        let lastNumber = parseInt(lastNumberAsString);
        if (number < lastNumber){
            $(".activeCards").fadeOut(700,function () {
                $(".activePage").addClass("btnPage");
                $(".activePage").removeClass("activePage");
                $(".activeCards").removeClass("activeCards");
                $("#cardPage"+(number+1).toString()).addClass("activeCards");
                $("#pageButton"+(number+1).toString()).addClass("activePage");
                $("#pageButton"+(number+1).toString()).removeClass("btnPage");
                $("#cardPage"+(number+1).toString()).fadeIn(700);
                $("html, body").animate({
                    scrollTop: 0
                }, 400);
            })
        }
    }
}