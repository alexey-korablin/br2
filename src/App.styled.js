import styled, { css } from 'styled-components';

const StyledHeader = styled.header`
    height: 10vh;
    border-bottom: 1px solid palevioletred;
`;

const StyledSpan = styled.span`
  color: ${props => props.weekday ? 'palevioletred' : '#999'};
  font-size: ${props => props.weekday ? '38px' : '24px'};
  padding: ${props => props.weekday ? '12px 20px 12px 40px' : '12px 0'};
`;

export { StyledHeader, StyledSpan};

/*
color: ${props => props.color};

или
color: ${props => props.hasColor ? 'black' : 'white'};

=========================================================

const button = css`
  display: block;
` 
затем
const greenButton = css`
  ${button};
 color: green
`

или 
const GreenButton = styled.button`
  ${greenButton};
} */