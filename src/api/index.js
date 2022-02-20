import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

export const getPlacesData =  async (sw, ne) => {
    try {
        const { data: { data  } } = await axios.get(URL, {
           params: {
              bl_latitude: '11.847676',
              tr_latitude: '12.838442',
              bl_longitude: '109.095887',
              tr_longitude: '109.149359',
              },
            headers: {
              'x-rapidapi-host': ' ',
              'x-rapidapi-key': ''
            }
          });
        return data;
    } catch (error) {
        console.log(error)
    }
}