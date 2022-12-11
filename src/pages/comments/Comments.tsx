import React, { useEffect, useState } from "react";
import { API, Auth } from "aws-amplify";
import { Box } from "@mui/material";

import Layout from "../../layout/Layout";

import * as queries from "../../graphql/queries";
import Notice from "../../components/Notice/NoticeText";
import Comment from "../../components/Comment/Comment";

const CommentPage: React.FunctionComponent = () => {
  const [comments, setComments] = useState([]);

  const getComments = async () => {
    const userId = (await Auth.currentAuthenticatedUser()).username;

    try {
      const messages = await API.graphql({
        query: queries.listMessages,
        variables: { owner: userId },
        authMode: "AMAZON_COGNITO_USER_POOLS",
      });
      setComments((messages as any).data.listMessages.items);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getComments();
  }, []);

  const commentsCard = comments.map((m: any) => (
    <Comment message={m.message} movieId={m.movieID} />
  ));

  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          gap: "30px",
          padding: "20px",
        }}
      >
        {comments ? (
          commentsCard
        ) : (
          <Notice text="you don't have any commnents" />
        )}
      </Box>
    </Layout>
  );
};

export default CommentPage;
