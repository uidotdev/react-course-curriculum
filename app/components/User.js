import React from 'react'
import queryString from 'query-string'
import { fetchUser, fetchPosts } from '../utils/api'
import Loading from './Loading'
import { formatDate } from '../utils/helpers'
import PostsList from './PostsList'

export default class Post extends React.Component {
  state = {
    user: null,
    loadingUser: true,
    posts: null,
    loadingPosts: true,
    error: null,
  }
  componentDidMount() {
    const { id } = queryString.parse(this.props.location.search)

    fetchUser(id)
      .then((user) => {
        this.setState({ user, loadingUser: false})

        return fetchPosts(user.submitted.slice(0, 30))
      })
      .then((posts) => this.setState({
        posts,
        loadingPosts: false,
        error: null
      }))
      .catch(({ message }) => this.setState({
        error: message,
        loadingUser: false,
        loadingPosts: false
      }))
  }
  render() {
    const { user, posts, loadingUser, loadingPosts, error } = this.state

    if (error) {
      return <p className='center-text error'>{error}</p>
    }

    return (
      <React.Fragment>
        {loadingUser === true
          ? <Loading text='Fetching User' />
          : <React.Fragment>
              <h1 className='header'>{user.id}</h1>
              <div className='meta-info-light'>
                <span>joined <b>{formatDate(user.created)}</b></span>
                <span>has <b>{user.karma.toLocaleString()}</b> karma</span>
              </div>
              <p dangerouslySetInnerHTML={{__html: user.about}} />
            </React.Fragment>}
        {loadingPosts === true
          ? loadingUser === false && <Loading text='Fetching posts'/>
          : <React.Fragment>
              <h2>Posts</h2>
              <PostsList posts={posts} />
            </React.Fragment>}
      </React.Fragment>
    )
  }
}