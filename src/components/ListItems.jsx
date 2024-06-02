const ListItems = ({ children }) => {
  return (
    <>
      <ul className="mt-2 flex flex-wrap gap-5">{children}</ul>
    </>
  );
};

const Item = ({ children }) => {
  return (
    <>
      <li className="flex items-center justify-center rounded bg-zinc-800 p-2 text-4xl font-bold text-white">
        {children}
      </li>
    </>
  );
};

export { ListItems, Item };
