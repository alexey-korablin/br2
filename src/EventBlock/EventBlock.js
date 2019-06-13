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
                // console.log('30px solid #de4307');
                return '30px solid #de4307';
            case 'teammate':
                // console.log('30px solid #de4307');
                return '30px solid #f6d04d';
            default:
                return '30px solid #8bc24c';
        }
    }};
`

const EventHeader = ({ subject, gender }) => {
    // console.log(subject, gender);
    let message = 'Pay attention!'
    if (subject.relationship !== 'unknown') {
        message = `Your ${subject.relationship} ${subject.name} today celebrates ${gender === 'male' ? 'his': 'her'} birthday!`
    }
    return (<header>
        <h2>{message}</h2>
    </header>)
}

function getTypeOfDate(date) {
    return null;
}

const EventMessage = ({ relationship, birth }) => {
    console.log(relationship, birth);
    return (<div>
        <p>Your grandmother today is 70! This is big aniversary!</p>
    </div>)
}

const Phone = ({phone}) => {
    const number = phone;
    return (
        <span>
            {applyPhoneNumberMask(number)}
        </span>
    );
}

export const EventBlock = (props) => {
    // console.log(props);
    const {phone, email} = props.value.contacts;
    const social = props.value.contacts.site || props.value.contacts.social[0]['vk']
    const contactType = props.value.contactType;
    return (
        <StyledArticle contact={contactType}>
            <EventHeader subject={props.value.subject} gender={props.value.gender}>
            </EventHeader>
            <EventMessage relationship={props.value.subject.relationship} birth={props.value.birth}>
            </EventMessage>
            <footer>
                <p>Actual contacts here: <Phone phone={phone}></Phone>, 
                    e-mail: {email}, 
                    socials: {social}</p>
                <p>{contactType}</p>
            </footer>
        </StyledArticle>
    );
}