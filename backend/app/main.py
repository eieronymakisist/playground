import uvicorn
from fastapi import FastAPI, HTTPException, Depends
from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, Session
from pydantic import BaseModel
from typing import Optional, List
from typing import List


from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Mock FastAPI")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://127.0.0.1:3000"],  # frontend
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

#Database setup
engine = create_engine('postgresql+psycopg2://postgres:postgres@172.25.0.7/appdb')
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

class User(Base):
    __tablename__ = 'users'
    id = Column(Integer, primary_key=True, index=True)
    firstName = Column(String(100), nullable=False)
    lastName = Column(String(100), nullable=False)
    userName = Column(String(20), unique=True, index=True, nullable=False)
    password = Column(String, nullable=False)

Base.metadata.create_all(bind=engine)


class UserCreate(BaseModel):
    firstName: str
    lastName: str
    userName: str
    password: str

class UserResponse(BaseModel):
    id: int
    firstName: str
    lastName: str
    userName: str

    class Config:
        from_attributes=True


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        print("Something went wrong")
        db.close()

get_db()
print("Connected to DB")

@app.get("/")
async def root():
    return {"message": "hello world"}


@app.get("/users/{user_id}", response_model=UserResponse)
def get_user(user_id: int, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.id == user_id).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user

@app.get("/users", response_model=List[UserResponse])
def get_users(db: Session = Depends(get_db)):
    users = db.query(User).all()
    if not users:
        raise HTTPException(status_code=404, detail="No users found")
    return users

@app.post("/users", response_model=UserResponse)
def create_user(user: UserCreate, db: Session = Depends(get_db)):
    if(db.query(User).filter(User.userName == user.userName).first()):
        raise HTTPException(status_code=400, detail="Username already registered")
    db_user = User(
        firstName=user.firstName,
        lastName=user.lastName,
        userName=user.userName,
        password=user.password
    )
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

@app.delete("/users/{user_id}", response_model=UserResponse)
def delete_user(user_id: int, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.id == user_id).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    db.delete(user)
    db.commit()
    return user

@app.patch("/users/{user_id}", response_model=UserResponse)
def update_user(user_id: int, user_update: UserCreate, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.id == user_id).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    user.firstName = user_update.firstName
    user.lastName = user_update.lastName
    user.userName = user_update.userName
    user.password = user_update.password
    db.commit()
    db.refresh(user)
    return user