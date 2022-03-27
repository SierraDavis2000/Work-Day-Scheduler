// header time
{
    var day = moment().format("llll");
    $("#currentDay").append(day);

}

//view the timeblocks for that day
var momentTime = moment().startOf("day").add(7, "hour");
var hour = moment().format("H");

for (var i = 8; i < 20; i++) {
    var timeSlot = momentTime.add(1, "hour").format("HH:mm A");
    var currentState;

    // timeblock is color coded to indicate whether it is in the past, present, or future
    if (hour == i) {
        currentState = 'present';
    } else if (hour > i) {
        currentState = 'future';
    } else if (hour < i) {
        currentState = 'past';
    }


};

$(".saveBtn").on("click", function () {
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, value);
});


for (var i = 8; i < 20; i++) {
    $(`.hour-${i}`).val(localStorage.getItem(`hour-${i}`));
}

