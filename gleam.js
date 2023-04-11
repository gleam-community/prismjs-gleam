Prism.languages.gleam = {
	doc: {
		pattern: /\/\/\/\/?.*/,
		greedy: true,
	},
	comment: {
		pattern: /\/\/.*/,
		greedy: true,
	},
	function: /([a-z_][a-z0-9_]+)(?=\()/,
	keyword:
		/\b(use|case|if|external|fn|import|let|assert|try|pub|type|opaque|const|todo|as)\b/,
	symbol: /([A-Z][A-Za-z0-9_]+)/,
	operator: {
		pattern:
			/(<<|>>|<-|->|\|>|<>|\.\.|<=\.?|>=\.?|==\.?|!=\.?|<\.?|>\.?|&&|\|\||\+\.?|-\.?|\/\.?|\*\.?|%\.?|=)/,
		greedy: true,
	},
	string: {
		pattern: /"(?:\\(?:\r\n|[\s\S])|(?!")[^\\\r\n])*"/,
		greedy: true,
		inside: {
			punctuation: /\\./,
		},
	},
	punctuation: /[.\\:,{}()]/,
	number:
		/\b(?:0b[0-1]+|0o[0-7]+|[[:digit:]][[:digit:]_]*(\\.[[:digit:]]*)?|0x[[:xdigit:]]+)\b/,
	boolean: /\b(?:True|False)\b/,
	"module-declaration": {
		pattern: /(\b(?:import)\s+)[a-z][a-z_\d\/]*/,
		lookbehind: true,
		alias: "namespace",
	},
	namespace: {
		pattern: /([a-z_][a-z0-9_]+)./,
		inside: {
			punctuation: /./,
		},
	},
};
