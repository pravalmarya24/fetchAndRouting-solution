// Write your JS code here
import './index.css'


// Write your JS code here
const BlogItem = (props)=>{
    return(
        <div className="blog-img-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
            alt="wave"
            className="img-size"
          />
        </div>
        <div className="description-para">
          <p className="para">React.js</p>
          <h1 className="heading">Heading</h1>
          <div className="img-para-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
              alt="wave_1"
              className="mini-img-size"
            />
            <p className="para-img">React.js</p>
          </div>
        </div>
    )
    }

export default BlogItem
