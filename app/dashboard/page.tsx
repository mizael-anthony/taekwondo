"use client";

import { useEffect, useState } from "react";
import { Fighter, columns } from "../../components/dashboard/columns";
import { DataTable } from "@/components/dashboard/data-table";
import { FileUploadButton } from "@/components/common/input-file";
import { BASE_URL } from "@/constants/api";
import Loading from "@/app/dashboard/loading";

export default function Page() {
  const [data, setData] = useState<Fighter[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fonction pour récupérer les données
  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${BASE_URL}/fighters/`);
      if (!response.ok) {
        throw new Error(`Erreur ${response.status}: ${response.statusText}`);
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      setError("Impossible de charger les données.");
      console.error("Erreur lors du fetch :", error);
    } finally {
      setLoading(false);
    }
  };

  // Charger les données au montage
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-end space-x-2 sm:justify-start">
        <FileUploadButton onUploadSuccess={fetchData} />
      </div>
      <div className="mt-2">
        {loading ? (
          <Loading />
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <DataTable columns={columns} data={data} />
        )}
      </div>
    </div>
  );
}
