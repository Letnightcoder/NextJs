export default function RootLayout({ children }) {
  return (
    <>
      <header style={{ backgroundColor: "green" }}>Header(Application)</header>
      {children}
      <footer style={{ backgroundColor: "orange" }}>Footer(Application)</footer>
    </>
  );
}
