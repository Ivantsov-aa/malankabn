import styled from "styled-components";

export const WhiteLabelStyled = styled.main`
    max-width: 1720px;
    width: 100%;
    margin: 0 auto;
    padding: 0 20px 128px;

    .wl-title {
        margin: 32px 0;

        p {
            font-size: 16px;
            line-height: 24px;
        }
    }
`;

export const WhiteLabelListStyled = styled.ul`
    flex-direction: row;
    width: 100%;
`;

export const WhiteLabelListItemStyled = styled.li`
    flex-direction: column;
    align-items: flex-start;
    width: calc(100% / 4);
    padding: 0 32px;
    border-right: 1px solid #C0C0DB;

    &::before {
        display: none;
    }

    h4 {
        text-transform: uppercase;
    }

    h6 {
        color: #7A7A95;
    }

    &:first-child {
        padding-left: 0;
    }

    &:last-child {
        padding-right: 0;
        border-right: 0;
    }
`;