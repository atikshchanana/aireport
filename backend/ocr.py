from PIL import Image
import pytesseract


# Path to Tesseract
pytesseract.pytesseract.tesseract_cmd = (
    r"C:\Program Files\Tesseract-OCR\tesseract.exe"
)


def extract_text_from_image(image_path):

    try:

        # Open image
        image = Image.open(image_path)

        # Convert to RGB
        image = image.convert("RGB")

        # Extract text
        text = pytesseract.image_to_string(
            image,
            lang="eng"
        )

        # Clean text
        text = text.strip()

        return text

    except Exception as e:

        print("OCR ERROR:", e)

        return ""