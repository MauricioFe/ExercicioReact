import React from 'react';
import * as api from "./api/apiService";

export default function App() {
    const test = async () => { 
    const result = await api.getAllGrades();
        console.log(result); 
    }
    test();
    return (<h1>Hello World</h1>);
}
