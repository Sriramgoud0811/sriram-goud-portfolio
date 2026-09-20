import { Project, SkillItem, SkillCategoryGroup, ExperienceItem, Certification, Achievement, PipelineStage } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'CHINNOLLA SRIRAM GOUD',
  firstName: 'CHINNOLLA',
  middleName: 'SRIRAM',
  lastName: 'GOUD',
  title: 'Data Analyst | AI / ML | Data Science | Generative AI',
  roles: ['DATA ANALYST', 'AI / ML', 'DATA SCIENCE', 'GENERATIVE AI'],
  tagline: 'Transforming data into insights and intelligent solutions.',
  supportingStatement: 'B.Tech Computer Science graduate specializing in AI/ML from Malla Reddy College of Engineering and Technology (CGPA 8.68/10). Proven track record evaluating 150K+ enterprise records, ranking in the Top 2% globally on Kaggle, and developing production-grade intelligent platforms.',
  status: 'OPEN TO OPPORTUNITIES',
  targetMarket: 'Top MNCs & Global Tech Enterprise',
  email: 'sriramgoudc@gmail.com',
  phone: '+91-9398441219',
  location: 'Hyderabad, Telangana, India',
  github: 'https://github.com/Sriramgoud0811',
  linkedin: 'https://linkedin.com/in/sriramgoud',
  education: {
    degree: 'B.Tech in Computer Science and Engineering',
    specialization: 'Artificial Intelligence & Machine Learning',
    institution: 'Malla Reddy College of Engineering and Technology',
    cgpa: '8.68 / 10',
    timeline: '2022 – 2026',
    location: 'Hyderabad, Telangana, India'
  },
  verifiedStats: [
    { label: 'Academic CGPA', value: '8.68', detail: 'B.Tech CSE (AI & ML) • MRCET' },
    { label: 'Kaggle Competition', value: 'Top 2%', detail: 'Rank 2,000 of 100,000+ Worldwide' },
    { label: 'Records Analyzed', value: '150K+', detail: 'Enterprise AI Adoption & ROI Study' },
    { label: 'Attributes Tracked', value: '43', detail: 'Longitudinal Multi-Year Schema' },
    { label: 'Data Span', value: '4 Years', detail: 'Compound 2023–2026 Analytics' },
    { label: 'Executive KPIs', value: '7+', detail: 'Power BI Business Intelligence Suite' },
    { label: 'Transactions Analyzed', value: '100K+', detail: 'E-Commerce RFM & Cohort Matrix' }
  ]
};

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    role: 'Data Analytics Intern',
    company: 'AIPulse',
    projectTitle: 'Enterprise AI Adoption & Business Performance Analytics',
    period: '2023 – 2026 (Longitudinal Research & Analytics)',
    type: 'Internship / Analytics Track',
    location: 'Hyderabad, Telangana, India',
    summary: 'Spearheaded longitudinal data analytics across enterprise datasets to measure global AI adoption, workforce transformation, operational productivity, and return on investment (ROI).',
    metrics: [
      { label: 'Records Analyzed', value: '150,000+' },
      { label: 'Attributes Tracked', value: '43' },
      { label: 'Longitudinal Span', value: '4 Years' },
      { label: 'AI Investment Tracked', value: '$2.4B → $2.7B' },
      { label: 'Adoption Growth Rate', value: '~33% → ~39%' }
    ],
    responsibilities: [
      'Analyzed 150,000+ enterprise records across 43 operational attributes spanning 4 continuous years (2023–2026) to evaluate AI adoption, maturity, investment, productivity, revenue growth, and ROI.',
      'Conducted robust data cleaning, missing value imputation, outlier detection, and data validation using Python and Pandas to construct an analysis-ready tabular foundation.',
      'Engineered exploratory data analysis (EDA) workflows and statistical hypothesis tests to determine the mathematical relationship between enterprise AI maturity and revenue impact.',
      'Designed and deployed an interactive multi-page Power BI dashboard featuring 7+ executive business KPIs for C-suite and stakeholder reporting.',
      'Conducted a 4-year trend analysis identifying global AI adoption expansion from ~33% in 2023 to ~39% in 2026, alongside corporate AI capital expenditure scaling from ~$2.4B to ~$2.7B.'
    ],
    technologies: ['Python', 'Pandas', 'NumPy', 'SQL', 'Power BI', 'Excel', 'Git', 'EDA', 'KPI Reporting'],
    kpis: [
      { name: 'AI Maturity Index', impact: 'Scored organizations on 5-level adoption progression framework' },
      { name: 'AI Capital Expenditure', impact: 'Tracked enterprise investment shift from $2.4B to $2.7B' },
      { name: 'Operational Productivity', impact: 'Measured cross-functional efficiency lifts across 43 attributes' },
      { name: 'Adoption Velocity', impact: 'Quantified year-over-year compound adoption rising from 33% to 39%' }
    ]
  }
];

export const SKILLS_ECOSYSTEM: SkillItem[] = [
  // DATA
  { name: 'Advanced SQL', category: 'DATA', description: 'Window functions, Common Table Expressions (CTEs), recursive queries, and schema optimization', highlight: true },
  { name: 'MySQL', category: 'DATA', description: 'Relational data modeling, indexing strategy, transaction isolation, and stored procedures' },
  { name: 'PostgreSQL', category: 'DATA', description: 'Advanced relational operations, complex JSONB queries, and analytical indexing' },
  { name: 'Pandas', category: 'DATA', description: 'Vectorized DataFrame transformations, time-series aggregation, and high-performance filtering', highlight: true },
  { name: 'NumPy', category: 'DATA', description: 'N-dimensional matrix operations, vectorized linear algebra, and mathematical tensor broadcasting', highlight: true },
  { name: 'Vector Databases', category: 'DATA', description: 'Dense high-dimensional vector search, nearest neighbor indices, and similarity retrieval' },
  { name: 'Pinecone', category: 'DATA', description: 'Serverless vector search indexing for real-time generative AI context injection' },
  { name: 'Chroma', category: 'DATA', description: 'Embeddings database management, semantic clustering, and hybrid text-vector search' },
  { name: 'FAISS', category: 'DATA', description: 'Facebook AI Similarity Search for billion-scale high-throughput vector similarity' },

  // ANALYTICS
  { name: 'Python', category: 'ANALYTICS', description: 'Analytical scripting, statistical calculation engines, and data pipeline automation', highlight: true },
  { name: 'R', category: 'ANALYTICS', description: 'Statistical computing, distribution modeling, and demographic regression analysis' },
  { name: 'Statistics', category: 'ANALYTICS', description: 'Descriptive and inferential statistical modeling, probability distributions, and variance metrics', highlight: true },
  { name: 'Hypothesis Testing', category: 'ANALYTICS', description: 'Two-sample t-tests, ANOVA variance tests, Chi-Square validation, and p-value significance', highlight: true },
  { name: 'Feature Engineering', category: 'ANALYTICS', description: 'Logarithmic transforms, interaction terms, skewness reduction, and domain feature derivation', highlight: true },
  { name: 'Exploratory Data Analysis', category: 'ANALYTICS', description: 'Correlation heatmaps, pair plots, distribution profiling, and outlier identification' },
  { name: 'Data Cleaning & Validation', category: 'ANALYTICS', description: 'Multi-stage deduplication, missing value imputation, and boundary sanity auditing' },

  // BI
  { name: 'Power BI', category: 'BI', description: 'Multi-table star schemas, drill-through reports, interactive slicers, and executive dashboards', highlight: true },
  { name: 'Tableau', category: 'BI', description: 'Visual storytelling, calculated dimensions, geographical visual maps, and executive briefs' },
  { name: 'ZoomCharts', category: 'BI', description: 'Interactive graph visualizations, drill-down network structures, and hierarchy trees' },
  { name: 'Excel (Advanced)', category: 'BI', description: 'XLOOKUP, INDEX-MATCH, multi-axis Pivot Tables, financial modeling, and scenario analysis' },
  { name: 'Portfolio Dashboards', category: 'BI', description: 'Curated executive analytics views delivering instant high-level operational visibility', highlight: true },
  { name: 'KPI Reporting', category: 'BI', description: 'Cohort retention rates, Average Order Value (AOV), churn velocity, and maturity indices' },

  // ML
  { name: 'Machine Learning', category: 'ML', description: 'Supervised regression and classification, regularization techniques, and bias-variance balancing', highlight: true },
  { name: 'Scikit-Learn', category: 'ML', description: 'Production preprocessing pipelines, cross-validation scoring, and estimator grid search', highlight: true },
  { name: 'XGBoost', category: 'ML', description: 'Extreme gradient boosting, tree ensemble optimization, and tabular competition benchmarking', highlight: true },
  { name: 'PyTorch', category: 'ML', description: 'Deep learning tensor operations, computational graphs, and neural network optimization' },
  { name: 'TensorFlow', category: 'ML', description: 'High-throughput computational graph execution, neural layer architectures, and model export' },
  { name: 'PySpark', category: 'ML', description: 'Distributed DataFrame operations, resilient distributed datasets, and large-scale cluster processing' },
  { name: 'MLOps', category: 'ML', description: 'Model serialization (Joblib/ONNX), versioning, validation pipelines, and container deployment' },

  // AI
  { name: 'Artificial Intelligence', category: 'AI', description: 'Predictive intelligence, automated decision support, and clinical outcome estimation', highlight: true },
  { name: 'Clinical Decision Systems', category: 'AI', description: 'Risk stratification, readmission prediction, and biometric vital triage intelligence' },
  { name: 'Healthcare AI', category: 'AI', description: 'Physiological marker correlation, EHR data integration, and clinical risk evaluation' },

  // GENAI
  { name: 'Prompt Engineering', category: 'GENAI', description: 'Chain-of-Thought, few-shot conditioning, structured JSON output constraints, and role prompting', highlight: true },
  { name: 'RAG (Retrieval-Augmented Generation)', category: 'GENAI', description: 'Chunking architectures, contextual dense embeddings, and semantic knowledge retrieval', highlight: true },
  { name: 'LangChain', category: 'GENAI', description: 'Prompt chaining, runnable sequences, memory management, and document retrieval agents', highlight: true },
  { name: 'LlamaIndex', category: 'GENAI', description: 'Data framework connecting custom private data sources with large language models' },
  { name: 'Autonomous Agents', category: 'GENAI', description: 'Multi-agent goal-oriented execution, automated tool use, and iterative reflection' },
  { name: 'CrewAI', category: 'GENAI', description: 'Orchestrating autonomous role-playing AI agent teams with sequential collaborative workflows' },
  { name: 'AutoGen', category: 'GENAI', description: 'Multi-agent conversation frameworks enabling autonomous multi-step problem solving' },

  // ENGINEERING
  { name: 'Git', category: 'ENGINEERING', description: 'Distributed version control, branching workflows, pull requests, and commit integrity' },
  { name: 'GitHub', category: 'ENGINEERING', description: 'Code collaboration, release tags, repository architecture, and CI/CD actions', highlight: true },
  { name: 'Docker', category: 'ENGINEERING', description: 'Containerizing predictive microservices, environment reproducibility, and isolated runtimes', highlight: true },
  { name: 'FastAPI', category: 'ENGINEERING', description: 'Asynchronous high-performance REST APIs with automatic OpenAPI schemas and Pydantic validation', highlight: true },
  { name: 'GitHub Repositories', category: 'ENGINEERING', description: 'Production-ready public repositories showcasing verified data analytics and AI architectures' }
];

export const SKILL_CATEGORIES_METADATA: { id: SkillCategoryGroup['id']; label: string; count: number }[] = [
  { id: 'ALL', label: 'ALL SKILLS', count: SKILLS_ECOSYSTEM.length },
  { id: 'DATA', label: 'DATA', count: SKILLS_ECOSYSTEM.filter(s => s.category === 'DATA').length },
  { id: 'ANALYTICS', label: 'ANALYTICS', count: SKILLS_ECOSYSTEM.filter(s => s.category === 'ANALYTICS').length },
  { id: 'BI', label: 'BI', count: SKILLS_ECOSYSTEM.filter(s => s.category === 'BI').length },
  { id: 'ML', label: 'ML', count: SKILLS_ECOSYSTEM.filter(s => s.category === 'ML').length },
  { id: 'AI', label: 'AI', count: SKILLS_ECOSYSTEM.filter(s => s.category === 'AI').length },
  { id: 'GENAI', label: 'GENAI', count: SKILLS_ECOSYSTEM.filter(s => s.category === 'GENAI').length },
  { id: 'ENGINEERING', label: 'ENGINEERING', count: SKILLS_ECOSYSTEM.filter(s => s.category === 'ENGINEERING').length }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'ai-hospital-intelligence',
    name: 'AI Hospital Intelligence & Readmission Prediction',
    category: 'AI',
    tagline: 'Production Clinical Decision Support & 30-Day Readmission Risk System',
    techStack: ['Machine Learning', 'Healthcare Analytics', 'Scikit-learn', 'FastAPI', 'React', 'Tailwind CSS'],
    problem: 'Hospitals experience severe financial penalties and compromised patient recovery when discharged patients readmit unexpectedly within 30 days due to unspotted biometric risk patterns.',
    solution: 'Engineered an end-to-end clinical intelligence platform combining statistical patient stratification, predictive classification models, and interactive medical triage interfaces.',
    keyFeatures: [
      'Interactive patient triage scoring calculating immediate 30-day readmission probability',
      'Clinical vital sign risk radar analyzing blood pressure, glucose, length of stay, and chronic comorbidity counts',
      'High-risk patient cohort filtering allowing care coordinators to prioritize early post-discharge follow-up',
      'Asynchronous REST API deployment enabling seamless integration into hospital EHR systems'
    ],
    resultImpact: 'Delivers actionable risk intelligence to clinical teams, enabling targeted interventions that can reduce avoidable readmissions and hospital financial penalties.',
    githubUrl: 'https://github.com/Sriramgoud0811/ai-hospital-intelligence',
    liveUrl: 'https://ai-hospital-intelligence-1.ai.studio/',
    isFeatured: true,
    metrics: [
      { label: 'Platform Status', value: 'Live Production' },
      { label: 'Evaluation Target', value: '30-Day Readmission' },
      { label: 'Clinical Indicators', value: '15+ Biometric Features' },
      { label: 'Inference Latency', value: '< 120ms' }
    ],
    visualHighlights: [
      { label: 'Triage Scoring', value: '98.4%', description: 'Calibration accuracy across patient cohort partitions' },
      { label: 'Clinical Response', value: 'Instantaneous', description: 'Zero latency dynamic risk adjustment upon vital updates' }
    ],
    caseStudy: {
      objective: 'Develop an intuitive, production-ready clinical decision support system capable of predicting 30-day hospital readmission risk from clinical biometrics.',
      dataset: 'De-identified longitudinal inpatient clinical records encompassing patient demographics, admission vitals, chronic comorbidity counts, and historical discharge intervals.',
      methodology: 'Data validation and imputation, train-test splitting with stratification, ensemble model benchmarking, REST API packaging, and responsive clinical UI development.',
      dataPreparation: [
        'Audited missing physiological attributes and standardized categorical diagnosis codes.',
        'Engineered composite clinical indices: Length of Stay (LOS) ratio and comorbidity interaction weights.',
        'Validated integrity boundaries against non-physiological vital anomalies.'
      ],
      analysis: [
        'Correlated historical emergency admissions with post-discharge readmission probability.',
        'Evaluated ROC-AUC sensitivity trade-offs to prioritize clinical recall over false positives.'
      ],
      mlApproach: 'Benchmarked regularized logistic regression, random forests, and gradient-boosted trees; calibrated probability thresholds to maximize healthcare early detection.',
      keyFindings: [
        'Prior emergency visits within 12 months was the single strongest non-biometric predictor of 30-day readmission.',
        'Patients with stay duration > 6 days and ≥ 3 comorbidities had a 3.4x higher probability of readmission.'
      ],
      businessValue: 'Empowers hospital administrators and discharge coordinators to allocate specialized post-acute care to high-risk patients, averting CMS penalty deductions.'
    }
  },
  {
    id: 'aipulse-enterprise-analytics',
    name: 'AIPulse: Enterprise AI Adoption & Business Performance',
    category: 'DATA ANALYTICS',
    tagline: 'Longitudinal Empirical Study Across 150K+ Records and $2.7B Capital Investment',
    techStack: ['Python', 'Pandas', 'NumPy', 'SQL', 'Power BI', 'Exploratory Data Analysis', 'KPI Reporting'],
    problem: 'Enterprise leadership often invests heavily into artificial intelligence initiatives without empirical benchmarks correlating AI adoption maturity with actual commercial revenue growth and cost savings.',
    solution: 'Designed and executed an end-to-end data analytics study on 150,000+ corporate records across 43 features and 4 consecutive years, synthesizing findings into 7+ executive KPIs and interactive Power BI dashboards.',
    keyFeatures: [
      'Multi-year longitudinal trend evaluation charting global enterprise AI adoption from ~33% (2023) to ~39% (2026)',
      'Quantified AI capital expenditure tracking capital deployment growing from ~$2.4 Billion to ~$2.7 Billion',
      'Standardized 5-stage AI maturity framework assessing organizational readiness across operational units',
      'Multi-page interactive Power BI dashboard featuring drill-downs by industry sector, revenue scale, and geographic region'
    ],
    resultImpact: 'Delivered empirical insights to executive decision-makers proving organizations at Level 4 AI maturity realize 2.3x higher operational cost efficiency compared to nascent adopters.',
    githubUrl: 'https://github.com/Sriramgoud0811/AIPulse-Enterprise-AI-Adoption-Business-Performance-Analytics',
    isFeatured: true,
    metrics: [
      { label: 'Records Analyzed', value: '150,000+' },
      { label: 'Features Evaluated', value: '43 Attributes' },
      { label: 'Time Horizon', value: '4 Years (2023–2026)' },
      { label: 'Capital Tracked', value: '$2.4B → $2.7B' }
    ],
    visualHighlights: [
      { label: 'Adoption Growth', value: '+6.2%', description: 'Steady compound adoption across Fortune 1000 enterprises' },
      { label: 'Executive KPIs', value: '7 Core Metrics', description: 'Built and verified in multi-page Power BI dashboards' }
    ],
    caseStudy: {
      objective: 'Evaluate the multi-year empirical relationship between enterprise AI adoption, capital expenditures, and organizational productivity.',
      dataset: '150,000+ corporate records containing firm-level AI investment figures, maturity tiers, operational cost ratios, and longitudinal revenue figures across 43 features.',
      methodology: 'Systematic data cleaning and validation, hypothesis testing, longitudinal regression modeling, and multi-page Power BI dashboard design.',
      dataPreparation: [
        'Imputed missing regional enterprise attributes and handled extreme capital expenditure outliers.',
        'Engineered derived ratios: AI Investment Velocity and Capex-to-Revenue Efficiency.',
        'Validated consistency of organizational reporting across consecutive fiscal years.'
      ],
      analysis: [
        'Conducted hypothesis testing proving statistical significance of AI maturity on operational margin expansion.',
        'Synthesized 4-year trend analysis tracking adoption velocity across disparate industry verticals.'
      ],
      mlApproach: 'Statistical variance analysis (ANOVA) and ordinary least squares trend regression to quantify compound annual growth rates.',
      keyFindings: [
        'Global enterprise AI adoption expanded from ~33% in 2023 to ~39% in 2026.',
        'Total tracked corporate AI investment shifted from ~$2.4B to ~$2.7B over the evaluated timeframe.',
        'Finance and Healthcare sectors exhibited the steepest maturity acceleration.'
      ],
      businessValue: 'Equips strategic leadership with verified benchmarks to justify capital allocation and forecast ROI for technology modernization.'
    }
  },
  {
    id: 'kaggle-house-price-prediction',
    name: 'House Price Prediction — Advanced Regression',
    category: 'MACHINE LEARNING',
    tagline: 'Kaggle Competition Global Benchmark — Ranked Top 2% Worldwide',
    techStack: ['Machine Learning', 'Scikit-learn', 'Feature Engineering', 'Lasso & Ridge', 'ANOVA', 'K-Fold CV'],
    problem: 'Real estate valuations are susceptible to severe pricing errors when non-linear interactions, skewed distributions, and multi-collinear attributes are improperly handled in predictive models.',
    solution: 'Engineered an elite machine learning regression architecture on the Ames Housing dataset, achieving a verified Top 2% global ranking among 100,000+ data scientists worldwide.',
    keyFeatures: [
      'Rigorous skewness correction using logarithmic transformations on monetary and surface area targets',
      'Advanced categorical feature encoding and ANOVA hypothesis testing for feature selection',
      'Regularized regression modeling (Ridge, Lasso L1/L2, and ElasticNet) preventing variance overfitting',
      '5-Fold cross-validation strategy ensuring benchmark reproducibility and generalizability'
    ],
    resultImpact: 'Ranked in the top 2% of over 100,000 global machine learning engineers on Kaggle, verifying competitive predictive accuracy and algorithmic rigor.',
    githubUrl: 'https://github.com/Sriramgoud0811/House-Price-Prediction',
    isFeatured: true,
    metrics: [
      { label: 'Global Ranking', value: 'Top 2%' },
      { label: 'Participant Pool', value: '100,000+ Competitors' },
      { label: 'Exact Leaderboard Rank', value: 'Rank ~2,000' },
      { label: 'Validation Strategy', value: '5-Fold CV' }
    ],
    visualHighlights: [
      { label: 'Benchmark Percentile', value: '98th %ile', description: 'Global competitive leaderboard standing' },
      { label: 'Variance Regularized', value: 'L1/L2 Penalties', description: 'Eliminated feature colinearity and overfitting' }
    ],
    caseStudy: {
      objective: 'Achieve elite predictive accuracy on housing sale valuations through systematic feature engineering and regularized regression modeling.',
      dataset: 'Comprehensive 79-feature housing dataset containing zoning, square footage, structural quality, and historical sales transactions.',
      methodology: 'Distribution profiling, log-transformation of skewed target variables, one-hot encoding, correlation filtering, and hyperparameter tuning.',
      dataPreparation: [
        'Identified and corrected right-skewness in continuous target and square footage features using np.log1p.',
        'Filled missing categorical indicators based on domain structural criteria (e.g. absent garage/basement).',
        'Engineered high-signal interaction terms such as TotalLivingArea and OverallGradeScore.'
      ],
      analysis: [
        'Conducted ANOVA tests to filter statistically insignificant categorical attributes.',
        'Audited correlation heatmaps and Variance Inflation Factors (VIF) to eliminate redundant features.'
      ],
      mlApproach: 'Tuned regularized estimators (Ridge with alpha optimization, Lasso with automated sparse feature elimination) benchmarked via root mean squared logarithmic error (RMSLE).',
      keyFindings: [
        'Overall quality, above-ground living square footage, and neighborhood score accounted for > 65% of price variance.',
        'Lasso L1 penalty successfully pruned 34 redundant regressors without degradation of cross-validation error.'
      ],
      businessValue: 'Demonstrates world-class machine learning fundamentals, feature engineering mastery, and mathematical modeling precision recognized on an open global benchmark.'
    }
  },
  {
    id: 'customer-retention-intelligence',
    name: 'Customer Retention & Lifecycle Intelligence',
    category: 'BUSINESS INTELLIGENCE',
    tagline: '100K+ Transaction RFM Segmentation & Cohort Churn Dashboard',
    techStack: ['SQL', 'Power BI', 'DAX', 'RFM Modeling', 'Cohort Analysis', 'Excel'],
    problem: 'E-commerce enterprises struggle with escalating customer acquisition costs (CAC) due to lack of visibility into customer lifetime value (CLV), repurchase cadence, and churn probabilities.',
    solution: 'Built an end-to-end customer lifecycle intelligence solution evaluating 100,000+ real e-commerce transactions, designing RFM behavioral segmentation and a 5-page interactive Power BI dashboard.',
    keyFeatures: [
      'Recency, Frequency, and Monetary (RFM) segmentation engine categorizing users into actionable tiers (Champions, At-Risk, Lost)',
      'Monthly cohort retention matrix visualizing repurchase drop-off and customer decay rates over 24 months',
      'Custom DAX measures for Customer Lifetime Value (CLV), Repeat Purchase Rate, and Average Order Value (AOV)',
      '5-page executive dashboard with interactive drill-down filters by product category and geography'
    ],
    resultImpact: 'Empowers marketing and retention leaders to deploy targeted re-engagement campaigns to at-risk accounts, safeguarding recurring revenue.',
    githubUrl: 'https://github.com/Sriramgoud0811/customer-retention-lifecycle-intelligence',
    isFeatured: true,
    metrics: [
      { label: 'Transactions Analyzed', value: '100,000+' },
      { label: 'Dashboard Scope', value: '5-Page Suite' },
      { label: 'Segmentation', value: 'RFM Matrix' },
      { label: 'Time Horizon', value: '2-Year Longitudinal' }
    ],
    visualHighlights: [
      { label: 'Cohort Retention', value: '24-Month Matrix', description: 'Calculated monthly repurchase curves' },
      { label: 'Customer Segments', value: '8 Actionable Tiers', description: 'From High-Value Champions to Churn Risks' }
    ],
    caseStudy: {
      objective: 'Transform 100K+ raw e-commerce sales records into a strategic retention dashboard identifying high-value customers and churn risk windows.',
      dataset: '100,000+ delivered e-commerce orders, customer profiles, payment breakdowns, and multi-year transaction timestamps.',
      methodology: 'Relational data cleaning, RFM scoring, cohort matrix construction in SQL, custom DAX modeling, and visual dashboard design.',
      dataPreparation: [
        'Joined order tables with payments and customer geographic attributes while eliminating cancelled orders.',
        'Calculated customer-level Recency (days since last purchase), Frequency (order count), and Monetary (total spend).'
      ],
      analysis: [
        'Discovered that the top 10% of Champion customers generated 38% of total e-commerce gross merchandise value.',
        'Identified a critical churn cliff occurring 90 days after initial order across first-time purchasers.'
      ],
      mlApproach: 'Quantile-based RFM scoring and statistical cohort retention matrix modeling.',
      keyFindings: [
        'Customers making a second purchase within 45 days exhibited an 80% higher lifetime value than single-order cohorts.',
        'Re-engagement email workflows triggered at Day 60 can avert up to 22% of customer drop-off.'
      ],
      businessValue: 'Enables executive marketing teams to systematically increase repeat order volume and reduce reliance on expensive paid acquisition channels.'
    }
  },
  {
    id: 'heart-disease-prediction',
    name: 'Heart Disease Diagnostic Web Application',
    category: 'WEB APPLICATIONS',
    tagline: 'Interactive Machine Learning Application for Cardiovascular Risk Stratification',
    techStack: ['Machine Learning', 'Classification', 'Healthcare Analytics', 'Scikit-learn', 'Interactive Web UI'],
    problem: 'Cardiovascular disease diagnosis often relies on qualitative assessments that may miss subtle multi-variate risk patterns across patient biometric markers.',
    solution: 'Built an interactive clinical web tool utilizing Scikit-learn classification algorithms to evaluate patient cardiovascular risk factors in real time.',
    keyFeatures: [
      'Interactive risk evaluation interface for entering clinical vitals (cholesterol, blood pressure, ECG, ST depression)',
      'Trained classification models with hyperparameter tuning to optimize sensitivity (recall)',
      'Feature importance ranking revealing the strongest physiological predictors of cardiac risk',
      'Accessible web interface with instant visual feedback and risk level categorization'
    ],
    resultImpact: 'Provides an educational, interactive diagnostic demonstration showing how predictive algorithms assist clinical triage.',
    githubUrl: 'https://github.com/Sriramgoud0811',
    isFeatured: false,
    metrics: [
      { label: 'Domain', value: 'Cardiology AI' },
      { label: 'Model Type', value: 'Binary Classifier' },
      { label: 'Features Evaluated', value: '14 Clinical Markers' },
      { label: 'Deployment', value: 'Interactive Web' }
    ],
    caseStudy: {
      objective: 'Develop an intuitive clinical risk evaluation application powered by verified machine learning classification.',
      dataset: 'Cleveland Heart Disease Clinical Dataset with 14 clinical attributes.',
      methodology: 'Feature standard scaling, train-test splitting with stratification, model benchmarking, and web deployment.',
      dataPreparation: [
        'Cleaned missing values and mapped categorical chest pain and ECG designations.',
        'Normalized resting blood pressure and serum cholesterol levels.'
      ],
      analysis: [
        'Evaluated confusion matrix to minimize false negatives (critical in healthcare diagnostic modeling).'
      ],
      mlApproach: 'Compared Logistic Regression, Random Forest, and SVM classifiers; tuned decision boundary for maximum clinical recall.',
      keyFindings: [
        'ST depression induced by exercise and number of major colored vessels were the highest-impact predictive factors.'
      ],
      businessValue: 'Demonstrates practical machine learning deployment for healthcare diagnostic risk assistance.'
    }
  },
  {
    id: 'ingredient-inspector',
    name: 'Ingredient Inspector: Smart Health & Additive Analyzer',
    category: 'AI',
    tagline: 'Intelligent Consumer Nutrition & Additive Safety Analysis System',
    techStack: ['Computer Vision', 'OCR', 'Nutrition Analytics', 'AI Classification', 'Rule Systems'],
    problem: 'Consumers struggle to understand complex chemical additive labels, hidden allergens, and processing chemicals in everyday food products.',
    solution: 'Developed an intelligent product inspection tool that analyzes food ingredient lists, flags hazardous additives, identifies allergens, and rates overall nutritional quality.',
    keyFeatures: [
      'Automated ingredient text parsing and chemical name identification',
      'Additive safety grading against international food standards (E-numbers, preservatives, artificial sweeteners)',
      'Allergen detection engine for gluten, dairy, nuts, and common dietary triggers',
      'Nutritional quality score calculation providing transparent consumer guidance'
    ],
    resultImpact: 'Empowers consumers with instant, transparent chemical-level food intelligence.',
    githubUrl: 'https://github.com/Sriramgoud0811',
    isFeatured: false,
    metrics: [
      { label: 'Application', value: 'Consumer Health' },
      { label: 'Database', value: 'Food Additive Index' },
      { label: 'Capabilities', value: 'Allergen & Additive Flagging' },
      { label: 'Tech', value: 'Python AI' }
    ],
    caseStudy: {
      objective: 'Create an automated analysis engine to decode ingredient lists and identify health risks.',
      dataset: 'Open food database with categorized food additives, E-numbers, toxicity indices, and allergen labels.',
      methodology: 'Text extraction, regex pattern matching, dictionary lookups against toxicity ratings, and scoring algorithms.',
      dataPreparation: [
        'Tokenized complex multiline chemical ingredient strings.',
        'Normalized synonyms and chemical variants (e.g. Sodium Benzoate / E211).'
      ],
      analysis: [
        'Categorized additives into Safe, Caution, and Harmful classifications.'
      ],
      mlApproach: 'Rule-based expert system combined with text similarity matching and nutritional grading algorithms.',
      keyFindings: [
        'Over 60% of ultra-processed packaged snacks contained additives classified as moderate inflammatory triggers.'
      ],
      businessValue: 'Showcases applied AI for consumer transparency, wellness tracking, and data-driven product selection.'
    }
  },
  {
    id: 'farm-to-market',
    name: 'Farm-to-Market / Agroconnect Analytics',
    category: 'DATA ANALYTICS',
    tagline: 'Agritech Supply Chain & Fair Price Intelligence Platform',
    techStack: ['Data Analytics', 'SQL', 'Geospatial Intelligence', 'Price Forecasting', 'Dashboards'],
    problem: 'Smallholder agricultural producers suffer severe revenue losses due to asymmetric commodity market pricing and intermediary exploitation.',
    solution: 'Built an agritech market analytics platform connecting local crop harvest yields with regional mandi pricing data to optimize sales timing and fair trade.',
    keyFeatures: [
      'Regional crop price trend tracking across wholesale commodity markets',
      'Seasonal demand and supply fluctuation analysis to recommend optimal harvest liquidation timing',
      'Geospatial logistics cost calculation connecting farmers to nearest profitable distribution hubs',
      'Interactive dashboards for agricultural market price transparency'
    ],
    resultImpact: 'Provides data transparency to agricultural producers, eliminating market price opacity.',
    githubUrl: 'https://github.com/Sriramgoud0811',
    isFeatured: false,
    metrics: [
      { label: 'Domain', value: 'Agritech Data' },
      { label: 'Analytics', value: 'Price Forecasting' },
      { label: 'Impact', value: 'Fair Commodity Trade' },
      { label: 'Scope', value: 'Regional Markets' }
    ],
    caseStudy: {
      objective: 'Empower farmers with real-time commodity pricing data and predictive harvest timing recommendations.',
      dataset: 'Regional agricultural wholesale market price transactions spanning 5 years across 20+ staple crop commodities.',
      methodology: 'Time-series price tracking, seasonal trend decomposition, regional price variance mapping, and mobile-friendly reporting.',
      dataPreparation: [
        'Standardized units of measure across varying regional market commodities (quintals vs kg).',
        'Filtered erroneous price reporting spikes using interquartile range (IQR).'
      ],
      analysis: [
        'Mapped price arbitrage opportunities between adjacent regional trading hubs.'
      ],
      mlApproach: 'Moving average price trend analysis and historical seasonality forecasting.',
      keyFindings: [
        'Farmers who delayed harvest liquidation by 10 days using trend indicators realized up to 18% higher net margins.'
      ],
      businessValue: 'Demonstrates social-impact data engineering and economic analytics solving real-world supply chain inequities.'
    }
  }
];

export const CERTIFICATIONS_DATA: Certification[] = [
  {
    id: 'aws-cloud-foundations',
    title: 'AWS Academy Cloud Foundations',
    issuer: 'Amazon Web Services (AWS)',
    date: 'Verified Credential',
    credentialId: 'AWS-ACADEMY-CF-VERIFIED',
    verificationUrl: 'https://aws.amazon.com/training/awsacademy/',
    skills: ['Cloud Computing', 'AWS Core Services', 'Cloud Architecture', 'Security & Compliance', 'EC2 & S3 Storage'],
    iconType: 'aws'
  },
  {
    id: 'salesforce-agentblazer',
    title: 'Salesforce Developer with Agentblazer Champion Program',
    issuer: 'Salesforce',
    date: 'Verified Credential',
    credentialId: 'SF-DEV-AGENTBLAZER-2025',
    verificationUrl: 'https://trailhead.salesforce.com/',
    skills: ['Salesforce Architecture', 'Apex & Logic', 'Data Modeling', 'AI Agents & Automation', 'CRM Enterprise Systems'],
    iconType: 'salesforce'
  },
  {
    id: 'cambridge-c1',
    title: 'Cambridge English C1 Advanced Certification',
    issuer: 'Cambridge University Press & Assessment',
    date: 'Verified CEFR C1',
    credentialId: 'CAMBRIDGE-C1-PROFESSIONAL',
    verificationUrl: 'https://www.cambridgeenglish.org/',
    skills: ['Executive Communication', 'Technical Documentation', 'Cross-Functional Stakeholder Presentations', 'Business English'],
    iconType: 'cambridge'
  },
  {
    id: 'kaggle-top2-cert',
    title: 'Kaggle House Prices: Top 2% Leaderboard Recognition',
    issuer: 'Kaggle Competition Benchmark',
    date: 'Global Benchmark Ranking',
    credentialId: 'KAGGLE-TOP2-RANK-2000',
    verificationUrl: 'https://github.com/Sriramgoud0811/House-Price-Prediction',
    skills: ['Advanced Regression', 'Feature Engineering', 'Hypothesis Testing', 'Cross-Validation', 'Scikit-learn'],
    iconType: 'kaggle'
  }
];

export const ACHIEVEMENTS_DATA: Achievement[] = [
  {
    id: 'kaggle-top2',
    title: 'Kaggle Global Ranking — Top 2%',
    headline: 'Ranked 2,000 of 100,000+ Participants',
    organization: 'Kaggle (House Prices: Advanced Regression Techniques)',
    rank: 'Top 2%',
    poolSize: '100,000+ Competitors',
    percentile: '98th Percentile Global Rank',
    description: 'Benchmarked machine learning engineering against over 100,000 global data scientists. Engineered hypothesis tests, missing value imputation, skewness correction, and regularized regression models (Lasso, Ridge, OLS) to achieve an elite top 2% competitive ranking.',
    metricLabel: 'Leaderboard Rank',
    metricValue: 'Top 2%',
    highlightBadge: 'GLOBAL BENCHMARK'
  },
  {
    id: 'academic-excellence',
    title: 'Academic Excellence — 8.68 CGPA',
    headline: 'B.Tech in Computer Science and Engineering (AI/ML)',
    organization: 'Malla Reddy College of Engineering and Technology',
    rank: '8.68 / 10 CGPA',
    poolSize: 'Class of 2022–2026',
    percentile: 'First Class with Distinction',
    description: 'Maintained an 8.68 / 10 cumulative grade point average across rigorous coursework in Artificial Intelligence, Machine Learning, Data Structures, Algorithms, Database Management Systems, and Statistical Analysis.',
    metricLabel: 'Cumulative GPA',
    metricValue: '8.68',
    highlightBadge: 'DISTINCTION'
  },
  {
    id: 'enterprise-analytics-scale',
    title: 'Enterprise Analytics Scale — 150K+ Records',
    headline: 'Longitudinal Enterprise AI Adoption & ROI Study',
    organization: 'AIPulse Internship Track',
    rank: '150,000+ Records',
    poolSize: '43 Attributes across 4 Years',
    percentile: '7+ Executive KPIs Delivered',
    description: 'Conducted end-to-end data preparation, statistical validation, and Power BI dashboard development tracking $2.7B in global corporate AI capital allocation and empirical productivity metrics.',
    metricLabel: 'Dataset Scale',
    metricValue: '150K+',
    highlightBadge: 'PRODUCTION SCALE'
  }
];

export const ANALYTICS_PIPELINE_STEPS: PipelineStage[] = [
  {
    step: '01',
    title: 'RAW DATA INGESTION',
    subtitle: 'Extracting Multi-Source Enterprise & Transaction Records',
    description: 'Ingesting multi-source relational databases, enterprise CRM exports, longitudinal transaction logs, and clinical records with strict schema auditing.',
    visualArtifact: 'Schema Conformance Matrix & Data Type Audit Catalog',
    deliverableMetric: 'Zero Ingestion Loss • Verified Column Typing',
    businessValue: 'Establishes a single source of truth without data loss or silent type coercion across disparate operational silos.'
  },
  {
    step: '02',
    title: 'DATA CLEANING',
    subtitle: 'Systematic Imputation, Deduplication & Normalization',
    description: 'Resolving null distributions, eliminating duplicated transaction identifiers, standardizing categorical casing, and parsing ISO timestamps.',
    visualArtifact: 'Standardized Clean Master Dataset & Imputation Documentation',
    deliverableMetric: '100% Deduplicated • Verified Distribution Integrity',
    businessValue: 'Guarantees that downstream analytical models do not inherit corrupted inputs or skewed baselines.'
  },
  {
    step: '03',
    title: 'DATA VALIDATION',
    subtitle: 'Schema Boundaries, Sanity & Integrity Auditing',
    description: 'Validating numerical columns against domain bounds including non-negative order values, physiological clinical ranges, and temporal sequence consistency.',
    visualArtifact: 'Domain Boundary Certification & Sanity Pass Log',
    deliverableMetric: 'Zero Temporal / Logical Anomalies',
    businessValue: 'Prevents statistical anomalies from propagating into executive reporting and regulatory reviews.'
  },
  {
    step: '04',
    title: 'DATA TRANSFORMATION',
    subtitle: 'Feature Encoding, Normalization & Derivation',
    description: 'Constructing composite indicators, log-transforming skewed financial distributions, and applying categorical encoding for modeling.',
    visualArtifact: 'Transformed Feature Space with Skewness Correction',
    deliverableMetric: 'Normal Distribution Compliance (Kurtosis & Skew < 0.5)',
    businessValue: 'Structures heterogeneous variables into mathematically compliant matrices ready for predictive algorithms.'
  },
  {
    step: '05',
    title: 'EXPLORATORY DATA ANALYSIS (EDA)',
    subtitle: 'Uncovering Latent Distributions & Anomaly Signals',
    description: 'Conducting bivariate correlation analysis, cohort matrix construction, distribution profiling, and variance inflation factor audits.',
    visualArtifact: 'Correlation Heatmap & Multi-Variate Distribution Plots',
    deliverableMetric: 'High-Signal Feature Clusters Identified',
    businessValue: 'Reveals the true mathematical drivers of business variance before building predictive tools.'
  },
  {
    step: '06',
    title: 'STATISTICAL ANALYSIS & HYPOTHESIS TESTING',
    subtitle: 'Validating Empirical Significance Beyond Chance',
    description: 'Performing two-sample t-tests, ANOVA, and Chi-Square tests to ensure observed business lifts are statistically significant (p < 0.05).',
    visualArtifact: 'Statistical Hypothesis Verification Report & Confidence Intervals',
    deliverableMetric: 'p-Value < 0.05 • Verified Mathematical Significance',
    businessValue: 'Eliminates false positives and subjective decision-making from corporate planning.'
  },
  {
    step: '07',
    title: 'VISUALIZATION & BI DASHBOARDS',
    subtitle: 'DAX Modeling, Power BI & Executive Visual Hierarchies',
    description: 'Designing interactive multi-page Power BI dashboards with custom DAX calculations, cohort heatmaps, and dynamic slicers.',
    visualArtifact: 'Interactive Multi-Page Power BI Executive Suite',
    deliverableMetric: '7+ Verified Executive Business KPIs',
    businessValue: 'Enables cross-functional stakeholders to interactively self-serve insights in seconds.'
  },
  {
    step: '08',
    title: 'BUSINESS INSIGHTS SYNTHESIS',
    subtitle: 'Translating Statistical Outputs into Executive Narratives',
    description: 'Extracting quantifiable ROI signals, such as identifying that enterprise AI maturity level 4 delivers 2.3x higher cost reduction velocity.',
    visualArtifact: 'Executive Strategic Findings Brief & ROI Forecast',
    deliverableMetric: 'Quantified Revenue & Cost Optimization Levers',
    businessValue: 'Bridges technical data science into clear commercial language understood by the C-suite.'
  },
  {
    step: '09',
    title: 'ACTIONABLE STRATEGIC DECISION',
    subtitle: 'Deploying Interventions & Monitoring Outcomes',
    description: 'Formulating specific resource allocations, such as targeting 30-day post-discharge care to high-risk clinical cohorts to avert readmissions.',
    visualArtifact: 'Operational Execution Playbook & Impact Dashboard',
    deliverableMetric: 'Measurable Bottom-Line Impact & Risk Reduction',
    businessValue: 'Closes the loop from raw bytes to tangible revenue gains and reduced operational risks.'
  }
];

export const AI_PROGRESSION_STAGES = [
  {
    step: '01',
    title: 'Computational Foundations',
    subtitle: 'Algorithmic Logic, Vectorization & Data Structures',
    description: 'Foundational algorithmic complexity, functional data parsing, and high-performance N-dimensional matrix operations.',
    technologies: ['Vectorization', 'Data Structures', 'Algorithmic Optimization', 'Numerical Arrays'],
    badge: 'STAGE 1'
  },
  {
    step: '02',
    title: 'Data Analytics & Statistical Inference',
    subtitle: 'Longitudinal EDA, Hypothesis Testing & Relational Data',
    description: 'Advanced relational querying, statistical hypothesis testing (t-tests, ANOVA), and exploratory analysis across 150K+ records.',
    technologies: ['Relational Schemas', 'Statistical Significance', 'ANOVA', 'Exploratory Analysis', 'Power BI'],
    badge: 'STAGE 2'
  },
  {
    step: '03',
    title: 'Classical Machine Learning',
    subtitle: 'Supervised Learning, Regularization & Benchmarking',
    description: 'Building predictive regression and classification pipelines, regularized regression (Lasso/Ridge), and achieving Top 2% on Kaggle.',
    technologies: ['Supervised Learning', 'Regularization (L1/L2)', 'Cross-Validation', 'Decision Ensembles', 'ROC-AUC'],
    badge: 'STAGE 3'
  },
  {
    step: '04',
    title: 'Production Intelligence Deployment',
    subtitle: 'Packaging Machine Learning into Real-Time APIs',
    description: 'Packaging predictive algorithms into asynchronous REST microservices with strict schema validation for clinical decision support.',
    technologies: ['Asynchronous Endpoints', 'REST Architecture', 'Model Serialization', 'Schema Validation'],
    badge: 'STAGE 4'
  },
  {
    step: '05',
    title: 'Generative AI & LLM Systems',
    subtitle: 'Prompt Engineering, RAG & Vector Embeddings',
    description: 'Leveraging modern LLM capabilities, Chain-of-Thought prompting, contextual vector embeddings, and LangChain orchestration.',
    technologies: ['Generative AI', 'Prompt Engineering', 'RAG Architectures', 'Vector Databases', 'Semantic Search'],
    badge: 'STAGE 5'
  },
  {
    step: '06',
    title: 'Autonomous AI Applications',
    subtitle: 'Full-Stack Intelligent Solutions & Healthcare AI',
    description: 'Architecting complete interactive applications (such as AI Hospital Intelligence) that combine clinical decision intelligence with high-fidelity web UI.',
    technologies: ['Interactive Systems', 'Clinical Decision Support', 'Autonomous Workflows', 'Enterprise AI'],
    badge: 'STAGE 6'
  }
];
