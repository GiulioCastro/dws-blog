export async function getAuthors() {
  const response = await fetch(
    "https://tech-test-backend.dwsbrazil.io/authors/"
  );
  return await response.json();
}

export async function getAuthor(authorId: string) {
  const response = await fetch(
    `https://tech-test-backend.dwsbrazil.io/authors/${authorId}`
  );
  return await response.json();
}
