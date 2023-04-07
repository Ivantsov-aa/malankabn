import styled from "styled-components";

export const AdminSidebarStyled = styled.aside`
    position: fixed;
    height: 100vh;
    top: 0;
    left: 0;
    background: #fff;
    z-index: 100;
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.3);

    ul {
        gap: 0;
    }

    li {
        position: relative;
        transition: all .3s ease;
        
        a, button {
            display: flex;
            align-items: center;
            padding: 30px;
            color: #71C370;

            img {
                width: 50px;
            }

            span {
                font-size: 20px;
                position: absolute;
                top: 0;
                left: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                white-space: nowrap;
                left: 100%;
                height: 100%;
                max-width: 0;
                overflow: hidden;
                background: #fff;
                font-weight: 600;
                border-radius: 0 20px 20px 0;
                opacity: 0;
                transition: all .3s ease;
            }
        }

        &.active {
            background: linear-gradient(271.12deg, rgb(111, 190, 110) 0%, rgb(139, 235, 138) 100%);
            
            a {
                color: #fff;
            }

            span {
                background: linear-gradient(271.12deg, rgb(111, 190, 110) 0%, rgb(139, 235, 138) 100%);
            }
        }

        &:hover {         
            box-shadow: 0 2px 3px 1px rgba(0, 0, 0, 0.15);

            a, button {
                span {
                    box-shadow: 3px 3px 2px 1px rgba(0, 0, 0, 0.15);
                    width: 100vw;
                    max-width: 210px;
                    color: #71C370;
                    opacity: 1;
                }
            }

            &.active {
                background: rgb(139, 235, 138);

                span {
                    color: #fff;
                }
            }
        }

        &::before {
            display: none;
        }
    }
`;