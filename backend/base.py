from flask import Flask
from json import loads, dumps
from bbref_scraper import bbrefScraper
api = Flask(__name__)

@api.route('/profile')
def my_profile():
    response_body = {
        "name": "Joshua Franklin",
        "about" :"Hello! I'm a full stack developer that loves python and javascript"
    }

    return response_body

@api.route('/bbref')
def get_stats():
    scraper = bbrefScraper(2019)
    year = scraper.get_year()
    headers = scraper.get_headers()
    dataframe = scraper.get_dataframe()
    jsondataframe = dataframe.to_json(orient="index")
    parsed = loads(jsondataframe)
    name = parsed["0"]["Player"]
    # print(parsed)

    
    response_body = {
        "year": year,
        "headers": headers,
        "name": name,
        "json": parsed,
    }

    return response_body
    