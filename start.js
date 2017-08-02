$(document).ready(function () {


    $('#calendar').fullCalendar({
        defaultView: 'basicWeek',
        firstDay: 1,
        defaultView: 'agendaWeek',
        minTime: '07:00:00',
        maxTime:'21:00:00',
        slotLabelFormat: 'H(:mm)',
        height: 740


    })

    $('.recentButton').click(function () {

        $('#modal-title').text($(this).text());
    })
});