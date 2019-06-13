import React from 'react';
// import styled from 'styled-components';
// import logo from './logo.svg';
import { StyledHeader, StyledSpan } from './App.styled';
import { EventBlock } from './EventBlock';
import './App.css';

const monthsMap = {
  0: 'January',
  1: 'February',
  2: 'March',
  3: 'April',
  4: 'May',
  5: 'June',
  6: 'July',
  7: 'August',
  8: 'September',
  9: 'October',
  10: 'November',
  11: 'December'
};

const weekDaysMap = {
  0: 'Sunday',
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wednesday',
  4: 'Thursday',
  5: 'Friday',
  6: 'Saturday'
}

function getCurrentMonth(date) {
  return monthsMap[date.getMonth()];
}

function getCurrentWeekDay(date) {
  return weekDaysMap[date.getDay()];
}

function getCurrentDay(date) {
  return date.getDate();
}

function getCurrentDate() {
  const date = new Date();
  const currentMonth = getCurrentMonth(date);
  const currentWeekDay = getCurrentWeekDay(date);
  const currentDay = getCurrentDay(date);

  return {currentWeekDay, currentMonth, currentDay};
}

function DateHeader() {
  const {currentWeekDay, currentMonth, currentDay} = getCurrentDate();
  return <div className="full-screen-tile__date-header">
      <StyledSpan weekday>{currentWeekDay},</StyledSpan>
      <StyledSpan month>{currentMonth} </StyledSpan>
      <StyledSpan day>{currentDay}</StyledSpan></div>
}

const data = [
  {
    id: 1,
    contactType: 'closeRelative',
    subject: {
      name: 'Sara',
      relationship: 'grandmother',
    },
    birth: -646542000000,
    gender: 'female',
    contacts: {
      phone: 123456789,
      email: 'grandma@example.com',
      social: [
        {
          vk: 'https://vk.com/grndma'
        }
      ]
    }
  },
  {
    id: 2,
    contactType: 'teammate',
    subject: {
      name: 'Bob',
      relationship: 'friend',
    },
    birth: -204778800000,
    gender: 'male',
    contacts: {
      phone: 222222222,
      email: 'dude@example.ru',
      social: [
        {
          vk: 'https://vk.com/dude',
          fb: 'https://facebook.com/cooldude'
        }
      ]
    }
  },
  {
    id: 3,
    contactType: 'other',
    subject: {
      name: 'unknown',
      relationship: 'unknown',
    },
    birth: 0,
    contacts: {
      phone: 333333333,
      email: 'test@example.org',
      site: 'https://someone-site.ua'
    }
  }
]

function App() {
  return <div className='full-screen-tile'>
    <StyledHeader>
      <DateHeader></DateHeader>
    </StyledHeader>
    <main>
      {data.map(item => {
        return (<EventBlock key={item.id} value={item}>
          test
        </EventBlock>);
      })}
      {/* <StyledArticle teammate>
        <header>
          <h2>Today is your teammate Fill's birthday! Don't forget to congrat him!</h2>
        </header>
        <div>
          <p>Fill today is 56!</p>
        </div>
        <footer>
          <p>Actual contacts here: [phone_number], [email], [social_network_link]</p>
        </footer>
      </StyledArticle>
      <StyledArticle>
        <header>
          <h2>Today is someone else celebs his birth!</h2>
        </header>
        <div>
          <p>You can be just good for him!</p>
        </div>
        <footer>
          <p>Actual contacts here: [phone_number], [email], [social_network_link]</p>
        </footer>
      </StyledArticle> */}
    </main>
  </div>
}

export default App;
