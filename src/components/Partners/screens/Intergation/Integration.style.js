import styled from "styled-components";
import { ListItem } from "../../Partners.style";

export const IntegrationContainer = styled.main`
    max-width: 1720px;
    width: 100%;
    margin: 0 auto;
    padding: 0 20px 128px;

    h2 {
        margin: 32px 0;
    }

    .form-cover {
        max-width: calc(50% - 32px);
    }
`;

export const IntegrationRateButton = styled.button`
    padding: 32px 24px;
    font-size: 16px;
    line-height: 24px;
    max-width: calc((100% / 3) - (64px / 3));
    border: 1px solid #fff;
    border-radius: 6px;

    &:hover {
        color: #000;
        border-color: #00902A;
        box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.11);
    }

    &.active {
        color: #000;
        border-color: #00902A;
        box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.11);
    }

    h3 {
        span {
            color: #00902A;
        }
    }
`;

export const IntegrationListItem = styled(ListItem)`
    align-items: flex-start;
    text-align: left;
`;

export const IntegrationListItemBenefit = styled(ListItem)`
    font-weight: 600;
    align-items: flex-start;
    text-align: left;
    color: #00902A;

    &::before {
        background: url('/images/svg/benefit-icon.svg') no-repeat center;
        max-width: 30px;
        height: 30px;
        border-radius: 50%;
    }
`;