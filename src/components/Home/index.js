import {Link} from 'react-router-dom'
import Header from '../Header'
import MeetContext from '../../Context/MeetContext'
import {HomeContainer, Para, ButtonContainer, Image, Heading} from './style'

const Home = () => (
  <MeetContext.Consumer>
    {value => {
      const {inputText, activeTopic} = value

      return (
        <HomeContainer>
          <Header />
          {inputText === '' ? (
            <div>
              <Heading>Welcome to Meetup</Heading>
              <Para>Please Register for the topic</Para>
            </div>
          ) : (
            <div>
              <Heading>Welcome to {inputText}</Heading>
              <Para>Welcome to {activeTopic}</Para>
            </div>
          )}
          <Link to="/register">
            <ButtonContainer type="button">Register</ButtonContainer>
          </Link>
          <Image
            src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
            alt="meetup"
          />
        </HomeContainer>
      )
    }}
  </MeetContext.Consumer>
)
export default Home
