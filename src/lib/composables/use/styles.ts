import type { DeepStyle, Styles } from '$lib/types/utility.js';
import { stringify } from '$lib/utils/index.js';
import { twJoin } from 'tailwind-merge';

const classTypeKeys = new Set([
	'layout',
	'flex',
	'grid',
	'spacing',
	'sizing',
	'typography',
	'background',
	'border',
	'effect',
	'filter',
	'table',
	'transition',
	'animation',
	'transform',
	'motion',
	'interactive',
	'svg',
	'accessible',
	'custom'
]);

/**
 * Merges two class strings based on the override flag.
 * @param {string} older - The original class string.
 * @param {string} newer - The new class string to be merged.
 * @param {boolean} override - Flag indicating whether to override or merge.
 * @returns {string} - The resulting class string.
 */
function merger(older: string, newer: string, override: boolean): string {
	return override ? newer : twJoin(older, newer);
}


/**
 * Merges the given styles and oclass objects.
 * @template T - The type of the styles object.
 * @param {T} styles - The base styles object.
 * @param {string | DeepStyle<T>} oclass - The additional styles object or a string class.
 * @returns {{ css: T; classer: string }} - The merged styles and class string.
 */
export function useUI<T extends Record<string, any>>(
	styles: string| T,
	oclass: string | DeepStyle<T>
): { css: T; classer: string } {
	let classer: string = '';
	let css: T =  styles ;
	const override: boolean = false;

	if (typeof oclass === 'string' || typeof styles === 'string') {
		classer = typeof oclass === 'string'? oclass: '';
		return { css, classer };
	}

	for (const key in oclass) {
		if (oclass.hasOwnProperty(key)) {
			const stylesKid = styles[key];
			const oclassKid = oclass[key];

			if (typeof stylesKid === 'object' && typeof oclassKid === 'object') {
				css[key] = useUI(stylesKid, oclassKid as DeepStyle<typeof stylesKid>).css;
			} else if (typeof oclassKid === 'string' && classTypeKeys.has(key)) {
				css[key] = merger(stylesKid, oclassKid, override) as any;
			}
		}
	}
	return { css, classer };
}


export function useStyles<T extends Record<string, any>>(
	styles: string | T,
	_class: string | DeepStyle<T>,
	override: boolean
): {
	css: T;
	classer: string;
	strify: Function;
} {
	if (typeof styles === 'string') {
		return {
			css: {} as T,
			classer: 'sadr',
			strify: stringify
		};
	}
	return {
		css: styles,
		classer: 'none',
		strify: stringify
	};
}
