
# SpendWise

SpendWise is a mobile-responsive student budget and spending insights web application designed to help university students manage their personal finances. Users can track daily expenses, set monthly and category-based budgets, visualize spending patterns, receive budget alerts, and get rule-based spending recommendations through an interactive dashboard.

## Key Features

- **Expense Tracking** – Add, edit, delete, and categorize daily expenses.
- **Budget Management** – Set monthly and category-specific spending limits.
- **Spending Dashboard** – View total expenses, remaining budgets, and spending summaries.
- **Visual Analytics** – Understand spending habits through charts and reports.
- **Budget Alerts** – Receive warnings when spending approaches or exceeds budget limits.
- **Smart Recommendations** – Get rule-based suggestions to improve spending habits.
- **User Authentication** – Secure registration and login.

## Technology Stack

| Component | Technology | Purpose |
| --- | --- | --- |
| Frontend | React.js, Tailwind CSS | Mobile-responsive user interface |
| Backend | Node.js, Express.js | REST API and business logic |
| Database | PostgreSQL | Store users, expenses, and budgets |
| Authentication | JWT, bcrypt | User authentication and password security |
| Charts | Recharts | Spending visualization |
| Landing Page | HTML, CSS, JavaScript | Project marketing website |
| Version Control | GitHub | Source code management |
| Project Management | Linear | Agile sprint and task tracking |
| UI/UX Design | Figma | Wireframes and interactive prototype |

**Note:** The application technology stack is proposed and may be updated during development.

## Project Structure

```text
spendWise/
├── frontend/             # React web application (planned)
├── backend/              # Express.js REST API (planned)
├── landing-page/         # Marketing website
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   ├── favicon.svg
│   └── README.md
├── docs/                 # Project documentation (planned)
└── README.md             # Main project documentation
```

## Landing Page

The SpendWise landing page is a responsive marketing website developed using HTML, CSS, and JavaScript.

It introduces the proposed application, highlights its key features, and includes an interactive budget calculator.

### Run the Landing Page Locally

1. Clone or download the repository.
2. Open the `landing-page` folder.
3. Open `index.html` in a web browser.

Alternatively, use the **Live Server** extension in Visual Studio Code.

## CI Pipeline

A GitHub Actions continuous integration workflow is planned for the application development phase.

Once configured, the workflow will run automatically on every **push** and **pull request** to the `develop` branch.

### Planned Checks

| Job | Tool | Purpose |
| --- | --- | --- |
| Backend | `npm run lint` | JavaScript code quality checks |
| Backend | `npm test` | Backend unit testing |
| Frontend | `npm run lint` | ESLint checks |
| Frontend | `npm run build` | Verify the React application builds successfully |

The pipeline will fail if any configured check does not pass.

### Run Checks Locally

Once the frontend and backend applications and their npm scripts are configured:

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

## Agile Development

SpendWise follows an Agile development approach using Scrum practices.

The development process includes:

- Sprint planning
- Regular team stand-ups
- Sprint reviews
- Sprint retrospectives
- Product backlog management
- Feature branching and pull request reviews

### Git Branching Strategy

| Branch | Purpose |
| --- | --- |
| `main` | Stable project version |
| `develop` | Integration of completed work |
| `feature/*` | Development of individual features |
| `docs/*` | Documentation updates |
| `fix/*` | Bug fixes and corrections |

Team members are expected to create feature branches and submit pull requests for review before merging changes into `develop`.

## Project Documentation

The project documentation covers:

- Functional and non-functional requirements
- User personas and user stories
- Product backlog and sprint planning
- System architecture and UML diagrams
- UI/UX wireframes and Figma prototypes
- Testing and evaluation
- Individual contribution evidence
