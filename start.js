$(document).ready(function () {


    $('#calendar').fullCalendar({
        defaultView: 'basicWeek',
        firstDay: 1,
        defaultView: 'agendaWeek',
        minTime: '07:00:00',
        maxTime: '21:00:00',
        slotLabelFormat: 'H(:mm)',
        height: 740,
        events: [

            {
                title: 'event2',
                start: '2017-08-03T12:30:00'
            },
            {
                title: 'event1',
                start: '2017-08-09T12:30:00'

            }
        ]


    })

    $('.recentButton').click(function () {

        $('#modal-title').text($(this).text());
    })

    $("#target").keyup(function () {
        
    });


});