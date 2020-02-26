var currentHour = parseInt(moment().format("HH"))
var date =moment().format('LLLL');
$("#currentDay").text(date)
setInterval(function(){
    date =moment().format('LLLL');
    $("#currentDay").text(date) 
}, 60000);
for (let i = 9; i < 18; i++) {
    if(currentHour === i){
        $("#hour"+i).addClass("present")
    }
    else if(currentHour < i){
        $("#hour"+i).addClass("future")
    }
    var local = localStorage.getItem("hour"+i)

    if(local !== null){
        $("#hour"+i).val(local)
    }
}


$(".saveBtn").click(function(){
    var value = $(this).val()
    var text = $("#"+value).val()
    console.log(text)
    localStorage.setItem(value, text)
})