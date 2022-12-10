import React from "react";
import { useSearchParams } from "react-router-dom";

import Layout from "../../layout/Layout";

const ExplorePage: React.FunctionComponent = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchValue = searchParams.get("s");

  const searchList = () => {};
  return (
    <Layout>
      <div>Explore Page</div>
    </Layout>
  );
};

export default ExplorePage;
