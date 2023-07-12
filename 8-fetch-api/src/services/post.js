import { get, postJSON } from "./request";

export const getPosts = () => get("/posts");
export const getPostsDetails = (id) => get(`/posts/${id}`);
export const newPost = (data) => postJSON("/posts", data);
