import React from 'react'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

const MeetContext = React.createContext({
  inputText: '',
  activeTopic: topicsList[0].id,
  error: false,
  changeTopic: () => {},
  changeInput: () => {},
  SubmitInput: () => {},
})
export default MeetContext
