import React  from "react";
import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton";
import RedirectInfo from "../../shared/components/RedirectInfo";
import { useNavigate } from 'react-router-dom';
import Tooltip from "@mui/material/Tooltip";


const getFormInvalidMsg = () => {
    return "Enter correct email address, password and username"
}

const getFormValidMsg = () => {
    return "Press to register"
}

const RegisterPageFooter = ({ handleRegister, isFormValid }) => {
    const navigate = useNavigate();

    const handlePushToLoginPage = () => {
        navigate('/login');
    }

    return (
        <>
            <Tooltip
                title={!isFormValid ? getFormInvalidMsg() : getFormValidMsg()}
            >
                <div>
                    <CustomPrimaryButton
                        label="Register"
                        additinalStyles={{marginTop: '30px'}}
                        disabled={!isFormValid}
                        onClick={handleRegister}
                    />
                </div>
            </Tooltip>
            <RedirectInfo 
                text=""
                redirectText="Already have an account?"
                additionalStyles={{ marginTop: '5px' }}
                redirectHandler={handlePushToLoginPage}
            />
        </>
    );
}

export default RegisterPageFooter;