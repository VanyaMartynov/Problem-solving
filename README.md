# Modal Form Application

A React-based modal form application that implements a multi-step registration form with URL state persistence.

## Features

- Multi-step form with validation
- Modal component with customizable header and footer
- URL state persistence for form data
- Responsive design with Tailwind CSS
- TypeScript support
- React Router integration
- Optimized performance with React hooks (useCallback, useMemo)

## Project Structure

```
modal-form-app/
├── src/
│   ├── components/
│   │   ├── Modal/
│   │   │   ├── components/
│   │   │   │   ├── Buttons.tsx
│   │   │   │   └── Footer.tsx
│   │   │   ├── Modal.tsx
│   │   │   └── types.ts
│   │   └── MultiStepForm/
│   │       ├── components/
│   │       │   ├── AccountDetailsStep.tsx
│   │       │   ├── NavigationButtons.tsx
│   │       │   └── PersonalDetailsStep.tsx
│   │       ├── MultiStepForm.tsx
│   │       └── types.ts
│   ├── hooks/
│   │   ├── useModal.ts
│   │   └── useUrlState/
│   │       ├── index.ts
│   │       └── utils/
│   │           └── encoding.ts
│   ├── pages/
│   │   └── Login.tsx
│   └── App.tsx
```

## Components

### Modal Component
- Customizable header and footer
- Primary and Secondary buttons in footer
- Backdrop with click-to-close functionality
- Keyboard support (Escape to close)

### MultiStepForm Component
- Two-step form process
- URL state persistence
- Form data validation
- Navigation between steps
- Password field excluded from URL state

## Custom Hooks

### useModal
- Manages modal visibility state
- Provides show/hide functionality
- Handles modal state persistence

### useUrlState
- Persists form data in URL
- Handles data encoding/decoding
- Supports field exclusion
- Maintains form state across page refreshes

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   yarn install
   ```
3. Start the development server:
   ```bash
   yarn dev
   ```

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- React Router
- Vite

## Development

### Prerequisites
- Node.js (v14 or higher)
- Yarn package manager

### Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn preview` - Preview production build
- `yarn lint` - Run ESLint
- `yarn type-check` - Run TypeScript type checking

## Performance Optimizations

- Memoized callback functions with useCallback
- Optimized re-renders with proper dependency arrays
- Efficient state management
- URL state compression and encoding

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License.
