const request = require('request');

const geocode = ((address, callback) => {
    const url = 'http://www.mapquestapi.com/geocoding/v1/address?key=F66QlUIE94n6wAitGaGXOZGCR1ZDEdEn&location='+ encodeURIComponent(address) +''  
  
      request({url, json: true}, (error, {body}) => {
          if (error) {
              callback('Unable to connect to location services!', undefined)
          } else if (body.results.length === 0) {
              callback('Unable to find location. Try another search.', undefined)
          } else {
              callback(undefined, {
                  latitude: body.results[0].locations[0].latLng.lat,
                  longitude: body.results[0].locations[0].latLng.lng,
                  location: body.results[0].providedLocation
              })
          }
      })
  })

  module.exports = geocode;