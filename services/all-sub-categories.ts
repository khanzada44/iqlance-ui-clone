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

export const serviceCategories = async () => {
  const response = await api.get("service-categories");
  return response.data.response.data;
};
export const serviceCategorieSlug = async (slug:string) => {
  const response = await api.get(`service-category-by-slug/${slug}`);
  return response.data.response.data;
};
export const serviceCategorieBySlug = async (slug:string) => {
  const response = await api.get(`service-by-slug/${slug}`);
  return response.data.response.data;
};
