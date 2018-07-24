$(document).ready(function(){
    console.log("listo"); 
    getRazas();
    // $(".card").on("click",function(){
    //     var id = $(this).data("id");
    //     getPerro(id);
    // });
    $("#pag-" + $("#page").val()).addClass("active");
    // $("ul.pagination li").on("click", function(){
    //     $("ul.pagination li").removeClass("active");
    //     $(this).addClass("active");
    // })

});
function getPerro(id){
    console.log("Hola:" +id );
}
function getRazas(){
    $.ajax({
        url:"/razas",
        method:"get",
        contentType:"application/json",
        success:function(response){
            $.each(response,function(index, value){
                $("#razas").append("<option value='" + value + "'>"+value+"</option>");
            });
            console.log(response);
        },
        error:function(){
            alert("error");
        }
    });
}
$(document).ready(function(){
    console.log("listo"); 
    getTamano();
    // $(".card").on("click",function(){
    //     var id = $(this).data("id");
    //     getPerro(id);
    // });
    $("#pag-" + $("#page").val()).addClass("active");
    // $("ul.pagination li").on("click", function(){
    //     $("ul.pagination li").removeClass("active");
    //     $(this).addClass("active");
    // })

});
function getPerro(id){
    console.log("Hola:" +id );
}
function getTamano(){
    $.ajax({
        url:"/tamano",
        method:"get",
        contentType:"application/json",
        success:function(response){
            $.each(response,function(index, value){
                $("#tamano").append("<option value='" + value + "'>"+value+"</option>");
            });
            console.log(response);
        },
        error:function(){
            alert("error");
        }
    });
}