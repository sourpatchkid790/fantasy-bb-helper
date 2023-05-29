import Header from "../components/Header";
import axios from "axios";
import { useState } from "react";

// This page was used to test an api request to the flask backend 
// Source used: https://dev.to/nagatodev/how-to-connect-flask-to-reactjs-1k8i
function TestAPI() {

  // const [profileData, setProfileData] = useState(null)
  const [playerData, setPlayerData] = useState(null)

  function getData() {
    axios({
      method: "GET",
      url:"/bbref",
    })
    .then((response) => {
      const res =response.data
      setPlayerData(({
        year: res.year,
        headers: res.headers}))
    }).catch((error) => {
      if (error.response) {
        console.log(error.response)
        console.log(error.response.status)
        console.log(error.response.headers)
        }
    })
  }

  return (
    <div>
      <Header /> 
      <p>This is the API testing page</p>
      
      <button onClick={getData}>Get Profile Data</button>
      {playerData && 
          <div>
            <p>year: {playerData.year}</p>
            <p>headers: {playerData.headers[0]}</p>
          </div>
        }

    </div>
  );
}



export default TestAPI;