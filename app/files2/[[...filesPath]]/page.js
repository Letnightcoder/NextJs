export const metadata = {
  title: {
    absolute: "My Files",
  },
};

export default async function File2({ params }) {
  console.log(await params);
  const { filesPath } = await params;
  return (
    <>
      <h1>Optional catch all route File/{filesPath?.join("/")}</h1>
    </>
  );
}

// Required catch all route work in the root folder
// Optional catch all route not work in the root folder
