import { notFound } from "next/navigation";

// [id] is call slug
export async function generateMetadata({params}) {
  const { blogID } = await params;
  return {
    title: `Blog ${blogID}`,
  };
} // dynamic metadata

export default async function Blog({ params }) {
  // console.log(await params);
  const { blogID } = await params;
  // " /^\\d+$/ " means only number (regular expression)
  if (!/^\d+$/.test(blogID)) {
    notFound();
  }
  return (
    <div>
      <h1>Welcome to Blog { blogID } Page</h1>
    </div>
  );
}
