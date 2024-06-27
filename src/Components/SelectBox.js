import React, { Component, useEffect, useState} from 'react'

function SelectBox(bodyParts){
    const [exercises, setExercises] = useState([]);
    const [selectedBodyPart, setSelectedBodyPart] = useState(null);
    const [selectedExerciseGif, setSelectedExerciseGif] = useState(null);
    
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
        setSelectedExerciseGif(null); // Reset the selected exercise GIF when changing body part
    };

    const handleExerciseClick = (exerciseGif) => {
        setSelectedExerciseGif((prevGif) => prevGif === exerciseGif ? null : exerciseGif);
    };

    const handleBackClick = () => {
        setSelectedBodyPart(null);
        setExercises([]);
        setSelectedExerciseGif(null); // Reset the selected exercise GIF
    };

    return (
        <div>
        {selectedBodyPart ? (
            <div>
                {console.log(exercises)}
                <h2>Exercises for {selectedBodyPart}</h2>
                {exercises.map((exercise, index) => (
                    <div key={index}>
                        <h3 onClick={() => handleExerciseClick(exercise.gifUrl)}>{exercise.name}</h3>
                        {selectedExerciseGif === exercise.gifUrl && (
                                <img src={exercise.gifUrl} alt="Exercise GIF" />
                            )}
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