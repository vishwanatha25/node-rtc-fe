import React, { useEffect, useState }  from "react";
import AuthBox from "../../shared/components/authBox";
import LoginPageHeader from './LoginPageHeader';
import LoginPageInputs from './LoginPageInputs';
import LoginPageFooter from './LoginPageFooter';
import {validateLoginForm} from '../../shared/utils/validator';

const LoginPage = () => {
    const [mail, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        setIsFormValid(validateLoginForm({mail, password}));
    },[mail, password]);

    const handleLogin = () => {
        console.log('Login pressed');
    }

    return (
        <AuthBox>
            <LoginPageHeader />
            <LoginPageInputs 
                mail={mail}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
            />
            <LoginPageFooter handleLogin={handleLogin} isFormValid={isFormValid} />
        </AuthBox>
    );
};

export default LoginPage;