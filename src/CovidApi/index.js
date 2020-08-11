import axios from 'axios';

const url = "https://api.covidindiatracker.com/state_data.json"

export const fetchData = async() =>{
    try{
        const {data} = await axios.get(url);
        const modifiedData = {
        confirmed:data[2].confirmed,
        recovered:data[2].recovered,
        deaths:data[2].deaths,
        active:data[2].active,
      }

      return modifiedData
    }
    catch(error){

    }
}
