from fastapi import APIRouter, UploadFile, File
import shutil
import os
import json
from datetime import datetime

from report_parser import extract_text_from_pdf
from analyser import (
    extract_parameters,
    analyze_parameters,
    generate_summary
)

router = APIRouter()

UPLOAD_DIR = "uploads"
HISTORY_FILE = "history.json"

os.makedirs(UPLOAD_DIR, exist_ok=True)


# =========================
# LOAD HISTORY
# =========================

def load_history():

    if not os.path.exists(HISTORY_FILE):
        return []

    with open(HISTORY_FILE, "r") as file:
        return json.load(file)


# =========================
# SAVE HISTORY
# =========================

def save_history(data):

    with open(HISTORY_FILE, "w") as file:
        json.dump(data, file, indent=4)


# =========================
# ANALYZE REPORT
# =========================

@router.post("/analyze/")
async def analyze_medical_report(
    file: UploadFile = File(...)
):

    try:

        file_path = os.path.join(
            UPLOAD_DIR,
            file.filename
        )

        with open(file_path, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)

        # EXTRACT TEXT
        text = extract_text_from_pdf(file_path)

        # ANALYSIS
        parameters = extract_parameters(text)

        analysis = analyze_parameters(parameters)

        summary = generate_summary(analysis)

        result = {
            "filename": file.filename,
            "date": str(datetime.now()),
            "parameters": parameters,
            "analysis": analysis,
            "summary": summary
        }

        # SAVE TO HISTORY
        history = load_history()

        history.append(result)

        save_history(history)

        return {
            "success": True,
            "data": result
        }

    except Exception as e:

        return {
            "success": False,
            "error": str(e)
        }


# =========================
# GET HISTORY
# =========================

@router.get("/history/")
def get_history():

    try:

        history = load_history()

        return {
            "success": True,
            "history": history
        }

    except Exception as e:

        return {
            "success": False,
            "error": str(e)
        }