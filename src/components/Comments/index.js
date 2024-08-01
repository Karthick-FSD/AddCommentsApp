import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {
    commentsList: [],
    name: '',
    comment: '',
  }

  onAddComment = event => {
    event.preventDefault()
    const {name, comment} = this.state
    if (name !== '' && comment !== '') {
      const newComment = {
        id: uuidv4(),
        name,
        comment,
        liked: false,
        date: new Date(),
        backgroundColorClass:
          initialContainerBackgroundClassNames[
            Math.floor(
              Math.random() * initialContainerBackgroundClassNames.length,
            )
          ],
      }

      this.setState(prevState => ({
        commentsList: [...prevState.commentsList, newComment],
        name: '',
        comment: '',
      }))
    }
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  toggleLike = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(comment => {
        if (comment.id === id) {
          return {...comment, liked: !comment.liked}
        }
        return comment
      }),
    }))
  }

  deleteComment = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.filter(comment => comment.id !== id),
    }))
  }

  render() {
    const {commentsList, name, comment} = this.state

    return (
      <div className="comments-app">
        <h1 className="heading">Comments</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
          alt="comments"
          className="comments-img"
        />
        <p className = "description">Say Something about 4.0 Technologies</p>
        <form className="input-container">
          <input
            type="text"
            placeholder="Your Name"
            className="input"
            value={name}
            onChange={this.onChangeName}
          />
          <textarea
            placeholder="Your Comment"
            className="textarea"
            value={comment}
            onChange={this.onChangeComment}
          />
          <button
            type="button"
            className="add-button"
            onClick={this.onAddComment}
          >
            Add Comment
          </button>
        </form>
        <hr />
        <div className="comments-container">
          <p className="comments-count">{commentsList.length} Comments</p>
          <ul className="comments-list">
            {commentsList.map(eachComment => (
              <CommentItem
                key={eachComment.id}
                commentDetails={eachComment}
                toggleLike={this.toggleLike}
                deleteComment={this.deleteComment}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
