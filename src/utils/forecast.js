const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=a4c054828cf7da62984b404d19d06a7f&query=' + longitude + ',' + latitude + '&units=f'

    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service', undefined)
        }
        else if (body.error) {
            callback('Unable to find location. Try another search', undefined)
        }
        else {
            callback(undefined, body.current.weather_descriptions[0] + ', time is ' + body.current.observation_time + '. It is currently ' + body.current.temperature + ' degrees out. There is a ' + body.current.precip + '% chance of rain')
        }
    })
}

module.exports = forecast