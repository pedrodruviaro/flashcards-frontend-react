import { Container } from "./styles";
import { LoginForm } from "../../components/Login/LoginForm";
import { RegisterForm } from "../../components/Login/RegisterForm";
import { Route, Routes } from "react-router";

export const Login = () => {
    return (
        <Container>
            <div>
                <section></section>
                <Routes>
                    <Route path="" element={<LoginForm />} />
                    <Route path="register" element={<RegisterForm />} />
                </Routes>
            </div>
        </Container>
    );
};
