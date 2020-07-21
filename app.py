from flask import Flask, render_template, url_for

app = Flask(__name__)

@app.route('/')
def hello():
    return render_template('Index1.html')
@app.route('/home')
def home():
    return render_template('Index1.html')
@app.route('/order')
def order():
    return render_template('Index5.html',pagetitle="see the service order of king food")
@app.route('/menu')
def menu():
    return render_template('Index2.html', pagetitle="see the menu of king food")
@app.route('/gallery')
def gallery():
    return render_template('Index3.html', pagetitle="see the gallery of king food")
@app.route('/contact')
def contact():
    return render_template('Index4.html', pagetitle="see the contact of king food")
if __name__ == '__main__':
    app.run(debug=True, port=25800)