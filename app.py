from flask import Flask, render_template

app = Flask(__name__)


app.debug = False

@app.route('/')
def home_page():
    return render_template('homepage.html')

@app.route('/test')
def login_page():
    return render_template('settingspage.html');