import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

// Write your JS code here
class BlogItemDetails extends Component {
  state = {BlogsItemDetails: [], isLoading: true}

  componentDidMount() {
    this.getBlogDetails()
  }

  getBlogDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updatedFormat = {
      id: data.id,
      title: data.title,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      author: data.author,
      content: data.content,
      topic: data.topic,
    }
    this.setState({BlogsItemDetails: updatedFormat, isLoading: false})
    console.log(updatedFormat)
  }

  render() {
    const {BlogsItemDetails, isLoading} = this.state
    const {title, imageUrl, avatarUrl, author, content} = BlogsItemDetails
    return (
      <div>
        {isLoading ? (
          <Loader
            type="Tailspin"
            data-testid="loader"
            color="#00BFFF"
            height={50}
            width={50}
          />
        ) : (
          <div className="blog-details-container" data-testid="loader">
            <h1 className="title-heading">{title}</h1>
            <div className="blog-detail-img-para-container">
              <img
                src={avatarUrl}
                alt="avatar"
                className="blog-detail-mini-img-size"
              />
              <p className="blog-detail-para-img">{author}</p>
            </div>
            <img src={imageUrl} alt={title} className="blog-detail-img-size" />
            <p className="content-para">{content}</p>
          </div>
        )}
      </div>
    )
  }
}

export default BlogItemDetails
