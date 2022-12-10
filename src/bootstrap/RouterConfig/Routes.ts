import BrowsePage from "../../pages/browse/Browse";
import LandingPage from "../../pages/landing/Landing";
import MembershipPage from "../../pages/membership/Membership";
import DetailPage from "../../pages/browse/Detail";
import ExplorePage from "../../pages/browse/Explore";
import FavoritePage from "../../pages/favorites/Favorites";

import { RouteType } from "./types";

const RouterList: RouteType[] = [
  { Page: LandingPage, path: "/", pageType: "public" },
  {  Page: MembershipPage, path: "/membership", pageType: "public" },
  {  Page: BrowsePage, path: "/browse", pageType: "protected" },
  {  Page: DetailPage, path: "/detail", pageType: "protected" },
  {  Page: ExplorePage, path: "/explore", pageType: "protected" },
  {  Page: FavoritePage, path: "/favorites", pageType: "protected" },
];

export default RouterList;
