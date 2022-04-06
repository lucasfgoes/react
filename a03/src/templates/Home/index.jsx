import { useState, useEffect, useCallback } from "react";
import "./styles.css";

import { loadPosts } from "../../utils/load-posts";
import { Posts } from "../../components/Posts";
import { Button } from "../../components/Button";
import { TextInput } from "../../components/TextInput";

export const Home = () => {
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [postsPerPage] = useState(3);
  const [searchValue, setSearchValue] = useState("");

  const handleLoadPosts = useCallback(async (page, postsPerPage) => {
    const postsAndPhotos = await loadPosts();
    setPosts(postsAndPhotos.slice(page, postsPerPage));
    setAllPosts(postsAndPhotos);
  }, []);

  useEffect(() => handleLoadPosts(0, postsPerPage), [handleLoadPosts, postsPerPage]);

  const loadMorePosts = () => {
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);
    setPosts(posts);
    setPage(nextPage);
  };

  const handleChange = e => {
    const { value } = e.target;
    setSearchValue(value);
  };

  const noMorePosts = page + postsPerPage >= allPosts.length;

  const filteredPosts =
    !!searchValue ? allPosts.filter(
      post => post.title.toLowerCase().includes(searchValue.toLowerCase())
    ) : posts;

  return (
    <section className="container">

      <div className="seach-container">
        {!!searchValue && <h1>Search value: {searchValue}</h1>}
        <TextInput onChange={handleChange} searchValue={searchValue} />
      </div>

      {filteredPosts.length > 0 && <Posts posts={filteredPosts} />}
      {filteredPosts.length === 0 && <p>Não existem posts.</p>}

      <div className="button-container">
        {!searchValue && (
          <Button
            disabled={noMorePosts}
            text="Load more posts"
            onClick={loadMorePosts}
          />
        )}
      </div>

    </section>
  );
};
