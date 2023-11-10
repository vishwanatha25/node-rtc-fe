import React  from "react";
import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton";
import RedirectInfo from "../../shared/components/RedirectInfo";
import { useNavigate } from 'react-router-dom';
import Tooltip from "@mui/material/Tooltip";


const getFormInvalidMsg = () => {
    return "Enter correct email address and password"
}

const getFormValidMsg = () => {
    return "Press to log in"
}

const LoginPageFooter = ({ handleLogin, isFormValid }) => {
    const navigate = useNavigate();

    const handlePushToRegisterPage = () => {
        navigate('/register');
    }

    return (
        <>
            <Tooltip
                title={!isFormValid ? getFormInvalidMsg() : getFormValidMsg()}
            >
                <div>
                    <CustomPrimaryButton
                        label="Log in"
                        additinalStyles={{marginTop: '30px'}}
                        disabled={!isFormValid}
                        onClick={handleLogin}
                    />
                </div>
            </Tooltip>
            <RedirectInfo 
                text="Need an account?"
                redirectText="Create an account"
                additionalStyles={{ marginTop: '5px' }}
                redirectHandler={handlePushToRegisterPage}
            />
        </>
    );
};

export default LoginPageFooter;