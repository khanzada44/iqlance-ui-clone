import api from "@/lib/api";

export const getBlogs = async () => {
  const response = await api.get("all-blogs");
  return response.data;
};

export const getSingleBlog = async (slug: string) => {
  const response = await api.get(`/single-blog?slug=${slug}`);
  return response.data;
};
export const blogCategories = async () => {
  const response = await api.get(`blog-categories`);
  return response.data;
};

export const blogByCategory = async (id: any) => {
  const response = await api.get(`/blog-by-category/${id}`);
  return response.data;
};
