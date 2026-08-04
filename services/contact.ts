import api from "@/lib/api";

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export const submitContactForm = async (data: ContactFormData) => {
  const response = await api.post("/contact.php", data);
  return response.data;
};