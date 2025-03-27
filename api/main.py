from fastapi import FastAPI, HTTPException, File, UploadFile
from typing import Dict, Union, List
import pandas as pd
from io import BytesIO
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Configuration CORS pour le frontend
origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Liste des combattants (stockage dynamique)
FIGHTERS: List[Dict[str, Union[int, str]]] = [
    {
        "id": 1,
        "name": "Rakoto Bleu",
        "age": 25,
        "weight": 55,
        "sex": "male",
        "technical_category": "Pupille",
        "fight_category": "-57",
    },
    {
        "id": 2,
        "name": "Rakoto Bleu",
        "age": 24,
        "weight": 56,
        "sex": "male",
        "technical_category": "Junior",
        "fight_category": "-57",
    },
    {
        "id": 3,
        "name": "Rakoto Bleu",
        "age": 23,
        "weight": 57,
        "sex": "male",
        "technical_category": "Senior",
        "fight_category": "-63",
    },
]

@app.get("/fighters")
async def get_fighters() -> List[Dict[str, Union[int, str]]]:
    """Retourne la liste des combattants."""
    return FIGHTERS

@app.get("/fighters/{fighter_id}")
async def get_fighter(fighter_id: int) -> Dict[str, Union[int, str]]:
    """Retourne les informations d'un combattant spécifique."""
    fighter = next((f for f in FIGHTERS if f["id"] == fighter_id), None)
    if fighter is None:
        raise HTTPException(status_code=404, detail="Fighter not found")
    
    return fighter

@app.post("/upload-excel/")
async def upload_excel(file: UploadFile):
    """Upload un fichier Excel et ajoute les combattants à la liste."""
    print(f"Fichier reçu : {file.filename}")

    if not file.filename.endswith((".xls", ".xlsx")):
        raise HTTPException(status_code=400, detail="Le fichier doit être au format Excel (.xls, .xlsx)")

    try:
        contents = await file.read()
        df = pd.read_excel(BytesIO(contents), engine="openpyxl")

        # Vérification des colonnes attendues
        required_columns = {"name", "age", "weight", "sex", "technical_category", "fight_category"}
        if not required_columns.issubset(df.columns):
            raise HTTPException(status_code=400, detail=f"Le fichier doit contenir les colonnes {required_columns}")

        # Remplacement des valeurs NaN par une chaîne vide
        df = df.fillna("")

        # Ajouter des IDs uniques aux nouveaux combattants
        new_fighters = []
        for _, row in df.iterrows():
            new_fighter = {
                "id": len(FIGHTERS) + 1,  # ID auto-incrémenté
                "name": row["name"],
                "age": int(row["age"]),
                "weight": int(row["weight"]),
                "sex": row["sex"],
                "technical_category": row["technical_category"],
                "fight_category": row["fight_category"],
            }
            FIGHTERS.append(new_fighter)
            new_fighters.append(new_fighter)

        return new_fighters  # Retourne les nouveaux combattants pour le frontend
    except Exception as e:
        print(f"Erreur : {e}")
        raise HTTPException(status_code=500, detail=str(e))
