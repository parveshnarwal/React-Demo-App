import React, {useState, useCallback} from 'react'
import Salary from './Salary'
import Title from './Title'
import Age from './Age'
import Count from './Count'

const ParentComponent = () => {

    console.log('Rendering Parent Component')

    const [age, setAge] = useState(20)
    const [salary, setSalary] = useState(3000)

    const incrementAge = useCallback(() => {
        setAge(age + 5)
    }, [age])

    const incrementSalary = useCallback(() => {
        setSalary(salary + 1000)
    }, [salary])


    return (
        <div>
            <Title/>
            <Count text="Age" count={age}/>
            <Age  clickHandler = {incrementAge} />
            <Count text="Salary" count={salary}/>
            <Salary clickHandler = {incrementSalary}/>
        </div>
    )
}

export default ParentComponent