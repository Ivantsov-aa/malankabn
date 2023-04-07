import styled from "styled-components";

export const AdminSettingsContainer = styled.main`
    padding: 20px;
    max-width: 900px;

    h1 {
        margin-bottom: 32px;
    }

    h4 {
        margin-bottom: 16px;
    }
`;

export const AdminSettingsPassword = styled.form`
    display: flex;
    gap: 24px;
    width: 100%;
    margin-bottom: 32px;

    button {
        max-width: 220px;
    }
`;

export const AdminSettingsNewUser = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    width: 50%;
    min-width: 320px;
`;