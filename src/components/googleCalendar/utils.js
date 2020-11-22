import moment from 'moment';

/**
   * Generate all days in a week
   * @param {moment} currentDate - Any date in the week
   * @returns {array} days - All days in the week with date, dateStamp and weekDayName
  */
export const getAllDaysInTheWeek = (currentDate = moment ()) => {
  const weekStart = currentDate.clone ().startOf ('week');

  const days = Array.from (Array (7))
    .map ((day, index) => index)
    .map (day =>
      moment (weekStart).add (day, 'days').set ('minutes', 0).set ('seconds', 0)
    )
    .map (momentObj => ({
      date: momentObj.date (),
      dateStamp: +momentObj,
      weekDayName: momentObj.format ('ddd'),
    }));

  return days;
};

// All the hours in the day
export const times = [
  // 1,
  // 2,
  // 3,
  // 4,
  // 5,
  // 6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
];

export const appointments = [
  {
      "clinic_id": 10001,
      "ohip_id": "3695-420-235-PQ",
      "cpso_id": 564378,
      "type": "full checkup",
      "start": "10:00",
      "end": "16:45",
      "date": "2020-11-20"
  },
  {
      "clinic_id": 10001,
      "ohip_id": "2208-001-209-MS",
      "cpso_id": 107896,
      "type": "prescription refill",
      "start": "11:00",
      "end": "16:45",
      "date": "2020-11-21"
  },
  {
      "clinic_id": 33070,
      "ohip_id": "8734-489-567-BS",
      "cpso_id": 100013,
      "type": "vitals checkup",
      "start": "12:00",
      "end": "16:45",
      "date": "2020-11-18"
  },
  {
      "clinic_id": 33070,
      "ohip_id": "0000-000-000-AA",
      "cpso_id": 420169,
      "type": "general consultation",
      "start": "10:00",
      "end": "12:45",
      "date": "2020-11-19"
  },
  {
      "clinic_id": 22101,
      "ohip_id": "1299-630-187-AK",
      "cpso_id": 246710,
      "type": "vaccination",
      "start": "16:15",
      "end": "16:45",
      "date": "2020-11-19"
  }
];
/**
   * Generated coordinated for the highlight
   * @param {Object} event - Event object
   * {
   *  start: Time stamp for the start of the event :timeStamp,
   *  title: Title fo the new event :String,
   *  end: Time stamp for the end of the event :timeStamp,
   * }
   * @param {timeStamp} startDate - Timestamp of any date in the current week
   * @returns {Object} coordinates - Coordinates object with
   * {
   *  top - CSS top of the element,
   *  left - CSS left of the element,
   *  width - CSS width of the element,
   *  height - CSS height of the element
   * }
  */
export const generateWeekViewCoordinates = (event, startDate) => {
  const start = moment (event.date+' '+event.start, 'YYYY-MM-DD h:mm');
  const end = moment (event.date+' '+event.end, 'YYYY-MM-DD h:mm');
  const duration = moment.duration (end.diff (start));
  const weekStart = moment (startDate);

  // Calculating Top
  const top = start.minutes () === 30 ? '50%' : '0%';

  // Calculating height
  const timeFactor = duration.hours () + duration.minutes () / 60;
  const height = timeFactor * 100;

  let left, width;
  // debugger;
  // if (weekStart.week () === start.week ()) {
    const weekDay = start.weekday ();
    left = (weekDay + 1) * 12.5;
  // }

  if (
    weekStart.week () === start.week () &&
    weekStart.week () === end.week ()
  ) {
    const daysDiff = duration.days ();
    width = (daysDiff + 1) * 12.5 - 2;
  }

  if (weekStart.week () > start.week () && weekStart.week () === end.week ()) {
    const daysDiff = moment
      .duration (
        end.diff (
          weekStart
            .startOf ('week')
            .set ('hours', start.hours ())
            .set ('minutes', start.minutes ())
        )
      )
      .days ();
    width = (daysDiff + 1) * 12.5 - 2;
  }

  // if (weekStart.week () > start.week ()) {
  //   left = 12.5;
  // }

  if (weekStart.week () < end.week ()) {
    width = 100 - left;
  }

  return {
    top: top + '%',
    left: left + '%',
    height: height + '%',
    width: width + '%',
  };
};

/**
 * Checks if the dateStamp represents todays date
 * @param {dateStamp} dateStamp - Date Stamp to check
 * @return {boolean}
 */
export const isTodaysDate = dateStamp => {
  const today = moment ();
  dateStamp = moment (dateStamp);
  return (
    moment.duration (dateStamp.diff (today)).days () === 0 &&
    today.day () === dateStamp.day ()
  );
};