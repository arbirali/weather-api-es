import $ from 'jquery';
import axios from 'axios';

import renderWeather from './helper/weather';
import handleError from './helper/hanlde-error';

const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';
const appid = 'dba6ed565e0d72778b7b4c1afaca1857';

(function () {

  $('#searchForm').on('submit', function(e) {
    e.preventDefault();

    axios.get(weatherUrl, {
      params: {
        q: $('#searchInput').val(),
        appid
      }
    })
    .then(renderWeather)
    .catch(handleError);

  });

}) (axios, $);
