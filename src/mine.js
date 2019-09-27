import 'style.css';
import 'all.min.css';
import 'bootstrap.min.css';
import 'home.css';


$(".sideicon").click(function() {
    var width = $(".sidebar").css("width");
    if (width == "300px") {
        $(".sidebar").animate({ width: "0" }, 2000);
    } else {
        $(".sidebar").animate({ width: "300px" }, 2000);
    }
})

/*var state=$("#inputGroupSelect03").val();
var setstate = localStorage.setItem("state",state);
var getstate = localStorage.getItem("state");

    if( = "2"){
        $("#privacyicon").html('<i class="fas fa-lock"></i>');
    }
    else{
               
        $("#privacyicon").html('<i class="fas fa-lock-open"></i>');       }      

*/
$(".editicon").click(function() {
    $(".popbox").css({ display: "block" });
})



let alllis = $(".change ul li");
alllis.eq(0).css("background", "#F1A8AA");
alllis.eq(1).css("background", "#F2F0CE");
alllis.eq(2).css("background", "##F0C7BB");
alllis.eq(3).css("background", "#F1DCD7");
alllis.eq(4).css("background", "#949494");
alllis.eq(5).css("background", "#D6C9B5");
alllis.eq(6).css("background", "#F5F4E1");
alllis.eq(7).css("background", "#D9B6A3");
alllis.eq(8).css("background", "#F2D5CE");



$(".change ul li").click(function() {
    var licolor = $(this).css("background-color");
    $(".ourhome").css("background-color", licolor);
})

var rename = document.getElementById("renameinp");
var savebtn = document.getElementById("savebtn");


savebtn.addEventListener("click", function() {
    localStorage.setItem("userinput", JSON.stringify(rename.value));
    $("#boardname").text(rename.value);


})






$(".closebtn").click(function() {
    $(".popbox").slideUp(1000);
})

/*var notetit = document.getElementById("noteinput")
if (notetit.value == "") {
    alert(notetit.value)
    localStorage.setItem("notetitle", JSON.stringify(notetit));
}*/

var notearr;

if (localStorage.getItem("notetitle1") == null) {
    notearr = [];
} else {
    notearr = localStorage.getItem("notearr")
}

document.addEventListener("keydown", function enter(ev) {
    var notetitle1 = document.getElementById("noteinput").value;
    notearr.push(notetitle1);
    localStorage.setItem("notearr", JSON.stringify(notetitle1.value));

})


var textarea2 = document.getElementById("textarea");
document.addEventListener("keydown", function(e) {
    localStorage.setItem("textarea", JSON.stringify(textarea2.value));
})

$(".icon1").click(function() {

})


let uliss = $(".content ul li");
uliss.eq(0).css("background", "#fffaea");
uliss.eq(1).css("background", "#ffffa5");
uliss.eq(2).css("background", "#f1bbbb");
uliss.eq(3).css("background", "#f9c2a2");
uliss.eq(4).css("background", "#d88068");
uliss.eq(5).css("background", "#d9b4df");
uliss.eq(6).css("background", "#b2fff4");
uliss.eq(7).css("background", "#c8d9bf");
uliss.eq(8).css("background", "#f0a");

$(".content ul li").click(function() {

    var changebg = $(this).css("background-color");
    $("#note").css("background-color", changebg);
    $("#textarea").css("background-color", changebg);
    $("#noteinput").css("background-color", changebg);
})

$(".icon1").click(function() {
    $(".bgd").toggle();
})



$(".boldtext").click(function() {
    $("#textarea").addClass("bold");
})

$(".italictext").click(function() {
    $("#textarea").addClass("italic");
})
$(".under").click(function() {
    $("#textarea").addClass("underline");
})



$("#fontsize").change(function() {
    $('#textarea').css("font-size", $(this).val() + "px");
});

/*$('#fontsize>option:eq(1)').change(function() {
    alert("sdfvg")
    var r1 = $('#fontsize>option:eq(1)').val()
    $("#textarea").css("font-size", r1)
})
$(".option3").click(function() {
    $("#textarea").css("font-size", "25px");
})*/


$(".brush").click(function() {
    /*$(".shown").css("display","block");*/
    $(".shown").toggle();

})

let lisnum = $(".shown ul li");
lisnum.eq(0).css("background", "#0D0D0D");
lisnum.eq(1).css("background", "#F26680");
lisnum.eq(2).css("background", "#41AEF2");
lisnum.eq(3).css("background", "#5F8C4A");

$(".shown ul li").click(function() {

    var ulcolor = $(this).css("background-color");
    $("textarea").css("color", ulcolor);
})

$(".closecir").click(function() {

    $("#note").css("display", "none");
})

$("#delicon").click(function() {
    var r = confirm('are you sure you want to delete this note ?')
    if (r == true) {
        $("#note").remove()
    }
})



$("#addnote").click(function() {
    $("#note").clone().appendTo(".addnoty");
})