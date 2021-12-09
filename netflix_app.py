from flask import Flask, render_template, redirect
from flask_pymongo import PyMongo
import pymongo


# Create an instance of Flask
app = Flask(__name__)

# setup mongo connection
conn = "mongodb://localhost:27017"
client = pymongo.MongoClient(conn)

# connect to mongo db and collection
db = client.netflix
netflix_visualisation = db.netflix_visualisation

# Route to render index.html template using data from Mongo
@app.route("/")
def home():

    # To get all data
    netflix_data = list(netflix_visualisation.find())

    # A test to just get the first data 
    # netflix_data = (netflix_visualisation.find_one())
    print(netflix_data)

    # Return template and data
    return render_template("index.html", netflix_data=netflix_data)


# @app.route("/genres")
# def genres():
#     # get data you need for genres

# @app.route("/year")
# def year():
#     # get data you need for year



if __name__ == "__main__":
    app.run(debug=True)