import api from "@/lib/api";


export const submitCallRequest = async (data: any) => {
  const response = await api.post("/send-call-request", data);
  return response.data;
};
export const submitContactForm = async (data: FormData) => {
  const response = await api.post("/contact-us", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};