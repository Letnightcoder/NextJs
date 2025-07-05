// [id] is call slug
export default async function Blog({ params }) {
  console.log(await params);
  const { id } = await params;
  return (
    <>
      <h1>Welcome to Blog { id } Page</h1>
    </>
  );
}
