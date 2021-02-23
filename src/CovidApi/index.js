import axios from 'axios';

// const url = "https://api.covidindiatracker.com/state_data.json"
const url = "https://api.covid19india.org/v4/min/data.min.json";

export const fetchData = async() =>{
    try{
        const response = await axios.get(url);
        // console.log(data);
        if(!response || response.status !== 200){
          throw new Error(`Covid api failed with status code ${response.status}`);
        }
        const {data} = response;
        let confirmed = 0, deaths = 0, recovered = 0, active = 0;
        if(data) {
          // let stateKeys = Object.keys(data);
          // for(let key of stateKeys){
          //   confirmed += data[key].total && data[key].total.confirmed;
          //   deaths += data[key].total && data[key].total.deceased;
          //   recovered += data[key].total && data[key].total.recovered;
          // }
          //TT object in response contains overall stats. Above code can be used as fallback if needed
          confirmed = data.TT.total.confirmed;
          deaths = data.TT.total.deceased;
          recovered = data.TT.total.recovered;
          active = confirmed - (deaths + recovered);
        }
        // console.log(confirmed);
        // console.log(deaths);
        // console.log(recovered);
        // console.log(active);
        return {
          confirmed,
          deaths,
          recovered,
          active
        };
    }
    catch(error){
      console.error(`Error occured in CovidApi ${error}`);
      return {};
    }
}
