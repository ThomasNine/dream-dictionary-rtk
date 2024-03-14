import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import EachTableRow from "./EachTableRow";

const AnswerTable = ({ answers }) => {
  return (
    <div className=" w-full px-0 py-5">
      {answers.length === 0 ? (
        <h5 className=" text-lg my-10 text-center">အချက်အလက် မတွေ့ရှိပါ</h5>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className=" text-base py-5 text-center w-[30px] sm:w-[50px]">
                စဉ်
              </TableHead>
              <TableHead className=" text-base py-5 text-center">
                အိပ်မက်များ
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {answers.map((i, index) => (
              <EachTableRow key={i.id} answer={i} indexOfAnswer={index} />
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
};

export default AnswerTable;
