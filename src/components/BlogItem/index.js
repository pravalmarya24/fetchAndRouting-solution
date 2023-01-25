import {Link} from 'react-router-dom'
import './index.css'

// Write your JS code here
const BlogItem = props => {
  const {eachListItem} = props
  const {title, imageUrl, avatarUrl, author, topic, id} = eachListItem
  return (
    <Link to={`/blogs/${id}`}>
      <li className="blog-list">
        <div data-testid="loader">
          <img src={imageUrl} alt="imgUrl" className="img-size" />
        </div>
        <div className="description-para">
          <p className="para">{topic}</p>
          <h1 className="heading">{title}</h1>
          <div className="img-para-container">
            <img src={avatarUrl} alt="avatar" className="mini-img-size" />
            <p className="para-img">{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default BlogItem
