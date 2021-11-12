import React from "react";
import { CustomTitle } from "../CustomTitle";
import { Input } from "../Input";
import { Button } from "../Button";
import { useNavigate } from "react-router";

export const LoginForm = () => {
    const navigate = useNavigate();

    return (
        <section className="animeLeft">
            <CustomTitle>Login</CustomTitle>
            <form>
                <Input label="Email" />
                <Input label="Password" />
                <a href="/">Forgot your password?</a>
                <Button>Enter</Button>
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
