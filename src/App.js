import {Component} from 'react'
import './App.css'

// These are the list used in the application. You can move them to any component needed.
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

class App extends Component {
  state = {neededList: initialHistoryList, searchInput: ''}

  onDelete = value => {
    const {neededList} = this.state
    const newList = neededList.filter(each => each.id !== value)
    this.setState({neededList: newList})
  }

  onSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput, neededList} = this.state
    const searchResponse = neededList.filter(each =>
      each.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    const lengthOfArr = searchResponse.length !== 0
    return (
      <div className="bg-container">
        <div className="container1">
          <img
            className="app-logo"
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
          />

          <button className="button1" type="button">
            <img
              alt=" search"
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
            />
          </button>
          <input
            className="input-element"
            placeholder="Search History"
            type="search"
            onChange={this.onSearch}
            value={searchInput}
          />
        </div>
        {lengthOfArr && (
          <div className="main-con">
            <ul className="container2">
              {searchResponse.map(each => (
                <li className="list-container" key={each.id}>
                  <div className="container3 ">
                    <p className="time-element">{each.timeAccessed}</p>
                    <div className="container3">
                      <img
                        className="img1"
                        alt="domain logo"
                        src={each.logoUrl}
                      />
                      <p className="title">{each.title}</p>
                      <p className="p1">{each.domainUrl}</p>
                    </div>
                  </div>
                  <div>
                    <button
                      data-testid="delete"
                      className="button2"
                      type="button"
                      onClick={() => this.onDelete(each.id)}
                    >
                      <img
                        className="delete-icon"
                        src="https://assets.ccbp.in/frontend/react-js/delete-img.png "
                        alt="delete"
                        key={each.id}
                      />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
        {!lengthOfArr && (
          <div className="main-con1">
            <p className="head">There is no history to show</p>
          </div>
        )}
      </div>
    )
  }
}

export default App
