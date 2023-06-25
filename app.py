from flask import Flask, render_template, request, redirect, url_for
from datetime import datetime
from pymongo import MongoClient
import os
from dotenv import load_dotenv

load_dotenv()

def create_app():
    app = Flask(__name__)
    client = MongoClient(os.getenv("MONGO_URI"))
    app.db = client.microblog

    @app.route('/', methods=['GET', 'POST'])
    def home():
        if request.method == 'POST':
            entry_content = request.form.get('content')
            formatted_date = datetime.now().strftime("%-d %b %Y")
            app.db.entries.insert_one({'content': entry_content, 'date': datetime.now()})

            return redirect(url_for('home'))

        entries_with_date = [
            (entry["content"], entry["date"]) for entry in app.db.entries.find({})
        ]

        return render_template('home.html', entries=list(reversed(entries_with_date)))
    
    return app