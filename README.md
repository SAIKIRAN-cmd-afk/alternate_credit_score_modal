Alternative Credit Scoring Model

**Hackathon Project | Team of 5**

---

##  Problem Statement

Traditional credit scoring models heavily rely on formal credit history, which excludes millions of individuals who may still be creditworthy. This project explores an **alternative credit scoring system** using non-traditional data sources such as rent payments, utility bills, education levels, cash flows, and employment status to help include the "credit invisible" population in financial systems.

---
WEBSITE LINK : 
 https://alternate-credit-system.windsurf.build
## 📊 Dataset

Since public alternative credit datasets are limited, we simulate realistic applicant profiles using features like:

- Monthly rent payments
- Utility bill payment history
- Education level
- Monthly cash inflow and outflow
- Employment status (e.g., employed, self-employed, unemployed)

> 📁 Generated in `data/simulated_credit_data.csv` using `simulate_data.py`

---

##  Tech Stack

| Layer        | Tool/Tech            |
|--------------|----------------------|
| 💻 Frontend  | Streamlit            |
| ⚙️ Backend   | Flask              |
| 🧠 ML Model  | Scikit-learn (Random Forest) |
| 📊 Explainability | SHAP          |
| 🧪 Testing   | Pytest               |
| 🔍 Version Control | Git + GitHub |
| 🗃️ Deployment (Optional) | Render/HuggingFace |

---

## 👥 Team Members

- Sarthak Siddharth Joshi
- Siddhant Ganesh Deokar
- K. Sai Kiran
- Jeetesh Auddy
- Baibhav Bharadwaj Uzir


---



```bash
alternate-credit-scoring-model/
│
├── data/                     # Simulated data generation
│   └── simulate_data.py
│   └── simulated_credit_data.csv
│
├── model/                    # ML training and saved model
│   └── train_model.py
│   └── model.pkl
│
├── backend/                  # Flask backend
│   └── main.py
│   └── data.csv
│
├── frontend/                 # Streamlit UI
│   └── app.py
│
├── explainability/           # SHAP-based interpretability
│   └── shap_explain.py
│
├── tests/                    # Unit tests (optional)
│
├── requirements.txt          # Python dependencies
├── README.md                 # Project overview
└── .gitignore
