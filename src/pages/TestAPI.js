import Header from "../components/Header";
import axios from "axios";
import { useState } from "react";
import styles from './css/TestAPI.module.css';

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
        headers: res.headers,
        name: res.name, 
        json: res.json,}))
    }).catch((error) => {
      if (error.response) {
        console.log(error.response)
        console.log(error.response.status)
        console.log(error.response.headers)
        }
    })
  }

  console.log(playerData);
  console.log(playerData.json[1]["Player"] == "Quincy Acy");
  let player2Name = playerData.json[1]["Player"];

  return (
    <div>
      <Header /> 
      <div className={styles.bodydiv}>
        <p>This is the API testing page</p>
        
        <button onClick={getData}>Get Profile Data</button>
        {playerData && 
            <div>
              <p>year: {playerData.year}</p>
              <p>headers: {playerData.headers}</p>
              <p>name: {playerData.name}</p>
              <p>jsontest: {player2Name}</p>
            </div>
        }
        <div className={styles.playerForm}>
          <label for="playername">Enter player name</label>
          <input type="text" id="playername" name="playername"></input>
        </div>
      </div>

    </div>
  );
}



export default TestAPI;