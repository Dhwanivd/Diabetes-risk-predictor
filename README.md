# Diabetes-Risk-Prediction-System
End-to-end diabetes risk prediction app using a Python ML model integrated with a Node.js (Express) backend and HTML/CSS frontend. Takes yes/no health inputs, processes them into binary features, and returns a real-time prediction on diabetes risk.

### 📌 Overview  
A full-stack web application that predicts an individual’s risk of diabetes based on 16 binary (yes/no) diagnostic inputs. Combines ML model inference in Python with a Node.js backend and a clean HTML/CSS frontend.

### 🔧 Tech Stack  
- **Frontend**: HTML, CSS, Javascript  
- **Backend**: Node.js, Express.js
- **DataBase**: MongoDB  
- **ML Model**: Python
- 
---

### 🚀 Features  
- Real-time prediction based on user inputs  
- Clean API communication between Node and Python  
- Lightweight, responsive UI  
- Modular and production-ready structure  

---

### 🧪 Model Details  
- Dataset: UCI repository  
- Preprocessing: Binary transformation of medical features  
- Algorithms: Random Forest 
- Evaluation: Accuracy, F-Score, ROC  

---

### 🛠️ Setup Instructions  
```bash
# 1. Clone the repo
git clone https://github.com/Dhwanivd/Diabetes-Risk-Prediction-System
cd diabetes-risk-predictor

# 2. Install backend dependencies
cd backend
npm install

# 3. Install Python dependencies
cd ../model
pip install -r requirements.txt

# 4. Run the backend server
cd ../backend
node index.js

# 5. Open index.html from /frontend in browser
```

---

### 📈 Sample Prediction  
**Input**: 16 binary answers (yes/no)  
**Output**: "Yes" or "No" (Diabetes Risk)  

---

### 🤝 Contributions  
Open to pull requests, suggestions, and feature enhancements.


