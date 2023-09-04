
import {Component} from 'react';
import HistoryItem from './historyitem';

import "./index.css";

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
    title: "Twitter. It's what's happening / Twitter",
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook - log in or sign up',
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
    title: 'React - A JavaScript library for building user interfaces',
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

class HistoryResults extends Component {
  state = {searchInput: '', finalList: initialHistoryList}

  searchItems = event => {
    this.setState({searchInput: event.target.value})
  }

  deleteObject = id => {
    const {finalList} = this.state
    const filteredList = finalList.filter(eachObject => eachObject.id !== id)

    this.setState({finalList: filteredList})
  }

  render() {
    const {searchInput, finalList} = this.state
    const searchResults = finalList.filter(eachObject =>
      eachObject.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    let listItems
    if (searchResults.length !== 0) {
      listItems = (
        <div className="list-bg-container">
          <ul className="list-container">
            {searchResults.map(eachObject => (
              <HistoryItem
                eachObject={eachObject}
                key={eachObject.id}
                deleteObject={this.deleteObject}
              />
            ))}
          </ul>
        </div>
      )
    } else {
      listItems = (
        <div className="no-container">
          <p className="no-history">There is no history to Show</p>
        </div>
      )
    }

    return (
      <div className="bg-container">
        <div className="navbar-container">
          <h1 className='history-heading-logo'>History</h1>
          <div className="search-container">
            <div className="search-icon-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
                className="search-icon"
              />
            </div>
            <input
              type="search"
              placeholder="Search history"
              className="search-bar"
              onChange={this.searchItems}
            />
          </div>
        </div>
        {listItems}
      </div>
    )
  }
}

export default HistoryResults;