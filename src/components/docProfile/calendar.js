import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

const events = [
  {
    id: 1,
    title: 'event 1',
    start: '2021-07-24T10:00:00',
    end: '2021-07-24T12:00:00',
  },
  {
    id: 2,
    title: 'event 2',
    start: '2021-07-25T10:00:00',
    end: '2021-07-25T11:00:00',
  },
  { id: 3, title: 'event 3', start: '2021-07-26', end: '2021-07-28' },
];

function FullCalendarApp() {
  return (
    <div className="App">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="timeGridWeek"
        // headerToolbar={{
        //   start: 'doctor dayGridMonth,timeGridWeek,timeGridDay',
        //   center: 'title',
        // }}
        height='65vh'
        events={events}
        eventColor="#0DAC99"
        nowIndicator
        dateClick={(e) => alert(e.dateStr)}
        eventClick={(e) => alert(e.event.id)}
      />
    </div>
  );
}

export default FullCalendarApp;