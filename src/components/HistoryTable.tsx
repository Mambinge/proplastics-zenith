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
      <h3 className="text-xl font-semibold text-primary">{title}</h3>
      <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm overflow-hidden">
        <Table>
          {caption && <TableCaption>{caption}</TableCaption>}
          <TableHeader>
            <TableRow className="bg-muted/50 hover:bg-muted/50">
              {columns.map((column) => (
                <TableHead key={column.header} className={cn("font-bold text-foreground", column.className)}>
                  {column.header}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row, rowIndex) => (
              <TableRow key={rowIndex} className="hover:bg-primary/5 transition-colors">
                {columns.map((column) => (
                  <TableCell key={column.accessor} className={column.className}>
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
