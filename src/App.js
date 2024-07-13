import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import MeetContext from './Context/MeetContext'
import Home from './components/Home'
import Register from './components/Register'
import './App.css'
import NotFound from './components/NotFound'

// These are the lists used in the application. You can move them to any component needed.
// Replace your code here
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

class App extends Component {
  state = {
    inputText: '',
    activeTopic: topicsList[0].id,
    error: false,
  }

  changeInput = inputText => {
    this.setState({inputText})
  }

  changeTopic = activeTopic => {
    this.setState({activeTopic})
  }

  SubmitInput = event => {
    const {inputText} = this.state
    event.preventDefault()
    console.log(event)
    if (inputText === '') {
      this.setState({error: true})
    } else {
      const {history} = this.props
      history.replace('/')
    }
  }

  render() {
    const {inputText, activeTopic, error} = this.state
    return (
      <MeetContext.Provider
        value={{
          activeTopic,
          inputText,
          error,
          changeInput: this.changeInput,
          changeTopic: this.changeTopic,
          SubmitInput: this.SubmitInput,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </MeetContext.Provider>
    )
  }
}

export default App
