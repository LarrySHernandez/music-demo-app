from flask import Flask, render_template

app = Flask(__name__)

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=8000, debug=True)

app.debug = False

@app.route('/')
def home_page():
    return render_template('homepage.html')