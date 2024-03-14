export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <nav>
        <ul>
          <li>Navbar of categories</li>
        </ul>
      </nav>
      {children}
    </main>
  );
}
