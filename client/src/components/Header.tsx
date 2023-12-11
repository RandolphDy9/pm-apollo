const Header = ({ label }: { label: string }) => {
  return (
    <nav className="mt-3">
      <h2>{ label }</h2>
    </nav>
  );
};

export default Header;
