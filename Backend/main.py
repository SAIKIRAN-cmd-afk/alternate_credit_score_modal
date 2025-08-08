from flask import Flask, request, jsonify
import pandas as pd
import sqlite3
import os

app = Flask(_name_)

DATABASE = "data.db"
CSV_PATH = "https://raw.githubusercontent.com/SAIKIRAN-cmd-afk/alternate_credit_score_modal/refs/heads/main/dataset.csv"

def init_db():
    if not os.path.exists(DATABASE):
        df = pd.read_csv(CSV_PATH)
        conn = sqlite3.connect(DATABASE)
        df.to_sql("users", conn, index=False, if_exists='replace')
        conn.close()

@app.route("/get_user_info", methods=["POST"])
def get_user_info():
    data = request.json
    name = data.get("name")
    age = data.get("age")
    gender = data.get("gender")

    conn = sqlite3.connect(DATABASE)
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM users WHERE Name=? AND Age=? AND gender=?", (name, age, gender))
    row = cursor.fetchone()
    col_names = [desc[0] for desc in cursor.description]
    conn.close()

    if row:
        result = dict(zip(col_names, row))
        return jsonify(result)
    else:
        return jsonify({"error": "User not found"}), 404

if _name_ == "_main_":
    init_db()
    app.run(debug=True)
