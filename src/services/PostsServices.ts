export async function getPosts() {
  const response = await fetch("https://tech-test-backend.dwsbrazil.io/posts/");
  return await response.json();
}

export async function getPost(postId?: string) {
  const response = await fetch(
    `https://tech-test-backend.dwsbrazil.io/posts/${postId}`
  );
  return await response.json();
}
