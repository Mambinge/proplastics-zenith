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
      <h3 className="text-sm font-extrabold text-primary uppercase tracking-wider">{title}</h3>
      <div className="rounded-xl border border-primary/10 bg-white overflow-hidden shadow-sm">
        <Table>
          {caption && <TableCaption className="text-slate-400 text-[10px] pb-3">{caption}</TableCaption>}
          <TableHeader>
            <TableRow className="bg-slate-50 hover:bg-slate-50 border-slate-100">
              {columns.map((column) => (
                <TableHead key={column.header} className={cn("font-extrabold text-primary uppercase text-[10px] tracking-wider py-3", column.className)}>
                  {column.header}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row, rowIndex) => (
              <TableRow key={rowIndex} className="border-slate-100 hover:bg-slate-50/70 transition-colors">
                {columns.map((column) => (
                  <TableCell key={column.accessor} className={cn("text-xs text-foreground/80 font-medium py-3.5", column.className)}>
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
