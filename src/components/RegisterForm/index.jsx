import { CustomTitle } from "../CustomTitle";
import { Input } from "../Input";
import { Button } from "../Button";
import { useNavigate } from "react-router";
import { useForm } from "../../hooks/useForm";

export const RegisterForm = () => {
    const navigate = useNavigate();

    const name = useForm("name");
    const email = useForm("email");
    const password = useForm("password");

    function handleSubmit(event) {
        event.preventDefault();

        if (!name.validate() || !email.validate() || !password.validate()) {
            return;
        }

        const data = {
            name: name.value,
            email: email.value,
            password: password.value,
        };

        console.log(data);
    }

    return (
        <section className="animeLeft">
            <CustomTitle>Register</CustomTitle>
            <form onSubmit={handleSubmit}>
                <Input
                    label=" Name"
                    type="text"
                    placeholder="Your full name"
                    {...name}
                />
                <Input
                    label="Email"
                    type="text"
                    placeholder="email@domain.com"
                    {...email}
                />
                <Input
                    label="Password"
                    type="text"
                    placeholder="******"
                    {...password}
                />
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
