import CMS from "netlify-cms-app";

CMS.init({
  config: {
    backend: {
      name: "github",
      repo: "DamnedScholar/damnedscholar.github.io"
    }
  }
});
