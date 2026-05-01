from fastapi import FastAPI
from sqlalchemy import text
from app.database import engine
from app.routers import tutors

app = FastAPI()

@app.get("/")
def root():
    return {"message": "ok"}
@app.get("/test-db")
def test_db():
    with engine.connect() as conn:
        result = conn.execute(text("SELECT 1"))
        row = result.fetchone()
        return {"result": row[0]}
app.include_router(tutors.router)