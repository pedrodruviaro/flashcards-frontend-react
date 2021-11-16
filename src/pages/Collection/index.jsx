import React, { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { useParams } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { api } from "../../services/api";
import { SingleQuestion } from "../../components/SingleQuestion";
import { Container } from "./styles";

export const Collection = () => {
    const id = useParams().id;
    const { authorized } = useAuth();

    const [collection, setCollection] = useState(null);

    useEffect(() => {
        (async () => {
            if (authorized) {
                const response = await api.get(`/collection/${id}`);
                if (response.statusText === "OK") {
                    setCollection(response.data);
                    console.log(response.data);
                }
            }
        })();
    }, [authorized, id]);

    return (
        <>
            <Header />
            <Container>
                {collection && (
                    <>
                        <h1>{collection.name}</h1>
                        <div>
                            <h2>{collection.category}</h2>
                            <p>{collection.description}</p>
                        </div>

                        <main>
                            {collection.questions.map((question) => (
                                <SingleQuestion
                                    key={question.id}
                                    question={question}
                                />
                            ))}
                        </main>
                    </>
                )}
            </Container>
        </>
    );
};
