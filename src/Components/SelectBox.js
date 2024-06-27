import React, { Component, useEffect, useState} from 'react'

function SelectBox(bodyParts){
    const [exercises, setExercises] = useState([]);
    const [selectedBodyPart, setSelectedBodyPart] = useState(null);
    
    useEffect(() => {
        if (selectedBodyPart) {
            // Fetch exercises for the selected body part
            fetch(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${selectedBodyPart}?limit=2000&offset=0`, {
                headers: {
                    'x-rapidapi-key': '06bd9b642dmsh8bbdee665e3db29p17cdb1jsnad5036c2e351'
                }
            })
            .then(res => res.json())
            .then(data => {
                setExercises(data);
            });
        }
    }, [selectedBodyPart]); 
    

    const handleBodyPartClick = (bodyPart) => {
        setSelectedBodyPart(bodyPart);
        console.log(exercises)
    };

    const handleBackClick = () => {
        setSelectedBodyPart(null);
        setExercises([]);
    };

    return (
        <div>
        {selectedBodyPart ? (
            <div>
                <h2>Exercises for {selectedBodyPart}</h2>
                {exercises.map((exercise, index) => (
                    <div key={index}>
                        <h3>{exercise.name}</h3>
                        <p>{exercise.description}</p>
                    </div>
                ))}
                <button onClick={handleBackClick}>Back to Body Parts</button>
            </div>
        ) : (
            <div>
            {
                    bodyParts.bodyParts.map((bodyPart, index) => (
                        <div key={index}>
                            <h3 onClick={() => handleBodyPartClick(bodyPart)}>{bodyPart}</h3>
                        </div>
                    ))
            }
           </div>
        )}
    </div>
    )
}

export default SelectBox;