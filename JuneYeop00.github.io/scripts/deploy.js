import ghpages from "gh-pages";

ghpages.publish(
  "dist",
  {
    branch: "gh-pages",
    repo: "https://github.com/JuneYeop00/juneyeop00.github.io.git",
    dotfiles: true,
    nojekyll: true,
  },
  (err) => {
    if (err) {
      throw err;
    } else {
      console.log("Published");
    }
  }
);