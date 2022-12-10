import React from "react";
import { useSearchParams } from "react-router-dom";

import Layout from "../../layout/Layout";

const DetailPage: React.FunctionComponent = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const movieID = searchParams.get("id");

  return (
    <Layout>
      <div>Detail Page</div>
    </Layout>
  );
};

export default DetailPage;
