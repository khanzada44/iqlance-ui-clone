import api from "@/lib/api";

export const getBlogs = async () => {
  const response = await api.get("all-blogs");
  return response.data;
};

export const getBlog = async (slug: string) => {
  const response = await api.get(`/blogs/${slug}`);
  return response.data;
};
