export default async function Comments({ params }) {
  console.log(await params);
  const paramsobj = await params;
  const { blogID } = paramsobj;
  return (
    <>
      <h1>All Comments on <b>{blogID}</b> page</h1>
    </>
  );
}
