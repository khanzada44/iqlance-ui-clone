import { Suspense } from "react";
import Blog from "../../components/pages/blog/page";
export const metadata = {
  title: "App Development Blog | Tips & Insights | Your Brand",
  description: "Practical tips and expert insights on software and app development: choosing the right tech, improving performance and building better user experiences.",
};
export default function Page() {
  return (
    <Suspense fallback={<div>Loading blogs...</div>}>
      <Blog />
    </Suspense>
  );
}