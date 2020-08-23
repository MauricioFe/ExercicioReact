import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import * as api from "../api/apiService";
const { getAllGrades, insertGrades, updateGrades, deleteGrades, getValidationFromGradeType } = api;
Modal.setAppElement('#root')
export default function ModalGrade({ onSave, onClose, selectedGrade }) {
    const { id, student, value, type, subject } = selectedGrade;
    const [gradeValue, setGradeValue] = useState(value);
    const [gradeValidation, setGradeValidation] = useState({});
    const [errorMessage, setErrorMessage] = useState('');


    useEffect(() => {
        const getValidation = async () => {
            const validation = await getValidationFromGradeType(type);
            setGradeValidation(validation);
        }

        getValidation();
    }, [type]);

    useEffect(() => {
        const { minValue, maxValue } = gradeValidation;
        if (gradeValue < minValue || gradeValue > maxValue) {
            setErrorMessage(`O valor da nota deve ser entre ${minValue} e ${maxValue} (inclusive)`);
            return;
        };
        setErrorMessage('');
    }, [gradeValue, gradeValidation]);

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        }
    }, [])
    const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
            onClose(null);
        }
    }
    const handleFormSubmit = (event) => { };
    const handleGradeChange = ({ target }) => {
        setGradeValue(+target.value)
    };
    const handleClose = () => {
        onClose(null);
    };
    return (
        <div>
            <Modal isOpen={true} >
                <div style={styles.flexRow}>
                    <span style={styles.title}>Manutenção de notas</span>
                    <button className="waves-effect waves-light btn red dark-4" onClick={handleClose}>X</button>
                </div>
                <form onSubmit={handleFormSubmit}>
                    <div className="input-field">
                        <input id="inputName" type="text" value={student} readOnly />
                        <label className="active" htmlFor="inputName">
                            Nome do Aluno:
                        </label>
                    </div>
                    <div className="input-field">
                        <input id="inputSubject" type="text" value={subject} readOnly />
                        <label className="active" htmlFor="inputSubject">
                            Disciplina:
                        </label>
                    </div>
                    <div className="input-field">
                        <input id="inputType" type="text" value={type} readOnly />
                        <label className="active" htmlFor="inputType">
                            Tipo de avaliação:
                        </label>
                    </div>
                    <div className="input-field">
                        <input id="inputGrade" type="number"
                            min={gradeValidation.minValue}
                            max={gradeValidation.maxValue} step="1" autoFocus value={gradeValue} onChange={handleGradeChange} />
                        <label className="active" htmlFor="inputGrade">
                            Nota:
                        </label>
                    </div>
                    <div style={styles.flexRow}>
                        <button className="waves-effect waves-light btn" disabled={errorMessage.trim() !== ''}>Salvar</button>
                        <span style={styles.error}>{errorMessage}</span>
                    </div>
                </form>
            </Modal>
        </div>
    )
}

const styles = {
    flexRow: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '40px'
    },
    title: {
        fontSize: '1.6rem',
        fontWeight: 'bold',
    },
    error:{
        fontSize: '1.2rem',
        fontWeight: 'bold',
        color: 'red'
    }
}
