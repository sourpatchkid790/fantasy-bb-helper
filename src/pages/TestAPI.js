import Header from "../components/Header";
import axios from "axios";
import { useState } from "react";
function TestAPI() {

  const [profileData, setProfileData] = useState(null)
  function getData() {
    axios({
      method: "GET",
      url:"/profile",
    })
    .then((response) => {
      const res =response.data
      setProfileData(({
        profile_name: res.name,
        about_me: res.about}))
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
      <p>This is the API testing pag</p>
      
      <button onClick={getData}>Get Profile Data</button>
      {profileData && 
          <div>
            <p>Profile name: {profileData.profile_name}</p>
            <p>About me: {profileData.about_me}</p>
          </div>
        }

    </div>
  );
}



export default TestAPI;