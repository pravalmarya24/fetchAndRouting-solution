import {Route, Switch} from 'react-router-dom'

import Header from './components/Header'
import About from './components/About'
import Contact from './components/Contact'
import NotFound from './components/NotFound'
import UserInfo from './components/UserInfo'
import Bloglist from './components/BlogList'
import BlogsItemDetails from './components/BlogItemDetails'
import './App.css'

const App = () => (
  <div className="app-container" data-testid="loader">
    <div className="responsive-container">
      <Header />
      <UserInfo />
      <div className="app-body">
        <Switch>
          <Route exact path="/" component={Bloglist} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route path="/blogs/:id" component={BlogsItemDetails} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  </div>
)

export default App
