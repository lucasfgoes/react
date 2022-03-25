import { Component } from "react";

import "./styles.css";

import { Posts } from "../../components/Posts";
import { Button } from "../../components/Button";
import { loadposts } from "../../utils/load-posts";

class Home extends Component {
  state = {
    posts: null,
    allPosts: [],
    page: 0,
    postsPerPage: 25,
  };

  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const { page, postsPerPage } = this.state;
    const postsAndPhotos = await loadposts();
    this.setState({
      posts: postsAndPhotos.slice(page, postsPerPage),
      allPosts: postsAndPhotos,
    });
  };

  loadMorePosts = () => {
    const { posts, allPosts, page, postsPerPage } = this.state;
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);
    this.setState({ posts, page: nextPage });
  };

  render() {
    const { posts, page, postsPerPage, allPosts } = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length;

    return (
      <section className="container">
        <Posts posts={posts} />
        <div className="button-container">
          <Button
            disabled={noMorePosts}
            text="Load more posts"
            onClick={this.loadMorePosts}
          />
        </div>
      </section>
    );
  }
}

export default Home;
