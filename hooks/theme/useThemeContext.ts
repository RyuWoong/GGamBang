import { useContext } from 'react';
import { ThemeControlContext } from './ThemeControlContext';

function useThemeControlContext() {
	const value = useContext(ThemeControlContext);
	return value;
}

export default useThemeControlContext;
