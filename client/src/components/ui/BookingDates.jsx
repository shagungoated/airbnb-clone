import React from 'react';
import { differenceInCalendarDays, format } from 'date-fns';

const BookingDates = ({ booking, className }) => {
  return (
    <div className={'flex gap-1 ' + className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75"
        />
      </svg>

      {differenceInCalendarDays(
        new Date(booking.checkOut),
        new Date(booking.checkIn),
      )}{' '}
      nights:
      nights:
<div className="ml-2 flex items-center gap-1">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="h-6 w-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25M3 10.5h18"
    />
  </svg>

  {format(new Date(booking.checkIn), 'dd-MM-yyyy')} &rarr;{' '}
</div>

<div className="items- flex gap-1">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="h-6 w-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25M3 10.5h18"
    />
  </svg>

  {format(new Date(booking.checkOut), 'dd-MM-yyyy')}
</div>
</div>
);
};

export default BookingDates;