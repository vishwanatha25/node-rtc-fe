import React  from "react";
import InputWithLabel from "../../shared/components/InputWithLabel";

const RegisterPageInputs = (props) => {
    const { email, setEmail, passsword, setPassword, username, setUsername } = props;
    
    return <>
        <InputWithLabel 
            value={email}
            setValue={setEmail}
            label="E-mail address"
            type='email'
            placeholder="Enter e-mail address"
        />
        <InputWithLabel 
            value={username}
            setValue={setUsername}
            label="Username"
            type='text'
            placeholder="Enter username"
        />
        <InputWithLabel 
            value={passsword}
            setValue={setPassword}
            label="Password"
            type='password'
            placeholder="Enter password"
        />
    </>
};

export default RegisterPageInputs;