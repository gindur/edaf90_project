const base = import.meta.env.VITE_API_BASE_URL;
        const bearer = import.meta.env.VITE_API_BEARER;

const baseUrl = new URL(base);

function safeFetchJson(url) {
  return fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${bearer}`,
    },
  }).then((response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
}

export default safeFetchJson;
