// components/pages/blog/blog-utils.js
// ⚠️ Is file mein "use client" NAHI lagana — ye functions server (build) aur browser dono use karte hain.
// ("use client" wali file ka function server par call karo to Next error deta hai.)

// Images abhi STAGING domain se aa rahi hain. Live uploads ka domain ho to yahan badal dein.
export const IMAGE_BASE = "https://devappgrid.dev-staging.live/uploads/front/";

export const blogImageUrl = (img) =>
  !img ? null : /^https?:\/\//i.test(img) ? img : `${IMAGE_BASE}${String(img).replace(/^\/+/, "")}`;

/* Listing ka jawab kisi bhi shape mein ho — list + pagination */
export function parseBlogs(res) {
  const paginated = res?.response?.data || res?.data || res;
  const list = Array.isArray(paginated) ? paginated : paginated?.data || [];
  return {
    blogs: Array.isArray(list) ? list : [],
    currentPage: paginated?.current_page || 1,
    lastPage: paginated?.last_page || 1,
  };
}

/* Single post */
export const pickBlog = (res) => res?.response?.data || res?.data || res || null;

/* Categories wagera — sirf array */
export const pickList = (res) => {
  const d = res?.response?.data || res?.data || res || [];
  return Array.isArray(d) ? d : [];
};