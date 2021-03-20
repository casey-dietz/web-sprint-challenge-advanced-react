// write your custom hook here to control your checkout form
import React, { useState } from "react"

export const useForm = (initialValue) => {
    const [values, setValues] = useState(initialValue)

    const handleChanges = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value 
        })
    }

    const handleSubmit = e => {
        if(e){
            e.preventDefault()
        }
        console.log(values)
    }
    return [values, handleChanges, handleSubmit]
}

