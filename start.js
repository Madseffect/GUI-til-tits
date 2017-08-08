$(document).ready(function () {

    // page is now ready, initialize the calendar...

    $('#calendar').fullCalendar({
        header: {
            left: 'title',
            center: '',
            right: 'today prev,next agendaDay,agendaWeek,month '
        },

        dayClick: function (date, jsEvent, view) {

            $('#calendar').fullCalendar('gotoDate', date);
            $('#calendar').fullCalendar('changeView', 'agendaDay');

        },


        minTime: "07:00:00",
        maxTime: "21:00:00",
        slotLabelFormat: "HH:mm",

        selectable: true,
        selectHelper: true,




        defaultView: 'agendaWeek',
        height: 735,
        firstDay: 1,


        eventClick: function (event, jsEvent, view) {

            $('#modalTitle').html(event.title);
            $('#modalAssignment').html(event.assignment);



        },

        select: function (start, end, jsEvent, view) {
                    var abc = prompt('Enter Title');
                    var allDay = !start.hasTime && !end.hasTime;
                    var newEvent = new Object();
                    newEvent.title = abc;
                    newEvent.start = moment(start).format();
                    newEvent.allDay = false;
                    $('#calendar').fullCalendar('renderEvent', newEvent);

                },



        events: [
            {
                title: 'Development',
                assignment: 'BackEnd',
                start: '2017-08-07 09:00',
                end: '2017-08-04 11:00',

            },
            {
                title: 'GUI',
                assignment: 'BackEnd',
                start: '2017-08-07 11:30',
                end: '2017-08-04 16:00',

            },
            {
                title: 'Development',
                assignment: 'BackEnd',
                start: '2017-08-08 09:00',
                end: '2017-08-03 18:00',

            },
            {
                title: 'GUI',
                assignment: 'BackEnd',
                start: '2017-08-09 09:00',
                end: '2017-08-09 14:00',

            },
            {
                title: 'GUI',
                assignment: 'BackEnd',
                start: '2017-08-09 14:15',
                end: '2017-08-09 18:00',

            },
            {
                title: 'Business',
                assignment: 'BackEnd',
                start: '2017-08-10 09:15',
                end: '2017-08-10 15:00',

            },

        ]

    })
    $('#timeKnap').click(function () {
        var timeRegText= "Time registry for " +$('#select2-team-container').text();
    $('#modalTitle').text(timeRegText);
})
var test= $('#calendar').fullCalendar('clientEvents');
console.log(test);

    

});


$(document).ready(function () {

    $(".teammates").select2({
        placeholder: 'Choose a Label',
    });

});

$(document).ready(function () {
    $(".assignment").select2({
        placeholder: 'Choose a Label',
    });
});


$(document).ready(function () {

    $(".projects").select2();

});

$(document).ready(function () {

    $(".label").select2({
        placeholder: 'Choose Label',
    });

});