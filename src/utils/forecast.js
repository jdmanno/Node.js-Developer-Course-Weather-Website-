const request = require('request')

const forecast =  (latitude, longitude, callback) => {
  const url = 'https://api.darksky.net/forecast/e45f1862c1a2236d93d01845d4155010/' +
  latitude + ',' + longitude

  request({url, json: true}, (error, {body}) => {
    if (error){
      callback('Unable to connect to weather service!')
    } else if (body.error){
      callback('Unable to find location! Please try another search!')
    } else {
    callback(undefined, body.daily.data[0].summary + ' ' +
      'Probability of precipitation: ' + body.currently.precipProbability + '%. ' +
      'The temperature is currently ' + body.currently.temperature + ' degrees celcius')
    }
  })
}

module.exports = forecast
