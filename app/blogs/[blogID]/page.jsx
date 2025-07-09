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
  return (
    <>
      <h1>Welcome to Blog { blogID } Page</h1>
    </>
  );
}
