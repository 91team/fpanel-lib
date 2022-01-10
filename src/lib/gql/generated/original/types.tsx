import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
}

export interface RootQueryType {
   __typename?: 'RootQueryType',
  getSeed?: Maybe<Scalars['String']>,
}

export type GetSeedQueryVariables = {};


export type GetSeedQuery = (
  { __typename?: 'RootQueryType' }
  & Pick<RootQueryType, 'getSeed'>
);


export const GetSeedDocument = gql`
    query getSeed {
  getSeed
}
    `;
export type GetSeedQueryResult = ApolloReactCommon.QueryResult<GetSeedQuery, GetSeedQueryVariables>;