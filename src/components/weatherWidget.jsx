import React from 'react'
import ReactWeather, { useOpenWeather } from 'react-open-weather';

function Weather(){
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: 'e13885f073691de547fc34664457e788',
    lat: '26.7153',
    lon: '80.0534',
    lang: 'en',
    unit: 'imperial', // values are (metric, standard, imperial)
  });
  return (
    <ReactWeather
      isLoading={isLoading}
      errorMessage={errorMessage}
      data={data}
      lang="en"
      locationLabel="West Palm Beach"
      unitsLabels={{ temperature: '°F', windSpeed: 'Mp/h' }}
      showForecast
    />
  );
}

export default Weather

