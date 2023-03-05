import { useCallback, useEffect, useState } from 'react';

type themeType = 'light' | 'dark';

function useThemeHandler() {
	const [themes, setThemes] = useState<themeType>('light');

	const toggleTheme = useCallback(() => {
		const type = themes === 'light' ? 'dark' : 'light';
		setThemes(type);
		document.documentElement.setAttribute('color-theme', type);
		window.localStorage.setItem('themes', type);
	}, [themes]);

	useEffect(() => {
		const localThemes = window.localStorage.getItem('themes');
		if (localThemes === 'dark' || window.matchMedia('(prefers-color-scheme: dark)').matches) {
			toggleTheme();
			return;
		}
		document.documentElement.setAttribute('color-theme', themes);
	}, []);

	return { themes, toggleTheme };
}

export default useThemeHandler;
