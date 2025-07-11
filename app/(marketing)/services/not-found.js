import Link from "next/link";

export default function ServicesNotFound() {
  return (
    <div style={{ backgroundColor: "gray", color: "white",textAlign: "center" }}>
      <h3>404 Services Page Not Found</h3>
      <p>Go to <Link href="/">Home</Link></p>
    </div>
  );
}
