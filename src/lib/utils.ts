import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithoutChild<T> = T extends { child?: any } ? Omit<T, 'child'> : T;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithoutChildren<T> = T extends { children?: any } ? Omit<T, 'children'> : T;
export type WithoutChildrenOrChild<T> = WithoutChildren<WithoutChild<T>>;
export type WithElementRef<T, U extends HTMLElement = HTMLElement> = T & { ref?: U | null };
const WORDS_PER_MINUTE = 50;
function stripHtmlTags(html: string): string {
	// Regex to remove all HTML tags (e.g., <p>, <div>, <strong>)
	return html.replace(/<[^>]*>/g, '');
}

function countWords(text: string): number {
	// Trim leading/trailing whitespace
	// Split by one or more whitespace characters
	// Filter out any empty strings that might result from multiple spaces (e.g., "  ")
	const words = text
		.trim()
		.split(/\s+/)
		.filter((word) => word.length > 0);
	return words.length;
}

function calculateReadingTime(wordCount: number, wordsPerMinute: number): number {
	if (wordCount === 0) {
		return 0;
	}
	const minutes = wordCount / wordsPerMinute;
	return Math.ceil(minutes);
}

export function getReadingTime(
	content: string,
	isHtml: boolean = false,
	wpm: number = WORDS_PER_MINUTE
): number {
	if (!content) {
		return 0;
	}

	let cleanedContent = content;
	if (isHtml) {
		cleanedContent = stripHtmlTags(content);
	}

	const wordCount = countWords(cleanedContent);
	return calculateReadingTime(wordCount, wpm);
}
