$("h1").addClass("big-title");

$("button").eq(1).html("<em>Hi</em>");

$("a").attr("href", "http://wwww.yahoo.com")

//Using DOM to change the color when click on button.
// for (var i = 0; i<5 ; i++){
//     document.querySelectorAll("button")[i].addEventListener("click", function(){
//         document.querySelector("h1").style.color="purple";
//     });
// }

//Click on the button and the h1 color change 
// $("button").click(function(){
//     $("h1").css("color","purple");
// })

//Show the typed word on console
// $("input").keypress(function(event){
//     console.log(event.key);
// })

//change the h1, into the text we type in
// $("input").keypress(function(event){
//     $("h1").text(event.key);
// })

//When mouse over the h1, it change the color 
// $("h1").on("mouseover" ,function(){
//     $("h1").css("color", "black");
// })

//Adding a button before the h1 (.before, .after)
//$("h1").before("<button>New</button>");
//.prepend[add inside the h1, before the h1], .append[add inside the h1, but after the h1]

//adding animation
$("button").on("click", function(){
    $("h1").animate({ right: "50%",
    opacity: 0.5,
    height: "200px"
}, 1000);
})