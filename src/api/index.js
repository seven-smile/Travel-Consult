import axios from 'axios';

// const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'


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
          'x-rapidapi-key': '7fac198fc7msh3fefa83f3b473bap14f61ejsn0143a2d4deae'
        }
      });
        
      return data;
  } catch (error) {
      console.log(error)
  }
}    