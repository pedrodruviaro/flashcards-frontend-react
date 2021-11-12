import { Container } from "./styles";
import { Input } from "../../components/Input";
import { CustomTitle } from "../../components/CustomTitle";
import { Button } from "../../components/Button";

export const Login = () => {
    return (
        <Container>
            <div>
                <section></section>
                <section>
                    <CustomTitle>Login</CustomTitle>
                    <form>
                        <Input label="Email" />
                        <Input label="Password" />
                        <a href="/">Forgot your password?</a>
                        <Button>Enter</Button>
                    </form>

                    <div>
                        <p>Don't have an account? It's free.</p>
                        <Button secondary>Sign In</Button>
                    </div>
                </section>
            </div>
        </Container>
    );
};
