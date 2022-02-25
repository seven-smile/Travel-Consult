/*import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

export const getPlacesData =  async (sw, ne) => {
    try {
        const { data: { data  } } = await axios.get(URL, {
          params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
          },
          headers: {
            'x-rapidapi-host': 'travel-advisor.p.rapidapi.com ',
            'x-rapidapi-key': 'bb5deb85acmshbc8005000bdf8e2p136515jsne1103c53df0c'
          }
        });
          
        return data;
    } catch (error) {
        console.log(error)
    }
}*/


import axios from 'axios';
import { Data } from '@react-google-maps/api';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

//ERROR BELOW( INSIDE THE ASYNC FUNCTION . IT IS (sw, ne)  IN THE VIDEO)
// export const getPlacesData =  async (sw, ne) => {
export const getPlacesData =  async () => {
//ERROR ABOVE( INSIDE THE ASYNC FUNCTION . IT IS (sw, ne)  IN THE VIDEO)

  try {
      const { data: { data  } } = await axios.get(URL, {
        params: {
          // THE FIGURES BELOW SHOULD BE CHANGED TO SW.LAT, NE.LAT,ETC.
          bl_latitude:'11.847676',
          tr_latitude: '12.838442',
          bl_longitude: '109.095887',
          tr_longitude: '109.149359',

           // THE FIGURES ABOVE SHOULD BE CHANGED TO SW.LAT, NE.LAT,ETC.

          // bl_latitude: sw.lat,
          // tr_latitude: ne.lat,
          // bl_longitude: sw.lng,
          // tr_longitude: ne.lng,
         
        },
        headers: {
          'x-rapidapi-host': 'travel-advisor.p.rapidapi.com ',
          'x-rapidapi-key': 'bb5deb85acmshbc8005000bdf8e2p136515jsne1103c53df0c'
        }
      });
        
      return data;
  } catch (error) {
      console.log(error)
  }
}