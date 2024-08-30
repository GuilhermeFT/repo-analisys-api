const githubAPI = "https://api.github.com/";
const githubUser = "guilhermeft";
const githubRepo = "guilhermeft-portfolio";

const getUrl = (path) => {
  return new URL(path, githubAPI).toString();
};

const getGithubContent = async () => {
  const path = `repos/${githubUser}/${githubRepo}/contents`;
  const url = getUrl(path);

  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const getRepositoryLanguages = async () => {
  const path = `repos/${githubUser}/${githubRepo}/languages`;
  const url = getUrl(path);

  const response = await fetch(url);
  const data = await response.json();

  const languages = Object.keys(data);

  const totalBytes = Object.values(data).reduce((acc, value) => acc + value, 0);

  const languagesData = languages.reduce((acc, language) => {
    const bytes = data[language];
    const percentage = (bytes / totalBytes) * 100;

    if (percentage < 1) {
      acc["Other"] = (acc["Other"] || 0) + percentage;

      return acc;
    }

    acc[language] = percentage;
    return acc;
  }, {});

  return languagesData;
};
