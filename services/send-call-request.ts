import api from "@/lib/api";


export const submitCallRequest = async (data: any) => {
  const response = await api.post("/send-call-request", data);
  return response.data;
};
export const submitContactForm = async (data: any) => {
  const response = await api.post("/contact-us", data);
  return response.data;
};