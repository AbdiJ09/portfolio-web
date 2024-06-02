const CardImage = ({ children }) => {
  return (
    <>
      <div className="h-80">{children}</div>
    </>
  );
};
const CardHeader = ({ children }) => {
  return (
    <>
      <div className="mb-2 mt-3 flex items-center justify-between">
        {children}
      </div>
    </>
  );
};
const CardBody = ({ children }) => {
  return <div>{children}</div>;
};
const CardFooter = ({ children }) => {
  return <div>{children}</div>;
};
const Card = ({ children }) => {
  return (
    <>
      <div className="w-full">{children}</div>
    </>
  );
};

export { Card, CardImage, CardHeader, CardBody, CardFooter };
