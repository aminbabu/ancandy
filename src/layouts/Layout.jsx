// eslint-disable-next-line react/prop-types
function Layout({ children }) {
  return (
    <div className="min-vh-100 d-flex flex-column overflow-x-hidden">
      {children}
    </div>
  );
}

export default Layout;
