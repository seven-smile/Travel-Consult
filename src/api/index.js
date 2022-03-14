import axios from 'axios';

export const getPlacesData =  async (type, sw, ne) => {
  try {
      const { data: { data  } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
         
        },
        headers: {
          'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
    'x-rapidapi-key': '7fac198fc7msh3fefa83f3b473bap14f61ejsn0143a2d4deae'}
      });
        
      return data;
  } catch (error) {
      console.log(error)
  }
}    
export const getWeatherData = (lat, lng) => {
  try {
    const { data } = await axios.get('https://community-open-weather-map.p.rapidapi.com/find', {
      params: {lon: lng,lat: lat,},
      headers: {
        'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
        'x-rapidapi-key': '7fac198fc7msh3fefa83f3b473bap14f61ejsn0143a2d4deae'
      }
    });

    return data;
  } catch(error) {
    console.log(error)
  }
}