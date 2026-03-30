import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

interface Column {
  header: string;
  accessor: string;
  className?: string;
  format?: (value: any) => React.ReactNode;
}

interface HistoryTableProps {
  title: string;
  columns: Column[];
  data: any[];
  caption?: string;
  className?: string;
}

const HistoryTable = ({ title, columns, data, caption, className }: HistoryTableProps) => {
  return (
    <div className={cn("space-y-4 animate-fade-in", className)}>
      <h3 className="text-xl font-semibold text-emerald-400">{title}</h3>
      <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden shadow-2xl">
        <Table>
          {caption && <TableCaption className="text-slate-500">{caption}</TableCaption>}
          <TableHeader>
            <TableRow className="bg-white/10 hover:bg-white/10 border-white/10">
              {columns.map((column) => (
                <TableHead key={column.header} className={cn("font-bold text-emerald-400 uppercase text-xs tracking-wider", column.className)}>
                  {column.header}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row, rowIndex) => (
              <TableRow key={rowIndex} className="border-white/5 hover:bg-white/10 transition-colors group">
                {columns.map((column) => (
                  <TableCell key={column.accessor} className={cn("group-hover:text-white transition-colors text-slate-300", column.className)}>
                    {column.format ? column.format(row[column.accessor]) : row[column.accessor]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default HistoryTable;
