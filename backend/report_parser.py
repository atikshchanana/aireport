import pymupdf


def extract_text_from_pdf(pdf_path):

    text = ""

    pdf = pymupdf.open(pdf_path)

    for page in pdf:
        text += page.get_text()

    pdf.close()

    return text