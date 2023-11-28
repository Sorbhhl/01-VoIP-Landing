import { Card, Typography } from "@material-tailwind/react";

interface TableProps {
  th: string[];
  tr: Array<{
    row1: string;
    row2: string;
    row3: string;
  }>;
}
 
export function TablePrices(props: TableProps) {
  return (
    <Card className="w-fit mt-10 shadow-lg mx-auto rounded-lg">
      <table className="w-full min-w-max table-auto text-left text-sm md:text-base">
        <thead>
          <tr>
            {props.th.map((head) => (
              <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 px-6 py-4 text-center">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.tr.map((row, index) => {
            const classes = "p-4 border-b border-blue-gray-50 w-10 md:w-auto text-center";

            return (
              <tr key={index}>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {row.row1}
                  </Typography>
                </td>
                <td className={`${classes} bg-blue-gray-50/50`}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {row.row2}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {row.row3}
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
}