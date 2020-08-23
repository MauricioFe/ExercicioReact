import React, { useState, useEffect } from 'react';
import * as api from "./api/apiService";
import Spinner from './components/Spinner';
import GradesControl from './components/GradesControl';
import ModalGrade from './components/ModalGrade';

const { getAllGrades, insertGrades, updateGrades, deleteGrades, getValidationFromGradeType } = api;
export default function App() {
    const [allGrades, setAllGrades] = useState([]);
    const [selectedGrade, setSelectedGrade] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);
    useEffect(() => {
        const getGrades = async () => {
            const grades = await getAllGrades();
            setTimeout(() => {
                setAllGrades(grades);
            }, 2000);
        };
        getGrades();
    }, []);

    const handleDelete = async (gradeToDelete) => {
        const isDeleted = await deleteGrades(gradeToDelete);
        if (isDeleted) {
            const deletedGradeIndex = allGrades.findIndex(grade => grade.id === gradeToDelete.id);
            const newGrades = Object.assign([], allGrades);
            newGrades[deletedGradeIndex].isDeleted = true;
            newGrades[deletedGradeIndex].value = 0;
            setAllGrades(newGrades);
        }
    }
    const handlePersist = (grade) => {
        setSelectedGrade(grade);
        setIsModalOpen(true);
    }    
    const handlePersistData = (grade) => {

    }    
    const handleClose = () => {

    }

    return (
        <div>
            <h1 className='center'>Controle de notas</h1>
            {allGrades.length > 0 && <GradesControl grades={allGrades} onDelete={handleDelete} onPersist={handlePersist} />}
            {allGrades.length === 0 && <Spinner description="Carregando notas..." />}
            {isModalOpen && <ModalGrade onSave={handlePersistData} onClose={handleClose} selectedGrade={selectedGrade} />}
        </div>
    );
}
