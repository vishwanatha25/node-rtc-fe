import React, { useEffect, useState }  from "react";
import RegisterPageInputs from '../RegisterPage/RegisterPageInputs';
import RegisterPageFooter from './RegisterPageFooter';
import AuthBox from "../../shared/components/authBox";
import {validateRegisterForm} from '../../shared/utils/validator';
import { Typography } from "@mui/material";

const RegisterPage = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isFormValid, setIsFormValid] = useState('');

    const handleRegister = () => {
        console.log(email);
        console.log(password)
    }

    useEffect(() => {
        setIsFormValid(validateRegisterForm({ username, email, password }));
    }, [email, username, password]);

    return (
        <AuthBox>
            <Typography variant="5" sx={{ color: "white" }}>
                Create an account
            </Typography>
            <RegisterPageInputs 
                email={email}
                setEmail={setEmail}
                username={username}
                setUsername={setUsername}
                password={password}
                setPassword={setPassword}
            />
            <RegisterPageFooter 
                handleRegister={handleRegister}
                isFormValid={isFormValid}
            />
        </AuthBox>
    );
};

export default RegisterPage;