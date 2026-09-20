import confetti from 'canvas-confetti';

export function downloadResumeFile() {
  // Fire celebration confetti
  try {
    confetti({
      particleCount: 60,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#34d399', '#38bdf8', '#fbbf24']
    });
  } catch (e) {
    // Ignore if canvas isn't ready
  }

  const resumeText = `================================================================================
                                SRI RAM GOUD
          Data Analyst | AI & Machine Learning | Data Science | Generative AI
================================================================================
Location: Hyderabad, India
Email: sriramgoudc@gmail.com
Phone: +91 9398441219
GitHub: https://github.com/Sriramgoud0811
Target Roles: Data Analyst, Data Scientist, Machine Learning Engineer, AI Engineer

--------------------------------------------------------------------------------
PROFESSIONAL SUMMARY
--------------------------------------------------------------------------------
B.Tech Computer Science and Engineering graduate specializing in Artificial
Intelligence and Machine Learning (CGPA: 8.68/10) with verified experience in
end-to-end Data Analytics, Machine Learning algorithms, Business Intelligence,
and Generative AI applications. 

Evaluated 150,000+ enterprise records across 43 attributes in data analytics
internship, ranked in the Top 2% globally (Rank 2,000 / 100,000+) on Kaggle House
Prices Advanced Regression competition, and engineered full-stack healthcare risk
intelligence platforms.

--------------------------------------------------------------------------------
EDUCATION
--------------------------------------------------------------------------------
Bachelor of Technology in Computer Science & Engineering (AI & ML)
Malla Reddy College of Engineering and Technology (Autonomous), Hyderabad
Duration: 2022 – 2026
Cumulative Grade Point Average (CGPA): 8.68 / 10.0
Core Coursework: Artificial Intelligence, Machine Learning, Statistical Analysis,
Database Management Systems (DBMS), Data Structures & Algorithms (DSA).

--------------------------------------------------------------------------------
PROFESSIONAL EXPERIENCE
--------------------------------------------------------------------------------
Data Analytics Intern
Company: AIPulse: Enterprise AI Adoption & Business Performance Analytics
Duration: 2024 – 2025 | Location: Hyderabad, India

Key Responsibilities & Quantifiable Impact:
• Ingested and audited longitudinal dataset of 150,000+ records spanning 43
  attributes over a 4-year analytical window (2023–2026).
• Designed comprehensive data preparation pipelines in Python (Pandas, NumPy)
  and SQL for handling missing data, outlier normalization, and data validation.
• Formulated and monitored 7+ core business performance metrics including
  Adoption Rate, Revenue Impact, Cost Savings, and Implementation Timelines.
• Uncovered compound AI adoption expansion from ~33% in 2023 to ~39% in 2026,
  correlating with enterprise AI investment accelerating from ~$2.4B to ~$2.7B.
• Engineered multi-dimensional Power BI dashboards and interactive visualizations
  for C-suite and executive decision-makers.

--------------------------------------------------------------------------------
VERIFIED COMPETITIVE MILESTONE & HONORS
--------------------------------------------------------------------------------
• Kaggle Global Benchmark — Top 2% Worldwide Ranking (Rank 2,000 / 100,000+)
  Competition: House Prices: Advanced Regression Techniques
  Methodology: Handled missing value imputation, log-normal transformations,
  skewness correction, and regularized regression (Lasso, Ridge, OLS).
  Evaluation: Verified superior RMSE and R² benchmark performance.

--------------------------------------------------------------------------------
KEY TECHNICAL PROJECTS
--------------------------------------------------------------------------------
1. AI Hospital Intelligence & Clinical Readmission Risk System
   Live Demo: https://ai-hospital-intelligence-1.ai.studio/
   GitHub: https://github.com/Sriramgoud0811/ai-hospital-intelligence
   Stack: Python, Machine Learning, Scikit-learn, FastAPI, React, Tailwind CSS
   • Built end-to-end clinical decision support system predicting 30-day patient
     readmission risk.
   • Features interactive triage scoring, vital sign feature correlation, and
     asynchronous inference APIs.

2. AIPulse: Enterprise AI Adoption & Business Performance Analytics
   GitHub: https://github.com/Sriramgoud0811/AIPulse-Enterprise-AI-Adoption-Business-Performance-Analytics
   Stack: Python, Pandas, NumPy, SQL, Power BI, Statistical EDA
   • Ingested 150,000+ enterprise records across 43 features and 4 continuous years.
   • Evaluated sector-specific maturity indices, capex allocations, and ROI.

3. Customer Retention & Lifecycle Intelligence (E-Commerce RFM)
   GitHub: https://github.com/Sriramgoud0811/customer-retention-lifecycle-intelligence
   Stack: SQL, Power BI, Python, DAX, RFM Segmentation
   • Analyzed 100,000+ transaction records from Brazilian E-Commerce dataset.
   • Built 5-page interactive Power BI dashboard featuring cohort retention
     heatmaps and RFM segmentation matrix.

4. House Price Prediction — Advanced Regularized Regression
   GitHub: https://github.com/Sriramgoud0811/House-Price-Prediction
   Stack: Python, Scikit-learn, Pandas, NumPy, Regularized Regression
   • Achieved Top 2% global ranking among 100,000+ Kaggle competitors.

--------------------------------------------------------------------------------
TECHNICAL SKILLS MATRIX
--------------------------------------------------------------------------------
• Programming & Data: Python, SQL, Pandas, NumPy, Scikit-learn, MySQL
• Data Analytics: Data Cleaning, Data Validation, Transformation, EDA,
  Descriptive Statistics, Statistical Analysis, Hypothesis Testing, Trend Analysis
• Business Intelligence: Power BI, Advanced Excel, DAX, KPI Reporting,
  Dashboard Development, Data Storytelling
• Machine Learning: Regression, Classification, Regularization (Ridge/Lasso),
  Feature Engineering, SVM, Random Forest, XGBoost
• Generative AI: Prompt Engineering, RAG Architectures, Vector Embeddings,
  LangChain, Ollama, Mistral (Hands-on & Project Experience)
• AI / App Dev & Tools: FastAPI, React, Git, GitHub, Jupyter Notebook, VS Code

--------------------------------------------------------------------------------
CERTIFICATIONS
--------------------------------------------------------------------------------
• AWS Academy Cloud Foundations — Amazon Web Services
• Salesforce Developer with Agentblazer Champion Program — Salesforce
• Cambridge English C1 — Cambridge Assessment English
• Kaggle Advanced Regression Techniques Recognition — Kaggle
================================================================================`;

  const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'Sri_Ram_Goud_Resume.txt';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
