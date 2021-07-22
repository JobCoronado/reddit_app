import { homeHot, homeNew, homePopular, homeTop } from "../routes";

export const RouteToCategoryPost = (routeName: string) => {
  if (routeName === homeNew) return "new";
  if (routeName === homeHot) return "hot";
  if (routeName === homePopular) return "controversial";
  if (routeName === homeTop) return "top";
  return "new";
};
