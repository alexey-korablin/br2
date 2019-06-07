import React from 'react';
import styled from 'styled-components';

const EventBlock = (props) => {
    console.log(props);
    return (
        <article>
            <header>
                <h2>Today is your grandmother's birthday! Don't forget to congrat her!</h2>
            </header>
            <div>
                <p>Your grandmother today is 70! This is big aniversary!</p>
            </div>
            <footer>
                <p>Actual contacts here: [phone_number], [email], [social_network_link]</p>
                <p>{props.children}</p>
            </footer>
        </article>
    );
}

export const StyledArticle = styled(EventBlock)`
    color: palevioletred;
    /* padding-left: 30px; */
    /* border-left: ${props => {
        console.log(props);
        if (props.closeRelative) {
            console.log('30px solid #de4307');
            return '30px solid #de4307';
        } else if (props.teammate) {
            return '30px solid #f6d04d';
        } else {
            return '30px solid #8bc24c';
        }
    }}; */
`;

// export { StyledArticle };