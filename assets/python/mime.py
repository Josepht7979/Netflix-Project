from collections import Counter
from pandas import pd
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine,func
from flask import Flask,jsonify
import datetime as dt

data=pd.read_csv('../assets/data/netflix.csv')
print(data)