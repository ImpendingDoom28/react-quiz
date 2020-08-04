import styled from "styled-components";

const divBorderColor = '#20202f';

export const Wrapper = styled.div`
    max-width: 800px;
    background: #FFF;
    border-radius: 8px;
    border: 1px solid ${divBorderColor};
    padding: 15px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    text-align: center;

    p {
        font-size: 1.25rem;
    }
`;

type ButtonWrapperProps = {
    correct: boolean;
    userClicked: boolean;
}

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
    transition: all 0.3s ease;
    :hover {
        opacity: 0.8;
    }

    button {
        cursor: pointer;
        user-select: none;
        font-size: 1rem;
        width 100%;
        height: 55px;
        margin: 5px 0; 
        background: ${({ correct, userClicked }) =>
        correct
            ? 'linear-gradient(90deg, #56ffa4, #59bc86)'
            : (!correct && userClicked
                ? 'linear-gradient(90deg, #ff5656, #c16868)'
                : '#9696'
            )};
        border: 1px solid ${divBorderColor};
        border-radius: 8px;
        color: #000000;
        text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
        box-shadow: 1px 2px 0px rgba(0,0,0,0.25);
    }
`;