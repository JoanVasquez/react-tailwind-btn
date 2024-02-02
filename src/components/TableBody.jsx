const TableBody = ({ data, headers }) => (
  <tbody>
    {data.map((item, index) => (
      <tr key={`${index}-asfdasdf`} className="border-b">
        {headers.map(({ name }, index) => (
          <td width="300" key={`${index}-afsdadsf`} className="p-2 text-center">
            {typeof item[name] === "boolean"
              ? item[name] === true
                ? "Yes"
                : "No"
              : item[name]}
          </td>
        ))}
      </tr>
    ))}
  </tbody>
);

export default TableBody;
