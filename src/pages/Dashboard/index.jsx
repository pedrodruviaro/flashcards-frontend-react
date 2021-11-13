import React, { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Container } from "./styles";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/useAuth";
import { CollectionPreview } from "../../components/CollectionPreview";

export const Dashboard = () => {
    const [collections, setCollections] = useState([]);
    const { authorized } = useAuth();

    useEffect(() => {
        (async () => {
            if (authorized) {
                const response = await api.get("/collection");
                if (response.statusText === "OK") {
                    setCollections(response.data);
                }
            }
        })();
    }, [authorized]);

    return (
        <>
            <Header />
            <Container>
                <h1>Dashboard</h1>

                <section>
                    {collections.map((collection) => (
                        <CollectionPreview
                            key={collection.id}
                            collection={collection}
                        />
                    ))}
                </section>
            </Container>
        </>
    );
};
