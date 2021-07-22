import apiClient from "../../config";

export interface IGetPost {
  kind: string;
  data: IPostData;
}

export interface IPostData {
  after: string;
  dist: number;
  modhash: string;
  geo_filter: string;
  children: IPostChild[];
  before: null;
}

export interface IPostChild {
  kind: string;
  data: IPost;
}
export interface IPost {
  author: string;
  thumbnail: string;
  title: string;
  created: number;
  score: number;
  num_comments: number;
  permalink: string;
}

export interface IGetPostParams {
  category: "top" | "new" | "hot" | "controversial";
}

export const getPostByCategory = async ({ category }: IGetPostParams) => {
  const url = `https://api.reddit.com/r/pics/${category}.json`;
  const res = await apiClient.get<IGetPost>(url);
  return res.data.data.children;
};
