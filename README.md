# 🧠 Intelligent Job Role Predictor & Resume Generator

## 📌 Overview

This project implements an intelligent **Machine Learning pipeline** for predicting job roles from resume content and fetching real-time matching job listings using the **JSearch API**. It also generates **ATS-friendly resumes and cover letters** dynamically based on user inputs.

---

## 🚀 Features

- 🔎 **Job Role Prediction** using resume text with a trained ML model  
- 💼 **Real-time Job Matching** via RapidAPI’s JSearch  
- 🧠 **NLP-based Resume & Cover Letter Generation**  
- ✅ **ATS-Friendly Format**  
- 📈 **Customizable** resume content and skills  

---

## 🧠 ML Model Details

| Component          | Details                                  |
|--------------------|-------------------------------------------|
| **Data**           | Labeled text samples of skills/technologies mapped to job roles |
| **Vectorizer**     | `TfidfVectorizer`                         |
| **Classifier**     | `LogisticRegression` (from scikit-learn) |
| **Label Encoding** | `LabelEncoder`                           |
| **Train/Test**     | 80/20 split                              |
| **Performance**    | Optimized for quick inference            |

---

## 🛠️ Tech Stack

| Layer            | Tools Used                                 |
|------------------|---------------------------------------------|
| **Language**     | Python 🐍                                   |
| **ML Libraries** | `scikit-learn`, `pandas`, `TfidfVectorizer` |
| **Data**         | Sample labeled text (job roles, skills)     |
| **External API** | RapidAPI → JSearch                          |
| **Automation**   | `nest_asyncio`, `requests`, `io`            |

---


