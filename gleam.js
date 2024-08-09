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
	symbol: {
		pattern: /([A-Z][A-Za-z0-9_]+)/,
		greedy: true,
	},
	operator: {
		pattern:
			/(<<|>>|<-|->|\|>|<>|\.\.|<=\.?|>=\.?|==\.?|!=\.?|<\.?|>\.?|&&|\|\||\+\.?|-\.?|\/\.?|\*\.?|%\.?|=)/,
		greedy: true,
	},
	string: {
		pattern: /"(?:\\(?:\r\n|[\s\S])|(?!")[^\\\r\n])*"/,
		greedy: true,
	},
	module: {
		pattern: /([a-z][a-z0-9_]*)\./,
		inside: {
			punctuation: /\./,
		},
		alias: "keyword",
	},
	punctuation: /[.\\:,{}()]/,
	number:
		/\b(?:0[bB][01_]+|0[oO][0-7_]+|\d[\d_]*(\\.[\d_]*(e-?[\d_]+))?|0[xX][\da-fA-F_]+)\b/,
	boolean: /\b(?:True|False|Ok|Error|Nil)\b/,
};
