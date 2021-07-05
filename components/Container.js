import React,{useEffect, useState} from 'react';
import {View,Text,TextInput,StyleSheet} from 'react-native'
export default function Container() {
     const [dat,setdat]=useState('mumbai');
     const [text, setText] = useState('mumbai');
     let fetch_uri =`http://api.weatherstack.com/current?access_key=66cb9be3b982402b8ec46e59ffa011f0&query=${text}`
     useEffect( async () => {      
     let response = await fetch(fetch_uri);
     let data =  response.json();
     setdat(data)
    }, [text])

    return (
   <>
          

 <View style={{padding: 10}}>
      <TextInput
        style={{height: 40}}
        placeholder="Type here to translate!"
        onChangeText={text => setText(text)}
        defaultValue={text}
      />
</View>
{/* {(dat !== undefined)? (<>
<Text>Lat :{JSON.stringify(dat.location.lat)}</Text>
<Text>Long :{JSON.stringify(dat.location.lon)}</Text>

<Text>temprature :{JSON.stringify(dat.current.temprature)}</Text>
<Text>wind speed:{JSON.stringify(dat.current.wind_speed)}</Text>
<Text>Pressure:{JSON.stringify(dat.current.pressure)}</Text>
<Text>Humidity:{JSON.stringify(dat.current.humidity)}</Text>
<Text>IS it day? :{JSON.stringify(dat.current.is_day)}</Text>
  </>) :(<Text>enter a location</Text>) */}
}
 </>
    );
}

const styles = StyleSheet.create({
    sub:{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'white',
  
    },
  })
