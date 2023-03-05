import { createContext } from 'react';

interface ThemeControlProviderProps {
	children: React.ReactNode;
	value: {
		toggleTheme: () => void;
	};
}

export const ThemeControlContext = createContext({ toggleTheme: () => {} });

function ThemeControlProvider({ children, value }: ThemeControlProviderProps) {
	return <ThemeControlContext.Provider value={value}>{children}</ThemeControlContext.Provider>;
}

export default ThemeControlProvider;
