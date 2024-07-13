import Header from '../Header'
import MeetContext from '../../Context/MeetContext'
import {
  RegisterContainer,
  Input,
  Label,
  ButtonContainer,
  Heading,
  Form,
  Image,
  Container,
} from './style'

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

const Register = props => (
  <MeetContext.Consumer>
    {value => {
      const {
        inputText,
        error,
        activeTopic,
        changeTopic,
        changeInput,
        SubmitInput,
      } = value
      const inputName = event => {
        changeInput(event.target.value)
      }
      const selectActiveTopic = event => {
        changeTopic(event.target.value)
      }
      const RegisterNow = event => {
        SubmitInput(event)
      }

      if (inputText !== '') {
        const {history} = props
        history.replace('/')
      }
      return (
        <RegisterContainer>
          <Header />
          <Heading>Let us Join</Heading>
          <Container>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
              alt="website register"
            />
            <Form onSubmit={RegisterNow}>
              <Label htmlFor="name">NAME</Label>
              <Input
                type="text"
                onChange={inputName}
                placeholder="Your Name"
                value={inputText}
                id="name"
                autoComplete="off"
              />
              <Label>TOPICS</Label>
              <select value={activeTopic} onChange={selectActiveTopic}>
                {topicsList.map(each => (
                  <option key={each.id} value={each.id}>
                    {each.displayText}
                  </option>
                ))}
              </select>
              <ButtonContainer type="submit">Register Now</ButtonContainer>
            </Form>
            {error && <p>please enter your name</p>}
          </Container>
        </RegisterContainer>
      )
    }}
  </MeetContext.Consumer>
)

export default Register
