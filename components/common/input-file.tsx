"use client";

import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import { useState } from "react";
import { Input } from "../ui/input";

export function FileUploadButton() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file.name);
    }
  };

  return (
    <div className="flex justify-center">
      <Input
        type="file"
        id="file-upload"
        className="hidden"
        accept=".xlsx,.xls,.csv"
        onChange={handleFileChange}
      />
      <label htmlFor="file-upload">
        <Button
          asChild
          className="bg-primary text-white border border-primary rounded-md py-2 px-4 hover:bg-primary-700"
        >
          <label htmlFor="file-upload" className="cursor-pointer">
            <Upload className="mr-2 h-4 w-4" />
            {selectedFile ? `File: ${selectedFile}` : "Import"}
          </label>
        </Button>
      </label>
    </div>
  );
}
