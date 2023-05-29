from flask import Flask

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
    
    
    response_body = {
        "year": year,
        "headers": headers,
    }

    return response_body
    