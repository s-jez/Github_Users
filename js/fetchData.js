const TOKEN = "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";

export const fetchData = async (url = "") => {
  const response = await fetch(url, {
    Accept: "application/vnd.github.v3+json",
    Authorization: `token ${TOKEN}`,
  });
  if (!response.ok) {
    const error = new Error("User not found!!!");
    throw error;
  }
  return await response.json();
};
