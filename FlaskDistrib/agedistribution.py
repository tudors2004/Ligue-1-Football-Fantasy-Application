from flask import Flask, send_file, request
import pandas as pd
import matplotlib
matplotlib.use('Agg') #Non-GUI backend!!!!!!!!!!
from matplotlib import pyplot as plt
import io
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
df = pd.read_csv("https://raw.githubusercontent.com/tudors2004/Ligue-1-Football-Fantasy-Application/a58f90b17dba3e8c0e930bf7141e6bc2354e8dce/FlaskDistrib/static/l1_stats.csv", delimiter=',')

@app.route('/data')
def data_distribution():
    leaderboard = request.args.get('leaderboard')
    if leaderboard == 'age':
        plt.figure(figsize=(8, 6))
        df['Age'].hist(bins=20, edgecolor='black', alpha=0.7)
        plt.xlabel('Players Age')
        plt.ylabel('No. of Players')
        plt.title('Players Age Distribution')

        img = io.BytesIO()
        plt.savefig(img, format='png', bbox_inches='tight')
        img.seek(0)
        plt.close()
        return send_file(img, mimetype='image/png')
    else:
        return "Invalid parameter", 400

if __name__ == '__main__':
    app.run(debug=True)