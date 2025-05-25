# Modal Form Application

A React-based multi-step form application with URL state persistence and modal functionality.

## Features

- Multi-step form with validation
- Modal dialog with unsaved changes warning
- URL state persistence (excluding sensitive data)
- Responsive design with Tailwind CSS
- TypeScript support

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- Yarn or npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/VanyaMartynov/Problem-solving.git
cd modal-form-app
```

2. Install dependencies:
```bash
yarn install
# or
npm install
```

3. Start the development server:
```bash
yarn dev
# or
npm run dev
```

The application will be available at `http://localhost:5174`

## Project Structure

```
modal-form-app/
├── src/
│   ├── components/
│   │   ├── Modal/
│   │   └── MultiStepForm/
│   ├── hooks/
│   │   ├── useModal/
│   │   └── useUrlState/
│   └── App.tsx
├── public/
└── package.json
```

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- Vite

## License

MIT
