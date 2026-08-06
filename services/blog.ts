import api from "@/lib/api";

export const getBlogs = async () => {
  const response = await api.get("all-blogs");
  return response.data;
};

export const getSingleBlog = async (slug: string) => {
  const response = await api.get(`/single-blog?slug=${slug}`);
  return response.data;
};
