import React from "react";
import Layout from "../../layout/Layout";

import { getMovies } from "../../services/movies";

const BrowsePage: React.FunctionComponent = () => {
  const MoviesService = async () => {
    const res = await getMovies("random");
    console.log(res);
  };

  MoviesService();
  return (
    <Layout>
      <div>Hello</div>
    </Layout>
  );
};

export default BrowsePage;
