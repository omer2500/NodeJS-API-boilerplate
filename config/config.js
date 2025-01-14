// headers to use in development , evil.com-used by CORS extension, undefined used by postman...
const LOCAL_WHITELIST = [
	'http://localhost:3000',
	'http://localhost:3001',
	'http://evil.com/', // for chrome extension no-cors
	undefined, // for postman
	'http://localhost:4200'
];
const PRODUCTION_WHITELIST = [process.env.APP_DOMIN];

const DATE_FORMATS = {
	FULL_DATE: 'dddd, MMMM Do YYYY, HH:mm:ss',
	SHORT_DATE: 'DD MM YYYY, HH:mm:ss'
};

const CORS_WHITE_LIST =
	process.env.NODE_ENV === 'production'
		? PRODUCTION_WHITELIST
		: LOCAL_WHITELIST;

const RATE_LIMITER = {
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 20
};

const LUSCA_OPTIONS = {
	// csrf: process.env.NODE_ENV === 'production' ? true : false,
	csp: {
		policy: {
			'default-src': '\'self\'',
			'img-src': '*'
		}
	},
	xframe: 'SAMEORIGIN',
	p3p: 'ABCDEF',
	hsts: { maxAge: 31536000, includeSubDomains: true, preload: true },
	xssProtection: true,
	nosniff: true,
	referrerPolicy: 'same-origin'
};
const APP_SESSION = {
	secret: process.env.SESSION_SECRET || 'secret',
	resave: true,
	saveUninitialized: true,
	cookie: {
		maxAge: 30 * 24 * 60 * 60 * 1000 // 1 month
	}
	// proxy: true // if you do ssl outside node
};

module.exports = {
	CORS_WHITE_LIST,
	LUSCA_OPTIONS,
	DATE_FORMATS,
	RATE_LIMITER,
	APP_SESSION
};
