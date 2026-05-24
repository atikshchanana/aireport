from reportlab.platypus import (
    SimpleDocTemplate,
    Paragraph
)

from reportlab.lib.styles import getSampleStyleSheet


def create_pdf(summary):

    doc = SimpleDocTemplate(
        "report.pdf"
    )

    styles = getSampleStyleSheet()

    story = []

    story.append(
        Paragraph(summary, styles['BodyText'])
    )

    doc.build(story)