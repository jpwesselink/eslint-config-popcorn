// get package.json as object
const pkg = require("../package.json");

// then we need to filter out the commons
const targets = Object.keys(pkg?.installPeerDeps || {}).filter(
  (target) => target !== "common"
);

// ... then we create a target to dependency matrix
const rows = targets.reduce((rows, target) => {
  const deps = [
    // add target specific peer dep names
    ...pkg.installPeerDeps[target],
    // add common peer deps
    ...pkg.installPeerDeps.common,
    // add eslint-y dependencies
    ...Object.keys(pkg.dependencies).filter(
      (pkgName) => pkgName.indexOf("eslint") === 0
    ),
  ];

  const newRows = { ...rows };
  deps.forEach((dep) => {
    newRows[dep] = { ...newRows[dep], [target]: true };
  });

  return newRows;
}, {});

// then we create an array of same size arrays
const separator = " | ";
const tableHeader = ["name", ...targets];
const tableRows = Object.keys(rows)
  .sort()
  .map((dep) => {
    return [
      dep,
      ...targets.map((target) => (rows[dep][target] ? " x " : "  ")),
    ];
  });

const allRows = [tableHeader, ...tableRows];

// let's calculate column widths
const columnWidths = allRows.reduce((widths, tableRow) => {
  const newWidths = [...widths];
  tableRow.forEach((item, columnIndex) => {
    if (!newWidths[columnIndex] || newWidths[columnIndex] < item.length) {
      newWidths[columnIndex] = item.length;
    }
  });

  return newWidths;
}, []);
const [firstRow, ...otherRows] = allRows;

// let's pad those columns
const paddedRows = [
  firstRow,
  // insert separator row
  new Array(targets.length + 1).fill(""),
  ...otherRows,
].map((tableRow, rowIndex) => {
  return tableRow.map((item, columnIndex) => {
    if (rowIndex === 1) {
      return "-".repeat(columnWidths[columnIndex]);
    }
    return item.padEnd(columnWidths[columnIndex]);
  });
});

// and send it to console
console.log(
  paddedRows
    .map((row) => `${separator}${row.join(separator)}${separator}`)
    .join("\n")
);
