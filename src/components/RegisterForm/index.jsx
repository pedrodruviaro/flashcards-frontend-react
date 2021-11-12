import { CustomTitle } from "../CustomTitle";
import { Input } from "../Input";
import { Button } from "../Button";
import { useNavigate } from "react-router";

export const RegisterForm = () => {
    const navigate = useNavigate();
    return (
        <section className="animeLeft">
            <CustomTitle>Register</CustomTitle>
            <form>
                <Input label=" Name" />
                <Input label="Email" />
                <Input label="Password" />
                <Button>Register</Button>
            </form>

            <div>
                <p>Already have an account?</p>
                <Button onClick={() => navigate("/")} secondary>
                    Log In
                </Button>
            </div>
        </section>
    );
};
