import styled, { createGlobalStyle } from 'styled-components';
import BGImage from "./images/quiz-bg.jpg";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        font-family: 'Catamaran', sans-serif;
    }

    html {
        height: 100%
    }

    body {
        background-image: url(${BGImage});
        background-size: cover;
        background-repeat: no-repeat;
        margin: 0;
        padding: 0 20px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    > p {
        color: white;
    }

    .loading {
        padding: 0.5rem;
        font-size: 1.1rem;
        background: white;
        color: black;
        border: 1px solid black;
        border-radius: 8px;
    }

    .score {
        color: #000000;
        font-size: 1.5rem;
        margin: 1rem 0;
        padding: 20px;
        background: #ffffff;
        border-radius: 8px;
        border: 1px solid #20202f;
    }

    h1 {
        background-image: linear-gradient(180deg, #fff, #87f1ff);
        background-size: 100%;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-background-clip: text;
        -moz-text-fill-color: transparent;
        filter: drop-shadow(2px 2px #0085a3);
        font-size: 70px;
        text-align: center
        margin: 20px;
        margin-block-start: 0;
        margin-block-end: 0;
    }

    .start, .next {
        cursor: pointer;
        background: linear-gradient(180deg, #fff, #87f1ff);
        border: solid 1px #87bbff;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);
        border-radius: 10px;
        height: 40px;
        font-size: 20px;
        margin: 20px 0;
        padding: 0 40px;
    }
`;