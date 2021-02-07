import os
from sqlalchemy import Column, String,DateTime, Numeric,Integer, Boolean,Text, create_engine
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
import json
import datetime

database_name = "travelweb"
database_path = "postgresql://{}:{}@{}/{}".format('omar','dodo','localhost:5432', database_name)

db = SQLAlchemy()

'''
setup_db(app)
    binds a flask application and a SQLAlchemy service
'''
def setup_db(app, database_path=database_path):
    app.config["SQLALCHEMY_DATABASE_URI"] = database_path
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
    db.app = app
    db.init_app(app)
    db.create_all()
    Migrate(app,db)

'''
Main Menu

'''
class MainMenus(db.Model):  
  __tablename__ = 'mainMenus'

  id = Column(Integer, primary_key=True)
  title = Column(String)
  link = Column(String)

  def __init__(self, title, link):
    self.title = title
    self.link = link

  def insert(self):
    db.session.add(self)
    db.session.commit()

  def update(self):
    db.session.commit()

  def delete(self):
    db.session.delete(self)
    db.session.commit()

  def format(self):
    return {
      'id': self.id,
      'title': self.title,
      'link': self.link,
    }


'''
Cards

'''
class CardData (db.Model):  
  __tablename__ = 'cardData'

  id = Column(Integer, primary_key=True)
  name = Column(String)
  alt = Column(String)
  image = Column(Text)
  imagetype = Column(Text)
  button = Column(String)

  def __init__(self, name, alt,image,imagetype,button):
    self.name = name
    self.alt = alt
    self.image = image
    self.imagetype = imagetype
    self.button = button

  def insert(self):
    db.session.add(self)
    db.session.commit()

  def update(self):
    db.session.commit()

  def delete(self):
    db.session.delete(self)
    db.session.commit()

  def format(self):
    return {
      'id': self.id,
      'name': self.name,
      'alt': self.alt,
      'image': self.image,
      'image_type':self.imagetype,
      'button': self.button
    }

