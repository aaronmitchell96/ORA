import React, { Component, useEffect, useState} from 'react'

function FetchApiData () {
    const [workout, setWorkouts] = useState(null);

    useEffect(() => {
      fetch('https://exercisedb.p.rapidapi.com/exercises?limit=2000&offset=0', {
        headers: {
          'x-rapidapi-key': '06bd9b642dmsh8bbdee665e3db29p17cdb1jsnad5036c2e351'
        }
      })
        .then(res => {
          return res.json();
        })
          .then((data)=>{
            setWorkouts(data)
          })
    },[])

  return (
    <div>
        <h1>HELLO WORLD!</h1>
      {console.log(workout)}
    </div>
  );
}


export default FetchApiData;