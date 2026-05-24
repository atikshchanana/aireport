from openai import OpenAI
import os

client = OpenAI(
    api_key=os.getenv("OPENAI_API_KEY")
)


def generate_ai_summary(analysis):

    prompt = f"""

    Analyze this medical report.

    Data:
    {analysis}

    Explain:
    1. Major abnormalities
    2. Possible causes
    3. Risk level
    4. Lifestyle suggestions
    5. Whether doctor consultation is needed

    """

    response = client.chat.completions.create(

        model="gpt-3.5-turbo",

        messages=[
            {
                "role": "user",
                "content": prompt
            }
        ]
    )

    return response.choices[0].message.content