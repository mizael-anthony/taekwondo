import { Button } from "@/components/ui/button";
import { Fighter, columns } from "../../components/dashboard/columns";
import { DataTable } from "@/components/dashboard/data-table";
import { FileUploadButton } from "@/components/common/input-file";

async function getData(): Promise<Fighter[]> {
  return [
    {
      name: "Rakoto Bleu",
      age: 25,
      weight: 55,
      sex: "male",
      technical_category: "Pupille",
      fight_category: "-57",
    },
    {
      name: "Rakoto Bleu",
      age: 24,
      weight: 56,
      sex: "male",
      technical_category: "Junior",
      fight_category: "-57",
    },
    {
      name: "Rakoto Bleu",
      age: 23,
      weight: 57,
      sex: "male",
      technical_category: "Senior",
      fight_category: "-63",
    },
  ];
}

export default async function Page() {
  const data = await getData();
  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-end space-x-2 sm:justify-start">
        <FileUploadButton/>
        <Button>Export</Button>
      </div>
      <div className="mt-2">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
}
