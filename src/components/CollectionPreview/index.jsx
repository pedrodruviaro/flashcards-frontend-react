import moment from "moment";
import { useNavigate } from "react-router";
import { Container } from "./styles";

export const CollectionPreview = ({ collection }) => {
    const navigate = useNavigate();

    return (
        <Container onClick={() => navigate(`/collection/${collection.id}`)}>
            <header>
                <h3>{collection.name}</h3>
                <p>{collection.description}</p>
            </header>
            <main>
                <span>{collection.category}</span>
                <span>{moment(collection.createdAt).format("YYY Do MMM")}</span>
            </main>
            <footer>
                <p>{collection.public ? "Public" : "Not public"}</p>
            </footer>
        </Container>
    );
};
