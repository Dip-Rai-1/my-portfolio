export default function NavBar() {
  return (
    <header className="flex justify-between items-center px-10 py-6 border-b border-border-default">
      <h1 className="text-text-primary text-lg flex items-center">
        <span className="h-2 w-2 bg-accent-primary inline-block rounded-full mr-2"></span>
        Dip Rai
      </h1>
      <nav className="navbar text-text-secondary">
        <ul className="flex text-base">
          <li className="mx-2">
            <a href="">Projects</a>
          </li>
          <li className="mx-2">
            <a href="">Skills</a>
          </li>
          <li className="mx-2">
            <a href="">Contacts</a>
          </li>
        </ul>
      </nav>
      <h4 className="px-4 py-1 text-text-accent text-[13px] border border-accent-primary rounded-full">
        Available For Work
      </h4>
    </header>
  );
}
