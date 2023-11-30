import { useDispatch } from "react-redux"
import { AuthForm, IAuthData, IRegistrationData } from "@snappix/components";
import { Box } from "@mui/material";
import { fetchSignIn, fetchSignUp } from "../store/reducers/authReducer";

export const AuthPage = () => {
    const dispatch = useDispatch()

    const onSignInSubmit = (data: IAuthData) => {
        dispatch(fetchSignIn(data));
        console.log(1111)
    }

    const onSignUpSubmit = (data: IRegistrationData) => {
        dispatch(fetchSignUp(data));
    }

    return (
        <Box sx={{
            display: 'flex',
            height: '100vh',
            justifyContent: "center",
            alignItems: 'center',
        }}>
            <AuthForm onSignInSubmit={onSignInSubmit} onSignUpSubmit={onSignUpSubmit} />
        </Box>

    )
}