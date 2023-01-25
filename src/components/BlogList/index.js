import {Component} from 'react'
import './index.css'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import BlogItem from '../BlogItem'

// Write your JS code here
class BlogList extends Component {
  state = {BlogsList: [], isLoader: true}

  componentDidMount() {
    this.getBlogList()
  }

  getBlogList = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const updatedFormat = data.map(each => ({
      id: each.id,
      title: each.title,
      imageUrl: each.image_url,
      avatarUrl: each.avatar_url,
      author: each.author,
      content: each.content,
      topic: each.topic,
    }))
    this.setState({BlogsList: updatedFormat, isLoader: false})
  }

  render() {
    const {BlogsList, isLoader} = this.state
    return (
      <div className="blog-list-container">
        {isLoader ? (
          <Loader
            type="Tailspin"
            data-testid="loader"
            color="#00BFFF"
            height={50}
            width={50}
          />
        ) : (
          <ul className="unordered-list">
            {BlogsList.map(eachItem => (
              <BlogItem eachListItem={eachItem} key={eachItem.id} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default BlogList
