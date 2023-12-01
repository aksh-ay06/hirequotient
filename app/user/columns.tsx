import { ColumnDef } from "@tanstack/react-table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox"

export type User = {
  id: string;
  name: string;
  email: string;
  role: "admin" | "member";
}

export const columns: ColumnDef<User>[] = [
    {
        id: "select",
        header: ({ table }) => (
          <Checkbox
            checked={
              table.getIsAllPageRowsSelected() ||
              (table.getIsSomePageRowsSelected() && "indeterminate")
            }
            onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
            aria-label="Select all"
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
          />
        ),
        enableSorting: false,
        enableHiding: false,
      },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Email
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
  },
  {
    accessorKey: "role",
    header: "Role",
  },
  {
    accessorKey: "action",
    header: "Action",
    cell: (row) => (
      <div className="space-x-2">
        <button
          onClick={() => handleEdit(row.original)}
          className="mr-2 bg-blue-500 text-white px-2 py-1 rounded"
        >
          <FontAwesomeIcon icon={faEdit} />
        </button>
        <button
          onClick={() => handleDelete(row.original.id)}
          className="bg-white text-red-500 px-2 py-1 rounded"
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    ),
  },
];