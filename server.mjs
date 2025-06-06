import express from 'express'
import cors from "cors";

const app = express()
const port = process.env.PORT || 5001

app.get('/', (req, res) => {
  res.send('Hello World!')
})


/// url parameter:
// in the url parameter all the parameters are required and parameter position are matter.

/// http://localhost:5001/get-weather/karachi/78500

/// query parameter
/// http://localhost:5001/get-weather?zip=78500&city=karachi
// in the query parameter all the parameters are optional and order of parameter does 't matter.

app.use(cors())

app.get('/get-weather/:cityName' , (req , res) => {
  
  const city = req.params.cityName.toLowerCase();
  let apiRes = {};

  if(city == "karachi"){
    apiRes = {
      "city": city,
      "temperature" : 40, 
      "humidity": 39, 
      "wind": "50 km/h",
      "temp_c": 30,
      "temp_f": 42,
      "feelslike": 45,
      "country": "Pakistan"
    }
  }else if(city == "lahore"){
    apiRes = {
      "city": city,
      "temperature" : 36, 
      "humidity": 45, 
      "wind": "520 km/h",
      "temp_c": 30,
      "temp_f": 42,
      "feelslike": 37,
      "country": "Pakistan"
    }
  }
  else if(city == "islamabad"){
    apiRes = {
      "city": city,
      "temperature" : 32, 
      "humidity": 34, 
      "wind": "60 km/h",
      "temp_c": 30,
      "temp_f": 36,
      "feelslike": 33,
      "country": "Pakistan"
  }}
  else if(city == "hyderabad"){

    apiRes = {
      "city": city,
      "temperature" : 38, 
      "humidity": 44, 
      "wind": "40 km/h",
      "temp_c": 36,
      "temp_f": 40,
      "feelslike": 39,
      "country": "Pakistan"
    }

  }

  else if(city == "multan"){
    apiRes = {
      "city": city,
      "temperature" : 40, 
      "humidity": 45, 
      "wind": "50 km/h",
      "temp_c": 36,
      "temp_f": 40,
      "feelslike": 39,
      "country": "Pakistan"
    }
  }
  else{
    apiRes = {
      "city": city,
      "temperature" : 40, 
      "humidity": 39, 
      "wind": "50 km/h",
      "temp_c": 30,
      "temp_f": 42,
      "feelslike": 45
    }
  }

  res.send(apiRes)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})