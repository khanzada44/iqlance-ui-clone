import api from "@/lib/api";

export const allSubCategories = async () => {
  const response = await api.get("all-sub-categories");
  return response.data;
};

export const categoriesWithPortfolio = async () => {
  const response = await api.get("categories-with-portfolio");
  return response.data;
};

export const portfolioSubCategories = async (id: any) => {
  const response = await api.get(`/portfolio-sub-categories/${id}`);
  return response.data;
};

export const singlePortfolio = async (slug: string) => {
  const response = await api.get(`/single-portfolio/${slug}`);
  return response.data?.response?.data;
};