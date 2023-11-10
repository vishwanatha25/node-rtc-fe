import React  from "react";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";

const RedirectText = styled("span")({
    color: "#00SF44",
    fontWeight: 500,
    cursor: "pointer"
});

const RedirectInfo = ({
    text,
    redirectText,
    additionalStyles,
    redirectHandler
}) => {
    return (
        <Typography
            sx={{ color: "#72767d" }}
            style={additionalStyles ? additionalStyles : {}}
            variant="subtitle2"
        >
        {text}
        <RedirectText onClick={redirectHandler}>
            {redirectText}
        </RedirectText>
        </Typography>
    );
};

export default RedirectInfo;