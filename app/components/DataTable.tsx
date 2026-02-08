import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
    TableCaption,
} from '@/components/ui/table';
import { cn } from '@/lib/utils';

const DataTable = <T,>({ columns, data, rowKey, tableClassName, headerClassName, headerRowClassName, headerCellClassName, bodyRowClassName, bodyCellClassName }: DataTableProps<T>) => {
    return (
        <Table className={cn("custom-scrollbar", tableClassName)}>
            <TableCaption> A List of your recent invoices.</TableCaption>
            <TableHeader className={headerClassName}>
                <TableRow className={cn("hover:bg-transparent!", headerRowClassName)}>
                    {columns.map((column, i) => (
                        <TableHead key={i} className={cn("bg-dark-400 first:pl5 last:pr-5 text-purple-100 py-4 ")}>
                            {column.header}
                        </TableHead>
                    ))}
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell className="font-medium">INV001</TableCell>
                    <TableCell>Paid</TableCell>
                    <TableCell>Credit Card</TableCell>
                    <TableCell className="text-right">$250.00</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    );
};

export default DataTable;