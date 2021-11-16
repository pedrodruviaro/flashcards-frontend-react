import React, { useState } from "react";
import { Container } from "./styles";
import { Button } from "../Button";

export const SingleQuestion = ({ question }) => {
    const [showAnswer, setShowAnswer] = useState(false);

    function handleClick() {
        setShowAnswer(!showAnswer);
    }

    return (
        <Container>
            <header>
                <h3>{question.question}</h3>
                <Button type="button" onClick={handleClick}>
                    {showAnswer ? "Hide Answer" : "Show Answer"}
                </Button>
            </header>
            <main>{showAnswer ? <p>{question.answer}</p> : <p>******</p>}</main>
        </Container>
    );
};
