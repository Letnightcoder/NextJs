
export default async function File({ params }) {
  console.log(await params);
  const { filePath } = await params;
  return (
    <>
      <h1>Required catch all route File/{filePath.join("/")}</h1>
    </>
  );
}
