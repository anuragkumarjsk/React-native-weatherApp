import React,{useEffect, useState} from 'react';
import {View,Text,TextInput,StyleSheet} from 'react-native'
export default function Container1() {
  let [text,setText] =useState()
  const [weatherdata,setweatherdata] = useState(null)
  let [loaded,setloaded] = useState(true)
  async function getweatherdata(text){
   setloaded(false);
   const fetch_uri =`https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=03a2fb8075b48ca95f0e530b5d629ba0`

   //const fetch_uri =`http://api.weatherstack.com/current?access_key=66cb9be3b982402b8ec46e59ffa011f0&query=${text}`
   try{
       const response = await fetch(fetch_uri);
       if(response.status == 200){
          const data = await response.json();
          setweatherdata(data);
       }
       else {
         setweatherdata(null)}
       setloaded(true)  
   }
   catch(e){ console.log(e)}
  }

  useEffect(() => {
    getweatherdata()
  }, [])
  useEffect(() => {
    getweatherdata(text)
  }, [text])

   return(
    <View >
    <TextInput
    style={{height: 40  }}
    placeholder="Type here a city name!"
    onChangeText={text => setText(text)}
    defaultValue={text}
    />
    {weatherdata==null ? <Text>No city name in input!</Text>   : <> 
    <Text></Text>
    <Text style={styles.tiles}>Coordinates: ({JSON.stringify(weatherdata.coord.lat)},{JSON.stringify(weatherdata.coord.lon)})</Text>
    <Text style={styles.tiles}>Temprature: {JSON.stringify(weatherdata.main.temp)}</Text>
    <Text style={styles.tiles}>Pressure: {JSON.stringify(weatherdata.main.pressure)}</Text>
    <Text style={styles.tiles}>Humidity: {JSON.stringify(weatherdata.main.humidity)}</Text>
    <Text style={styles.tiles}>wind-speed: {JSON.stringify(weatherdata.wind.speed)}</Text>
    <Text style={styles.tiles}>Humidity: {JSON.stringify(weatherdata.main.humidity)}</Text>
    <Text style={styles.tiles}>weather-description: {JSON.stringify(weatherdata.weather[0].description)}</Text>

    </> }
    </View>
   )

   }


   const styles = StyleSheet.create({
     tiles:{
       padding:10,
       margin:10,
     }
   })
