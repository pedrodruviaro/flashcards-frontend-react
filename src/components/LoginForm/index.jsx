import { CustomTitle } from "../CustomTitle";
import { Input } from "../Input";
import { Button } from "../Button";
import { useNavigate } from "react-router";
import { useForm } from "../../hooks/useForm";
import { useAuth } from "../../hooks/useAuth";

export const LoginForm = () => {
    const navigate = useNavigate();
    const { loginUser, loadingAuth, errorAuth } = useAuth();

    const email = useForm("email");
    const password = useForm("password");

    async function handleSubmit(event) {
        event.preventDefault();

        // if (!email.validate() || !password.validate()) {
        //     return;
        // }

        // const credentials = {
        //     email: email.value,
        //     password: password.value,
        // };
        const credentials = {
            email: "mariobros@gmail.com",
            password: "mariobros",
        };

        await loginUser(credentials);
    }

    return (
        <section className="animeLeft">
            <CustomTitle>Login</CustomTitle>
            <form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    placeholder="email@domail.com"
                    label="Email"
                    {...email}
                />
                <Input
                    type="text"
                    placeholder="******"
                    label="Password"
                    {...password}
                />
                <a href="/">Forgot your password?</a>
                {errorAuth && <p>{errorAuth}</p>}
                <Button type="submit" disabled={loadingAuth}>
                    Enter
                </Button>
            </form>

            <div>
                <p>Don't have an account? It's free.</p>
                <Button onClick={() => navigate("/register")} secondary>
                    Sign In
                </Button>
            </div>
        </section>
    );
};
