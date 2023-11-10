export const validateLoginForm = ({mail, password}) => {
    const isMailValid = validateMail(mail);
    const isPasswordValid = validatePassword(password);
    return isMailValid && isPasswordValid;
};

export const validateRegisterForm = ({email, password, username}) => {
    const isMailValid = validateMail(email);
    const isPasswordValid = validatePassword(password);
    const isUsernameValid = validatePassword(username);
    return isMailValid && isPasswordValid && isUsernameValid;
}

const validateMail = (mail) => {
    let regex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
    const result = regex.test(mail);
    return result;
};

const validatePassword = (password) => {
    return password ? password.length > 6 : false;
};

