// Write your React code here.
import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {isClicked: false}

  onClickEmoji = () => {
    this.setState({isClicked: true})
  }

  renderOfQuestion() {
    const {resources} = this.props
    const {emojis} = resources
    console.log(resources)
    return (
      <div className="card-container">
        <h1 className="name">
          How Satisfied are you with our customer support performance?
        </h1>
        <ul className="emoji-container">
          {emojis.map(each => (
            <li key={each.id}>
              <button
                type="button"
                className="button"
                onClick={this.onClickEmoji}
              >
                <img
                  src={each.imageUrl}
                  alt={each.name}
                  className="emoji-img"
                />
                <br />
                <span className="emoji-name">{each.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderOfAnswer() {
    const {resources} = this.props
    const {loveEmojiUrl} = resources
    return (
      <div className="result-container">
        <img src={loveEmojiUrl} alt="love emoji" className="love-img" />
        <h1 className="message">Thank you!</h1>
        <p className="text">
          We will use your feedback to improve our customer support performance.
        </p>
      </div>
    )
  }

  render() {
    const {isClicked} = this.state
    return (
      <div className="bg-container">
        <div className="feedback-container">
          {isClicked ? this.renderOfAnswer() : this.renderOfQuestion()}
        </div>
      </div>
    )
  }
}

export default Feedback
