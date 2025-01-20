export async function getCategories() {
  const response = await fetch(
    "https://tech-test-backend.dwsbrazil.io/categories/"
  );
  return await response.json();
}

export async function getCategory(categoryId: string) {
  const response = await fetch(
    `https://tech-test-backend.dwsbrazil.io/categories/${categoryId}`
  );
  return await response.json();
}
