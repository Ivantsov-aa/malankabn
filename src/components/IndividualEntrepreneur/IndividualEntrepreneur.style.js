import styled from "styled-components";
import { FlexWrap } from "../FlexWrap/FlexWrap";
import { ListItem } from "../Partners/Partners.style";

export const IndividualEntrepreneurStyled = styled.main`
    max-width: 1720px;
    width: 100%;
    margin: 0 auto;
    padding: 0 20px 128px;

    h2 {
        margin: 32px 0;
    }

    .ip-title {
        padding: 54px 0;
        background: url('/images/individual/indivual-bg.png') no-repeat center;
        color: #fff;

        &__text {
            padding-left: 110px;
            max-width: 711px;
        }
    }
`;

export const IndividualEntrepreneurListRegStepsStyled = styled(FlexWrap)`

`;

export const IndividualEntrepreneurListRegStepsItemStyled = styled(FlexWrap)`
    max-width: calc((100% / 3) - (64px / 3));
    border: 1px solid rgba(0, 144, 42, 0.55);
    border-radius: 6px;
    padding: 0 24px;
    padding-top: 58px;
    height: 317px;
    text-align: center;

    a {
        font-weight: inherit;
        font-size: inherit;
        color: #00902A;
    }
`;

export const IndividualEntrepreneurBenefitItemStyled = styled(FlexWrap)`
    .img-wrapper {
        max-width: 120px;
        width: 100vw;
        height: 120px;
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), #FFFFFF;
        border-radius: 50%;
    }
`;

export const IndividualEntrepreneurForWhomItemStyled = styled(ListItem)`
    align-items: flex-start;
    line-height: 24px;
`;