export function getDate() {
	const date = new Date();

	return { offset: date.getTimezoneOffset(), timezone: new Intl.DateTimeFormat().resolvedOptions().timeZone };
}

export function getDocument() {
	return {
		hidden: document.hidden,
		visibilityState: document.visibilityState,
		referrer: document.referrer,
		title: document.title,
		readyState: document.readyState,
	};
}
