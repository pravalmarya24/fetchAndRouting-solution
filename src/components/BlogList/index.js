import {component} from 'react'
import './index.css'
import BlogItem from '../BlogItem'

// Write your JS code here
class BlogList extends component {
  state = {BlogList: []}

  componentDidMount() {
    this.getBlogList()
  }

  getBlogList = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    console.log(data)
  }

  render() {
    return (
      <div className="blog-list-container">
        {BlogList.map(eachItem => (
          <BlogItem eachListItem={eachItem} key={eachItem.id} />
        ))}
      </div>
    )
  }
}

export default BlogList
