const Header = ({ label }: { label: string }) => {
  return (
    <nav className="mt-4">
      <h2>{ label }</h2>
    </nav>
  );
};

export default Header;
