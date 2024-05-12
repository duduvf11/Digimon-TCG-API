import { useState } from 'react';

const useInputValidation = () => {
    const [isValid, setIsValid] = useState(false);
    const [validationMessage, setValidationMessage] = useState('');

    const validateInput = (input) => {
        const regex = /^[a-zA-Z]+$/;
        const isValidInput = input && regex.test(input);
        setIsValid(isValidInput);

        if (!isValidInput) {
            if (!input) {
                setValidationMessage('O campo não pode estar vazio.');
            } else {
                setValidationMessage('O nome do Digimon não pode conter números ou caracteres especiais.');
            }
        } else {
            setValidationMessage('');
        }
    };

    return { isValid, validationMessage, validateInput };
};

export default useInputValidation;