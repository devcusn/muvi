import React from 'react';

export type RouteType = {
  path: string;
  Page: React.FunctionComponent | React.FunctionComponent<Props>;
  pageType: 'public' | 'protected';
};
