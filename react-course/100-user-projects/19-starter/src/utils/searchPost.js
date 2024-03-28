export default function getSearchPost(searchQuery, posts) {
  if (searchQuery.length > 0) {
    return posts.filter((post) =>
      `${post.title} ${post.body}`
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    );
  }
  return posts;
}
