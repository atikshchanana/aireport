from sqlalchemy import (
    create_engine,
    Column,
    Integer,
    String
)

from sqlalchemy.orm import (
    declarative_base,
    sessionmaker
)

DATABASE_URL = "sqlite:///reports.db"

engine = create_engine(DATABASE_URL)

SessionLocal = sessionmaker(
    bind=engine
)

Base = declarative_base()


class Report(Base):

    __tablename__ = "reports"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    filename = Column(String)

    summary = Column(String)


Base.metadata.create_all(
    bind=engine
)