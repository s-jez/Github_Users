const accessToken = "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";

export const fetchData = async (url) => {
  const response = await fetch(url, {
    Acccept: `application/vnd.github+json`,
    Authorization: "token " + accessToken,
  });
  if (!response.ok) {
    const error = new Error("User not found!!!");
    throw error;
  }
  return await response.json();
};
