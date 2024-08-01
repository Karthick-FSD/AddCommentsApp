import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentItem = props => {
  const {commentDetails, toggleLike, deleteComment} = props
  const {id, name, comment, liked, date, backgroundColorClass} = commentDetails
  const initial = name[0].toUpperCase()
  const likeImgUrl = liked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const onClickLike = () => {
    toggleLike(id)
  }

  const onClickDelete = () => {
    deleteComment(id)
  }

  return (
    <li className="comment-item">
      <div className="comment-header">
        <div className={`profile-initial ${backgroundColorClass}`}>
          <p className="initial">{initial}</p>
        </div>
        <p className="name-time">
          <span className="name">{name}</span>
          <span className="time">
            {formatDistanceToNow(new Date(date))} ago
          </span>
        </p>
      </div>
      <p className="comment-text">{comment}</p>
      <div className="comment-actions">
        <button type="button" className="like-button" onClick={onClickLike}>
          <img src={likeImgUrl} alt="like" className="like-img" />
        </button>
        <button
          type="button"
          className="delete-button"
          data-testid="delete"
          onClick={onClickDelete}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
      <hr />
    </li>
  )
}

export default CommentItem
