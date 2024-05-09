export interface FingerprintResponse {
	v: string;
	requestId: string;
	products: Products;
}

export interface Products {
	identification: Identification;
}

export interface Identification {
	data: Data;
}

export interface Data {
	visitorToken: string;
	result: Result;
}

export interface Result {
	browserName: string;
	browserVersion: string;
	confidence: Confidence;
	device: string;
	firstSeenAt: FirstSeenAt;
	incognito: boolean;
	ip: string;
	ipLocation: IpLocation;
	lastSeenAt: LastSeenAt;
	meta: Meta;
	os: string;
	osVersion: string;
	visitorFound: boolean;
	visitorId: string;
}

export interface Confidence {
	score: number;
}

export interface FirstSeenAt {
	global: string;
	subscription: string;
}

export interface IpLocation {
	accuracyRadius: number;
	city: City;
	continent: Continent;
	country: Country;
	latitude: number;
	longitude: number;
	postalCode: string;
	subdivisions: Subdivision[];
	timezone: string;
}

export interface City {
	name: string;
}

export interface Continent {
	code: string;
	name: string;
}

export interface Country {
	code: string;
	name: string;
}

export interface Subdivision {
	isoCode: string;
	name: string;
}

export interface LastSeenAt {
	global: string;
	subscription: string;
}

export interface Meta {
	version: string;
}
