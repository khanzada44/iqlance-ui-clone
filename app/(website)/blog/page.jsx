import { Suspense } from "react";
import Blog from "../../components/pages/blog/page";
export const metadata = {
  title: "Blog",
  description: "Learn more about Devapp Grid Blogs.",
};
export default function Page() {
  return (
    <Suspense fallback={<div>Loading blogs...</div>}>
      <Blog />
    </Suspense>
  );
}