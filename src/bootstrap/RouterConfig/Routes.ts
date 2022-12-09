import BrowsePage from "../../pages/browse/Browse";
import LandingPage from "../../pages/landing/Landing";
import MembershipPage from "../../pages/membership/Membership";
import DetailPage from "../../pages/browse/Detail";

import { RouteType } from "./types";

const RouterList: RouteType[] = [
  { Page: LandingPage, path: "/", pageType: "public" },
  {  Page: MembershipPage, path: "/membership", pageType: "public" },
  {  Page: BrowsePage, path: "/browse", pageType: "protected" },
  {  Page: DetailPage, path: "/detail", pageType: "protected" },
];

export default RouterList;
