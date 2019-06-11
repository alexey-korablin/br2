import React from 'react';
import styled from 'styled-components';

function applyPhoneNumberMask(phoneNumber) {
    const stringedNumber = phoneNumber.toString();
    return `${stringedNumber.slice(0, 1)} (${stringedNumber.slice(1, 3)}) ${stringedNumber.slice(3, 5)}-${stringedNumber.slice(5, 7)}-${stringedNumber.slice(7)}`
}

const StyledArticle = styled.article`
    padding-left: 30px;
    border-left: ${props => {
        console.log(props);
        switch(props.contact) {
            case 'closeRelative':
                console.log('30px solid #de4307');
                return '30px solid #de4307';
            case 'teammate':
                console.log('30px solid #de4307');
                return '30px solid #f6d04d';
            default:
                return '30px solid #8bc24c';
        }
    }};
`

const Phone = ({phone}) => {
    const number = phone;
    return (
        <span>
            {applyPhoneNumberMask(number)}
        </span>
    );
}

export const EventBlock = (props) => {
    console.log(props);
    const {phone, email, site, social} = props.value.contacts;
    const contactType = props.value.contactType;
    return (
        <StyledArticle contact={contactType}>
            <header>
                <h2>Today is your grandmother's birthday! Don't forget to congrat her!</h2>
            </header>
            <div>
                <p>Your grandmother today is 70! This is big aniversary!</p>
            </div>
            <footer>
                <p>Actual contacts here: <Phone phone={phone}></Phone>, 
                    e-mail: {email}, 
                    socials: {site}</p>
                <p>{contactType}</p>
            </footer>
        </StyledArticle>
    );
}