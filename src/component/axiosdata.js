import{useEffect,useState} from 'react'
import axios from "axios"

function AxiosData(){
const [data, setData] = useState();
  useEffect(() => {
    axios.get("https://api.covidtracking.com/v1/states/current.json")
      .then(function(response) {
        setData(response.data);
        console.log(response.data)
      }).catch(function(error) {
        
        console.log(error);
      })
  }, []);
  return data;
}
export default AxiosData;