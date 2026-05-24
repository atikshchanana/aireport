import re


# =========================
# PARAMETER DATABASE
# =========================

MEDICAL_PARAMETERS = {

    "Hemoglobin": {
        "aliases": [
            "Hemoglobin",
            "Hb",
            "HGB"
        ],
        "low": 12,
        "high": 16
    },

    "Glucose": {
        "aliases": [
            "Glucose",
            "Blood Glucose",
            "Sugar"
        ],
        "low": 70,
        "high": 140
    },

    "WBC": {
        "aliases": [
            "WBC",
            "WBC Count",
            "White Blood Cells"
        ],
        "low": 4000,
        "high": 11000
    },

    "Platelets": {
        "aliases": [
            "Platelets",
            "Platelet Count",
            "PLT"
        ],
        "low": 150000,
        "high": 450000
    },

    "RBC": {
        "aliases": [
            "RBC",
            "Red Blood Cells"
        ],
        "low": 4.0,
        "high": 6.0
    },

    "Cholesterol": {
        "aliases": [
            "Cholesterol",
            "Total Cholesterol"
        ],
        "low": 120,
        "high": 200
    },

    "Creatinine": {
        "aliases": [
            "Creatinine"
        ],
        "low": 0.6,
        "high": 1.3
    },

    "Vitamin D": {
        "aliases": [
            "Vitamin D",
            "Vit D"
        ],
        "low": 20,
        "high": 50
    },

    "TSH": {
        "aliases": [
            "TSH",
            "Thyroid Stimulating Hormone"
        ],
        "low": 0.4,
        "high": 4.0
    },

    "HDL": {
        "aliases": [
            "HDL",
            "Good Cholesterol"
        ],
        "low": 40,
        "high": 100
    },

    "LDL": {
        "aliases": [
            "LDL",
            "Bad Cholesterol"
        ],
        "low": 0,
        "high": 100
    },

}


# =========================
# EXTRACT PARAMETERS
# =========================

def extract_parameters(text):

    results = {}

    for parameter, info in MEDICAL_PARAMETERS.items():

        aliases = info["aliases"]

        for alias in aliases:

            pattern = rf"{alias}\s*:?\s*(\d+\.?\d*)"

            match = re.search(
                pattern,
                text,
                re.IGNORECASE
            )

            if match:

                results[parameter] = float(
                    match.group(1)
                )

                break

    return results


# =========================
# ANALYZE PARAMETERS
# =========================

def analyze_parameters(results):

    analysis = {}

    for parameter, value in results.items():

        low = MEDICAL_PARAMETERS[parameter]["low"]

        high = MEDICAL_PARAMETERS[parameter]["high"]

        if value < low:

            analysis[parameter] = "LOW"

        elif value > high:

            analysis[parameter] = "HIGH"

        else:

            analysis[parameter] = "NORMAL"

    return analysis


# =========================
# GENERATE SUMMARY
# =========================

def generate_summary(analysis):

    summary = []

    explanations = {

        "Hemoglobin": {
            "LOW": "Low hemoglobin may indicate anemia.",
            "HIGH": "High hemoglobin detected."
        },

        "Glucose": {
            "HIGH": "High glucose may indicate diabetes risk."
        },

        "WBC": {
            "HIGH": "High WBC may indicate infection.",
            "LOW": "Low WBC may indicate immune suppression."
        },

        "Platelets": {
            "LOW": "Low platelet count may increase bleeding risk.",
            "HIGH": "High platelet count detected."
        },

        "RBC": {
            "LOW": "Low RBC count may indicate anemia."
        },

        "Cholesterol": {
            "HIGH": "High cholesterol may increase heart disease risk."
        },

        "Creatinine": {
            "HIGH": "High creatinine may indicate kidney dysfunction."
        }

    }

    for parameter, status in analysis.items():

        if (
            parameter in explanations
            and status in explanations[parameter]
        ):

            summary.append(
                explanations[parameter][status]
            )

    if len(summary) == 0:

        summary.append(
            "All parameters appear normal."
        )

    return summary