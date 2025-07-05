import Link from "next/link";

export default function Services() {
  return (
    <>
      <h1>Welcome to Services Page</h1>
      {/* <a href="/">Home</a>*/} {/*its relode the whole page */}
      <Link href="/">Home</Link> 
      <br/>
      <Link href="/about">About</Link> 
    </>
  );
}
