import api from "@/lib/api";

export const allSubCategories = async () => {
  const response = await api.get("all-sub-categories");
  return response.data;
};
