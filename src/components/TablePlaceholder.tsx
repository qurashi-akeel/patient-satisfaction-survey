const TablePlaceholder = (n: { n: number }) => {
  const rows: number[] = [];

  const numberOfRows = (n: number) => {
    for (let i = 0; i < n; i++) {
      rows[i] = i;
    }
  };

  numberOfRows(n.n);

  return (
    <div
      role="status"
      className="max-w-xl animate-pulse space-y-4 divide-y rounded border p-4 shadow divide-indigo-700 border-indigo-700 md:p-6"
    >
      {rows?.map((row: number) => (
        <Row key={row} />
      ))}
      <span className="sr-only">Loading...</span>
    </div>
  );
};

const Row = () => {
  return (
    <div className="flex items-center justify-around">
      <div>
        <div className="mb-2.5 h-2.5 w-40 rounded-full bg-indigo-300"></div>
        <div className="h-2 w-32 rounded-full bg-indigo-700"></div>
      </div>
      <div className="h-2.5 w-12 rounded-full bg-indigo-700"></div>
    </div>
  );
};

export default TablePlaceholder;
