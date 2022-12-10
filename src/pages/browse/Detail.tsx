import React from "react";
import { useLocation } from "react-router-dom";

import Layout from "../../layout/Layout";

const DetailPage: React.FunctionComponent = () => {
  const location = useLocation();
  console.log(location);

  return (
    <Layout>
      <div>Detail Page</div>
    </Layout>
  );
};

export default DetailPage;
