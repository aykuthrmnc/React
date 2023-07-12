import { generatePath } from "react-router-dom";
import routes from "./routes";

export const url = (path, params = {}) => {
  let lastRoute, url;

  // eslint-disable-next-line array-callback-return
  path.split(".").map((p) => {
    if (!lastRoute) {
      lastRoute = routes.find((r) => r.name === p);
      url = lastRoute.path;
    } else {
      lastRoute = lastRoute.children.find((r) => r.name === p);
      url += "/" + lastRoute.path;
    }
  });
  return generatePath(url.replace(/\/\//gi, "/"), params);
};
