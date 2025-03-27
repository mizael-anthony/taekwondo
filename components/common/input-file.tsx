"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import { Input } from "../ui/input";
import Loading from "@/app/dashboard/loading";
import { BASE_URL } from "@/constants/api";

interface FileUploadButtonProps {
  onUploadSuccess: () => void;
}

export function FileUploadButton({ onUploadSuccess }: FileUploadButtonProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append("file", file);
    try {
      const response = await fetch(`${BASE_URL}/upload-excel/`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Erreur ${response.status}: ${response.statusText}`);
      }

      onUploadSuccess(); // Rafraîchir la table après succès
    } catch (error) {
      setError("Erreur lors de l'upload du fichier. Veuillez réessayer.");
      console.error("Erreur lors de l'upload :", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
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
          disabled={loading}
        >
          <label
            htmlFor="file-upload"
            className="cursor-pointer flex items-center"
          >
            {loading ? <Loading /> : <Upload className="mr-2 h-4 w-4" />}
            {loading ? " Importing..." : "Importer"}
          </label>
        </Button>
      </label>

      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}
