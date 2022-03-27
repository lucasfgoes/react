export const loadPosts = async ()=>{
  const responsePosts = fetch("https://jsonplaceholder.typicode.com/posts");
    const responsePhotos = fetch("https://jsonplaceholder.typicode.com/photos");

    const [posts, photos] = await Promise.all([responsePosts, responsePhotos]);

    const jsonPosts = await posts.json();
    const jsonPhotos = await photos.json();

    const postsAndPhotos = jsonPosts.map((post, index) => ({
      ...post,
      cover: jsonPhotos[index].url,
    }));

    return postsAndPhotos;
}