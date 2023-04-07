import { Link } from "react-router-dom";
import styled from "styled-components";

export const AdminPagesListContainer = styled.main`
    width: 100%;
    max-width: 1720px;
    padding: 20px;
    margin: 0 auto;

    h1 {
        margin-bottom: 32px;
    }
`;

export const PagesListFlex = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 32px;
`;

export const PagesListItem = styled(Link)`
    max-width: calc((100% / 3) - 24px);
    width: 100%;
    border-radius: 20px;
    padding: 16px;
    border: 1px solid #7A7A95;

    .img-wrapper {
        max-height: 500px;
        width: 100%;
        object-fit: cover;
        overflow-y: scroll;
        margin-bottom: 16px;

        &::-webkit-scrollbar {
            display: none;
        }
    }

    &:hover {
        border-color: #71C370;
    }
`