import { useEffect } from "react";

function SelectBox(workout){
    
    const handleClick = (exercise) => {
        console.log("clicked!", exercise);
    };

    return (
        <div>
            {
                    workout.workout.map((exercise, index) => (
                        <div key={index}>
                            <h3 onClick={() => handleClick(exercise)}>{exercise}</h3>
                        </div>
                    ))
            }
        </div>
    )
}

export default SelectBox;