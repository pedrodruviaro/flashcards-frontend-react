import moment from "moment";
import { Container } from "./styles";

export const CollectionPreview = ({ collection }) => {
    return (
        <Container>
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
