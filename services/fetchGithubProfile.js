const fetchGithubProfile = async () => {
    if (process.env.NEXT_PUBLIC_APP_ENVIROMENT === "production") {
    return await fetch(`${process.env.NEXT_PUBLIC_APP_GITHUB_REPO_URL}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${btoa(
          `username:${process.env.NEXT_PUBLIC_APP_GITHUB_ACCESS_TOKEN}`
        )}`,
      },
    });
  }

  return await fetch(`https://api.github.com/users/user/repos`);
};

export { fetchGithubProfile };
