export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  addPropriety?: Maybe<Propriety>;
  addReview?: Maybe<Review>;
  addUser: User;
};


export type MutationAddProprietyArgs = {
  body?: InputMaybe<InputProprietyType>;
};


export type MutationAddReviewArgs = {
  body?: InputMaybe<InputReviewType>;
};


export type MutationAddUserArgs = {
  body?: InputMaybe<InputUserType>;
};

export type Propriety = {
  __typename?: 'Propriety';
  desciption?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  mainPhoto?: Maybe<Scalars['String']>;
  owner?: Maybe<User>;
  photos?: Maybe<Array<Maybe<Scalars['String']>>>;
  priceByNight?: Maybe<Scalars['Float']>;
  reviews?: Maybe<Array<Maybe<Review>>>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  propriety?: Maybe<Propriety>;
  proprietyList?: Maybe<Array<Maybe<Propriety>>>;
  reviewByUser?: Maybe<Array<Maybe<Review>>>;
  user: User;
  userList: Array<User>;
};


export type QueryProprietyArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryReviewByUserArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};

export type Review = {
  __typename?: 'Review';
  author?: Maybe<User>;
  feedback?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  propriety?: Maybe<Propriety>;
  rate?: Maybe<Scalars['Float']>;
};

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  photo: Scalars['String'];
};

export type InputProprietyType = {
  desciption?: InputMaybe<Scalars['String']>;
  mainPhoto?: InputMaybe<Scalars['String']>;
  photos?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  priceByNight?: InputMaybe<Scalars['Float']>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type InputReviewType = {
  authorId?: InputMaybe<Scalars['ID']>;
  feedback?: InputMaybe<Scalars['String']>;
  proprietyId?: InputMaybe<Scalars['ID']>;
  rate?: InputMaybe<Scalars['Float']>;
};

export type InputUserType = {
  email: Scalars['String'];
  name: Scalars['String'];
};
