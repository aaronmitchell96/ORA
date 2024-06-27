function SelectBox(workout){
    return (
        <div>
            {
                    workout.workout.map((exercise, index) => (
                        <div key={index}>
                            <h3>{exercise}</h3>
                        </div>
                    ))
            }
        </div>
    )
}

export default SelectBox;