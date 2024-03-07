const Container = ({ children, className = '' }) => {
  return (
    <div className={`p-4 md:container md:p-6 md:py-4 lg:px-4 mx-auto ${className}`}>
      {children}
    </div>
  );
};

export default Container;
