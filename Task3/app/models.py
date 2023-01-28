from flask import Flask
from flask_sqlalchemy import SQLAlchemy
import datetime
from sqlalchemy import Column, Integer, Float, Enum, DateTime, JSON


from app import app
db = SQLAlchemy(app)



class Payments(db.Model):

    __tablename__ = 'payments'

    orderid = Column(Integer, primary_key=True, autoincrement=True, nullable=False)
    date = Column(DateTime,  default=datetime.datetime.now)
    amount = Column(Float, default = 0)
    status = Column(Enum("ordered", "paid", "cancelled", "completed", name="statusEnum"), default='ordered')
    items = Column(JSON)

class Note(db.Model):

    __tablename__='notes'
    
    id=Column(Integer,primary_key=True,autoincrement=True,nullable=False)
    note=Column(Integer)