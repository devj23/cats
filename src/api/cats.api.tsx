export function fetchBreeds() {
  return fetch(`https://api.thecatapi.com/v1/breeds`).then((res) => res.json());
}

export function fetchCategories() {
  return fetch(`https://api.thecatapi.com/v1/categories`).then((res) =>
    res.json()
  );
}
export function fetchCatsByBreed(breedIds: string[]) {
  return function () {
    return fetch(
      `https://api.thecatapi.com/v1/images/search?limit=10&has_breeds=1&api_key=${
        import.meta.env.VITE_API_KEY
      }&breed_ids=${breedIds.join(",")}`
    ).then((res) => res.json());
  };
}
export function fetchCatsByCategory(categoryIds: string[]) {
  return function () {
    return fetch(
      `https://api.thecatapi.com/v1/images/search?limit=10&api_key=${
        import.meta.env.VITE_API_KEY
      }&category_ids=${categoryIds.join(",")}`
    ).then((res) => res.json());
  };
}
export function fetchRandomCats() {
  return fetch(
    `https://api.thecatapi.com/v1/images/search?limit=10&has_breeds=1&api_key=${
      import.meta.env.VITE_API_KEY
    }`
  ).then((res) => res.json());
}
