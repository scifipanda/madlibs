let currentWord = $("span");
let i = 0;
let wordType = $('span').eq(i).attr('class');


$("#word-input").attr("Placeholder", wordType);
$('#word-input').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        madlib(); 
    }
});
$("#enter-button").click(()=> {madlib();});

function madlib() {
    $("#input-container").removeClass("shake-animation");
    if ($("#word-input").val() === "") {
        $("body").css("background","red");
        $("#input-container").addClass("shake-animation");
        
    } else {
        currentWord[i].innerHTML = $("#word-input").val()
        i++;
        wordType = $('span').eq(i).attr('class');
        $("#word-input").attr("Placeholder", wordType);
        $("#word-input").val("");
        if(i===currentWord.length) {
            $("#madlib-container").removeClass("hide");
            $("#madlib-container").addClass("spin-in-animation");
            $("#input-container").addClass("hide");
        }
        $("body").css("background","rgb(16, 133, 16");
    }
}