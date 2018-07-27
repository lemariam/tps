$(document).ready(function(){
    console.log("listo"); 
    getRazas();
    getTamanos();
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
            alert("error trayendo razas");
        }
    });
}

function getTamanos(){
    $.ajax({
        url:"/tamanos",
        method:"get",
        contentType:"application/json",
        success:function(response){
            $.each(response,function(index, value){
                $("#tamanos").append("<option value='" + value + "'>"+value+"</option>");
            });
            console.log(response);
        },
        error:function(){
            alert("error trayendo tamano");
        }
    });
}

$()
function filtrar(){
    var raza = $("#razas").val();
    var tamano = $("#tamanos").val();
    window.location.href = "/perros/raza/" + raza + "/tamano/" + tamano;
}
 function getPerrosFiltrados(){
   var raza = $("#razas").val();
     var tamano = $("#tamanos").val();
     $.ajax({
         url:"/perros/" + raza + "/" + tamano,
         method:"get",
         contentType:"application/json",
         success:function(response){
             $.each(response,function(index, value){
                 $("#tamanos").append("<option value='" + value + "'>"+value+"</option>");
             });
            console.log(response);
         },
         error:function(){
             alert("error");
         }
     });
 }