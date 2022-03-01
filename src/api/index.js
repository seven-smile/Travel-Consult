import axios from 'axios';
import { Data } from '@react-google-maps/api';

// const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'


export const getPlacesData =  async (sw, ne) => {
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
          'x-rapidapi-key': '477481aedemsh58334117c7d1595p1d3205jsncf11cd87d1a1'
        }
      });
        
      return data;
  } catch (error) {
      console.log(error)
  }
}