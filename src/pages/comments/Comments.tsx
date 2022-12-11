import React, { useEffect, useState } from "react";
import { API, Auth } from "aws-amplify";

import Layout from "../../layout/Layout";
import Notice from "../../components/Notice/NoticeText";
import SkeletonComment from "../../components/Skeleton/SkeletonComment";
import Comment from "../../components/Comment/Comment";
import { Flex } from "../../components/Grid/Grid";

import * as queries from "../../graphql/queries";

const CommentPage: React.FunctionComponent = () => {
  const [comments, setComments] = useState([]);
  const [loader, setLoader] = useState(true);

  const getComments = async () => {
    const userId = (await Auth.currentAuthenticatedUser()).username;

    try {
      const messages = await API.graphql({
        query: queries.listMessages,
        variables: { owner: userId },
        authMode: "AMAZON_COGNITO_USER_POOLS",
      });
      setLoader(false);
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
      {loader && <SkeletonComment amount={10} />}
      <Flex matches={false}>
        {comments ? (
          commentsCard
        ) : (
          <Notice text="you don't have any commnents" />
        )}
      </Flex>
    </Layout>
  );
};

export default CommentPage;
