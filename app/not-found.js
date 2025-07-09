import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ backgroundColor: "gray", color: "white",textAlign: "center" }}>
      <h3>404 Page Not Found</h3>
      <p>Go to <Link href="/">Home</Link></p>
    </div>
  );
}
