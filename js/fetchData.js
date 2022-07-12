export const fetchData = async (url) => {
  const response = await fetch(url, {
    Authorization: `token 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`,
    Acccept: `application/vnd.github+json`,
  });
  return await response.json();
};
