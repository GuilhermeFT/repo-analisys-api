const githubAPI = "https://api.github.com/";
const githubUser = "guilhermeft";
const githubRepo = "guilhermeft-portfolio";

const getUrl = (path) => {
  return new URL(path, githubAPI).toString();
};

export const getGithubContent = async () => {
  const path = `repos/${githubUser}/${githubRepo}/contents`;
  const url = getUrl(path);

  //const response = await fetch(url);
  //const data = await response.json();
  return [
    {
      name: ".eslintrc.json",
      path: ".eslintrc.json",
      sha: "d9a23abc2f59e447d4a4e5203d26fab6cdfe81ed",
      size: 611,
      url: "https://api.github.com/repos/GuilhermeFT/guilhermeft-portfolio/contents/.eslintrc.json?ref=main",
      html_url:
        "https://github.com/GuilhermeFT/guilhermeft-portfolio/blob/main/.eslintrc.json",
      git_url:
        "https://api.github.com/repos/GuilhermeFT/guilhermeft-portfolio/git/blobs/d9a23abc2f59e447d4a4e5203d26fab6cdfe81ed",
      download_url:
        "https://raw.githubusercontent.com/GuilhermeFT/guilhermeft-portfolio/main/.eslintrc.json",
      type: "file",
      _links: {
        self: "https://api.github.com/repos/GuilhermeFT/guilhermeft-portfolio/contents/.eslintrc.json?ref=main",
        git: "https://api.github.com/repos/GuilhermeFT/guilhermeft-portfolio/git/blobs/d9a23abc2f59e447d4a4e5203d26fab6cdfe81ed",
        html: "https://github.com/GuilhermeFT/guilhermeft-portfolio/blob/main/.eslintrc.json",
      },
    },
    {
      name: ".gitignore",
      path: ".gitignore",
      sha: "fd3dbb571a12a1c3baf000db049e141c888d05a8",
      size: 391,
      url: "https://api.github.com/repos/GuilhermeFT/guilhermeft-portfolio/contents/.gitignore?ref=main",
      html_url:
        "https://github.com/GuilhermeFT/guilhermeft-portfolio/blob/main/.gitignore",
      git_url:
        "https://api.github.com/repos/GuilhermeFT/guilhermeft-portfolio/git/blobs/fd3dbb571a12a1c3baf000db049e141c888d05a8",
      download_url:
        "https://raw.githubusercontent.com/GuilhermeFT/guilhermeft-portfolio/main/.gitignore",
      type: "file",
      _links: {
        self: "https://api.github.com/repos/GuilhermeFT/guilhermeft-portfolio/contents/.gitignore?ref=main",
        git: "https://api.github.com/repos/GuilhermeFT/guilhermeft-portfolio/git/blobs/fd3dbb571a12a1c3baf000db049e141c888d05a8",
        html: "https://github.com/GuilhermeFT/guilhermeft-portfolio/blob/main/.gitignore",
      },
    },
    {
      name: ".prettierrc.json",
      path: ".prettierrc.json",
      sha: "b0e82cb42b8338044cb9c8c546700251415c8f3a",
      size: 97,
      url: "https://api.github.com/repos/GuilhermeFT/guilhermeft-portfolio/contents/.prettierrc.json?ref=main",
      html_url:
        "https://github.com/GuilhermeFT/guilhermeft-portfolio/blob/main/.prettierrc.json",
      git_url:
        "https://api.github.com/repos/GuilhermeFT/guilhermeft-portfolio/git/blobs/b0e82cb42b8338044cb9c8c546700251415c8f3a",
      download_url:
        "https://raw.githubusercontent.com/GuilhermeFT/guilhermeft-portfolio/main/.prettierrc.json",
      type: "file",
      _links: {
        self: "https://api.github.com/repos/GuilhermeFT/guilhermeft-portfolio/contents/.prettierrc.json?ref=main",
        git: "https://api.github.com/repos/GuilhermeFT/guilhermeft-portfolio/git/blobs/b0e82cb42b8338044cb9c8c546700251415c8f3a",
        html: "https://github.com/GuilhermeFT/guilhermeft-portfolio/blob/main/.prettierrc.json",
      },
    },
    {
      name: "README.md",
      path: "README.md",
      sha: "c4033664f80d3cb9cb687fb5facbc82aedb302f6",
      size: 1383,
      url: "https://api.github.com/repos/GuilhermeFT/guilhermeft-portfolio/contents/README.md?ref=main",
      html_url:
        "https://github.com/GuilhermeFT/guilhermeft-portfolio/blob/main/README.md",
      git_url:
        "https://api.github.com/repos/GuilhermeFT/guilhermeft-portfolio/git/blobs/c4033664f80d3cb9cb687fb5facbc82aedb302f6",
      download_url:
        "https://raw.githubusercontent.com/GuilhermeFT/guilhermeft-portfolio/main/README.md",
      type: "file",
      _links: {
        self: "https://api.github.com/repos/GuilhermeFT/guilhermeft-portfolio/contents/README.md?ref=main",
        git: "https://api.github.com/repos/GuilhermeFT/guilhermeft-portfolio/git/blobs/c4033664f80d3cb9cb687fb5facbc82aedb302f6",
        html: "https://github.com/GuilhermeFT/guilhermeft-portfolio/blob/main/README.md",
      },
    },
    {
      name: "customtypes",
      path: "customtypes",
      sha: "8d35621371610483afc6a0b5e578604fb2408ca4",
      size: 0,
      url: "https://api.github.com/repos/GuilhermeFT/guilhermeft-portfolio/contents/customtypes?ref=main",
      html_url:
        "https://github.com/GuilhermeFT/guilhermeft-portfolio/tree/main/customtypes",
      git_url:
        "https://api.github.com/repos/GuilhermeFT/guilhermeft-portfolio/git/trees/8d35621371610483afc6a0b5e578604fb2408ca4",
      download_url: null,
      type: "dir",
      _links: {
        self: "https://api.github.com/repos/GuilhermeFT/guilhermeft-portfolio/contents/customtypes?ref=main",
        git: "https://api.github.com/repos/GuilhermeFT/guilhermeft-portfolio/git/trees/8d35621371610483afc6a0b5e578604fb2408ca4",
        html: "https://github.com/GuilhermeFT/guilhermeft-portfolio/tree/main/customtypes",
      },
    },
    {
      name: "next.config.mjs",
      path: "next.config.mjs",
      sha: "1b3d3a929b8ce22d70ea7c2edc430b310a2ff7bb",
      size: 214,
      url: "https://api.github.com/repos/GuilhermeFT/guilhermeft-portfolio/contents/next.config.mjs?ref=main",
      html_url:
        "https://github.com/GuilhermeFT/guilhermeft-portfolio/blob/main/next.config.mjs",
      git_url:
        "https://api.github.com/repos/GuilhermeFT/guilhermeft-portfolio/git/blobs/1b3d3a929b8ce22d70ea7c2edc430b310a2ff7bb",
      download_url:
        "https://raw.githubusercontent.com/GuilhermeFT/guilhermeft-portfolio/main/next.config.mjs",
      type: "file",
      _links: {
        self: "https://api.github.com/repos/GuilhermeFT/guilhermeft-portfolio/contents/next.config.mjs?ref=main",
        git: "https://api.github.com/repos/GuilhermeFT/guilhermeft-portfolio/git/blobs/1b3d3a929b8ce22d70ea7c2edc430b310a2ff7bb",
        html: "https://github.com/GuilhermeFT/guilhermeft-portfolio/blob/main/next.config.mjs",
      },
    },
    {
      name: "package.json",
      path: "package.json",
      sha: "c2bd94b3e86c240c5c14afde6f3f3533e7944062",
      size: 1165,
      url: "https://api.github.com/repos/GuilhermeFT/guilhermeft-portfolio/contents/package.json?ref=main",
      html_url:
        "https://github.com/GuilhermeFT/guilhermeft-portfolio/blob/main/package.json",
      git_url:
        "https://api.github.com/repos/GuilhermeFT/guilhermeft-portfolio/git/blobs/c2bd94b3e86c240c5c14afde6f3f3533e7944062",
      download_url:
        "https://raw.githubusercontent.com/GuilhermeFT/guilhermeft-portfolio/main/package.json",
      type: "file",
      _links: {
        self: "https://api.github.com/repos/GuilhermeFT/guilhermeft-portfolio/contents/package.json?ref=main",
        git: "https://api.github.com/repos/GuilhermeFT/guilhermeft-portfolio/git/blobs/c2bd94b3e86c240c5c14afde6f3f3533e7944062",
        html: "https://github.com/GuilhermeFT/guilhermeft-portfolio/blob/main/package.json",
      },
    },
    {
      name: "pnpm-lock.yaml",
      path: "pnpm-lock.yaml",
      sha: "4ad518cc6bb2c6c19782171f97bf574248ad7117",
      size: 176956,
      url: "https://api.github.com/repos/GuilhermeFT/guilhermeft-portfolio/contents/pnpm-lock.yaml?ref=main",
      html_url:
        "https://github.com/GuilhermeFT/guilhermeft-portfolio/blob/main/pnpm-lock.yaml",
      git_url:
        "https://api.github.com/repos/GuilhermeFT/guilhermeft-portfolio/git/blobs/4ad518cc6bb2c6c19782171f97bf574248ad7117",
      download_url:
        "https://raw.githubusercontent.com/GuilhermeFT/guilhermeft-portfolio/main/pnpm-lock.yaml",
      type: "file",
      _links: {
        self: "https://api.github.com/repos/GuilhermeFT/guilhermeft-portfolio/contents/pnpm-lock.yaml?ref=main",
        git: "https://api.github.com/repos/GuilhermeFT/guilhermeft-portfolio/git/blobs/4ad518cc6bb2c6c19782171f97bf574248ad7117",
        html: "https://github.com/GuilhermeFT/guilhermeft-portfolio/blob/main/pnpm-lock.yaml",
      },
    },
    {
      name: "postcss.config.mjs",
      path: "postcss.config.mjs",
      sha: "0dc456ad9c95a57ed8241079998dc42cc4c4002e",
      size: 133,
      url: "https://api.github.com/repos/GuilhermeFT/guilhermeft-portfolio/contents/postcss.config.mjs?ref=main",
      html_url:
        "https://github.com/GuilhermeFT/guilhermeft-portfolio/blob/main/postcss.config.mjs",
      git_url:
        "https://api.github.com/repos/GuilhermeFT/guilhermeft-portfolio/git/blobs/0dc456ad9c95a57ed8241079998dc42cc4c4002e",
      download_url:
        "https://raw.githubusercontent.com/GuilhermeFT/guilhermeft-portfolio/main/postcss.config.mjs",
      type: "file",
      _links: {
        self: "https://api.github.com/repos/GuilhermeFT/guilhermeft-portfolio/contents/postcss.config.mjs?ref=main",
        git: "https://api.github.com/repos/GuilhermeFT/guilhermeft-portfolio/git/blobs/0dc456ad9c95a57ed8241079998dc42cc4c4002e",
        html: "https://github.com/GuilhermeFT/guilhermeft-portfolio/blob/main/postcss.config.mjs",
      },
    },
    {
      name: "prismicio-types.d.ts",
      path: "prismicio-types.d.ts",
      sha: "6bd47dcc93b3d8800b4f03158f78bd171fd5d23e",
      size: 5285,
      url: "https://api.github.com/repos/GuilhermeFT/guilhermeft-portfolio/contents/prismicio-types.d.ts?ref=main",
      html_url:
        "https://github.com/GuilhermeFT/guilhermeft-portfolio/blob/main/prismicio-types.d.ts",
      git_url:
        "https://api.github.com/repos/GuilhermeFT/guilhermeft-portfolio/git/blobs/6bd47dcc93b3d8800b4f03158f78bd171fd5d23e",
      download_url:
        "https://raw.githubusercontent.com/GuilhermeFT/guilhermeft-portfolio/main/prismicio-types.d.ts",
      type: "file",
      _links: {
        self: "https://api.github.com/repos/GuilhermeFT/guilhermeft-portfolio/contents/prismicio-types.d.ts?ref=main",
        git: "https://api.github.com/repos/GuilhermeFT/guilhermeft-portfolio/git/blobs/6bd47dcc93b3d8800b4f03158f78bd171fd5d23e",
        html: "https://github.com/GuilhermeFT/guilhermeft-portfolio/blob/main/prismicio-types.d.ts",
      },
    },
    {
      name: "public",
      path: "public",
      sha: "1becd95abb849f2bbe194d3717ece2095494efa5",
      size: 0,
      url: "https://api.github.com/repos/GuilhermeFT/guilhermeft-portfolio/contents/public?ref=main",
      html_url:
        "https://github.com/GuilhermeFT/guilhermeft-portfolio/tree/main/public",
      git_url:
        "https://api.github.com/repos/GuilhermeFT/guilhermeft-portfolio/git/trees/1becd95abb849f2bbe194d3717ece2095494efa5",
      download_url: null,
      type: "dir",
      _links: {
        self: "https://api.github.com/repos/GuilhermeFT/guilhermeft-portfolio/contents/public?ref=main",
        git: "https://api.github.com/repos/GuilhermeFT/guilhermeft-portfolio/git/trees/1becd95abb849f2bbe194d3717ece2095494efa5",
        html: "https://github.com/GuilhermeFT/guilhermeft-portfolio/tree/main/public",
      },
    },
    {
      name: "slicemachine.config.json",
      path: "slicemachine.config.json",
      sha: "05dcca4203f47f534dfdfb74d02260c0465d1657",
      size: 188,
      url: "https://api.github.com/repos/GuilhermeFT/guilhermeft-portfolio/contents/slicemachine.config.json?ref=main",
      html_url:
        "https://github.com/GuilhermeFT/guilhermeft-portfolio/blob/main/slicemachine.config.json",
      git_url:
        "https://api.github.com/repos/GuilhermeFT/guilhermeft-portfolio/git/blobs/05dcca4203f47f534dfdfb74d02260c0465d1657",
      download_url:
        "https://raw.githubusercontent.com/GuilhermeFT/guilhermeft-portfolio/main/slicemachine.config.json",
      type: "file",
      _links: {
        self: "https://api.github.com/repos/GuilhermeFT/guilhermeft-portfolio/contents/slicemachine.config.json?ref=main",
        git: "https://api.github.com/repos/GuilhermeFT/guilhermeft-portfolio/git/blobs/05dcca4203f47f534dfdfb74d02260c0465d1657",
        html: "https://github.com/GuilhermeFT/guilhermeft-portfolio/blob/main/slicemachine.config.json",
      },
    },
    {
      name: "src",
      path: "src",
      sha: "f4847b966fb86a0ed2118486d0725c51efcac5d3",
      size: 0,
      url: "https://api.github.com/repos/GuilhermeFT/guilhermeft-portfolio/contents/src?ref=main",
      html_url:
        "https://github.com/GuilhermeFT/guilhermeft-portfolio/tree/main/src",
      git_url:
        "https://api.github.com/repos/GuilhermeFT/guilhermeft-portfolio/git/trees/f4847b966fb86a0ed2118486d0725c51efcac5d3",
      download_url: null,
      type: "dir",
      _links: {
        self: "https://api.github.com/repos/GuilhermeFT/guilhermeft-portfolio/contents/src?ref=main",
        git: "https://api.github.com/repos/GuilhermeFT/guilhermeft-portfolio/git/trees/f4847b966fb86a0ed2118486d0725c51efcac5d3",
        html: "https://github.com/GuilhermeFT/guilhermeft-portfolio/tree/main/src",
      },
    },
    {
      name: "tailwind.config.ts",
      path: "tailwind.config.ts",
      sha: "4d3fed0bd3dad0d3155ca6c6f7bb275074d50f3c",
      size: 809,
      url: "https://api.github.com/repos/GuilhermeFT/guilhermeft-portfolio/contents/tailwind.config.ts?ref=main",
      html_url:
        "https://github.com/GuilhermeFT/guilhermeft-portfolio/blob/main/tailwind.config.ts",
      git_url:
        "https://api.github.com/repos/GuilhermeFT/guilhermeft-portfolio/git/blobs/4d3fed0bd3dad0d3155ca6c6f7bb275074d50f3c",
      download_url:
        "https://raw.githubusercontent.com/GuilhermeFT/guilhermeft-portfolio/main/tailwind.config.ts",
      type: "file",
      _links: {
        self: "https://api.github.com/repos/GuilhermeFT/guilhermeft-portfolio/contents/tailwind.config.ts?ref=main",
        git: "https://api.github.com/repos/GuilhermeFT/guilhermeft-portfolio/git/blobs/4d3fed0bd3dad0d3155ca6c6f7bb275074d50f3c",
        html: "https://github.com/GuilhermeFT/guilhermeft-portfolio/blob/main/tailwind.config.ts",
      },
    },
    {
      name: "tsconfig.json",
      path: "tsconfig.json",
      sha: "7b2858930495fc4a76d7a51d958bacf2d64eb81f",
      size: 578,
      url: "https://api.github.com/repos/GuilhermeFT/guilhermeft-portfolio/contents/tsconfig.json?ref=main",
      html_url:
        "https://github.com/GuilhermeFT/guilhermeft-portfolio/blob/main/tsconfig.json",
      git_url:
        "https://api.github.com/repos/GuilhermeFT/guilhermeft-portfolio/git/blobs/7b2858930495fc4a76d7a51d958bacf2d64eb81f",
      download_url:
        "https://raw.githubusercontent.com/GuilhermeFT/guilhermeft-portfolio/main/tsconfig.json",
      type: "file",
      _links: {
        self: "https://api.github.com/repos/GuilhermeFT/guilhermeft-portfolio/contents/tsconfig.json?ref=main",
        git: "https://api.github.com/repos/GuilhermeFT/guilhermeft-portfolio/git/blobs/7b2858930495fc4a76d7a51d958bacf2d64eb81f",
        html: "https://github.com/GuilhermeFT/guilhermeft-portfolio/blob/main/tsconfig.json",
      },
    },
  ];
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
