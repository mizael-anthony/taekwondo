"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"
import { Button } from "../ui/button"

export type Fighter = {
  name: string
  age: number
  weight: number
  sex: "male" | "female"
  technical_category: string
  fight_category: string
}

export const columns: ColumnDef<Fighter>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "age",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Age
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "weight",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Weight
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "sex",
    header: "Sex",
  },
  {
    accessorKey: "technical_category",
    header: "Technical Category",
  },
  {
    accessorKey: "fight_category",
    header: "Fight Category",
  },
]
