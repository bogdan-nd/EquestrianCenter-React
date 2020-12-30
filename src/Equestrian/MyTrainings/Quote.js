import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components"
import { useAuth0 } from '@auth0/auth0-react';

const QuoteStyle = styled.div`
  margin-left: 1000px;
  margin-top: 20px;
`;

export default function Quote() {
    return (
        <QuoteStyle>
            <p>No hour of life is wasted that is spent in the saddle.</p>
            <figcaption className={"churchill-quote"}>
                <cite title="Source Title">Winston Churchill</cite>
            </figcaption>
        </QuoteStyle>
    )
}