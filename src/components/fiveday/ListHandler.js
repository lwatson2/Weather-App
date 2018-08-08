import React from 'react';
import Time from './FiveDayForecast';

const Sevenday = props => {
  const { fivedayforecast } = props;

  if (fivedayforecast.list) {
    return <Time list={fivedayforecast.list} />;
  }

  return <div />;
};

export default Sevenday;
