import axios from 'axios';

const url = "https://api.covidindiatracker.com/state_data.json"

export const fetchData = async() =>{
    try{
        const {data} = await axios.get(url);
        console.log(data);
        if(data && data.length) {
          for (let i = 0; i < data.length; i++){
            if(data[i].id === 'IN-AP'){
              return data[i];
            }
          }
        }
      // return data[1];
    }
    catch(error){

    }
}
