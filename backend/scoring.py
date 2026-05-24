def calculate_health_score(analysis):

    score = 100

    for status in analysis.values():

        if status == "HIGH":
            score -= 10

        elif status == "LOW":
            score -= 10

    if score < 0:
        score = 0

    return score