$("li").on("click", function() {
    alert("Coming soon!");
  });
$('div').hover( function() {
    $(this).toggleClass('show-description');
});
function submit(){
alert("We'll keep you updated, thank you!");
}
var myVar = setInterval(myTimer, 1000);
function myTimer() {
    var d = new Date();
    var t = d.toLocaleTimeString();
    $("#demo").html(d, t);
}
