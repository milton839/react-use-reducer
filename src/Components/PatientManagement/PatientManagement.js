import React, { useReducer, useRef } from 'react';
import { patientReducer, patientState } from '../Reducers/PatientReducer';


const PatientManagement = () => {
    const nameRef = useRef();
    const [state, dispatch] = useReducer(patientReducer, patientState);
    const handleSubmit = (event)=>{
        event.preventDefault();
        dispatch({
            type: 'ADD_PATIENT',
            id: state.patients.length + 1, 
            name: nameRef.current.value
        })
        nameRef.current.value = '';

    }
    return (
        <div>
            <h1>Manage Patient: {state.patients.length}</h1>
            <form onSubmit={handleSubmit}>
                <input ref = {nameRef}></input>
            </form>
            {
                state.patients.map(patient => <li key = {patient.id} onClick={()=> dispatch({type: 'DELETE_PATIENT', id:patient.id})}>{patient.name} <button onClick={()=> dispatch({type: 'DELETE_PATIENT', id:patient.id})}>Delete Patient</button></li>) 
            }
        </div>
    );
};

export default PatientManagement;