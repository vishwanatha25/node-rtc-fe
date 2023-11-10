import React  from "react";
import InputWithLabel from "../../shared/components/InputWithLabel";

const LoginPageInputs = ({ mail, setEmail, password, setPassword }) => {
    return (
        <>
            <InputWithLabel
                value = {mail}
                setValue = {setEmail}
                label="E-mail"
                type="email"
                placeholder='Enter email address'
            />
            <InputWithLabel
                value = {password}
                setValue = {setPassword}
                label="Password"
                type="text"
                placeholder='Enter password'
            />
        </>
    );
};

export default LoginPageInputs;