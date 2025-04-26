// import Link from "next/link";
// import { format } from "date-fns";

// interface BlogCardProps {
//   slug: string;
//   title: string;
//   description: string;
//   date: string;
// }

// const BlogCard = ({ slug, title, description, date }: BlogCardProps) => {
//   return (
//     <Link href={`/blog/${slug}`} className="group">
//       <div
//         className="rounded-2xl p-6 border shadow-md transition-all duration-300 hover:shadow-lg"
//         style={{
//           background: "var(--background)",
//           color: "var(--foreground)",
//           borderColor: "rgba(255, 255, 255, 0.1)", // soft white border
//         }}
//       >
//         <p className="text-xs opacity-70 mb-2">
//           {format(new Date(date), "MMMM d, yyyy")}
//         </p>
//         <h3 className="text-lg font-bold mb-2 group-hover:text-[var(--primary-gradient-from)] transition-all">
//           {title}
//         </h3>
//         <p className="text-sm opacity-80">
//           {description}
//         </p>
//         <div className="mt-4 text-sm font-semibold text-[var(--primary-gradient-from)]">
//           Read More →
//         </div>
//       </div>
//     </Link>
//   );
// };

// export default BlogCard;
