export default function RootLayout({ children }) {
  return (
    <>
      <header style={{ backgroundColor: "green" }}>Header(Marketing)</header>
      {children}
      <footer style={{ backgroundColor: "orange" }}>Footer(Marketing)</footer>
    </>
  );
}
