import React, { Component, useEffect, useState} from 'react'
import SelectBox from './SelectBox';

function FetchApiData () {
    const [workout, setWorkouts] = useState(null);

    useEffect(() => {
      fetch('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', {
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
          {workout ? (
              <SelectBox workout={workout}/>
          ) : (
              <p>Loading...</p>
          )}
      </div>
  );
}


export default FetchApiData;