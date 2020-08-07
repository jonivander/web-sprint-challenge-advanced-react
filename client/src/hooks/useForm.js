// write your custom hook here to control your checkout form
import { useState } from 'react';

 export default function useForm(initialForm) {
    const [ formState, setFormState ] = useState(initialForm);
    const handleChanges = e => {
        setFormState({
            ...formState, 
            [e.target.name]: e.target.value,
        });
    };
    return[formState, handleChanges]
}