export default async function Comment({ params }) {
    const paramsobj = await params;
    const { blogID, commentID } = paramsobj;
    console.log(paramsobj);
    return (
    <>
      <p>
        Comment No. <b>{commentID}</b> on <b>{blogID}</b> page
      </p>
    </>
  );
}
