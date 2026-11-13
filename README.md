# SpendWise

SpendWise is a mobile-responsive student budget and spending insights web application designed to help university students manage their personal finances effectively. Users can track daily expenses, set monthly and category-based budgets, monitor spending habits, and receive budget alerts and personalized rule-based recommendations through an interactive dashboard.

## Key Features

- **Expense Tracking** – Add, edit, delete, and categorize daily expenses.
- **Budget Management** – Set monthly and category-specific spending limits.
- **Spending Dashboard** – View total expenses, remaining budgets, and financial summaries.
- **Spending Insights** – Visualize spending patterns through interactive charts.
- **Budget Alerts** – Receive notifications when spending approaches or exceeds budget limits.
- **Smart Recommendations** – Get rule-based suggestions to improve spending habits.
- **Responsive Design** – Access the platform from mobile phones, tablets, and desktops.

## Technology Stack

| **Component** | **Technology** | **Purpose** |
| --- | --- | --- |
| Frontend | React.js, Tailwind CSS | Responsive user interface |
| Backend | Node.js, Express.js | REST API and business logic |
| Database | PostgreSQL | Store users, expenses, and budgets |
| Authentication | JWT, bcrypt | User authentication and password security |
| Data Visualization | Recharts | Spending charts and analytics |
| Version Control | GitHub | Source code management and collaboration |
| Project Management | Linear | Agile sprint and task management |

## CI Pipeline

The planned GitHub Actions workflow will run automatically on every **push** and **pull request** to the `develop` branch.

### What it checks

| **Job** | **Tool** | **Purpose** |
| --- | --- | --- |
| Backend | `npm run lint` | Checks backend JavaScript code quality |
| Backend | `npm test` | Runs backend automated tests |
| Frontend | `npm run lint` | Runs ESLint checks |
| Frontend | `npm run build` | Ensures the React application compiles |

The pipeline will **fail** if any configured check does not pass.

### Run checks locally

**Backend (from `/backend`)**

```bash
npm install
npm run lint
npm test
```

**Frontend (from `/frontend`)**

```bash
npm install
npm run lint
npm run build
```

## Project Structure

```text
spendwise-atp/
├── frontend/
├── backend/
├── landing-page/
├── docs/
│   ├── requirements/
│   ├── wireframes/
│   ├── diagrams/
│   └── sprint-records/
├── .github/
│   └── workflows/
└── README.md
```

## Development Workflow

The project follows an Agile development methodology using Scrum practices. GitHub is used for version control, while Linear is used to manage user stories, tasks, and sprint progress.

Team members work on separate feature branches and submit pull requests for review before merging changes into the shared development branch.

## Team

- **Member 1:** [Udan Wanasinghe]
- **Member 2:** [Viran Kaushika]


