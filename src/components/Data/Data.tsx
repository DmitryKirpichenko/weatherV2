import React, { useEffect, useState } from 'react';

import { StyledData, StyledTime, StyledDate } from './StyledData';

const dateOptions = {
  weekday: 'short',
  day: 'numeric',
  month: 'numeric',
  year: 'numeric',
} as Intl.DateTimeFormatOptions;

const timeOptions = {
  hour: 'numeric',
  minute: 'numeric',
} as Intl.DateTimeFormatOptions;

export const Data = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const tick = setInterval(() => setDate(new Date()), 1000);
    return () => {
      clearInterval(tick);
    };
  });

  return (
        <StyledData>
            <StyledTime>{date.toLocaleTimeString('en-US', timeOptions)}</StyledTime>
            <StyledDate>{date.toLocaleDateString('en-US', dateOptions)}</StyledDate>
        </StyledData>
  );
};
