export function useStyles<T>(styles: T, _class: T, override?: boolean): { css: T; clx: string } {
	return {
		css: styles,
		clx: 'none'
	};
}
