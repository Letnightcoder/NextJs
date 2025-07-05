import Link from "next/link";

export default function About() {
  return (
    <>
      <h1>Welcome to About Page</h1>
      {/* <a href="/">Home</a>*/} {/*its relode the whole page */}
      <Link href="/">Home</Link>
      <br />
      <Link href="/services">Services</Link>
    </>
  );
}
