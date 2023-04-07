import styled from "styled-components";

export const AppLinksWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
`;

export const AppLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    background: #000;
    border-radius: 6px;
    color: #fff;
    padding: 8px 0;
    width: 198px;

    p {
        @include font-params(500, 12px, 15px);

        &:last-child {
            @include font-params(600, 20px, 24px);
            margin-top: 2px;
        }
    }
`;