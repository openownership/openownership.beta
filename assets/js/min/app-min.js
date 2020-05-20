/*!
 * jQuery JavaScript Library v3.5.0
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2020-04-10T15:07Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var flat = arr.flat ? function( array ) {
	return arr.flat.call( array );
} : function( array ) {
	return arr.concat.apply( [], array );
};


var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ) === "function"`).
      // We don't want to classify *any* DOM node as a function.
      return typeof obj === "function" && typeof obj.nodeType !== "number";
  };


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};


var document = window.document;



	var preservedScriptAttributes = {
		type: true,
		src: true,
		nonce: true,
		noModule: true
	};

	function DOMEval( code, node, doc ) {
		doc = doc || document;

		var i, val,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {

				// Support: Firefox 64+, Edge 18+
				// Some browsers don't support the "nonce" property on scripts.
				// On the other hand, just using `getAttribute` is not enough as
				// the `nonce` attribute is reset to an empty string whenever it
				// becomes browsing-context connected.
				// See https://github.com/whatwg/html/issues/2369
				// See https://html.spec.whatwg.org/#nonce-attributes
				// The `node.getAttribute` check was added for the sake of
				// `jQuery.globalEval` so that it can fake a nonce-containing node
				// via an object.
				val = node[ i ] || node.getAttribute && node.getAttribute( i );
				if ( val ) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.5.0",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	even: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return ( i + 1 ) % 2;
		} ) );
	},

	odd: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return i % 2;
		} ) );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				copy = options[ name ];

				// Prevent Object.prototype pollution
				// Prevent never-ending loop
				if ( name === "__proto__" || target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {
					src = target[ name ];

					// Ensure proper type for the source value
					if ( copyIsArray && !Array.isArray( src ) ) {
						clone = [];
					} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						clone = {};
					} else {
						clone = src;
					}
					copyIsArray = false;

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a provided context; falls back to the global one
	// if not specified.
	globalEval: function( code, options, doc ) {
		DOMEval( code, { nonce: options && options.nonce }, doc );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return flat( ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( _i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.5
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2020-03-14
 */
( function( window ) {
var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	nonnativeSelectorCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ( {} ).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	pushNative = arr.push,
	push = arr.push,
	slice = arr.slice,

	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[ i ] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|" +
		"ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
	identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace +
		"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +

		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +

		// "Attribute values must be CSS identifiers [capture 5]
		// or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" +
		whitespace + "*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +

		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +

		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +

		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" +
		whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace +
		"*" ),
	rdescend = new RegExp( whitespace + "|>" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
			whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" +
			whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),

		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace +
			"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace +
			"*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rhtml = /HTML$/i,
	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g" ),
	funescape = function( escape, nonHex ) {
		var high = "0x" + escape.slice( 1 ) - 0x10000;

		return nonHex ?

			// Strip the backslash prefix from a non-hex escape sequence
			nonHex :

			// Replace a hexadecimal escape sequence with the encoded Unicode code point
			// Support: IE <=11+
			// For values outside the Basic Multilingual Plane (BMP), manually construct a
			// surrogate pair
			high < 0 ?
				String.fromCharCode( high + 0x10000 ) :
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" +
				ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	inDisabledFieldset = addCombinator(
		function( elem ) {
			return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		( arr = slice.call( preferredDoc.childNodes ) ),
		preferredDoc.childNodes
	);

	// Support: Android<4.0
	// Detect silently failing push.apply
	// eslint-disable-next-line no-unused-expressions
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			pushNative.apply( target, slice.call( els ) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;

			// Can't trust NodeList.length
			while ( ( target[ j++ ] = els[ i++ ] ) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {
		setDocument( context );
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && ( match = rquickExpr.exec( selector ) ) ) {

				// ID selector
				if ( ( m = match[ 1 ] ) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( ( elem = context.getElementById( m ) ) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && ( elem = newContext.getElementById( m ) ) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[ 2 ] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( ( m = match[ 3 ] ) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!nonnativeSelectorCache[ selector + " " ] &&
				( !rbuggyQSA || !rbuggyQSA.test( selector ) ) &&

				// Support: IE 8 only
				// Exclude object elements
				( nodeType !== 1 || context.nodeName.toLowerCase() !== "object" ) ) {

				newSelector = selector;
				newContext = context;

				// qSA considers elements outside a scoping root when evaluating child or
				// descendant combinators, which is not what we want.
				// In such cases, we work around the behavior by prefixing every selector in the
				// list with an ID selector referencing the scope context.
				// The technique has to be used as well when a leading combinator is used
				// as such selectors are not recognized by querySelectorAll.
				// Thanks to Andrew Dupont for this technique.
				if ( nodeType === 1 &&
					( rdescend.test( selector ) || rcombinators.test( selector ) ) ) {

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;

					// We can use :scope instead of the ID hack if the browser
					// supports it & if we're not changing the context.
					if ( newContext !== context || !support.scope ) {

						// Capture the context ID, setting it first if necessary
						if ( ( nid = context.getAttribute( "id" ) ) ) {
							nid = nid.replace( rcssescape, fcssescape );
						} else {
							context.setAttribute( "id", ( nid = expando ) );
						}
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[ i ] = ( nid ? "#" + nid : ":scope" ) + " " +
							toSelector( groups[ i ] );
					}
					newSelector = groups.join( "," );
				}

				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch ( qsaError ) {
					nonnativeSelectorCache( selector, true );
				} finally {
					if ( nid === expando ) {
						context.removeAttribute( "id" );
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {

		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {

			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return ( cache[ key + " " ] = value );
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement( "fieldset" );

	try {
		return !!fn( el );
	} catch ( e ) {
		return false;
	} finally {

		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}

		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split( "|" ),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[ i ] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( ( cur = cur.nextSibling ) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return ( name === "input" || name === "button" ) && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
					inDisabledFieldset( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction( function( argument ) {
		argument = +argument;
		return markFunction( function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ ( j = matchIndexes[ i ] ) ] ) {
					seed[ j ] = !( matches[ j ] = seed[ j ] );
				}
			}
		} );
	} );
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	var namespace = elem.namespaceURI,
		docElem = ( elem.ownerDocument || elem ).documentElement;

	// Support: IE <=8
	// Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
	// https://bugs.jquery.com/ticket/4833
	return !rhtml.test( namespace || docElem && docElem.nodeName || "HTML" );
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( doc == document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9 - 11+, Edge 12 - 18+
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( preferredDoc != document &&
		( subWindow = document.defaultView ) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	// Support: IE 8 - 11+, Edge 12 - 18+, Chrome <=16 - 25 only, Firefox <=3.6 - 31 only,
	// Safari 4 - 5 only, Opera <=11.6 - 12.x only
	// IE/Edge & older browsers don't support the :scope pseudo-class.
	// Support: Safari 6.0 only
	// Safari 6.0 supports :scope but it's an alias of :root there.
	support.scope = assert( function( el ) {
		docElem.appendChild( el ).appendChild( document.createElement( "div" ) );
		return typeof el.querySelectorAll !== "undefined" &&
			!el.querySelectorAll( ":scope fieldset div" ).length;
	} );

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert( function( el ) {
		el.className = "i";
		return !el.getAttribute( "className" );
	} );

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert( function( el ) {
		el.appendChild( document.createComment( "" ) );
		return !el.getElementsByTagName( "*" ).length;
	} );

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert( function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	} );

	// ID filter and find
	if ( support.getById ) {
		Expr.filter[ "ID" ] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute( "id" ) === attrId;
			};
		};
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter[ "ID" ] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode( "id" );
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode( "id" );
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( ( elem = elems[ i++ ] ) ) {
						node = elem.getAttributeNode( "id" );
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find[ "TAG" ] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,

				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( ( elem = results[ i++ ] ) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find[ "CLASS" ] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( ( support.qsa = rnative.test( document.querySelectorAll ) ) ) {

		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert( function( el ) {

			var input;

			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll( "[msallowcapture^='']" ).length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll( "[selected]" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push( "~=" );
			}

			// Support: IE 11+, Edge 15 - 18+
			// IE 11/Edge don't find elements on a `[name='']` query in some cases.
			// Adding a temporary attribute to the document before the selection works
			// around the issue.
			// Interestingly, IE 10 & older don't seem to have the issue.
			input = document.createElement( "input" );
			input.setAttribute( "name", "" );
			el.appendChild( input );
			if ( !el.querySelectorAll( "[name='']" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*name" + whitespace + "*=" +
					whitespace + "*(?:''|\"\")" );
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll( ":checked" ).length ) {
				rbuggyQSA.push( ":checked" );
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push( ".#.+[+~]" );
			}

			// Support: Firefox <=3.6 - 5 only
			// Old Firefox doesn't throw on a badly-escaped identifier.
			el.querySelectorAll( "\\\f" );
			rbuggyQSA.push( "[\\r\\n\\f]" );
		} );

		assert( function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement( "input" );
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll( "[name=d]" ).length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll( ":enabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll( ":disabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: Opera 10 - 11 only
			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll( "*,:x" );
			rbuggyQSA.push( ",.*:" );
		} );
	}

	if ( ( support.matchesSelector = rnative.test( ( matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector ) ) ) ) {

		assert( function( el ) {

			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		} );
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join( "|" ) );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join( "|" ) );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			) );
		} :
		function( a, b ) {
			if ( b ) {
				while ( ( b = b.parentNode ) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		// Support: IE 11+, Edge 17 - 18+
		// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
		// two documents; shallow comparisons work.
		// eslint-disable-next-line eqeqeq
		compare = ( a.ownerDocument || a ) == ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			( !support.sortDetached && b.compareDocumentPosition( a ) === compare ) ) {

			// Choose the first element that is related to our preferred document
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( a == document || a.ownerDocument == preferredDoc &&
				contains( preferredDoc, a ) ) {
				return -1;
			}

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( b == document || b.ownerDocument == preferredDoc &&
				contains( preferredDoc, b ) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {

		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			return a == document ? -1 :
				b == document ? 1 :
				/* eslint-enable eqeqeq */
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( ( cur = cur.parentNode ) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( ( cur = cur.parentNode ) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[ i ] === bp[ i ] ) {
			i++;
		}

		return i ?

			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[ i ], bp[ i ] ) :

			// Otherwise nodes in our document sort first
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			ap[ i ] == preferredDoc ? -1 :
			bp[ i ] == preferredDoc ? 1 :
			/* eslint-enable eqeqeq */
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	setDocument( elem );

	if ( support.matchesSelector && documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||

				// As well, disconnected nodes are said to be in a document
				// fragment in IE 9
				elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch ( e ) {
			nonnativeSelectorCache( expr, true );
		}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( context.ownerDocument || context ) != document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( elem.ownerDocument || elem ) != document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],

		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			( val = elem.getAttributeNode( name ) ) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return ( sel + "" ).replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( ( elem = results[ i++ ] ) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {

		// If no nodeType, this is expected to be an array
		while ( ( node = elem[ i++ ] ) ) {

			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {

		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {

			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}

	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[ 1 ] = match[ 1 ].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[ 3 ] = ( match[ 3 ] || match[ 4 ] ||
				match[ 5 ] || "" ).replace( runescape, funescape );

			if ( match[ 2 ] === "~=" ) {
				match[ 3 ] = " " + match[ 3 ] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {

			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[ 1 ] = match[ 1 ].toLowerCase();

			if ( match[ 1 ].slice( 0, 3 ) === "nth" ) {

				// nth-* requires argument
				if ( !match[ 3 ] ) {
					Sizzle.error( match[ 0 ] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[ 4 ] = +( match[ 4 ] ?
					match[ 5 ] + ( match[ 6 ] || 1 ) :
					2 * ( match[ 3 ] === "even" || match[ 3 ] === "odd" ) );
				match[ 5 ] = +( ( match[ 7 ] + match[ 8 ] ) || match[ 3 ] === "odd" );

				// other types prohibit arguments
			} else if ( match[ 3 ] ) {
				Sizzle.error( match[ 0 ] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[ 6 ] && match[ 2 ];

			if ( matchExpr[ "CHILD" ].test( match[ 0 ] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[ 3 ] ) {
				match[ 2 ] = match[ 4 ] || match[ 5 ] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&

				// Get excess from tokenize (recursively)
				( excess = tokenize( unquoted, true ) ) &&

				// advance to the next closing parenthesis
				( excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length ) ) {

				// excess is a negative index
				match[ 0 ] = match[ 0 ].slice( 0, excess );
				match[ 2 ] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() {
					return true;
				} :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				( pattern = new RegExp( "(^|" + whitespace +
					")" + className + "(" + whitespace + "|$)" ) ) && classCache(
						className, function( elem ) {
							return pattern.test(
								typeof elem.className === "string" && elem.className ||
								typeof elem.getAttribute !== "undefined" &&
									elem.getAttribute( "class" ) ||
								""
							);
				} );
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				/* eslint-disable max-len */

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
				/* eslint-enable max-len */

			};
		},

		"CHILD": function( type, what, _argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, _context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( ( node = node[ dir ] ) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}

								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || ( node[ expando ] = {} );

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								( outerCache[ node.uniqueID ] = {} );

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( ( node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								( diff = nodeIndex = 0 ) || start.pop() ) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {

							// Use previously-cached element index if available
							if ( useCache ) {

								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || ( node[ expando ] = {} );

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									( outerCache[ node.uniqueID ] = {} );

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {

								// Use the same loop as above to seek `elem` from the start
								while ( ( node = ++nodeIndex && node && node[ dir ] ||
									( diff = nodeIndex = 0 ) || start.pop() ) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] ||
												( node[ expando ] = {} );

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												( outerCache[ node.uniqueID ] = {} );

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {

			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction( function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[ i ] );
							seed[ idx ] = !( matches[ idx ] = matched[ i ] );
						}
					} ) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {

		// Potentially complex pseudos
		"not": markFunction( function( selector ) {

			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction( function( seed, matches, _context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( ( elem = unmatched[ i ] ) ) {
							seed[ i ] = !( matches[ i ] = elem );
						}
					}
				} ) :
				function( elem, _context, xml ) {
					input[ 0 ] = elem;
					matcher( input, null, xml, results );

					// Don't keep the element (issue #299)
					input[ 0 ] = null;
					return !results.pop();
				};
		} ),

		"has": markFunction( function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		} ),

		"contains": markFunction( function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || getText( elem ) ).indexOf( text ) > -1;
			};
		} ),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {

			// lang value must be a valid identifier
			if ( !ridentifier.test( lang || "" ) ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( ( elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute( "xml:lang" ) || elem.getAttribute( "lang" ) ) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( ( elem = elem.parentNode ) && elem.nodeType === 1 );
				return false;
			};
		} ),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement &&
				( !document.hasFocus || document.hasFocus() ) &&
				!!( elem.type || elem.href || ~elem.tabIndex );
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {

			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return ( nodeName === "input" && !!elem.checked ) ||
				( nodeName === "option" && !!elem.selected );
		},

		"selected": function( elem ) {

			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				// eslint-disable-next-line no-unused-expressions
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {

			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos[ "empty" ]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( ( attr = elem.getAttribute( "type" ) ) == null ||
					attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo( function() {
			return [ 0 ];
		} ),

		"last": createPositionalPseudo( function( _matchIndexes, length ) {
			return [ length - 1 ];
		} ),

		"eq": createPositionalPseudo( function( _matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		} ),

		"even": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"odd": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"lt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ?
				argument + length :
				argument > length ?
					length :
					argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"gt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} )
	}
};

Expr.pseudos[ "nth" ] = Expr.pseudos[ "eq" ];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || ( match = rcomma.exec( soFar ) ) ) {
			if ( match ) {

				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[ 0 ].length ) || soFar;
			}
			groups.push( ( tokens = [] ) );
		}

		matched = false;

		// Combinators
		if ( ( match = rcombinators.exec( soFar ) ) ) {
			matched = match.shift();
			tokens.push( {
				value: matched,

				// Cast descendant combinators to space
				type: match[ 0 ].replace( rtrim, " " )
			} );
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( ( match = matchExpr[ type ].exec( soFar ) ) && ( !preFilters[ type ] ||
				( match = preFilters[ type ]( match ) ) ) ) {
				matched = match.shift();
				tokens.push( {
					value: matched,
					type: type,
					matches: match
				} );
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :

			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[ i ].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?

		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( ( elem = elem[ dir ] ) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || ( elem[ expando ] = {} );

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] ||
							( outerCache[ elem.uniqueID ] = {} );

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( ( oldCache = uniqueCache[ key ] ) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return ( newCache[ 2 ] = oldCache[ 2 ] );
						} else {

							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( ( newCache[ 2 ] = matcher( elem, context, xml ) ) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[ i ]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[ 0 ];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[ i ], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( ( elem = unmatched[ i ] ) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction( function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts(
				selector || "*",
				context.nodeType ? [ context ] : context,
				[]
			),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?

				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( ( elem = temp[ i ] ) ) {
					matcherOut[ postMap[ i ] ] = !( matcherIn[ postMap[ i ] ] = elem );
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {

					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( ( elem = matcherOut[ i ] ) ) {

							// Restore matcherIn since elem is not yet a final match
							temp.push( ( matcherIn[ i ] = elem ) );
						}
					}
					postFinder( null, ( matcherOut = [] ), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( ( elem = matcherOut[ i ] ) &&
						( temp = postFinder ? indexOf( seed, elem ) : preMap[ i ] ) > -1 ) {

						seed[ temp ] = !( results[ temp ] = elem );
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	} );
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[ 0 ].type ],
		implicitRelative = leadingRelative || Expr.relative[ " " ],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				( checkContext = context ).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );

			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( ( matcher = Expr.relative[ tokens[ i ].type ] ) ) {
			matchers = [ addCombinator( elementMatcher( matchers ), matcher ) ];
		} else {
			matcher = Expr.filter[ tokens[ i ].type ].apply( null, tokens[ i ].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {

				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[ j ].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(

					// If the preceding token was a descendant combinator, insert an implicit any-element `*`
					tokens
						.slice( 0, i - 1 )
						.concat( { value: tokens[ i - 2 ].type === " " ? "*" : "" } )
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( ( tokens = tokens.slice( j ) ) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,

				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find[ "TAG" ]( "*", outermost ),

				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = ( dirruns += contextBackup == null ? 1 : Math.random() || 0.1 ),
				len = elems.length;

			if ( outermost ) {

				// Support: IE 11+, Edge 17 - 18+
				// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
				// two documents; shallow comparisons work.
				// eslint-disable-next-line eqeqeq
				outermostContext = context == document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && ( elem = elems[ i ] ) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;

					// Support: IE 11+, Edge 17 - 18+
					// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
					// two documents; shallow comparisons work.
					// eslint-disable-next-line eqeqeq
					if ( !context && elem.ownerDocument != document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( ( matcher = elementMatchers[ j++ ] ) ) {
						if ( matcher( elem, context || document, xml ) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {

					// They will have gone through all possible matchers
					if ( ( elem = !matcher && elem ) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( ( matcher = setMatchers[ j++ ] ) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {

					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !( unmatched[ i ] || setMatched[ i ] ) ) {
								setMatched[ i ] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {

		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[ i ] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache(
			selector,
			matcherFromGroupMatchers( elementMatchers, setMatchers )
		);

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( ( selector = compiled.selector || selector ) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[ 0 ] = match[ 0 ].slice( 0 );
		if ( tokens.length > 2 && ( token = tokens[ 0 ] ).type === "ID" &&
			context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[ 1 ].type ] ) {

			context = ( Expr.find[ "ID" ]( token.matches[ 0 ]
				.replace( runescape, funescape ), context ) || [] )[ 0 ];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr[ "needsContext" ].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[ i ];

			// Abort if we hit a combinator
			if ( Expr.relative[ ( type = token.type ) ] ) {
				break;
			}
			if ( ( find = Expr.find[ type ] ) ) {

				// Search, expanding context for leading sibling combinators
				if ( ( seed = find(
					token.matches[ 0 ].replace( runescape, funescape ),
					rsibling.test( tokens[ 0 ].type ) && testContext( context.parentNode ) ||
						context
				) ) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split( "" ).sort( sortOrder ).join( "" ) === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert( function( el ) {

	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement( "fieldset" ) ) & 1;
} );

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert( function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute( "href" ) === "#";
} ) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	} );
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert( function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
} ) ) {
	addHandle( "value", function( elem, _name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	} );
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert( function( el ) {
	return el.getAttribute( "disabled" ) == null;
} ) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
				( val = elem.getAttributeNode( name ) ) && val.specified ?
					val.value :
					null;
		}
	} );
}

return Sizzle;

} )( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, _i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, _i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, _i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		if ( elem.contentDocument != null &&

			// Support: IE 11+
			// <object> elements with no `data` attribute has an object
			// `contentDocument` with a `null` prototype.
			getProto( elem.contentDocument ) ) {

			return elem.contentDocument;
		}

		// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
		// Treat the template element as a regular one in browsers that
		// don't support it.
		if ( nodeName( elem, "template" ) ) {
			elem = elem.content || elem;
		}

		return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( _i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, _key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( _all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = Object.create( null );

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var documentElement = document.documentElement;



	var isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem );
		},
		composed = { composed: true };

	// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
	// Check attachment across shadow DOM boundaries when possible (gh-3504)
	// Support: iOS 10.0-10.2 only
	// Early iOS 10 versions support `attachShadow` but not `getRootNode`,
	// leading to errors. We need to check for `getRootNode`.
	if ( documentElement.getRootNode ) {
		isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode( composed ) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			isAttached( elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};



function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

	// Support: IE <=9 only
	// IE <=9 replaces <option> tags with their contents when inserted outside of
	// the select element.
	div.innerHTML = "<option></option>";
	support.option = !!div.lastChild;
} )();


// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// Support: IE <=9 only
if ( !support.option ) {
	wrapMap.optgroup = wrapMap.option = [ 1, "<select multiple='multiple'>", "</select>" ];
}


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, attached, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		attached = isAttached( elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( attached ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 - 11+
// focus() and blur() are asynchronous, except when they are no-op.
// So expect focus to be synchronous when the element is already active,
// and blur to be synchronous when the element is not already active.
// (focus and blur are always synchronous in other supported browsers,
// this just defines when we can count on it).
function expectSync( elem, type ) {
	return ( elem === safeActiveElement() ) === ( type === "focus" );
}

// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Only attach events to objects that accept data
		if ( !acceptData( elem ) ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = Object.create( null );
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( nativeEvent ),

			handlers = (
					dataPriv.get( this, "events" ) || Object.create( null )
				)[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// If the event is namespaced, then each handler is only invoked if it is
				// specially universal or its namespaces are a superset of the event's.
				if ( !event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		click: {

			// Utilize native event to ensure correct state for checkable inputs
			setup: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Claim the first handler
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					// dataPriv.set( el, "click", ... )
					leverageNative( el, "click", returnTrue );
				}

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Force setup before triggering a click
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					leverageNative( el, "click" );
				}

				// Return non-false to allow normal event-path propagation
				return true;
			},

			// For cross-browser consistency, suppress native .click() on links
			// Also prevent it if we're currently inside a leveraged native-event stack
			_default: function( event ) {
				var target = event.target;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( target, "click" ) ||
					nodeName( target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function leverageNative( el, type, expectSync ) {

	// Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
	if ( !expectSync ) {
		if ( dataPriv.get( el, type ) === undefined ) {
			jQuery.event.add( el, type, returnTrue );
		}
		return;
	}

	// Register the controller as a special universal handler for all event namespaces
	dataPriv.set( el, type, false );
	jQuery.event.add( el, type, {
		namespace: false,
		handler: function( event ) {
			var notAsync, result,
				saved = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interrupt processing of the outer synthetic .trigger()ed event
				// Saved data should be false in such cases, but might be a leftover capture object
				// from an async native handler (gh-4350)
				if ( !saved.length ) {

					// Store arguments for use when handling the inner native event
					// There will always be at least one argument (an event object), so this array
					// will not be confused with a leftover capture object.
					saved = slice.call( arguments );
					dataPriv.set( this, type, saved );

					// Trigger the native event and capture its result
					// Support: IE <=9 - 11+
					// focus() and blur() are asynchronous
					notAsync = expectSync( this, type );
					this[ type ]();
					result = dataPriv.get( this, type );
					if ( saved !== result || notAsync ) {
						dataPriv.set( this, type, false );
					} else {
						result = {};
					}
					if ( saved !== result ) {

						// Cancel the outer synthetic event
						event.stopImmediatePropagation();
						event.preventDefault();
						return result.value;
					}

				// If this is an inner synthetic event for an event with a bubbling surrogate
				// (focus or blur), assume that the surrogate already propagated from triggering the
				// native event and prevent that from happening again here.
				// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
				// bubbling surrogate propagates *after* the non-bubbling base), but that seems
				// less bad than duplication.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// If this is a native event triggered above, everything is now in order
			// Fire an inner synthetic event with the original arguments
			} else if ( saved.length ) {

				// ...and capture the result
				dataPriv.set( this, type, {
					value: jQuery.event.trigger(

						// Support: IE <=9 - 11+
						// Extend with the prototype to reset the above stopImmediatePropagation()
						jQuery.extend( saved[ 0 ], jQuery.Event.prototype ),
						saved.slice( 1 ),
						this
					)
				} );

				// Abort handling of the native event
				event.stopImmediatePropagation();
			}
		}
	} );
}

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	code: true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {
	jQuery.event.special[ type ] = {

		// Utilize native event if possible so blur/focus sequence is correct
		setup: function() {

			// Claim the first handler
			// dataPriv.set( this, "focus", ... )
			// dataPriv.set( this, "blur", ... )
			leverageNative( this, type, expectSync );

			// Return false to allow normal processing in the caller
			return false;
		},
		trigger: function() {

			// Force setup before trigger
			leverageNative( this, type );

			// Return non-false to allow normal event-path propagation
			return true;
		},

		delegateType: delegateType
	};
} );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.get( src );
		events = pdataOld.events;

		if ( events ) {
			dataPriv.remove( dest, "handle events" );

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = flat( args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								}, doc );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html;
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var swap = function( elem, options, callback ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.call( elem );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		// Support: Chrome <=64
		// Don't get tricked when zoom affects offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableTrDimensionsVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		},

		// Support: IE 9 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Behavior in IE 9 is more subtle than in newer versions & it passes
		// some versions of this test; make sure not to make it pass there!
		reliableTrDimensions: function() {
			var table, tr, trChild, trStyle;
			if ( reliableTrDimensionsVal == null ) {
				table = document.createElement( "table" );
				tr = document.createElement( "tr" );
				trChild = document.createElement( "div" );

				table.style.cssText = "position:absolute;left:-11111px";
				tr.style.height = "1px";
				trChild.style.height = "9px";

				documentElement
					.appendChild( table )
					.appendChild( tr )
					.appendChild( trChild );

				trStyle = window.getComputedStyle( tr );
				reliableTrDimensionsVal = parseInt( trStyle.height ) > 3;

				documentElement.removeChild( table );
			}
			return reliableTrDimensionsVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber( _elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Support: IE 9 - 11 only
	// Use offsetWidth/offsetHeight for when box sizing is unreliable.
	// In those cases, the computed value can be trusted to be border-box.
	if ( ( !support.boxSizingReliable() && isBorderBox ||

		// Support: IE 10 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Interestingly, in some cases IE 9 doesn't suffer from this issue.
		!support.reliableTrDimensions() && nodeName( elem, "tr" ) ||

		// Fall back to offsetWidth/offsetHeight when value is "auto"
		// This happens for inline elements with no explicit setting (gh-3571)
		val === "auto" ||

		// Support: Android <=4.1 - 4.3 only
		// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&

		// Make sure the element is visible & connected
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"gridArea": true,
		"gridColumn": true,
		"gridColumnEnd": true,
		"gridColumnStart": true,
		"gridRow": true,
		"gridRowEnd": true,
		"gridRowStart": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( _i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 && (
					jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( _i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( _i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = (
					dataPriv.get( cur, "events" ) || Object.create( null )
				)[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {

				// Handle: regular nodes (via `this.ownerDocument`), window
				// (via `this.document`) & document (via `this`).
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = { guid: Date.now() };

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( _i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce.guid++ ) +
					uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Use a noop converter for missing script
			if ( !isSuccess && jQuery.inArray( "script", s.dataTypes ) > -1 ) {
				s.converters[ "text script" ] = function() {};
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( _i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );

jQuery.ajaxPrefilter( function( s ) {
	var i;
	for ( i in s.headers ) {
		if ( i.toLowerCase() === "content-type" ) {
			s.contentType = s.headers[ i ] || "";
		}
	}
} );


jQuery._evalUrl = function( url, options, doc ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options, doc );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce.guid++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			if ( typeof props.top === "number" ) {
				props.top += "px";
			}
			if ( typeof props.left === "number" ) {
				props.left += "px";
			}
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( _i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( _i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	},

	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );

jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( _i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );




// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};

jQuery.trim = function( text ) {
	return text == null ?
		"" :
		( text + "" ).replace( rtrim, "" );
};



// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	} );
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( typeof noGlobal === "undefined" ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("jquery"));
	else if(typeof define === 'function' && define.amd)
		define(["jquery"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("jquery")) : factory(root["jQuery"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE_jquery__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/entries/foundation.js":
/*!**********************************!*\
  !*** ./js/entries/foundation.js ***!
  \**********************************/
/*! exports provided: Foundation, CoreUtils, Box, onImagesLoaded, Keyboard, MediaQuery, Motion, Nest, Timer, Touch, Triggers, Abide, Accordion, AccordionMenu, Drilldown, Dropdown, DropdownMenu, Equalizer, Interchange, Magellan, OffCanvas, Orbit, ResponsiveMenu, ResponsiveToggle, Reveal, Slider, SmoothScroll, Sticky, Tabs, Toggler, Tooltip, ResponsiveAccordionTabs, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _foundation_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../foundation.core */ "./js/foundation.core.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Foundation", function() { return _foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"]; });

/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../foundation.core.utils */ "./js/foundation.core.utils.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "CoreUtils", function() { return _foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__; });
/* harmony import */ var _foundation_util_box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../foundation.util.box */ "./js/foundation.util.box.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Box", function() { return _foundation_util_box__WEBPACK_IMPORTED_MODULE_3__["Box"]; });

/* harmony import */ var _foundation_util_imageLoader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../foundation.util.imageLoader */ "./js/foundation.util.imageLoader.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onImagesLoaded", function() { return _foundation_util_imageLoader__WEBPACK_IMPORTED_MODULE_4__["onImagesLoaded"]; });

/* harmony import */ var _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../foundation.util.keyboard */ "./js/foundation.util.keyboard.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Keyboard", function() { return _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_5__["Keyboard"]; });

/* harmony import */ var _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../foundation.util.mediaQuery */ "./js/foundation.util.mediaQuery.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MediaQuery", function() { return _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_6__["MediaQuery"]; });

/* harmony import */ var _foundation_util_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../foundation.util.motion */ "./js/foundation.util.motion.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Motion", function() { return _foundation_util_motion__WEBPACK_IMPORTED_MODULE_7__["Motion"]; });

/* harmony import */ var _foundation_util_nest__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../foundation.util.nest */ "./js/foundation.util.nest.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Nest", function() { return _foundation_util_nest__WEBPACK_IMPORTED_MODULE_8__["Nest"]; });

/* harmony import */ var _foundation_util_timer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../foundation.util.timer */ "./js/foundation.util.timer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Timer", function() { return _foundation_util_timer__WEBPACK_IMPORTED_MODULE_9__["Timer"]; });

/* harmony import */ var _foundation_util_touch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../foundation.util.touch */ "./js/foundation.util.touch.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Touch", function() { return _foundation_util_touch__WEBPACK_IMPORTED_MODULE_10__["Touch"]; });

/* harmony import */ var _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../foundation.util.triggers */ "./js/foundation.util.triggers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Triggers", function() { return _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_11__["Triggers"]; });

/* harmony import */ var _foundation_abide__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../foundation.abide */ "./js/foundation.abide.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Abide", function() { return _foundation_abide__WEBPACK_IMPORTED_MODULE_12__["Abide"]; });

/* harmony import */ var _foundation_accordion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../foundation.accordion */ "./js/foundation.accordion.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Accordion", function() { return _foundation_accordion__WEBPACK_IMPORTED_MODULE_13__["Accordion"]; });

/* harmony import */ var _foundation_accordionMenu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../foundation.accordionMenu */ "./js/foundation.accordionMenu.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccordionMenu", function() { return _foundation_accordionMenu__WEBPACK_IMPORTED_MODULE_14__["AccordionMenu"]; });

/* harmony import */ var _foundation_drilldown__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../foundation.drilldown */ "./js/foundation.drilldown.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Drilldown", function() { return _foundation_drilldown__WEBPACK_IMPORTED_MODULE_15__["Drilldown"]; });

/* harmony import */ var _foundation_dropdown__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../foundation.dropdown */ "./js/foundation.dropdown.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Dropdown", function() { return _foundation_dropdown__WEBPACK_IMPORTED_MODULE_16__["Dropdown"]; });

/* harmony import */ var _foundation_dropdownMenu__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../foundation.dropdownMenu */ "./js/foundation.dropdownMenu.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DropdownMenu", function() { return _foundation_dropdownMenu__WEBPACK_IMPORTED_MODULE_17__["DropdownMenu"]; });

/* harmony import */ var _foundation_equalizer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../foundation.equalizer */ "./js/foundation.equalizer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Equalizer", function() { return _foundation_equalizer__WEBPACK_IMPORTED_MODULE_18__["Equalizer"]; });

/* harmony import */ var _foundation_interchange__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../foundation.interchange */ "./js/foundation.interchange.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Interchange", function() { return _foundation_interchange__WEBPACK_IMPORTED_MODULE_19__["Interchange"]; });

/* harmony import */ var _foundation_magellan__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../foundation.magellan */ "./js/foundation.magellan.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Magellan", function() { return _foundation_magellan__WEBPACK_IMPORTED_MODULE_20__["Magellan"]; });

/* harmony import */ var _foundation_offcanvas__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../foundation.offcanvas */ "./js/foundation.offcanvas.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OffCanvas", function() { return _foundation_offcanvas__WEBPACK_IMPORTED_MODULE_21__["OffCanvas"]; });

/* harmony import */ var _foundation_orbit__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../foundation.orbit */ "./js/foundation.orbit.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Orbit", function() { return _foundation_orbit__WEBPACK_IMPORTED_MODULE_22__["Orbit"]; });

/* harmony import */ var _foundation_responsiveMenu__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../foundation.responsiveMenu */ "./js/foundation.responsiveMenu.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResponsiveMenu", function() { return _foundation_responsiveMenu__WEBPACK_IMPORTED_MODULE_23__["ResponsiveMenu"]; });

/* harmony import */ var _foundation_responsiveToggle__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../foundation.responsiveToggle */ "./js/foundation.responsiveToggle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResponsiveToggle", function() { return _foundation_responsiveToggle__WEBPACK_IMPORTED_MODULE_24__["ResponsiveToggle"]; });

/* harmony import */ var _foundation_reveal__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../foundation.reveal */ "./js/foundation.reveal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Reveal", function() { return _foundation_reveal__WEBPACK_IMPORTED_MODULE_25__["Reveal"]; });

/* harmony import */ var _foundation_slider__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../foundation.slider */ "./js/foundation.slider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Slider", function() { return _foundation_slider__WEBPACK_IMPORTED_MODULE_26__["Slider"]; });

/* harmony import */ var _foundation_smoothScroll__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../foundation.smoothScroll */ "./js/foundation.smoothScroll.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SmoothScroll", function() { return _foundation_smoothScroll__WEBPACK_IMPORTED_MODULE_27__["SmoothScroll"]; });

/* harmony import */ var _foundation_sticky__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../foundation.sticky */ "./js/foundation.sticky.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Sticky", function() { return _foundation_sticky__WEBPACK_IMPORTED_MODULE_28__["Sticky"]; });

/* harmony import */ var _foundation_tabs__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../foundation.tabs */ "./js/foundation.tabs.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tabs", function() { return _foundation_tabs__WEBPACK_IMPORTED_MODULE_29__["Tabs"]; });

/* harmony import */ var _foundation_toggler__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../foundation.toggler */ "./js/foundation.toggler.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Toggler", function() { return _foundation_toggler__WEBPACK_IMPORTED_MODULE_30__["Toggler"]; });

/* harmony import */ var _foundation_tooltip__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../foundation.tooltip */ "./js/foundation.tooltip.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tooltip", function() { return _foundation_tooltip__WEBPACK_IMPORTED_MODULE_31__["Tooltip"]; });

/* harmony import */ var _foundation_responsiveAccordionTabs__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../foundation.responsiveAccordionTabs */ "./js/foundation.responsiveAccordionTabs.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResponsiveAccordionTabs", function() { return _foundation_responsiveAccordionTabs__WEBPACK_IMPORTED_MODULE_32__["ResponsiveAccordionTabs"]; });


































_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].addToJquery(jquery__WEBPACK_IMPORTED_MODULE_0___default.a); // Add Foundation Utils to Foundation global namespace for backwards
// compatibility.

_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].rtl = _foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__["rtl"];
_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].GetYoDigits = _foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__["GetYoDigits"];
_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].transitionend = _foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__["transitionend"];
_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].RegExpEscape = _foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__["RegExpEscape"];
_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].onLoad = _foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__["onLoad"];
_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].Box = _foundation_util_box__WEBPACK_IMPORTED_MODULE_3__["Box"];
_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].onImagesLoaded = _foundation_util_imageLoader__WEBPACK_IMPORTED_MODULE_4__["onImagesLoaded"];
_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].Keyboard = _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_5__["Keyboard"];
_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].MediaQuery = _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_6__["MediaQuery"];
_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].Motion = _foundation_util_motion__WEBPACK_IMPORTED_MODULE_7__["Motion"];
_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].Move = _foundation_util_motion__WEBPACK_IMPORTED_MODULE_7__["Move"];
_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].Nest = _foundation_util_nest__WEBPACK_IMPORTED_MODULE_8__["Nest"];
_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].Timer = _foundation_util_timer__WEBPACK_IMPORTED_MODULE_9__["Timer"]; // Touch and Triggers previously were almost purely sede effect driven,
// so no need to add it to Foundation, just init them.

_foundation_util_touch__WEBPACK_IMPORTED_MODULE_10__["Touch"].init(jquery__WEBPACK_IMPORTED_MODULE_0___default.a);
_foundation_util_triggers__WEBPACK_IMPORTED_MODULE_11__["Triggers"].init(jquery__WEBPACK_IMPORTED_MODULE_0___default.a, _foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"]);

_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_6__["MediaQuery"]._init();

_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].plugin(_foundation_abide__WEBPACK_IMPORTED_MODULE_12__["Abide"], 'Abide');
_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].plugin(_foundation_accordion__WEBPACK_IMPORTED_MODULE_13__["Accordion"], 'Accordion');
_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].plugin(_foundation_accordionMenu__WEBPACK_IMPORTED_MODULE_14__["AccordionMenu"], 'AccordionMenu');
_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].plugin(_foundation_drilldown__WEBPACK_IMPORTED_MODULE_15__["Drilldown"], 'Drilldown');
_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].plugin(_foundation_dropdown__WEBPACK_IMPORTED_MODULE_16__["Dropdown"], 'Dropdown');
_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].plugin(_foundation_dropdownMenu__WEBPACK_IMPORTED_MODULE_17__["DropdownMenu"], 'DropdownMenu');
_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].plugin(_foundation_equalizer__WEBPACK_IMPORTED_MODULE_18__["Equalizer"], 'Equalizer');
_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].plugin(_foundation_interchange__WEBPACK_IMPORTED_MODULE_19__["Interchange"], 'Interchange');
_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].plugin(_foundation_magellan__WEBPACK_IMPORTED_MODULE_20__["Magellan"], 'Magellan');
_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].plugin(_foundation_offcanvas__WEBPACK_IMPORTED_MODULE_21__["OffCanvas"], 'OffCanvas');
_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].plugin(_foundation_orbit__WEBPACK_IMPORTED_MODULE_22__["Orbit"], 'Orbit');
_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].plugin(_foundation_responsiveMenu__WEBPACK_IMPORTED_MODULE_23__["ResponsiveMenu"], 'ResponsiveMenu');
_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].plugin(_foundation_responsiveToggle__WEBPACK_IMPORTED_MODULE_24__["ResponsiveToggle"], 'ResponsiveToggle');
_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].plugin(_foundation_reveal__WEBPACK_IMPORTED_MODULE_25__["Reveal"], 'Reveal');
_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].plugin(_foundation_slider__WEBPACK_IMPORTED_MODULE_26__["Slider"], 'Slider');
_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].plugin(_foundation_smoothScroll__WEBPACK_IMPORTED_MODULE_27__["SmoothScroll"], 'SmoothScroll');
_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].plugin(_foundation_sticky__WEBPACK_IMPORTED_MODULE_28__["Sticky"], 'Sticky');
_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].plugin(_foundation_tabs__WEBPACK_IMPORTED_MODULE_29__["Tabs"], 'Tabs');
_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].plugin(_foundation_toggler__WEBPACK_IMPORTED_MODULE_30__["Toggler"], 'Toggler');
_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].plugin(_foundation_tooltip__WEBPACK_IMPORTED_MODULE_31__["Tooltip"], 'Tooltip');
_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].plugin(_foundation_responsiveAccordionTabs__WEBPACK_IMPORTED_MODULE_32__["ResponsiveAccordionTabs"], 'ResponsiveAccordionTabs');

/* harmony default export */ __webpack_exports__["default"] = (_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"]);

/***/ }),

/***/ "./js/foundation.abide.js":
/*!********************************!*\
  !*** ./js/foundation.abide.js ***!
  \********************************/
/*! exports provided: Abide */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Abide", function() { return Abide; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.core.plugin */ "./js/foundation.core.plugin.js");
/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.core.utils */ "./js/foundation.core.utils.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




/**
 * Abide module.
 * @module foundation.abide
 */

var Abide =
/*#__PURE__*/
function (_Plugin) {
  _inherits(Abide, _Plugin);

  function Abide() {
    _classCallCheck(this, Abide);

    return _possibleConstructorReturn(this, _getPrototypeOf(Abide).apply(this, arguments));
  }

  _createClass(Abide, [{
    key: "_setup",

    /**
     * Creates a new instance of Abide.
     * @class
     * @name Abide
     * @fires Abide#init
     * @param {Object} element - jQuery object to add the trigger to.
     * @param {Object} options - Overrides to the default plugin settings.
     */
    value: function _setup(element) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      this.$element = element;
      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend(true, {}, Abide.defaults, this.$element.data(), options);
      this.className = 'Abide'; // ie9 back compat

      this._init();
    }
    /**
     * Initializes the Abide plugin and calls functions to get Abide functioning on load.
     * @private
     */

  }, {
    key: "_init",
    value: function _init() {
      var _this2 = this;

      this.$inputs = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.merge( // Consider as input to validate:
      this.$element.find('input').not('[type=submit]'), // * all input fields expect submit
      this.$element.find('textarea, select') // * all textareas and select fields
      );
      var $globalErrors = this.$element.find('[data-abide-error]'); // Add a11y attributes to all fields

      if (this.options.a11yAttributes) {
        this.$inputs.each(function (i, input) {
          return _this2.addA11yAttributes(jquery__WEBPACK_IMPORTED_MODULE_0___default()(input));
        });
        $globalErrors.each(function (i, error) {
          return _this2.addGlobalErrorA11yAttributes(jquery__WEBPACK_IMPORTED_MODULE_0___default()(error));
        });
      }

      this._events();
    }
    /**
     * Initializes events for Abide.
     * @private
     */

  }, {
    key: "_events",
    value: function _events() {
      var _this3 = this;

      this.$element.off('.abide').on('reset.zf.abide', function () {
        _this3.resetForm();
      }).on('submit.zf.abide', function () {
        return _this3.validateForm();
      });

      if (this.options.validateOn === 'fieldChange') {
        this.$inputs.off('change.zf.abide').on('change.zf.abide', function (e) {
          _this3.validateInput(jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target));
        });
      }

      if (this.options.liveValidate) {
        this.$inputs.off('input.zf.abide').on('input.zf.abide', function (e) {
          _this3.validateInput(jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target));
        });
      }

      if (this.options.validateOnBlur) {
        this.$inputs.off('blur.zf.abide').on('blur.zf.abide', function (e) {
          _this3.validateInput(jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target));
        });
      }
    }
    /**
     * Calls necessary functions to update Abide upon DOM change
     * @private
     */

  }, {
    key: "_reflow",
    value: function _reflow() {
      this._init();
    }
    /**
     * Checks whether or not a form element has the required attribute and if it's checked or not
     * @param {Object} element - jQuery object to check for required attribute
     * @returns {Boolean} Boolean value depends on whether or not attribute is checked or empty
     */

  }, {
    key: "requiredCheck",
    value: function requiredCheck($el) {
      if (!$el.attr('required')) return true;
      var isGood = true;

      switch ($el[0].type) {
        case 'checkbox':
          isGood = $el[0].checked;
          break;

        case 'select':
        case 'select-one':
        case 'select-multiple':
          var opt = $el.find('option:selected');
          if (!opt.length || !opt.val()) isGood = false;
          break;

        default:
          if (!$el.val() || !$el.val().length) isGood = false;
      }

      return isGood;
    }
    /**
     * Get:
     * - Based on $el, the first element(s) corresponding to `formErrorSelector` in this order:
     *   1. The element's direct sibling('s).
     *   2. The element's parent's children.
     * - Element(s) with the attribute `[data-form-error-for]` set with the element's id.
     *
     * This allows for multiple form errors per input, though if none are found, no form errors will be shown.
     *
     * @param {Object} $el - jQuery object to use as reference to find the form error selector.
     * @returns {Object} jQuery object with the selector.
     */

  }, {
    key: "findFormError",
    value: function findFormError($el) {
      var id = $el[0].id;
      var $error = $el.siblings(this.options.formErrorSelector);

      if (!$error.length) {
        $error = $el.parent().find(this.options.formErrorSelector);
      }

      if (id) {
        $error = $error.add(this.$element.find("[data-form-error-for=\"".concat(id, "\"]")));
      }

      return $error;
    }
    /**
     * Get the first element in this order:
     * 2. The <label> with the attribute `[for="someInputId"]`
     * 3. The `.closest()` <label>
     *
     * @param {Object} $el - jQuery object to check for required attribute
     * @returns {Boolean} Boolean value depends on whether or not attribute is checked or empty
     */

  }, {
    key: "findLabel",
    value: function findLabel($el) {
      var id = $el[0].id;
      var $label = this.$element.find("label[for=\"".concat(id, "\"]"));

      if (!$label.length) {
        return $el.closest('label');
      }

      return $label;
    }
    /**
     * Get the set of labels associated with a set of radio els in this order
     * 2. The <label> with the attribute `[for="someInputId"]`
     * 3. The `.closest()` <label>
     *
     * @param {Object} $el - jQuery object to check for required attribute
     * @returns {Boolean} Boolean value depends on whether or not attribute is checked or empty
     */

  }, {
    key: "findRadioLabels",
    value: function findRadioLabels($els) {
      var _this4 = this;

      var labels = $els.map(function (i, el) {
        var id = el.id;

        var $label = _this4.$element.find("label[for=\"".concat(id, "\"]"));

        if (!$label.length) {
          $label = jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).closest('label');
        }

        return $label[0];
      });
      return jquery__WEBPACK_IMPORTED_MODULE_0___default()(labels);
    }
    /**
     * Adds the CSS error class as specified by the Abide settings to the label, input, and the form
     * @param {Object} $el - jQuery object to add the class to
     */

  }, {
    key: "addErrorClasses",
    value: function addErrorClasses($el) {
      var $label = this.findLabel($el);
      var $formError = this.findFormError($el);

      if ($label.length) {
        $label.addClass(this.options.labelErrorClass);
      }

      if ($formError.length) {
        $formError.addClass(this.options.formErrorClass);
      }

      $el.addClass(this.options.inputErrorClass).attr({
        'data-invalid': '',
        'aria-invalid': true
      });
    }
    /**
     * Adds [for] and [role=alert] attributes to all form error targetting $el,
     * and [aria-describedby] attribute to $el toward the first form error.
     * @param {Object} $el - jQuery object
     */

  }, {
    key: "addA11yAttributes",
    value: function addA11yAttributes($el) {
      var $errors = this.findFormError($el);
      var $labels = $errors.filter('label');
      var $error = $errors.first();
      if (!$errors.length) return; // Set [aria-describedby] on the input toward the first form error if it is not set

      if (typeof $el.attr('aria-describedby') === 'undefined') {
        // Get the first error ID or create one
        var errorId = $error.attr('id');

        if (typeof errorId === 'undefined') {
          errorId = Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__["GetYoDigits"])(6, 'abide-error');
          $error.attr('id', errorId);
        }

        ;
        $el.attr('aria-describedby', errorId);
      }

      if ($labels.filter('[for]').length < $labels.length) {
        // Get the input ID or create one
        var elemId = $el.attr('id');

        if (typeof elemId === 'undefined') {
          elemId = Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__["GetYoDigits"])(6, 'abide-input');
          $el.attr('id', elemId);
        }

        ; // For each label targeting $el, set [for] if it is not set.

        $labels.each(function (i, label) {
          var $label = jquery__WEBPACK_IMPORTED_MODULE_0___default()(label);
          if (typeof $label.attr('for') === 'undefined') $label.attr('for', elemId);
        });
      } // For each error targeting $el, set [role=alert] if it is not set.


      $errors.each(function (i, label) {
        var $label = jquery__WEBPACK_IMPORTED_MODULE_0___default()(label);
        if (typeof $label.attr('role') === 'undefined') $label.attr('role', 'alert');
      }).end();
    }
    /**
     * Adds [aria-live] attribute to the given global form error $el.
     * @param {Object} $el - jQuery object to add the attribute to
     */

  }, {
    key: "addGlobalErrorA11yAttributes",
    value: function addGlobalErrorA11yAttributes($el) {
      if (typeof $el.attr('aria-live') === 'undefined') $el.attr('aria-live', this.options.a11yErrorLevel);
    }
    /**
     * Remove CSS error classes etc from an entire radio button group
     * @param {String} groupName - A string that specifies the name of a radio button group
     *
     */

  }, {
    key: "removeRadioErrorClasses",
    value: function removeRadioErrorClasses(groupName) {
      var $els = this.$element.find(":radio[name=\"".concat(groupName, "\"]"));
      var $labels = this.findRadioLabels($els);
      var $formErrors = this.findFormError($els);

      if ($labels.length) {
        $labels.removeClass(this.options.labelErrorClass);
      }

      if ($formErrors.length) {
        $formErrors.removeClass(this.options.formErrorClass);
      }

      $els.removeClass(this.options.inputErrorClass).attr({
        'data-invalid': null,
        'aria-invalid': null
      });
    }
    /**
     * Removes CSS error class as specified by the Abide settings from the label, input, and the form
     * @param {Object} $el - jQuery object to remove the class from
     */

  }, {
    key: "removeErrorClasses",
    value: function removeErrorClasses($el) {
      // radios need to clear all of the els
      if ($el[0].type == 'radio') {
        return this.removeRadioErrorClasses($el.attr('name'));
      }

      var $label = this.findLabel($el);
      var $formError = this.findFormError($el);

      if ($label.length) {
        $label.removeClass(this.options.labelErrorClass);
      }

      if ($formError.length) {
        $formError.removeClass(this.options.formErrorClass);
      }

      $el.removeClass(this.options.inputErrorClass).attr({
        'data-invalid': null,
        'aria-invalid': null
      });
    }
    /**
     * Goes through a form to find inputs and proceeds to validate them in ways specific to their type.
     * Ignores inputs with data-abide-ignore, type="hidden" or disabled attributes set
     * @fires Abide#invalid
     * @fires Abide#valid
     * @param {Object} element - jQuery object to validate, should be an HTML input
     * @returns {Boolean} goodToGo - If the input is valid or not.
     */

  }, {
    key: "validateInput",
    value: function validateInput($el) {
      var clearRequire = this.requiredCheck($el),
          validated = false,
          customValidator = true,
          validator = $el.attr('data-validator'),
          equalTo = true; // don't validate ignored inputs or hidden inputs or disabled inputs

      if ($el.is('[data-abide-ignore]') || $el.is('[type="hidden"]') || $el.is('[disabled]')) {
        return true;
      }

      switch ($el[0].type) {
        case 'radio':
          validated = this.validateRadio($el.attr('name'));
          break;

        case 'checkbox':
          validated = clearRequire;
          break;

        case 'select':
        case 'select-one':
        case 'select-multiple':
          validated = clearRequire;
          break;

        default:
          validated = this.validateText($el);
      }

      if (validator) {
        customValidator = this.matchValidation($el, validator, $el.attr('required'));
      }

      if ($el.attr('data-equalto')) {
        equalTo = this.options.validators.equalTo($el);
      }

      var goodToGo = [clearRequire, validated, customValidator, equalTo].indexOf(false) === -1;
      var message = (goodToGo ? 'valid' : 'invalid') + '.zf.abide';

      if (goodToGo) {
        // Re-validate inputs that depend on this one with equalto
        var dependentElements = this.$element.find("[data-equalto=\"".concat($el.attr('id'), "\"]"));

        if (dependentElements.length) {
          var _this = this;

          dependentElements.each(function () {
            if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).val()) {
              _this.validateInput(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));
            }
          });
        }
      }

      this[goodToGo ? 'removeErrorClasses' : 'addErrorClasses']($el);
      /**
       * Fires when the input is done checking for validation. Event trigger is either `valid.zf.abide` or `invalid.zf.abide`
       * Trigger includes the DOM element of the input.
       * @event Abide#valid
       * @event Abide#invalid
       */

      $el.trigger(message, [$el]);
      return goodToGo;
    }
    /**
     * Goes through a form and if there are any invalid inputs, it will display the form error element
     * @returns {Boolean} noError - true if no errors were detected...
     * @fires Abide#formvalid
     * @fires Abide#forminvalid
     */

  }, {
    key: "validateForm",
    value: function validateForm() {
      var _this5 = this;

      var acc = [];

      var _this = this;

      this.$inputs.each(function () {
        acc.push(_this.validateInput(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)));
      });
      var noError = acc.indexOf(false) === -1;
      this.$element.find('[data-abide-error]').each(function (i, elem) {
        var $elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(elem); // Ensure a11y attributes are set

        if (_this5.options.a11yAttributes) _this5.addGlobalErrorA11yAttributes($elem); // Show or hide the error

        $elem.css('display', noError ? 'none' : 'block');
      });
      /**
       * Fires when the form is finished validating. Event trigger is either `formvalid.zf.abide` or `forminvalid.zf.abide`.
       * Trigger includes the element of the form.
       * @event Abide#formvalid
       * @event Abide#forminvalid
       */

      this.$element.trigger((noError ? 'formvalid' : 'forminvalid') + '.zf.abide', [this.$element]);
      return noError;
    }
    /**
     * Determines whether or a not a text input is valid based on the pattern specified in the attribute. If no matching pattern is found, returns true.
     * @param {Object} $el - jQuery object to validate, should be a text input HTML element
     * @param {String} pattern - string value of one of the RegEx patterns in Abide.options.patterns
     * @returns {Boolean} Boolean value depends on whether or not the input value matches the pattern specified
     */

  }, {
    key: "validateText",
    value: function validateText($el, pattern) {
      // A pattern can be passed to this function, or it will be infered from the input's "pattern" attribute, or it's "type" attribute
      pattern = pattern || $el.attr('pattern') || $el.attr('type');
      var inputText = $el.val();
      var valid = false;

      if (inputText.length) {
        // If the pattern attribute on the element is in Abide's list of patterns, then test that regexp
        if (this.options.patterns.hasOwnProperty(pattern)) {
          valid = this.options.patterns[pattern].test(inputText);
        } // If the pattern name isn't also the type attribute of the field, then test it as a regexp
        else if (pattern !== $el.attr('type')) {
            valid = new RegExp(pattern).test(inputText);
          } else {
            valid = true;
          }
      } // An empty field is valid if it's not required
      else if (!$el.prop('required')) {
          valid = true;
        }

      return valid;
    }
    /**
     * Determines whether or a not a radio input is valid based on whether or not it is required and selected. Although the function targets a single `<input>`, it validates by checking the `required` and `checked` properties of all radio buttons in its group.
     * @param {String} groupName - A string that specifies the name of a radio button group
     * @returns {Boolean} Boolean value depends on whether or not at least one radio input has been selected (if it's required)
     */

  }, {
    key: "validateRadio",
    value: function validateRadio(groupName) {
      // If at least one radio in the group has the `required` attribute, the group is considered required
      // Per W3C spec, all radio buttons in a group should have `required`, but we're being nice
      var $group = this.$element.find(":radio[name=\"".concat(groupName, "\"]"));
      var valid = false,
          required = false; // For the group to be required, at least one radio needs to be required

      $group.each(function (i, e) {
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(e).attr('required')) {
          required = true;
        }
      });
      if (!required) valid = true;

      if (!valid) {
        // For the group to be valid, at least one radio needs to be checked
        $group.each(function (i, e) {
          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(e).prop('checked')) {
            valid = true;
          }
        });
      }

      ;
      return valid;
    }
    /**
     * Determines if a selected input passes a custom validation function. Multiple validations can be used, if passed to the element with `data-validator="foo bar baz"` in a space separated listed.
     * @param {Object} $el - jQuery input element.
     * @param {String} validators - a string of function names matching functions in the Abide.options.validators object.
     * @param {Boolean} required - self explanatory?
     * @returns {Boolean} - true if validations passed.
     */

  }, {
    key: "matchValidation",
    value: function matchValidation($el, validators, required) {
      var _this6 = this;

      required = required ? true : false;
      var clear = validators.split(' ').map(function (v) {
        return _this6.options.validators[v]($el, required, $el.parent());
      });
      return clear.indexOf(false) === -1;
    }
    /**
     * Resets form inputs and styles
     * @fires Abide#formreset
     */

  }, {
    key: "resetForm",
    value: function resetForm() {
      var $form = this.$element,
          opts = this.options;
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(".".concat(opts.labelErrorClass), $form).not('small').removeClass(opts.labelErrorClass);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(".".concat(opts.inputErrorClass), $form).not('small').removeClass(opts.inputErrorClass);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("".concat(opts.formErrorSelector, ".").concat(opts.formErrorClass)).removeClass(opts.formErrorClass);
      $form.find('[data-abide-error]').css('display', 'none');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(':input', $form).not(':button, :submit, :reset, :hidden, :radio, :checkbox, [data-abide-ignore]').val('').attr({
        'data-invalid': null,
        'aria-invalid': null
      });
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(':input:radio', $form).not('[data-abide-ignore]').prop('checked', false).attr({
        'data-invalid': null,
        'aria-invalid': null
      });
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(':input:checkbox', $form).not('[data-abide-ignore]').prop('checked', false).attr({
        'data-invalid': null,
        'aria-invalid': null
      });
      /**
       * Fires when the form has been reset.
       * @event Abide#formreset
       */

      $form.trigger('formreset.zf.abide', [$form]);
    }
    /**
     * Destroys an instance of Abide.
     * Removes error styles and classes from elements, without resetting their values.
     */

  }, {
    key: "_destroy",
    value: function _destroy() {
      var _this = this;

      this.$element.off('.abide').find('[data-abide-error]').css('display', 'none');
      this.$inputs.off('.abide').each(function () {
        _this.removeErrorClasses(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));
      });
    }
  }]);

  return Abide;
}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__["Plugin"]);
/**
 * Default settings for plugin
 */


Abide.defaults = {
  /**
   * The default event to validate inputs. Checkboxes and radios validate immediately.
   * Remove or change this value for manual validation.
   * @option
   * @type {?string}
   * @default 'fieldChange'
   */
  validateOn: 'fieldChange',

  /**
   * Class to be applied to input labels on failed validation.
   * @option
   * @type {string}
   * @default 'is-invalid-label'
   */
  labelErrorClass: 'is-invalid-label',

  /**
   * Class to be applied to inputs on failed validation.
   * @option
   * @type {string}
   * @default 'is-invalid-input'
   */
  inputErrorClass: 'is-invalid-input',

  /**
   * Class selector to use to target Form Errors for show/hide.
   * @option
   * @type {string}
   * @default '.form-error'
   */
  formErrorSelector: '.form-error',

  /**
   * Class added to Form Errors on failed validation.
   * @option
   * @type {string}
   * @default 'is-visible'
   */
  formErrorClass: 'is-visible',

  /**
   * If true, automatically insert when possible:
   * - `[aria-describedby]` on fields
   * - `[role=alert]` on form errors and `[for]` on form error labels
   * - `[aria-live]` on global errors `[data-abide-error]` (see option `a11yErrorLevel`).
   * @option
   * @type {boolean}
   * @default true
   */
  a11yAttributes: true,

  /**
   * [aria-live] attribute value to be applied on global errors `[data-abide-error]`.
   * Options are: 'assertive', 'polite' and 'off'/null
   * @option
   * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions
   * @type {string}
   * @default 'assertive'
   */
  a11yErrorLevel: 'assertive',

  /**
   * Set to true to validate text inputs on any value change.
   * @option
   * @type {boolean}
   * @default false
   */
  liveValidate: false,

  /**
   * Set to true to validate inputs on blur.
   * @option
   * @type {boolean}
   * @default false
   */
  validateOnBlur: false,
  patterns: {
    alpha: /^[a-zA-Z]+$/,
    alpha_numeric: /^[a-zA-Z0-9]+$/,
    integer: /^[-+]?\d+$/,
    number: /^[-+]?\d*(?:[\.\,]\d+)?$/,
    // amex, visa, diners
    card: /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|(?:222[1-9]|2[3-6][0-9]{2}|27[0-1][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
    cvv: /^([0-9]){3,4}$/,
    // http://www.whatwg.org/specs/web-apps/current-work/multipage/states-of-the-type-attribute.html#valid-e-mail-address
    email: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/,
    // From CommonRegexJS (@talyssonoc)
    // https://github.com/talyssonoc/CommonRegexJS/blob/e2901b9f57222bc14069dc8f0598d5f412555411/lib/commonregex.js#L76
    // For more restrictive URL Regexs, see https://mathiasbynens.be/demo/url-regex.
    url: /^((?:(https?|ftps?|file|ssh|sftp):\/\/|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\((?:[^\s()<>]+|(?:\([^\s()<>]+\)))*\))+(?:\((?:[^\s()<>]+|(?:\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:\'".,<>?\xab\xbb\u201c\u201d\u2018\u2019]))$/,
    // abc.de
    domain: /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,8}$/,
    datetime: /^([0-2][0-9]{3})\-([0-1][0-9])\-([0-3][0-9])T([0-5][0-9])\:([0-5][0-9])\:([0-5][0-9])(Z|([\-\+]([0-1][0-9])\:00))$/,
    // YYYY-MM-DD
    date: /(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$/,
    // HH:MM:SS
    time: /^(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}$/,
    dateISO: /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/,
    // MM/DD/YYYY
    month_day_year: /^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.]\d{4}$/,
    // DD/MM/YYYY
    day_month_year: /^(0[1-9]|[12][0-9]|3[01])[- \/.](0[1-9]|1[012])[- \/.]\d{4}$/,
    // #FFF or #FFFFFF
    color: /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/,
    // Domain || URL
    website: {
      test: function test(text) {
        return Abide.defaults.patterns['domain'].test(text) || Abide.defaults.patterns['url'].test(text);
      }
    }
  },

  /**
   * Optional validation functions to be used. `equalTo` being the only default included function.
   * Functions should return only a boolean if the input is valid or not. Functions are given the following arguments:
   * el : The jQuery element to validate.
   * required : Boolean value of the required attribute be present or not.
   * parent : The direct parent of the input.
   * @option
   */
  validators: {
    equalTo: function equalTo(el, required, parent) {
      return jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat(el.attr('data-equalto'))).val() === el.val();
    }
  }
};


/***/ }),

/***/ "./js/foundation.accordion.js":
/*!************************************!*\
  !*** ./js/foundation.accordion.js ***!
  \************************************/
/*! exports provided: Accordion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Accordion", function() { return Accordion; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.core.utils */ "./js/foundation.core.utils.js");
/* harmony import */ var _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.util.keyboard */ "./js/foundation.util.keyboard.js");
/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.core.plugin */ "./js/foundation.core.plugin.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





/**
 * Accordion module.
 * @module foundation.accordion
 * @requires foundation.util.keyboard
 */

var Accordion =
/*#__PURE__*/
function (_Plugin) {
  _inherits(Accordion, _Plugin);

  function Accordion() {
    _classCallCheck(this, Accordion);

    return _possibleConstructorReturn(this, _getPrototypeOf(Accordion).apply(this, arguments));
  }

  _createClass(Accordion, [{
    key: "_setup",

    /**
     * Creates a new instance of an accordion.
     * @class
     * @name Accordion
     * @fires Accordion#init
     * @param {jQuery} element - jQuery object to make into an accordion.
     * @param {Object} options - a plain object with settings to override the default options.
     */
    value: function _setup(element, options) {
      this.$element = element;
      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, Accordion.defaults, this.$element.data(), options);
      this.className = 'Accordion'; // ie9 back compat

      this._init();

      _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__["Keyboard"].register('Accordion', {
        'ENTER': 'toggle',
        'SPACE': 'toggle',
        'ARROW_DOWN': 'next',
        'ARROW_UP': 'previous'
      });
    }
    /**
     * Initializes the accordion by animating the preset active pane(s).
     * @private
     */

  }, {
    key: "_init",
    value: function _init() {
      var _this2 = this;

      this._isInitializing = true;
      this.$element.attr('role', 'tablist');
      this.$tabs = this.$element.children('[data-accordion-item]');
      this.$tabs.each(function (idx, el) {
        var $el = jquery__WEBPACK_IMPORTED_MODULE_0___default()(el),
            $content = $el.children('[data-tab-content]'),
            id = $content[0].id || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__["GetYoDigits"])(6, 'accordion'),
            linkId = el.id ? "".concat(el.id, "-label") : "".concat(id, "-label");
        $el.find('a:first').attr({
          'aria-controls': id,
          'role': 'tab',
          'id': linkId,
          'aria-expanded': false,
          'aria-selected': false
        });
        $content.attr({
          'role': 'tabpanel',
          'aria-labelledby': linkId,
          'aria-hidden': true,
          'id': id
        });
      });
      var $initActive = this.$element.find('.is-active').children('[data-tab-content]');

      if ($initActive.length) {
        // Save up the initial hash to return to it later when going back in history
        this._initialAnchor = $initActive.prev('a').attr('href');

        this._openSingleTab($initActive);
      }

      this._checkDeepLink = function () {
        var anchor = window.location.hash;

        if (!anchor.length) {
          // If we are still initializing and there is no anchor, then there is nothing to do
          if (_this2._isInitializing) return; // Otherwise, move to the initial anchor

          if (_this2._initialAnchor) anchor = _this2._initialAnchor;
        }

        var $anchor = anchor && jquery__WEBPACK_IMPORTED_MODULE_0___default()(anchor);

        var $link = anchor && _this2.$element.find("[href$=\"".concat(anchor, "\"]")); // Whether the anchor element that has been found is part of this element


        var isOwnAnchor = !!($anchor.length && $link.length); // If there is an anchor for the hash, open it (if not already active)

        if ($anchor && $link && $link.length) {
          if (!$link.parent('[data-accordion-item]').hasClass('is-active')) {
            _this2._openSingleTab($anchor);
          }

          ;
        } // Otherwise, close everything
        else {
            _this2._closeAllTabs();
          }

        if (isOwnAnchor) {
          // Roll up a little to show the titles
          if (_this2.options.deepLinkSmudge) {
            Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__["onLoad"])(jquery__WEBPACK_IMPORTED_MODULE_0___default()(window), function () {
              var offset = _this2.$element.offset();

              jquery__WEBPACK_IMPORTED_MODULE_0___default()('html, body').animate({
                scrollTop: offset.top
              }, _this2.options.deepLinkSmudgeDelay);
            });
          }
          /**
           * Fires when the plugin has deeplinked at pageload
           * @event Accordion#deeplink
           */


          _this2.$element.trigger('deeplink.zf.accordion', [$link, $anchor]);
        }
      }; //use browser to open a tab, if it exists in this tabset


      if (this.options.deepLink) {
        this._checkDeepLink();
      }

      this._events();

      this._isInitializing = false;
    }
    /**
     * Adds event handlers for items within the accordion.
     * @private
     */

  }, {
    key: "_events",
    value: function _events() {
      var _this = this;

      this.$tabs.each(function () {
        var $elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
        var $tabContent = $elem.children('[data-tab-content]');

        if ($tabContent.length) {
          $elem.children('a').off('click.zf.accordion keydown.zf.accordion').on('click.zf.accordion', function (e) {
            e.preventDefault();

            _this.toggle($tabContent);
          }).on('keydown.zf.accordion', function (e) {
            _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__["Keyboard"].handleKey(e, 'Accordion', {
              toggle: function toggle() {
                _this.toggle($tabContent);
              },
              next: function next() {
                var $a = $elem.next().find('a').focus();

                if (!_this.options.multiExpand) {
                  $a.trigger('click.zf.accordion');
                }
              },
              previous: function previous() {
                var $a = $elem.prev().find('a').focus();

                if (!_this.options.multiExpand) {
                  $a.trigger('click.zf.accordion');
                }
              },
              handled: function handled() {
                e.preventDefault();
                e.stopPropagation();
              }
            });
          });
        }
      });

      if (this.options.deepLink) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('hashchange', this._checkDeepLink);
      }
    }
    /**
     * Toggles the selected content pane's open/close state.
     * @param {jQuery} $target - jQuery object of the pane to toggle (`.accordion-content`).
     * @function
     */

  }, {
    key: "toggle",
    value: function toggle($target) {
      if ($target.closest('[data-accordion]').is('[disabled]')) {
        console.info('Cannot toggle an accordion that is disabled.');
        return;
      }

      if ($target.parent().hasClass('is-active')) {
        this.up($target);
      } else {
        this.down($target);
      } //either replace or update browser history


      if (this.options.deepLink) {
        var anchor = $target.prev('a').attr('href');

        if (this.options.updateHistory) {
          history.pushState({}, '', anchor);
        } else {
          history.replaceState({}, '', anchor);
        }
      }
    }
    /**
     * Opens the accordion tab defined by `$target`.
     * @param {jQuery} $target - Accordion pane to open (`.accordion-content`).
     * @fires Accordion#down
     * @function
     */

  }, {
    key: "down",
    value: function down($target) {
      if ($target.closest('[data-accordion]').is('[disabled]')) {
        console.info('Cannot call down on an accordion that is disabled.');
        return;
      }

      if (this.options.multiExpand) this._openTab($target);else this._openSingleTab($target);
    }
    /**
     * Closes the tab defined by `$target`.
     * It may be ignored if the Accordion options don't allow it.
     *
     * @param {jQuery} $target - Accordion tab to close (`.accordion-content`).
     * @fires Accordion#up
     * @function
     */

  }, {
    key: "up",
    value: function up($target) {
      if (this.$element.is('[disabled]')) {
        console.info('Cannot call up on an accordion that is disabled.');
        return;
      } // Don't close the item if it is already closed


      var $targetItem = $target.parent();
      if (!$targetItem.hasClass('is-active')) return; // Don't close the item if there is no other active item (unless with `allowAllClosed`)

      var $othersItems = $targetItem.siblings();
      if (!this.options.allowAllClosed && !$othersItems.hasClass('is-active')) return;

      this._closeTab($target);
    }
    /**
     * Make the tab defined by `$target` the only opened tab, closing all others tabs.
     * @param {jQuery} $target - Accordion tab to open (`.accordion-content`).
     * @function
     * @private
     */

  }, {
    key: "_openSingleTab",
    value: function _openSingleTab($target) {
      // Close all the others active tabs.
      var $activeContents = this.$element.children('.is-active').children('[data-tab-content]');

      if ($activeContents.length) {
        this._closeTab($activeContents.not($target));
      } // Then open the target.


      this._openTab($target);
    }
    /**
     * Opens the tab defined by `$target`.
     * @param {jQuery} $target - Accordion tab to open (`.accordion-content`).
     * @fires Accordion#down
     * @function
     * @private
     */

  }, {
    key: "_openTab",
    value: function _openTab($target) {
      var _this3 = this;

      var $targetItem = $target.parent();
      var targetContentId = $target.attr('aria-labelledby');
      $target.attr('aria-hidden', false);
      $targetItem.addClass('is-active');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat(targetContentId)).attr({
        'aria-expanded': true,
        'aria-selected': true
      });
      $target.slideDown(this.options.slideSpeed, function () {
        /**
         * Fires when the tab is done opening.
         * @event Accordion#down
         */
        _this3.$element.trigger('down.zf.accordion', [$target]);
      });
    }
    /**
     * Closes the tab defined by `$target`.
     * @param {jQuery} $target - Accordion tab to close (`.accordion-content`).
     * @fires Accordion#up
     * @function
     * @private
     */

  }, {
    key: "_closeTab",
    value: function _closeTab($target) {
      var _this4 = this;

      var $targetItem = $target.parent();
      var targetContentId = $target.attr('aria-labelledby');
      $target.attr('aria-hidden', true);
      $targetItem.removeClass('is-active');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat(targetContentId)).attr({
        'aria-expanded': false,
        'aria-selected': false
      });
      $target.slideUp(this.options.slideSpeed, function () {
        /**
         * Fires when the tab is done collapsing up.
         * @event Accordion#up
         */
        _this4.$element.trigger('up.zf.accordion', [$target]);
      });
    }
    /**
     * Closes all active tabs
     * @fires Accordion#up
     * @function
     * @private
     */

  }, {
    key: "_closeAllTabs",
    value: function _closeAllTabs() {
      var $activeTabs = this.$element.children('.is-active').children('[data-tab-content]');

      if ($activeTabs.length) {
        this._closeTab($activeTabs);
      }
    }
    /**
     * Destroys an instance of an accordion.
     * @fires Accordion#destroyed
     * @function
     */

  }, {
    key: "_destroy",
    value: function _destroy() {
      this.$element.find('[data-tab-content]').stop(true).slideUp(0).css('display', '');
      this.$element.find('a').off('.zf.accordion');

      if (this.options.deepLink) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off('hashchange', this._checkDeepLink);
      }
    }
  }]);

  return Accordion;
}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_3__["Plugin"]);

Accordion.defaults = {
  /**
   * Amount of time to animate the opening of an accordion pane.
   * @option
   * @type {number}
   * @default 250
   */
  slideSpeed: 250,

  /**
   * Allow the accordion to have multiple open panes.
   * @option
   * @type {boolean}
   * @default false
   */
  multiExpand: false,

  /**
   * Allow the accordion to close all panes.
   * @option
   * @type {boolean}
   * @default false
   */
  allowAllClosed: false,

  /**
   * Link the location hash to the open pane.
   * Set the location hash when the opened pane changes, and open and scroll to the corresponding pane when the location changes.
   * @option
   * @type {boolean}
   * @default false
   */
  deepLink: false,

  /**
   * If `deepLink` is enabled, adjust the deep link scroll to make sure the top of the accordion panel is visible
   * @option
   * @type {boolean}
   * @default false
   */
  deepLinkSmudge: false,

  /**
   * If `deepLinkSmudge` is enabled, animation time (ms) for the deep link adjustment
   * @option
   * @type {number}
   * @default 300
   */
  deepLinkSmudgeDelay: 300,

  /**
   * If `deepLink` is enabled, update the browser history with the open accordion
   * @option
   * @type {boolean}
   * @default false
   */
  updateHistory: false
};


/***/ }),

/***/ "./js/foundation.accordionMenu.js":
/*!****************************************!*\
  !*** ./js/foundation.accordionMenu.js ***!
  \****************************************/
/*! exports provided: AccordionMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionMenu", function() { return AccordionMenu; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.util.keyboard */ "./js/foundation.util.keyboard.js");
/* harmony import */ var _foundation_util_nest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.util.nest */ "./js/foundation.util.nest.js");
/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.core.utils */ "./js/foundation.core.utils.js");
/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation.core.plugin */ "./js/foundation.core.plugin.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






/**
 * AccordionMenu module.
 * @module foundation.accordionMenu
 * @requires foundation.util.keyboard
 * @requires foundation.util.nest
 */

var AccordionMenu =
/*#__PURE__*/
function (_Plugin) {
  _inherits(AccordionMenu, _Plugin);

  function AccordionMenu() {
    _classCallCheck(this, AccordionMenu);

    return _possibleConstructorReturn(this, _getPrototypeOf(AccordionMenu).apply(this, arguments));
  }

  _createClass(AccordionMenu, [{
    key: "_setup",

    /**
     * Creates a new instance of an accordion menu.
     * @class
     * @name AccordionMenu
     * @fires AccordionMenu#init
     * @param {jQuery} element - jQuery object to make into an accordion menu.
     * @param {Object} options - Overrides to the default plugin settings.
     */
    value: function _setup(element, options) {
      this.$element = element;
      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, AccordionMenu.defaults, this.$element.data(), options);
      this.className = 'AccordionMenu'; // ie9 back compat

      this._init();

      _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__["Keyboard"].register('AccordionMenu', {
        'ENTER': 'toggle',
        'SPACE': 'toggle',
        'ARROW_RIGHT': 'open',
        'ARROW_UP': 'up',
        'ARROW_DOWN': 'down',
        'ARROW_LEFT': 'close',
        'ESCAPE': 'closeAll'
      });
    }
    /**
     * Initializes the accordion menu by hiding all nested menus.
     * @private
     */

  }, {
    key: "_init",
    value: function _init() {
      _foundation_util_nest__WEBPACK_IMPORTED_MODULE_2__["Nest"].Feather(this.$element, 'accordion');

      var _this = this;

      this.$element.find('[data-submenu]').not('.is-active').slideUp(0); //.find('a').css('padding-left', '1rem');

      this.$element.attr({
        'role': 'tree',
        'aria-multiselectable': this.options.multiOpen
      });
      this.$menuLinks = this.$element.find('.is-accordion-submenu-parent');
      this.$menuLinks.each(function () {
        var linkId = this.id || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__["GetYoDigits"])(6, 'acc-menu-link'),
            $elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
            $sub = $elem.children('[data-submenu]'),
            subId = $sub[0].id || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__["GetYoDigits"])(6, 'acc-menu'),
            isActive = $sub.hasClass('is-active');

        if (_this.options.parentLink) {
          var $anchor = $elem.children('a');
          $anchor.clone().prependTo($sub).wrap('<li data-is-parent-link class="is-submenu-parent-item is-submenu-item is-accordion-submenu-item"></li>');
        }

        if (_this.options.submenuToggle) {
          $elem.addClass('has-submenu-toggle');
          $elem.children('a').after('<button id="' + linkId + '" class="submenu-toggle" aria-controls="' + subId + '" aria-expanded="' + isActive + '" title="' + _this.options.submenuToggleText + '"><span class="submenu-toggle-text">' + _this.options.submenuToggleText + '</span></button>');
        } else {
          $elem.attr({
            'aria-controls': subId,
            'aria-expanded': isActive,
            'id': linkId
          });
        }

        $sub.attr({
          'aria-labelledby': linkId,
          'aria-hidden': !isActive,
          'role': 'group',
          'id': subId
        });
      });
      this.$element.find('li').attr({
        'role': 'treeitem'
      });
      var initPanes = this.$element.find('.is-active');

      if (initPanes.length) {
        var _this = this;

        initPanes.each(function () {
          _this.down(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));
        });
      }

      this._events();
    }
    /**
     * Adds event handlers for items within the menu.
     * @private
     */

  }, {
    key: "_events",
    value: function _events() {
      var _this = this;

      this.$element.find('li').each(function () {
        var $submenu = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).children('[data-submenu]');

        if ($submenu.length) {
          if (_this.options.submenuToggle) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).children('.submenu-toggle').off('click.zf.accordionMenu').on('click.zf.accordionMenu', function (e) {
              _this.toggle($submenu);
            });
          } else {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).children('a').off('click.zf.accordionMenu').on('click.zf.accordionMenu', function (e) {
              e.preventDefault();

              _this.toggle($submenu);
            });
          }
        }
      }).on('keydown.zf.accordionmenu', function (e) {
        var $element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
            $elements = $element.parent('ul').children('li'),
            $prevElement,
            $nextElement,
            $target = $element.children('[data-submenu]');
        $elements.each(function (i) {
          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).is($element)) {
            $prevElement = $elements.eq(Math.max(0, i - 1)).find('a').first();
            $nextElement = $elements.eq(Math.min(i + 1, $elements.length - 1)).find('a').first();

            if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).children('[data-submenu]:visible').length) {
              // has open sub menu
              $nextElement = $element.find('li:first-child').find('a').first();
            }

            if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).is(':first-child')) {
              // is first element of sub menu
              $prevElement = $element.parents('li').first().find('a').first();
            } else if ($prevElement.parents('li').first().children('[data-submenu]:visible').length) {
              // if previous element has open sub menu
              $prevElement = $prevElement.parents('li').find('li:last-child').find('a').first();
            }

            if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).is(':last-child')) {
              // is last element of sub menu
              $nextElement = $element.parents('li').first().next('li').find('a').first();
            }

            return;
          }
        });
        _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__["Keyboard"].handleKey(e, 'AccordionMenu', {
          open: function open() {
            if ($target.is(':hidden')) {
              _this.down($target);

              $target.find('li').first().find('a').first().focus();
            }
          },
          close: function close() {
            if ($target.length && !$target.is(':hidden')) {
              // close active sub of this item
              _this.up($target);
            } else if ($element.parent('[data-submenu]').length) {
              // close currently open sub
              _this.up($element.parent('[data-submenu]'));

              $element.parents('li').first().find('a').first().focus();
            }
          },
          up: function up() {
            $prevElement.focus();
            return true;
          },
          down: function down() {
            $nextElement.focus();
            return true;
          },
          toggle: function toggle() {
            if (_this.options.submenuToggle) {
              return false;
            }

            if ($element.children('[data-submenu]').length) {
              _this.toggle($element.children('[data-submenu]'));

              return true;
            }
          },
          closeAll: function closeAll() {
            _this.hideAll();
          },
          handled: function handled(preventDefault) {
            if (preventDefault) {
              e.preventDefault();
            }

            e.stopImmediatePropagation();
          }
        });
      }); //.attr('tabindex', 0);
    }
    /**
     * Closes all panes of the menu.
     * @function
     */

  }, {
    key: "hideAll",
    value: function hideAll() {
      this.up(this.$element.find('[data-submenu]'));
    }
    /**
     * Opens all panes of the menu.
     * @function
     */

  }, {
    key: "showAll",
    value: function showAll() {
      this.down(this.$element.find('[data-submenu]'));
    }
    /**
     * Toggles the open/close state of a submenu.
     * @function
     * @param {jQuery} $target - the submenu to toggle
     */

  }, {
    key: "toggle",
    value: function toggle($target) {
      if (!$target.is(':animated')) {
        if (!$target.is(':hidden')) {
          this.up($target);
        } else {
          this.down($target);
        }
      }
    }
    /**
     * Opens the sub-menu defined by `$target`.
     * @param {jQuery} $target - Sub-menu to open.
     * @fires AccordionMenu#down
     */

  }, {
    key: "down",
    value: function down($target) {
      var _this2 = this;

      if (!this.options.multiOpen) {
        this.up(this.$element.find('.is-active').not($target.parentsUntil(this.$element).add($target)));
      }

      $target.addClass('is-active').attr({
        'aria-hidden': false
      });

      if (this.options.submenuToggle) {
        $target.prev('.submenu-toggle').attr({
          'aria-expanded': true
        });
      } else {
        $target.parent('.is-accordion-submenu-parent').attr({
          'aria-expanded': true
        });
      }

      $target.slideDown(this.options.slideSpeed, function () {
        /**
         * Fires when the menu is done opening.
         * @event AccordionMenu#down
         */
        _this2.$element.trigger('down.zf.accordionMenu', [$target]);
      });
    }
    /**
     * Closes the sub-menu defined by `$target`. All sub-menus inside the target will be closed as well.
     * @param {jQuery} $target - Sub-menu to close.
     * @fires AccordionMenu#up
     */

  }, {
    key: "up",
    value: function up($target) {
      var _this3 = this;

      var $submenus = $target.find('[data-submenu]');
      var $allmenus = $target.add($submenus);
      $submenus.slideUp(0);
      $allmenus.removeClass('is-active').attr('aria-hidden', true);

      if (this.options.submenuToggle) {
        $allmenus.prev('.submenu-toggle').attr('aria-expanded', false);
      } else {
        $allmenus.parent('.is-accordion-submenu-parent').attr('aria-expanded', false);
      }

      $target.slideUp(this.options.slideSpeed, function () {
        /**
         * Fires when the menu is done collapsing up.
         * @event AccordionMenu#up
         */
        _this3.$element.trigger('up.zf.accordionMenu', [$target]);
      });
    }
    /**
     * Destroys an instance of accordion menu.
     * @fires AccordionMenu#destroyed
     */

  }, {
    key: "_destroy",
    value: function _destroy() {
      this.$element.find('[data-submenu]').slideDown(0).css('display', '');
      this.$element.find('a').off('click.zf.accordionMenu');
      this.$element.find('[data-is-parent-link]').detach();

      if (this.options.submenuToggle) {
        this.$element.find('.has-submenu-toggle').removeClass('has-submenu-toggle');
        this.$element.find('.submenu-toggle').remove();
      }

      _foundation_util_nest__WEBPACK_IMPORTED_MODULE_2__["Nest"].Burn(this.$element, 'accordion');
    }
  }]);

  return AccordionMenu;
}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_4__["Plugin"]);

AccordionMenu.defaults = {
  /**
   * Adds the parent link to the submenu.
   * @option
   * @type {boolean}
   * @default false
   */
  parentLink: false,

  /**
   * Amount of time to animate the opening of a submenu in ms.
   * @option
   * @type {number}
   * @default 250
   */
  slideSpeed: 250,

  /**
   * Adds a separate submenu toggle button. This allows the parent item to have a link.
   * @option
   * @example true
   */
  submenuToggle: false,

  /**
   * The text used for the submenu toggle if enabled. This is used for screen readers only.
   * @option
   * @example true
   */
  submenuToggleText: 'Toggle menu',

  /**
   * Allow the menu to have multiple open panes.
   * @option
   * @type {boolean}
   * @default true
   */
  multiOpen: true
};


/***/ }),

/***/ "./js/foundation.core.js":
/*!*******************************!*\
  !*** ./js/foundation.core.js ***!
  \*******************************/
/*! exports provided: Foundation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Foundation", function() { return Foundation; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.core.utils */ "./js/foundation.core.utils.js");
/* harmony import */ var _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.util.mediaQuery */ "./js/foundation.util.mediaQuery.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }




var FOUNDATION_VERSION = '6.5.1'; // Global Foundation object
// This is attached to the window, or used as a module for AMD/Browserify

var Foundation = {
  version: FOUNDATION_VERSION,

  /**
   * Stores initialized plugins.
   */
  _plugins: {},

  /**
   * Stores generated unique ids for plugin instances
   */
  _uuids: [],

  /**
   * Defines a Foundation plugin, adding it to the `Foundation` namespace and the list of plugins to initialize when reflowing.
   * @param {Object} plugin - The constructor of the plugin.
   */
  plugin: function plugin(_plugin, name) {
    // Object key to use when adding to global Foundation object
    // Examples: Foundation.Reveal, Foundation.OffCanvas
    var className = name || functionName(_plugin); // Object key to use when storing the plugin, also used to create the identifying data attribute for the plugin
    // Examples: data-reveal, data-off-canvas

    var attrName = hyphenate(className); // Add to the Foundation object and the plugins list (for reflowing)

    this._plugins[attrName] = this[className] = _plugin;
  },

  /**
   * @function
   * Populates the _uuids array with pointers to each individual plugin instance.
   * Adds the `zfPlugin` data-attribute to programmatically created plugins to allow use of $(selector).foundation(method) calls.
   * Also fires the initialization event for each plugin, consolidating repetitive code.
   * @param {Object} plugin - an instance of a plugin, usually `this` in context.
   * @param {String} name - the name of the plugin, passed as a camelCased string.
   * @fires Plugin#init
   */
  registerPlugin: function registerPlugin(plugin, name) {
    var pluginName = name ? hyphenate(name) : functionName(plugin.constructor).toLowerCase();
    plugin.uuid = Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__["GetYoDigits"])(6, pluginName);

    if (!plugin.$element.attr("data-".concat(pluginName))) {
      plugin.$element.attr("data-".concat(pluginName), plugin.uuid);
    }

    if (!plugin.$element.data('zfPlugin')) {
      plugin.$element.data('zfPlugin', plugin);
    }
    /**
     * Fires when the plugin has initialized.
     * @event Plugin#init
     */


    plugin.$element.trigger("init.zf.".concat(pluginName));

    this._uuids.push(plugin.uuid);

    return;
  },

  /**
   * @function
   * Removes the plugins uuid from the _uuids array.
   * Removes the zfPlugin data attribute, as well as the data-plugin-name attribute.
   * Also fires the destroyed event for the plugin, consolidating repetitive code.
   * @param {Object} plugin - an instance of a plugin, usually `this` in context.
   * @fires Plugin#destroyed
   */
  unregisterPlugin: function unregisterPlugin(plugin) {
    var pluginName = hyphenate(functionName(plugin.$element.data('zfPlugin').constructor));

    this._uuids.splice(this._uuids.indexOf(plugin.uuid), 1);

    plugin.$element.removeAttr("data-".concat(pluginName)).removeData('zfPlugin')
    /**
     * Fires when the plugin has been destroyed.
     * @event Plugin#destroyed
     */
    .trigger("destroyed.zf.".concat(pluginName));

    for (var prop in plugin) {
      plugin[prop] = null; //clean up script to prep for garbage collection.
    }

    return;
  },

  /**
   * @function
   * Causes one or more active plugins to re-initialize, resetting event listeners, recalculating positions, etc.
   * @param {String} plugins - optional string of an individual plugin key, attained by calling `$(element).data('pluginName')`, or string of a plugin class i.e. `'dropdown'`
   * @default If no argument is passed, reflow all currently active plugins.
   */
  reInit: function reInit(plugins) {
    var isJQ = plugins instanceof jquery__WEBPACK_IMPORTED_MODULE_0___default.a;

    try {
      if (isJQ) {
        plugins.each(function () {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('zfPlugin')._init();
        });
      } else {
        var type = _typeof(plugins),
            _this = this,
            fns = {
          'object': function object(plgs) {
            plgs.forEach(function (p) {
              p = hyphenate(p);
              jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-' + p + ']').foundation('_init');
            });
          },
          'string': function string() {
            plugins = hyphenate(plugins);
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-' + plugins + ']').foundation('_init');
          },
          'undefined': function undefined() {
            this['object'](Object.keys(_this._plugins));
          }
        };

        fns[type](plugins);
      }
    } catch (err) {
      console.error(err);
    } finally {
      return plugins;
    }
  },

  /**
   * Initialize plugins on any elements within `elem` (and `elem` itself) that aren't already initialized.
   * @param {Object} elem - jQuery object containing the element to check inside. Also checks the element itself, unless it's the `document` object.
   * @param {String|Array} plugins - A list of plugins to initialize. Leave this out to initialize everything.
   */
  reflow: function reflow(elem, plugins) {
    // If plugins is undefined, just grab everything
    if (typeof plugins === 'undefined') {
      plugins = Object.keys(this._plugins);
    } // If plugins is a string, convert it to an array with one item
    else if (typeof plugins === 'string') {
        plugins = [plugins];
      }

    var _this = this; // Iterate through each plugin


    jquery__WEBPACK_IMPORTED_MODULE_0___default.a.each(plugins, function (i, name) {
      // Get the current plugin
      var plugin = _this._plugins[name]; // Localize the search to all elements inside elem, as well as elem itself, unless elem === document

      var $elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(elem).find('[data-' + name + ']').addBack('[data-' + name + ']'); // For each plugin found, initialize it

      $elem.each(function () {
        var $el = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
            opts = {}; // Don't double-dip on plugins

        if ($el.data('zfPlugin')) {
          console.warn("Tried to initialize " + name + " on an element that already has a Foundation plugin.");
          return;
        }

        if ($el.attr('data-options')) {
          var thing = $el.attr('data-options').split(';').forEach(function (e, i) {
            var opt = e.split(':').map(function (el) {
              return el.trim();
            });
            if (opt[0]) opts[opt[0]] = parseValue(opt[1]);
          });
        }

        try {
          $el.data('zfPlugin', new plugin(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this), opts));
        } catch (er) {
          console.error(er);
        } finally {
          return;
        }
      });
    });
  },
  getFnName: functionName,
  addToJquery: function addToJquery($) {
    // TODO: consider not making this a jQuery function
    // TODO: need way to reflow vs. re-initialize

    /**
     * The Foundation jQuery method.
     * @param {String|Array} method - An action to perform on the current jQuery object.
     */
    var foundation = function foundation(method) {
      var type = _typeof(method),
          $noJS = $('.no-js');

      if ($noJS.length) {
        $noJS.removeClass('no-js');
      }

      if (type === 'undefined') {
        //needs to initialize the Foundation object, or an individual plugin.
        _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_2__["MediaQuery"]._init();

        Foundation.reflow(this);
      } else if (type === 'string') {
        //an individual method to invoke on a plugin or group of plugins
        var args = Array.prototype.slice.call(arguments, 1); //collect all the arguments, if necessary

        var plugClass = this.data('zfPlugin'); //determine the class of plugin

        if (typeof plugClass !== 'undefined' && typeof plugClass[method] !== 'undefined') {
          //make sure both the class and method exist
          if (this.length === 1) {
            //if there's only one, call it directly.
            plugClass[method].apply(plugClass, args);
          } else {
            this.each(function (i, el) {
              //otherwise loop through the jQuery collection and invoke the method on each
              plugClass[method].apply($(el).data('zfPlugin'), args);
            });
          }
        } else {
          //error for no class or no method
          throw new ReferenceError("We're sorry, '" + method + "' is not an available method for " + (plugClass ? functionName(plugClass) : 'this element') + '.');
        }
      } else {
        //error for invalid argument type
        throw new TypeError("We're sorry, ".concat(type, " is not a valid parameter. You must use a string representing the method you wish to invoke."));
      }

      return this;
    };

    $.fn.foundation = foundation;
    return $;
  }
};
Foundation.util = {
  /**
   * Function for applying a debounce effect to a function call.
   * @function
   * @param {Function} func - Function to be called at end of timeout.
   * @param {Number} delay - Time in ms to delay the call of `func`.
   * @returns function
   */
  throttle: function throttle(func, delay) {
    var timer = null;
    return function () {
      var context = this,
          args = arguments;

      if (timer === null) {
        timer = setTimeout(function () {
          func.apply(context, args);
          timer = null;
        }, delay);
      }
    };
  }
};
window.Foundation = Foundation; // Polyfill for requestAnimationFrame

(function () {
  if (!Date.now || !window.Date.now) window.Date.now = Date.now = function () {
    return new Date().getTime();
  };
  var vendors = ['webkit', 'moz'];

  for (var i = 0; i < vendors.length && !window.requestAnimationFrame; ++i) {
    var vp = vendors[i];
    window.requestAnimationFrame = window[vp + 'RequestAnimationFrame'];
    window.cancelAnimationFrame = window[vp + 'CancelAnimationFrame'] || window[vp + 'CancelRequestAnimationFrame'];
  }

  if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
    var lastTime = 0;

    window.requestAnimationFrame = function (callback) {
      var now = Date.now();
      var nextTime = Math.max(lastTime + 16, now);
      return setTimeout(function () {
        callback(lastTime = nextTime);
      }, nextTime - now);
    };

    window.cancelAnimationFrame = clearTimeout;
  }
  /**
   * Polyfill for performance.now, required by rAF
   */


  if (!window.performance || !window.performance.now) {
    window.performance = {
      start: Date.now(),
      now: function now() {
        return Date.now() - this.start;
      }
    };
  }
})();

if (!Function.prototype.bind) {
  Function.prototype.bind = function (oThis) {
    if (typeof this !== 'function') {
      // closest thing possible to the ECMAScript 5
      // internal IsCallable function
      throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
    }

    var aArgs = Array.prototype.slice.call(arguments, 1),
        fToBind = this,
        fNOP = function fNOP() {},
        fBound = function fBound() {
      return fToBind.apply(this instanceof fNOP ? this : oThis, aArgs.concat(Array.prototype.slice.call(arguments)));
    };

    if (this.prototype) {
      // native functions don't have a prototype
      fNOP.prototype = this.prototype;
    }

    fBound.prototype = new fNOP();
    return fBound;
  };
} // Polyfill to get the name of a function in IE9


function functionName(fn) {
  if (typeof Function.prototype.name === 'undefined') {
    var funcNameRegex = /function\s([^(]{1,})\(/;
    var results = funcNameRegex.exec(fn.toString());
    return results && results.length > 1 ? results[1].trim() : "";
  } else if (typeof fn.prototype === 'undefined') {
    return fn.constructor.name;
  } else {
    return fn.prototype.constructor.name;
  }
}

function parseValue(str) {
  if ('true' === str) return true;else if ('false' === str) return false;else if (!isNaN(str * 1)) return parseFloat(str);
  return str;
} // Convert PascalCase to kebab-case
// Thank you: http://stackoverflow.com/a/8955580


function hyphenate(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}



/***/ }),

/***/ "./js/foundation.core.plugin.js":
/*!**************************************!*\
  !*** ./js/foundation.core.plugin.js ***!
  \**************************************/
/*! exports provided: Plugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Plugin", function() { return Plugin; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.core.utils */ "./js/foundation.core.utils.js");


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


 // Abstract class for providing lifecycle hooks. Expect plugins to define AT LEAST
// {function} _setup (replaces previous constructor),
// {function} _destroy (replaces previous destroy)

var Plugin =
/*#__PURE__*/
function () {
  function Plugin(element, options) {
    _classCallCheck(this, Plugin);

    this._setup(element, options);

    var pluginName = getPluginName(this);
    this.uuid = Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__["GetYoDigits"])(6, pluginName);

    if (!this.$element.attr("data-".concat(pluginName))) {
      this.$element.attr("data-".concat(pluginName), this.uuid);
    }

    if (!this.$element.data('zfPlugin')) {
      this.$element.data('zfPlugin', this);
    }
    /**
     * Fires when the plugin has initialized.
     * @event Plugin#init
     */


    this.$element.trigger("init.zf.".concat(pluginName));
  }

  _createClass(Plugin, [{
    key: "destroy",
    value: function destroy() {
      this._destroy();

      var pluginName = getPluginName(this);
      this.$element.removeAttr("data-".concat(pluginName)).removeData('zfPlugin')
      /**
       * Fires when the plugin has been destroyed.
       * @event Plugin#destroyed
       */
      .trigger("destroyed.zf.".concat(pluginName));

      for (var prop in this) {
        this[prop] = null; //clean up script to prep for garbage collection.
      }
    }
  }]);

  return Plugin;
}(); // Convert PascalCase to kebab-case
// Thank you: http://stackoverflow.com/a/8955580


function hyphenate(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

function getPluginName(obj) {
  if (typeof obj.constructor.name !== 'undefined') {
    return hyphenate(obj.constructor.name);
  } else {
    return hyphenate(obj.className);
  }
}



/***/ }),

/***/ "./js/foundation.core.utils.js":
/*!*************************************!*\
  !*** ./js/foundation.core.utils.js ***!
  \*************************************/
/*! exports provided: rtl, GetYoDigits, RegExpEscape, transitionend, onLoad, ignoreMousedisappear */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rtl", function() { return rtl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetYoDigits", function() { return GetYoDigits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegExpEscape", function() { return RegExpEscape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transitionend", function() { return transitionend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onLoad", function() { return onLoad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ignoreMousedisappear", function() { return ignoreMousedisappear; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);


 // Core Foundation Utilities, utilized in a number of places.

/**
 * Returns a boolean for RTL support
 */

function rtl() {
  return jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').attr('dir') === 'rtl';
}
/**
 * returns a random base-36 uid with namespacing
 * @function
 * @param {Number} length - number of random base-36 digits desired. Increase for more random strings.
 * @param {String} namespace - name of plugin to be incorporated in uid, optional.
 * @default {String} '' - if no plugin name is provided, nothing is appended to the uid.
 * @returns {String} - unique id
 */


function GetYoDigits(length, namespace) {
  length = length || 6;
  return Math.round(Math.pow(36, length + 1) - Math.random() * Math.pow(36, length)).toString(36).slice(1) + (namespace ? "-".concat(namespace) : '');
}
/**
 * Escape a string so it can be used as a regexp pattern
 * @function
 * @see https://stackoverflow.com/a/9310752/4317384
 *
 * @param {String} str - string to escape.
 * @returns {String} - escaped string
 */


function RegExpEscape(str) {
  return str.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}

function transitionend($elem) {
  var transitions = {
    'transition': 'transitionend',
    'WebkitTransition': 'webkitTransitionEnd',
    'MozTransition': 'transitionend',
    'OTransition': 'otransitionend'
  };
  var elem = document.createElement('div'),
      end;

  for (var t in transitions) {
    if (typeof elem.style[t] !== 'undefined') {
      end = transitions[t];
    }
  }

  if (end) {
    return end;
  } else {
    end = setTimeout(function () {
      $elem.triggerHandler('transitionend', [$elem]);
    }, 1);
    return 'transitionend';
  }
}
/**
 * Return an event type to listen for window load.
 *
 * If `$elem` is passed, an event will be triggered on `$elem`. If window is already loaded, the event will still be triggered.
 * If `handler` is passed, attach it to the event on `$elem`.
 * Calling `onLoad` without handler allows you to get the event type that will be triggered before attaching the handler by yourself.
 * @function
 *
 * @param {Object} [] $elem - jQuery element on which the event will be triggered if passed.
 * @param {Function} [] handler - function to attach to the event.
 * @returns {String} - event type that should or will be triggered.
 */


function onLoad($elem, handler) {
  var didLoad = document.readyState === 'complete';
  var eventType = (didLoad ? '_didLoad' : 'load') + '.zf.util.onLoad';

  var cb = function cb() {
    return $elem.triggerHandler(eventType);
  };

  if ($elem) {
    if (handler) $elem.one(eventType, handler);
    if (didLoad) setTimeout(cb);else jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).one('load', cb);
  }

  return eventType;
}
/**
 * Retuns an handler for the `mouseleave` that ignore disappeared mouses.
 *
 * If the mouse "disappeared" from the document (like when going on a browser UI element, See https://git.io/zf-11410),
 * the event is ignored.
 * - If the `ignoreLeaveWindow` is `true`, the event is ignored when the user actually left the window
 *   (like by switching to an other window with [Alt]+[Tab]).
 * - If the `ignoreReappear` is `true`, the event will be ignored when the mouse will reappear later on the document
 *   outside of the element it left.
 *
 * @function
 *
 * @param {Function} [] handler - handler for the filtered `mouseleave` event to watch.
 * @param {Object} [] options - object of options:
 * - {Boolean} [false] ignoreLeaveWindow - also ignore when the user switched windows.
 * - {Boolean} [false] ignoreReappear - also ignore when the mouse reappeared outside of the element it left.
 * @returns {Function} - filtered handler to use to listen on the `mouseleave` event.
 */


function ignoreMousedisappear(handler) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$ignoreLeaveWindo = _ref.ignoreLeaveWindow,
      ignoreLeaveWindow = _ref$ignoreLeaveWindo === void 0 ? false : _ref$ignoreLeaveWindo,
      _ref$ignoreReappear = _ref.ignoreReappear,
      ignoreReappear = _ref$ignoreReappear === void 0 ? false : _ref$ignoreReappear;

  return function leaveEventHandler(eLeave) {
    for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      rest[_key - 1] = arguments[_key];
    }

    var callback = handler.bind.apply(handler, [this, eLeave].concat(rest)); // The mouse left: call the given callback if the mouse entered elsewhere

    if (eLeave.relatedTarget !== null) {
      return callback();
    } // Otherwise, check if the mouse actually left the window.
    // In firefox if the user switched between windows, the window sill have the focus by the time
    // the event is triggered. We have to debounce the event to test this case.


    setTimeout(function leaveEventDebouncer() {
      if (!ignoreLeaveWindow && document.hasFocus && !document.hasFocus()) {
        return callback();
      } // Otherwise, wait for the mouse to reeapear outside of the element,


      if (!ignoreReappear) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).one('mouseenter', function reenterEventHandler(eReenter) {
          if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(eLeave.currentTarget).has(eReenter.target).length) {
            // Fill where the mouse finally entered.
            eLeave.relatedTarget = eReenter.target;
            callback();
          }
        });
      }
    }, 0);
  };
}



/***/ }),

/***/ "./js/foundation.drilldown.js":
/*!************************************!*\
  !*** ./js/foundation.drilldown.js ***!
  \************************************/
/*! exports provided: Drilldown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Drilldown", function() { return Drilldown; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.util.keyboard */ "./js/foundation.util.keyboard.js");
/* harmony import */ var _foundation_util_nest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.util.nest */ "./js/foundation.util.nest.js");
/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.core.utils */ "./js/foundation.core.utils.js");
/* harmony import */ var _foundation_util_box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation.util.box */ "./js/foundation.util.box.js");
/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./foundation.core.plugin */ "./js/foundation.core.plugin.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







/**
 * Drilldown module.
 * @module foundation.drilldown
 * @requires foundation.util.keyboard
 * @requires foundation.util.nest
 * @requires foundation.util.box
 */

var Drilldown =
/*#__PURE__*/
function (_Plugin) {
  _inherits(Drilldown, _Plugin);

  function Drilldown() {
    _classCallCheck(this, Drilldown);

    return _possibleConstructorReturn(this, _getPrototypeOf(Drilldown).apply(this, arguments));
  }

  _createClass(Drilldown, [{
    key: "_setup",

    /**
     * Creates a new instance of a drilldown menu.
     * @class
     * @name Drilldown
     * @param {jQuery} element - jQuery object to make into an accordion menu.
     * @param {Object} options - Overrides to the default plugin settings.
     */
    value: function _setup(element, options) {
      this.$element = element;
      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, Drilldown.defaults, this.$element.data(), options);
      this.className = 'Drilldown'; // ie9 back compat

      this._init();

      _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__["Keyboard"].register('Drilldown', {
        'ENTER': 'open',
        'SPACE': 'open',
        'ARROW_RIGHT': 'next',
        'ARROW_UP': 'up',
        'ARROW_DOWN': 'down',
        'ARROW_LEFT': 'previous',
        'ESCAPE': 'close',
        'TAB': 'down',
        'SHIFT_TAB': 'up'
      });
    }
    /**
     * Initializes the drilldown by creating jQuery collections of elements
     * @private
     */

  }, {
    key: "_init",
    value: function _init() {
      _foundation_util_nest__WEBPACK_IMPORTED_MODULE_2__["Nest"].Feather(this.$element, 'drilldown');

      if (this.options.autoApplyClass) {
        this.$element.addClass('drilldown');
      }

      this.$element.attr({
        'role': 'tree',
        'aria-multiselectable': false
      });
      this.$submenuAnchors = this.$element.find('li.is-drilldown-submenu-parent').children('a');
      this.$submenus = this.$submenuAnchors.parent('li').children('[data-submenu]').attr('role', 'group');
      this.$menuItems = this.$element.find('li').not('.js-drilldown-back').attr('role', 'treeitem').find('a'); // Set the main menu as current by default (unless a submenu is selected)
      // Used to set the wrapper height when the drilldown is closed/reopened from any (sub)menu

      this.$currentMenu = this.$element;
      this.$element.attr('data-mutate', this.$element.attr('data-drilldown') || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__["GetYoDigits"])(6, 'drilldown'));

      this._prepareMenu();

      this._registerEvents();

      this._keyboardEvents();
    }
    /**
     * prepares drilldown menu by setting attributes to links and elements
     * sets a min height to prevent content jumping
     * wraps the element if not already wrapped
     * @private
     * @function
     */

  }, {
    key: "_prepareMenu",
    value: function _prepareMenu() {
      var _this = this; // if(!this.options.holdOpen){
      //   this._menuLinkEvents();
      // }


      this.$submenuAnchors.each(function () {
        var $link = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
        var $sub = $link.parent();

        if (_this.options.parentLink) {
          $link.clone().prependTo($sub.children('[data-submenu]')).wrap('<li data-is-parent-link class="is-submenu-parent-item is-submenu-item is-drilldown-submenu-item" role="menuitem"></li>');
        }

        $link.data('savedHref', $link.attr('href')).removeAttr('href').attr('tabindex', 0);
        $link.children('[data-submenu]').attr({
          'aria-hidden': true,
          'tabindex': 0,
          'role': 'group'
        });

        _this._events($link);
      });
      this.$submenus.each(function () {
        var $menu = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
            $back = $menu.find('.js-drilldown-back');

        if (!$back.length) {
          switch (_this.options.backButtonPosition) {
            case "bottom":
              $menu.append(_this.options.backButton);
              break;

            case "top":
              $menu.prepend(_this.options.backButton);
              break;

            default:
              console.error("Unsupported backButtonPosition value '" + _this.options.backButtonPosition + "'");
          }
        }

        _this._back($menu);
      });
      this.$submenus.addClass('invisible');

      if (!this.options.autoHeight) {
        this.$submenus.addClass('drilldown-submenu-cover-previous');
      } // create a wrapper on element if it doesn't exist.


      if (!this.$element.parent().hasClass('is-drilldown')) {
        this.$wrapper = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.options.wrapper).addClass('is-drilldown');
        if (this.options.animateHeight) this.$wrapper.addClass('animate-height');
        this.$element.wrap(this.$wrapper);
      } // set wrapper


      this.$wrapper = this.$element.parent();
      this.$wrapper.css(this._getMaxDims());
    }
  }, {
    key: "_resize",
    value: function _resize() {
      this.$wrapper.css({
        'max-width': 'none',
        'min-height': 'none'
      }); // _getMaxDims has side effects (boo) but calling it should update all other necessary heights & widths

      this.$wrapper.css(this._getMaxDims());
    }
    /**
     * Adds event handlers to elements in the menu.
     * @function
     * @private
     * @param {jQuery} $elem - the current menu item to add handlers to.
     */

  }, {
    key: "_events",
    value: function _events($elem) {
      var _this = this;

      $elem.off('click.zf.drilldown').on('click.zf.drilldown', function (e) {
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).parentsUntil('ul', 'li').hasClass('is-drilldown-submenu-parent')) {
          e.stopImmediatePropagation();
          e.preventDefault();
        } // if(e.target !== e.currentTarget.firstElementChild){
        //   return false;
        // }


        _this._show($elem.parent('li'));

        if (_this.options.closeOnClick) {
          var $body = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body');
          $body.off('.zf.drilldown').on('click.zf.drilldown', function (e) {
            if (e.target === _this.$element[0] || jquery__WEBPACK_IMPORTED_MODULE_0___default.a.contains(_this.$element[0], e.target)) {
              return;
            }

            e.preventDefault();

            _this._hideAll();

            $body.off('.zf.drilldown');
          });
        }
      });
    }
    /**
     * Adds event handlers to the menu element.
     * @function
     * @private
     */

  }, {
    key: "_registerEvents",
    value: function _registerEvents() {
      if (this.options.scrollTop) {
        this._bindHandler = this._scrollTop.bind(this);
        this.$element.on('open.zf.drilldown hide.zf.drilldown closed.zf.drilldown', this._bindHandler);
      }

      this.$element.on('mutateme.zf.trigger', this._resize.bind(this));
    }
    /**
     * Scroll to Top of Element or data-scroll-top-element
     * @function
     * @fires Drilldown#scrollme
     */

  }, {
    key: "_scrollTop",
    value: function _scrollTop() {
      var _this = this;

      var $scrollTopElement = _this.options.scrollTopElement != '' ? jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this.options.scrollTopElement) : _this.$element,
          scrollPos = parseInt($scrollTopElement.offset().top + _this.options.scrollTopOffset, 10);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('html, body').stop(true).animate({
        scrollTop: scrollPos
      }, _this.options.animationDuration, _this.options.animationEasing, function () {
        /**
          * Fires after the menu has scrolled
          * @event Drilldown#scrollme
          */
        if (this === jquery__WEBPACK_IMPORTED_MODULE_0___default()('html')[0]) _this.$element.trigger('scrollme.zf.drilldown');
      });
    }
    /**
     * Adds keydown event listener to `li`'s in the menu.
     * @private
     */

  }, {
    key: "_keyboardEvents",
    value: function _keyboardEvents() {
      var _this = this;

      this.$menuItems.add(this.$element.find('.js-drilldown-back > a, .is-submenu-parent-item > a')).on('keydown.zf.drilldown', function (e) {
        var $element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
            $elements = $element.parent('li').parent('ul').children('li').children('a'),
            $prevElement,
            $nextElement;
        $elements.each(function (i) {
          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).is($element)) {
            $prevElement = $elements.eq(Math.max(0, i - 1));
            $nextElement = $elements.eq(Math.min(i + 1, $elements.length - 1));
            return;
          }
        });
        _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__["Keyboard"].handleKey(e, 'Drilldown', {
          next: function next() {
            if ($element.is(_this.$submenuAnchors)) {
              _this._show($element.parent('li'));

              $element.parent('li').one(Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__["transitionend"])($element), function () {
                $element.parent('li').find('ul li a').not('.js-drilldown-back a').first().focus();
              });
              return true;
            }
          },
          previous: function previous() {
            _this._hide($element.parent('li').parent('ul'));

            $element.parent('li').parent('ul').one(Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__["transitionend"])($element), function () {
              setTimeout(function () {
                $element.parent('li').parent('ul').parent('li').children('a').first().focus();
              }, 1);
            });
            return true;
          },
          up: function up() {
            $prevElement.focus(); // Don't tap focus on first element in root ul

            return !$element.is(_this.$element.find('> li:first-child > a'));
          },
          down: function down() {
            $nextElement.focus(); // Don't tap focus on last element in root ul

            return !$element.is(_this.$element.find('> li:last-child > a'));
          },
          close: function close() {
            // Don't close on element in root ul
            if (!$element.is(_this.$element.find('> li > a'))) {
              _this._hide($element.parent().parent());

              $element.parent().parent().siblings('a').focus();
            }
          },
          open: function open() {
            if (_this.options.parentLink && $element.attr('href')) {
              // Link with href
              return false;
            } else if (!$element.is(_this.$menuItems)) {
              // not menu item means back button
              _this._hide($element.parent('li').parent('ul'));

              $element.parent('li').parent('ul').one(Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__["transitionend"])($element), function () {
                setTimeout(function () {
                  $element.parent('li').parent('ul').parent('li').children('a').first().focus();
                }, 1);
              });
              return true;
            } else if ($element.is(_this.$submenuAnchors)) {
              // Sub menu item
              _this._show($element.parent('li'));

              $element.parent('li').one(Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__["transitionend"])($element), function () {
                $element.parent('li').find('ul li a').not('.js-drilldown-back a').first().focus();
              });
              return true;
            }
          },
          handled: function handled(preventDefault) {
            if (preventDefault) {
              e.preventDefault();
            }

            e.stopImmediatePropagation();
          }
        });
      }); // end keyboardAccess
    }
    /**
     * Closes all open elements, and returns to root menu.
     * @function
     * @fires Drilldown#closed
     */

  }, {
    key: "_hideAll",
    value: function _hideAll() {
      var $elem = this.$element.find('.is-drilldown-submenu.is-active').addClass('is-closing');
      if (this.options.autoHeight) this.$wrapper.css({
        height: $elem.parent().closest('ul').data('calcHeight')
      });
      $elem.one(Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__["transitionend"])($elem), function (e) {
        $elem.removeClass('is-active is-closing');
      });
      /**
       * Fires when the menu is fully closed.
       * @event Drilldown#closed
       */

      this.$element.trigger('closed.zf.drilldown');
    }
    /**
     * Adds event listener for each `back` button, and closes open menus.
     * @function
     * @fires Drilldown#back
     * @param {jQuery} $elem - the current sub-menu to add `back` event.
     */

  }, {
    key: "_back",
    value: function _back($elem) {
      var _this = this;

      $elem.off('click.zf.drilldown');
      $elem.children('.js-drilldown-back').on('click.zf.drilldown', function (e) {
        e.stopImmediatePropagation(); // console.log('mouseup on back');

        _this._hide($elem); // If there is a parent submenu, call show


        var parentSubMenu = $elem.parent('li').parent('ul').parent('li');

        if (parentSubMenu.length) {
          _this._show(parentSubMenu);
        }
      });
    }
    /**
     * Adds event listener to menu items w/o submenus to close open menus on click.
     * @function
     * @private
     */

  }, {
    key: "_menuLinkEvents",
    value: function _menuLinkEvents() {
      var _this = this;

      this.$menuItems.not('.is-drilldown-submenu-parent').off('click.zf.drilldown').on('click.zf.drilldown', function (e) {
        // e.stopImmediatePropagation();
        setTimeout(function () {
          _this._hideAll();
        }, 0);
      });
    }
    /**
     * Sets the CSS classes for submenu to show it.
     * @function
     * @private
     * @param {jQuery} $elem - the target submenu (`ul` tag)
     * @param {boolean} trigger - trigger drilldown event
     */

  }, {
    key: "_setShowSubMenuClasses",
    value: function _setShowSubMenuClasses($elem, trigger) {
      $elem.addClass('is-active').removeClass('invisible').attr('aria-hidden', false);
      $elem.parent('li').attr('aria-expanded', true);

      if (trigger === true) {
        this.$element.trigger('open.zf.drilldown', [$elem]);
      }
    }
    /**
     * Sets the CSS classes for submenu to hide it.
     * @function
     * @private
     * @param {jQuery} $elem - the target submenu (`ul` tag)
     * @param {boolean} trigger - trigger drilldown event
     */

  }, {
    key: "_setHideSubMenuClasses",
    value: function _setHideSubMenuClasses($elem, trigger) {
      $elem.removeClass('is-active').addClass('invisible').attr('aria-hidden', true);
      $elem.parent('li').attr('aria-expanded', false);

      if (trigger === true) {
        $elem.trigger('hide.zf.drilldown', [$elem]);
      }
    }
    /**
     * Opens a specific drilldown (sub)menu no matter which (sub)menu in it is currently visible.
     * Compared to _show() this lets you jump into any submenu without clicking through every submenu on the way to it.
     * @function
     * @fires Drilldown#open
     * @param {jQuery} $elem - the target (sub)menu (`ul` tag)
     * @param {boolean} autoFocus - if true the first link in the target (sub)menu gets auto focused
     */

  }, {
    key: "_showMenu",
    value: function _showMenu($elem, autoFocus) {
      var _this = this; // Reset drilldown


      var $expandedSubmenus = this.$element.find('li[aria-expanded="true"] > ul[data-submenu]');
      $expandedSubmenus.each(function (index) {
        _this._setHideSubMenuClasses(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));
      }); // Save the menu as the currently displayed one.

      this.$currentMenu = $elem; // If target menu is root, focus first link & exit

      if ($elem.is('[data-drilldown]')) {
        if (autoFocus === true) $elem.find('li[role="treeitem"] > a').first().focus();
        if (this.options.autoHeight) this.$wrapper.css('height', $elem.data('calcHeight'));
        return;
      } // Find all submenus on way to root incl. the element itself


      var $submenus = $elem.children().first().parentsUntil('[data-drilldown]', '[data-submenu]'); // Open target menu and all submenus on its way to root

      $submenus.each(function (index) {
        // Update height of first child (target menu) if autoHeight option true
        if (index === 0 && _this.options.autoHeight) {
          _this.$wrapper.css('height', jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('calcHeight'));
        }

        var isLastChild = index == $submenus.length - 1; // Add transitionsend listener to last child (root due to reverse order) to open target menu's first link
        // Last child makes sure the event gets always triggered even if going through several menus

        if (isLastChild === true) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).one(Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__["transitionend"])(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)), function () {
            if (autoFocus === true) {
              $elem.find('li[role="treeitem"] > a').first().focus();
            }
          });
        }

        _this._setShowSubMenuClasses(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this), isLastChild);
      });
    }
    /**
     * Opens a submenu.
     * @function
     * @fires Drilldown#open
     * @param {jQuery} $elem - the current element with a submenu to open, i.e. the `li` tag.
     */

  }, {
    key: "_show",
    value: function _show($elem) {
      var $submenu = $elem.children('[data-submenu]');
      $elem.attr('aria-expanded', true);
      this.$currentMenu = $submenu;
      $submenu.addClass('is-active').removeClass('invisible').attr('aria-hidden', false);

      if (this.options.autoHeight) {
        this.$wrapper.css({
          height: $submenu.data('calcHeight')
        });
      }
      /**
       * Fires when the submenu has opened.
       * @event Drilldown#open
       */


      this.$element.trigger('open.zf.drilldown', [$elem]);
    }
    /**
     * Hides a submenu
     * @function
     * @fires Drilldown#hide
     * @param {jQuery} $elem - the current sub-menu to hide, i.e. the `ul` tag.
     */

  }, {
    key: "_hide",
    value: function _hide($elem) {
      if (this.options.autoHeight) this.$wrapper.css({
        height: $elem.parent().closest('ul').data('calcHeight')
      });

      var _this = this;

      $elem.parent('li').attr('aria-expanded', false);
      $elem.attr('aria-hidden', true);
      $elem.addClass('is-closing').one(Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__["transitionend"])($elem), function () {
        $elem.removeClass('is-active is-closing');
        $elem.blur().addClass('invisible');
      });
      /**
       * Fires when the submenu has closed.
       * @event Drilldown#hide
       */

      $elem.trigger('hide.zf.drilldown', [$elem]);
    }
    /**
     * Iterates through the nested menus to calculate the min-height, and max-width for the menu.
     * Prevents content jumping.
     * @function
     * @private
     */

  }, {
    key: "_getMaxDims",
    value: function _getMaxDims() {
      var maxHeight = 0,
          result = {},
          _this = this; // Recalculate menu heights and total max height


      this.$submenus.add(this.$element).each(function () {
        var numOfElems = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).children('li').length;
        var height = _foundation_util_box__WEBPACK_IMPORTED_MODULE_4__["Box"].GetDimensions(this).height;
        maxHeight = height > maxHeight ? height : maxHeight;

        if (_this.options.autoHeight) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('calcHeight', height);
        }
      });
      if (this.options.autoHeight) result['height'] = this.$currentMenu.data('calcHeight');else result['min-height'] = "".concat(maxHeight, "px");
      result['max-width'] = "".concat(this.$element[0].getBoundingClientRect().width, "px");
      return result;
    }
    /**
     * Destroys the Drilldown Menu
     * @function
     */

  }, {
    key: "_destroy",
    value: function _destroy() {
      if (this.options.scrollTop) this.$element.off('.zf.drilldown', this._bindHandler);

      this._hideAll();

      this.$element.off('mutateme.zf.trigger');
      _foundation_util_nest__WEBPACK_IMPORTED_MODULE_2__["Nest"].Burn(this.$element, 'drilldown');
      this.$element.unwrap().find('.js-drilldown-back, .is-submenu-parent-item').remove().end().find('.is-active, .is-closing, .is-drilldown-submenu').removeClass('is-active is-closing is-drilldown-submenu').end().find('[data-submenu]').removeAttr('aria-hidden tabindex role');
      this.$submenuAnchors.each(function () {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).off('.zf.drilldown');
      });
      this.$element.find('[data-is-parent-link]').detach();
      this.$submenus.removeClass('drilldown-submenu-cover-previous invisible');
      this.$element.find('a').each(function () {
        var $link = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
        $link.removeAttr('tabindex');

        if ($link.data('savedHref')) {
          $link.attr('href', $link.data('savedHref')).removeData('savedHref');
        } else {
          return;
        }
      });
    }
  }]);

  return Drilldown;
}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_5__["Plugin"]);

Drilldown.defaults = {
  /**
   * Drilldowns depend on styles in order to function properly; in the default build of Foundation these are
   * on the `drilldown` class. This option auto-applies this class to the drilldown upon initialization.
   * @option
   * @type {boolian}
   * @default true
   */
  autoApplyClass: true,

  /**
   * Markup used for JS generated back button. Prepended  or appended (see backButtonPosition) to submenu lists and deleted on `destroy` method, 'js-drilldown-back' class required. Remove the backslash (`\`) if copy and pasting.
   * @option
   * @type {string}
   * @default '<li class="js-drilldown-back"><a tabindex="0">Back</a></li>'
   */
  backButton: '<li class="js-drilldown-back"><a tabindex="0">Back</a></li>',

  /**
   * Position the back button either at the top or bottom of drilldown submenus. Can be `'left'` or `'bottom'`.
   * @option
   * @type {string}
   * @default top
   */
  backButtonPosition: 'top',

  /**
   * Markup used to wrap drilldown menu. Use a class name for independent styling; the JS applied class: `is-drilldown` is required. Remove the backslash (`\`) if copy and pasting.
   * @option
   * @type {string}
   * @default '<div></div>'
   */
  wrapper: '<div></div>',

  /**
   * Adds the parent link to the submenu.
   * @option
   * @type {boolean}
   * @default false
   */
  parentLink: false,

  /**
   * Allow the menu to return to root list on body click.
   * @option
   * @type {boolean}
   * @default false
   */
  closeOnClick: false,

  /**
   * Allow the menu to auto adjust height.
   * @option
   * @type {boolean}
   * @default false
   */
  autoHeight: false,

  /**
   * Animate the auto adjust height.
   * @option
   * @type {boolean}
   * @default false
   */
  animateHeight: false,

  /**
   * Scroll to the top of the menu after opening a submenu or navigating back using the menu back button
   * @option
   * @type {boolean}
   * @default false
   */
  scrollTop: false,

  /**
   * String jquery selector (for example 'body') of element to take offset().top from, if empty string the drilldown menu offset().top is taken
   * @option
   * @type {string}
   * @default ''
   */
  scrollTopElement: '',

  /**
   * ScrollTop offset
   * @option
   * @type {number}
   * @default 0
   */
  scrollTopOffset: 0,

  /**
   * Scroll animation duration
   * @option
   * @type {number}
   * @default 500
   */
  animationDuration: 500,

  /**
   * Scroll animation easing. Can be `'swing'` or `'linear'`.
   * @option
   * @type {string}
   * @see {@link https://api.jquery.com/animate|JQuery animate}
   * @default 'swing'
   */
  animationEasing: 'swing' // holdOpen: false

};


/***/ }),

/***/ "./js/foundation.dropdown.js":
/*!***********************************!*\
  !*** ./js/foundation.dropdown.js ***!
  \***********************************/
/*! exports provided: Dropdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dropdown", function() { return Dropdown; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.util.keyboard */ "./js/foundation.util.keyboard.js");
/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.core.utils */ "./js/foundation.core.utils.js");
/* harmony import */ var _foundation_positionable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.positionable */ "./js/foundation.positionable.js");
/* harmony import */ var _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation.util.triggers */ "./js/foundation.util.triggers.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






/**
 * Dropdown module.
 * @module foundation.dropdown
 * @requires foundation.util.keyboard
 * @requires foundation.util.box
 * @requires foundation.util.triggers
 */

var Dropdown =
/*#__PURE__*/
function (_Positionable) {
  _inherits(Dropdown, _Positionable);

  function Dropdown() {
    _classCallCheck(this, Dropdown);

    return _possibleConstructorReturn(this, _getPrototypeOf(Dropdown).apply(this, arguments));
  }

  _createClass(Dropdown, [{
    key: "_setup",

    /**
     * Creates a new instance of a dropdown.
     * @class
     * @name Dropdown
     * @param {jQuery} element - jQuery object to make into a dropdown.
     *        Object should be of the dropdown panel, rather than its anchor.
     * @param {Object} options - Overrides to the default plugin settings.
     */
    value: function _setup(element, options) {
      this.$element = element;
      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, Dropdown.defaults, this.$element.data(), options);
      this.className = 'Dropdown'; // ie9 back compat
      // Triggers init is idempotent, just need to make sure it is initialized

      _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_4__["Triggers"].init(jquery__WEBPACK_IMPORTED_MODULE_0___default.a);

      this._init();

      _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__["Keyboard"].register('Dropdown', {
        'ENTER': 'toggle',
        'SPACE': 'toggle',
        'ESCAPE': 'close'
      });
    }
    /**
     * Initializes the plugin by setting/checking options and attributes, adding helper variables, and saving the anchor.
     * @function
     * @private
     */

  }, {
    key: "_init",
    value: function _init() {
      var $id = this.$element.attr('id');
      this.$anchors = jquery__WEBPACK_IMPORTED_MODULE_0___default()("[data-toggle=\"".concat($id, "\"]")).length ? jquery__WEBPACK_IMPORTED_MODULE_0___default()("[data-toggle=\"".concat($id, "\"]")) : jquery__WEBPACK_IMPORTED_MODULE_0___default()("[data-open=\"".concat($id, "\"]"));
      this.$anchors.attr({
        'aria-controls': $id,
        'data-is-focus': false,
        'data-yeti-box': $id,
        'aria-haspopup': true,
        'aria-expanded': false
      });

      this._setCurrentAnchor(this.$anchors.first());

      if (this.options.parentClass) {
        this.$parent = this.$element.parents('.' + this.options.parentClass);
      } else {
        this.$parent = null;
      } // Set [aria-labelledby] on the Dropdown if it is not set


      if (typeof this.$element.attr('aria-labelledby') === 'undefined') {
        // Get the anchor ID or create one
        if (typeof this.$currentAnchor.attr('id') === 'undefined') {
          this.$currentAnchor.attr('id', Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__["GetYoDigits"])(6, 'dd-anchor'));
        }

        ;
        this.$element.attr('aria-labelledby', this.$currentAnchor.attr('id'));
      }

      this.$element.attr({
        'aria-hidden': 'true',
        'data-yeti-box': $id,
        'data-resize': $id
      });

      _get(_getPrototypeOf(Dropdown.prototype), "_init", this).call(this);

      this._events();
    }
  }, {
    key: "_getDefaultPosition",
    value: function _getDefaultPosition() {
      // handle legacy classnames
      var position = this.$element[0].className.match(/(top|left|right|bottom)/g);

      if (position) {
        return position[0];
      } else {
        return 'bottom';
      }
    }
  }, {
    key: "_getDefaultAlignment",
    value: function _getDefaultAlignment() {
      // handle legacy float approach
      var horizontalPosition = /float-(\S+)/.exec(this.$currentAnchor.attr('class'));

      if (horizontalPosition) {
        return horizontalPosition[1];
      }

      return _get(_getPrototypeOf(Dropdown.prototype), "_getDefaultAlignment", this).call(this);
    }
    /**
     * Sets the position and orientation of the dropdown pane, checks for collisions if allow-overlap is not true.
     * Recursively calls itself if a collision is detected, with a new position class.
     * @function
     * @private
     */

  }, {
    key: "_setPosition",
    value: function _setPosition() {
      this.$element.removeClass("has-position-".concat(this.position, " has-alignment-").concat(this.alignment));

      _get(_getPrototypeOf(Dropdown.prototype), "_setPosition", this).call(this, this.$currentAnchor, this.$element, this.$parent);

      this.$element.addClass("has-position-".concat(this.position, " has-alignment-").concat(this.alignment));
    }
    /**
     * Make it a current anchor.
     * Current anchor as the reference for the position of Dropdown panes.
     * @param {HTML} el - DOM element of the anchor.
     * @function
     * @private
     */

  }, {
    key: "_setCurrentAnchor",
    value: function _setCurrentAnchor(el) {
      this.$currentAnchor = jquery__WEBPACK_IMPORTED_MODULE_0___default()(el);
    }
    /**
     * Adds event listeners to the element utilizing the triggers utility library.
     * @function
     * @private
     */

  }, {
    key: "_events",
    value: function _events() {
      var _this = this;

      this.$element.on({
        'open.zf.trigger': this.open.bind(this),
        'close.zf.trigger': this.close.bind(this),
        'toggle.zf.trigger': this.toggle.bind(this),
        'resizeme.zf.trigger': this._setPosition.bind(this)
      });
      this.$anchors.off('click.zf.trigger').on('click.zf.trigger', function () {
        _this._setCurrentAnchor(this);
      });

      if (this.options.hover) {
        this.$anchors.off('mouseenter.zf.dropdown mouseleave.zf.dropdown').on('mouseenter.zf.dropdown', function () {
          _this._setCurrentAnchor(this);

          var bodyData = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').data();

          if (typeof bodyData.whatinput === 'undefined' || bodyData.whatinput === 'mouse') {
            clearTimeout(_this.timeout);
            _this.timeout = setTimeout(function () {
              _this.open();

              _this.$anchors.data('hover', true);
            }, _this.options.hoverDelay);
          }
        }).on('mouseleave.zf.dropdown', Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__["ignoreMousedisappear"])(function () {
          clearTimeout(_this.timeout);
          _this.timeout = setTimeout(function () {
            _this.close();

            _this.$anchors.data('hover', false);
          }, _this.options.hoverDelay);
        }));

        if (this.options.hoverPane) {
          this.$element.off('mouseenter.zf.dropdown mouseleave.zf.dropdown').on('mouseenter.zf.dropdown', function () {
            clearTimeout(_this.timeout);
          }).on('mouseleave.zf.dropdown', Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__["ignoreMousedisappear"])(function () {
            clearTimeout(_this.timeout);
            _this.timeout = setTimeout(function () {
              _this.close();

              _this.$anchors.data('hover', false);
            }, _this.options.hoverDelay);
          }));
        }
      }

      this.$anchors.add(this.$element).on('keydown.zf.dropdown', function (e) {
        var $target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
            visibleFocusableElements = _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__["Keyboard"].findFocusable(_this.$element);
        _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__["Keyboard"].handleKey(e, 'Dropdown', {
          open: function open() {
            if ($target.is(_this.$anchors) && !$target.is('input, textarea')) {
              _this.open();

              _this.$element.attr('tabindex', -1).focus();

              e.preventDefault();
            }
          },
          close: function close() {
            _this.close();

            _this.$anchors.focus();
          }
        });
      });
    }
    /**
     * Adds an event handler to the body to close any dropdowns on a click.
     * @function
     * @private
     */

  }, {
    key: "_addBodyHandler",
    value: function _addBodyHandler() {
      var $body = jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.body).not(this.$element),
          _this = this;

      $body.off('click.zf.dropdown').on('click.zf.dropdown', function (e) {
        if (_this.$anchors.is(e.target) || _this.$anchors.find(e.target).length) {
          return;
        }

        if (_this.$element.is(e.target) || _this.$element.find(e.target).length) {
          return;
        }

        _this.close();

        $body.off('click.zf.dropdown');
      });
    }
    /**
     * Opens the dropdown pane, and fires a bubbling event to close other dropdowns.
     * @function
     * @fires Dropdown#closeme
     * @fires Dropdown#show
     */

  }, {
    key: "open",
    value: function open() {
      // var _this = this;

      /**
       * Fires to close other open dropdowns, typically when dropdown is opening
       * @event Dropdown#closeme
       */
      this.$element.trigger('closeme.zf.dropdown', this.$element.attr('id'));
      this.$anchors.addClass('hover').attr({
        'aria-expanded': true
      }); // this.$element/*.show()*/;

      this.$element.addClass('is-opening');

      this._setPosition();

      this.$element.removeClass('is-opening').addClass('is-open').attr({
        'aria-hidden': false
      });

      if (this.options.autoFocus) {
        var $focusable = _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__["Keyboard"].findFocusable(this.$element);

        if ($focusable.length) {
          $focusable.eq(0).focus();
        }
      }

      if (this.options.closeOnClick) {
        this._addBodyHandler();
      }

      if (this.options.trapFocus) {
        _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__["Keyboard"].trapFocus(this.$element);
      }
      /**
       * Fires once the dropdown is visible.
       * @event Dropdown#show
       */


      this.$element.trigger('show.zf.dropdown', [this.$element]);
    }
    /**
     * Closes the open dropdown pane.
     * @function
     * @fires Dropdown#hide
     */

  }, {
    key: "close",
    value: function close() {
      if (!this.$element.hasClass('is-open')) {
        return false;
      }

      this.$element.removeClass('is-open').attr({
        'aria-hidden': true
      });
      this.$anchors.removeClass('hover').attr('aria-expanded', false);
      /**
       * Fires once the dropdown is no longer visible.
       * @event Dropdown#hide
       */

      this.$element.trigger('hide.zf.dropdown', [this.$element]);

      if (this.options.trapFocus) {
        _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__["Keyboard"].releaseFocus(this.$element);
      }
    }
    /**
     * Toggles the dropdown pane's visibility.
     * @function
     */

  }, {
    key: "toggle",
    value: function toggle() {
      if (this.$element.hasClass('is-open')) {
        if (this.$anchors.data('hover')) return;
        this.close();
      } else {
        this.open();
      }
    }
    /**
     * Destroys the dropdown.
     * @function
     */

  }, {
    key: "_destroy",
    value: function _destroy() {
      this.$element.off('.zf.trigger').hide();
      this.$anchors.off('.zf.dropdown');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.body).off('click.zf.dropdown');
    }
  }]);

  return Dropdown;
}(_foundation_positionable__WEBPACK_IMPORTED_MODULE_3__["Positionable"]);

Dropdown.defaults = {
  /**
   * Class that designates bounding container of Dropdown (default: window)
   * @option
   * @type {?string}
   * @default null
   */
  parentClass: null,

  /**
   * Amount of time to delay opening a submenu on hover event.
   * @option
   * @type {number}
   * @default 250
   */
  hoverDelay: 250,

  /**
   * Allow submenus to open on hover events
   * @option
   * @type {boolean}
   * @default false
   */
  hover: false,

  /**
   * Don't close dropdown when hovering over dropdown pane
   * @option
   * @type {boolean}
   * @default false
   */
  hoverPane: false,

  /**
   * Number of pixels between the dropdown pane and the triggering element on open.
   * @option
   * @type {number}
   * @default 0
   */
  vOffset: 0,

  /**
   * Number of pixels between the dropdown pane and the triggering element on open.
   * @option
   * @type {number}
   * @default 0
   */
  hOffset: 0,

  /**
   * Position of dropdown. Can be left, right, bottom, top, or auto.
   * @option
   * @type {string}
   * @default 'auto'
   */
  position: 'auto',

  /**
   * Alignment of dropdown relative to anchor. Can be left, right, bottom, top, center, or auto.
   * @option
   * @type {string}
   * @default 'auto'
   */
  alignment: 'auto',

  /**
   * Allow overlap of container/window. If false, dropdown will first try to position as defined by data-position and data-alignment, but reposition if it would cause an overflow.
   * @option
   * @type {boolean}
   * @default false
   */
  allowOverlap: false,

  /**
   * Allow overlap of only the bottom of the container. This is the most common
   * behavior for dropdowns, allowing the dropdown to extend the bottom of the
   * screen but not otherwise influence or break out of the container.
   * @option
   * @type {boolean}
   * @default true
   */
  allowBottomOverlap: true,

  /**
   * Allow the plugin to trap focus to the dropdown pane if opened with keyboard commands.
   * @option
   * @type {boolean}
   * @default false
   */
  trapFocus: false,

  /**
   * Allow the plugin to set focus to the first focusable element within the pane, regardless of method of opening.
   * @option
   * @type {boolean}
   * @default false
   */
  autoFocus: false,

  /**
   * Allows a click on the body to close the dropdown.
   * @option
   * @type {boolean}
   * @default false
   */
  closeOnClick: false
};


/***/ }),

/***/ "./js/foundation.dropdownMenu.js":
/*!***************************************!*\
  !*** ./js/foundation.dropdownMenu.js ***!
  \***************************************/
/*! exports provided: DropdownMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownMenu", function() { return DropdownMenu; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.core.plugin */ "./js/foundation.core.plugin.js");
/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.core.utils */ "./js/foundation.core.utils.js");
/* harmony import */ var _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.util.keyboard */ "./js/foundation.util.keyboard.js");
/* harmony import */ var _foundation_util_nest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation.util.nest */ "./js/foundation.util.nest.js");
/* harmony import */ var _foundation_util_box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./foundation.util.box */ "./js/foundation.util.box.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







/**
 * DropdownMenu module.
 * @module foundation.dropdown-menu
 * @requires foundation.util.keyboard
 * @requires foundation.util.box
 * @requires foundation.util.nest
 */

var DropdownMenu =
/*#__PURE__*/
function (_Plugin) {
  _inherits(DropdownMenu, _Plugin);

  function DropdownMenu() {
    _classCallCheck(this, DropdownMenu);

    return _possibleConstructorReturn(this, _getPrototypeOf(DropdownMenu).apply(this, arguments));
  }

  _createClass(DropdownMenu, [{
    key: "_setup",

    /**
     * Creates a new instance of DropdownMenu.
     * @class
     * @name DropdownMenu
     * @fires DropdownMenu#init
     * @param {jQuery} element - jQuery object to make into a dropdown menu.
     * @param {Object} options - Overrides to the default plugin settings.
     */
    value: function _setup(element, options) {
      this.$element = element;
      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, DropdownMenu.defaults, this.$element.data(), options);
      this.className = 'DropdownMenu'; // ie9 back compat

      this._init();

      _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_3__["Keyboard"].register('DropdownMenu', {
        'ENTER': 'open',
        'SPACE': 'open',
        'ARROW_RIGHT': 'next',
        'ARROW_UP': 'up',
        'ARROW_DOWN': 'down',
        'ARROW_LEFT': 'previous',
        'ESCAPE': 'close'
      });
    }
    /**
     * Initializes the plugin, and calls _prepareMenu
     * @private
     * @function
     */

  }, {
    key: "_init",
    value: function _init() {
      _foundation_util_nest__WEBPACK_IMPORTED_MODULE_4__["Nest"].Feather(this.$element, 'dropdown');
      var subs = this.$element.find('li.is-dropdown-submenu-parent');
      this.$element.children('.is-dropdown-submenu-parent').children('.is-dropdown-submenu').addClass('first-sub');
      this.$menuItems = this.$element.find('[role="menuitem"]');
      this.$tabs = this.$element.children('[role="menuitem"]');
      this.$tabs.find('ul.is-dropdown-submenu').addClass(this.options.verticalClass);

      if (this.options.alignment === 'auto') {
        if (this.$element.hasClass(this.options.rightClass) || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__["rtl"])() || this.$element.parents('.top-bar-right').is('*')) {
          this.options.alignment = 'right';
          subs.addClass('opens-left');
        } else {
          this.options.alignment = 'left';
          subs.addClass('opens-right');
        }
      } else {
        if (this.options.alignment === 'right') {
          subs.addClass('opens-left');
        } else {
          subs.addClass('opens-right');
        }
      }

      this.changed = false;

      this._events();
    }
  }, {
    key: "_isVertical",
    value: function _isVertical() {
      return this.$tabs.css('display') === 'block' || this.$element.css('flex-direction') === 'column';
    }
  }, {
    key: "_isRtl",
    value: function _isRtl() {
      return this.$element.hasClass('align-right') || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__["rtl"])() && !this.$element.hasClass('align-left');
    }
    /**
     * Adds event listeners to elements within the menu
     * @private
     * @function
     */

  }, {
    key: "_events",
    value: function _events() {
      var _this = this,
          hasTouch = 'ontouchstart' in window || typeof window.ontouchstart !== 'undefined',
          parClass = 'is-dropdown-submenu-parent'; // used for onClick and in the keyboard handlers


      var handleClickFn = function handleClickFn(e) {
        var $elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).parentsUntil('ul', ".".concat(parClass)),
            hasSub = $elem.hasClass(parClass),
            hasClicked = $elem.attr('data-is-click') === 'true',
            $sub = $elem.children('.is-dropdown-submenu');

        if (hasSub) {
          if (hasClicked) {
            if (!_this.options.closeOnClick || !_this.options.clickOpen && !hasTouch || _this.options.forceFollow && hasTouch) {
              return;
            } else {
              e.stopImmediatePropagation();
              e.preventDefault();

              _this._hide($elem);
            }
          } else {
            e.preventDefault();
            e.stopImmediatePropagation();

            _this._show($sub);

            $elem.add($elem.parentsUntil(_this.$element, ".".concat(parClass))).attr('data-is-click', true);
          }
        }
      };

      if (this.options.clickOpen || hasTouch) {
        this.$menuItems.on('click.zf.dropdownmenu touchstart.zf.dropdownmenu', handleClickFn);
      } // Handle Leaf element Clicks


      if (_this.options.closeOnClickInside) {
        this.$menuItems.on('click.zf.dropdownmenu', function (e) {
          var $elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
              hasSub = $elem.hasClass(parClass);

          if (!hasSub) {
            _this._hide();
          }
        });
      }

      if (!this.options.disableHover) {
        this.$menuItems.on('mouseenter.zf.dropdownmenu', function (e) {
          var $elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
              hasSub = $elem.hasClass(parClass);

          if (hasSub) {
            clearTimeout($elem.data('_delay'));
            $elem.data('_delay', setTimeout(function () {
              _this._show($elem.children('.is-dropdown-submenu'));
            }, _this.options.hoverDelay));
          }
        }).on('mouseleave.zf.dropdownMenu', Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__["ignoreMousedisappear"])(function (e) {
          var $elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
              hasSub = $elem.hasClass(parClass);

          if (hasSub && _this.options.autoclose) {
            if ($elem.attr('data-is-click') === 'true' && _this.options.clickOpen) {
              return false;
            }

            clearTimeout($elem.data('_delay'));
            $elem.data('_delay', setTimeout(function () {
              _this._hide($elem);
            }, _this.options.closingTime));
          }
        }));
      }

      this.$menuItems.on('keydown.zf.dropdownmenu', function (e) {
        var $element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).parentsUntil('ul', '[role="menuitem"]'),
            isTab = _this.$tabs.index($element) > -1,
            $elements = isTab ? _this.$tabs : $element.siblings('li').add($element),
            $prevElement,
            $nextElement;
        $elements.each(function (i) {
          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).is($element)) {
            $prevElement = $elements.eq(i - 1);
            $nextElement = $elements.eq(i + 1);
            return;
          }
        });

        var nextSibling = function nextSibling() {
          $nextElement.children('a:first').focus();
          e.preventDefault();
        },
            prevSibling = function prevSibling() {
          $prevElement.children('a:first').focus();
          e.preventDefault();
        },
            openSub = function openSub() {
          var $sub = $element.children('ul.is-dropdown-submenu');

          if ($sub.length) {
            _this._show($sub);

            $element.find('li > a:first').focus();
            e.preventDefault();
          } else {
            return;
          }
        },
            closeSub = function closeSub() {
          //if ($element.is(':first-child')) {
          var close = $element.parent('ul').parent('li');
          close.children('a:first').focus();

          _this._hide(close);

          e.preventDefault(); //}
        };

        var functions = {
          open: openSub,
          close: function close() {
            _this._hide(_this.$element);

            _this.$menuItems.eq(0).children('a').focus(); // focus to first element


            e.preventDefault();
          },
          handled: function handled() {
            e.stopImmediatePropagation();
          }
        };

        if (isTab) {
          if (_this._isVertical()) {
            // vertical menu
            if (_this._isRtl()) {
              // right aligned
              jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend(functions, {
                down: nextSibling,
                up: prevSibling,
                next: closeSub,
                previous: openSub
              });
            } else {
              // left aligned
              jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend(functions, {
                down: nextSibling,
                up: prevSibling,
                next: openSub,
                previous: closeSub
              });
            }
          } else {
            // horizontal menu
            if (_this._isRtl()) {
              // right aligned
              jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend(functions, {
                next: prevSibling,
                previous: nextSibling,
                down: openSub,
                up: closeSub
              });
            } else {
              // left aligned
              jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend(functions, {
                next: nextSibling,
                previous: prevSibling,
                down: openSub,
                up: closeSub
              });
            }
          }
        } else {
          // not tabs -> one sub
          if (_this._isRtl()) {
            // right aligned
            jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend(functions, {
              next: closeSub,
              previous: openSub,
              down: nextSibling,
              up: prevSibling
            });
          } else {
            // left aligned
            jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend(functions, {
              next: openSub,
              previous: closeSub,
              down: nextSibling,
              up: prevSibling
            });
          }
        }

        _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_3__["Keyboard"].handleKey(e, 'DropdownMenu', functions);
      });
    }
    /**
     * Adds an event handler to the body to close any dropdowns on a click.
     * @function
     * @private
     */

  }, {
    key: "_addBodyHandler",
    value: function _addBodyHandler() {
      var $body = jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.body),
          _this = this;

      $body.off('mouseup.zf.dropdownmenu touchend.zf.dropdownmenu').on('mouseup.zf.dropdownmenu touchend.zf.dropdownmenu', function (e) {
        var $link = _this.$element.find(e.target);

        if ($link.length) {
          return;
        }

        _this._hide();

        $body.off('mouseup.zf.dropdownmenu touchend.zf.dropdownmenu');
      });
    }
    /**
     * Opens a dropdown pane, and checks for collisions first.
     * @param {jQuery} $sub - ul element that is a submenu to show
     * @function
     * @private
     * @fires Dropdownmenu#show
     */

  }, {
    key: "_show",
    value: function _show($sub) {
      var idx = this.$tabs.index(this.$tabs.filter(function (i, el) {
        return jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).find($sub).length > 0;
      }));
      var $sibs = $sub.parent('li.is-dropdown-submenu-parent').siblings('li.is-dropdown-submenu-parent');

      this._hide($sibs, idx);

      $sub.css('visibility', 'hidden').addClass('js-dropdown-active').parent('li.is-dropdown-submenu-parent').addClass('is-active');
      var clear = _foundation_util_box__WEBPACK_IMPORTED_MODULE_5__["Box"].ImNotTouchingYou($sub, null, true);

      if (!clear) {
        var oldClass = this.options.alignment === 'left' ? '-right' : '-left',
            $parentLi = $sub.parent('.is-dropdown-submenu-parent');
        $parentLi.removeClass("opens".concat(oldClass)).addClass("opens-".concat(this.options.alignment));
        clear = _foundation_util_box__WEBPACK_IMPORTED_MODULE_5__["Box"].ImNotTouchingYou($sub, null, true);

        if (!clear) {
          $parentLi.removeClass("opens-".concat(this.options.alignment)).addClass('opens-inner');
        }

        this.changed = true;
      }

      $sub.css('visibility', '');

      if (this.options.closeOnClick) {
        this._addBodyHandler();
      }
      /**
       * Fires when the new dropdown pane is visible.
       * @event Dropdownmenu#show
       */


      this.$element.trigger('show.zf.dropdownmenu', [$sub]);
    }
    /**
     * Hides a single, currently open dropdown pane, if passed a parameter, otherwise, hides everything.
     * @function
     * @param {jQuery} $elem - element with a submenu to hide
     * @param {Number} idx - index of the $tabs collection to hide
     * @private
     */

  }, {
    key: "_hide",
    value: function _hide($elem, idx) {
      var $toClose;

      if ($elem && $elem.length) {
        $toClose = $elem;
      } else if (typeof idx !== 'undefined') {
        $toClose = this.$tabs.not(function (i, el) {
          return i === idx;
        });
      } else {
        $toClose = this.$element;
      }

      var somethingToClose = $toClose.hasClass('is-active') || $toClose.find('.is-active').length > 0;

      if (somethingToClose) {
        $toClose.find('li.is-active').add($toClose).attr({
          'data-is-click': false
        }).removeClass('is-active');
        $toClose.find('ul.js-dropdown-active').removeClass('js-dropdown-active');

        if (this.changed || $toClose.find('opens-inner').length) {
          var oldClass = this.options.alignment === 'left' ? 'right' : 'left';
          $toClose.find('li.is-dropdown-submenu-parent').add($toClose).removeClass("opens-inner opens-".concat(this.options.alignment)).addClass("opens-".concat(oldClass));
          this.changed = false;
        }
        /**
         * Fires when the open menus are closed.
         * @event Dropdownmenu#hide
         */


        this.$element.trigger('hide.zf.dropdownmenu', [$toClose]);
      }
    }
    /**
     * Destroys the plugin.
     * @function
     */

  }, {
    key: "_destroy",
    value: function _destroy() {
      this.$menuItems.off('.zf.dropdownmenu').removeAttr('data-is-click').removeClass('is-right-arrow is-left-arrow is-down-arrow opens-right opens-left opens-inner');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.body).off('.zf.dropdownmenu');
      _foundation_util_nest__WEBPACK_IMPORTED_MODULE_4__["Nest"].Burn(this.$element, 'dropdown');
    }
  }]);

  return DropdownMenu;
}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__["Plugin"]);
/**
 * Default settings for plugin
 */


DropdownMenu.defaults = {
  /**
   * Disallows hover events from opening submenus
   * @option
   * @type {boolean}
   * @default false
   */
  disableHover: false,

  /**
   * Allow a submenu to automatically close on a mouseleave event, if not clicked open.
   * @option
   * @type {boolean}
   * @default true
   */
  autoclose: true,

  /**
   * Amount of time to delay opening a submenu on hover event.
   * @option
   * @type {number}
   * @default 50
   */
  hoverDelay: 50,

  /**
   * Allow a submenu to open/remain open on parent click event. Allows cursor to move away from menu.
   * @option
   * @type {boolean}
   * @default false
   */
  clickOpen: false,

  /**
   * Amount of time to delay closing a submenu on a mouseleave event.
   * @option
   * @type {number}
   * @default 500
   */
  closingTime: 500,

  /**
   * Position of the menu relative to what direction the submenus should open. Handled by JS. Can be `'auto'`, `'left'` or `'right'`.
   * @option
   * @type {string}
   * @default 'auto'
   */
  alignment: 'auto',

  /**
   * Allow clicks on the body to close any open submenus.
   * @option
   * @type {boolean}
   * @default true
   */
  closeOnClick: true,

  /**
   * Allow clicks on leaf anchor links to close any open submenus.
   * @option
   * @type {boolean}
   * @default true
   */
  closeOnClickInside: true,

  /**
   * Class applied to vertical oriented menus, Foundation default is `vertical`. Update this if using your own class.
   * @option
   * @type {string}
   * @default 'vertical'
   */
  verticalClass: 'vertical',

  /**
   * Class applied to right-side oriented menus, Foundation default is `align-right`. Update this if using your own class.
   * @option
   * @type {string}
   * @default 'align-right'
   */
  rightClass: 'align-right',

  /**
   * Boolean to force overide the clicking of links to perform default action, on second touch event for mobile.
   * @option
   * @type {boolean}
   * @default true
   */
  forceFollow: true
};


/***/ }),

/***/ "./js/foundation.equalizer.js":
/*!************************************!*\
  !*** ./js/foundation.equalizer.js ***!
  \************************************/
/*! exports provided: Equalizer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Equalizer", function() { return Equalizer; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.util.mediaQuery */ "./js/foundation.util.mediaQuery.js");
/* harmony import */ var _foundation_util_imageLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.util.imageLoader */ "./js/foundation.util.imageLoader.js");
/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.core.utils */ "./js/foundation.core.utils.js");
/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation.core.plugin */ "./js/foundation.core.plugin.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






/**
 * Equalizer module.
 * @module foundation.equalizer
 * @requires foundation.util.mediaQuery
 * @requires foundation.util.imageLoader if equalizer contains images
 */

var Equalizer =
/*#__PURE__*/
function (_Plugin) {
  _inherits(Equalizer, _Plugin);

  function Equalizer() {
    _classCallCheck(this, Equalizer);

    return _possibleConstructorReturn(this, _getPrototypeOf(Equalizer).apply(this, arguments));
  }

  _createClass(Equalizer, [{
    key: "_setup",

    /**
     * Creates a new instance of Equalizer.
     * @class
     * @name Equalizer
     * @fires Equalizer#init
     * @param {Object} element - jQuery object to add the trigger to.
     * @param {Object} options - Overrides to the default plugin settings.
     */
    value: function _setup(element, options) {
      this.$element = element;
      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, Equalizer.defaults, this.$element.data(), options);
      this.className = 'Equalizer'; // ie9 back compat

      this._init();
    }
    /**
     * Initializes the Equalizer plugin and calls functions to get equalizer functioning on load.
     * @private
     */

  }, {
    key: "_init",
    value: function _init() {
      var eqId = this.$element.attr('data-equalizer') || '';
      var $watched = this.$element.find("[data-equalizer-watch=\"".concat(eqId, "\"]"));

      _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__["MediaQuery"]._init();

      this.$watched = $watched.length ? $watched : this.$element.find('[data-equalizer-watch]');
      this.$element.attr('data-resize', eqId || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__["GetYoDigits"])(6, 'eq'));
      this.$element.attr('data-mutate', eqId || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__["GetYoDigits"])(6, 'eq'));
      this.hasNested = this.$element.find('[data-equalizer]').length > 0;
      this.isNested = this.$element.parentsUntil(document.body, '[data-equalizer]').length > 0;
      this.isOn = false;
      this._bindHandler = {
        onResizeMeBound: this._onResizeMe.bind(this),
        onPostEqualizedBound: this._onPostEqualized.bind(this)
      };
      var imgs = this.$element.find('img');
      var tooSmall;

      if (this.options.equalizeOn) {
        tooSmall = this._checkMQ();
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('changed.zf.mediaquery', this._checkMQ.bind(this));
      } else {
        this._events();
      }

      if (typeof tooSmall !== 'undefined' && tooSmall === false || typeof tooSmall === 'undefined') {
        if (imgs.length) {
          Object(_foundation_util_imageLoader__WEBPACK_IMPORTED_MODULE_2__["onImagesLoaded"])(imgs, this._reflow.bind(this));
        } else {
          this._reflow();
        }
      }
    }
    /**
     * Removes event listeners if the breakpoint is too small.
     * @private
     */

  }, {
    key: "_pauseEvents",
    value: function _pauseEvents() {
      this.isOn = false;
      this.$element.off({
        '.zf.equalizer': this._bindHandler.onPostEqualizedBound,
        'resizeme.zf.trigger': this._bindHandler.onResizeMeBound,
        'mutateme.zf.trigger': this._bindHandler.onResizeMeBound
      });
    }
    /**
     * function to handle $elements resizeme.zf.trigger, with bound this on _bindHandler.onResizeMeBound
     * @private
     */

  }, {
    key: "_onResizeMe",
    value: function _onResizeMe(e) {
      this._reflow();
    }
    /**
     * function to handle $elements postequalized.zf.equalizer, with bound this on _bindHandler.onPostEqualizedBound
     * @private
     */

  }, {
    key: "_onPostEqualized",
    value: function _onPostEqualized(e) {
      if (e.target !== this.$element[0]) {
        this._reflow();
      }
    }
    /**
     * Initializes events for Equalizer.
     * @private
     */

  }, {
    key: "_events",
    value: function _events() {
      var _this = this;

      this._pauseEvents();

      if (this.hasNested) {
        this.$element.on('postequalized.zf.equalizer', this._bindHandler.onPostEqualizedBound);
      } else {
        this.$element.on('resizeme.zf.trigger', this._bindHandler.onResizeMeBound);
        this.$element.on('mutateme.zf.trigger', this._bindHandler.onResizeMeBound);
      }

      this.isOn = true;
    }
    /**
     * Checks the current breakpoint to the minimum required size.
     * @private
     */

  }, {
    key: "_checkMQ",
    value: function _checkMQ() {
      var tooSmall = !_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__["MediaQuery"].is(this.options.equalizeOn);

      if (tooSmall) {
        if (this.isOn) {
          this._pauseEvents();

          this.$watched.css('height', 'auto');
        }
      } else {
        if (!this.isOn) {
          this._events();
        }
      }

      return tooSmall;
    }
    /**
     * A noop version for the plugin
     * @private
     */

  }, {
    key: "_killswitch",
    value: function _killswitch() {
      return;
    }
    /**
     * Calls necessary functions to update Equalizer upon DOM change
     * @private
     */

  }, {
    key: "_reflow",
    value: function _reflow() {
      if (!this.options.equalizeOnStack) {
        if (this._isStacked()) {
          this.$watched.css('height', 'auto');
          return false;
        }
      }

      if (this.options.equalizeByRow) {
        this.getHeightsByRow(this.applyHeightByRow.bind(this));
      } else {
        this.getHeights(this.applyHeight.bind(this));
      }
    }
    /**
     * Manually determines if the first 2 elements are *NOT* stacked.
     * @private
     */

  }, {
    key: "_isStacked",
    value: function _isStacked() {
      if (!this.$watched[0] || !this.$watched[1]) {
        return true;
      }

      return this.$watched[0].getBoundingClientRect().top !== this.$watched[1].getBoundingClientRect().top;
    }
    /**
     * Finds the outer heights of children contained within an Equalizer parent and returns them in an array
     * @param {Function} cb - A non-optional callback to return the heights array to.
     * @returns {Array} heights - An array of heights of children within Equalizer container
     */

  }, {
    key: "getHeights",
    value: function getHeights(cb) {
      var heights = [];

      for (var i = 0, len = this.$watched.length; i < len; i++) {
        this.$watched[i].style.height = 'auto';
        heights.push(this.$watched[i].offsetHeight);
      }

      cb(heights);
    }
    /**
     * Finds the outer heights of children contained within an Equalizer parent and returns them in an array
     * @param {Function} cb - A non-optional callback to return the heights array to.
     * @returns {Array} groups - An array of heights of children within Equalizer container grouped by row with element,height and max as last child
     */

  }, {
    key: "getHeightsByRow",
    value: function getHeightsByRow(cb) {
      var lastElTopOffset = this.$watched.length ? this.$watched.first().offset().top : 0,
          groups = [],
          group = 0; //group by Row

      groups[group] = [];

      for (var i = 0, len = this.$watched.length; i < len; i++) {
        this.$watched[i].style.height = 'auto'; //maybe could use this.$watched[i].offsetTop

        var elOffsetTop = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.$watched[i]).offset().top;

        if (elOffsetTop != lastElTopOffset) {
          group++;
          groups[group] = [];
          lastElTopOffset = elOffsetTop;
        }

        groups[group].push([this.$watched[i], this.$watched[i].offsetHeight]);
      }

      for (var j = 0, ln = groups.length; j < ln; j++) {
        var heights = jquery__WEBPACK_IMPORTED_MODULE_0___default()(groups[j]).map(function () {
          return this[1];
        }).get();
        var max = Math.max.apply(null, heights);
        groups[j].push(max);
      }

      cb(groups);
    }
    /**
     * Changes the CSS height property of each child in an Equalizer parent to match the tallest
     * @param {array} heights - An array of heights of children within Equalizer container
     * @fires Equalizer#preequalized
     * @fires Equalizer#postequalized
     */

  }, {
    key: "applyHeight",
    value: function applyHeight(heights) {
      var max = Math.max.apply(null, heights);
      /**
       * Fires before the heights are applied
       * @event Equalizer#preequalized
       */

      this.$element.trigger('preequalized.zf.equalizer');
      this.$watched.css('height', max);
      /**
       * Fires when the heights have been applied
       * @event Equalizer#postequalized
       */

      this.$element.trigger('postequalized.zf.equalizer');
    }
    /**
     * Changes the CSS height property of each child in an Equalizer parent to match the tallest by row
     * @param {array} groups - An array of heights of children within Equalizer container grouped by row with element,height and max as last child
     * @fires Equalizer#preequalized
     * @fires Equalizer#preequalizedrow
     * @fires Equalizer#postequalizedrow
     * @fires Equalizer#postequalized
     */

  }, {
    key: "applyHeightByRow",
    value: function applyHeightByRow(groups) {
      /**
       * Fires before the heights are applied
       */
      this.$element.trigger('preequalized.zf.equalizer');

      for (var i = 0, len = groups.length; i < len; i++) {
        var groupsILength = groups[i].length,
            max = groups[i][groupsILength - 1];

        if (groupsILength <= 2) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(groups[i][0][0]).css({
            'height': 'auto'
          });
          continue;
        }
        /**
          * Fires before the heights per row are applied
          * @event Equalizer#preequalizedrow
          */


        this.$element.trigger('preequalizedrow.zf.equalizer');

        for (var j = 0, lenJ = groupsILength - 1; j < lenJ; j++) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(groups[i][j][0]).css({
            'height': max
          });
        }
        /**
          * Fires when the heights per row have been applied
          * @event Equalizer#postequalizedrow
          */


        this.$element.trigger('postequalizedrow.zf.equalizer');
      }
      /**
       * Fires when the heights have been applied
       */


      this.$element.trigger('postequalized.zf.equalizer');
    }
    /**
     * Destroys an instance of Equalizer.
     * @function
     */

  }, {
    key: "_destroy",
    value: function _destroy() {
      this._pauseEvents();

      this.$watched.css('height', 'auto');
    }
  }]);

  return Equalizer;
}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_4__["Plugin"]);
/**
 * Default settings for plugin
 */


Equalizer.defaults = {
  /**
   * Enable height equalization when stacked on smaller screens.
   * @option
   * @type {boolean}
   * @default false
   */
  equalizeOnStack: false,

  /**
   * Enable height equalization row by row.
   * @option
   * @type {boolean}
   * @default false
   */
  equalizeByRow: false,

  /**
   * String representing the minimum breakpoint size the plugin should equalize heights on.
   * @option
   * @type {string}
   * @default ''
   */
  equalizeOn: ''
};


/***/ }),

/***/ "./js/foundation.interchange.js":
/*!**************************************!*\
  !*** ./js/foundation.interchange.js ***!
  \**************************************/
/*! exports provided: Interchange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Interchange", function() { return Interchange; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.util.mediaQuery */ "./js/foundation.util.mediaQuery.js");
/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.core.plugin */ "./js/foundation.core.plugin.js");
/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.core.utils */ "./js/foundation.core.utils.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





/**
 * Interchange module.
 * @module foundation.interchange
 * @requires foundation.util.mediaQuery
 */

var Interchange =
/*#__PURE__*/
function (_Plugin) {
  _inherits(Interchange, _Plugin);

  function Interchange() {
    _classCallCheck(this, Interchange);

    return _possibleConstructorReturn(this, _getPrototypeOf(Interchange).apply(this, arguments));
  }

  _createClass(Interchange, [{
    key: "_setup",

    /**
     * Creates a new instance of Interchange.
     * @class
     * @name Interchange
     * @fires Interchange#init
     * @param {Object} element - jQuery object to add the trigger to.
     * @param {Object} options - Overrides to the default plugin settings.
     */
    value: function _setup(element, options) {
      this.$element = element;
      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, Interchange.defaults, options);
      this.rules = [];
      this.currentPath = '';
      this.className = 'Interchange'; // ie9 back compat

      this._init();

      this._events();
    }
    /**
     * Initializes the Interchange plugin and calls functions to get interchange functioning on load.
     * @function
     * @private
     */

  }, {
    key: "_init",
    value: function _init() {
      _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__["MediaQuery"]._init();

      var id = this.$element[0].id || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__["GetYoDigits"])(6, 'interchange');
      this.$element.attr({
        'data-resize': id,
        'id': id
      });

      this._addBreakpoints();

      this._generateRules();

      this._reflow();
    }
    /**
     * Initializes events for Interchange.
     * @function
     * @private
     */

  }, {
    key: "_events",
    value: function _events() {
      var _this2 = this;

      this.$element.off('resizeme.zf.trigger').on('resizeme.zf.trigger', function () {
        return _this2._reflow();
      });
    }
    /**
     * Calls necessary functions to update Interchange upon DOM change
     * @function
     * @private
     */

  }, {
    key: "_reflow",
    value: function _reflow() {
      var match; // Iterate through each rule, but only save the last match

      for (var i in this.rules) {
        if (this.rules.hasOwnProperty(i)) {
          var rule = this.rules[i];

          if (window.matchMedia(rule.query).matches) {
            match = rule;
          }
        }
      }

      if (match) {
        this.replace(match.path);
      }
    }
    /**
     * Gets the Foundation breakpoints and adds them to the Interchange.SPECIAL_QUERIES object.
     * @function
     * @private
     */

  }, {
    key: "_addBreakpoints",
    value: function _addBreakpoints() {
      for (var i in _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__["MediaQuery"].queries) {
        if (_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__["MediaQuery"].queries.hasOwnProperty(i)) {
          var query = _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__["MediaQuery"].queries[i];
          Interchange.SPECIAL_QUERIES[query.name] = query.value;
        }
      }
    }
    /**
     * Checks the Interchange element for the provided media query + content pairings
     * @function
     * @private
     * @param {Object} element - jQuery object that is an Interchange instance
     * @returns {Array} scenarios - Array of objects that have 'mq' and 'path' keys with corresponding keys
     */

  }, {
    key: "_generateRules",
    value: function _generateRules(element) {
      var rulesList = [];
      var rules;

      if (this.options.rules) {
        rules = this.options.rules;
      } else {
        rules = this.$element.data('interchange');
      }

      rules = typeof rules === 'string' ? rules.match(/\[.*?, .*?\]/g) : rules;

      for (var i in rules) {
        if (rules.hasOwnProperty(i)) {
          var rule = rules[i].slice(1, -1).split(', ');
          var path = rule.slice(0, -1).join('');
          var query = rule[rule.length - 1];

          if (Interchange.SPECIAL_QUERIES[query]) {
            query = Interchange.SPECIAL_QUERIES[query];
          }

          rulesList.push({
            path: path,
            query: query
          });
        }
      }

      this.rules = rulesList;
    }
    /**
     * Update the `src` property of an image, or change the HTML of a container, to the specified path.
     * @function
     * @param {String} path - Path to the image or HTML partial.
     * @fires Interchange#replaced
     */

  }, {
    key: "replace",
    value: function replace(path) {
      if (this.currentPath === path) return;

      var _this = this,
          trigger = 'replaced.zf.interchange'; // Replacing images


      if (this.$element[0].nodeName === 'IMG') {
        this.$element.attr('src', path).on('load', function () {
          _this.currentPath = path;
        }).trigger(trigger);
      } // Replacing background images
      else if (path.match(/\.(gif|jpg|jpeg|png|svg|tiff)([?#].*)?/i)) {
          path = path.replace(/\(/g, '%28').replace(/\)/g, '%29');
          this.$element.css({
            'background-image': 'url(' + path + ')'
          }).trigger(trigger);
        } // Replacing HTML
        else {
            jquery__WEBPACK_IMPORTED_MODULE_0___default.a.get(path, function (response) {
              _this.$element.html(response).trigger(trigger);

              jquery__WEBPACK_IMPORTED_MODULE_0___default()(response).foundation();
              _this.currentPath = path;
            });
          }
      /**
       * Fires when content in an Interchange element is done being loaded.
       * @event Interchange#replaced
       */
      // this.$element.trigger('replaced.zf.interchange');

    }
    /**
     * Destroys an instance of interchange.
     * @function
     */

  }, {
    key: "_destroy",
    value: function _destroy() {
      this.$element.off('resizeme.zf.trigger');
    }
  }]);

  return Interchange;
}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_2__["Plugin"]);
/**
 * Default settings for plugin
 */


Interchange.defaults = {
  /**
   * Rules to be applied to Interchange elements. Set with the `data-interchange` array notation.
   * @option
   * @type {?array}
   * @default null
   */
  rules: null
};
Interchange.SPECIAL_QUERIES = {
  'landscape': 'screen and (orientation: landscape)',
  'portrait': 'screen and (orientation: portrait)',
  'retina': 'only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min--moz-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx)'
};


/***/ }),

/***/ "./js/foundation.magellan.js":
/*!***********************************!*\
  !*** ./js/foundation.magellan.js ***!
  \***********************************/
/*! exports provided: Magellan */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Magellan", function() { return Magellan; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.core.utils */ "./js/foundation.core.utils.js");
/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.core.plugin */ "./js/foundation.core.plugin.js");
/* harmony import */ var _foundation_smoothScroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.smoothScroll */ "./js/foundation.smoothScroll.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





/**
 * Magellan module.
 * @module foundation.magellan
 * @requires foundation.smoothScroll
 */

var Magellan =
/*#__PURE__*/
function (_Plugin) {
  _inherits(Magellan, _Plugin);

  function Magellan() {
    _classCallCheck(this, Magellan);

    return _possibleConstructorReturn(this, _getPrototypeOf(Magellan).apply(this, arguments));
  }

  _createClass(Magellan, [{
    key: "_setup",

    /**
     * Creates a new instance of Magellan.
     * @class
     * @name Magellan
     * @fires Magellan#init
     * @param {Object} element - jQuery object to add the trigger to.
     * @param {Object} options - Overrides to the default plugin settings.
     */
    value: function _setup(element, options) {
      this.$element = element;
      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, Magellan.defaults, this.$element.data(), options);
      this.className = 'Magellan'; // ie9 back compat

      this._init();

      this.calcPoints();
    }
    /**
     * Initializes the Magellan plugin and calls functions to get equalizer functioning on load.
     * @private
     */

  }, {
    key: "_init",
    value: function _init() {
      var id = this.$element[0].id || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__["GetYoDigits"])(6, 'magellan');

      var _this = this;

      this.$targets = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-magellan-target]');
      this.$links = this.$element.find('a');
      this.$element.attr({
        'data-resize': id,
        'data-scroll': id,
        'id': id
      });
      this.$active = jquery__WEBPACK_IMPORTED_MODULE_0___default()();
      this.scrollPos = parseInt(window.pageYOffset, 10);

      this._events();
    }
    /**
     * Calculates an array of pixel values that are the demarcation lines between locations on the page.
     * Can be invoked if new elements are added or the size of a location changes.
     * @function
     */

  }, {
    key: "calcPoints",
    value: function calcPoints() {
      var _this = this,
          body = document.body,
          html = document.documentElement;

      this.points = [];
      this.winHeight = Math.round(Math.max(window.innerHeight, html.clientHeight));
      this.docHeight = Math.round(Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight));
      this.$targets.each(function () {
        var $tar = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
            pt = Math.round($tar.offset().top - _this.options.threshold);
        $tar.targetPoint = pt;

        _this.points.push(pt);
      });
    }
    /**
     * Initializes events for Magellan.
     * @private
     */

  }, {
    key: "_events",
    value: function _events() {
      var _this = this,
          $body = jquery__WEBPACK_IMPORTED_MODULE_0___default()('html, body'),
          opts = {
        duration: _this.options.animationDuration,
        easing: _this.options.animationEasing
      };

      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).one('load', function () {
        if (_this.options.deepLinking) {
          if (location.hash) {
            _this.scrollToLoc(location.hash);
          }
        }

        _this.calcPoints();

        _this._updateActive();
      });
      _this.onLoadListener = Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__["onLoad"])(jquery__WEBPACK_IMPORTED_MODULE_0___default()(window), function () {
        _this.$element.on({
          'resizeme.zf.trigger': _this.reflow.bind(_this),
          'scrollme.zf.trigger': _this._updateActive.bind(_this)
        }).on('click.zf.magellan', 'a[href^="#"]', function (e) {
          e.preventDefault();
          var arrival = this.getAttribute('href');

          _this.scrollToLoc(arrival);
        });
      });

      this._deepLinkScroll = function (e) {
        if (_this.options.deepLinking) {
          _this.scrollToLoc(window.location.hash);
        }
      };

      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('hashchange', this._deepLinkScroll);
    }
    /**
     * Function to scroll to a given location on the page.
     * @param {String} loc - a properly formatted jQuery id selector. Example: '#foo'
     * @function
     */

  }, {
    key: "scrollToLoc",
    value: function scrollToLoc(loc) {
      this._inTransition = true;

      var _this = this;

      var options = {
        animationEasing: this.options.animationEasing,
        animationDuration: this.options.animationDuration,
        threshold: this.options.threshold,
        offset: this.options.offset
      };
      _foundation_smoothScroll__WEBPACK_IMPORTED_MODULE_3__["SmoothScroll"].scrollToLoc(loc, options, function () {
        _this._inTransition = false;
      });
    }
    /**
     * Calls necessary functions to update Magellan upon DOM change
     * @function
     */

  }, {
    key: "reflow",
    value: function reflow() {
      this.calcPoints();

      this._updateActive();
    }
    /**
     * Updates the visibility of an active location link, and updates the url hash for the page, if deepLinking enabled.
     * @private
     * @function
     * @fires Magellan#update
     */

  }, {
    key: "_updateActive",
    value: function _updateActive()
    /*evt, elem, scrollPos*/
    {
      var _this2 = this;

      if (this._inTransition) return;
      var newScrollPos = parseInt(window.pageYOffset, 10);
      var isScrollingUp = this.scrollPos > newScrollPos;
      this.scrollPos = newScrollPos;
      var activeIdx; // Before the first point: no link

      if (newScrollPos < this.points[0]) {}
      /* do nothing */
      // At the bottom of the page: last link
      else if (newScrollPos + this.winHeight === this.docHeight) {
          activeIdx = this.points.length - 1;
        } // Otherwhise, use the last visible link
        else {
            var visibleLinks = this.points.filter(function (p, i) {
              return p - _this2.options.offset - (isScrollingUp ? _this2.options.threshold : 0) <= newScrollPos;
            });
            activeIdx = visibleLinks.length ? visibleLinks.length - 1 : 0;
          } // Get the new active link


      var $oldActive = this.$active;
      var activeHash = '';

      if (typeof activeIdx !== 'undefined') {
        this.$active = this.$links.filter('[href="#' + this.$targets.eq(activeIdx).data('magellan-target') + '"]');
        if (this.$active.length) activeHash = this.$active[0].getAttribute('href');
      } else {
        this.$active = jquery__WEBPACK_IMPORTED_MODULE_0___default()();
      }

      var isNewActive = !(!this.$active.length && !$oldActive.length) && !this.$active.is($oldActive);
      var isNewHash = activeHash !== window.location.hash; // Update the active link element

      if (isNewActive) {
        $oldActive.removeClass(this.options.activeClass);
        this.$active.addClass(this.options.activeClass);
      } // Update the hash (it may have changed with the same active link)


      if (this.options.deepLinking && isNewHash) {
        if (window.history.pushState) {
          // Set or remove the hash (see: https://stackoverflow.com/a/5298684/4317384
          var url = activeHash ? activeHash : window.location.pathname + window.location.search;
          window.history.pushState(null, null, url);
        } else {
          window.location.hash = activeHash;
        }
      }

      if (isNewActive) {
        /**
         * Fires when magellan is finished updating to the new active element.
         * @event Magellan#update
         */
        this.$element.trigger('update.zf.magellan', [this.$active]);
      }
    }
    /**
     * Destroys an instance of Magellan and resets the url of the window.
     * @function
     */

  }, {
    key: "_destroy",
    value: function _destroy() {
      this.$element.off('.zf.trigger .zf.magellan').find(".".concat(this.options.activeClass)).removeClass(this.options.activeClass);

      if (this.options.deepLinking) {
        var hash = this.$active[0].getAttribute('href');
        window.location.hash.replace(hash, '');
      }

      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off('hashchange', this._deepLinkScroll);
      if (this.onLoadListener) jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(this.onLoadListener);
    }
  }]);

  return Magellan;
}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_2__["Plugin"]);
/**
 * Default settings for plugin
 */


Magellan.defaults = {
  /**
   * Amount of time, in ms, the animated scrolling should take between locations.
   * @option
   * @type {number}
   * @default 500
   */
  animationDuration: 500,

  /**
   * Animation style to use when scrolling between locations. Can be `'swing'` or `'linear'`.
   * @option
   * @type {string}
   * @default 'linear'
   * @see {@link https://api.jquery.com/animate|Jquery animate}
   */
  animationEasing: 'linear',

  /**
   * Number of pixels to use as a marker for location changes.
   * @option
   * @type {number}
   * @default 50
   */
  threshold: 50,

  /**
   * Class applied to the active locations link on the magellan container.
   * @option
   * @type {string}
   * @default 'is-active'
   */
  activeClass: 'is-active',

  /**
   * Allows the script to manipulate the url of the current page, and if supported, alter the history.
   * @option
   * @type {boolean}
   * @default false
   */
  deepLinking: false,

  /**
   * Number of pixels to offset the scroll of the page on item click if using a sticky nav bar.
   * @option
   * @type {number}
   * @default 0
   */
  offset: 0
};


/***/ }),

/***/ "./js/foundation.offcanvas.js":
/*!************************************!*\
  !*** ./js/foundation.offcanvas.js ***!
  \************************************/
/*! exports provided: OffCanvas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffCanvas", function() { return OffCanvas; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.core.utils */ "./js/foundation.core.utils.js");
/* harmony import */ var _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.util.keyboard */ "./js/foundation.util.keyboard.js");
/* harmony import */ var _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.util.mediaQuery */ "./js/foundation.util.mediaQuery.js");
/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation.core.plugin */ "./js/foundation.core.plugin.js");
/* harmony import */ var _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./foundation.util.triggers */ "./js/foundation.util.triggers.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







/**
 * OffCanvas module.
 * @module foundation.offcanvas
 * @requires foundation.util.keyboard
 * @requires foundation.util.mediaQuery
 * @requires foundation.util.triggers
 */

var OffCanvas =
/*#__PURE__*/
function (_Plugin) {
  _inherits(OffCanvas, _Plugin);

  function OffCanvas() {
    _classCallCheck(this, OffCanvas);

    return _possibleConstructorReturn(this, _getPrototypeOf(OffCanvas).apply(this, arguments));
  }

  _createClass(OffCanvas, [{
    key: "_setup",

    /**
     * Creates a new instance of an off-canvas wrapper.
     * @class
     * @name OffCanvas
     * @fires OffCanvas#init
     * @param {Object} element - jQuery object to initialize.
     * @param {Object} options - Overrides to the default plugin settings.
     */
    value: function _setup(element, options) {
      var _this2 = this;

      this.className = 'OffCanvas'; // ie9 back compat

      this.$element = element;
      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, OffCanvas.defaults, this.$element.data(), options);
      this.contentClasses = {
        base: [],
        reveal: []
      };
      this.$lastTrigger = jquery__WEBPACK_IMPORTED_MODULE_0___default()();
      this.$triggers = jquery__WEBPACK_IMPORTED_MODULE_0___default()();
      this.position = 'left';
      this.$content = jquery__WEBPACK_IMPORTED_MODULE_0___default()();
      this.nested = !!this.options.nested; // Defines the CSS transition/position classes of the off-canvas content container.

      jquery__WEBPACK_IMPORTED_MODULE_0___default()(['push', 'overlap']).each(function (index, val) {
        _this2.contentClasses.base.push('has-transition-' + val);
      });
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(['left', 'right', 'top', 'bottom']).each(function (index, val) {
        _this2.contentClasses.base.push('has-position-' + val);

        _this2.contentClasses.reveal.push('has-reveal-' + val);
      }); // Triggers init is idempotent, just need to make sure it is initialized

      _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_5__["Triggers"].init(jquery__WEBPACK_IMPORTED_MODULE_0___default.a);

      _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_3__["MediaQuery"]._init();

      this._init();

      this._events();

      _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__["Keyboard"].register('OffCanvas', {
        'ESCAPE': 'close'
      });
    }
    /**
     * Initializes the off-canvas wrapper by adding the exit overlay (if needed).
     * @function
     * @private
     */

  }, {
    key: "_init",
    value: function _init() {
      var id = this.$element.attr('id');
      this.$element.attr('aria-hidden', 'true'); // Find off-canvas content, either by ID (if specified), by siblings or by closest selector (fallback)

      if (this.options.contentId) {
        this.$content = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#' + this.options.contentId);
      } else if (this.$element.siblings('[data-off-canvas-content]').length) {
        this.$content = this.$element.siblings('[data-off-canvas-content]').first();
      } else {
        this.$content = this.$element.closest('[data-off-canvas-content]').first();
      }

      if (!this.options.contentId) {
        // Assume that the off-canvas element is nested if it isn't a sibling of the content
        this.nested = this.$element.siblings('[data-off-canvas-content]').length === 0;
      } else if (this.options.contentId && this.options.nested === null) {
        // Warning if using content ID without setting the nested option
        // Once the element is nested it is required to work properly in this case
        console.warn('Remember to use the nested option if using the content ID option!');
      }

      if (this.nested === true) {
        // Force transition overlap if nested
        this.options.transition = 'overlap'; // Remove appropriate classes if already assigned in markup

        this.$element.removeClass('is-transition-push');
      }

      this.$element.addClass("is-transition-".concat(this.options.transition, " is-closed")); // Find triggers that affect this element and add aria-expanded to them

      this.$triggers = jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).find('[data-open="' + id + '"], [data-close="' + id + '"], [data-toggle="' + id + '"]').attr('aria-expanded', 'false').attr('aria-controls', id); // Get position by checking for related CSS class

      this.position = this.$element.is('.position-left, .position-top, .position-right, .position-bottom') ? this.$element.attr('class').match(/position\-(left|top|right|bottom)/)[1] : this.position; // Add an overlay over the content if necessary

      if (this.options.contentOverlay === true) {
        var overlay = document.createElement('div');
        var overlayPosition = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.$element).css("position") === 'fixed' ? 'is-overlay-fixed' : 'is-overlay-absolute';
        overlay.setAttribute('class', 'js-off-canvas-overlay ' + overlayPosition);
        this.$overlay = jquery__WEBPACK_IMPORTED_MODULE_0___default()(overlay);

        if (overlayPosition === 'is-overlay-fixed') {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.$overlay).insertAfter(this.$element);
        } else {
          this.$content.append(this.$overlay);
        }
      } // Get the revealOn option from the class.


      var revealOnRegExp = new RegExp(Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__["RegExpEscape"])(this.options.revealClass) + '([^\\s]+)', 'g');
      var revealOnClass = revealOnRegExp.exec(this.$element[0].className);

      if (revealOnClass) {
        this.options.isRevealed = true;
        this.options.revealOn = this.options.revealOn || revealOnClass[1];
      } // Ensure the `reveal-on-*` class is set.


      if (this.options.isRevealed === true && this.options.revealOn) {
        this.$element.first().addClass("".concat(this.options.revealClass).concat(this.options.revealOn));

        this._setMQChecker();
      }

      if (this.options.transitionTime) {
        this.$element.css('transition-duration', this.options.transitionTime);
      } // Initally remove all transition/position CSS classes from off-canvas content container.


      this._removeContentClasses();
    }
    /**
     * Adds event handlers to the off-canvas wrapper and the exit overlay.
     * @function
     * @private
     */

  }, {
    key: "_events",
    value: function _events() {
      this.$element.off('.zf.trigger .zf.offcanvas').on({
        'open.zf.trigger': this.open.bind(this),
        'close.zf.trigger': this.close.bind(this),
        'toggle.zf.trigger': this.toggle.bind(this),
        'keydown.zf.offcanvas': this._handleKeyboard.bind(this)
      });

      if (this.options.closeOnClick === true) {
        var $target = this.options.contentOverlay ? this.$overlay : this.$content;
        $target.on({
          'click.zf.offcanvas': this.close.bind(this)
        });
      }
    }
    /**
     * Applies event listener for elements that will reveal at certain breakpoints.
     * @private
     */

  }, {
    key: "_setMQChecker",
    value: function _setMQChecker() {
      var _this = this;

      this.onLoadListener = Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__["onLoad"])(jquery__WEBPACK_IMPORTED_MODULE_0___default()(window), function () {
        if (_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_3__["MediaQuery"].atLeast(_this.options.revealOn)) {
          _this.reveal(true);
        }
      });
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('changed.zf.mediaquery', function () {
        if (_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_3__["MediaQuery"].atLeast(_this.options.revealOn)) {
          _this.reveal(true);
        } else {
          _this.reveal(false);
        }
      });
    }
    /**
     * Removes the CSS transition/position classes of the off-canvas content container.
     * Removing the classes is important when another off-canvas gets opened that uses the same content container.
     * @param {Boolean} hasReveal - true if related off-canvas element is revealed.
     * @private
     */

  }, {
    key: "_removeContentClasses",
    value: function _removeContentClasses(hasReveal) {
      if (typeof hasReveal !== 'boolean') {
        this.$content.removeClass(this.contentClasses.base.join(' '));
      } else if (hasReveal === false) {
        this.$content.removeClass("has-reveal-".concat(this.position));
      }
    }
    /**
     * Adds the CSS transition/position classes of the off-canvas content container, based on the opening off-canvas element.
     * Beforehand any transition/position class gets removed.
     * @param {Boolean} hasReveal - true if related off-canvas element is revealed.
     * @private
     */

  }, {
    key: "_addContentClasses",
    value: function _addContentClasses(hasReveal) {
      this._removeContentClasses(hasReveal);

      if (typeof hasReveal !== 'boolean') {
        this.$content.addClass("has-transition-".concat(this.options.transition, " has-position-").concat(this.position));
      } else if (hasReveal === true) {
        this.$content.addClass("has-reveal-".concat(this.position));
      }
    }
    /**
     * Handles the revealing/hiding the off-canvas at breakpoints, not the same as open.
     * @param {Boolean} isRevealed - true if element should be revealed.
     * @function
     */

  }, {
    key: "reveal",
    value: function reveal(isRevealed) {
      if (isRevealed) {
        this.close();
        this.isRevealed = true;
        this.$element.attr('aria-hidden', 'false');
        this.$element.off('open.zf.trigger toggle.zf.trigger');
        this.$element.removeClass('is-closed');
      } else {
        this.isRevealed = false;
        this.$element.attr('aria-hidden', 'true');
        this.$element.off('open.zf.trigger toggle.zf.trigger').on({
          'open.zf.trigger': this.open.bind(this),
          'toggle.zf.trigger': this.toggle.bind(this)
        });
        this.$element.addClass('is-closed');
      }

      this._addContentClasses(isRevealed);
    }
    /**
     * Stops scrolling of the body when offcanvas is open on mobile Safari and other troublesome browsers.
     * @private
     */

  }, {
    key: "_stopScrolling",
    value: function _stopScrolling(event) {
      return false;
    } // Taken and adapted from http://stackoverflow.com/questions/16889447/prevent-full-page-scrolling-ios
    // Only really works for y, not sure how to extend to x or if we need to.

  }, {
    key: "_recordScrollable",
    value: function _recordScrollable(event) {
      var elem = this; // called from event handler context with this as elem
      // If the element is scrollable (content overflows), then...

      if (elem.scrollHeight !== elem.clientHeight) {
        // If we're at the top, scroll down one pixel to allow scrolling up
        if (elem.scrollTop === 0) {
          elem.scrollTop = 1;
        } // If we're at the bottom, scroll up one pixel to allow scrolling down


        if (elem.scrollTop === elem.scrollHeight - elem.clientHeight) {
          elem.scrollTop = elem.scrollHeight - elem.clientHeight - 1;
        }
      }

      elem.allowUp = elem.scrollTop > 0;
      elem.allowDown = elem.scrollTop < elem.scrollHeight - elem.clientHeight;
      elem.lastY = event.originalEvent.pageY;
    }
  }, {
    key: "_stopScrollPropagation",
    value: function _stopScrollPropagation(event) {
      var elem = this; // called from event handler context with this as elem

      var up = event.pageY < elem.lastY;
      var down = !up;
      elem.lastY = event.pageY;

      if (up && elem.allowUp || down && elem.allowDown) {
        event.stopPropagation();
      } else {
        event.preventDefault();
      }
    }
    /**
     * Opens the off-canvas menu.
     * @function
     * @param {Object} event - Event object passed from listener.
     * @param {jQuery} trigger - element that triggered the off-canvas to open.
     * @fires Offcanvas#opened
     * @todo also trigger 'open' event?
     */

  }, {
    key: "open",
    value: function open(event, trigger) {
      if (this.$element.hasClass('is-open') || this.isRevealed) {
        return;
      }

      var _this = this;

      if (trigger) {
        this.$lastTrigger = trigger;
      }

      if (this.options.forceTo === 'top') {
        window.scrollTo(0, 0);
      } else if (this.options.forceTo === 'bottom') {
        window.scrollTo(0, document.body.scrollHeight);
      }

      if (this.options.transitionTime && this.options.transition !== 'overlap') {
        this.$element.siblings('[data-off-canvas-content]').css('transition-duration', this.options.transitionTime);
      } else {
        this.$element.siblings('[data-off-canvas-content]').css('transition-duration', '');
      }

      this.$element.addClass('is-open').removeClass('is-closed');
      this.$triggers.attr('aria-expanded', 'true');
      this.$element.attr('aria-hidden', 'false');
      this.$content.addClass('is-open-' + this.position); // If `contentScroll` is set to false, add class and disable scrolling on touch devices.

      if (this.options.contentScroll === false) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').addClass('is-off-canvas-open').on('touchmove', this._stopScrolling);
        this.$element.on('touchstart', this._recordScrollable);
        this.$element.on('touchmove', this._stopScrollPropagation);
      }

      if (this.options.contentOverlay === true) {
        this.$overlay.addClass('is-visible');
      }

      if (this.options.closeOnClick === true && this.options.contentOverlay === true) {
        this.$overlay.addClass('is-closable');
      }

      if (this.options.autoFocus === true) {
        this.$element.one(Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__["transitionend"])(this.$element), function () {
          if (!_this.$element.hasClass('is-open')) {
            return; // exit if prematurely closed
          }

          var canvasFocus = _this.$element.find('[data-autofocus]');

          if (canvasFocus.length) {
            canvasFocus.eq(0).focus();
          } else {
            _this.$element.find('a, button').eq(0).focus();
          }
        });
      }

      if (this.options.trapFocus === true) {
        this.$content.attr('tabindex', '-1');
        _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__["Keyboard"].trapFocus(this.$element);
      }

      this._addContentClasses();
      /**
       * Fires when the off-canvas menu opens.
       * @event Offcanvas#opened
       */


      this.$element.trigger('opened.zf.offcanvas');
    }
    /**
     * Closes the off-canvas menu.
     * @function
     * @param {Function} cb - optional cb to fire after closure.
     * @fires Offcanvas#closed
     */

  }, {
    key: "close",
    value: function close(cb) {
      if (!this.$element.hasClass('is-open') || this.isRevealed) {
        return;
      }

      var _this = this;

      this.$element.removeClass('is-open');
      this.$element.attr('aria-hidden', 'true')
      /**
       * Fires when the off-canvas menu opens.
       * @event Offcanvas#closed
       */
      .trigger('closed.zf.offcanvas');
      this.$content.removeClass('is-open-left is-open-top is-open-right is-open-bottom'); // If `contentScroll` is set to false, remove class and re-enable scrolling on touch devices.

      if (this.options.contentScroll === false) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').removeClass('is-off-canvas-open').off('touchmove', this._stopScrolling);
        this.$element.off('touchstart', this._recordScrollable);
        this.$element.off('touchmove', this._stopScrollPropagation);
      }

      if (this.options.contentOverlay === true) {
        this.$overlay.removeClass('is-visible');
      }

      if (this.options.closeOnClick === true && this.options.contentOverlay === true) {
        this.$overlay.removeClass('is-closable');
      }

      this.$triggers.attr('aria-expanded', 'false');

      if (this.options.trapFocus === true) {
        this.$content.removeAttr('tabindex');
        _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__["Keyboard"].releaseFocus(this.$element);
      } // Listen to transitionEnd and add class when done.


      this.$element.one(Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__["transitionend"])(this.$element), function (e) {
        _this.$element.addClass('is-closed');

        _this._removeContentClasses();
      });
    }
    /**
     * Toggles the off-canvas menu open or closed.
     * @function
     * @param {Object} event - Event object passed from listener.
     * @param {jQuery} trigger - element that triggered the off-canvas to open.
     */

  }, {
    key: "toggle",
    value: function toggle(event, trigger) {
      if (this.$element.hasClass('is-open')) {
        this.close(event, trigger);
      } else {
        this.open(event, trigger);
      }
    }
    /**
     * Handles keyboard input when detected. When the escape key is pressed, the off-canvas menu closes, and focus is restored to the element that opened the menu.
     * @function
     * @private
     */

  }, {
    key: "_handleKeyboard",
    value: function _handleKeyboard(e) {
      var _this3 = this;

      _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__["Keyboard"].handleKey(e, 'OffCanvas', {
        close: function close() {
          _this3.close();

          _this3.$lastTrigger.focus();

          return true;
        },
        handled: function handled() {
          e.stopPropagation();
          e.preventDefault();
        }
      });
    }
    /**
     * Destroys the offcanvas plugin.
     * @function
     */

  }, {
    key: "_destroy",
    value: function _destroy() {
      this.close();
      this.$element.off('.zf.trigger .zf.offcanvas');
      this.$overlay.off('.zf.offcanvas');
      if (this.onLoadListener) jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(this.onLoadListener);
    }
  }]);

  return OffCanvas;
}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_4__["Plugin"]);

OffCanvas.defaults = {
  /**
   * Allow the user to click outside of the menu to close it.
   * @option
   * @type {boolean}
   * @default true
   */
  closeOnClick: true,

  /**
   * Adds an overlay on top of `[data-off-canvas-content]`.
   * @option
   * @type {boolean}
   * @default true
   */
  contentOverlay: true,

  /**
   * Target an off-canvas content container by ID that may be placed anywhere. If null the closest content container will be taken.
   * @option
   * @type {?string}
   * @default null
   */
  contentId: null,

  /**
   * Define the off-canvas element is nested in an off-canvas content. This is required when using the contentId option for a nested element.
   * @option
   * @type {boolean}
   * @default null
   */
  nested: null,

  /**
   * Enable/disable scrolling of the main content when an off canvas panel is open.
   * @option
   * @type {boolean}
   * @default true
   */
  contentScroll: true,

  /**
   * Amount of time in ms the open and close transition requires. If none selected, pulls from body style.
   * @option
   * @type {number}
   * @default null
   */
  transitionTime: null,

  /**
   * Type of transition for the offcanvas menu. Options are 'push', 'detached' or 'slide'.
   * @option
   * @type {string}
   * @default push
   */
  transition: 'push',

  /**
   * Force the page to scroll to top or bottom on open.
   * @option
   * @type {?string}
   * @default null
   */
  forceTo: null,

  /**
   * Allow the offcanvas to remain open for certain breakpoints.
   * @option
   * @type {boolean}
   * @default false
   */
  isRevealed: false,

  /**
   * Breakpoint at which to reveal. JS will use a RegExp to target standard classes, if changing classnames, pass your class with the `revealClass` option.
   * @option
   * @type {?string}
   * @default null
   */
  revealOn: null,

  /**
   * Force focus to the offcanvas on open. If true, will focus the opening trigger on close.
   * @option
   * @type {boolean}
   * @default true
   */
  autoFocus: true,

  /**
   * Class used to force an offcanvas to remain open. Foundation defaults for this are `reveal-for-large` & `reveal-for-medium`.
   * @option
   * @type {string}
   * @default reveal-for-
   * @todo improve the regex testing for this.
   */
  revealClass: 'reveal-for-',

  /**
   * Triggers optional focus trapping when opening an offcanvas. Sets tabindex of [data-off-canvas-content] to -1 for accessibility purposes.
   * @option
   * @type {boolean}
   * @default false
   */
  trapFocus: false
};


/***/ }),

/***/ "./js/foundation.orbit.js":
/*!********************************!*\
  !*** ./js/foundation.orbit.js ***!
  \********************************/
/*! exports provided: Orbit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Orbit", function() { return Orbit; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.util.keyboard */ "./js/foundation.util.keyboard.js");
/* harmony import */ var _foundation_util_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.util.motion */ "./js/foundation.util.motion.js");
/* harmony import */ var _foundation_util_timer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.util.timer */ "./js/foundation.util.timer.js");
/* harmony import */ var _foundation_util_imageLoader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation.util.imageLoader */ "./js/foundation.util.imageLoader.js");
/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./foundation.core.utils */ "./js/foundation.core.utils.js");
/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./foundation.core.plugin */ "./js/foundation.core.plugin.js");
/* harmony import */ var _foundation_util_touch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./foundation.util.touch */ "./js/foundation.util.touch.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









/**
 * Orbit module.
 * @module foundation.orbit
 * @requires foundation.util.keyboard
 * @requires foundation.util.motion
 * @requires foundation.util.timer
 * @requires foundation.util.imageLoader
 * @requires foundation.util.touch
 */

var Orbit =
/*#__PURE__*/
function (_Plugin) {
  _inherits(Orbit, _Plugin);

  function Orbit() {
    _classCallCheck(this, Orbit);

    return _possibleConstructorReturn(this, _getPrototypeOf(Orbit).apply(this, arguments));
  }

  _createClass(Orbit, [{
    key: "_setup",

    /**
    * Creates a new instance of an orbit carousel.
    * @class
    * @name Orbit
    * @param {jQuery} element - jQuery object to make into an Orbit Carousel.
    * @param {Object} options - Overrides to the default plugin settings.
    */
    value: function _setup(element, options) {
      this.$element = element;
      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, Orbit.defaults, this.$element.data(), options);
      this.className = 'Orbit'; // ie9 back compat

      _foundation_util_touch__WEBPACK_IMPORTED_MODULE_7__["Touch"].init(jquery__WEBPACK_IMPORTED_MODULE_0___default.a); // Touch init is idempotent, we just need to make sure it's initialied.

      this._init();

      _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__["Keyboard"].register('Orbit', {
        'ltr': {
          'ARROW_RIGHT': 'next',
          'ARROW_LEFT': 'previous'
        },
        'rtl': {
          'ARROW_LEFT': 'next',
          'ARROW_RIGHT': 'previous'
        }
      });
    }
    /**
    * Initializes the plugin by creating jQuery collections, setting attributes, and starting the animation.
    * @function
    * @private
    */

  }, {
    key: "_init",
    value: function _init() {
      // @TODO: consider discussion on PR #9278 about DOM pollution by changeSlide
      this._reset();

      this.$wrapper = this.$element.find(".".concat(this.options.containerClass));
      this.$slides = this.$element.find(".".concat(this.options.slideClass));
      var $images = this.$element.find('img'),
          initActive = this.$slides.filter('.is-active'),
          id = this.$element[0].id || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_5__["GetYoDigits"])(6, 'orbit');
      this.$element.attr({
        'data-resize': id,
        'id': id
      });

      if (!initActive.length) {
        this.$slides.eq(0).addClass('is-active');
      }

      if (!this.options.useMUI) {
        this.$slides.addClass('no-motionui');
      }

      if ($images.length) {
        Object(_foundation_util_imageLoader__WEBPACK_IMPORTED_MODULE_4__["onImagesLoaded"])($images, this._prepareForOrbit.bind(this));
      } else {
        this._prepareForOrbit(); //hehe

      }

      if (this.options.bullets) {
        this._loadBullets();
      }

      this._events();

      if (this.options.autoPlay && this.$slides.length > 1) {
        this.geoSync();
      }

      if (this.options.accessible) {
        // allow wrapper to be focusable to enable arrow navigation
        this.$wrapper.attr('tabindex', 0);
      }
    }
    /**
    * Creates a jQuery collection of bullets, if they are being used.
    * @function
    * @private
    */

  }, {
    key: "_loadBullets",
    value: function _loadBullets() {
      this.$bullets = this.$element.find(".".concat(this.options.boxOfBullets)).find('button');
    }
    /**
    * Sets a `timer` object on the orbit, and starts the counter for the next slide.
    * @function
    */

  }, {
    key: "geoSync",
    value: function geoSync() {
      var _this = this;

      this.timer = new _foundation_util_timer__WEBPACK_IMPORTED_MODULE_3__["Timer"](this.$element, {
        duration: this.options.timerDelay,
        infinite: false
      }, function () {
        _this.changeSlide(true);
      });
      this.timer.start();
    }
    /**
    * Sets wrapper and slide heights for the orbit.
    * @function
    * @private
    */

  }, {
    key: "_prepareForOrbit",
    value: function _prepareForOrbit() {
      var _this = this;

      this._setWrapperHeight();
    }
    /**
    * Calulates the height of each slide in the collection, and uses the tallest one for the wrapper height.
    * @function
    * @private
    * @param {Function} cb - a callback function to fire when complete.
    */

  }, {
    key: "_setWrapperHeight",
    value: function _setWrapperHeight(cb) {
      //rewrite this to `for` loop
      var max = 0,
          temp,
          counter = 0,
          _this = this;

      this.$slides.each(function () {
        temp = this.getBoundingClientRect().height;
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('data-slide', counter); // hide all slides but the active one

        if (!/mui/g.test(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)[0].className) && _this.$slides.filter('.is-active')[0] !== _this.$slides.eq(counter)[0]) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).css({
            'display': 'none'
          });
        }

        max = temp > max ? temp : max;
        counter++;
      });

      if (counter === this.$slides.length) {
        this.$wrapper.css({
          'height': max
        }); //only change the wrapper height property once.

        if (cb) {
          cb(max);
        } //fire callback with max height dimension.

      }
    }
    /**
    * Sets the max-height of each slide.
    * @function
    * @private
    */

  }, {
    key: "_setSlideHeight",
    value: function _setSlideHeight(height) {
      this.$slides.each(function () {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).css('max-height', height);
      });
    }
    /**
    * Adds event listeners to basically everything within the element.
    * @function
    * @private
    */

  }, {
    key: "_events",
    value: function _events() {
      var _this = this; //***************************************
      //**Now using custom event - thanks to:**
      //**      Yohai Ararat of Toronto      **
      //***************************************
      //


      this.$element.off('.resizeme.zf.trigger').on({
        'resizeme.zf.trigger': this._prepareForOrbit.bind(this)
      });

      if (this.$slides.length > 1) {
        if (this.options.swipe) {
          this.$slides.off('swipeleft.zf.orbit swiperight.zf.orbit').on('swipeleft.zf.orbit', function (e) {
            e.preventDefault();

            _this.changeSlide(true);
          }).on('swiperight.zf.orbit', function (e) {
            e.preventDefault();

            _this.changeSlide(false);
          });
        } //***************************************


        if (this.options.autoPlay) {
          this.$slides.on('click.zf.orbit', function () {
            _this.$element.data('clickedOn', _this.$element.data('clickedOn') ? false : true);

            _this.timer[_this.$element.data('clickedOn') ? 'pause' : 'start']();
          });

          if (this.options.pauseOnHover) {
            this.$element.on('mouseenter.zf.orbit', function () {
              _this.timer.pause();
            }).on('mouseleave.zf.orbit', function () {
              if (!_this.$element.data('clickedOn')) {
                _this.timer.start();
              }
            });
          }
        }

        if (this.options.navButtons) {
          var $controls = this.$element.find(".".concat(this.options.nextClass, ", .").concat(this.options.prevClass));
          $controls.attr('tabindex', 0) //also need to handle enter/return and spacebar key presses
          .on('click.zf.orbit touchend.zf.orbit', function (e) {
            e.preventDefault();

            _this.changeSlide(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).hasClass(_this.options.nextClass));
          });
        }

        if (this.options.bullets) {
          this.$bullets.on('click.zf.orbit touchend.zf.orbit', function () {
            if (/is-active/g.test(this.className)) {
              return false;
            } //if this is active, kick out of function.


            var idx = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('slide'),
                ltr = idx > _this.$slides.filter('.is-active').data('slide'),
                $slide = _this.$slides.eq(idx);

            _this.changeSlide(ltr, $slide, idx);
          });
        }

        if (this.options.accessible) {
          this.$wrapper.add(this.$bullets).on('keydown.zf.orbit', function (e) {
            // handle keyboard event with keyboard util
            _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__["Keyboard"].handleKey(e, 'Orbit', {
              next: function next() {
                _this.changeSlide(true);
              },
              previous: function previous() {
                _this.changeSlide(false);
              },
              handled: function handled() {
                // if bullet is focused, make sure focus moves
                if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).is(_this.$bullets)) {
                  _this.$bullets.filter('.is-active').focus();
                }
              }
            });
          });
        }
      }
    }
    /**
     * Resets Orbit so it can be reinitialized
     */

  }, {
    key: "_reset",
    value: function _reset() {
      // Don't do anything if there are no slides (first run)
      if (typeof this.$slides == 'undefined') {
        return;
      }

      if (this.$slides.length > 1) {
        // Remove old events
        this.$element.off('.zf.orbit').find('*').off('.zf.orbit'); // Restart timer if autoPlay is enabled

        if (this.options.autoPlay) {
          this.timer.restart();
        } // Reset all sliddes


        this.$slides.each(function (el) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).removeClass('is-active is-active is-in').removeAttr('aria-live').hide();
        }); // Show the first slide

        this.$slides.first().addClass('is-active').show(); // Triggers when the slide has finished animating

        this.$element.trigger('slidechange.zf.orbit', [this.$slides.first()]); // Select first bullet if bullets are present

        if (this.options.bullets) {
          this._updateBullets(0);
        }
      }
    }
    /**
    * Changes the current slide to a new one.
    * @function
    * @param {Boolean} isLTR - if true the slide moves from right to left, if false the slide moves from left to right.
    * @param {jQuery} chosenSlide - the jQuery element of the slide to show next, if one is selected.
    * @param {Number} idx - the index of the new slide in its collection, if one chosen.
    * @fires Orbit#slidechange
    */

  }, {
    key: "changeSlide",
    value: function changeSlide(isLTR, chosenSlide, idx) {
      if (!this.$slides) {
        return;
      } // Don't freak out if we're in the middle of cleanup


      var $curSlide = this.$slides.filter('.is-active').eq(0);

      if (/mui/g.test($curSlide[0].className)) {
        return false;
      } //if the slide is currently animating, kick out of the function


      var $firstSlide = this.$slides.first(),
          $lastSlide = this.$slides.last(),
          dirIn = isLTR ? 'Right' : 'Left',
          dirOut = isLTR ? 'Left' : 'Right',
          _this = this,
          $newSlide;

      if (!chosenSlide) {
        //most of the time, this will be auto played or clicked from the navButtons.
        $newSlide = isLTR ? //if wrapping enabled, check to see if there is a `next` or `prev` sibling, if not, select the first or last slide to fill in. if wrapping not enabled, attempt to select `next` or `prev`, if there's nothing there, the function will kick out on next step. CRAZY NESTED TERNARIES!!!!!
        this.options.infiniteWrap ? $curSlide.next(".".concat(this.options.slideClass)).length ? $curSlide.next(".".concat(this.options.slideClass)) : $firstSlide : $curSlide.next(".".concat(this.options.slideClass)) : //pick next slide if moving left to right
        this.options.infiniteWrap ? $curSlide.prev(".".concat(this.options.slideClass)).length ? $curSlide.prev(".".concat(this.options.slideClass)) : $lastSlide : $curSlide.prev(".".concat(this.options.slideClass)); //pick prev slide if moving right to left
      } else {
        $newSlide = chosenSlide;
      }

      if ($newSlide.length) {
        /**
        * Triggers before the next slide starts animating in and only if a next slide has been found.
        * @event Orbit#beforeslidechange
        */
        this.$element.trigger('beforeslidechange.zf.orbit', [$curSlide, $newSlide]);

        if (this.options.bullets) {
          idx = idx || this.$slides.index($newSlide); //grab index to update bullets

          this._updateBullets(idx);
        }

        if (this.options.useMUI && !this.$element.is(':hidden')) {
          _foundation_util_motion__WEBPACK_IMPORTED_MODULE_2__["Motion"].animateIn($newSlide.addClass('is-active'), this.options["animInFrom".concat(dirIn)], function () {
            $newSlide.css({
              'display': 'block'
            }).attr('aria-live', 'polite');
          });
          _foundation_util_motion__WEBPACK_IMPORTED_MODULE_2__["Motion"].animateOut($curSlide.removeClass('is-active'), this.options["animOutTo".concat(dirOut)], function () {
            $curSlide.removeAttr('aria-live');

            if (_this.options.autoPlay && !_this.timer.isPaused) {
              _this.timer.restart();
            } //do stuff?

          });
        } else {
          $curSlide.removeClass('is-active is-in').removeAttr('aria-live').hide();
          $newSlide.addClass('is-active is-in').attr('aria-live', 'polite').show();

          if (this.options.autoPlay && !this.timer.isPaused) {
            this.timer.restart();
          }
        }
        /**
        * Triggers when the slide has finished animating in.
        * @event Orbit#slidechange
        */


        this.$element.trigger('slidechange.zf.orbit', [$newSlide]);
      }
    }
    /**
    * Updates the active state of the bullets, if displayed.
    * @function
    * @private
    * @param {Number} idx - the index of the current slide.
    */

  }, {
    key: "_updateBullets",
    value: function _updateBullets(idx) {
      var $oldBullet = this.$element.find(".".concat(this.options.boxOfBullets)).find('.is-active').removeClass('is-active').blur(),
          span = $oldBullet.find('span:last').detach(),
          $newBullet = this.$bullets.eq(idx).addClass('is-active').append(span);
    }
    /**
    * Destroys the carousel and hides the element.
    * @function
    */

  }, {
    key: "_destroy",
    value: function _destroy() {
      this.$element.off('.zf.orbit').find('*').off('.zf.orbit').end().hide();
    }
  }]);

  return Orbit;
}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_6__["Plugin"]);

Orbit.defaults = {
  /**
  * Tells the JS to look for and loadBullets.
  * @option
   * @type {boolean}
  * @default true
  */
  bullets: true,

  /**
  * Tells the JS to apply event listeners to nav buttons
  * @option
   * @type {boolean}
  * @default true
  */
  navButtons: true,

  /**
  * motion-ui animation class to apply
  * @option
   * @type {string}
  * @default 'slide-in-right'
  */
  animInFromRight: 'slide-in-right',

  /**
  * motion-ui animation class to apply
  * @option
   * @type {string}
  * @default 'slide-out-right'
  */
  animOutToRight: 'slide-out-right',

  /**
  * motion-ui animation class to apply
  * @option
   * @type {string}
  * @default 'slide-in-left'
  *
  */
  animInFromLeft: 'slide-in-left',

  /**
  * motion-ui animation class to apply
  * @option
   * @type {string}
  * @default 'slide-out-left'
  */
  animOutToLeft: 'slide-out-left',

  /**
  * Allows Orbit to automatically animate on page load.
  * @option
   * @type {boolean}
  * @default true
  */
  autoPlay: true,

  /**
  * Amount of time, in ms, between slide transitions
  * @option
   * @type {number}
  * @default 5000
  */
  timerDelay: 5000,

  /**
  * Allows Orbit to infinitely loop through the slides
  * @option
   * @type {boolean}
  * @default true
  */
  infiniteWrap: true,

  /**
  * Allows the Orbit slides to bind to swipe events for mobile, requires an additional util library
  * @option
   * @type {boolean}
  * @default true
  */
  swipe: true,

  /**
  * Allows the timing function to pause animation on hover.
  * @option
   * @type {boolean}
  * @default true
  */
  pauseOnHover: true,

  /**
  * Allows Orbit to bind keyboard events to the slider, to animate frames with arrow keys
  * @option
   * @type {boolean}
  * @default true
  */
  accessible: true,

  /**
  * Class applied to the container of Orbit
  * @option
   * @type {string}
  * @default 'orbit-container'
  */
  containerClass: 'orbit-container',

  /**
  * Class applied to individual slides.
  * @option
   * @type {string}
  * @default 'orbit-slide'
  */
  slideClass: 'orbit-slide',

  /**
  * Class applied to the bullet container. You're welcome.
  * @option
   * @type {string}
  * @default 'orbit-bullets'
  */
  boxOfBullets: 'orbit-bullets',

  /**
  * Class applied to the `next` navigation button.
  * @option
   * @type {string}
  * @default 'orbit-next'
  */
  nextClass: 'orbit-next',

  /**
  * Class applied to the `previous` navigation button.
  * @option
   * @type {string}
  * @default 'orbit-previous'
  */
  prevClass: 'orbit-previous',

  /**
  * Boolean to flag the js to use motion ui classes or not. Default to true for backwards compatibility.
  * @option
   * @type {boolean}
  * @default true
  */
  useMUI: true
};


/***/ }),

/***/ "./js/foundation.positionable.js":
/*!***************************************!*\
  !*** ./js/foundation.positionable.js ***!
  \***************************************/
/*! exports provided: Positionable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Positionable", function() { return Positionable; });
/* harmony import */ var _foundation_util_box__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./foundation.util.box */ "./js/foundation.util.box.js");
/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.core.plugin */ "./js/foundation.core.plugin.js");
/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.core.utils */ "./js/foundation.core.utils.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var POSITIONS = ['left', 'right', 'top', 'bottom'];
var VERTICAL_ALIGNMENTS = ['top', 'bottom', 'center'];
var HORIZONTAL_ALIGNMENTS = ['left', 'right', 'center'];
var ALIGNMENTS = {
  'left': VERTICAL_ALIGNMENTS,
  'right': VERTICAL_ALIGNMENTS,
  'top': HORIZONTAL_ALIGNMENTS,
  'bottom': HORIZONTAL_ALIGNMENTS
};

function nextItem(item, array) {
  var currentIdx = array.indexOf(item);

  if (currentIdx === array.length - 1) {
    return array[0];
  } else {
    return array[currentIdx + 1];
  }
}

var Positionable =
/*#__PURE__*/
function (_Plugin) {
  _inherits(Positionable, _Plugin);

  function Positionable() {
    _classCallCheck(this, Positionable);

    return _possibleConstructorReturn(this, _getPrototypeOf(Positionable).apply(this, arguments));
  }

  _createClass(Positionable, [{
    key: "_init",

    /**
     * Abstract class encapsulating the tether-like explicit positioning logic
     * including repositioning based on overlap.
     * Expects classes to define defaults for vOffset, hOffset, position,
     * alignment, allowOverlap, and allowBottomOverlap. They can do this by
     * extending the defaults, or (for now recommended due to the way docs are
     * generated) by explicitly declaring them.
     *
     **/
    value: function _init() {
      this.triedPositions = {};
      this.position = this.options.position === 'auto' ? this._getDefaultPosition() : this.options.position;
      this.alignment = this.options.alignment === 'auto' ? this._getDefaultAlignment() : this.options.alignment;
      this.originalPosition = this.position;
      this.originalAlignment = this.alignment;
    }
  }, {
    key: "_getDefaultPosition",
    value: function _getDefaultPosition() {
      return 'bottom';
    }
  }, {
    key: "_getDefaultAlignment",
    value: function _getDefaultAlignment() {
      switch (this.position) {
        case 'bottom':
        case 'top':
          return Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__["rtl"])() ? 'right' : 'left';

        case 'left':
        case 'right':
          return 'bottom';
      }
    }
    /**
     * Adjusts the positionable possible positions by iterating through alignments
     * and positions.
     * @function
     * @private
     */

  }, {
    key: "_reposition",
    value: function _reposition() {
      if (this._alignmentsExhausted(this.position)) {
        this.position = nextItem(this.position, POSITIONS);
        this.alignment = ALIGNMENTS[this.position][0];
      } else {
        this._realign();
      }
    }
    /**
     * Adjusts the dropdown pane possible positions by iterating through alignments
     * on the current position.
     * @function
     * @private
     */

  }, {
    key: "_realign",
    value: function _realign() {
      this._addTriedPosition(this.position, this.alignment);

      this.alignment = nextItem(this.alignment, ALIGNMENTS[this.position]);
    }
  }, {
    key: "_addTriedPosition",
    value: function _addTriedPosition(position, alignment) {
      this.triedPositions[position] = this.triedPositions[position] || [];
      this.triedPositions[position].push(alignment);
    }
  }, {
    key: "_positionsExhausted",
    value: function _positionsExhausted() {
      var isExhausted = true;

      for (var i = 0; i < POSITIONS.length; i++) {
        isExhausted = isExhausted && this._alignmentsExhausted(POSITIONS[i]);
      }

      return isExhausted;
    }
  }, {
    key: "_alignmentsExhausted",
    value: function _alignmentsExhausted(position) {
      return this.triedPositions[position] && this.triedPositions[position].length == ALIGNMENTS[position].length;
    } // When we're trying to center, we don't want to apply offset that's going to
    // take us just off center, so wrap around to return 0 for the appropriate
    // offset in those alignments.  TODO: Figure out if we want to make this
    // configurable behavior... it feels more intuitive, especially for tooltips, but
    // it's possible someone might actually want to start from center and then nudge
    // slightly off.

  }, {
    key: "_getVOffset",
    value: function _getVOffset() {
      return this.options.vOffset;
    }
  }, {
    key: "_getHOffset",
    value: function _getHOffset() {
      return this.options.hOffset;
    }
  }, {
    key: "_setPosition",
    value: function _setPosition($anchor, $element, $parent) {
      if ($anchor.attr('aria-expanded') === 'false') {
        return false;
      }

      var $eleDims = _foundation_util_box__WEBPACK_IMPORTED_MODULE_0__["Box"].GetDimensions($element),
          $anchorDims = _foundation_util_box__WEBPACK_IMPORTED_MODULE_0__["Box"].GetDimensions($anchor);

      if (!this.options.allowOverlap) {
        // restore original position & alignment before checking overlap
        this.position = this.originalPosition;
        this.alignment = this.originalAlignment;
      }

      $element.offset(_foundation_util_box__WEBPACK_IMPORTED_MODULE_0__["Box"].GetExplicitOffsets($element, $anchor, this.position, this.alignment, this._getVOffset(), this._getHOffset()));

      if (!this.options.allowOverlap) {
        var overlaps = {};
        var minOverlap = 100000000; // default coordinates to how we start, in case we can't figure out better

        var minCoordinates = {
          position: this.position,
          alignment: this.alignment
        };

        while (!this._positionsExhausted()) {
          var overlap = _foundation_util_box__WEBPACK_IMPORTED_MODULE_0__["Box"].OverlapArea($element, $parent, false, false, this.options.allowBottomOverlap);

          if (overlap === 0) {
            return;
          }

          if (overlap < minOverlap) {
            minOverlap = overlap;
            minCoordinates = {
              position: this.position,
              alignment: this.alignment
            };
          }

          this._reposition();

          $element.offset(_foundation_util_box__WEBPACK_IMPORTED_MODULE_0__["Box"].GetExplicitOffsets($element, $anchor, this.position, this.alignment, this._getVOffset(), this._getHOffset()));
        } // If we get through the entire loop, there was no non-overlapping
        // position available. Pick the version with least overlap.


        this.position = minCoordinates.position;
        this.alignment = minCoordinates.alignment;
        $element.offset(_foundation_util_box__WEBPACK_IMPORTED_MODULE_0__["Box"].GetExplicitOffsets($element, $anchor, this.position, this.alignment, this._getVOffset(), this._getHOffset()));
      }
    }
  }]);

  return Positionable;
}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__["Plugin"]);

Positionable.defaults = {
  /**
   * Position of positionable relative to anchor. Can be left, right, bottom, top, or auto.
   * @option
   * @type {string}
   * @default 'auto'
   */
  position: 'auto',

  /**
   * Alignment of positionable relative to anchor. Can be left, right, bottom, top, center, or auto.
   * @option
   * @type {string}
   * @default 'auto'
   */
  alignment: 'auto',

  /**
   * Allow overlap of container/window. If false, dropdown positionable first
   * try to position as defined by data-position and data-alignment, but
   * reposition if it would cause an overflow.
   * @option
   * @type {boolean}
   * @default false
   */
  allowOverlap: false,

  /**
   * Allow overlap of only the bottom of the container. This is the most common
   * behavior for dropdowns, allowing the dropdown to extend the bottom of the
   * screen but not otherwise influence or break out of the container.
   * @option
   * @type {boolean}
   * @default true
   */
  allowBottomOverlap: true,

  /**
   * Number of pixels the positionable should be separated vertically from anchor
   * @option
   * @type {number}
   * @default 0
   */
  vOffset: 0,

  /**
   * Number of pixels the positionable should be separated horizontally from anchor
   * @option
   * @type {number}
   * @default 0
   */
  hOffset: 0
};


/***/ }),

/***/ "./js/foundation.responsiveAccordionTabs.js":
/*!**************************************************!*\
  !*** ./js/foundation.responsiveAccordionTabs.js ***!
  \**************************************************/
/*! exports provided: ResponsiveAccordionTabs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponsiveAccordionTabs", function() { return ResponsiveAccordionTabs; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.util.mediaQuery */ "./js/foundation.util.mediaQuery.js");
/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.core.utils */ "./js/foundation.core.utils.js");
/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.core.plugin */ "./js/foundation.core.plugin.js");
/* harmony import */ var _foundation_accordion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation.accordion */ "./js/foundation.accordion.js");
/* harmony import */ var _foundation_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./foundation.tabs */ "./js/foundation.tabs.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






 // The plugin matches the plugin classes with these plugin instances.

var MenuPlugins = {
  tabs: {
    cssClass: 'tabs',
    plugin: _foundation_tabs__WEBPACK_IMPORTED_MODULE_5__["Tabs"]
  },
  accordion: {
    cssClass: 'accordion',
    plugin: _foundation_accordion__WEBPACK_IMPORTED_MODULE_4__["Accordion"]
  }
};
/**
 * ResponsiveAccordionTabs module.
 * @module foundation.responsiveAccordionTabs
 * @requires foundation.util.motion
 * @requires foundation.accordion
 * @requires foundation.tabs
 */

var ResponsiveAccordionTabs =
/*#__PURE__*/
function (_Plugin) {
  _inherits(ResponsiveAccordionTabs, _Plugin);

  function ResponsiveAccordionTabs() {
    _classCallCheck(this, ResponsiveAccordionTabs);

    return _possibleConstructorReturn(this, _getPrototypeOf(ResponsiveAccordionTabs).apply(this, arguments));
  }

  _createClass(ResponsiveAccordionTabs, [{
    key: "_setup",

    /**
     * Creates a new instance of a responsive accordion tabs.
     * @class
     * @name ResponsiveAccordionTabs
     * @fires ResponsiveAccordionTabs#init
     * @param {jQuery} element - jQuery object to make into Responsive Accordion Tabs.
     * @param {Object} options - Overrides to the default plugin settings.
     */
    value: function _setup(element, options) {
      this.$element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element);
      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, this.$element.data(), options);
      this.rules = this.$element.data('responsive-accordion-tabs');
      this.currentMq = null;
      this.currentPlugin = null;
      this.className = 'ResponsiveAccordionTabs'; // ie9 back compat

      if (!this.$element.attr('id')) {
        this.$element.attr('id', Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__["GetYoDigits"])(6, 'responsiveaccordiontabs'));
      }

      ;

      this._init();

      this._events();
    }
    /**
     * Initializes the Menu by parsing the classes from the 'data-responsive-accordion-tabs' attribute on the element.
     * @function
     * @private
     */

  }, {
    key: "_init",
    value: function _init() {
      _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__["MediaQuery"]._init(); // The first time an Interchange plugin is initialized, this.rules is converted from a string of "classes" to an object of rules


      if (typeof this.rules === 'string') {
        var rulesTree = {}; // Parse rules from "classes" pulled from data attribute

        var rules = this.rules.split(' '); // Iterate through every rule found

        for (var i = 0; i < rules.length; i++) {
          var rule = rules[i].split('-');
          var ruleSize = rule.length > 1 ? rule[0] : 'small';
          var rulePlugin = rule.length > 1 ? rule[1] : rule[0];

          if (MenuPlugins[rulePlugin] !== null) {
            rulesTree[ruleSize] = MenuPlugins[rulePlugin];
          }
        }

        this.rules = rulesTree;
      }

      this._getAllOptions();

      if (!jquery__WEBPACK_IMPORTED_MODULE_0___default.a.isEmptyObject(this.rules)) {
        this._checkMediaQueries();
      }
    }
  }, {
    key: "_getAllOptions",
    value: function _getAllOptions() {
      //get all defaults and options
      var _this = this;

      _this.allOptions = {};

      for (var key in MenuPlugins) {
        if (MenuPlugins.hasOwnProperty(key)) {
          var obj = MenuPlugins[key];

          try {
            var dummyPlugin = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<ul></ul>');
            var tmpPlugin = new obj.plugin(dummyPlugin, _this.options);

            for (var keyKey in tmpPlugin.options) {
              if (tmpPlugin.options.hasOwnProperty(keyKey) && keyKey !== 'zfPlugin') {
                var objObj = tmpPlugin.options[keyKey];
                _this.allOptions[keyKey] = objObj;
              }
            }

            tmpPlugin.destroy();
          } catch (e) {}
        }
      }
    }
    /**
     * Initializes events for the Menu.
     * @function
     * @private
     */

  }, {
    key: "_events",
    value: function _events() {
      this._changedZfMediaQueryHandler = this._checkMediaQueries.bind(this);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('changed.zf.mediaquery', this._changedZfMediaQueryHandler);
    }
    /**
     * Checks the current screen width against available media queries. If the media query has changed, and the plugin needed has changed, the plugins will swap out.
     * @function
     * @private
     */

  }, {
    key: "_checkMediaQueries",
    value: function _checkMediaQueries() {
      var matchedMq,
          _this = this; // Iterate through each rule and find the last matching rule


      jquery__WEBPACK_IMPORTED_MODULE_0___default.a.each(this.rules, function (key) {
        if (_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__["MediaQuery"].atLeast(key)) {
          matchedMq = key;
        }
      }); // No match? No dice

      if (!matchedMq) return; // Plugin already initialized? We good

      if (this.currentPlugin instanceof this.rules[matchedMq].plugin) return; // Remove existing plugin-specific CSS classes

      jquery__WEBPACK_IMPORTED_MODULE_0___default.a.each(MenuPlugins, function (key, value) {
        _this.$element.removeClass(value.cssClass);
      }); // Add the CSS class for the new plugin

      this.$element.addClass(this.rules[matchedMq].cssClass); // Create an instance of the new plugin

      if (this.currentPlugin) {
        //don't know why but on nested elements data zfPlugin get's lost
        if (!this.currentPlugin.$element.data('zfPlugin') && this.storezfData) this.currentPlugin.$element.data('zfPlugin', this.storezfData);
        this.currentPlugin.destroy();
      }

      this._handleMarkup(this.rules[matchedMq].cssClass);

      this.currentPlugin = new this.rules[matchedMq].plugin(this.$element, {});
      this.storezfData = this.currentPlugin.$element.data('zfPlugin');
    }
  }, {
    key: "_handleMarkup",
    value: function _handleMarkup(toSet) {
      var _this = this,
          fromString = 'accordion';

      var $panels = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-tabs-content=' + this.$element.attr('id') + ']');
      if ($panels.length) fromString = 'tabs';

      if (fromString === toSet) {
        return;
      }

      ;
      var tabsTitle = _this.allOptions.linkClass ? _this.allOptions.linkClass : 'tabs-title';
      var tabsPanel = _this.allOptions.panelClass ? _this.allOptions.panelClass : 'tabs-panel';
      this.$element.removeAttr('role');
      var $liHeads = this.$element.children('.' + tabsTitle + ',[data-accordion-item]').removeClass(tabsTitle).removeClass('accordion-item').removeAttr('data-accordion-item');
      var $liHeadsA = $liHeads.children('a').removeClass('accordion-title');

      if (fromString === 'tabs') {
        $panels = $panels.children('.' + tabsPanel).removeClass(tabsPanel).removeAttr('role').removeAttr('aria-hidden').removeAttr('aria-labelledby');
        $panels.children('a').removeAttr('role').removeAttr('aria-controls').removeAttr('aria-selected');
      } else {
        $panels = $liHeads.children('[data-tab-content]').removeClass('accordion-content');
      }

      ;
      $panels.css({
        display: '',
        visibility: ''
      });
      $liHeads.css({
        display: '',
        visibility: ''
      });

      if (toSet === 'accordion') {
        $panels.each(function (key, value) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(value).appendTo($liHeads.get(key)).addClass('accordion-content').attr('data-tab-content', '').removeClass('is-active').css({
            height: ''
          });
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-tabs-content=' + _this.$element.attr('id') + ']').after('<div id="tabs-placeholder-' + _this.$element.attr('id') + '"></div>').detach();
          $liHeads.addClass('accordion-item').attr('data-accordion-item', '');
          $liHeadsA.addClass('accordion-title');
        });
      } else if (toSet === 'tabs') {
        var $tabsContent = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-tabs-content=' + _this.$element.attr('id') + ']');
        var $placeholder = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tabs-placeholder-' + _this.$element.attr('id'));

        if ($placeholder.length) {
          $tabsContent = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div class="tabs-content"></div>').insertAfter($placeholder).attr('data-tabs-content', _this.$element.attr('id'));
          $placeholder.remove();
        } else {
          $tabsContent = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div class="tabs-content"></div>').insertAfter(_this.$element).attr('data-tabs-content', _this.$element.attr('id'));
        }

        ;
        $panels.each(function (key, value) {
          var tempValue = jquery__WEBPACK_IMPORTED_MODULE_0___default()(value).appendTo($tabsContent).addClass(tabsPanel);
          var hash = $liHeadsA.get(key).hash.slice(1);
          var id = jquery__WEBPACK_IMPORTED_MODULE_0___default()(value).attr('id') || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__["GetYoDigits"])(6, 'accordion');

          if (hash !== id) {
            if (hash !== '') {
              jquery__WEBPACK_IMPORTED_MODULE_0___default()(value).attr('id', hash);
            } else {
              hash = id;
              jquery__WEBPACK_IMPORTED_MODULE_0___default()(value).attr('id', hash);
              jquery__WEBPACK_IMPORTED_MODULE_0___default()($liHeadsA.get(key)).attr('href', jquery__WEBPACK_IMPORTED_MODULE_0___default()($liHeadsA.get(key)).attr('href').replace('#', '') + '#' + hash);
            }

            ;
          }

          ;
          var isActive = jquery__WEBPACK_IMPORTED_MODULE_0___default()($liHeads.get(key)).hasClass('is-active');

          if (isActive) {
            tempValue.addClass('is-active');
          }

          ;
        });
        $liHeads.addClass(tabsTitle);
      }

      ;
    }
    /**
     * Destroys the instance of the current plugin on this element, as well as the window resize handler that switches the plugins out.
     * @function
     */

  }, {
    key: "_destroy",
    value: function _destroy() {
      if (this.currentPlugin) this.currentPlugin.destroy();
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off('changed.zf.mediaquery', this._changedZfMediaQueryHandler);
    }
  }]);

  return ResponsiveAccordionTabs;
}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_3__["Plugin"]);

ResponsiveAccordionTabs.defaults = {};


/***/ }),

/***/ "./js/foundation.responsiveMenu.js":
/*!*****************************************!*\
  !*** ./js/foundation.responsiveMenu.js ***!
  \*****************************************/
/*! exports provided: ResponsiveMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponsiveMenu", function() { return ResponsiveMenu; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.util.mediaQuery */ "./js/foundation.util.mediaQuery.js");
/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.core.utils */ "./js/foundation.core.utils.js");
/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.core.plugin */ "./js/foundation.core.plugin.js");
/* harmony import */ var _foundation_dropdownMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation.dropdownMenu */ "./js/foundation.dropdownMenu.js");
/* harmony import */ var _foundation_drilldown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./foundation.drilldown */ "./js/foundation.drilldown.js");
/* harmony import */ var _foundation_accordionMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./foundation.accordionMenu */ "./js/foundation.accordionMenu.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var MenuPlugins = {
  dropdown: {
    cssClass: 'dropdown',
    plugin: _foundation_dropdownMenu__WEBPACK_IMPORTED_MODULE_4__["DropdownMenu"]
  },
  drilldown: {
    cssClass: 'drilldown',
    plugin: _foundation_drilldown__WEBPACK_IMPORTED_MODULE_5__["Drilldown"]
  },
  accordion: {
    cssClass: 'accordion-menu',
    plugin: _foundation_accordionMenu__WEBPACK_IMPORTED_MODULE_6__["AccordionMenu"]
  }
}; // import "foundation.util.triggers.js";

/**
 * ResponsiveMenu module.
 * @module foundation.responsiveMenu
 * @requires foundation.util.triggers
 * @requires foundation.util.mediaQuery
 */

var ResponsiveMenu =
/*#__PURE__*/
function (_Plugin) {
  _inherits(ResponsiveMenu, _Plugin);

  function ResponsiveMenu() {
    _classCallCheck(this, ResponsiveMenu);

    return _possibleConstructorReturn(this, _getPrototypeOf(ResponsiveMenu).apply(this, arguments));
  }

  _createClass(ResponsiveMenu, [{
    key: "_setup",

    /**
     * Creates a new instance of a responsive menu.
     * @class
     * @name ResponsiveMenu
     * @fires ResponsiveMenu#init
     * @param {jQuery} element - jQuery object to make into a dropdown menu.
     * @param {Object} options - Overrides to the default plugin settings.
     */
    value: function _setup(element, options) {
      this.$element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element);
      this.rules = this.$element.data('responsive-menu');
      this.currentMq = null;
      this.currentPlugin = null;
      this.className = 'ResponsiveMenu'; // ie9 back compat

      this._init();

      this._events();
    }
    /**
     * Initializes the Menu by parsing the classes from the 'data-ResponsiveMenu' attribute on the element.
     * @function
     * @private
     */

  }, {
    key: "_init",
    value: function _init() {
      _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__["MediaQuery"]._init(); // The first time an Interchange plugin is initialized, this.rules is converted from a string of "classes" to an object of rules


      if (typeof this.rules === 'string') {
        var rulesTree = {}; // Parse rules from "classes" pulled from data attribute

        var rules = this.rules.split(' '); // Iterate through every rule found

        for (var i = 0; i < rules.length; i++) {
          var rule = rules[i].split('-');
          var ruleSize = rule.length > 1 ? rule[0] : 'small';
          var rulePlugin = rule.length > 1 ? rule[1] : rule[0];

          if (MenuPlugins[rulePlugin] !== null) {
            rulesTree[ruleSize] = MenuPlugins[rulePlugin];
          }
        }

        this.rules = rulesTree;
      }

      if (!jquery__WEBPACK_IMPORTED_MODULE_0___default.a.isEmptyObject(this.rules)) {
        this._checkMediaQueries();
      } // Add data-mutate since children may need it.


      this.$element.attr('data-mutate', this.$element.attr('data-mutate') || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__["GetYoDigits"])(6, 'responsive-menu'));
    }
    /**
     * Initializes events for the Menu.
     * @function
     * @private
     */

  }, {
    key: "_events",
    value: function _events() {
      var _this = this;

      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('changed.zf.mediaquery', function () {
        _this._checkMediaQueries();
      }); // $(window).on('resize.zf.ResponsiveMenu', function() {
      //   _this._checkMediaQueries();
      // });
    }
    /**
     * Checks the current screen width against available media queries. If the media query has changed, and the plugin needed has changed, the plugins will swap out.
     * @function
     * @private
     */

  }, {
    key: "_checkMediaQueries",
    value: function _checkMediaQueries() {
      var matchedMq,
          _this = this; // Iterate through each rule and find the last matching rule


      jquery__WEBPACK_IMPORTED_MODULE_0___default.a.each(this.rules, function (key) {
        if (_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__["MediaQuery"].atLeast(key)) {
          matchedMq = key;
        }
      }); // No match? No dice

      if (!matchedMq) return; // Plugin already initialized? We good

      if (this.currentPlugin instanceof this.rules[matchedMq].plugin) return; // Remove existing plugin-specific CSS classes

      jquery__WEBPACK_IMPORTED_MODULE_0___default.a.each(MenuPlugins, function (key, value) {
        _this.$element.removeClass(value.cssClass);
      }); // Add the CSS class for the new plugin

      this.$element.addClass(this.rules[matchedMq].cssClass); // Create an instance of the new plugin

      if (this.currentPlugin) this.currentPlugin.destroy();
      this.currentPlugin = new this.rules[matchedMq].plugin(this.$element, {});
    }
    /**
     * Destroys the instance of the current plugin on this element, as well as the window resize handler that switches the plugins out.
     * @function
     */

  }, {
    key: "_destroy",
    value: function _destroy() {
      this.currentPlugin.destroy();
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off('.zf.ResponsiveMenu');
    }
  }]);

  return ResponsiveMenu;
}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_3__["Plugin"]);

ResponsiveMenu.defaults = {};


/***/ }),

/***/ "./js/foundation.responsiveToggle.js":
/*!*******************************************!*\
  !*** ./js/foundation.responsiveToggle.js ***!
  \*******************************************/
/*! exports provided: ResponsiveToggle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponsiveToggle", function() { return ResponsiveToggle; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.util.mediaQuery */ "./js/foundation.util.mediaQuery.js");
/* harmony import */ var _foundation_util_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.util.motion */ "./js/foundation.util.motion.js");
/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.core.plugin */ "./js/foundation.core.plugin.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





/**
 * ResponsiveToggle module.
 * @module foundation.responsiveToggle
 * @requires foundation.util.mediaQuery
 * @requires foundation.util.motion
 */

var ResponsiveToggle =
/*#__PURE__*/
function (_Plugin) {
  _inherits(ResponsiveToggle, _Plugin);

  function ResponsiveToggle() {
    _classCallCheck(this, ResponsiveToggle);

    return _possibleConstructorReturn(this, _getPrototypeOf(ResponsiveToggle).apply(this, arguments));
  }

  _createClass(ResponsiveToggle, [{
    key: "_setup",

    /**
     * Creates a new instance of Tab Bar.
     * @class
     * @name ResponsiveToggle
     * @fires ResponsiveToggle#init
     * @param {jQuery} element - jQuery object to attach tab bar functionality to.
     * @param {Object} options - Overrides to the default plugin settings.
     */
    value: function _setup(element, options) {
      this.$element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element);
      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, ResponsiveToggle.defaults, this.$element.data(), options);
      this.className = 'ResponsiveToggle'; // ie9 back compat

      this._init();

      this._events();
    }
    /**
     * Initializes the tab bar by finding the target element, toggling element, and running update().
     * @function
     * @private
     */

  }, {
    key: "_init",
    value: function _init() {
      _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__["MediaQuery"]._init();

      var targetID = this.$element.data('responsive-toggle');

      if (!targetID) {
        console.error('Your tab bar needs an ID of a Menu as the value of data-tab-bar.');
      }

      this.$targetMenu = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat(targetID));
      this.$toggler = this.$element.find('[data-toggle]').filter(function () {
        var target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('toggle');
        return target === targetID || target === "";
      });
      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, this.options, this.$targetMenu.data()); // If they were set, parse the animation classes

      if (this.options.animate) {
        var input = this.options.animate.split(' ');
        this.animationIn = input[0];
        this.animationOut = input[1] || null;
      }

      this._update();
    }
    /**
     * Adds necessary event handlers for the tab bar to work.
     * @function
     * @private
     */

  }, {
    key: "_events",
    value: function _events() {
      var _this = this;

      this._updateMqHandler = this._update.bind(this);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('changed.zf.mediaquery', this._updateMqHandler);
      this.$toggler.on('click.zf.responsiveToggle', this.toggleMenu.bind(this));
    }
    /**
     * Checks the current media query to determine if the tab bar should be visible or hidden.
     * @function
     * @private
     */

  }, {
    key: "_update",
    value: function _update() {
      // Mobile
      if (!_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__["MediaQuery"].atLeast(this.options.hideFor)) {
        this.$element.show();
        this.$targetMenu.hide();
      } // Desktop
      else {
          this.$element.hide();
          this.$targetMenu.show();
        }
    }
    /**
     * Toggles the element attached to the tab bar. The toggle only happens if the screen is small enough to allow it.
     * @function
     * @fires ResponsiveToggle#toggled
     */

  }, {
    key: "toggleMenu",
    value: function toggleMenu() {
      var _this2 = this;

      if (!_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__["MediaQuery"].atLeast(this.options.hideFor)) {
        /**
         * Fires when the element attached to the tab bar toggles.
         * @event ResponsiveToggle#toggled
         */
        if (this.options.animate) {
          if (this.$targetMenu.is(':hidden')) {
            _foundation_util_motion__WEBPACK_IMPORTED_MODULE_2__["Motion"].animateIn(this.$targetMenu, this.animationIn, function () {
              _this2.$element.trigger('toggled.zf.responsiveToggle');

              _this2.$targetMenu.find('[data-mutate]').triggerHandler('mutateme.zf.trigger');
            });
          } else {
            _foundation_util_motion__WEBPACK_IMPORTED_MODULE_2__["Motion"].animateOut(this.$targetMenu, this.animationOut, function () {
              _this2.$element.trigger('toggled.zf.responsiveToggle');
            });
          }
        } else {
          this.$targetMenu.toggle(0);
          this.$targetMenu.find('[data-mutate]').trigger('mutateme.zf.trigger');
          this.$element.trigger('toggled.zf.responsiveToggle');
        }
      }
    }
  }, {
    key: "_destroy",
    value: function _destroy() {
      this.$element.off('.zf.responsiveToggle');
      this.$toggler.off('.zf.responsiveToggle');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off('changed.zf.mediaquery', this._updateMqHandler);
    }
  }]);

  return ResponsiveToggle;
}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_3__["Plugin"]);

ResponsiveToggle.defaults = {
  /**
   * The breakpoint after which the menu is always shown, and the tab bar is hidden.
   * @option
   * @type {string}
   * @default 'medium'
   */
  hideFor: 'medium',

  /**
   * To decide if the toggle should be animated or not.
   * @option
   * @type {boolean}
   * @default false
   */
  animate: false
};


/***/ }),

/***/ "./js/foundation.reveal.js":
/*!*********************************!*\
  !*** ./js/foundation.reveal.js ***!
  \*********************************/
/*! exports provided: Reveal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Reveal", function() { return Reveal; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.core.utils */ "./js/foundation.core.utils.js");
/* harmony import */ var _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.util.keyboard */ "./js/foundation.util.keyboard.js");
/* harmony import */ var _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.util.mediaQuery */ "./js/foundation.util.mediaQuery.js");
/* harmony import */ var _foundation_util_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation.util.motion */ "./js/foundation.util.motion.js");
/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./foundation.core.plugin */ "./js/foundation.core.plugin.js");
/* harmony import */ var _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./foundation.util.triggers */ "./js/foundation.util.triggers.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








/**
 * Reveal module.
 * @module foundation.reveal
 * @requires foundation.util.keyboard
 * @requires foundation.util.triggers
 * @requires foundation.util.mediaQuery
 * @requires foundation.util.motion if using animations
 */

var Reveal =
/*#__PURE__*/
function (_Plugin) {
  _inherits(Reveal, _Plugin);

  function Reveal() {
    _classCallCheck(this, Reveal);

    return _possibleConstructorReturn(this, _getPrototypeOf(Reveal).apply(this, arguments));
  }

  _createClass(Reveal, [{
    key: "_setup",

    /**
     * Creates a new instance of Reveal.
     * @class
     * @name Reveal
     * @param {jQuery} element - jQuery object to use for the modal.
     * @param {Object} options - optional parameters.
     */
    value: function _setup(element, options) {
      this.$element = element;
      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, Reveal.defaults, this.$element.data(), options);
      this.className = 'Reveal'; // ie9 back compat

      this._init(); // Triggers init is idempotent, just need to make sure it is initialized


      _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_6__["Triggers"].init(jquery__WEBPACK_IMPORTED_MODULE_0___default.a);
      _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__["Keyboard"].register('Reveal', {
        'ESCAPE': 'close'
      });
    }
    /**
     * Initializes the modal by adding the overlay and close buttons, (if selected).
     * @private
     */

  }, {
    key: "_init",
    value: function _init() {
      var _this2 = this;

      _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_3__["MediaQuery"]._init();

      this.id = this.$element.attr('id');
      this.isActive = false;
      this.cached = {
        mq: _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_3__["MediaQuery"].current
      };
      this.$anchor = jquery__WEBPACK_IMPORTED_MODULE_0___default()("[data-open=\"".concat(this.id, "\"]")).length ? jquery__WEBPACK_IMPORTED_MODULE_0___default()("[data-open=\"".concat(this.id, "\"]")) : jquery__WEBPACK_IMPORTED_MODULE_0___default()("[data-toggle=\"".concat(this.id, "\"]"));
      this.$anchor.attr({
        'aria-controls': this.id,
        'aria-haspopup': true,
        'tabindex': 0
      });

      if (this.options.fullScreen || this.$element.hasClass('full')) {
        this.options.fullScreen = true;
        this.options.overlay = false;
      }

      if (this.options.overlay && !this.$overlay) {
        this.$overlay = this._makeOverlay(this.id);
      }

      this.$element.attr({
        'role': 'dialog',
        'aria-hidden': true,
        'data-yeti-box': this.id,
        'data-resize': this.id
      });

      if (this.$overlay) {
        this.$element.detach().appendTo(this.$overlay);
      } else {
        this.$element.detach().appendTo(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.options.appendTo));
        this.$element.addClass('without-overlay');
      }

      this._events();

      if (this.options.deepLink && window.location.hash === "#".concat(this.id)) {
        this.onLoadListener = Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__["onLoad"])(jquery__WEBPACK_IMPORTED_MODULE_0___default()(window), function () {
          return _this2.open();
        });
      }
    }
    /**
     * Creates an overlay div to display behind the modal.
     * @private
     */

  }, {
    key: "_makeOverlay",
    value: function _makeOverlay() {
      var additionalOverlayClasses = '';

      if (this.options.additionalOverlayClasses) {
        additionalOverlayClasses = ' ' + this.options.additionalOverlayClasses;
      }

      return jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div></div>').addClass('reveal-overlay' + additionalOverlayClasses).appendTo(this.options.appendTo);
    }
    /**
     * Updates position of modal
     * TODO:  Figure out if we actually need to cache these values or if it doesn't matter
     * @private
     */

  }, {
    key: "_updatePosition",
    value: function _updatePosition() {
      var width = this.$element.outerWidth();
      var outerWidth = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width();
      var height = this.$element.outerHeight();
      var outerHeight = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).height();
      var left,
          top = null;

      if (this.options.hOffset === 'auto') {
        left = parseInt((outerWidth - width) / 2, 10);
      } else {
        left = parseInt(this.options.hOffset, 10);
      }

      if (this.options.vOffset === 'auto') {
        if (height > outerHeight) {
          top = parseInt(Math.min(100, outerHeight / 10), 10);
        } else {
          top = parseInt((outerHeight - height) / 4, 10);
        }
      } else if (this.options.vOffset !== null) {
        top = parseInt(this.options.vOffset, 10);
      }

      if (top !== null) {
        this.$element.css({
          top: top + 'px'
        });
      } // only worry about left if we don't have an overlay or we have a horizontal offset,
      // otherwise we're perfectly in the middle


      if (!this.$overlay || this.options.hOffset !== 'auto') {
        this.$element.css({
          left: left + 'px'
        });
        this.$element.css({
          margin: '0px'
        });
      }
    }
    /**
     * Adds event handlers for the modal.
     * @private
     */

  }, {
    key: "_events",
    value: function _events() {
      var _this3 = this;

      var _this = this;

      this.$element.on({
        'open.zf.trigger': this.open.bind(this),
        'close.zf.trigger': function closeZfTrigger(event, $element) {
          if (event.target === _this.$element[0] || jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.target).parents('[data-closable]')[0] === $element) {
            // only close reveal when it's explicitly called
            return _this3.close.apply(_this3);
          }
        },
        'toggle.zf.trigger': this.toggle.bind(this),
        'resizeme.zf.trigger': function resizemeZfTrigger() {
          _this._updatePosition();
        }
      });

      if (this.options.closeOnClick && this.options.overlay) {
        this.$overlay.off('.zf.reveal').on('click.zf.reveal', function (e) {
          if (e.target === _this.$element[0] || jquery__WEBPACK_IMPORTED_MODULE_0___default.a.contains(_this.$element[0], e.target) || !jquery__WEBPACK_IMPORTED_MODULE_0___default.a.contains(document, e.target)) {
            return;
          }

          _this.close();
        });
      }

      if (this.options.deepLink) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on("hashchange.zf.reveal:".concat(this.id), this._handleState.bind(this));
      }
    }
    /**
     * Handles modal methods on back/forward button clicks or any other event that triggers hashchange.
     * @private
     */

  }, {
    key: "_handleState",
    value: function _handleState(e) {
      if (window.location.hash === '#' + this.id && !this.isActive) {
        this.open();
      } else {
        this.close();
      }
    }
    /**
    * Disables the scroll when Reveal is shown to prevent the background from shifting
    * @param {number} scrollTop - Scroll to visually apply, window current scroll by default
    */

  }, {
    key: "_disableScroll",
    value: function _disableScroll(scrollTop) {
      scrollTop = scrollTop || jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop();

      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).height() > jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).height()) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("html").css("top", -scrollTop);
      }
    }
    /**
    * Reenables the scroll when Reveal closes
    * @param {number} scrollTop - Scroll to restore, html "top" property by default (as set by `_disableScroll`)
    */

  }, {
    key: "_enableScroll",
    value: function _enableScroll(scrollTop) {
      scrollTop = scrollTop || parseInt(jquery__WEBPACK_IMPORTED_MODULE_0___default()("html").css("top"));

      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).height() > jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).height()) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("html").css("top", "");
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop(-scrollTop);
      }
    }
    /**
     * Opens the modal controlled by `this.$anchor`, and closes all others by default.
     * @function
     * @fires Reveal#closeme
     * @fires Reveal#open
     */

  }, {
    key: "open",
    value: function open() {
      var _this4 = this;

      // either update or replace browser history
      var hash = "#".concat(this.id);

      if (this.options.deepLink && window.location.hash !== hash) {
        if (window.history.pushState) {
          if (this.options.updateHistory) {
            window.history.pushState({}, '', hash);
          } else {
            window.history.replaceState({}, '', hash);
          }
        } else {
          window.location.hash = hash;
        }
      } // Remember anchor that opened it to set focus back later, have general anchors as fallback


      this.$activeAnchor = jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.activeElement).is(this.$anchor) ? jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.activeElement) : this.$anchor;
      this.isActive = true; // Make elements invisible, but remove display: none so we can get size and positioning

      this.$element.css({
        'visibility': 'hidden'
      }).show().scrollTop(0);

      if (this.options.overlay) {
        this.$overlay.css({
          'visibility': 'hidden'
        }).show();
      }

      this._updatePosition();

      this.$element.hide().css({
        'visibility': ''
      });

      if (this.$overlay) {
        this.$overlay.css({
          'visibility': ''
        }).hide();

        if (this.$element.hasClass('fast')) {
          this.$overlay.addClass('fast');
        } else if (this.$element.hasClass('slow')) {
          this.$overlay.addClass('slow');
        }
      }

      if (!this.options.multipleOpened) {
        /**
         * Fires immediately before the modal opens.
         * Closes any other modals that are currently open
         * @event Reveal#closeme
         */
        this.$element.trigger('closeme.zf.reveal', this.id);
      }

      this._disableScroll();

      var _this = this; // Motion UI method of reveal


      if (this.options.animationIn) {
        var afterAnimation = function afterAnimation() {
          _this.$element.attr({
            'aria-hidden': false,
            'tabindex': -1
          }).focus();

          _this._addGlobalClasses();

          _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__["Keyboard"].trapFocus(_this.$element);
        };

        if (this.options.overlay) {
          _foundation_util_motion__WEBPACK_IMPORTED_MODULE_4__["Motion"].animateIn(this.$overlay, 'fade-in');
        }

        _foundation_util_motion__WEBPACK_IMPORTED_MODULE_4__["Motion"].animateIn(this.$element, this.options.animationIn, function () {
          if (_this4.$element) {
            // protect against object having been removed
            _this4.focusableElements = _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__["Keyboard"].findFocusable(_this4.$element);
            afterAnimation();
          }
        });
      } // jQuery method of reveal
      else {
          if (this.options.overlay) {
            this.$overlay.show(0);
          }

          this.$element.show(this.options.showDelay);
        } // handle accessibility


      this.$element.attr({
        'aria-hidden': false,
        'tabindex': -1
      }).focus();
      _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__["Keyboard"].trapFocus(this.$element);

      this._addGlobalClasses();

      this._addGlobalListeners();
      /**
       * Fires when the modal has successfully opened.
       * @event Reveal#open
       */


      this.$element.trigger('open.zf.reveal');
    }
    /**
     * Adds classes and listeners on document required by open modals.
     *
     * The following classes are added and updated:
     * - `.is-reveal-open` - Prevents the scroll on document
     * - `.zf-has-scroll`  - Displays a disabled scrollbar on document if required like if the
     *                       scroll was not disabled. This prevent a "shift" of the page content due
     *                       the scrollbar disappearing when the modal opens.
     *
     * @private
     */

  }, {
    key: "_addGlobalClasses",
    value: function _addGlobalClasses() {
      var updateScrollbarClass = function updateScrollbarClass() {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').toggleClass('zf-has-scroll', !!(jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).height() > jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).height()));
      };

      this.$element.on('resizeme.zf.trigger.revealScrollbarListener', function () {
        return updateScrollbarClass();
      });
      updateScrollbarClass();
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').addClass('is-reveal-open');
    }
    /**
     * Removes classes and listeners on document that were required by open modals.
     * @private
     */

  }, {
    key: "_removeGlobalClasses",
    value: function _removeGlobalClasses() {
      this.$element.off('resizeme.zf.trigger.revealScrollbarListener');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').removeClass('is-reveal-open');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').removeClass('zf-has-scroll');
    }
    /**
     * Adds extra event handlers for the body and window if necessary.
     * @private
     */

  }, {
    key: "_addGlobalListeners",
    value: function _addGlobalListeners() {
      var _this = this;

      if (!this.$element) {
        return;
      } // If we're in the middle of cleanup, don't freak out


      this.focusableElements = _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__["Keyboard"].findFocusable(this.$element);

      if (!this.options.overlay && this.options.closeOnClick && !this.options.fullScreen) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').on('click.zf.reveal', function (e) {
          if (e.target === _this.$element[0] || jquery__WEBPACK_IMPORTED_MODULE_0___default.a.contains(_this.$element[0], e.target) || !jquery__WEBPACK_IMPORTED_MODULE_0___default.a.contains(document, e.target)) {
            return;
          }

          _this.close();
        });
      }

      if (this.options.closeOnEsc) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('keydown.zf.reveal', function (e) {
          _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__["Keyboard"].handleKey(e, 'Reveal', {
            close: function close() {
              if (_this.options.closeOnEsc) {
                _this.close();
              }
            }
          });
        });
      }
    }
    /**
     * Closes the modal.
     * @function
     * @fires Reveal#closed
     */

  }, {
    key: "close",
    value: function close() {
      if (!this.isActive || !this.$element.is(':visible')) {
        return false;
      }

      var _this = this; // Motion UI method of hiding


      if (this.options.animationOut) {
        if (this.options.overlay) {
          _foundation_util_motion__WEBPACK_IMPORTED_MODULE_4__["Motion"].animateOut(this.$overlay, 'fade-out');
        }

        _foundation_util_motion__WEBPACK_IMPORTED_MODULE_4__["Motion"].animateOut(this.$element, this.options.animationOut, finishUp);
      } // jQuery method of hiding
      else {
          this.$element.hide(this.options.hideDelay);

          if (this.options.overlay) {
            this.$overlay.hide(0, finishUp);
          } else {
            finishUp();
          }
        } // Conditionals to remove extra event listeners added on open


      if (this.options.closeOnEsc) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off('keydown.zf.reveal');
      }

      if (!this.options.overlay && this.options.closeOnClick) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').off('click.zf.reveal');
      }

      this.$element.off('keydown.zf.reveal');

      function finishUp() {
        // Get the current top before the modal is closed and restore the scroll after.
        // TODO: use component properties instead of HTML properties
        // See https://github.com/zurb/foundation-sites/pull/10786
        var scrollTop = parseInt(jquery__WEBPACK_IMPORTED_MODULE_0___default()("html").css("top"));

        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.reveal:visible').length === 0) {
          _this._removeGlobalClasses(); // also remove .is-reveal-open from the html element when there is no opened reveal

        }

        _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__["Keyboard"].releaseFocus(_this.$element);

        _this.$element.attr('aria-hidden', true);

        _this._enableScroll(scrollTop);
        /**
        * Fires when the modal is done closing.
        * @event Reveal#closed
        */


        _this.$element.trigger('closed.zf.reveal');
      }
      /**
      * Resets the modal content
      * This prevents a running video to keep going in the background
      */


      if (this.options.resetOnClose) {
        this.$element.html(this.$element.html());
      }

      this.isActive = false; // If deepLink and we did not switched to an other modal...

      if (_this.options.deepLink && window.location.hash === "#".concat(this.id)) {
        // Remove the history hash
        if (window.history.replaceState) {
          var urlWithoutHash = window.location.pathname + window.location.search;

          if (this.options.updateHistory) {
            window.history.pushState({}, '', urlWithoutHash); // remove the hash
          } else {
            window.history.replaceState('', document.title, urlWithoutHash);
          }
        } else {
          window.location.hash = '';
        }
      }

      this.$activeAnchor.focus();
    }
    /**
     * Toggles the open/closed state of a modal.
     * @function
     */

  }, {
    key: "toggle",
    value: function toggle() {
      if (this.isActive) {
        this.close();
      } else {
        this.open();
      }
    }
  }, {
    key: "_destroy",

    /**
     * Destroys an instance of a modal.
     * @function
     */
    value: function _destroy() {
      if (this.options.overlay) {
        this.$element.appendTo(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.options.appendTo)); // move $element outside of $overlay to prevent error unregisterPlugin()

        this.$overlay.hide().off().remove();
      }

      this.$element.hide().off();
      this.$anchor.off('.zf');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(".zf.reveal:".concat(this.id));
      if (this.onLoadListener) jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(this.onLoadListener);

      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.reveal:visible').length === 0) {
        this._removeGlobalClasses(); // also remove .is-reveal-open from the html element when there is no opened reveal

      }
    }
  }]);

  return Reveal;
}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_5__["Plugin"]);

Reveal.defaults = {
  /**
   * Motion-UI class to use for animated elements. If none used, defaults to simple show/hide.
   * @option
   * @type {string}
   * @default ''
   */
  animationIn: '',

  /**
   * Motion-UI class to use for animated elements. If none used, defaults to simple show/hide.
   * @option
   * @type {string}
   * @default ''
   */
  animationOut: '',

  /**
   * Time, in ms, to delay the opening of a modal after a click if no animation used.
   * @option
   * @type {number}
   * @default 0
   */
  showDelay: 0,

  /**
   * Time, in ms, to delay the closing of a modal after a click if no animation used.
   * @option
   * @type {number}
   * @default 0
   */
  hideDelay: 0,

  /**
   * Allows a click on the body/overlay to close the modal.
   * @option
   * @type {boolean}
   * @default true
   */
  closeOnClick: true,

  /**
   * Allows the modal to close if the user presses the `ESCAPE` key.
   * @option
   * @type {boolean}
   * @default true
   */
  closeOnEsc: true,

  /**
   * If true, allows multiple modals to be displayed at once.
   * @option
   * @type {boolean}
   * @default false
   */
  multipleOpened: false,

  /**
   * Distance, in pixels, the modal should push down from the top of the screen.
   * @option
   * @type {number|string}
   * @default auto
   */
  vOffset: 'auto',

  /**
   * Distance, in pixels, the modal should push in from the side of the screen.
   * @option
   * @type {number|string}
   * @default auto
   */
  hOffset: 'auto',

  /**
   * Allows the modal to be fullscreen, completely blocking out the rest of the view. JS checks for this as well.
   * @option
   * @type {boolean}
   * @default false
   */
  fullScreen: false,

  /**
   * Allows the modal to generate an overlay div, which will cover the view when modal opens.
   * @option
   * @type {boolean}
   * @default true
   */
  overlay: true,

  /**
   * Allows the modal to remove and reinject markup on close. Should be true if using video elements w/o using provider's api, otherwise, videos will continue to play in the background.
   * @option
   * @type {boolean}
   * @default false
   */
  resetOnClose: false,

  /**
   * Link the location hash to the modal.
   * Set the location hash when the modal is opened/closed, and open/close the modal when the location changes.
   * @option
   * @type {boolean}
   * @default false
   */
  deepLink: false,

  /**
   * If `deepLink` is enabled, update the browser history with the open modal
   * @option
   * @default false
   */
  updateHistory: false,

  /**
  * Allows the modal to append to custom div.
  * @option
  * @type {string}
  * @default "body"
  */
  appendTo: "body",

  /**
   * Allows adding additional class names to the reveal overlay.
   * @option
   * @type {string}
   * @default ''
   */
  additionalOverlayClasses: ''
};


/***/ }),

/***/ "./js/foundation.slider.js":
/*!*********************************!*\
  !*** ./js/foundation.slider.js ***!
  \*********************************/
/*! exports provided: Slider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slider", function() { return Slider; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.util.keyboard */ "./js/foundation.util.keyboard.js");
/* harmony import */ var _foundation_util_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.util.motion */ "./js/foundation.util.motion.js");
/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.core.utils */ "./js/foundation.core.utils.js");
/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation.core.plugin */ "./js/foundation.core.plugin.js");
/* harmony import */ var _foundation_util_touch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./foundation.util.touch */ "./js/foundation.util.touch.js");
/* harmony import */ var _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./foundation.util.triggers */ "./js/foundation.util.triggers.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








/**
 * Slider module.
 * @module foundation.slider
 * @requires foundation.util.motion
 * @requires foundation.util.triggers
 * @requires foundation.util.keyboard
 * @requires foundation.util.touch
 */

var Slider =
/*#__PURE__*/
function (_Plugin) {
  _inherits(Slider, _Plugin);

  function Slider() {
    _classCallCheck(this, Slider);

    return _possibleConstructorReturn(this, _getPrototypeOf(Slider).apply(this, arguments));
  }

  _createClass(Slider, [{
    key: "_setup",

    /**
     * Creates a new instance of a slider control.
     * @class
     * @name Slider
     * @param {jQuery} element - jQuery object to make into a slider control.
     * @param {Object} options - Overrides to the default plugin settings.
     */
    value: function _setup(element, options) {
      this.$element = element;
      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, Slider.defaults, this.$element.data(), options);
      this.className = 'Slider'; // ie9 back compat
      // Touch and Triggers inits are idempotent, we just need to make sure it's initialied.

      _foundation_util_touch__WEBPACK_IMPORTED_MODULE_5__["Touch"].init(jquery__WEBPACK_IMPORTED_MODULE_0___default.a);
      _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_6__["Triggers"].init(jquery__WEBPACK_IMPORTED_MODULE_0___default.a);

      this._init();

      _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__["Keyboard"].register('Slider', {
        'ltr': {
          'ARROW_RIGHT': 'increase',
          'ARROW_UP': 'increase',
          'ARROW_DOWN': 'decrease',
          'ARROW_LEFT': 'decrease',
          'SHIFT_ARROW_RIGHT': 'increase_fast',
          'SHIFT_ARROW_UP': 'increase_fast',
          'SHIFT_ARROW_DOWN': 'decrease_fast',
          'SHIFT_ARROW_LEFT': 'decrease_fast',
          'HOME': 'min',
          'END': 'max'
        },
        'rtl': {
          'ARROW_LEFT': 'increase',
          'ARROW_RIGHT': 'decrease',
          'SHIFT_ARROW_LEFT': 'increase_fast',
          'SHIFT_ARROW_RIGHT': 'decrease_fast'
        }
      });
    }
    /**
     * Initilizes the plugin by reading/setting attributes, creating collections and setting the initial position of the handle(s).
     * @function
     * @private
     */

  }, {
    key: "_init",
    value: function _init() {
      this.inputs = this.$element.find('input');
      this.handles = this.$element.find('[data-slider-handle]');
      this.$handle = this.handles.eq(0);
      this.$input = this.inputs.length ? this.inputs.eq(0) : jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat(this.$handle.attr('aria-controls')));
      this.$fill = this.$element.find('[data-slider-fill]').css(this.options.vertical ? 'height' : 'width', 0);

      var isDbl = false,
          _this = this;

      if (this.options.disabled || this.$element.hasClass(this.options.disabledClass)) {
        this.options.disabled = true;
        this.$element.addClass(this.options.disabledClass);
      }

      if (!this.inputs.length) {
        this.inputs = jquery__WEBPACK_IMPORTED_MODULE_0___default()().add(this.$input);
        this.options.binding = true;
      }

      this._setInitAttr(0);

      if (this.handles[1]) {
        this.options.doubleSided = true;
        this.$handle2 = this.handles.eq(1);
        this.$input2 = this.inputs.length > 1 ? this.inputs.eq(1) : jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat(this.$handle2.attr('aria-controls')));

        if (!this.inputs[1]) {
          this.inputs = this.inputs.add(this.$input2);
        }

        isDbl = true; // this.$handle.triggerHandler('click.zf.slider');

        this._setInitAttr(1);
      } // Set handle positions


      this.setHandles();

      this._events();
    }
  }, {
    key: "setHandles",
    value: function setHandles() {
      var _this2 = this;

      if (this.handles[1]) {
        this._setHandlePos(this.$handle, this.inputs.eq(0).val(), true, function () {
          _this2._setHandlePos(_this2.$handle2, _this2.inputs.eq(1).val(), true);
        });
      } else {
        this._setHandlePos(this.$handle, this.inputs.eq(0).val(), true);
      }
    }
  }, {
    key: "_reflow",
    value: function _reflow() {
      this.setHandles();
    }
    /**
    * @function
    * @private
    * @param {Number} value - floating point (the value) to be transformed using to a relative position on the slider (the inverse of _value)
    */

  }, {
    key: "_pctOfBar",
    value: function _pctOfBar(value) {
      var pctOfBar = percent(value - this.options.start, this.options.end - this.options.start);

      switch (this.options.positionValueFunction) {
        case "pow":
          pctOfBar = this._logTransform(pctOfBar);
          break;

        case "log":
          pctOfBar = this._powTransform(pctOfBar);
          break;
      }

      return pctOfBar.toFixed(2);
    }
    /**
    * @function
    * @private
    * @param {Number} pctOfBar - floating point, the relative position of the slider (typically between 0-1) to be transformed to a value
    */

  }, {
    key: "_value",
    value: function _value(pctOfBar) {
      switch (this.options.positionValueFunction) {
        case "pow":
          pctOfBar = this._powTransform(pctOfBar);
          break;

        case "log":
          pctOfBar = this._logTransform(pctOfBar);
          break;
      }

      var value = (this.options.end - this.options.start) * pctOfBar + parseFloat(this.options.start);
      return value;
    }
    /**
    * @function
    * @private
    * @param {Number} value - floating point (typically between 0-1) to be transformed using the log function
    */

  }, {
    key: "_logTransform",
    value: function _logTransform(value) {
      return baseLog(this.options.nonLinearBase, value * (this.options.nonLinearBase - 1) + 1);
    }
    /**
    * @function
    * @private
    * @param {Number} value - floating point (typically between 0-1) to be transformed using the power function
    */

  }, {
    key: "_powTransform",
    value: function _powTransform(value) {
      return (Math.pow(this.options.nonLinearBase, value) - 1) / (this.options.nonLinearBase - 1);
    }
    /**
     * Sets the position of the selected handle and fill bar.
     * @function
     * @private
     * @param {jQuery} $hndl - the selected handle to move.
     * @param {Number} location - floating point between the start and end values of the slider bar.
     * @param {Function} cb - callback function to fire on completion.
     * @fires Slider#moved
     * @fires Slider#changed
     */

  }, {
    key: "_setHandlePos",
    value: function _setHandlePos($hndl, location, noInvert, cb) {
      // don't move if the slider has been disabled since its initialization
      if (this.$element.hasClass(this.options.disabledClass)) {
        return;
      } //might need to alter that slightly for bars that will have odd number selections.


      location = parseFloat(location); //on input change events, convert string to number...grumble.
      // prevent slider from running out of bounds, if value exceeds the limits set through options, override the value to min/max

      if (location < this.options.start) {
        location = this.options.start;
      } else if (location > this.options.end) {
        location = this.options.end;
      }

      var isDbl = this.options.doubleSided; //this is for single-handled vertical sliders, it adjusts the value to account for the slider being "upside-down"
      //for click and drag events, it's weird due to the scale(-1, 1) css property

      if (this.options.vertical && !noInvert) {
        location = this.options.end - location;
      }

      if (isDbl) {
        //this block is to prevent 2 handles from crossing eachother. Could/should be improved.
        if (this.handles.index($hndl) === 0) {
          var h2Val = parseFloat(this.$handle2.attr('aria-valuenow'));
          location = location >= h2Val ? h2Val - this.options.step : location;
        } else {
          var h1Val = parseFloat(this.$handle.attr('aria-valuenow'));
          location = location <= h1Val ? h1Val + this.options.step : location;
        }
      }

      var _this = this,
          vert = this.options.vertical,
          hOrW = vert ? 'height' : 'width',
          lOrT = vert ? 'top' : 'left',
          handleDim = $hndl[0].getBoundingClientRect()[hOrW],
          elemDim = this.$element[0].getBoundingClientRect()[hOrW],
          //percentage of bar min/max value based on click or drag point
      pctOfBar = this._pctOfBar(location),
          //number of actual pixels to shift the handle, based on the percentage obtained above
      pxToMove = (elemDim - handleDim) * pctOfBar,
          //percentage of bar to shift the handle
      movement = (percent(pxToMove, elemDim) * 100).toFixed(this.options.decimal); //fixing the decimal value for the location number, is passed to other methods as a fixed floating-point value


      location = parseFloat(location.toFixed(this.options.decimal)); // declare empty object for css adjustments, only used with 2 handled-sliders

      var css = {};

      this._setValues($hndl, location); // TODO update to calculate based on values set to respective inputs??


      if (isDbl) {
        var isLeftHndl = this.handles.index($hndl) === 0,
            //empty variable, will be used for min-height/width for fill bar
        dim,
            //percentage w/h of the handle compared to the slider bar
        handlePct = ~~(percent(handleDim, elemDim) * 100); //if left handle, the math is slightly different than if it's the right handle, and the left/top property needs to be changed for the fill bar

        if (isLeftHndl) {
          //left or top percentage value to apply to the fill bar.
          css[lOrT] = "".concat(movement, "%"); //calculate the new min-height/width for the fill bar.

          dim = parseFloat(this.$handle2[0].style[lOrT]) - movement + handlePct; //this callback is necessary to prevent errors and allow the proper placement and initialization of a 2-handled slider
          //plus, it means we don't care if 'dim' isNaN on init, it won't be in the future.

          if (cb && typeof cb === 'function') {
            cb();
          } //this is only needed for the initialization of 2 handled sliders

        } else {
          //just caching the value of the left/bottom handle's left/top property
          var handlePos = parseFloat(this.$handle[0].style[lOrT]); //calculate the new min-height/width for the fill bar. Use isNaN to prevent false positives for numbers <= 0
          //based on the percentage of movement of the handle being manipulated, less the opposing handle's left/top position, plus the percentage w/h of the handle itself

          dim = movement - (isNaN(handlePos) ? (this.options.initialStart - this.options.start) / ((this.options.end - this.options.start) / 100) : handlePos) + handlePct;
        } // assign the min-height/width to our css object


        css["min-".concat(hOrW)] = "".concat(dim, "%");
      }

      this.$element.one('finished.zf.animate', function () {
        /**
         * Fires when the handle is done moving.
         * @event Slider#moved
         */
        _this.$element.trigger('moved.zf.slider', [$hndl]);
      }); //because we don't know exactly how the handle will be moved, check the amount of time it should take to move.

      var moveTime = this.$element.data('dragging') ? 1000 / 60 : this.options.moveTime;
      Object(_foundation_util_motion__WEBPACK_IMPORTED_MODULE_2__["Move"])(moveTime, $hndl, function () {
        // adjusting the left/top property of the handle, based on the percentage calculated above
        // if movement isNaN, that is because the slider is hidden and we cannot determine handle width,
        // fall back to next best guess.
        if (isNaN(movement)) {
          $hndl.css(lOrT, "".concat(pctOfBar * 100, "%"));
        } else {
          $hndl.css(lOrT, "".concat(movement, "%"));
        }

        if (!_this.options.doubleSided) {
          //if single-handled, a simple method to expand the fill bar
          _this.$fill.css(hOrW, "".concat(pctOfBar * 100, "%"));
        } else {
          //otherwise, use the css object we created above
          _this.$fill.css(css);
        }
      });
      /**
       * Fires when the value has not been change for a given time.
       * @event Slider#changed
       */

      clearTimeout(_this.timeout);
      _this.timeout = setTimeout(function () {
        _this.$element.trigger('changed.zf.slider', [$hndl]);
      }, _this.options.changedDelay);
    }
    /**
     * Sets the initial attribute for the slider element.
     * @function
     * @private
     * @param {Number} idx - index of the current handle/input to use.
     */

  }, {
    key: "_setInitAttr",
    value: function _setInitAttr(idx) {
      var initVal = idx === 0 ? this.options.initialStart : this.options.initialEnd;
      var id = this.inputs.eq(idx).attr('id') || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__["GetYoDigits"])(6, 'slider');
      this.inputs.eq(idx).attr({
        'id': id,
        'max': this.options.end,
        'min': this.options.start,
        'step': this.options.step
      });
      this.inputs.eq(idx).val(initVal);
      this.handles.eq(idx).attr({
        'role': 'slider',
        'aria-controls': id,
        'aria-valuemax': this.options.end,
        'aria-valuemin': this.options.start,
        'aria-valuenow': initVal,
        'aria-orientation': this.options.vertical ? 'vertical' : 'horizontal',
        'tabindex': 0
      });
    }
    /**
     * Sets the input and `aria-valuenow` values for the slider element.
     * @function
     * @private
     * @param {jQuery} $handle - the currently selected handle.
     * @param {Number} val - floating point of the new value.
     */

  }, {
    key: "_setValues",
    value: function _setValues($handle, val) {
      var idx = this.options.doubleSided ? this.handles.index($handle) : 0;
      this.inputs.eq(idx).val(val);
      $handle.attr('aria-valuenow', val);
    }
    /**
     * Handles events on the slider element.
     * Calculates the new location of the current handle.
     * If there are two handles and the bar was clicked, it determines which handle to move.
     * @function
     * @private
     * @param {Object} e - the `event` object passed from the listener.
     * @param {jQuery} $handle - the current handle to calculate for, if selected.
     * @param {Number} val - floating point number for the new value of the slider.
     * TODO clean this up, there's a lot of repeated code between this and the _setHandlePos fn.
     */

  }, {
    key: "_handleEvent",
    value: function _handleEvent(e, $handle, val) {
      var value, hasVal;

      if (!val) {
        //click or drag events
        e.preventDefault();

        var _this = this,
            vertical = this.options.vertical,
            param = vertical ? 'height' : 'width',
            direction = vertical ? 'top' : 'left',
            eventOffset = vertical ? e.pageY : e.pageX,
            halfOfHandle = this.$handle[0].getBoundingClientRect()[param] / 2,
            barDim = this.$element[0].getBoundingClientRect()[param],
            windowScroll = vertical ? jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop() : jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollLeft();

        var elemOffset = this.$element.offset()[direction]; // touch events emulated by the touch util give position relative to screen, add window.scroll to event coordinates...
        // best way to guess this is simulated is if clientY == pageY

        if (e.clientY === e.pageY) {
          eventOffset = eventOffset + windowScroll;
        }

        var eventFromBar = eventOffset - elemOffset;
        var barXY;

        if (eventFromBar < 0) {
          barXY = 0;
        } else if (eventFromBar > barDim) {
          barXY = barDim;
        } else {
          barXY = eventFromBar;
        }

        var offsetPct = percent(barXY, barDim);
        value = this._value(offsetPct); // turn everything around for RTL, yay math!

        if (Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__["rtl"])() && !this.options.vertical) {
          value = this.options.end - value;
        }

        value = _this._adjustValue(null, value); //boolean flag for the setHandlePos fn, specifically for vertical sliders

        hasVal = false;

        if (!$handle) {
          //figure out which handle it is, pass it to the next function.
          var firstHndlPos = absPosition(this.$handle, direction, barXY, param),
              secndHndlPos = absPosition(this.$handle2, direction, barXY, param);
          $handle = firstHndlPos <= secndHndlPos ? this.$handle : this.$handle2;
        }
      } else {
        //change event on input
        value = this._adjustValue(null, val);
        hasVal = true;
      }

      this._setHandlePos($handle, value, hasVal);
    }
    /**
     * Adjustes value for handle in regard to step value. returns adjusted value
     * @function
     * @private
     * @param {jQuery} $handle - the selected handle.
     * @param {Number} value - value to adjust. used if $handle is falsy
     */

  }, {
    key: "_adjustValue",
    value: function _adjustValue($handle, value) {
      var val,
          step = this.options.step,
          div = parseFloat(step / 2),
          left,
          prev_val,
          next_val;

      if (!!$handle) {
        val = parseFloat($handle.attr('aria-valuenow'));
      } else {
        val = value;
      }

      if (val >= 0) {
        left = val % step;
      } else {
        left = step + val % step;
      }

      prev_val = val - left;
      next_val = prev_val + step;

      if (left === 0) {
        return val;
      }

      val = val >= prev_val + div ? next_val : prev_val;
      return val;
    }
    /**
     * Adds event listeners to the slider elements.
     * @function
     * @private
     */

  }, {
    key: "_events",
    value: function _events() {
      this._eventsForHandle(this.$handle);

      if (this.handles[1]) {
        this._eventsForHandle(this.$handle2);
      }
    }
    /**
     * Adds event listeners a particular handle
     * @function
     * @private
     * @param {jQuery} $handle - the current handle to apply listeners to.
     */

  }, {
    key: "_eventsForHandle",
    value: function _eventsForHandle($handle) {
      var _this = this,
          curHandle,
          timer;

      var handleChangeEvent = function handleChangeEvent(e) {
        var idx = _this.inputs.index(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));

        _this._handleEvent(e, _this.handles.eq(idx), jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).val());
      }; // IE only triggers the change event when the input loses focus which strictly follows the HTML specification
      // listen for the enter key and trigger a change
      // @see https://html.spec.whatwg.org/multipage/input.html#common-input-element-events


      this.inputs.off('keyup.zf.slider').on('keyup.zf.slider', function (e) {
        if (e.keyCode == 13) handleChangeEvent.call(this, e);
      });
      this.inputs.off('change.zf.slider').on('change.zf.slider', handleChangeEvent);

      if (this.options.clickSelect) {
        this.$element.off('click.zf.slider').on('click.zf.slider', function (e) {
          if (_this.$element.data('dragging')) {
            return false;
          }

          if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).is('[data-slider-handle]')) {
            if (_this.options.doubleSided) {
              _this._handleEvent(e);
            } else {
              _this._handleEvent(e, _this.$handle);
            }
          }
        });
      }

      if (this.options.draggable) {
        this.handles.addTouch();
        var $body = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body');
        $handle.off('mousedown.zf.slider').on('mousedown.zf.slider', function (e) {
          $handle.addClass('is-dragging');

          _this.$fill.addClass('is-dragging'); //


          _this.$element.data('dragging', true);

          curHandle = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget);
          $body.on('mousemove.zf.slider', function (e) {
            e.preventDefault();

            _this._handleEvent(e, curHandle);
          }).on('mouseup.zf.slider', function (e) {
            _this._handleEvent(e, curHandle);

            $handle.removeClass('is-dragging');

            _this.$fill.removeClass('is-dragging');

            _this.$element.data('dragging', false);

            $body.off('mousemove.zf.slider mouseup.zf.slider');
          });
        }) // prevent events triggered by touch
        .on('selectstart.zf.slider touchmove.zf.slider', function (e) {
          e.preventDefault();
        });
      }

      $handle.off('keydown.zf.slider').on('keydown.zf.slider', function (e) {
        var _$handle = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
            idx = _this.options.doubleSided ? _this.handles.index(_$handle) : 0,
            oldValue = parseFloat(_this.inputs.eq(idx).val()),
            newValue; // handle keyboard event with keyboard util


        _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__["Keyboard"].handleKey(e, 'Slider', {
          decrease: function decrease() {
            newValue = oldValue - _this.options.step;
          },
          increase: function increase() {
            newValue = oldValue + _this.options.step;
          },
          decrease_fast: function decrease_fast() {
            newValue = oldValue - _this.options.step * 10;
          },
          increase_fast: function increase_fast() {
            newValue = oldValue + _this.options.step * 10;
          },
          min: function min() {
            newValue = _this.options.start;
          },
          max: function max() {
            newValue = _this.options.end;
          },
          handled: function handled() {
            // only set handle pos when event was handled specially
            e.preventDefault();

            _this._setHandlePos(_$handle, newValue, true);
          }
        });
        /*if (newValue) { // if pressed key has special function, update value
          e.preventDefault();
          _this._setHandlePos(_$handle, newValue);
        }*/
      });
    }
    /**
     * Destroys the slider plugin.
     */

  }, {
    key: "_destroy",
    value: function _destroy() {
      this.handles.off('.zf.slider');
      this.inputs.off('.zf.slider');
      this.$element.off('.zf.slider');
      clearTimeout(this.timeout);
    }
  }]);

  return Slider;
}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_4__["Plugin"]);

Slider.defaults = {
  /**
   * Minimum value for the slider scale.
   * @option
   * @type {number}
   * @default 0
   */
  start: 0,

  /**
   * Maximum value for the slider scale.
   * @option
   * @type {number}
   * @default 100
   */
  end: 100,

  /**
   * Minimum value change per change event.
   * @option
   * @type {number}
   * @default 1
   */
  step: 1,

  /**
   * Value at which the handle/input *(left handle/first input)* should be set to on initialization.
   * @option
   * @type {number}
   * @default 0
   */
  initialStart: 0,

  /**
   * Value at which the right handle/second input should be set to on initialization.
   * @option
   * @type {number}
   * @default 100
   */
  initialEnd: 100,

  /**
   * Allows the input to be located outside the container and visible. Set to by the JS
   * @option
   * @type {boolean}
   * @default false
   */
  binding: false,

  /**
   * Allows the user to click/tap on the slider bar to select a value.
   * @option
   * @type {boolean}
   * @default true
   */
  clickSelect: true,

  /**
   * Set to true and use the `vertical` class to change alignment to vertical.
   * @option
   * @type {boolean}
   * @default false
   */
  vertical: false,

  /**
   * Allows the user to drag the slider handle(s) to select a value.
   * @option
   * @type {boolean}
   * @default true
   */
  draggable: true,

  /**
   * Disables the slider and prevents event listeners from being applied. Double checked by JS with `disabledClass`.
   * @option
   * @type {boolean}
   * @default false
   */
  disabled: false,

  /**
   * Allows the use of two handles. Double checked by the JS. Changes some logic handling.
   * @option
   * @type {boolean}
   * @default false
   */
  doubleSided: false,

  /**
   * Potential future feature.
   */
  // steps: 100,

  /**
   * Number of decimal places the plugin should go to for floating point precision.
   * @option
   * @type {number}
   * @default 2
   */
  decimal: 2,

  /**
   * Time delay for dragged elements.
   */
  // dragDelay: 0,

  /**
   * Time, in ms, to animate the movement of a slider handle if user clicks/taps on the bar. Needs to be manually set if updating the transition time in the Sass settings.
   * @option
   * @type {number}
   * @default 200
   */
  moveTime: 200,
  //update this if changing the transition time in the sass

  /**
   * Class applied to disabled sliders.
   * @option
   * @type {string}
   * @default 'disabled'
   */
  disabledClass: 'disabled',

  /**
   * Will invert the default layout for a vertical<span data-tooltip title="who would do this???"> </span>slider.
   * @option
   * @type {boolean}
   * @default false
   */
  invertVertical: false,

  /**
   * Milliseconds before the `changed.zf-slider` event is triggered after value change.
   * @option
   * @type {number}
   * @default 500
   */
  changedDelay: 500,

  /**
  * Basevalue for non-linear sliders
  * @option
  * @type {number}
  * @default 5
  */
  nonLinearBase: 5,

  /**
  * Basevalue for non-linear sliders, possible values are: `'linear'`, `'pow'` & `'log'`. Pow and Log use the nonLinearBase setting.
  * @option
  * @type {string}
  * @default 'linear'
  */
  positionValueFunction: 'linear'
};

function percent(frac, num) {
  return frac / num;
}

function absPosition($handle, dir, clickPos, param) {
  return Math.abs($handle.position()[dir] + $handle[param]() / 2 - clickPos);
}

function baseLog(base, value) {
  return Math.log(value) / Math.log(base);
}



/***/ }),

/***/ "./js/foundation.smoothScroll.js":
/*!***************************************!*\
  !*** ./js/foundation.smoothScroll.js ***!
  \***************************************/
/*! exports provided: SmoothScroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmoothScroll", function() { return SmoothScroll; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.core.utils */ "./js/foundation.core.utils.js");
/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.core.plugin */ "./js/foundation.core.plugin.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




/**
 * SmoothScroll module.
 * @module foundation.smooth-scroll
 */

var SmoothScroll =
/*#__PURE__*/
function (_Plugin) {
  _inherits(SmoothScroll, _Plugin);

  function SmoothScroll() {
    _classCallCheck(this, SmoothScroll);

    return _possibleConstructorReturn(this, _getPrototypeOf(SmoothScroll).apply(this, arguments));
  }

  _createClass(SmoothScroll, [{
    key: "_setup",

    /**
     * Creates a new instance of SmoothScroll.
     * @class
     * @name SmoothScroll
     * @fires SmoothScroll#init
     * @param {Object} element - jQuery object to add the trigger to.
     * @param {Object} options - Overrides to the default plugin settings.
     */
    value: function _setup(element, options) {
      this.$element = element;
      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, SmoothScroll.defaults, this.$element.data(), options);
      this.className = 'SmoothScroll'; // ie9 back compat

      this._init();
    }
    /**
     * Initialize the SmoothScroll plugin
     * @private
     */

  }, {
    key: "_init",
    value: function _init() {
      var id = this.$element[0].id || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__["GetYoDigits"])(6, 'smooth-scroll');
      this.$element.attr({
        id: id
      });

      this._events();
    }
    /**
     * Initializes events for SmoothScroll.
     * @private
     */

  }, {
    key: "_events",
    value: function _events() {
      this.$element.on('click.zf.smoothScroll', this._handleLinkClick);
      this.$element.on('click.zf.smoothScroll', 'a[href^="#"]', this._handleLinkClick);
    }
    /**
     * Handle the given event to smoothly scroll to the anchor pointed by the event target.
     * @param {*} e - event
     * @function
     * @private
     */

  }, {
    key: "_handleLinkClick",
    value: function _handleLinkClick(e) {
      var _this = this;

      // Follow the link if it does not point to an anchor.
      if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget).is('a[href^="#"]')) return;
      var arrival = e.currentTarget.getAttribute('href');
      this._inTransition = true;
      SmoothScroll.scrollToLoc(arrival, this.options, function () {
        _this._inTransition = false;
      });
      e.preventDefault();
    }
  }, {
    key: "_destroy",

    /**
     * Destroys the SmoothScroll instance.
     * @function
     */
    value: function _destroy() {
      this.$element.off('click.zf.smoothScroll', this._handleLinkClick);
      this.$element.off('click.zf.smoothScroll', 'a[href^="#"]', this._handleLinkClick);
    }
  }], [{
    key: "scrollToLoc",

    /**
     * Function to scroll to a given location on the page.
     * @param {String} loc - A properly formatted jQuery id selector. Example: '#foo'
     * @param {Object} options - The options to use.
     * @param {Function} callback - The callback function.
     * @static
     * @function
     */
    value: function scrollToLoc(loc) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : SmoothScroll.defaults;
      var callback = arguments.length > 2 ? arguments[2] : undefined;
      var $loc = jquery__WEBPACK_IMPORTED_MODULE_0___default()(loc); // Do nothing if target does not exist to prevent errors

      if (!$loc.length) return false;
      var scrollPos = Math.round($loc.offset().top - options.threshold / 2 - options.offset);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('html, body').stop(true).animate({
        scrollTop: scrollPos
      }, options.animationDuration, options.animationEasing, function () {
        if (typeof callback === 'function') {
          callback();
        }
      });
    }
  }]);

  return SmoothScroll;
}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_2__["Plugin"]);
/**
 * Default settings for plugin.
 */


SmoothScroll.defaults = {
  /**
   * Amount of time, in ms, the animated scrolling should take between locations.
   * @option
   * @type {number}
   * @default 500
   */
  animationDuration: 500,

  /**
   * Animation style to use when scrolling between locations. Can be `'swing'` or `'linear'`.
   * @option
   * @type {string}
   * @default 'linear'
   * @see {@link https://api.jquery.com/animate|Jquery animate}
   */
  animationEasing: 'linear',

  /**
   * Number of pixels to use as a marker for location changes.
   * @option
   * @type {number}
   * @default 50
   */
  threshold: 50,

  /**
   * Number of pixels to offset the scroll of the page on item click if using a sticky nav bar.
   * @option
   * @type {number}
   * @default 0
   */
  offset: 0
};


/***/ }),

/***/ "./js/foundation.sticky.js":
/*!*********************************!*\
  !*** ./js/foundation.sticky.js ***!
  \*********************************/
/*! exports provided: Sticky */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sticky", function() { return Sticky; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.core.utils */ "./js/foundation.core.utils.js");
/* harmony import */ var _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.util.mediaQuery */ "./js/foundation.util.mediaQuery.js");
/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.core.plugin */ "./js/foundation.core.plugin.js");
/* harmony import */ var _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation.util.triggers */ "./js/foundation.util.triggers.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






/**
 * Sticky module.
 * @module foundation.sticky
 * @requires foundation.util.triggers
 * @requires foundation.util.mediaQuery
 */

var Sticky =
/*#__PURE__*/
function (_Plugin) {
  _inherits(Sticky, _Plugin);

  function Sticky() {
    _classCallCheck(this, Sticky);

    return _possibleConstructorReturn(this, _getPrototypeOf(Sticky).apply(this, arguments));
  }

  _createClass(Sticky, [{
    key: "_setup",

    /**
     * Creates a new instance of a sticky thing.
     * @class
     * @name Sticky
     * @param {jQuery} element - jQuery object to make sticky.
     * @param {Object} options - options object passed when creating the element programmatically.
     */
    value: function _setup(element, options) {
      this.$element = element;
      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, Sticky.defaults, this.$element.data(), options);
      this.className = 'Sticky'; // ie9 back compat
      // Triggers init is idempotent, just need to make sure it is initialized

      _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_4__["Triggers"].init(jquery__WEBPACK_IMPORTED_MODULE_0___default.a);

      this._init();
    }
    /**
     * Initializes the sticky element by adding classes, getting/setting dimensions, breakpoints and attributes
     * @function
     * @private
     */

  }, {
    key: "_init",
    value: function _init() {
      _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_2__["MediaQuery"]._init();

      var $parent = this.$element.parent('[data-sticky-container]'),
          id = this.$element[0].id || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__["GetYoDigits"])(6, 'sticky'),
          _this = this;

      if ($parent.length) {
        this.$container = $parent;
      } else {
        this.wasWrapped = true;
        this.$element.wrap(this.options.container);
        this.$container = this.$element.parent();
      }

      this.$container.addClass(this.options.containerClass);
      this.$element.addClass(this.options.stickyClass).attr({
        'data-resize': id,
        'data-mutate': id
      });

      if (this.options.anchor !== '') {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#' + _this.options.anchor).attr({
          'data-mutate': id
        });
      }

      this.scrollCount = this.options.checkEvery;
      this.isStuck = false;
      this.onLoadListener = Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__["onLoad"])(jquery__WEBPACK_IMPORTED_MODULE_0___default()(window), function () {
        //We calculate the container height to have correct values for anchor points offset calculation.
        _this.containerHeight = _this.$element.css("display") == "none" ? 0 : _this.$element[0].getBoundingClientRect().height;

        _this.$container.css('height', _this.containerHeight);

        _this.elemHeight = _this.containerHeight;

        if (_this.options.anchor !== '') {
          _this.$anchor = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#' + _this.options.anchor);
        } else {
          _this._parsePoints();
        }

        _this._setSizes(function () {
          var scroll = window.pageYOffset;

          _this._calc(false, scroll); //Unstick the element will ensure that proper classes are set.


          if (!_this.isStuck) {
            _this._removeSticky(scroll >= _this.topPoint ? false : true);
          }
        });

        _this._events(id.split('-').reverse().join('-'));
      });
    }
    /**
     * If using multiple elements as anchors, calculates the top and bottom pixel values the sticky thing should stick and unstick on.
     * @function
     * @private
     */

  }, {
    key: "_parsePoints",
    value: function _parsePoints() {
      var top = this.options.topAnchor == "" ? 1 : this.options.topAnchor,
          btm = this.options.btmAnchor == "" ? document.documentElement.scrollHeight : this.options.btmAnchor,
          pts = [top, btm],
          breaks = {};

      for (var i = 0, len = pts.length; i < len && pts[i]; i++) {
        var pt;

        if (typeof pts[i] === 'number') {
          pt = pts[i];
        } else {
          var place = pts[i].split(':'),
              anchor = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat(place[0]));
          pt = anchor.offset().top;

          if (place[1] && place[1].toLowerCase() === 'bottom') {
            pt += anchor[0].getBoundingClientRect().height;
          }
        }

        breaks[i] = pt;
      }

      this.points = breaks;
      return;
    }
    /**
     * Adds event handlers for the scrolling element.
     * @private
     * @param {String} id - pseudo-random id for unique scroll event listener.
     */

  }, {
    key: "_events",
    value: function _events(id) {
      var _this = this,
          scrollListener = this.scrollListener = "scroll.zf.".concat(id);

      if (this.isOn) {
        return;
      }

      if (this.canStick) {
        this.isOn = true;
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(scrollListener).on(scrollListener, function (e) {
          if (_this.scrollCount === 0) {
            _this.scrollCount = _this.options.checkEvery;

            _this._setSizes(function () {
              _this._calc(false, window.pageYOffset);
            });
          } else {
            _this.scrollCount--;

            _this._calc(false, window.pageYOffset);
          }
        });
      }

      this.$element.off('resizeme.zf.trigger').on('resizeme.zf.trigger', function (e, el) {
        _this._eventsHandler(id);
      });
      this.$element.on('mutateme.zf.trigger', function (e, el) {
        _this._eventsHandler(id);
      });

      if (this.$anchor) {
        this.$anchor.on('mutateme.zf.trigger', function (e, el) {
          _this._eventsHandler(id);
        });
      }
    }
    /**
     * Handler for events.
     * @private
     * @param {String} id - pseudo-random id for unique scroll event listener.
     */

  }, {
    key: "_eventsHandler",
    value: function _eventsHandler(id) {
      var _this = this,
          scrollListener = this.scrollListener = "scroll.zf.".concat(id);

      _this._setSizes(function () {
        _this._calc(false);

        if (_this.canStick) {
          if (!_this.isOn) {
            _this._events(id);
          }
        } else if (_this.isOn) {
          _this._pauseListeners(scrollListener);
        }
      });
    }
    /**
     * Removes event handlers for scroll and change events on anchor.
     * @fires Sticky#pause
     * @param {String} scrollListener - unique, namespaced scroll listener attached to `window`
     */

  }, {
    key: "_pauseListeners",
    value: function _pauseListeners(scrollListener) {
      this.isOn = false;
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(scrollListener);
      /**
       * Fires when the plugin is paused due to resize event shrinking the view.
       * @event Sticky#pause
       * @private
       */

      this.$element.trigger('pause.zf.sticky');
    }
    /**
     * Called on every `scroll` event and on `_init`
     * fires functions based on booleans and cached values
     * @param {Boolean} checkSizes - true if plugin should recalculate sizes and breakpoints.
     * @param {Number} scroll - current scroll position passed from scroll event cb function. If not passed, defaults to `window.pageYOffset`.
     */

  }, {
    key: "_calc",
    value: function _calc(checkSizes, scroll) {
      if (checkSizes) {
        this._setSizes();
      }

      if (!this.canStick) {
        if (this.isStuck) {
          this._removeSticky(true);
        }

        return false;
      }

      if (!scroll) {
        scroll = window.pageYOffset;
      }

      if (scroll >= this.topPoint) {
        if (scroll <= this.bottomPoint) {
          if (!this.isStuck) {
            this._setSticky();
          }
        } else {
          if (this.isStuck) {
            this._removeSticky(false);
          }
        }
      } else {
        if (this.isStuck) {
          this._removeSticky(true);
        }
      }
    }
    /**
     * Causes the $element to become stuck.
     * Adds `position: fixed;`, and helper classes.
     * @fires Sticky#stuckto
     * @function
     * @private
     */

  }, {
    key: "_setSticky",
    value: function _setSticky() {
      var _this = this,
          stickTo = this.options.stickTo,
          mrgn = stickTo === 'top' ? 'marginTop' : 'marginBottom',
          notStuckTo = stickTo === 'top' ? 'bottom' : 'top',
          css = {};

      css[mrgn] = "".concat(this.options[mrgn], "em");
      css[stickTo] = 0;
      css[notStuckTo] = 'auto';
      this.isStuck = true;
      this.$element.removeClass("is-anchored is-at-".concat(notStuckTo)).addClass("is-stuck is-at-".concat(stickTo)).css(css)
      /**
       * Fires when the $element has become `position: fixed;`
       * Namespaced to `top` or `bottom`, e.g. `sticky.zf.stuckto:top`
       * @event Sticky#stuckto
       */
      .trigger("sticky.zf.stuckto:".concat(stickTo));
      this.$element.on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", function () {
        _this._setSizes();
      });
    }
    /**
     * Causes the $element to become unstuck.
     * Removes `position: fixed;`, and helper classes.
     * Adds other helper classes.
     * @param {Boolean} isTop - tells the function if the $element should anchor to the top or bottom of its $anchor element.
     * @fires Sticky#unstuckfrom
     * @private
     */

  }, {
    key: "_removeSticky",
    value: function _removeSticky(isTop) {
      var stickTo = this.options.stickTo,
          stickToTop = stickTo === 'top',
          css = {},
          anchorPt = (this.points ? this.points[1] - this.points[0] : this.anchorHeight) - this.elemHeight,
          mrgn = stickToTop ? 'marginTop' : 'marginBottom',
          notStuckTo = stickToTop ? 'bottom' : 'top',
          topOrBottom = isTop ? 'top' : 'bottom';
      css[mrgn] = 0;
      css['bottom'] = 'auto';

      if (isTop) {
        css['top'] = 0;
      } else {
        css['top'] = anchorPt;
      }

      this.isStuck = false;
      this.$element.removeClass("is-stuck is-at-".concat(stickTo)).addClass("is-anchored is-at-".concat(topOrBottom)).css(css)
      /**
       * Fires when the $element has become anchored.
       * Namespaced to `top` or `bottom`, e.g. `sticky.zf.unstuckfrom:bottom`
       * @event Sticky#unstuckfrom
       */
      .trigger("sticky.zf.unstuckfrom:".concat(topOrBottom));
    }
    /**
     * Sets the $element and $container sizes for plugin.
     * Calls `_setBreakPoints`.
     * @param {Function} cb - optional callback function to fire on completion of `_setBreakPoints`.
     * @private
     */

  }, {
    key: "_setSizes",
    value: function _setSizes(cb) {
      this.canStick = _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_2__["MediaQuery"].is(this.options.stickyOn);

      if (!this.canStick) {
        if (cb && typeof cb === 'function') {
          cb();
        }
      }

      var _this = this,
          newElemWidth = this.$container[0].getBoundingClientRect().width,
          comp = window.getComputedStyle(this.$container[0]),
          pdngl = parseInt(comp['padding-left'], 10),
          pdngr = parseInt(comp['padding-right'], 10);

      if (this.$anchor && this.$anchor.length) {
        this.anchorHeight = this.$anchor[0].getBoundingClientRect().height;
      } else {
        this._parsePoints();
      }

      this.$element.css({
        'max-width': "".concat(newElemWidth - pdngl - pdngr, "px")
      });
      var newContainerHeight = this.$element[0].getBoundingClientRect().height || this.containerHeight;

      if (this.$element.css("display") == "none") {
        newContainerHeight = 0;
      }

      this.containerHeight = newContainerHeight;
      this.$container.css({
        height: newContainerHeight
      });
      this.elemHeight = newContainerHeight;

      if (!this.isStuck) {
        if (this.$element.hasClass('is-at-bottom')) {
          var anchorPt = (this.points ? this.points[1] - this.$container.offset().top : this.anchorHeight) - this.elemHeight;
          this.$element.css('top', anchorPt);
        }
      }

      this._setBreakPoints(newContainerHeight, function () {
        if (cb && typeof cb === 'function') {
          cb();
        }
      });
    }
    /**
     * Sets the upper and lower breakpoints for the element to become sticky/unsticky.
     * @param {Number} elemHeight - px value for sticky.$element height, calculated by `_setSizes`.
     * @param {Function} cb - optional callback function to be called on completion.
     * @private
     */

  }, {
    key: "_setBreakPoints",
    value: function _setBreakPoints(elemHeight, cb) {
      if (!this.canStick) {
        if (cb && typeof cb === 'function') {
          cb();
        } else {
          return false;
        }
      }

      var mTop = emCalc(this.options.marginTop),
          mBtm = emCalc(this.options.marginBottom),
          topPoint = this.points ? this.points[0] : this.$anchor.offset().top,
          bottomPoint = this.points ? this.points[1] : topPoint + this.anchorHeight,
          // topPoint = this.$anchor.offset().top || this.points[0],
      // bottomPoint = topPoint + this.anchorHeight || this.points[1],
      winHeight = window.innerHeight;

      if (this.options.stickTo === 'top') {
        topPoint -= mTop;
        bottomPoint -= elemHeight + mTop;
      } else if (this.options.stickTo === 'bottom') {
        topPoint -= winHeight - (elemHeight + mBtm);
        bottomPoint -= winHeight - mBtm;
      } else {//this would be the stickTo: both option... tricky
      }

      this.topPoint = topPoint;
      this.bottomPoint = bottomPoint;

      if (cb && typeof cb === 'function') {
        cb();
      }
    }
    /**
     * Destroys the current sticky element.
     * Resets the element to the top position first.
     * Removes event listeners, JS-added css properties and classes, and unwraps the $element if the JS added the $container.
     * @function
     */

  }, {
    key: "_destroy",
    value: function _destroy() {
      this._removeSticky(true);

      this.$element.removeClass("".concat(this.options.stickyClass, " is-anchored is-at-top")).css({
        height: '',
        top: '',
        bottom: '',
        'max-width': ''
      }).off('resizeme.zf.trigger').off('mutateme.zf.trigger');

      if (this.$anchor && this.$anchor.length) {
        this.$anchor.off('change.zf.sticky');
      }

      if (this.scrollListener) jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(this.scrollListener);
      if (this.onLoadListener) jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(this.onLoadListener);

      if (this.wasWrapped) {
        this.$element.unwrap();
      } else {
        this.$container.removeClass(this.options.containerClass).css({
          height: ''
        });
      }
    }
  }]);

  return Sticky;
}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_3__["Plugin"]);

Sticky.defaults = {
  /**
   * Customizable container template. Add your own classes for styling and sizing.
   * @option
   * @type {string}
   * @default '&lt;div data-sticky-container&gt;&lt;/div&gt;'
   */
  container: '<div data-sticky-container></div>',

  /**
   * Location in the view the element sticks to. Can be `'top'` or `'bottom'`.
   * @option
   * @type {string}
   * @default 'top'
   */
  stickTo: 'top',

  /**
   * If anchored to a single element, the id of that element.
   * @option
   * @type {string}
   * @default ''
   */
  anchor: '',

  /**
   * If using more than one element as anchor points, the id of the top anchor.
   * @option
   * @type {string}
   * @default ''
   */
  topAnchor: '',

  /**
   * If using more than one element as anchor points, the id of the bottom anchor.
   * @option
   * @type {string}
   * @default ''
   */
  btmAnchor: '',

  /**
   * Margin, in `em`'s to apply to the top of the element when it becomes sticky.
   * @option
   * @type {number}
   * @default 1
   */
  marginTop: 1,

  /**
   * Margin, in `em`'s to apply to the bottom of the element when it becomes sticky.
   * @option
   * @type {number}
   * @default 1
   */
  marginBottom: 1,

  /**
   * Breakpoint string that is the minimum screen size an element should become sticky.
   * @option
   * @type {string}
   * @default 'medium'
   */
  stickyOn: 'medium',

  /**
   * Class applied to sticky element, and removed on destruction. Foundation defaults to `sticky`.
   * @option
   * @type {string}
   * @default 'sticky'
   */
  stickyClass: 'sticky',

  /**
   * Class applied to sticky container. Foundation defaults to `sticky-container`.
   * @option
   * @type {string}
   * @default 'sticky-container'
   */
  containerClass: 'sticky-container',

  /**
   * Number of scroll events between the plugin's recalculating sticky points. Setting it to `0` will cause it to recalc every scroll event, setting it to `-1` will prevent recalc on scroll.
   * @option
   * @type {number}
   * @default -1
   */
  checkEvery: -1
};
/**
 * Helper function to calculate em values
 * @param Number {em} - number of em's to calculate into pixels
 */

function emCalc(em) {
  return parseInt(window.getComputedStyle(document.body, null).fontSize, 10) * em;
}



/***/ }),

/***/ "./js/foundation.tabs.js":
/*!*******************************!*\
  !*** ./js/foundation.tabs.js ***!
  \*******************************/
/*! exports provided: Tabs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tabs", function() { return Tabs; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.core.utils */ "./js/foundation.core.utils.js");
/* harmony import */ var _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.util.keyboard */ "./js/foundation.util.keyboard.js");
/* harmony import */ var _foundation_util_imageLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.util.imageLoader */ "./js/foundation.util.imageLoader.js");
/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation.core.plugin */ "./js/foundation.core.plugin.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






/**
 * Tabs module.
 * @module foundation.tabs
 * @requires foundation.util.keyboard
 * @requires foundation.util.imageLoader if tabs contain images
 */

var Tabs =
/*#__PURE__*/
function (_Plugin) {
  _inherits(Tabs, _Plugin);

  function Tabs() {
    _classCallCheck(this, Tabs);

    return _possibleConstructorReturn(this, _getPrototypeOf(Tabs).apply(this, arguments));
  }

  _createClass(Tabs, [{
    key: "_setup",

    /**
     * Creates a new instance of tabs.
     * @class
     * @name Tabs
     * @fires Tabs#init
     * @param {jQuery} element - jQuery object to make into tabs.
     * @param {Object} options - Overrides to the default plugin settings.
     */
    value: function _setup(element, options) {
      this.$element = element;
      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, Tabs.defaults, this.$element.data(), options);
      this.className = 'Tabs'; // ie9 back compat

      this._init();

      _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__["Keyboard"].register('Tabs', {
        'ENTER': 'open',
        'SPACE': 'open',
        'ARROW_RIGHT': 'next',
        'ARROW_UP': 'previous',
        'ARROW_DOWN': 'next',
        'ARROW_LEFT': 'previous' // 'TAB': 'next',
        // 'SHIFT_TAB': 'previous'

      });
    }
    /**
     * Initializes the tabs by showing and focusing (if autoFocus=true) the preset active tab.
     * @private
     */

  }, {
    key: "_init",
    value: function _init() {
      var _this2 = this;

      var _this = this;

      this._isInitializing = true;
      this.$element.attr({
        'role': 'tablist'
      });
      this.$tabTitles = this.$element.find(".".concat(this.options.linkClass));
      this.$tabContent = jquery__WEBPACK_IMPORTED_MODULE_0___default()("[data-tabs-content=\"".concat(this.$element[0].id, "\"]"));
      this.$tabTitles.each(function () {
        var $elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
            $link = $elem.find('a'),
            isActive = $elem.hasClass("".concat(_this.options.linkActiveClass)),
            hash = $link.attr('data-tabs-target') || $link[0].hash.slice(1),
            linkId = $link[0].id ? $link[0].id : "".concat(hash, "-label"),
            $tabContent = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat(hash));
        $elem.attr({
          'role': 'presentation'
        });
        $link.attr({
          'role': 'tab',
          'aria-controls': hash,
          'aria-selected': isActive,
          'id': linkId,
          'tabindex': isActive ? '0' : '-1'
        });
        $tabContent.attr({
          'role': 'tabpanel',
          'aria-labelledby': linkId
        }); // Save up the initial hash to return to it later when going back in history

        if (isActive) {
          _this._initialAnchor = "#".concat(hash);
        }

        if (!isActive) {
          $tabContent.attr('aria-hidden', 'true');
        }

        if (isActive && _this.options.autoFocus) {
          _this.onLoadListener = Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__["onLoad"])(jquery__WEBPACK_IMPORTED_MODULE_0___default()(window), function () {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('html, body').animate({
              scrollTop: $elem.offset().top
            }, _this.options.deepLinkSmudgeDelay, function () {
              $link.focus();
            });
          });
        }
      });

      if (this.options.matchHeight) {
        var $images = this.$tabContent.find('img');

        if ($images.length) {
          Object(_foundation_util_imageLoader__WEBPACK_IMPORTED_MODULE_3__["onImagesLoaded"])($images, this._setHeight.bind(this));
        } else {
          this._setHeight();
        }
      } // Current context-bound function to open tabs on page load or history hashchange


      this._checkDeepLink = function () {
        var anchor = window.location.hash;

        if (!anchor.length) {
          // If we are still initializing and there is no anchor, then there is nothing to do
          if (_this2._isInitializing) return; // Otherwise, move to the initial anchor

          if (_this2._initialAnchor) anchor = _this2._initialAnchor;
        }

        var $anchor = anchor && jquery__WEBPACK_IMPORTED_MODULE_0___default()(anchor);

        var $link = anchor && _this2.$element.find('[href$="' + anchor + '"]'); // Whether the anchor element that has been found is part of this element


        var isOwnAnchor = !!($anchor.length && $link.length); // If there is an anchor for the hash, select it

        if ($anchor && $anchor.length && $link && $link.length) {
          _this2.selectTab($anchor, true);
        } // Otherwise, collapse everything
        else {
            _this2._collapse();
          }

        if (isOwnAnchor) {
          // Roll up a little to show the titles
          if (_this2.options.deepLinkSmudge) {
            var offset = _this2.$element.offset();

            jquery__WEBPACK_IMPORTED_MODULE_0___default()('html, body').animate({
              scrollTop: offset.top
            }, _this2.options.deepLinkSmudgeDelay);
          }
          /**
           * Fires when the plugin has deeplinked at pageload
           * @event Tabs#deeplink
           */


          _this2.$element.trigger('deeplink.zf.tabs', [$link, $anchor]);
        }
      }; //use browser to open a tab, if it exists in this tabset


      if (this.options.deepLink) {
        this._checkDeepLink();
      }

      this._events();

      this._isInitializing = false;
    }
    /**
     * Adds event handlers for items within the tabs.
     * @private
     */

  }, {
    key: "_events",
    value: function _events() {
      this._addKeyHandler();

      this._addClickHandler();

      this._setHeightMqHandler = null;

      if (this.options.matchHeight) {
        this._setHeightMqHandler = this._setHeight.bind(this);
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('changed.zf.mediaquery', this._setHeightMqHandler);
      }

      if (this.options.deepLink) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('hashchange', this._checkDeepLink);
      }
    }
    /**
     * Adds click handlers for items within the tabs.
     * @private
     */

  }, {
    key: "_addClickHandler",
    value: function _addClickHandler() {
      var _this = this;

      this.$element.off('click.zf.tabs').on('click.zf.tabs', ".".concat(this.options.linkClass), function (e) {
        e.preventDefault();
        e.stopPropagation();

        _this._handleTabChange(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));
      });
    }
    /**
     * Adds keyboard event handlers for items within the tabs.
     * @private
     */

  }, {
    key: "_addKeyHandler",
    value: function _addKeyHandler() {
      var _this = this;

      this.$tabTitles.off('keydown.zf.tabs').on('keydown.zf.tabs', function (e) {
        if (e.which === 9) return;
        var $element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
            $elements = $element.parent('ul').children('li'),
            $prevElement,
            $nextElement;
        $elements.each(function (i) {
          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).is($element)) {
            if (_this.options.wrapOnKeys) {
              $prevElement = i === 0 ? $elements.last() : $elements.eq(i - 1);
              $nextElement = i === $elements.length - 1 ? $elements.first() : $elements.eq(i + 1);
            } else {
              $prevElement = $elements.eq(Math.max(0, i - 1));
              $nextElement = $elements.eq(Math.min(i + 1, $elements.length - 1));
            }

            return;
          }
        }); // handle keyboard event with keyboard util

        _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__["Keyboard"].handleKey(e, 'Tabs', {
          open: function open() {
            $element.find('[role="tab"]').focus();

            _this._handleTabChange($element);
          },
          previous: function previous() {
            $prevElement.find('[role="tab"]').focus();

            _this._handleTabChange($prevElement);
          },
          next: function next() {
            $nextElement.find('[role="tab"]').focus();

            _this._handleTabChange($nextElement);
          },
          handled: function handled() {
            e.stopPropagation();
            e.preventDefault();
          }
        });
      });
    }
    /**
     * Opens the tab `$targetContent` defined by `$target`. Collapses active tab.
     * @param {jQuery} $target - Tab to open.
     * @param {boolean} historyHandled - browser has already handled a history update
     * @fires Tabs#change
     * @function
     */

  }, {
    key: "_handleTabChange",
    value: function _handleTabChange($target, historyHandled) {
      // With `activeCollapse`, if the target is the active Tab, collapse it.
      if ($target.hasClass("".concat(this.options.linkActiveClass))) {
        if (this.options.activeCollapse) {
          this._collapse();
        }

        return;
      }

      var $oldTab = this.$element.find(".".concat(this.options.linkClass, ".").concat(this.options.linkActiveClass)),
          $tabLink = $target.find('[role="tab"]'),
          target = $tabLink.attr('data-tabs-target'),
          anchor = target && target.length ? "#".concat(target) : $tabLink[0].hash,
          $targetContent = this.$tabContent.find(anchor); //close old tab

      this._collapseTab($oldTab); //open new tab


      this._openTab($target); //either replace or update browser history


      if (this.options.deepLink && !historyHandled) {
        if (this.options.updateHistory) {
          history.pushState({}, '', anchor);
        } else {
          history.replaceState({}, '', anchor);
        }
      }
      /**
       * Fires when the plugin has successfully changed tabs.
       * @event Tabs#change
       */


      this.$element.trigger('change.zf.tabs', [$target, $targetContent]); //fire to children a mutation event

      $targetContent.find("[data-mutate]").trigger("mutateme.zf.trigger");
    }
    /**
     * Opens the tab `$targetContent` defined by `$target`.
     * @param {jQuery} $target - Tab to open.
     * @function
     */

  }, {
    key: "_openTab",
    value: function _openTab($target) {
      var $tabLink = $target.find('[role="tab"]'),
          hash = $tabLink.attr('data-tabs-target') || $tabLink[0].hash.slice(1),
          $targetContent = this.$tabContent.find("#".concat(hash));
      $target.addClass("".concat(this.options.linkActiveClass));
      $tabLink.attr({
        'aria-selected': 'true',
        'tabindex': '0'
      });
      $targetContent.addClass("".concat(this.options.panelActiveClass)).removeAttr('aria-hidden');
    }
    /**
     * Collapses `$targetContent` defined by `$target`.
     * @param {jQuery} $target - Tab to collapse.
     * @function
     */

  }, {
    key: "_collapseTab",
    value: function _collapseTab($target) {
      var $target_anchor = $target.removeClass("".concat(this.options.linkActiveClass)).find('[role="tab"]').attr({
        'aria-selected': 'false',
        'tabindex': -1
      });
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat($target_anchor.attr('aria-controls'))).removeClass("".concat(this.options.panelActiveClass)).attr({
        'aria-hidden': 'true'
      });
    }
    /**
     * Collapses the active Tab.
     * @fires Tabs#collapse
     * @function
     */

  }, {
    key: "_collapse",
    value: function _collapse() {
      var $activeTab = this.$element.find(".".concat(this.options.linkClass, ".").concat(this.options.linkActiveClass));

      if ($activeTab.length) {
        this._collapseTab($activeTab);
        /**
        * Fires when the plugin has successfully collapsed tabs.
        * @event Tabs#collapse
        */


        this.$element.trigger('collapse.zf.tabs', [$activeTab]);
      }
    }
    /**
     * Public method for selecting a content pane to display.
     * @param {jQuery | String} elem - jQuery object or string of the id of the pane to display.
     * @param {boolean} historyHandled - browser has already handled a history update
     * @function
     */

  }, {
    key: "selectTab",
    value: function selectTab(elem, historyHandled) {
      var idStr;

      if (_typeof(elem) === 'object') {
        idStr = elem[0].id;
      } else {
        idStr = elem;
      }

      if (idStr.indexOf('#') < 0) {
        idStr = "#".concat(idStr);
      }

      var $target = this.$tabTitles.has("[href$=\"".concat(idStr, "\"]"));

      this._handleTabChange($target, historyHandled);
    }
  }, {
    key: "_setHeight",

    /**
     * Sets the height of each panel to the height of the tallest panel.
     * If enabled in options, gets called on media query change.
     * If loading content via external source, can be called directly or with _reflow.
     * If enabled with `data-match-height="true"`, tabs sets to equal height
     * @function
     * @private
     */
    value: function _setHeight() {
      var max = 0,
          _this = this; // Lock down the `this` value for the root tabs object


      this.$tabContent.find(".".concat(this.options.panelClass)).css('height', '').each(function () {
        var panel = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
            isActive = panel.hasClass("".concat(_this.options.panelActiveClass)); // get the options from the parent instead of trying to get them from the child

        if (!isActive) {
          panel.css({
            'visibility': 'hidden',
            'display': 'block'
          });
        }

        var temp = this.getBoundingClientRect().height;

        if (!isActive) {
          panel.css({
            'visibility': '',
            'display': ''
          });
        }

        max = temp > max ? temp : max;
      }).css('height', "".concat(max, "px"));
    }
    /**
     * Destroys an instance of tabs.
     * @fires Tabs#destroyed
     */

  }, {
    key: "_destroy",
    value: function _destroy() {
      this.$element.find(".".concat(this.options.linkClass)).off('.zf.tabs').hide().end().find(".".concat(this.options.panelClass)).hide();

      if (this.options.matchHeight) {
        if (this._setHeightMqHandler != null) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off('changed.zf.mediaquery', this._setHeightMqHandler);
        }
      }

      if (this.options.deepLink) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off('hashchange', this._checkDeepLink);
      }

      if (this.onLoadListener) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(this.onLoadListener);
      }
    }
  }]);

  return Tabs;
}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_4__["Plugin"]);

Tabs.defaults = {
  /**
   * Link the location hash to the active pane.
   * Set the location hash when the active pane changes, and open the corresponding pane when the location changes.
   * @option
   * @type {boolean}
   * @default false
   */
  deepLink: false,

  /**
   * If `deepLink` is enabled, adjust the deep link scroll to make sure the top of the tab panel is visible
   * @option
   * @type {boolean}
   * @default false
   */
  deepLinkSmudge: false,

  /**
   * If `deepLinkSmudge` is enabled, animation time (ms) for the deep link adjustment
   * @option
   * @type {number}
   * @default 300
   */
  deepLinkSmudgeDelay: 300,

  /**
   * If `deepLink` is enabled, update the browser history with the open tab
   * @option
   * @type {boolean}
   * @default false
   */
  updateHistory: false,

  /**
   * Allows the window to scroll to content of active pane on load.
   * Not recommended if more than one tab panel per page.
   * @option
   * @type {boolean}
   * @default false
   */
  autoFocus: false,

  /**
   * Allows keyboard input to 'wrap' around the tab links.
   * @option
   * @type {boolean}
   * @default true
   */
  wrapOnKeys: true,

  /**
   * Allows the tab content panes to match heights if set to true.
   * @option
   * @type {boolean}
   * @default false
   */
  matchHeight: false,

  /**
   * Allows active tabs to collapse when clicked.
   * @option
   * @type {boolean}
   * @default false
   */
  activeCollapse: false,

  /**
   * Class applied to `li`'s in tab link list.
   * @option
   * @type {string}
   * @default 'tabs-title'
   */
  linkClass: 'tabs-title',

  /**
   * Class applied to the active `li` in tab link list.
   * @option
   * @type {string}
   * @default 'is-active'
   */
  linkActiveClass: 'is-active',

  /**
   * Class applied to the content containers.
   * @option
   * @type {string}
   * @default 'tabs-panel'
   */
  panelClass: 'tabs-panel',

  /**
   * Class applied to the active content container.
   * @option
   * @type {string}
   * @default 'is-active'
   */
  panelActiveClass: 'is-active'
};


/***/ }),

/***/ "./js/foundation.toggler.js":
/*!**********************************!*\
  !*** ./js/foundation.toggler.js ***!
  \**********************************/
/*! exports provided: Toggler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Toggler", function() { return Toggler; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _foundation_util_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.util.motion */ "./js/foundation.util.motion.js");
/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.core.plugin */ "./js/foundation.core.plugin.js");
/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.core.utils */ "./js/foundation.core.utils.js");
/* harmony import */ var _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation.util.triggers */ "./js/foundation.util.triggers.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






/**
 * Toggler module.
 * @module foundation.toggler
 * @requires foundation.util.motion
 * @requires foundation.util.triggers
 */

var Toggler =
/*#__PURE__*/
function (_Plugin) {
  _inherits(Toggler, _Plugin);

  function Toggler() {
    _classCallCheck(this, Toggler);

    return _possibleConstructorReturn(this, _getPrototypeOf(Toggler).apply(this, arguments));
  }

  _createClass(Toggler, [{
    key: "_setup",

    /**
     * Creates a new instance of Toggler.
     * @class
     * @name Toggler
     * @fires Toggler#init
     * @param {Object} element - jQuery object to add the trigger to.
     * @param {Object} options - Overrides to the default plugin settings.
     */
    value: function _setup(element, options) {
      this.$element = element;
      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, Toggler.defaults, element.data(), options);
      this.className = '';
      this.className = 'Toggler'; // ie9 back compat
      // Triggers init is idempotent, just need to make sure it is initialized

      _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_4__["Triggers"].init(jquery__WEBPACK_IMPORTED_MODULE_0___default.a);

      this._init();

      this._events();
    }
    /**
     * Initializes the Toggler plugin by parsing the toggle class from data-toggler, or animation classes from data-animate.
     * @function
     * @private
     */

  }, {
    key: "_init",
    value: function _init() {
      var input; // Parse animation classes if they were set

      if (this.options.animate) {
        input = this.options.animate.split(' ');
        this.animationIn = input[0];
        this.animationOut = input[1] || null;
      } // Otherwise, parse toggle class
      else {
          input = this.$element.data('toggler'); // Allow for a . at the beginning of the string

          this.className = input[0] === '.' ? input.slice(1) : input;
        } // Add ARIA attributes to triggers:


      var id = this.$element[0].id,
          $triggers = jquery__WEBPACK_IMPORTED_MODULE_0___default()("[data-open~=\"".concat(id, "\"], [data-close~=\"").concat(id, "\"], [data-toggle~=\"").concat(id, "\"]")); // - aria-expanded: according to the element visibility.

      $triggers.attr('aria-expanded', !this.$element.is(':hidden')); // - aria-controls: adding the element id to it if not already in it.

      $triggers.each(function (index, trigger) {
        var $trigger = jquery__WEBPACK_IMPORTED_MODULE_0___default()(trigger);
        var controls = $trigger.attr('aria-controls') || '';
        var containsId = new RegExp("\\b".concat(Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__["RegExpEscape"])(id), "\\b")).test(controls);
        if (!containsId) $trigger.attr('aria-controls', controls ? "".concat(controls, " ").concat(id) : id);
      });
    }
    /**
     * Initializes events for the toggle trigger.
     * @function
     * @private
     */

  }, {
    key: "_events",
    value: function _events() {
      this.$element.off('toggle.zf.trigger').on('toggle.zf.trigger', this.toggle.bind(this));
    }
    /**
     * Toggles the target class on the target element. An event is fired from the original trigger depending on if the resultant state was "on" or "off".
     * @function
     * @fires Toggler#on
     * @fires Toggler#off
     */

  }, {
    key: "toggle",
    value: function toggle() {
      this[this.options.animate ? '_toggleAnimate' : '_toggleClass']();
    }
  }, {
    key: "_toggleClass",
    value: function _toggleClass() {
      this.$element.toggleClass(this.className);
      var isOn = this.$element.hasClass(this.className);

      if (isOn) {
        /**
         * Fires if the target element has the class after a toggle.
         * @event Toggler#on
         */
        this.$element.trigger('on.zf.toggler');
      } else {
        /**
         * Fires if the target element does not have the class after a toggle.
         * @event Toggler#off
         */
        this.$element.trigger('off.zf.toggler');
      }

      this._updateARIA(isOn);

      this.$element.find('[data-mutate]').trigger('mutateme.zf.trigger');
    }
  }, {
    key: "_toggleAnimate",
    value: function _toggleAnimate() {
      var _this = this;

      if (this.$element.is(':hidden')) {
        _foundation_util_motion__WEBPACK_IMPORTED_MODULE_1__["Motion"].animateIn(this.$element, this.animationIn, function () {
          _this._updateARIA(true);

          this.trigger('on.zf.toggler');
          this.find('[data-mutate]').trigger('mutateme.zf.trigger');
        });
      } else {
        _foundation_util_motion__WEBPACK_IMPORTED_MODULE_1__["Motion"].animateOut(this.$element, this.animationOut, function () {
          _this._updateARIA(false);

          this.trigger('off.zf.toggler');
          this.find('[data-mutate]').trigger('mutateme.zf.trigger');
        });
      }
    }
  }, {
    key: "_updateARIA",
    value: function _updateARIA(isOn) {
      var id = this.$element[0].id;
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("[data-open=\"".concat(id, "\"], [data-close=\"").concat(id, "\"], [data-toggle=\"").concat(id, "\"]")).attr({
        'aria-expanded': isOn ? true : false
      });
    }
    /**
     * Destroys the instance of Toggler on the element.
     * @function
     */

  }, {
    key: "_destroy",
    value: function _destroy() {
      this.$element.off('.zf.toggler');
    }
  }]);

  return Toggler;
}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_2__["Plugin"]);

Toggler.defaults = {
  /**
   * Tells the plugin if the element should animated when toggled.
   * @option
   * @type {boolean}
   * @default false
   */
  animate: false
};


/***/ }),

/***/ "./js/foundation.tooltip.js":
/*!**********************************!*\
  !*** ./js/foundation.tooltip.js ***!
  \**********************************/
/*! exports provided: Tooltip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tooltip", function() { return Tooltip; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.core.utils */ "./js/foundation.core.utils.js");
/* harmony import */ var _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.util.mediaQuery */ "./js/foundation.util.mediaQuery.js");
/* harmony import */ var _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.util.triggers */ "./js/foundation.util.triggers.js");
/* harmony import */ var _foundation_positionable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation.positionable */ "./js/foundation.positionable.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






/**
 * Tooltip module.
 * @module foundation.tooltip
 * @requires foundation.util.box
 * @requires foundation.util.mediaQuery
 * @requires foundation.util.triggers
 */

var Tooltip =
/*#__PURE__*/
function (_Positionable) {
  _inherits(Tooltip, _Positionable);

  function Tooltip() {
    _classCallCheck(this, Tooltip);

    return _possibleConstructorReturn(this, _getPrototypeOf(Tooltip).apply(this, arguments));
  }

  _createClass(Tooltip, [{
    key: "_setup",

    /**
     * Creates a new instance of a Tooltip.
     * @class
     * @name Tooltip
     * @fires Tooltip#init
     * @param {jQuery} element - jQuery object to attach a tooltip to.
     * @param {Object} options - object to extend the default configuration.
     */
    value: function _setup(element, options) {
      this.$element = element;
      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, Tooltip.defaults, this.$element.data(), options);
      this.className = 'Tooltip'; // ie9 back compat

      this.isActive = false;
      this.isClick = false; // Triggers init is idempotent, just need to make sure it is initialized

      _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_3__["Triggers"].init(jquery__WEBPACK_IMPORTED_MODULE_0___default.a);

      this._init();
    }
    /**
     * Initializes the tooltip by setting the creating the tip element, adding it's text, setting private variables and setting attributes on the anchor.
     * @private
     */

  }, {
    key: "_init",
    value: function _init() {
      _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_2__["MediaQuery"]._init();

      var elemId = this.$element.attr('aria-describedby') || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__["GetYoDigits"])(6, 'tooltip');
      this.options.tipText = this.options.tipText || this.$element.attr('title');
      this.template = this.options.template ? jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.options.template) : this._buildTemplate(elemId);

      if (this.options.allowHtml) {
        this.template.appendTo(document.body).html(this.options.tipText).hide();
      } else {
        this.template.appendTo(document.body).text(this.options.tipText).hide();
      }

      this.$element.attr({
        'title': '',
        'aria-describedby': elemId,
        'data-yeti-box': elemId,
        'data-toggle': elemId,
        'data-resize': elemId
      }).addClass(this.options.triggerClass);

      _get(_getPrototypeOf(Tooltip.prototype), "_init", this).call(this);

      this._events();
    }
  }, {
    key: "_getDefaultPosition",
    value: function _getDefaultPosition() {
      // handle legacy classnames
      var position = this.$element[0].className.match(/\b(top|left|right|bottom)\b/g);
      return position ? position[0] : 'top';
    }
  }, {
    key: "_getDefaultAlignment",
    value: function _getDefaultAlignment() {
      return 'center';
    }
  }, {
    key: "_getHOffset",
    value: function _getHOffset() {
      if (this.position === 'left' || this.position === 'right') {
        return this.options.hOffset + this.options.tooltipWidth;
      } else {
        return this.options.hOffset;
      }
    }
  }, {
    key: "_getVOffset",
    value: function _getVOffset() {
      if (this.position === 'top' || this.position === 'bottom') {
        return this.options.vOffset + this.options.tooltipHeight;
      } else {
        return this.options.vOffset;
      }
    }
    /**
     * builds the tooltip element, adds attributes, and returns the template.
     * @private
     */

  }, {
    key: "_buildTemplate",
    value: function _buildTemplate(id) {
      var templateClasses = "".concat(this.options.tooltipClass, " ").concat(this.options.templateClasses).trim();
      var $template = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div></div>').addClass(templateClasses).attr({
        'role': 'tooltip',
        'aria-hidden': true,
        'data-is-active': false,
        'data-is-focus': false,
        'id': id
      });
      return $template;
    }
    /**
     * sets the position class of an element and recursively calls itself until there are no more possible positions to attempt, or the tooltip element is no longer colliding.
     * if the tooltip is larger than the screen width, default to full width - any user selected margin
     * @private
     */

  }, {
    key: "_setPosition",
    value: function _setPosition() {
      _get(_getPrototypeOf(Tooltip.prototype), "_setPosition", this).call(this, this.$element, this.template);
    }
    /**
     * reveals the tooltip, and fires an event to close any other open tooltips on the page
     * @fires Tooltip#closeme
     * @fires Tooltip#show
     * @function
     */

  }, {
    key: "show",
    value: function show() {
      if (this.options.showOn !== 'all' && !_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_2__["MediaQuery"].is(this.options.showOn)) {
        // console.error('The screen is too small to display this tooltip');
        return false;
      }

      var _this = this;

      this.template.css('visibility', 'hidden').show();

      this._setPosition();

      this.template.removeClass('top bottom left right').addClass(this.position);
      this.template.removeClass('align-top align-bottom align-left align-right align-center').addClass('align-' + this.alignment);
      /**
       * Fires to close all other open tooltips on the page
       * @event Closeme#tooltip
       */

      this.$element.trigger('closeme.zf.tooltip', this.template.attr('id'));
      this.template.attr({
        'data-is-active': true,
        'aria-hidden': false
      });
      _this.isActive = true; // console.log(this.template);

      this.template.stop().hide().css('visibility', '').fadeIn(this.options.fadeInDuration, function () {//maybe do stuff?
      });
      /**
       * Fires when the tooltip is shown
       * @event Tooltip#show
       */

      this.$element.trigger('show.zf.tooltip');
    }
    /**
     * Hides the current tooltip, and resets the positioning class if it was changed due to collision
     * @fires Tooltip#hide
     * @function
     */

  }, {
    key: "hide",
    value: function hide() {
      // console.log('hiding', this.$element.data('yeti-box'));
      var _this = this;

      this.template.stop().attr({
        'aria-hidden': true,
        'data-is-active': false
      }).fadeOut(this.options.fadeOutDuration, function () {
        _this.isActive = false;
        _this.isClick = false;
      });
      /**
       * fires when the tooltip is hidden
       * @event Tooltip#hide
       */

      this.$element.trigger('hide.zf.tooltip');
    }
    /**
     * adds event listeners for the tooltip and its anchor
     * TODO combine some of the listeners like focus and mouseenter, etc.
     * @private
     */

  }, {
    key: "_events",
    value: function _events() {
      var _this = this;

      var $template = this.template;
      var isFocus = false;

      if (!this.options.disableHover) {
        this.$element.on('mouseenter.zf.tooltip', function (e) {
          if (!_this.isActive) {
            _this.timeout = setTimeout(function () {
              _this.show();
            }, _this.options.hoverDelay);
          }
        }).on('mouseleave.zf.tooltip', Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__["ignoreMousedisappear"])(function (e) {
          clearTimeout(_this.timeout);

          if (!isFocus || _this.isClick && !_this.options.clickOpen) {
            _this.hide();
          }
        }));
      }

      if (this.options.clickOpen) {
        this.$element.on('mousedown.zf.tooltip', function (e) {
          e.stopImmediatePropagation();

          if (_this.isClick) {//_this.hide();
            // _this.isClick = false;
          } else {
            _this.isClick = true;

            if ((_this.options.disableHover || !_this.$element.attr('tabindex')) && !_this.isActive) {
              _this.show();
            }
          }
        });
      } else {
        this.$element.on('mousedown.zf.tooltip', function (e) {
          e.stopImmediatePropagation();
          _this.isClick = true;
        });
      }

      if (!this.options.disableForTouch) {
        this.$element.on('tap.zf.tooltip touchend.zf.tooltip', function (e) {
          _this.isActive ? _this.hide() : _this.show();
        });
      }

      this.$element.on({
        // 'toggle.zf.trigger': this.toggle.bind(this),
        // 'close.zf.trigger': this.hide.bind(this)
        'close.zf.trigger': this.hide.bind(this)
      });
      this.$element.on('focus.zf.tooltip', function (e) {
        isFocus = true;

        if (_this.isClick) {
          // If we're not showing open on clicks, we need to pretend a click-launched focus isn't
          // a real focus, otherwise on hover and come back we get bad behavior
          if (!_this.options.clickOpen) {
            isFocus = false;
          }

          return false;
        } else {
          _this.show();
        }
      }).on('focusout.zf.tooltip', function (e) {
        isFocus = false;
        _this.isClick = false;

        _this.hide();
      }).on('resizeme.zf.trigger', function () {
        if (_this.isActive) {
          _this._setPosition();
        }
      });
    }
    /**
     * adds a toggle method, in addition to the static show() & hide() functions
     * @function
     */

  }, {
    key: "toggle",
    value: function toggle() {
      if (this.isActive) {
        this.hide();
      } else {
        this.show();
      }
    }
    /**
     * Destroys an instance of tooltip, removes template element from the view.
     * @function
     */

  }, {
    key: "_destroy",
    value: function _destroy() {
      this.$element.attr('title', this.template.text()).off('.zf.trigger .zf.tooltip').removeClass(this.options.triggerClass).removeClass('top right left bottom').removeAttr('aria-describedby data-disable-hover data-resize data-toggle data-tooltip data-yeti-box');
      this.template.remove();
    }
  }]);

  return Tooltip;
}(_foundation_positionable__WEBPACK_IMPORTED_MODULE_4__["Positionable"]);

Tooltip.defaults = {
  disableForTouch: false,

  /**
   * Time, in ms, before a tooltip should open on hover.
   * @option
   * @type {number}
   * @default 200
   */
  hoverDelay: 200,

  /**
   * Time, in ms, a tooltip should take to fade into view.
   * @option
   * @type {number}
   * @default 150
   */
  fadeInDuration: 150,

  /**
   * Time, in ms, a tooltip should take to fade out of view.
   * @option
   * @type {number}
   * @default 150
   */
  fadeOutDuration: 150,

  /**
   * Disables hover events from opening the tooltip if set to true
   * @option
   * @type {boolean}
   * @default false
   */
  disableHover: false,

  /**
   * Optional addtional classes to apply to the tooltip template on init.
   * @option
   * @type {string}
   * @default ''
   */
  templateClasses: '',

  /**
   * Non-optional class added to tooltip templates. Foundation default is 'tooltip'.
   * @option
   * @type {string}
   * @default 'tooltip'
   */
  tooltipClass: 'tooltip',

  /**
   * Class applied to the tooltip anchor element.
   * @option
   * @type {string}
   * @default 'has-tip'
   */
  triggerClass: 'has-tip',

  /**
   * Minimum breakpoint size at which to open the tooltip.
   * @option
   * @type {string}
   * @default 'small'
   */
  showOn: 'small',

  /**
   * Custom template to be used to generate markup for tooltip.
   * @option
   * @type {string}
   * @default ''
   */
  template: '',

  /**
   * Text displayed in the tooltip template on open.
   * @option
   * @type {string}
   * @default ''
   */
  tipText: '',
  touchCloseText: 'Tap to close.',

  /**
   * Allows the tooltip to remain open if triggered with a click or touch event.
   * @option
   * @type {boolean}
   * @default true
   */
  clickOpen: true,

  /**
   * Position of tooltip. Can be left, right, bottom, top, or auto.
   * @option
   * @type {string}
   * @default 'auto'
   */
  position: 'auto',

  /**
   * Alignment of tooltip relative to anchor. Can be left, right, bottom, top, center, or auto.
   * @option
   * @type {string}
   * @default 'auto'
   */
  alignment: 'auto',

  /**
   * Allow overlap of container/window. If false, tooltip will first try to
   * position as defined by data-position and data-alignment, but reposition if
   * it would cause an overflow.  @option
   * @type {boolean}
   * @default false
   */
  allowOverlap: false,

  /**
   * Allow overlap of only the bottom of the container. This is the most common
   * behavior for dropdowns, allowing the dropdown to extend the bottom of the
   * screen but not otherwise influence or break out of the container.
   * Less common for tooltips.
   * @option
   * @type {boolean}
   * @default false
   */
  allowBottomOverlap: false,

  /**
   * Distance, in pixels, the template should push away from the anchor on the Y axis.
   * @option
   * @type {number}
   * @default 0
   */
  vOffset: 0,

  /**
   * Distance, in pixels, the template should push away from the anchor on the X axis
   * @option
   * @type {number}
   * @default 0
   */
  hOffset: 0,

  /**
   * Distance, in pixels, the template spacing auto-adjust for a vertical tooltip
   * @option
   * @type {number}
   * @default 14
   */
  tooltipHeight: 14,

  /**
   * Distance, in pixels, the template spacing auto-adjust for a horizontal tooltip
   * @option
   * @type {number}
   * @default 12
   */
  tooltipWidth: 12,

  /**
  * Allow HTML in tooltip. Warning: If you are loading user-generated content into tooltips,
  * allowing HTML may open yourself up to XSS attacks.
  * @option
  * @type {boolean}
  * @default false
  */
  allowHtml: false
};
/**
 * TODO utilize resize event trigger
 */



/***/ }),

/***/ "./js/foundation.util.box.js":
/*!***********************************!*\
  !*** ./js/foundation.util.box.js ***!
  \***********************************/
/*! exports provided: Box */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Box", function() { return Box; });
/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./foundation.core.utils */ "./js/foundation.core.utils.js");



var Box = {
  ImNotTouchingYou: ImNotTouchingYou,
  OverlapArea: OverlapArea,
  GetDimensions: GetDimensions,
  GetOffsets: GetOffsets,
  GetExplicitOffsets: GetExplicitOffsets
  /**
   * Compares the dimensions of an element to a container and determines collision events with container.
   * @function
   * @param {jQuery} element - jQuery object to test for collisions.
   * @param {jQuery} parent - jQuery object to use as bounding container.
   * @param {Boolean} lrOnly - set to true to check left and right values only.
   * @param {Boolean} tbOnly - set to true to check top and bottom values only.
   * @default if no parent object passed, detects collisions with `window`.
   * @returns {Boolean} - true if collision free, false if a collision in any direction.
   */

};

function ImNotTouchingYou(element, parent, lrOnly, tbOnly, ignoreBottom) {
  return OverlapArea(element, parent, lrOnly, tbOnly, ignoreBottom) === 0;
}

;

function OverlapArea(element, parent, lrOnly, tbOnly, ignoreBottom) {
  var eleDims = GetDimensions(element),
      topOver,
      bottomOver,
      leftOver,
      rightOver;

  if (parent) {
    var parDims = GetDimensions(parent);
    bottomOver = parDims.height + parDims.offset.top - (eleDims.offset.top + eleDims.height);
    topOver = eleDims.offset.top - parDims.offset.top;
    leftOver = eleDims.offset.left - parDims.offset.left;
    rightOver = parDims.width + parDims.offset.left - (eleDims.offset.left + eleDims.width);
  } else {
    bottomOver = eleDims.windowDims.height + eleDims.windowDims.offset.top - (eleDims.offset.top + eleDims.height);
    topOver = eleDims.offset.top - eleDims.windowDims.offset.top;
    leftOver = eleDims.offset.left - eleDims.windowDims.offset.left;
    rightOver = eleDims.windowDims.width - (eleDims.offset.left + eleDims.width);
  }

  bottomOver = ignoreBottom ? 0 : Math.min(bottomOver, 0);
  topOver = Math.min(topOver, 0);
  leftOver = Math.min(leftOver, 0);
  rightOver = Math.min(rightOver, 0);

  if (lrOnly) {
    return leftOver + rightOver;
  }

  if (tbOnly) {
    return topOver + bottomOver;
  } // use sum of squares b/c we care about overlap area.


  return Math.sqrt(topOver * topOver + bottomOver * bottomOver + leftOver * leftOver + rightOver * rightOver);
}
/**
 * Uses native methods to return an object of dimension values.
 * @function
 * @param {jQuery || HTML} element - jQuery object or DOM element for which to get the dimensions. Can be any element other that document or window.
 * @returns {Object} - nested object of integer pixel values
 * TODO - if element is window, return only those values.
 */


function GetDimensions(elem) {
  elem = elem.length ? elem[0] : elem;

  if (elem === window || elem === document) {
    throw new Error("I'm sorry, Dave. I'm afraid I can't do that.");
  }

  var rect = elem.getBoundingClientRect(),
      parRect = elem.parentNode.getBoundingClientRect(),
      winRect = document.body.getBoundingClientRect(),
      winY = window.pageYOffset,
      winX = window.pageXOffset;
  return {
    width: rect.width,
    height: rect.height,
    offset: {
      top: rect.top + winY,
      left: rect.left + winX
    },
    parentDims: {
      width: parRect.width,
      height: parRect.height,
      offset: {
        top: parRect.top + winY,
        left: parRect.left + winX
      }
    },
    windowDims: {
      width: winRect.width,
      height: winRect.height,
      offset: {
        top: winY,
        left: winX
      }
    }
  };
}
/**
 * Returns an object of top and left integer pixel values for dynamically rendered elements,
 * such as: Tooltip, Reveal, and Dropdown. Maintained for backwards compatibility, and where
 * you don't know alignment, but generally from
 * 6.4 forward you should use GetExplicitOffsets, as GetOffsets conflates position and alignment.
 * @function
 * @param {jQuery} element - jQuery object for the element being positioned.
 * @param {jQuery} anchor - jQuery object for the element's anchor point.
 * @param {String} position - a string relating to the desired position of the element, relative to it's anchor
 * @param {Number} vOffset - integer pixel value of desired vertical separation between anchor and element.
 * @param {Number} hOffset - integer pixel value of desired horizontal separation between anchor and element.
 * @param {Boolean} isOverflow - if a collision event is detected, sets to true to default the element to full width - any desired offset.
 * TODO alter/rewrite to work with `em` values as well/instead of pixels
 */


function GetOffsets(element, anchor, position, vOffset, hOffset, isOverflow) {
  console.log("NOTE: GetOffsets is deprecated in favor of GetExplicitOffsets and will be removed in 6.5");

  switch (position) {
    case 'top':
      return Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_0__["rtl"])() ? GetExplicitOffsets(element, anchor, 'top', 'left', vOffset, hOffset, isOverflow) : GetExplicitOffsets(element, anchor, 'top', 'right', vOffset, hOffset, isOverflow);

    case 'bottom':
      return Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_0__["rtl"])() ? GetExplicitOffsets(element, anchor, 'bottom', 'left', vOffset, hOffset, isOverflow) : GetExplicitOffsets(element, anchor, 'bottom', 'right', vOffset, hOffset, isOverflow);

    case 'center top':
      return GetExplicitOffsets(element, anchor, 'top', 'center', vOffset, hOffset, isOverflow);

    case 'center bottom':
      return GetExplicitOffsets(element, anchor, 'bottom', 'center', vOffset, hOffset, isOverflow);

    case 'center left':
      return GetExplicitOffsets(element, anchor, 'left', 'center', vOffset, hOffset, isOverflow);

    case 'center right':
      return GetExplicitOffsets(element, anchor, 'right', 'center', vOffset, hOffset, isOverflow);

    case 'left bottom':
      return GetExplicitOffsets(element, anchor, 'bottom', 'left', vOffset, hOffset, isOverflow);

    case 'right bottom':
      return GetExplicitOffsets(element, anchor, 'bottom', 'right', vOffset, hOffset, isOverflow);
    // Backwards compatibility... this along with the reveal and reveal full
    // classes are the only ones that didn't reference anchor

    case 'center':
      return {
        left: $eleDims.windowDims.offset.left + $eleDims.windowDims.width / 2 - $eleDims.width / 2 + hOffset,
        top: $eleDims.windowDims.offset.top + $eleDims.windowDims.height / 2 - ($eleDims.height / 2 + vOffset)
      };

    case 'reveal':
      return {
        left: ($eleDims.windowDims.width - $eleDims.width) / 2 + hOffset,
        top: $eleDims.windowDims.offset.top + vOffset
      };

    case 'reveal full':
      return {
        left: $eleDims.windowDims.offset.left,
        top: $eleDims.windowDims.offset.top
      };
      break;

    default:
      return {
        left: Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_0__["rtl"])() ? $anchorDims.offset.left - $eleDims.width + $anchorDims.width - hOffset : $anchorDims.offset.left + hOffset,
        top: $anchorDims.offset.top + $anchorDims.height + vOffset
      };
  }
}

function GetExplicitOffsets(element, anchor, position, alignment, vOffset, hOffset, isOverflow) {
  var $eleDims = GetDimensions(element),
      $anchorDims = anchor ? GetDimensions(anchor) : null;
  var topVal, leftVal; // set position related attribute

  switch (position) {
    case 'top':
      topVal = $anchorDims.offset.top - ($eleDims.height + vOffset);
      break;

    case 'bottom':
      topVal = $anchorDims.offset.top + $anchorDims.height + vOffset;
      break;

    case 'left':
      leftVal = $anchorDims.offset.left - ($eleDims.width + hOffset);
      break;

    case 'right':
      leftVal = $anchorDims.offset.left + $anchorDims.width + hOffset;
      break;
  } // set alignment related attribute


  switch (position) {
    case 'top':
    case 'bottom':
      switch (alignment) {
        case 'left':
          leftVal = $anchorDims.offset.left + hOffset;
          break;

        case 'right':
          leftVal = $anchorDims.offset.left - $eleDims.width + $anchorDims.width - hOffset;
          break;

        case 'center':
          leftVal = isOverflow ? hOffset : $anchorDims.offset.left + $anchorDims.width / 2 - $eleDims.width / 2 + hOffset;
          break;
      }

      break;

    case 'right':
    case 'left':
      switch (alignment) {
        case 'bottom':
          topVal = $anchorDims.offset.top - vOffset + $anchorDims.height - $eleDims.height;
          break;

        case 'top':
          topVal = $anchorDims.offset.top + vOffset;
          break;

        case 'center':
          topVal = $anchorDims.offset.top + vOffset + $anchorDims.height / 2 - $eleDims.height / 2;
          break;
      }

      break;
  }

  return {
    top: topVal,
    left: leftVal
  };
}



/***/ }),

/***/ "./js/foundation.util.imageLoader.js":
/*!*******************************************!*\
  !*** ./js/foundation.util.imageLoader.js ***!
  \*******************************************/
/*! exports provided: onImagesLoaded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onImagesLoaded", function() { return onImagesLoaded; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);



/**
 * Runs a callback function when images are fully loaded.
 * @param {Object} images - Image(s) to check if loaded.
 * @param {Func} callback - Function to execute when image is fully loaded.
 */

function onImagesLoaded(images, callback) {
  var self = this,
      unloaded = images.length;

  if (unloaded === 0) {
    callback();
  }

  images.each(function () {
    // Check if image is loaded
    if (this.complete && typeof this.naturalWidth !== 'undefined') {
      singleImageLoaded();
    } else {
      // If the above check failed, simulate loading on detached element.
      var image = new Image(); // Still count image as loaded if it finalizes with an error.

      var events = "load.zf.images error.zf.images";
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(image).one(events, function me(event) {
        // Unbind the event listeners. We're using 'one' but only one of the two events will have fired.
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).off(events, me);
        singleImageLoaded();
      });
      image.src = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('src');
    }
  });

  function singleImageLoaded() {
    unloaded--;

    if (unloaded === 0) {
      callback();
    }
  }
}



/***/ }),

/***/ "./js/foundation.util.keyboard.js":
/*!****************************************!*\
  !*** ./js/foundation.util.keyboard.js ***!
  \****************************************/
/*! exports provided: Keyboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Keyboard", function() { return Keyboard; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.core.utils */ "./js/foundation.core.utils.js");
/*******************************************
 *                                         *
 * This util was created by Marius Olbertz *
 * Please thank Marius on GitHub /owlbertz *
 * or the web http://www.mariusolbertz.de/ *
 *                                         *
 ******************************************/




var keyCodes = {
  9: 'TAB',
  13: 'ENTER',
  27: 'ESCAPE',
  32: 'SPACE',
  35: 'END',
  36: 'HOME',
  37: 'ARROW_LEFT',
  38: 'ARROW_UP',
  39: 'ARROW_RIGHT',
  40: 'ARROW_DOWN'
};
var commands = {}; // Functions pulled out to be referenceable from internals

function findFocusable($element) {
  if (!$element) {
    return false;
  }

  return $element.find('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]').filter(function () {
    if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).is(':visible') || jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('tabindex') < 0) {
      return false;
    } //only have visible elements and those that have a tabindex greater or equal 0


    return true;
  });
}

function parseKey(event) {
  var key = keyCodes[event.which || event.keyCode] || String.fromCharCode(event.which).toUpperCase(); // Remove un-printable characters, e.g. for `fromCharCode` calls for CTRL only events

  key = key.replace(/\W+/, '');
  if (event.shiftKey) key = "SHIFT_".concat(key);
  if (event.ctrlKey) key = "CTRL_".concat(key);
  if (event.altKey) key = "ALT_".concat(key); // Remove trailing underscore, in case only modifiers were used (e.g. only `CTRL_ALT`)

  key = key.replace(/_$/, '');
  return key;
}

var Keyboard = {
  keys: getKeyCodes(keyCodes),

  /**
   * Parses the (keyboard) event and returns a String that represents its key
   * Can be used like Foundation.parseKey(event) === Foundation.keys.SPACE
   * @param {Event} event - the event generated by the event handler
   * @return String key - String that represents the key pressed
   */
  parseKey: parseKey,

  /**
   * Handles the given (keyboard) event
   * @param {Event} event - the event generated by the event handler
   * @param {String} component - Foundation component's name, e.g. Slider or Reveal
   * @param {Objects} functions - collection of functions that are to be executed
   */
  handleKey: function handleKey(event, component, functions) {
    var commandList = commands[component],
        keyCode = this.parseKey(event),
        cmds,
        command,
        fn;
    if (!commandList) return console.warn('Component not defined!');

    if (typeof commandList.ltr === 'undefined') {
      // this component does not differentiate between ltr and rtl
      cmds = commandList; // use plain list
    } else {
      // merge ltr and rtl: if document is rtl, rtl overwrites ltr and vice versa
      if (Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__["rtl"])()) cmds = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, commandList.ltr, commandList.rtl);else cmds = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, commandList.rtl, commandList.ltr);
    }

    command = cmds[keyCode];
    fn = functions[command];

    if (fn && typeof fn === 'function') {
      // execute function  if exists
      var returnValue = fn.apply();

      if (functions.handled || typeof functions.handled === 'function') {
        // execute function when event was handled
        functions.handled(returnValue);
      }
    } else {
      if (functions.unhandled || typeof functions.unhandled === 'function') {
        // execute function when event was not handled
        functions.unhandled();
      }
    }
  },

  /**
   * Finds all focusable elements within the given `$element`
   * @param {jQuery} $element - jQuery object to search within
   * @return {jQuery} $focusable - all focusable elements within `$element`
   */
  findFocusable: findFocusable,

  /**
   * Returns the component name name
   * @param {Object} component - Foundation component, e.g. Slider or Reveal
   * @return String componentName
   */
  register: function register(componentName, cmds) {
    commands[componentName] = cmds;
  },
  // TODO9438: These references to Keyboard need to not require global. Will 'this' work in this context?
  //

  /**
   * Traps the focus in the given element.
   * @param  {jQuery} $element  jQuery object to trap the foucs into.
   */
  trapFocus: function trapFocus($element) {
    var $focusable = findFocusable($element),
        $firstFocusable = $focusable.eq(0),
        $lastFocusable = $focusable.eq(-1);
    $element.on('keydown.zf.trapfocus', function (event) {
      if (event.target === $lastFocusable[0] && parseKey(event) === 'TAB') {
        event.preventDefault();
        $firstFocusable.focus();
      } else if (event.target === $firstFocusable[0] && parseKey(event) === 'SHIFT_TAB') {
        event.preventDefault();
        $lastFocusable.focus();
      }
    });
  },

  /**
   * Releases the trapped focus from the given element.
   * @param  {jQuery} $element  jQuery object to release the focus for.
   */
  releaseFocus: function releaseFocus($element) {
    $element.off('keydown.zf.trapfocus');
  }
};
/*
 * Constants for easier comparing.
 * Can be used like Foundation.parseKey(event) === Foundation.keys.SPACE
 */

function getKeyCodes(kcs) {
  var k = {};

  for (var kc in kcs) {
    k[kcs[kc]] = kcs[kc];
  }

  return k;
}



/***/ }),

/***/ "./js/foundation.util.mediaQuery.js":
/*!******************************************!*\
  !*** ./js/foundation.util.mediaQuery.js ***!
  \******************************************/
/*! exports provided: MediaQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaQuery", function() { return MediaQuery; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

 // Default set of media queries

var defaultQueries = {
  'default': 'only screen',
  landscape: 'only screen and (orientation: landscape)',
  portrait: 'only screen and (orientation: portrait)',
  retina: 'only screen and (-webkit-min-device-pixel-ratio: 2),' + 'only screen and (min--moz-device-pixel-ratio: 2),' + 'only screen and (-o-min-device-pixel-ratio: 2/1),' + 'only screen and (min-device-pixel-ratio: 2),' + 'only screen and (min-resolution: 192dpi),' + 'only screen and (min-resolution: 2dppx)'
}; // matchMedia() polyfill - Test a CSS media type/query in JS.
// Authors & copyright(c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. MIT license

/* eslint-disable */

window.matchMedia || (window.matchMedia = function () {
  "use strict"; // For browsers that support matchMedium api such as IE 9 and webkit

  var styleMedia = window.styleMedia || window.media; // For those that don't support matchMedium

  if (!styleMedia) {
    var style = document.createElement('style'),
        script = document.getElementsByTagName('script')[0],
        info = null;
    style.type = 'text/css';
    style.id = 'matchmediajs-test';

    if (!script) {
      document.head.appendChild(style);
    } else {
      script.parentNode.insertBefore(style, script);
    } // 'style.currentStyle' is used by IE <= 8 and 'window.getComputedStyle' for all other browsers


    info = 'getComputedStyle' in window && window.getComputedStyle(style, null) || style.currentStyle;
    styleMedia = {
      matchMedium: function matchMedium(media) {
        var text = '@media ' + media + '{ #matchmediajs-test { width: 1px; } }'; // 'style.styleSheet' is used by IE <= 8 and 'style.textContent' for all other browsers

        if (style.styleSheet) {
          style.styleSheet.cssText = text;
        } else {
          style.textContent = text;
        } // Test if media query is true or false


        return info.width === '1px';
      }
    };
  }

  return function (media) {
    return {
      matches: styleMedia.matchMedium(media || 'all'),
      media: media || 'all'
    };
  };
}());
/* eslint-enable */

var MediaQuery = {
  queries: [],
  current: '',

  /**
   * Initializes the media query helper, by extracting the breakpoint list from the CSS and activating the breakpoint watcher.
   * @function
   * @private
   */
  _init: function _init() {
    var self = this;
    var $meta = jquery__WEBPACK_IMPORTED_MODULE_0___default()('meta.foundation-mq');

    if (!$meta.length) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('<meta class="foundation-mq">').appendTo(document.head);
    }

    var extractedStyles = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.foundation-mq').css('font-family');
    var namedQueries;
    namedQueries = parseStyleToObject(extractedStyles);

    for (var key in namedQueries) {
      if (namedQueries.hasOwnProperty(key)) {
        self.queries.push({
          name: key,
          value: "only screen and (min-width: ".concat(namedQueries[key], ")")
        });
      }
    }

    this.current = this._getCurrentSize();

    this._watcher();
  },

  /**
   * Checks if the screen is at least as wide as a breakpoint.
   * @function
   * @param {String} size - Name of the breakpoint to check.
   * @returns {Boolean} `true` if the breakpoint matches, `false` if it's smaller.
   */
  atLeast: function atLeast(size) {
    var query = this.get(size);

    if (query) {
      return window.matchMedia(query).matches;
    }

    return false;
  },

  /**
   * Checks if the screen matches to a breakpoint.
   * @function
   * @param {String} size - Name of the breakpoint to check, either 'small only' or 'small'. Omitting 'only' falls back to using atLeast() method.
   * @returns {Boolean} `true` if the breakpoint matches, `false` if it does not.
   */
  is: function is(size) {
    size = size.trim().split(' ');

    if (size.length > 1 && size[1] === 'only') {
      if (size[0] === this._getCurrentSize()) return true;
    } else {
      return this.atLeast(size[0]);
    }

    return false;
  },

  /**
   * Gets the media query of a breakpoint.
   * @function
   * @param {String} size - Name of the breakpoint to get.
   * @returns {String|null} - The media query of the breakpoint, or `null` if the breakpoint doesn't exist.
   */
  get: function get(size) {
    for (var i in this.queries) {
      if (this.queries.hasOwnProperty(i)) {
        var query = this.queries[i];
        if (size === query.name) return query.value;
      }
    }

    return null;
  },

  /**
   * Gets the current breakpoint name by testing every breakpoint and returning the last one to match (the biggest one).
   * @function
   * @private
   * @returns {String} Name of the current breakpoint.
   */
  _getCurrentSize: function _getCurrentSize() {
    var matched;

    for (var i = 0; i < this.queries.length; i++) {
      var query = this.queries[i];

      if (window.matchMedia(query.value).matches) {
        matched = query;
      }
    }

    if (_typeof(matched) === 'object') {
      return matched.name;
    } else {
      return matched;
    }
  },

  /**
   * Activates the breakpoint watcher, which fires an event on the window whenever the breakpoint changes.
   * @function
   * @private
   */
  _watcher: function _watcher() {
    var _this = this;

    jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off('resize.zf.mediaquery').on('resize.zf.mediaquery', function () {
      var newSize = _this._getCurrentSize(),
          currentSize = _this.current;

      if (newSize !== currentSize) {
        // Change the current media query
        _this.current = newSize; // Broadcast the media query change on the window

        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).trigger('changed.zf.mediaquery', [newSize, currentSize]);
      }
    });
  }
}; // Thank you: https://github.com/sindresorhus/query-string

function parseStyleToObject(str) {
  var styleObject = {};

  if (typeof str !== 'string') {
    return styleObject;
  }

  str = str.trim().slice(1, -1); // browsers re-quote string style values

  if (!str) {
    return styleObject;
  }

  styleObject = str.split('&').reduce(function (ret, param) {
    var parts = param.replace(/\+/g, ' ').split('=');
    var key = parts[0];
    var val = parts[1];
    key = decodeURIComponent(key); // missing `=` should be `null`:
    // http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters

    val = typeof val === 'undefined' ? null : decodeURIComponent(val);

    if (!ret.hasOwnProperty(key)) {
      ret[key] = val;
    } else if (Array.isArray(ret[key])) {
      ret[key].push(val);
    } else {
      ret[key] = [ret[key], val];
    }

    return ret;
  }, {});
  return styleObject;
}



/***/ }),

/***/ "./js/foundation.util.motion.js":
/*!**************************************!*\
  !*** ./js/foundation.util.motion.js ***!
  \**************************************/
/*! exports provided: Move, Motion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Move", function() { return Move; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Motion", function() { return Motion; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.core.utils */ "./js/foundation.core.utils.js");




/**
 * Motion module.
 * @module foundation.motion
 */

var initClasses = ['mui-enter', 'mui-leave'];
var activeClasses = ['mui-enter-active', 'mui-leave-active'];
var Motion = {
  animateIn: function animateIn(element, animation, cb) {
    animate(true, element, animation, cb);
  },
  animateOut: function animateOut(element, animation, cb) {
    animate(false, element, animation, cb);
  }
};

function Move(duration, elem, fn) {
  var anim,
      prog,
      start = null; // console.log('called');

  if (duration === 0) {
    fn.apply(elem);
    elem.trigger('finished.zf.animate', [elem]).triggerHandler('finished.zf.animate', [elem]);
    return;
  }

  function move(ts) {
    if (!start) start = ts; // console.log(start, ts);

    prog = ts - start;
    fn.apply(elem);

    if (prog < duration) {
      anim = window.requestAnimationFrame(move, elem);
    } else {
      window.cancelAnimationFrame(anim);
      elem.trigger('finished.zf.animate', [elem]).triggerHandler('finished.zf.animate', [elem]);
    }
  }

  anim = window.requestAnimationFrame(move);
}
/**
 * Animates an element in or out using a CSS transition class.
 * @function
 * @private
 * @param {Boolean} isIn - Defines if the animation is in or out.
 * @param {Object} element - jQuery or HTML object to animate.
 * @param {String} animation - CSS class to use.
 * @param {Function} cb - Callback to run when animation is finished.
 */


function animate(isIn, element, animation, cb) {
  element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).eq(0);
  if (!element.length) return;
  var initClass = isIn ? initClasses[0] : initClasses[1];
  var activeClass = isIn ? activeClasses[0] : activeClasses[1]; // Set up the animation

  reset();
  element.addClass(animation).css('transition', 'none');
  requestAnimationFrame(function () {
    element.addClass(initClass);
    if (isIn) element.show();
  }); // Start the animation

  requestAnimationFrame(function () {
    element[0].offsetWidth;
    element.css('transition', '').addClass(activeClass);
  }); // Clean up the animation when it finishes

  element.one(Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__["transitionend"])(element), finish); // Hides the element (for out animations), resets the element, and runs a callback

  function finish() {
    if (!isIn) element.hide();
    reset();
    if (cb) cb.apply(element);
  } // Resets transitions and removes motion-specific classes


  function reset() {
    element[0].style.transitionDuration = 0;
    element.removeClass("".concat(initClass, " ").concat(activeClass, " ").concat(animation));
  }
}



/***/ }),

/***/ "./js/foundation.util.nest.js":
/*!************************************!*\
  !*** ./js/foundation.util.nest.js ***!
  \************************************/
/*! exports provided: Nest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nest", function() { return Nest; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);



var Nest = {
  Feather: function Feather(menu) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'zf';
    menu.attr('role', 'menubar');
    var items = menu.find('li').attr({
      'role': 'menuitem'
    }),
        subMenuClass = "is-".concat(type, "-submenu"),
        subItemClass = "".concat(subMenuClass, "-item"),
        hasSubClass = "is-".concat(type, "-submenu-parent"),
        applyAria = type !== 'accordion'; // Accordions handle their own ARIA attriutes.

    items.each(function () {
      var $item = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
          $sub = $item.children('ul');

      if ($sub.length) {
        $item.addClass(hasSubClass);
        $sub.addClass("submenu ".concat(subMenuClass)).attr({
          'data-submenu': ''
        });

        if (applyAria) {
          $item.attr({
            'aria-haspopup': true,
            'aria-label': $item.children('a:first').text()
          }); // Note:  Drilldowns behave differently in how they hide, and so need
          // additional attributes.  We should look if this possibly over-generalized
          // utility (Nest) is appropriate when we rework menus in 6.4

          if (type === 'drilldown') {
            $item.attr({
              'aria-expanded': false
            });
          }
        }

        $sub.addClass("submenu ".concat(subMenuClass)).attr({
          'data-submenu': '',
          'role': 'menubar'
        });

        if (type === 'drilldown') {
          $sub.attr({
            'aria-hidden': true
          });
        }
      }

      if ($item.parent('[data-submenu]').length) {
        $item.addClass("is-submenu-item ".concat(subItemClass));
      }
    });
    return;
  },
  Burn: function Burn(menu, type) {
    var //items = menu.find('li'),
    subMenuClass = "is-".concat(type, "-submenu"),
        subItemClass = "".concat(subMenuClass, "-item"),
        hasSubClass = "is-".concat(type, "-submenu-parent");
    menu.find('>li, > li > ul, .menu, .menu > li, [data-submenu] > li').removeClass("".concat(subMenuClass, " ").concat(subItemClass, " ").concat(hasSubClass, " is-submenu-item submenu is-active")).removeAttr('data-submenu').css('display', '');
  }
};


/***/ }),

/***/ "./js/foundation.util.timer.js":
/*!*************************************!*\
  !*** ./js/foundation.util.timer.js ***!
  \*************************************/
/*! exports provided: Timer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Timer", function() { return Timer; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);




function Timer(elem, options, cb) {
  var _this = this,
      duration = options.duration,
      //options is an object for easily adding features later.
  nameSpace = Object.keys(elem.data())[0] || 'timer',
      remain = -1,
      start,
      timer;

  this.isPaused = false;

  this.restart = function () {
    remain = -1;
    clearTimeout(timer);
    this.start();
  };

  this.start = function () {
    this.isPaused = false; // if(!elem.data('paused')){ return false; }//maybe implement this sanity check if used for other things.

    clearTimeout(timer);
    remain = remain <= 0 ? duration : remain;
    elem.data('paused', false);
    start = Date.now();
    timer = setTimeout(function () {
      if (options.infinite) {
        _this.restart(); //rerun the timer.

      }

      if (cb && typeof cb === 'function') {
        cb();
      }
    }, remain);
    elem.trigger("timerstart.zf.".concat(nameSpace));
  };

  this.pause = function () {
    this.isPaused = true; //if(elem.data('paused')){ return false; }//maybe implement this sanity check if used for other things.

    clearTimeout(timer);
    elem.data('paused', true);
    var end = Date.now();
    remain = remain - (end - start);
    elem.trigger("timerpaused.zf.".concat(nameSpace));
  };
}



/***/ }),

/***/ "./js/foundation.util.touch.js":
/*!*************************************!*\
  !*** ./js/foundation.util.touch.js ***!
  \*************************************/
/*! exports provided: Touch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Touch", function() { return Touch; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//**************************************************
//**Work inspired by multiple jquery swipe plugins**
//**Done by Yohai Ararat ***************************
//**************************************************

var Touch = {};
var startPosX,
    startPosY,
    startTime,
    elapsedTime,
    startEvent,
    isMoving = false,
    didMoved = false;

function onTouchEnd(e) {
  this.removeEventListener('touchmove', onTouchMove);
  this.removeEventListener('touchend', onTouchEnd); // If the touch did not move, consider it as a "tap"

  if (!didMoved) {
    var tapEvent = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.Event('tap', startEvent || e);
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).trigger(tapEvent);
  }

  startEvent = null;
  isMoving = false;
  didMoved = false;
}

function onTouchMove(e) {
  if (jquery__WEBPACK_IMPORTED_MODULE_0___default.a.spotSwipe.preventDefault) {
    e.preventDefault();
  }

  if (isMoving) {
    var x = e.touches[0].pageX;
    var y = e.touches[0].pageY;
    var dx = startPosX - x;
    var dy = startPosY - y;
    var dir;
    didMoved = true;
    elapsedTime = new Date().getTime() - startTime;

    if (Math.abs(dx) >= jquery__WEBPACK_IMPORTED_MODULE_0___default.a.spotSwipe.moveThreshold && elapsedTime <= jquery__WEBPACK_IMPORTED_MODULE_0___default.a.spotSwipe.timeThreshold) {
      dir = dx > 0 ? 'left' : 'right';
    } // else if(Math.abs(dy) >= $.spotSwipe.moveThreshold && elapsedTime <= $.spotSwipe.timeThreshold) {
    //   dir = dy > 0 ? 'down' : 'up';
    // }


    if (dir) {
      e.preventDefault();
      onTouchEnd.apply(this, arguments);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).trigger(jquery__WEBPACK_IMPORTED_MODULE_0___default.a.Event('swipe', e), dir).trigger(jquery__WEBPACK_IMPORTED_MODULE_0___default.a.Event("swipe".concat(dir), e));
    }
  }
}

function onTouchStart(e) {
  if (e.touches.length == 1) {
    startPosX = e.touches[0].pageX;
    startPosY = e.touches[0].pageY;
    startEvent = e;
    isMoving = true;
    didMoved = false;
    startTime = new Date().getTime();
    this.addEventListener('touchmove', onTouchMove, false);
    this.addEventListener('touchend', onTouchEnd, false);
  }
}

function init() {
  this.addEventListener && this.addEventListener('touchstart', onTouchStart, false);
}

function teardown() {
  this.removeEventListener('touchstart', onTouchStart);
}

var SpotSwipe =
/*#__PURE__*/
function () {
  function SpotSwipe($) {
    _classCallCheck(this, SpotSwipe);

    this.version = '1.0.0';
    this.enabled = 'ontouchstart' in document.documentElement;
    this.preventDefault = false;
    this.moveThreshold = 75;
    this.timeThreshold = 200;
    this.$ = $;

    this._init();
  }

  _createClass(SpotSwipe, [{
    key: "_init",
    value: function _init() {
      var $ = this.$;
      $.event.special.swipe = {
        setup: init
      };
      $.event.special.tap = {
        setup: init
      };
      $.each(['left', 'up', 'down', 'right'], function () {
        $.event.special["swipe".concat(this)] = {
          setup: function setup() {
            $(this).on('swipe', $.noop);
          }
        };
      });
    }
  }]);

  return SpotSwipe;
}();
/****************************************************
 * As far as I can tell, both setupSpotSwipe and    *
 * setupTouchHandler should be idempotent,          *
 * because they directly replace functions &        *
 * values, and do not add event handlers directly.  *
 ****************************************************/


Touch.setupSpotSwipe = function ($) {
  $.spotSwipe = new SpotSwipe($);
};
/****************************************************
 * Method for adding pseudo drag events to elements *
 ***************************************************/


Touch.setupTouchHandler = function ($) {
  $.fn.addTouch = function () {
    this.each(function (i, el) {
      $(el).bind('touchstart touchmove touchend touchcancel', function (event) {
        //we pass the original event object because the jQuery event
        //object is normalized to w3c specs and does not provide the TouchList
        handleTouch(event);
      });
    });

    var handleTouch = function handleTouch(event) {
      var touches = event.changedTouches,
          first = touches[0],
          eventTypes = {
        touchstart: 'mousedown',
        touchmove: 'mousemove',
        touchend: 'mouseup'
      },
          type = eventTypes[event.type],
          simulatedEvent;

      if ('MouseEvent' in window && typeof window.MouseEvent === 'function') {
        simulatedEvent = new window.MouseEvent(type, {
          'bubbles': true,
          'cancelable': true,
          'screenX': first.screenX,
          'screenY': first.screenY,
          'clientX': first.clientX,
          'clientY': first.clientY
        });
      } else {
        simulatedEvent = document.createEvent('MouseEvent');
        simulatedEvent.initMouseEvent(type, true, true, window, 1, first.screenX, first.screenY, first.clientX, first.clientY, false, false, false, false, 0
        /*left*/
        , null);
      }

      first.target.dispatchEvent(simulatedEvent);
    };
  };
};

Touch.init = function ($) {
  if (typeof $.spotSwipe === 'undefined') {
    Touch.setupSpotSwipe($);
    Touch.setupTouchHandler($);
  }
};



/***/ }),

/***/ "./js/foundation.util.triggers.js":
/*!****************************************!*\
  !*** ./js/foundation.util.triggers.js ***!
  \****************************************/
/*! exports provided: Triggers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Triggers", function() { return Triggers; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.core.utils */ "./js/foundation.core.utils.js");
/* harmony import */ var _foundation_util_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.util.motion */ "./js/foundation.util.motion.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }





var MutationObserver = function () {
  var prefixes = ['WebKit', 'Moz', 'O', 'Ms', ''];

  for (var i = 0; i < prefixes.length; i++) {
    if ("".concat(prefixes[i], "MutationObserver") in window) {
      return window["".concat(prefixes[i], "MutationObserver")];
    }
  }

  return false;
}();

var triggers = function triggers(el, type) {
  el.data(type).split(' ').forEach(function (id) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat(id))[type === 'close' ? 'trigger' : 'triggerHandler']("".concat(type, ".zf.trigger"), [el]);
  });
};

var Triggers = {
  Listeners: {
    Basic: {},
    Global: {}
  },
  Initializers: {}
};
Triggers.Listeners.Basic = {
  openListener: function openListener() {
    triggers(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this), 'open');
  },
  closeListener: function closeListener() {
    var id = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('close');

    if (id) {
      triggers(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this), 'close');
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).trigger('close.zf.trigger');
    }
  },
  toggleListener: function toggleListener() {
    var id = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('toggle');

    if (id) {
      triggers(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this), 'toggle');
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).trigger('toggle.zf.trigger');
    }
  },
  closeableListener: function closeableListener(e) {
    e.stopPropagation();
    var animation = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('closable');

    if (animation !== '') {
      _foundation_util_motion__WEBPACK_IMPORTED_MODULE_2__["Motion"].animateOut(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this), animation, function () {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).trigger('closed.zf');
      });
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).fadeOut().trigger('closed.zf');
    }
  },
  toggleFocusListener: function toggleFocusListener() {
    var id = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('toggle-focus');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat(id)).triggerHandler('toggle.zf.trigger', [jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)]);
  }
}; // Elements with [data-open] will reveal a plugin that supports it when clicked.

Triggers.Initializers.addOpenListener = function ($elem) {
  $elem.off('click.zf.trigger', Triggers.Listeners.Basic.openListener);
  $elem.on('click.zf.trigger', '[data-open]', Triggers.Listeners.Basic.openListener);
}; // Elements with [data-close] will close a plugin that supports it when clicked.
// If used without a value on [data-close], the event will bubble, allowing it to close a parent component.


Triggers.Initializers.addCloseListener = function ($elem) {
  $elem.off('click.zf.trigger', Triggers.Listeners.Basic.closeListener);
  $elem.on('click.zf.trigger', '[data-close]', Triggers.Listeners.Basic.closeListener);
}; // Elements with [data-toggle] will toggle a plugin that supports it when clicked.


Triggers.Initializers.addToggleListener = function ($elem) {
  $elem.off('click.zf.trigger', Triggers.Listeners.Basic.toggleListener);
  $elem.on('click.zf.trigger', '[data-toggle]', Triggers.Listeners.Basic.toggleListener);
}; // Elements with [data-closable] will respond to close.zf.trigger events.


Triggers.Initializers.addCloseableListener = function ($elem) {
  $elem.off('close.zf.trigger', Triggers.Listeners.Basic.closeableListener);
  $elem.on('close.zf.trigger', '[data-closeable], [data-closable]', Triggers.Listeners.Basic.closeableListener);
}; // Elements with [data-toggle-focus] will respond to coming in and out of focus


Triggers.Initializers.addToggleFocusListener = function ($elem) {
  $elem.off('focus.zf.trigger blur.zf.trigger', Triggers.Listeners.Basic.toggleFocusListener);
  $elem.on('focus.zf.trigger blur.zf.trigger', '[data-toggle-focus]', Triggers.Listeners.Basic.toggleFocusListener);
}; // More Global/complex listeners and triggers


Triggers.Listeners.Global = {
  resizeListener: function resizeListener($nodes) {
    if (!MutationObserver) {
      //fallback for IE 9
      $nodes.each(function () {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).triggerHandler('resizeme.zf.trigger');
      });
    } //trigger all listening elements and signal a resize event


    $nodes.attr('data-events', "resize");
  },
  scrollListener: function scrollListener($nodes) {
    if (!MutationObserver) {
      //fallback for IE 9
      $nodes.each(function () {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).triggerHandler('scrollme.zf.trigger');
      });
    } //trigger all listening elements and signal a scroll event


    $nodes.attr('data-events', "scroll");
  },
  closeMeListener: function closeMeListener(e, pluginId) {
    var plugin = e.namespace.split('.')[0];
    var plugins = jquery__WEBPACK_IMPORTED_MODULE_0___default()("[data-".concat(plugin, "]")).not("[data-yeti-box=\"".concat(pluginId, "\"]"));
    plugins.each(function () {
      var _this = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);

      _this.triggerHandler('close.zf.trigger', [_this]);
    });
  } // Global, parses whole document.

};

Triggers.Initializers.addClosemeListener = function (pluginName) {
  var yetiBoxes = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-yeti-box]'),
      plugNames = ['dropdown', 'tooltip', 'reveal'];

  if (pluginName) {
    if (typeof pluginName === 'string') {
      plugNames.push(pluginName);
    } else if (_typeof(pluginName) === 'object' && typeof pluginName[0] === 'string') {
      plugNames.concat(pluginName);
    } else {
      console.error('Plugin names must be strings');
    }
  }

  if (yetiBoxes.length) {
    var listeners = plugNames.map(function (name) {
      return "closeme.zf.".concat(name);
    }).join(' ');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(listeners).on(listeners, Triggers.Listeners.Global.closeMeListener);
  }
};

function debounceGlobalListener(debounce, trigger, listener) {
  var timer,
      args = Array.prototype.slice.call(arguments, 3);
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(trigger).on(trigger, function (e) {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(function () {
      listener.apply(null, args);
    }, debounce || 10); //default time to emit scroll event
  });
}

Triggers.Initializers.addResizeListener = function (debounce) {
  var $nodes = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-resize]');

  if ($nodes.length) {
    debounceGlobalListener(debounce, 'resize.zf.trigger', Triggers.Listeners.Global.resizeListener, $nodes);
  }
};

Triggers.Initializers.addScrollListener = function (debounce) {
  var $nodes = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-scroll]');

  if ($nodes.length) {
    debounceGlobalListener(debounce, 'scroll.zf.trigger', Triggers.Listeners.Global.scrollListener, $nodes);
  }
};

Triggers.Initializers.addMutationEventsListener = function ($elem) {
  if (!MutationObserver) {
    return false;
  }

  var $nodes = $elem.find('[data-resize], [data-scroll], [data-mutate]'); //element callback

  var listeningElementsMutation = function listeningElementsMutation(mutationRecordsList) {
    var $target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(mutationRecordsList[0].target); //trigger the event handler for the element depending on type

    switch (mutationRecordsList[0].type) {
      case "attributes":
        if ($target.attr("data-events") === "scroll" && mutationRecordsList[0].attributeName === "data-events") {
          $target.triggerHandler('scrollme.zf.trigger', [$target, window.pageYOffset]);
        }

        if ($target.attr("data-events") === "resize" && mutationRecordsList[0].attributeName === "data-events") {
          $target.triggerHandler('resizeme.zf.trigger', [$target]);
        }

        if (mutationRecordsList[0].attributeName === "style") {
          $target.closest("[data-mutate]").attr("data-events", "mutate");
          $target.closest("[data-mutate]").triggerHandler('mutateme.zf.trigger', [$target.closest("[data-mutate]")]);
        }

        break;

      case "childList":
        $target.closest("[data-mutate]").attr("data-events", "mutate");
        $target.closest("[data-mutate]").triggerHandler('mutateme.zf.trigger', [$target.closest("[data-mutate]")]);
        break;

      default:
        return false;
      //nothing
    }
  };

  if ($nodes.length) {
    //for each element that needs to listen for resizing, scrolling, or mutation add a single observer
    for (var i = 0; i <= $nodes.length - 1; i++) {
      var elementObserver = new MutationObserver(listeningElementsMutation);
      elementObserver.observe($nodes[i], {
        attributes: true,
        childList: true,
        characterData: false,
        subtree: true,
        attributeFilter: ["data-events", "style"]
      });
    }
  }
};

Triggers.Initializers.addSimpleListeners = function () {
  var $document = jquery__WEBPACK_IMPORTED_MODULE_0___default()(document);
  Triggers.Initializers.addOpenListener($document);
  Triggers.Initializers.addCloseListener($document);
  Triggers.Initializers.addToggleListener($document);
  Triggers.Initializers.addCloseableListener($document);
  Triggers.Initializers.addToggleFocusListener($document);
};

Triggers.Initializers.addGlobalListeners = function () {
  var $document = jquery__WEBPACK_IMPORTED_MODULE_0___default()(document);
  Triggers.Initializers.addMutationEventsListener($document);
  Triggers.Initializers.addResizeListener();
  Triggers.Initializers.addScrollListener();
  Triggers.Initializers.addClosemeListener();
};

Triggers.init = function ($, Foundation) {
  Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__["onLoad"])($(window), function () {
    if ($.triggersInitialized !== true) {
      Triggers.Initializers.addSimpleListeners();
      Triggers.Initializers.addGlobalListeners();
      $.triggersInitialized = true;
    }
  });

  if (Foundation) {
    Foundation.Triggers = Triggers; // Legacy included to be backwards compatible for now.

    Foundation.IHearYou = Triggers.Initializers.addGlobalListeners;
  }
};



/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi ./js/entries/foundation.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ncoden/Documents/Documents/Projects/Programmation/Web/2016/Foundation/foundation-sites/js/entries/foundation.js */"./js/entries/foundation.js");


/***/ }),

/***/ "jquery":
/*!********************************************************************************************!*\
  !*** external {"root":["jQuery"],"amd":"jquery","commonjs":"jquery","commonjs2":"jquery"} ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_jquery__;

/***/ })

/******/ });
});
//# sourceMappingURL=foundation.js.map
/**
 * what-input - A global utility for tracking the current input method (mouse, keyboard or touch).
 * @version v5.2.7
 * @link https://github.com/ten1seven/what-input
 * @license MIT
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("whatInput", [], factory);
	else if(typeof exports === 'object')
		exports["whatInput"] = factory();
	else
		root["whatInput"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

	'use strict';

	module.exports = function () {
	  /*
	   * bail out if there is no document or window
	   * (i.e. in a node/non-DOM environment)
	   *
	   * Return a stubbed API instead
	   */
	  if (typeof document === 'undefined' || typeof window === 'undefined') {
	    return {
	      // always return "initial" because no interaction will ever be detected
	      ask: function ask() {
	        return 'initial';
	      },

	      // always return null
	      element: function element() {
	        return null;
	      },

	      // no-op
	      ignoreKeys: function ignoreKeys() {},

	      // no-op
	      specificKeys: function specificKeys() {},

	      // no-op
	      registerOnChange: function registerOnChange() {},

	      // no-op
	      unRegisterOnChange: function unRegisterOnChange() {}
	    };
	  }

	  /*
	   * variables
	   */

	  // cache document.documentElement
	  var docElem = document.documentElement;

	  // currently focused dom element
	  var currentElement = null;

	  // last used input type
	  var currentInput = 'initial';

	  // last used input intent
	  var currentIntent = currentInput;

	  // UNIX timestamp of current event
	  var currentTimestamp = Date.now();

	  // check for a `data-whatpersist` attribute on either the `html` or `body` elements, defaults to `true`
	  var shouldPersist = 'false';

	  // form input types
	  var formInputs = ['button', 'input', 'select', 'textarea'];

	  // empty array for holding callback functions
	  var functionList = [];

	  // list of modifier keys commonly used with the mouse and
	  // can be safely ignored to prevent false keyboard detection
	  var ignoreMap = [16, // shift
	  17, // control
	  18, // alt
	  91, // Windows key / left Apple cmd
	  93 // Windows menu / right Apple cmd
	  ];

	  var specificMap = [];

	  // mapping of events to input types
	  var inputMap = {
	    keydown: 'keyboard',
	    keyup: 'keyboard',
	    mousedown: 'mouse',
	    mousemove: 'mouse',
	    MSPointerDown: 'pointer',
	    MSPointerMove: 'pointer',
	    pointerdown: 'pointer',
	    pointermove: 'pointer',
	    touchstart: 'touch',
	    touchend: 'touch'

	    // boolean: true if the page is being scrolled
	  };var isScrolling = false;

	  // store current mouse position
	  var mousePos = {
	    x: null,
	    y: null

	    // map of IE 10 pointer events
	  };var pointerMap = {
	    2: 'touch',
	    3: 'touch', // treat pen like touch
	    4: 'mouse'

	    // check support for passive event listeners
	  };var supportsPassive = false;

	  try {
	    var opts = Object.defineProperty({}, 'passive', {
	      get: function get() {
	        supportsPassive = true;
	      }
	    });

	    window.addEventListener('test', null, opts);
	  } catch (e) {}
	  // fail silently


	  /*
	   * set up
	   */

	  var setUp = function setUp() {
	    // add correct mouse wheel event mapping to `inputMap`
	    inputMap[detectWheel()] = 'mouse';

	    addListeners();
	  };

	  /*
	   * events
	   */

	  var addListeners = function addListeners() {
	    // `pointermove`, `MSPointerMove`, `mousemove` and mouse wheel event binding
	    // can only demonstrate potential, but not actual, interaction
	    // and are treated separately
	    var options = supportsPassive ? { passive: true } : false;

	    document.addEventListener('DOMContentLoaded', setPersist);

	    // pointer events (mouse, pen, touch)
	    if (window.PointerEvent) {
	      window.addEventListener('pointerdown', setInput);
	      window.addEventListener('pointermove', setIntent);
	    } else if (window.MSPointerEvent) {
	      window.addEventListener('MSPointerDown', setInput);
	      window.addEventListener('MSPointerMove', setIntent);
	    } else {
	      // mouse events
	      window.addEventListener('mousedown', setInput);
	      window.addEventListener('mousemove', setIntent);

	      // touch events
	      if ('ontouchstart' in window) {
	        window.addEventListener('touchstart', setInput, options);
	        window.addEventListener('touchend', setInput);
	      }
	    }

	    // mouse wheel
	    window.addEventListener(detectWheel(), setIntent, options);

	    // keyboard events
	    window.addEventListener('keydown', setInput);
	    window.addEventListener('keyup', setInput);

	    // focus events
	    window.addEventListener('focusin', setElement);
	    window.addEventListener('focusout', clearElement);
	  };

	  // checks if input persistence should happen and
	  // get saved state from session storage if true (defaults to `false`)
	  var setPersist = function setPersist() {
	    shouldPersist = !(docElem.getAttribute('data-whatpersist') || document.body.getAttribute('data-whatpersist') === 'false');

	    if (shouldPersist) {
	      // check for session variables and use if available
	      try {
	        if (window.sessionStorage.getItem('what-input')) {
	          currentInput = window.sessionStorage.getItem('what-input');
	        }

	        if (window.sessionStorage.getItem('what-intent')) {
	          currentIntent = window.sessionStorage.getItem('what-intent');
	        }
	      } catch (e) {
	        // fail silently
	      }
	    }

	    // always run these so at least `initial` state is set
	    doUpdate('input');
	    doUpdate('intent');
	  };

	  // checks conditions before updating new input
	  var setInput = function setInput(event) {
	    var eventKey = event.which;
	    var value = inputMap[event.type];

	    if (value === 'pointer') {
	      value = pointerType(event);
	    }

	    var ignoreMatch = !specificMap.length && ignoreMap.indexOf(eventKey) === -1;

	    var specificMatch = specificMap.length && specificMap.indexOf(eventKey) !== -1;

	    var shouldUpdate = value === 'keyboard' && eventKey && (ignoreMatch || specificMatch) || value === 'mouse' || value === 'touch';

	    // prevent touch detection from being overridden by event execution order
	    if (validateTouch(value)) {
	      shouldUpdate = false;
	    }

	    if (shouldUpdate && currentInput !== value) {
	      currentInput = value;

	      persistInput('input', currentInput);
	      doUpdate('input');
	    }

	    if (shouldUpdate && currentIntent !== value) {
	      // preserve intent for keyboard interaction with form fields
	      var activeElem = document.activeElement;
	      var notFormInput = activeElem && activeElem.nodeName && (formInputs.indexOf(activeElem.nodeName.toLowerCase()) === -1 || activeElem.nodeName.toLowerCase() === 'button' && !checkClosest(activeElem, 'form'));

	      if (notFormInput) {
	        currentIntent = value;

	        persistInput('intent', currentIntent);
	        doUpdate('intent');
	      }
	    }
	  };

	  // updates the doc and `inputTypes` array with new input
	  var doUpdate = function doUpdate(which) {
	    docElem.setAttribute('data-what' + which, which === 'input' ? currentInput : currentIntent);

	    fireFunctions(which);
	  };

	  // updates input intent for `mousemove` and `pointermove`
	  var setIntent = function setIntent(event) {
	    var value = inputMap[event.type];

	    if (value === 'pointer') {
	      value = pointerType(event);
	    }

	    // test to see if `mousemove` happened relative to the screen to detect scrolling versus mousemove
	    detectScrolling(event);

	    // only execute if scrolling isn't happening
	    if ((!isScrolling && !validateTouch(value) || isScrolling && event.type === 'wheel' || event.type === 'mousewheel' || event.type === 'DOMMouseScroll') && currentIntent !== value) {
	      currentIntent = value;

	      persistInput('intent', currentIntent);
	      doUpdate('intent');
	    }
	  };

	  var setElement = function setElement(event) {
	    if (!event.target.nodeName) {
	      // If nodeName is undefined, clear the element
	      // This can happen if click inside an <svg> element.
	      clearElement();
	      return;
	    }

	    currentElement = event.target.nodeName.toLowerCase();
	    docElem.setAttribute('data-whatelement', currentElement);

	    if (event.target.classList && event.target.classList.length) {
	      docElem.setAttribute('data-whatclasses', event.target.classList.toString().replace(' ', ','));
	    }
	  };

	  var clearElement = function clearElement() {
	    currentElement = null;

	    docElem.removeAttribute('data-whatelement');
	    docElem.removeAttribute('data-whatclasses');
	  };

	  var persistInput = function persistInput(which, value) {
	    if (shouldPersist) {
	      try {
	        window.sessionStorage.setItem('what-' + which, value);
	      } catch (e) {
	        // fail silently
	      }
	    }
	  };

	  /*
	   * utilities
	   */

	  var pointerType = function pointerType(event) {
	    if (typeof event.pointerType === 'number') {
	      return pointerMap[event.pointerType];
	    } else {
	      // treat pen like touch
	      return event.pointerType === 'pen' ? 'touch' : event.pointerType;
	    }
	  };

	  // prevent touch detection from being overridden by event execution order
	  var validateTouch = function validateTouch(value) {
	    var timestamp = Date.now();

	    var touchIsValid = value === 'mouse' && currentInput === 'touch' && timestamp - currentTimestamp < 200;

	    currentTimestamp = timestamp;

	    return touchIsValid;
	  };

	  // detect version of mouse wheel event to use
	  // via https://developer.mozilla.org/en-US/docs/Web/API/Element/wheel_event
	  var detectWheel = function detectWheel() {
	    var wheelType = null;

	    // Modern browsers support "wheel"
	    if ('onwheel' in document.createElement('div')) {
	      wheelType = 'wheel';
	    } else {
	      // Webkit and IE support at least "mousewheel"
	      // or assume that remaining browsers are older Firefox
	      wheelType = document.onmousewheel !== undefined ? 'mousewheel' : 'DOMMouseScroll';
	    }

	    return wheelType;
	  };

	  // runs callback functions
	  var fireFunctions = function fireFunctions(type) {
	    for (var i = 0, len = functionList.length; i < len; i++) {
	      if (functionList[i].type === type) {
	        functionList[i].fn.call(undefined, type === 'input' ? currentInput : currentIntent);
	      }
	    }
	  };

	  // finds matching element in an object
	  var objPos = function objPos(match) {
	    for (var i = 0, len = functionList.length; i < len; i++) {
	      if (functionList[i].fn === match) {
	        return i;
	      }
	    }
	  };

	  var detectScrolling = function detectScrolling(event) {
	    if (mousePos.x !== event.screenX || mousePos.y !== event.screenY) {
	      isScrolling = false;

	      mousePos.x = event.screenX;
	      mousePos.y = event.screenY;
	    } else {
	      isScrolling = true;
	    }
	  };

	  // manual version of `closest()`
	  var checkClosest = function checkClosest(elem, tag) {
	    var ElementPrototype = window.Element.prototype;

	    if (!ElementPrototype.matches) {
	      ElementPrototype.matches = ElementPrototype.msMatchesSelector || ElementPrototype.webkitMatchesSelector;
	    }

	    if (!ElementPrototype.closest) {
	      do {
	        if (elem.matches(tag)) {
	          return elem;
	        }

	        elem = elem.parentElement || elem.parentNode;
	      } while (elem !== null && elem.nodeType === 1);

	      return null;
	    } else {
	      return elem.closest(tag);
	    }
	  };

	  /*
	   * init
	   */

	  // don't start script unless browser cuts the mustard
	  // (also passes if polyfills are used)
	  if ('addEventListener' in window && Array.prototype.indexOf) {
	    setUp();
	  }

	  /*
	   * api
	   */

	  return {
	    // returns string: the current input type
	    // opt: 'intent'|'input'
	    // 'input' (default): returns the same value as the `data-whatinput` attribute
	    // 'intent': includes `data-whatintent` value if it's different than `data-whatinput`
	    ask: function ask(opt) {
	      return opt === 'intent' ? currentIntent : currentInput;
	    },

	    // returns string: the currently focused element or null
	    element: function element() {
	      return currentElement;
	    },

	    // overwrites ignored keys with provided array
	    ignoreKeys: function ignoreKeys(arr) {
	      ignoreMap = arr;
	    },

	    // overwrites specific char keys to update on
	    specificKeys: function specificKeys(arr) {
	      specificMap = arr;
	    },

	    // attach functions to input and intent "events"
	    // funct: function to fire on change
	    // eventType: 'input'|'intent'
	    registerOnChange: function registerOnChange(fn, eventType) {
	      functionList.push({
	        fn: fn,
	        type: eventType || 'input'
	      });
	    },

	    unRegisterOnChange: function unRegisterOnChange(fn) {
	      var position = objPos(fn);

	      if (position || position === 0) {
	        functionList.splice(position, 1);
	      }
	    },

	    clearStorage: function clearStorage() {
	      window.sessionStorage.clear();
	    }
	  };
	}();

/***/ })
/******/ ])
});
;
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.AOS=t():e.AOS=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="dist/",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=n(1),a=(o(r),n(6)),u=o(a),c=n(7),s=o(c),f=n(8),d=o(f),l=n(9),p=o(l),m=n(10),b=o(m),v=n(11),y=o(v),g=n(14),h=o(g),w=[],k=!1,x={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},j=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e&&(k=!0),k)return w=(0,y.default)(w,x),(0,b.default)(w,x.once),w},O=function(){w=(0,h.default)(),j()},M=function(){w.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")})},S=function(e){return e===!0||"mobile"===e&&p.default.mobile()||"phone"===e&&p.default.phone()||"tablet"===e&&p.default.tablet()||"function"==typeof e&&e()===!0},_=function(e){x=i(x,e),w=(0,h.default)();var t=document.all&&!window.atob;return S(x.disable)||t?M():(x.disableMutationObserver||d.default.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),x.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",x.easing),document.querySelector("body").setAttribute("data-aos-duration",x.duration),document.querySelector("body").setAttribute("data-aos-delay",x.delay),"DOMContentLoaded"===x.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?j(!0):"load"===x.startEvent?window.addEventListener(x.startEvent,function(){j(!0)}):document.addEventListener(x.startEvent,function(){j(!0)}),window.addEventListener("resize",(0,s.default)(j,x.debounceDelay,!0)),window.addEventListener("orientationchange",(0,s.default)(j,x.debounceDelay,!0)),window.addEventListener("scroll",(0,u.default)(function(){(0,b.default)(w,x.once)},x.throttleDelay)),x.disableMutationObserver||d.default.ready("[data-aos]",O),w)};e.exports={init:_,refresh:j,refreshHard:O}},function(e,t){},,,,,function(e,t){(function(t){"use strict";function n(e,t,n){function o(t){var n=b,o=v;return b=v=void 0,k=t,g=e.apply(o,n)}function r(e){return k=e,h=setTimeout(f,t),M?o(e):g}function a(e){var n=e-w,o=e-k,i=t-n;return S?j(i,y-o):i}function c(e){var n=e-w,o=e-k;return void 0===w||n>=t||n<0||S&&o>=y}function f(){var e=O();return c(e)?d(e):void(h=setTimeout(f,a(e)))}function d(e){return h=void 0,_&&b?o(e):(b=v=void 0,g)}function l(){void 0!==h&&clearTimeout(h),k=0,b=w=v=h=void 0}function p(){return void 0===h?g:d(O())}function m(){var e=O(),n=c(e);if(b=arguments,v=this,w=e,n){if(void 0===h)return r(w);if(S)return h=setTimeout(f,t),o(w)}return void 0===h&&(h=setTimeout(f,t)),g}var b,v,y,g,h,w,k=0,M=!1,S=!1,_=!0;if("function"!=typeof e)throw new TypeError(s);return t=u(t)||0,i(n)&&(M=!!n.leading,S="maxWait"in n,y=S?x(u(n.maxWait)||0,t):y,_="trailing"in n?!!n.trailing:_),m.cancel=l,m.flush=p,m}function o(e,t,o){var r=!0,a=!0;if("function"!=typeof e)throw new TypeError(s);return i(o)&&(r="leading"in o?!!o.leading:r,a="trailing"in o?!!o.trailing:a),n(e,t,{leading:r,maxWait:t,trailing:a})}function i(e){var t="undefined"==typeof e?"undefined":c(e);return!!e&&("object"==t||"function"==t)}function r(e){return!!e&&"object"==("undefined"==typeof e?"undefined":c(e))}function a(e){return"symbol"==("undefined"==typeof e?"undefined":c(e))||r(e)&&k.call(e)==d}function u(e){if("number"==typeof e)return e;if(a(e))return f;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(l,"");var n=m.test(e);return n||b.test(e)?v(e.slice(2),n?2:8):p.test(e)?f:+e}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s="Expected a function",f=NaN,d="[object Symbol]",l=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,b=/^0o[0-7]+$/i,v=parseInt,y="object"==("undefined"==typeof t?"undefined":c(t))&&t&&t.Object===Object&&t,g="object"==("undefined"==typeof self?"undefined":c(self))&&self&&self.Object===Object&&self,h=y||g||Function("return this")(),w=Object.prototype,k=w.toString,x=Math.max,j=Math.min,O=function(){return h.Date.now()};e.exports=o}).call(t,function(){return this}())},function(e,t){(function(t){"use strict";function n(e,t,n){function i(t){var n=b,o=v;return b=v=void 0,O=t,g=e.apply(o,n)}function r(e){return O=e,h=setTimeout(f,t),M?i(e):g}function u(e){var n=e-w,o=e-O,i=t-n;return S?x(i,y-o):i}function s(e){var n=e-w,o=e-O;return void 0===w||n>=t||n<0||S&&o>=y}function f(){var e=j();return s(e)?d(e):void(h=setTimeout(f,u(e)))}function d(e){return h=void 0,_&&b?i(e):(b=v=void 0,g)}function l(){void 0!==h&&clearTimeout(h),O=0,b=w=v=h=void 0}function p(){return void 0===h?g:d(j())}function m(){var e=j(),n=s(e);if(b=arguments,v=this,w=e,n){if(void 0===h)return r(w);if(S)return h=setTimeout(f,t),i(w)}return void 0===h&&(h=setTimeout(f,t)),g}var b,v,y,g,h,w,O=0,M=!1,S=!1,_=!0;if("function"!=typeof e)throw new TypeError(c);return t=a(t)||0,o(n)&&(M=!!n.leading,S="maxWait"in n,y=S?k(a(n.maxWait)||0,t):y,_="trailing"in n?!!n.trailing:_),m.cancel=l,m.flush=p,m}function o(e){var t="undefined"==typeof e?"undefined":u(e);return!!e&&("object"==t||"function"==t)}function i(e){return!!e&&"object"==("undefined"==typeof e?"undefined":u(e))}function r(e){return"symbol"==("undefined"==typeof e?"undefined":u(e))||i(e)&&w.call(e)==f}function a(e){if("number"==typeof e)return e;if(r(e))return s;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(d,"");var n=p.test(e);return n||m.test(e)?b(e.slice(2),n?2:8):l.test(e)?s:+e}var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c="Expected a function",s=NaN,f="[object Symbol]",d=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,m=/^0o[0-7]+$/i,b=parseInt,v="object"==("undefined"==typeof t?"undefined":u(t))&&t&&t.Object===Object&&t,y="object"==("undefined"==typeof self?"undefined":u(self))&&self&&self.Object===Object&&self,g=v||y||Function("return this")(),h=Object.prototype,w=h.toString,k=Math.max,x=Math.min,j=function(){return g.Date.now()};e.exports=n}).call(t,function(){return this}())},function(e,t){"use strict";function n(e){var t=void 0,o=void 0,i=void 0;for(t=0;t<e.length;t+=1){if(o=e[t],o.dataset&&o.dataset.aos)return!0;if(i=o.children&&n(o.children))return!0}return!1}function o(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function i(){return!!o()}function r(e,t){var n=window.document,i=o(),r=new i(a);u=t,r.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function a(e){e&&e.forEach(function(e){var t=Array.prototype.slice.call(e.addedNodes),o=Array.prototype.slice.call(e.removedNodes),i=t.concat(o);if(n(i))return u()})}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){};t.default={isSupported:i,ready:r}},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,a=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,c=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,s=function(){function e(){n(this,e)}return i(e,[{key:"phone",value:function(){var e=o();return!(!r.test(e)&&!a.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=o();return!(!u.test(e)&&!c.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new s},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,n){var o=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):"undefined"!=typeof o&&("false"===o||!n&&"true"!==o)&&e.node.classList.remove("aos-animate")},o=function(e,t){var o=window.pageYOffset,i=window.innerHeight;e.forEach(function(e,r){n(e,i+o,t)})};t.default=o},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(12),r=o(i),a=function(e,t){return e.forEach(function(e,n){e.node.classList.add("aos-init"),e.position=(0,r.default)(e.node,t.offset)}),e};t.default=a},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(13),r=o(i),a=function(e,t){var n=0,o=0,i=window.innerHeight,a={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(a.offset&&!isNaN(a.offset)&&(o=parseInt(a.offset)),a.anchor&&document.querySelectorAll(a.anchor)&&(e=document.querySelectorAll(a.anchor)[0]),n=(0,r.default)(e).top,a.anchorPlacement){case"top-bottom":break;case"center-bottom":n+=e.offsetHeight/2;break;case"bottom-bottom":n+=e.offsetHeight;break;case"top-center":n+=i/2;break;case"bottom-center":n+=i/2+e.offsetHeight;break;case"center-center":n+=i/2+e.offsetHeight/2;break;case"top-top":n+=i;break;case"bottom-top":n+=e.offsetHeight+i;break;case"center-top":n+=e.offsetHeight/2+i}return a.anchorPlacement||a.offset||isNaN(t)||(o=t),n+o};t.default=a},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}};t.default=n},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e=e||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(e,function(e){return{node:e}})};t.default=n}])});
;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require('jquery'));
  } else {
    root.MotionUI = factory(root.jQuery);
  }
}(this, function($) {
'use strict';

// Polyfill for requestAnimationFrame
(function() {
  if (!Date.now)
    Date.now = function() { return new Date().getTime(); };

  var vendors = ['webkit', 'moz'];
  for (var i = 0; i < vendors.length && !window.requestAnimationFrame; ++i) {
      var vp = vendors[i];
      window.requestAnimationFrame = window[vp+'RequestAnimationFrame'];
      window.cancelAnimationFrame = (window[vp+'CancelAnimationFrame']
                                 || window[vp+'CancelRequestAnimationFrame']);
  }
  if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent)
    || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
    var lastTime = 0;
    window.requestAnimationFrame = function(callback) {
        var now = Date.now();
        var nextTime = Math.max(lastTime + 16, now);
        return setTimeout(function() { callback(lastTime = nextTime); },
                          nextTime - now);
    };
    window.cancelAnimationFrame = clearTimeout;
  }
})();

var initClasses   = ['mui-enter', 'mui-leave'];
var activeClasses = ['mui-enter-active', 'mui-leave-active'];

// Find the right "transitionend" event for this browser
var endEvent = (function() {
  var transitions = {
    'transition': 'transitionend',
    'WebkitTransition': 'webkitTransitionEnd',
    'MozTransition': 'transitionend',
    'OTransition': 'otransitionend'
  }
  var elem = window.document.createElement('div');

  for (var t in transitions) {
    if (typeof elem.style[t] !== 'undefined') {
      return transitions[t];
    }
  }

  return null;
})();

function animate(isIn, element, animation, cb) {
  element = $(element).eq(0);

  if (!element.length) return;

  if (endEvent === null) {
    isIn ? element.show() : element.hide();
    cb();
    return;
  }

  var initClass = isIn ? initClasses[0] : initClasses[1];
  var activeClass = isIn ? activeClasses[0] : activeClasses[1];

  // Set up the animation
  reset();
  element.addClass(animation);
  element.css('transition', 'none');
  requestAnimationFrame(function() {
    element.addClass(initClass);
    if (isIn) element.show();
  });

  // Start the animation
  requestAnimationFrame(function() {
    element[0].offsetWidth;
    element.css('transition', '');
    element.addClass(activeClass);
  });

  // Clean up the animation when it finishes
  element.one('transitionend', finish);

  // Hides the element (for out animations), resets the element, and runs a callback
  function finish() {
    if (!isIn) element.hide();
    reset();
    if (cb) cb.apply(element);
  }

  // Resets transitions and removes motion-specific classes
  function reset() {
    element[0].style.transitionDuration = 0;
    element.removeClass(initClass + ' ' + activeClass + ' ' + animation);
  }
}

var MotionUI = {
  animateIn: function(element, animation, cb) {
    animate(true, element, animation, cb);
  },

  animateOut: function(element, animation, cb) {
    animate(false, element, animation, cb);
  }
};

return MotionUI;
}));

/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(['jquery'], factory);
	} else if (typeof exports === 'object') {
		// CommonJS
		factory(require('jquery'));
	} else {
		// Browser globals
		factory(jQuery);
	}
}(function ($) {

	var pluses = /\+/g;

	function encode(s) {
		return config.raw ? s : encodeURIComponent(s);
	}

	function decode(s) {
		return config.raw ? s : decodeURIComponent(s);
	}

	function stringifyCookieValue(value) {
		return encode(config.json ? JSON.stringify(value) : String(value));
	}

	function parseCookieValue(s) {
		if (s.indexOf('"') === 0) {
			// This is a quoted cookie as according to RFC2068, unescape...
			s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
		}

		try {
			// Replace server-side written pluses with spaces.
			// If we can't decode the cookie, ignore it, it's unusable.
			// If we can't parse the cookie, ignore it, it's unusable.
			s = decodeURIComponent(s.replace(pluses, ' '));
			return config.json ? JSON.parse(s) : s;
		} catch(e) {}
	}

	function read(s, converter) {
		var value = config.raw ? s : parseCookieValue(s);
		return $.isFunction(converter) ? converter(value) : value;
	}

	var config = $.cookie = function (key, value, options) {

		// Write

		if (value !== undefined && !$.isFunction(value)) {
			options = $.extend({}, config.defaults, options);

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setTime(+t + days * 864e+5);
			}

			return (document.cookie = [
				encode(key), '=', stringifyCookieValue(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// Read

		var result = key ? undefined : {};

		// To prevent the for loop in the first place assign an empty array
		// in case there are no cookies at all. Also prevents odd result when
		// calling $.cookie().
		var cookies = document.cookie ? document.cookie.split('; ') : [];

		for (var i = 0, l = cookies.length; i < l; i++) {
			var parts = cookies[i].split('=');
			var name = decode(parts.shift());
			var cookie = parts.join('=');

			if (key && key === name) {
				// If second argument (value) is a function it's a converter...
				result = read(cookie, value);
				break;
			}

			// Prevent storing a cookie that we couldn't decode.
			if (!key && (cookie = read(cookie)) !== undefined) {
				result[name] = cookie;
			}
		}

		return result;
	};

	config.defaults = {};

	$.removeCookie = function (key, options) {
		if ($.cookie(key) === undefined) {
			return false;
		}

		// Must not alter options, thus extending a fresh object...
		$.cookie(key, '', $.extend({}, options, { expires: -1 }));
		return !$.cookie(key);
	};

}));

!function($){var apiParams={set:{colors:1,values:1,backgroundColor:1,scaleColors:1,normalizeFunction:1,focus:1},get:{selectedRegions:1,selectedMarkers:1,mapObject:1,regionName:1}};$.fn.vectorMap=function(options){var map=this.children(".jvectormap-container").data("mapObject");if("addMap"===options)jvm.Map.maps[arguments[1]]=arguments[2];else{if(("set"===options||"get"===options)&&apiParams[options][arguments[1]])return map[options+(arguments[1].charAt(0).toUpperCase()+arguments[1].substr(1))].apply(map,Array.prototype.slice.call(arguments,2));(options=options||{}).container=this,map=new jvm.Map(options)}return this}}(jQuery),function(factory){"function"==typeof define&&define.amd?define(["jquery"],factory):"object"==typeof exports?module.exports=factory:factory(jQuery)}(function($){var nullLowestDeltaTimeout,lowestDelta,toFix=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],toBind="onwheel"in document||9<=document.documentMode?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],slice=Array.prototype.slice;if($.event.fixHooks)for(var i=toFix.length;i;)$.event.fixHooks[toFix[--i]]=$.event.mouseHooks;var special=$.event.special.mousewheel={version:"3.1.9",setup:function(){if(this.addEventListener)for(var i=toBind.length;i;)this.addEventListener(toBind[--i],handler,!1);else this.onmousewheel=handler;$.data(this,"mousewheel-line-height",special.getLineHeight(this)),$.data(this,"mousewheel-page-height",special.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var i=toBind.length;i;)this.removeEventListener(toBind[--i],handler,!1);else this.onmousewheel=null},getLineHeight:function(elem){return parseInt($(elem)["offsetParent"in $.fn?"offsetParent":"parent"]().css("fontSize"),10)},getPageHeight:function(elem){return $(elem).height()},settings:{adjustOldDeltas:!0}};function handler(event){var absDelta,orgEvent=event||window.event,args=slice.call(arguments,1),delta=0,deltaX=0,deltaY=0;if((event=$.event.fix(orgEvent)).type="mousewheel","detail"in orgEvent&&(deltaY=-1*orgEvent.detail),"wheelDelta"in orgEvent&&(deltaY=orgEvent.wheelDelta),"wheelDeltaY"in orgEvent&&(deltaY=orgEvent.wheelDeltaY),"wheelDeltaX"in orgEvent&&(deltaX=-1*orgEvent.wheelDeltaX),"axis"in orgEvent&&orgEvent.axis===orgEvent.HORIZONTAL_AXIS&&(deltaX=-1*deltaY,deltaY=0),delta=0===deltaY?deltaX:deltaY,"deltaY"in orgEvent&&(delta=deltaY=-1*orgEvent.deltaY),"deltaX"in orgEvent&&(deltaX=orgEvent.deltaX,0===deltaY&&(delta=-1*deltaX)),0!==deltaY||0!==deltaX){if(1===orgEvent.deltaMode){var lineHeight=$.data(this,"mousewheel-line-height");delta*=lineHeight,deltaY*=lineHeight,deltaX*=lineHeight}else if(2===orgEvent.deltaMode){var pageHeight=$.data(this,"mousewheel-page-height");delta*=pageHeight,deltaY*=pageHeight,deltaX*=pageHeight}return absDelta=Math.max(Math.abs(deltaY),Math.abs(deltaX)),(!lowestDelta||absDelta<lowestDelta)&&shouldAdjustOldDeltas(orgEvent,lowestDelta=absDelta)&&(lowestDelta/=40),shouldAdjustOldDeltas(orgEvent,absDelta)&&(delta/=40,deltaX/=40,deltaY/=40),delta=Math[1<=delta?"floor":"ceil"](delta/lowestDelta),deltaX=Math[1<=deltaX?"floor":"ceil"](deltaX/lowestDelta),deltaY=Math[1<=deltaY?"floor":"ceil"](deltaY/lowestDelta),event.deltaX=deltaX,event.deltaY=deltaY,event.deltaFactor=lowestDelta,event.deltaMode=0,args.unshift(event,delta,deltaX,deltaY),nullLowestDeltaTimeout&&clearTimeout(nullLowestDeltaTimeout),nullLowestDeltaTimeout=setTimeout(nullLowestDelta,200),($.event.dispatch||$.event.handle).apply(this,args)}}function nullLowestDelta(){lowestDelta=null}function shouldAdjustOldDeltas(orgEvent,absDelta){return special.settings.adjustOldDeltas&&"mousewheel"===orgEvent.type&&absDelta%120==0}$.fn.extend({mousewheel:function(fn){return fn?this.bind("mousewheel",fn):this.trigger("mousewheel")},unmousewheel:function(fn){return this.unbind("mousewheel",fn)}})});var jvm={inherits:function(child,parent){function temp(){}temp.prototype=parent.prototype,child.prototype=new temp,(child.prototype.constructor=child).parentClass=parent},mixin:function(target,source){var prop;for(prop in source.prototype)source.prototype.hasOwnProperty(prop)&&(target.prototype[prop]=source.prototype[prop])},min:function(values){var i,min=Number.MAX_VALUE;if(values instanceof Array)for(i=0;i<values.length;i++)values[i]<min&&(min=values[i]);else for(i in values)values[i]<min&&(min=values[i]);return min},max:function(values){var i,max=Number.MIN_VALUE;if(values instanceof Array)for(i=0;i<values.length;i++)values[i]>max&&(max=values[i]);else for(i in values)values[i]>max&&(max=values[i]);return max},keys:function(object){var key,keys=[];for(key in object)keys.push(key);return keys},values:function(object){var key,i,values=[];for(i=0;i<arguments.length;i++)for(key in object=arguments[i])values.push(object[key]);return values},whenImageLoaded:function(url){var deferred=new jvm.$.Deferred,img=jvm.$("<img/>");return img.on("error",function(){deferred.reject()}).on("load",function(){deferred.resolve(img)}),img.attr("src",url),deferred},isImageUrl:function(s){return/\.\w{3,4}$/.test(s)}};jvm.$=jQuery,Array.prototype.indexOf||(Array.prototype.indexOf=function(searchElement,fromIndex){var k;if(null==this)throw new TypeError('"this" is null or not defined');var O=Object(this),len=O.length>>>0;if(0==len)return-1;var n=+fromIndex||0;if(Math.abs(n)===1/0&&(n=0),len<=n)return-1;for(k=Math.max(0<=n?n:len-Math.abs(n),0);k<len;){if(k in O&&O[k]===searchElement)return k;k++}return-1}),jvm.AbstractElement=function(name,config){this.node=this.createElement(name),this.name=name,this.properties={},config&&this.set(config)},jvm.AbstractElement.prototype.set=function(property,value){var key;if("object"==typeof property)for(key in property)this.properties[key]=property[key],this.applyAttr(key,property[key]);else this.properties[property]=value,this.applyAttr(property,value)},jvm.AbstractElement.prototype.get=function(property){return this.properties[property]},jvm.AbstractElement.prototype.applyAttr=function(property,value){this.node.setAttribute(property,value)},jvm.AbstractElement.prototype.remove=function(){jvm.$(this.node).remove()},jvm.AbstractCanvasElement=function(container,width,height){this.container=container,this.setSize(width,height),this.rootElement=new jvm[this.classPrefix+"GroupElement"],this.node.appendChild(this.rootElement.node),this.container.appendChild(this.node)},jvm.AbstractCanvasElement.prototype.add=function(element,group){(group=group||this.rootElement).add(element),element.canvas=this},jvm.AbstractCanvasElement.prototype.addPath=function(config,style,group){var el=new jvm[this.classPrefix+"PathElement"](config,style);return this.add(el,group),el},jvm.AbstractCanvasElement.prototype.addCircle=function(config,style,group){var el=new jvm[this.classPrefix+"CircleElement"](config,style);return this.add(el,group),el},jvm.AbstractCanvasElement.prototype.addImage=function(config,style,group){var el=new jvm[this.classPrefix+"ImageElement"](config,style);return this.add(el,group),el},jvm.AbstractCanvasElement.prototype.addText=function(config,style,group){var el=new jvm[this.classPrefix+"TextElement"](config,style);return this.add(el,group),el},jvm.AbstractCanvasElement.prototype.addGroup=function(parentGroup){var el=new jvm[this.classPrefix+"GroupElement"];return parentGroup?parentGroup.node.appendChild(el.node):this.node.appendChild(el.node),el.canvas=this,el},jvm.AbstractShapeElement=function(name,config,style){this.style=style||{},this.style.current=this.style.current||{},this.isHovered=!1,this.isSelected=!1,this.updateStyle()},jvm.AbstractShapeElement.prototype.setStyle=function(property,value){var styles={};"object"==typeof property?styles=property:styles[property]=value,jvm.$.extend(this.style.current,styles),this.updateStyle()},jvm.AbstractShapeElement.prototype.updateStyle=function(){var attrs={};jvm.AbstractShapeElement.mergeStyles(attrs,this.style.initial),jvm.AbstractShapeElement.mergeStyles(attrs,this.style.current),this.isHovered&&jvm.AbstractShapeElement.mergeStyles(attrs,this.style.hover),this.isSelected&&(jvm.AbstractShapeElement.mergeStyles(attrs,this.style.selected),this.isHovered&&jvm.AbstractShapeElement.mergeStyles(attrs,this.style.selectedHover)),this.set(attrs)},jvm.AbstractShapeElement.mergeStyles=function(styles,newStyles){var key;for(key in newStyles=newStyles||{})null===newStyles[key]?delete styles[key]:styles[key]=newStyles[key]},jvm.SVGElement=function(name,config){jvm.SVGElement.parentClass.apply(this,arguments)},jvm.inherits(jvm.SVGElement,jvm.AbstractElement),jvm.SVGElement.svgns="http://www.w3.org/2000/svg",jvm.SVGElement.prototype.createElement=function(tagName){return document.createElementNS(jvm.SVGElement.svgns,tagName)},jvm.SVGElement.prototype.addClass=function(className){this.node.setAttribute("class",className)},jvm.SVGElement.prototype.getElementCtr=function(ctr){return jvm["SVG"+ctr]},jvm.SVGElement.prototype.getBBox=function(){return this.node.getBBox()},jvm.SVGGroupElement=function(){jvm.SVGGroupElement.parentClass.call(this,"g")},jvm.inherits(jvm.SVGGroupElement,jvm.SVGElement),jvm.SVGGroupElement.prototype.add=function(element){this.node.appendChild(element.node)},jvm.SVGCanvasElement=function(container,width,height){this.classPrefix="SVG",jvm.SVGCanvasElement.parentClass.call(this,"svg"),this.defsElement=new jvm.SVGElement("defs"),this.node.appendChild(this.defsElement.node),jvm.AbstractCanvasElement.apply(this,arguments)},jvm.inherits(jvm.SVGCanvasElement,jvm.SVGElement),jvm.mixin(jvm.SVGCanvasElement,jvm.AbstractCanvasElement),jvm.SVGCanvasElement.prototype.setSize=function(width,height){this.width=width,this.height=height,this.node.setAttribute("width",width),this.node.setAttribute("height",height)},jvm.SVGCanvasElement.prototype.applyTransformParams=function(scale,transX,transY){this.scale=scale,this.transX=transX,this.transY=transY,this.rootElement.node.setAttribute("transform","scale("+scale+") translate("+transX+", "+transY+")")},jvm.SVGShapeElement=function(name,config,style){jvm.SVGShapeElement.parentClass.call(this,name,config),jvm.AbstractShapeElement.apply(this,arguments)},jvm.inherits(jvm.SVGShapeElement,jvm.SVGElement),jvm.mixin(jvm.SVGShapeElement,jvm.AbstractShapeElement),jvm.SVGShapeElement.prototype.applyAttr=function(attr,value){var patternEl,imageEl,that=this;"fill"===attr&&jvm.isImageUrl(value)?jvm.SVGShapeElement.images[value]?this.applyAttr("fill","url(#image"+jvm.SVGShapeElement.images[value]+")"):jvm.whenImageLoaded(value).then(function(img){(imageEl=new jvm.SVGElement("image")).node.setAttributeNS("http://www.w3.org/1999/xlink","href",value),imageEl.applyAttr("x","0"),imageEl.applyAttr("y","0"),imageEl.applyAttr("width",img[0].width),imageEl.applyAttr("height",img[0].height),(patternEl=new jvm.SVGElement("pattern")).applyAttr("id","image"+jvm.SVGShapeElement.imageCounter),patternEl.applyAttr("x",0),patternEl.applyAttr("y",0),patternEl.applyAttr("width",img[0].width/2),patternEl.applyAttr("height",img[0].height/2),patternEl.applyAttr("viewBox","0 0 "+img[0].width+" "+img[0].height),patternEl.applyAttr("patternUnits","userSpaceOnUse"),patternEl.node.appendChild(imageEl.node),that.canvas.defsElement.node.appendChild(patternEl.node),jvm.SVGShapeElement.images[value]=jvm.SVGShapeElement.imageCounter++,that.applyAttr("fill","url(#image"+jvm.SVGShapeElement.images[value]+")")}):jvm.SVGShapeElement.parentClass.prototype.applyAttr.apply(this,arguments)},jvm.SVGShapeElement.imageCounter=1,jvm.SVGShapeElement.images={},jvm.SVGPathElement=function(config,style){jvm.SVGPathElement.parentClass.call(this,"path",config,style),this.node.setAttribute("fill-rule","evenodd")},jvm.inherits(jvm.SVGPathElement,jvm.SVGShapeElement),jvm.SVGCircleElement=function(config,style){jvm.SVGCircleElement.parentClass.call(this,"circle",config,style)},jvm.inherits(jvm.SVGCircleElement,jvm.SVGShapeElement),jvm.SVGImageElement=function(config,style){jvm.SVGImageElement.parentClass.call(this,"image",config,style)},jvm.inherits(jvm.SVGImageElement,jvm.SVGShapeElement),jvm.SVGImageElement.prototype.applyAttr=function(attr,value){var imageUrl,that=this;"image"==attr?("object"==typeof value?(imageUrl=value.url,this.offset=value.offset):(imageUrl=value,this.offset=[0,0]),jvm.whenImageLoaded(imageUrl).then(function(img){that.node.setAttributeNS("http://www.w3.org/1999/xlink","href",imageUrl),that.width=img[0].width,that.height=img[0].height,that.applyAttr("width",that.width),that.applyAttr("height",that.height),that.applyAttr("x",that.cx-that.width/2+that.offset[0]),that.applyAttr("y",that.cy-that.height/2+that.offset[1]),jvm.$(that.node).trigger("imageloaded",[img])})):"cx"==attr?(this.cx=value,this.width&&this.applyAttr("x",value-this.width/2+this.offset[0])):"cy"==attr?(this.cy=value,this.height&&this.applyAttr("y",value-this.height/2+this.offset[1])):jvm.SVGImageElement.parentClass.prototype.applyAttr.apply(this,arguments)},jvm.SVGTextElement=function(config,style){jvm.SVGTextElement.parentClass.call(this,"text",config,style)},jvm.inherits(jvm.SVGTextElement,jvm.SVGShapeElement),jvm.SVGTextElement.prototype.applyAttr=function(attr,value){"text"===attr?this.node.textContent=value:jvm.SVGTextElement.parentClass.prototype.applyAttr.apply(this,arguments)},jvm.VMLElement=function(name,config){jvm.VMLElement.VMLInitialized||jvm.VMLElement.initializeVML(),jvm.VMLElement.parentClass.apply(this,arguments)},jvm.inherits(jvm.VMLElement,jvm.AbstractElement),jvm.VMLElement.VMLInitialized=!1,jvm.VMLElement.initializeVML=function(){try{document.namespaces.rvml||document.namespaces.add("rvml","urn:schemas-microsoft-com:vml"),jvm.VMLElement.prototype.createElement=function(tagName){return document.createElement("<rvml:"+tagName+' class="rvml">')}}catch(e){jvm.VMLElement.prototype.createElement=function(tagName){return document.createElement("<"+tagName+' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')}}document.createStyleSheet().addRule(".rvml","behavior:url(#default#VML)"),jvm.VMLElement.VMLInitialized=!0},jvm.VMLElement.prototype.getElementCtr=function(ctr){return jvm["VML"+ctr]},jvm.VMLElement.prototype.addClass=function(className){jvm.$(this.node).addClass(className)},jvm.VMLElement.prototype.applyAttr=function(attr,value){this.node[attr]=value},jvm.VMLElement.prototype.getBBox=function(){var node=jvm.$(this.node);return{x:node.position().left/this.canvas.scale,y:node.position().top/this.canvas.scale,width:node.width()/this.canvas.scale,height:node.height()/this.canvas.scale}},jvm.VMLGroupElement=function(){jvm.VMLGroupElement.parentClass.call(this,"group"),this.node.style.left="0px",this.node.style.top="0px",this.node.coordorigin="0 0"},jvm.inherits(jvm.VMLGroupElement,jvm.VMLElement),jvm.VMLGroupElement.prototype.add=function(element){this.node.appendChild(element.node)},jvm.VMLCanvasElement=function(container,width,height){this.classPrefix="VML",jvm.VMLCanvasElement.parentClass.call(this,"group"),jvm.AbstractCanvasElement.apply(this,arguments),this.node.style.position="absolute"},jvm.inherits(jvm.VMLCanvasElement,jvm.VMLElement),jvm.mixin(jvm.VMLCanvasElement,jvm.AbstractCanvasElement),jvm.VMLCanvasElement.prototype.setSize=function(width,height){var paths,groups,i,l;if(this.width=width,this.height=height,this.node.style.width=width+"px",this.node.style.height=height+"px",this.node.coordsize=width+" "+height,this.node.coordorigin="0 0",this.rootElement){for(i=0,l=(paths=this.rootElement.node.getElementsByTagName("shape")).length;i<l;i++)paths[i].coordsize=width+" "+height,paths[i].style.width=width+"px",paths[i].style.height=height+"px";for(i=0,l=(groups=this.node.getElementsByTagName("group")).length;i<l;i++)groups[i].coordsize=width+" "+height,groups[i].style.width=width+"px",groups[i].style.height=height+"px"}},jvm.VMLCanvasElement.prototype.applyTransformParams=function(scale,transX,transY){this.scale=scale,this.transX=transX,this.transY=transY,this.rootElement.node.coordorigin=this.width-transX-this.width/100+","+(this.height-transY-this.height/100),this.rootElement.node.coordsize=this.width/scale+","+this.height/scale},jvm.VMLShapeElement=function(name,config){jvm.VMLShapeElement.parentClass.call(this,name,config),this.fillElement=new jvm.VMLElement("fill"),this.strokeElement=new jvm.VMLElement("stroke"),this.node.appendChild(this.fillElement.node),this.node.appendChild(this.strokeElement.node),this.node.stroked=!1,jvm.AbstractShapeElement.apply(this,arguments)},jvm.inherits(jvm.VMLShapeElement,jvm.VMLElement),jvm.mixin(jvm.VMLShapeElement,jvm.AbstractShapeElement),jvm.VMLShapeElement.prototype.applyAttr=function(attr,value){switch(attr){case"fill":this.node.fillcolor=value;break;case"fill-opacity":this.fillElement.node.opacity=Math.round(100*value)+"%";break;case"stroke":this.node.stroked="none"!==value,this.node.strokecolor=value;break;case"stroke-opacity":this.strokeElement.node.opacity=Math.round(100*value)+"%";break;case"stroke-width":0===parseInt(value,10)?this.node.stroked=!1:this.node.stroked=!0,this.node.strokeweight=value;break;case"d":this.node.path=jvm.VMLPathElement.pathSvgToVml(value);break;default:jvm.VMLShapeElement.parentClass.prototype.applyAttr.apply(this,arguments)}},jvm.VMLPathElement=function(config,style){var scale=new jvm.VMLElement("skew");jvm.VMLPathElement.parentClass.call(this,"shape",config,style),this.node.coordorigin="0 0",scale.node.on=!0,scale.node.matrix="0.01,0,0,0.01,0,0",scale.node.offset="0,0",this.node.appendChild(scale.node)},jvm.inherits(jvm.VMLPathElement,jvm.VMLShapeElement),jvm.VMLPathElement.prototype.applyAttr=function(attr,value){"d"===attr?this.node.path=jvm.VMLPathElement.pathSvgToVml(value):jvm.VMLShapeElement.prototype.applyAttr.call(this,attr,value)},jvm.VMLPathElement.pathSvgToVml=function(path){var ctrlx,ctrly,cx=0,cy=0;return(path=path.replace(/(-?\d+)e(-?\d+)/g,"0")).replace(/([MmLlHhVvCcSs])\s*((?:-?\d*(?:\.\d+)?\s*,?\s*)+)/g,function(segment,letter,coords,index){(coords=coords.replace(/(\d)-/g,"$1,-").replace(/^\s+/g,"").replace(/\s+$/g,"").replace(/\s+/g,",").split(","))[0]||coords.shift();for(var i=0,l=coords.length;i<l;i++)coords[i]=Math.round(100*coords[i]);switch(letter){case"m":return cx+=coords[0],cy+=coords[1],"t"+coords.join(",");case"M":return cx=coords[0],cy=coords[1],"m"+coords.join(",");case"l":return cx+=coords[0],cy+=coords[1],"r"+coords.join(",");case"L":return cx=coords[0],cy=coords[1],"l"+coords.join(",");case"h":return cx+=coords[0],"r"+coords[0]+",0";case"H":return"l"+(cx=coords[0])+","+cy;case"v":return cy+=coords[0],"r0,"+coords[0];case"V":return cy=coords[0],"l"+cx+","+cy;case"c":return ctrlx=cx+coords[coords.length-4],ctrly=cy+coords[coords.length-3],cx+=coords[coords.length-2],cy+=coords[coords.length-1],"v"+coords.join(",");case"C":return ctrlx=coords[coords.length-4],ctrly=coords[coords.length-3],cx=coords[coords.length-2],cy=coords[coords.length-1],"c"+coords.join(",");case"s":return coords.unshift(cy-ctrly),coords.unshift(cx-ctrlx),ctrlx=cx+coords[coords.length-4],ctrly=cy+coords[coords.length-3],cx+=coords[coords.length-2],cy+=coords[coords.length-1],"v"+coords.join(",");case"S":return coords.unshift(cy+cy-ctrly),coords.unshift(cx+cx-ctrlx),ctrlx=coords[coords.length-4],ctrly=coords[coords.length-3],cx=coords[coords.length-2],cy=coords[coords.length-1],"c"+coords.join(",")}return""}).replace(/z/g,"e")},jvm.VMLCircleElement=function(config,style){jvm.VMLCircleElement.parentClass.call(this,"oval",config,style)},jvm.inherits(jvm.VMLCircleElement,jvm.VMLShapeElement),jvm.VMLCircleElement.prototype.applyAttr=function(attr,value){switch(attr){case"r":this.node.style.width=2*value+"px",this.node.style.height=2*value+"px",this.applyAttr("cx",this.get("cx")||0),this.applyAttr("cy",this.get("cy")||0);break;case"cx":if(!value)return;this.node.style.left=value-(this.get("r")||0)+"px";break;case"cy":if(!value)return;this.node.style.top=value-(this.get("r")||0)+"px";break;default:jvm.VMLCircleElement.parentClass.prototype.applyAttr.call(this,attr,value)}},jvm.VectorCanvas=function(container,width,height){return this.mode=window.SVGAngle?"svg":"vml","svg"==this.mode?this.impl=new jvm.SVGCanvasElement(container,width,height):this.impl=new jvm.VMLCanvasElement(container,width,height),this.impl.mode=this.mode,this.impl},jvm.SimpleScale=function(scale){this.scale=scale},jvm.SimpleScale.prototype.getValue=function(value){return value},jvm.OrdinalScale=function(scale){this.scale=scale},jvm.OrdinalScale.prototype.getValue=function(value){return this.scale[value]},jvm.OrdinalScale.prototype.getTicks=function(){var key,ticks=[];for(key in this.scale)ticks.push({label:key,value:this.scale[key]});return ticks},jvm.NumericScale=function(scale,normalizeFunction,minValue,maxValue){this.scale=[],normalizeFunction=normalizeFunction||"linear",scale&&this.setScale(scale),normalizeFunction&&this.setNormalizeFunction(normalizeFunction),void 0!==minValue&&this.setMin(minValue),void 0!==maxValue&&this.setMax(maxValue)},jvm.NumericScale.prototype={setMin:function(min){this.clearMinValue=min,"function"==typeof this.normalize?this.minValue=this.normalize(min):this.minValue=min},setMax:function(max){this.clearMaxValue=max,"function"==typeof this.normalize?this.maxValue=this.normalize(max):this.maxValue=max},setScale:function(scale){var i;for(this.scale=[],i=0;i<scale.length;i++)this.scale[i]=[scale[i]]},setNormalizeFunction:function(f){"polynomial"===f?this.normalize=function(value){return Math.pow(value,.2)}:"linear"===f?delete this.normalize:this.normalize=f,this.setMin(this.clearMinValue),this.setMax(this.clearMaxValue)},getValue:function(value){var l,c,lengthes=[],fullLength=0,i=0;for("function"==typeof this.normalize&&(value=this.normalize(value)),i=0;i<this.scale.length-1;i++)l=this.vectorLength(this.vectorSubtract(this.scale[i+1],this.scale[i])),lengthes.push(l),fullLength+=l;for(c=(this.maxValue-this.minValue)/fullLength,i=0;i<lengthes.length;i++)lengthes[i]*=c;for(i=0,value-=this.minValue;0<=value-lengthes[i];)value-=lengthes[i],i++;return value=i==this.scale.length-1?this.vectorToNum(this.scale[i]):this.vectorToNum(this.vectorAdd(this.scale[i],this.vectorMult(this.vectorSubtract(this.scale[i+1],this.scale[i]),value/lengthes[i])))},vectorToNum:function(vector){var i,num=0;for(i=0;i<vector.length;i++)num+=Math.round(vector[i])*Math.pow(256,vector.length-i-1);return num},vectorSubtract:function(vector1,vector2){var i,vector=[];for(i=0;i<vector1.length;i++)vector[i]=vector1[i]-vector2[i];return vector},vectorAdd:function(vector1,vector2){var i,vector=[];for(i=0;i<vector1.length;i++)vector[i]=vector1[i]+vector2[i];return vector},vectorMult:function(vector,num){var i,result=[];for(i=0;i<vector.length;i++)result[i]=vector[i]*num;return result},vectorLength:function(vector){var i,result=0;for(i=0;i<vector.length;i++)result+=vector[i]*vector[i];return Math.sqrt(result)},getTicks:function(){var tick,v,extent=[this.clearMinValue,this.clearMaxValue],span=extent[1]-extent[0],step=Math.pow(10,Math.floor(Math.log(span/5)/Math.LN10)),err=5/span*step,ticks=[];for(err<=.15?step*=10:err<=.35?step*=5:err<=.75&&(step*=2),extent[0]=Math.floor(extent[0]/step)*step,extent[1]=Math.ceil(extent[1]/step)*step,tick=extent[0];tick<=extent[1];)v=tick==extent[0]?this.clearMinValue:tick==extent[1]?this.clearMaxValue:tick,ticks.push({label:tick,value:this.getValue(v)}),tick+=step;return ticks}},jvm.ColorScale=function(colors,normalizeFunction,minValue,maxValue){jvm.ColorScale.parentClass.apply(this,arguments)},jvm.inherits(jvm.ColorScale,jvm.NumericScale),jvm.ColorScale.prototype.setScale=function(scale){var i;for(i=0;i<scale.length;i++)this.scale[i]=jvm.ColorScale.rgbToArray(scale[i])},jvm.ColorScale.prototype.getValue=function(value){return jvm.ColorScale.numToRgb(jvm.ColorScale.parentClass.prototype.getValue.call(this,value))},jvm.ColorScale.arrayToRgb=function(ar){var d,i,rgb="#";for(i=0;i<ar.length;i++)rgb+=1==(d=ar[i].toString(16)).length?"0"+d:d;return rgb},jvm.ColorScale.numToRgb=function(num){for(num=num.toString(16);num.length<6;)num="0"+num;return"#"+num},jvm.ColorScale.rgbToArray=function(rgb){return rgb=rgb.substr(1),[parseInt(rgb.substr(0,2),16),parseInt(rgb.substr(2,2),16),parseInt(rgb.substr(4,2),16)]},jvm.Legend=function(params){this.params=params||{},this.map=this.params.map,this.series=this.params.series,this.body=jvm.$("<div/>"),this.body.addClass("jvectormap-legend"),this.params.cssClass&&this.body.addClass(this.params.cssClass),params.vertical?this.map.legendCntVertical.append(this.body):this.map.legendCntHorizontal.append(this.body),this.render()},jvm.Legend.prototype.render=function(){var i,tick,sample,label,ticks=this.series.scale.getTicks(),inner=jvm.$("<div/>").addClass("jvectormap-legend-inner");for(this.body.html(""),this.params.title&&this.body.append(jvm.$("<div/>").addClass("jvectormap-legend-title").html(this.params.title)),this.body.append(inner),i=0;i<ticks.length;i++){switch(tick=jvm.$("<div/>").addClass("jvectormap-legend-tick"),sample=jvm.$("<div/>").addClass("jvectormap-legend-tick-sample"),this.series.params.attribute){case"fill":jvm.isImageUrl(ticks[i].value)?sample.css("background","url("+ticks[i].value+")"):sample.css("background",ticks[i].value);break;case"stroke":sample.css("background",ticks[i].value);break;case"image":sample.css("background","url("+("object"==typeof ticks[i].value?ticks[i].value.url:ticks[i].value)+") no-repeat center center");break;case"r":jvm.$("<div/>").css({"border-radius":ticks[i].value,border:this.map.params.markerStyle.initial["stroke-width"]+"px "+this.map.params.markerStyle.initial.stroke+" solid",width:2*ticks[i].value+"px",height:2*ticks[i].value+"px",background:this.map.params.markerStyle.initial.fill}).appendTo(sample)}tick.append(sample),label=ticks[i].label,this.params.labelRender&&(label=this.params.labelRender(label)),tick.append(jvm.$("<div>"+label+" </div>").addClass("jvectormap-legend-tick-text")),inner.append(tick)}inner.append(jvm.$("<div/>").css("clear","both"))},jvm.DataSeries=function(params,elements,map){var scaleConstructor;(params=params||{}).attribute=params.attribute||"fill",this.elements=elements,this.params=params,this.map=map,params.attributes&&this.setAttributes(params.attributes),jvm.$.isArray(params.scale)?(scaleConstructor="fill"===params.attribute||"stroke"===params.attribute?jvm.ColorScale:jvm.NumericScale,this.scale=new scaleConstructor(params.scale,params.normalizeFunction,params.min,params.max)):params.scale?this.scale=new jvm.OrdinalScale(params.scale):this.scale=new jvm.SimpleScale(params.scale),this.values=params.values||{},this.setValues(this.values),this.params.legend&&(this.legend=new jvm.Legend(jvm.$.extend({map:this.map,series:this},this.params.legend)))},jvm.DataSeries.prototype={setAttributes:function(key,attr){var code,attrs=key;if("string"==typeof key)this.elements[key]&&this.elements[key].setStyle(this.params.attribute,attr);else for(code in attrs)this.elements[code]&&this.elements[code].element.setStyle(this.params.attribute,attrs[code])},setValues:function(values){var val,cc,max=-Number.MAX_VALUE,min=Number.MAX_VALUE,attrs={};if(this.scale instanceof jvm.OrdinalScale||this.scale instanceof jvm.SimpleScale)for(cc in values)values[cc]?attrs[cc]=this.scale.getValue(values[cc]):attrs[cc]=this.elements[cc].element.style.initial[this.params.attribute];else{if(void 0===this.params.min||void 0===this.params.max)for(cc in values)max<(val=parseFloat(values[cc]))&&(max=val),val<min&&(min=val);for(cc in void 0===this.params.min?(this.scale.setMin(min),this.params.min=min):this.scale.setMin(this.params.min),void 0===this.params.max?(this.scale.setMax(max),this.params.max=max):this.scale.setMax(this.params.max),values)"indexOf"!=cc&&(val=parseFloat(values[cc]),isNaN(val)?attrs[cc]=this.elements[cc].element.style.initial[this.params.attribute]:attrs[cc]=this.scale.getValue(val))}this.setAttributes(attrs),jvm.$.extend(this.values,values)},clear:function(){var key,attrs={};for(key in this.values)this.elements[key]&&(attrs[key]=this.elements[key].element.shape.style.initial[this.params.attribute]);this.setAttributes(attrs),this.values={}},setScale:function(scale){this.scale.setScale(scale),this.values&&this.setValues(this.values)},setNormalizeFunction:function(f){this.scale.setNormalizeFunction(f),this.values&&this.setValues(this.values)}},jvm.Proj={degRad:180/Math.PI,radDeg:Math.PI/180,radius:6381372,sgn:function(n){return 0<n?1:n<0?-1:n},mill:function(lat,lng,c){return{x:this.radius*(lng-c)*this.radDeg,y:-this.radius*Math.log(Math.tan((45+.4*lat)*this.radDeg))/.8}},mill_inv:function(x,y,c){return{lat:(2.5*Math.atan(Math.exp(.8*y/this.radius))-5*Math.PI/8)*this.degRad,lng:(c*this.radDeg+x/this.radius)*this.degRad}},merc:function(lat,lng,c){return{x:this.radius*(lng-c)*this.radDeg,y:-this.radius*Math.log(Math.tan(Math.PI/4+lat*Math.PI/360))}},merc_inv:function(x,y,c){return{lat:(2*Math.atan(Math.exp(y/this.radius))-Math.PI/2)*this.degRad,lng:(c*this.radDeg+x/this.radius)*this.degRad}},aea:function(lat,lng,c){var lambda0=c*this.radDeg,fi1=29.5*this.radDeg,fi2=45.5*this.radDeg,fi=lat*this.radDeg,lambda=lng*this.radDeg,n=(Math.sin(fi1)+Math.sin(fi2))/2,C=Math.cos(fi1)*Math.cos(fi1)+2*n*Math.sin(fi1),theta=n*(lambda-lambda0),ro=Math.sqrt(C-2*n*Math.sin(fi))/n,ro0=Math.sqrt(C-2*n*Math.sin(0))/n;return{x:ro*Math.sin(theta)*this.radius,y:-(ro0-ro*Math.cos(theta))*this.radius}},aea_inv:function(xCoord,yCoord,c){var x=xCoord/this.radius,y=yCoord/this.radius,lambda0=c*this.radDeg,fi1=29.5*this.radDeg,fi2=45.5*this.radDeg,n=(Math.sin(fi1)+Math.sin(fi2))/2,C=Math.cos(fi1)*Math.cos(fi1)+2*n*Math.sin(fi1),ro0=Math.sqrt(C-2*n*Math.sin(0))/n,ro=Math.sqrt(x*x+(ro0-y)*(ro0-y)),theta=Math.atan(x/(ro0-y));return{lat:Math.asin((C-ro*ro*n*n)/(2*n))*this.degRad,lng:(lambda0+theta/n)*this.degRad}},lcc:function(lat,lng,c){var lambda0=c*this.radDeg,lambda=lng*this.radDeg,fi1=33*this.radDeg,fi2=45*this.radDeg,fi=lat*this.radDeg,n=Math.log(Math.cos(fi1)*(1/Math.cos(fi2)))/Math.log(Math.tan(Math.PI/4+fi2/2)*(1/Math.tan(Math.PI/4+fi1/2))),F=Math.cos(fi1)*Math.pow(Math.tan(Math.PI/4+fi1/2),n)/n,ro=F*Math.pow(1/Math.tan(Math.PI/4+fi/2),n),ro0=F*Math.pow(1/Math.tan(Math.PI/4+0),n);return{x:ro*Math.sin(n*(lambda-lambda0))*this.radius,y:-(ro0-ro*Math.cos(n*(lambda-lambda0)))*this.radius}},lcc_inv:function(xCoord,yCoord,c){var x=xCoord/this.radius,y=yCoord/this.radius,lambda0=c*this.radDeg,fi1=33*this.radDeg,fi2=45*this.radDeg,n=Math.log(Math.cos(fi1)*(1/Math.cos(fi2)))/Math.log(Math.tan(Math.PI/4+fi2/2)*(1/Math.tan(Math.PI/4+fi1/2))),F=Math.cos(fi1)*Math.pow(Math.tan(Math.PI/4+fi1/2),n)/n,ro0=F*Math.pow(1/Math.tan(Math.PI/4+0),n),ro=this.sgn(n)*Math.sqrt(x*x+(ro0-y)*(ro0-y)),theta=Math.atan(x/(ro0-y));return{lat:(2*Math.atan(Math.pow(F/ro,1/n))-Math.PI/2)*this.degRad,lng:(lambda0+theta/n)*this.degRad}}},jvm.MapObject=function(config){},jvm.MapObject.prototype.getLabelText=function(key){return this.config.label?"function"==typeof this.config.label.render?this.config.label.render(key):key:null},jvm.MapObject.prototype.getLabelOffsets=function(key){var offsets;return this.config.label&&("function"==typeof this.config.label.offsets?offsets=this.config.label.offsets(key):"object"==typeof this.config.label.offsets&&(offsets=this.config.label.offsets[key])),offsets||[0,0]},jvm.MapObject.prototype.setHovered=function(isHovered){this.isHovered!==isHovered&&(this.isHovered=isHovered,this.shape.isHovered=isHovered,this.shape.updateStyle(),this.label&&(this.label.isHovered=isHovered,this.label.updateStyle()))},jvm.MapObject.prototype.setSelected=function(isSelected){this.isSelected!==isSelected&&(this.isSelected=isSelected,this.shape.isSelected=isSelected,this.shape.updateStyle(),this.label&&(this.label.isSelected=isSelected,this.label.updateStyle()),jvm.$(this.shape).trigger("selected",[isSelected]))},jvm.MapObject.prototype.setStyle=function(){this.shape.setStyle.apply(this.shape,arguments)},jvm.MapObject.prototype.remove=function(){this.shape.remove(),this.label&&this.label.remove()},jvm.Region=function(config){var bbox,text,offsets;this.config=config,this.map=this.config.map,this.shape=config.canvas.addPath({d:config.path,"data-code":config.code},config.style,config.canvas.rootElement),this.shape.addClass("jvectormap-region jvectormap-element"),bbox=this.shape.getBBox(),text=this.getLabelText(config.code),this.config.label&&text&&(offsets=this.getLabelOffsets(config.code),this.labelX=bbox.x+bbox.width/2+offsets[0],this.labelY=bbox.y+bbox.height/2+offsets[1],this.label=config.canvas.addText({text:text,"text-anchor":"middle","alignment-baseline":"central",x:this.labelX,y:this.labelY,"data-code":config.code},config.labelStyle,config.labelsGroup),this.label.addClass("jvectormap-region jvectormap-element"))},jvm.inherits(jvm.Region,jvm.MapObject),jvm.Region.prototype.updateLabelPosition=function(){this.label&&this.label.set({x:this.labelX*this.map.scale+this.map.transX*this.map.scale,y:this.labelY*this.map.scale+this.map.transY*this.map.scale})},jvm.Marker=function(config){var text;this.config=config,this.map=this.config.map,this.isImage=!!this.config.style.initial.image,this.createShape(),text=this.getLabelText(config.index),this.config.label&&text&&(this.offsets=this.getLabelOffsets(config.index),this.labelX=config.cx/this.map.scale-this.map.transX,this.labelY=config.cy/this.map.scale-this.map.transY,this.label=config.canvas.addText({text:text,"data-index":config.index,dy:"0.6ex",x:this.labelX,y:this.labelY},config.labelStyle,config.labelsGroup),this.label.addClass("jvectormap-marker jvectormap-element"))},jvm.inherits(jvm.Marker,jvm.MapObject),jvm.Marker.prototype.createShape=function(){var that=this;this.shape&&this.shape.remove(),this.shape=this.config.canvas[this.isImage?"addImage":"addCircle"]({"data-index":this.config.index,cx:this.config.cx,cy:this.config.cy},this.config.style,this.config.group),this.shape.addClass("jvectormap-marker jvectormap-element"),this.isImage&&jvm.$(this.shape.node).on("imageloaded",function(){that.updateLabelPosition()})},jvm.Marker.prototype.updateLabelPosition=function(){this.label&&this.label.set({x:this.labelX*this.map.scale+this.offsets[0]+this.map.transX*this.map.scale+5+(this.isImage?(this.shape.width||0)/2:this.shape.properties.r),y:this.labelY*this.map.scale+this.map.transY*this.map.scale+this.offsets[1]})},jvm.Marker.prototype.setStyle=function(property,value){var isImage;jvm.Marker.parentClass.prototype.setStyle.apply(this,arguments),"r"===property&&this.updateLabelPosition(),(isImage=!!this.shape.get("image"))!=this.isImage&&(this.isImage=isImage,this.config.style=jvm.$.extend(!0,{},this.shape.style),this.createShape())},jvm.Map=function(params){var e,map=this;if(this.params=jvm.$.extend(!0,{},jvm.Map.defaultParams,params),!jvm.Map.maps[this.params.map])throw new Error("Attempt to use map which was not loaded: "+this.params.map);for(e in this.mapData=jvm.Map.maps[this.params.map],this.markers={},this.regions={},this.regionsColors={},this.regionsData={},this.container=jvm.$("<div>").addClass("jvectormap-container"),this.params.container&&this.params.container.append(this.container),this.container.data("mapObject",this),this.defaultWidth=this.mapData.width,this.defaultHeight=this.mapData.height,this.setBackgroundColor(this.params.backgroundColor),this.onResize=function(){map.updateSize()},jvm.$(window).resize(this.onResize),jvm.Map.apiEvents)this.params[e]&&this.container.bind(jvm.Map.apiEvents[e]+".jvectormap",this.params[e]);this.canvas=new jvm.VectorCanvas(this.container[0],this.width,this.height),this.params.bindTouchEvents&&("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch?this.bindContainerTouchEvents():window.MSGesture&&this.bindContainerPointerEvents()),this.bindContainerEvents(),this.bindElementEvents(),this.createTip(),this.params.zoomButtons&&this.bindZoomButtons(),this.createRegions(),this.createMarkers(this.params.markers||{}),this.updateSize(),this.params.focusOn&&("string"==typeof this.params.focusOn?this.params.focusOn={region:this.params.focusOn}:jvm.$.isArray(this.params.focusOn)&&(this.params.focusOn={regions:this.params.focusOn}),this.setFocus(this.params.focusOn)),this.params.selectedRegions&&this.setSelectedRegions(this.params.selectedRegions),this.params.selectedMarkers&&this.setSelectedMarkers(this.params.selectedMarkers),this.legendCntHorizontal=jvm.$("<div/>").addClass("jvectormap-legend-cnt jvectormap-legend-cnt-h"),this.legendCntVertical=jvm.$("<div/>").addClass("jvectormap-legend-cnt jvectormap-legend-cnt-v"),this.container.append(this.legendCntHorizontal),this.container.append(this.legendCntVertical),this.params.series&&this.createSeries()},jvm.Map.prototype={transX:0,transY:0,scale:1,baseTransX:0,baseTransY:0,baseScale:1,width:0,height:0,setBackgroundColor:function(backgroundColor){this.container.css("background-color",backgroundColor)},resize:function(){var curBaseScale=this.baseScale;this.width/this.height>this.defaultWidth/this.defaultHeight?(this.baseScale=this.height/this.defaultHeight,this.baseTransX=Math.abs(this.width-this.defaultWidth*this.baseScale)/(2*this.baseScale)):(this.baseScale=this.width/this.defaultWidth,this.baseTransY=Math.abs(this.height-this.defaultHeight*this.baseScale)/(2*this.baseScale)),this.scale*=this.baseScale/curBaseScale,this.transX*=this.baseScale/curBaseScale,this.transY*=this.baseScale/curBaseScale},updateSize:function(){this.width=this.container.width(),this.height=this.container.height(),this.resize(),this.canvas.setSize(this.width,this.height),this.applyTransform()},reset:function(){var key,i;for(key in this.series)for(i=0;i<this.series[key].length;i++)this.series[key][i].clear();this.scale=this.baseScale,this.transX=this.baseTransX,this.transY=this.baseTransY,this.applyTransform()},applyTransform:function(){var maxTransX,maxTransY,minTransX,minTransY;minTransX=this.defaultWidth*this.scale<=this.width?(maxTransX=(this.width-this.defaultWidth*this.scale)/(2*this.scale),(this.width-this.defaultWidth*this.scale)/(2*this.scale)):(maxTransX=0,(this.width-this.defaultWidth*this.scale)/this.scale),minTransY=this.defaultHeight*this.scale<=this.height?(maxTransY=(this.height-this.defaultHeight*this.scale)/(2*this.scale),(this.height-this.defaultHeight*this.scale)/(2*this.scale)):(maxTransY=0,(this.height-this.defaultHeight*this.scale)/this.scale),this.transY>maxTransY?this.transY=maxTransY:this.transY<minTransY&&(this.transY=minTransY),this.transX>maxTransX?this.transX=maxTransX:this.transX<minTransX&&(this.transX=minTransX),this.canvas.applyTransformParams(this.scale,this.transX,this.transY),this.markers&&this.repositionMarkers(),this.repositionLabels(),this.container.trigger("viewportChange",[this.scale/this.baseScale,this.transX,this.transY])},bindContainerEvents:function(){var oldPageX,oldPageY,mouseDown=!1,map=this;this.params.panOnDrag&&(this.container.mousemove(function(e){return mouseDown&&(map.transX-=(oldPageX-e.pageX)/map.scale,map.transY-=(oldPageY-e.pageY)/map.scale,map.applyTransform(),oldPageX=e.pageX,oldPageY=e.pageY),!1}).mousedown(function(e){return mouseDown=!0,oldPageX=e.pageX,oldPageY=e.pageY,!1}),this.onContainerMouseUp=function(){mouseDown=!1},jvm.$("body").mouseup(this.onContainerMouseUp)),this.params.zoomOnScroll&&this.container.mousewheel(function(event,delta,deltaX,deltaY){var offset=jvm.$(map.container).offset(),centerX=event.pageX-offset.left,centerY=event.pageY-offset.top,zoomStep=Math.pow(1+map.params.zoomOnScrollSpeed/1e3,event.deltaFactor*event.deltaY);map.tip.hide(),map.setScale(map.scale*zoomStep,centerX,centerY),event.preventDefault()})},bindContainerTouchEvents:function(){function handleTouchEvent(e){var offset,scale,transXOld,transYOld,touches=e.originalEvent.touches;"touchstart"==e.type&&(lastTouchesLength=0),1==touches.length?(1==lastTouchesLength&&(transXOld=map.transX,transYOld=map.transY,map.transX-=(touchX-touches[0].pageX)/map.scale,map.transY-=(touchY-touches[0].pageY)/map.scale,map.applyTransform(),map.tip.hide(),transXOld==map.transX&&transYOld==map.transY||e.preventDefault()),touchX=touches[0].pageX,touchY=touches[0].pageY):2==touches.length&&(2==lastTouchesLength?(scale=Math.sqrt(Math.pow(touches[0].pageX-touches[1].pageX,2)+Math.pow(touches[0].pageY-touches[1].pageY,2))/touchStartDistance,map.setScale(touchStartScale*scale,centerTouchX,centerTouchY),map.tip.hide(),e.preventDefault()):(offset=jvm.$(map.container).offset(),centerTouchX=touches[0].pageX>touches[1].pageX?touches[1].pageX+(touches[0].pageX-touches[1].pageX)/2:touches[0].pageX+(touches[1].pageX-touches[0].pageX)/2,centerTouchY=touches[0].pageY>touches[1].pageY?touches[1].pageY+(touches[0].pageY-touches[1].pageY)/2:touches[0].pageY+(touches[1].pageY-touches[0].pageY)/2,centerTouchX-=offset.left,centerTouchY-=offset.top,touchStartScale=map.scale,touchStartDistance=Math.sqrt(Math.pow(touches[0].pageX-touches[1].pageX,2)+Math.pow(touches[0].pageY-touches[1].pageY,2)))),lastTouchesLength=touches.length}var touchStartScale,touchStartDistance,touchX,touchY,centerTouchX,centerTouchY,lastTouchesLength,map=this;jvm.$(this.container).bind("touchstart",handleTouchEvent),jvm.$(this.container).bind("touchmove",handleTouchEvent)},bindContainerPointerEvents:function(){var map=this,gesture=new MSGesture,element=this.container[0];(gesture.target=element).addEventListener("MSGestureChange",function(e){var transXOld,transYOld;0==e.translationX&&0==e.translationY||(transXOld=map.transX,transYOld=map.transY,map.transX+=e.translationX/map.scale,map.transY+=e.translationY/map.scale,map.applyTransform(),map.tip.hide(),transXOld==map.transX&&transYOld==map.transY||e.preventDefault()),1!=e.scale&&(map.setScale(map.scale*e.scale,e.offsetX,e.offsetY),map.tip.hide(),e.preventDefault())},!1),element.addEventListener("pointerdown",function(e){gesture.addPointer(e.pointerId)},!1)},bindElementEvents:function(){var pageX,pageY,mouseMoved,map=this;this.container.mousemove(function(e){2<Math.abs(pageX-e.pageX)+Math.abs(pageY-e.pageY)&&(mouseMoved=!0)}),this.container.delegate("[class~='jvectormap-element']","mouseover mouseout",function(e){var type=-1===(jvm.$(this).attr("class").baseVal||jvm.$(this).attr("class")).indexOf("jvectormap-region")?"marker":"region",code="region"==type?jvm.$(this).attr("data-code"):jvm.$(this).attr("data-index"),element="region"==type?map.regions[code].element:map.markers[code].element,tipText="region"==type?map.mapData.paths[code].name:map.markers[code].config.name||"",tipShowEvent=jvm.$.Event(type+"TipShow.jvectormap"),overEvent=jvm.$.Event(type+"Over.jvectormap");"mouseover"==e.type?(map.container.trigger(overEvent,[code]),overEvent.isDefaultPrevented()||element.setHovered(!0),map.tip.text(tipText),map.container.trigger(tipShowEvent,[map.tip,code]),tipShowEvent.isDefaultPrevented()||(map.tip.show(),map.tipWidth=map.tip.width(),map.tipHeight=map.tip.height())):(element.setHovered(!1),map.tip.hide(),map.container.trigger(type+"Out.jvectormap",[code]))}),this.container.delegate("[class~='jvectormap-element']","mousedown",function(e){pageX=e.pageX,pageY=e.pageY,mouseMoved=!1}),this.container.delegate("[class~='jvectormap-element']","mouseup",function(){var type=-1===(jvm.$(this).attr("class").baseVal?jvm.$(this).attr("class").baseVal:jvm.$(this).attr("class")).indexOf("jvectormap-region")?"marker":"region",code="region"==type?jvm.$(this).attr("data-code"):jvm.$(this).attr("data-index"),clickEvent=jvm.$.Event(type+"Click.jvectormap"),element="region"==type?map.regions[code].element:map.markers[code].element;mouseMoved||(map.container.trigger(clickEvent,[code]),("region"==type&&map.params.regionsSelectable||"marker"==type&&map.params.markersSelectable)&&(clickEvent.isDefaultPrevented()||(map.params[type+"sSelectableOne"]&&map.clearSelected(type+"s"),element.setSelected(!element.isSelected))))})},bindZoomButtons:function(){var map=this;jvm.$("<div/>").addClass("jvectormap-zoomin").text("+").appendTo(this.container),jvm.$("<div/>").addClass("jvectormap-zoomout").html("&#x2212;").appendTo(this.container),this.container.find(".jvectormap-zoomin").click(function(){map.setScale(map.scale*map.params.zoomStep,map.width/2,map.height/2,!1,map.params.zoomAnimate)}),this.container.find(".jvectormap-zoomout").click(function(){map.setScale(map.scale/map.params.zoomStep,map.width/2,map.height/2,!1,map.params.zoomAnimate)})},createTip:function(){var map=this;this.tip=jvm.$("<div/>").addClass("jvectormap-tip").appendTo(jvm.$("body")),this.container.mousemove(function(e){var left=e.pageX-15-map.tipWidth,top=e.pageY-15-map.tipHeight;left<5&&(left=e.pageX+15),top<5&&(top=e.pageY+15),map.tip.css({left:left,top:top})})},setScale:function(scale,anchorX,anchorY,isCentered,animate){var interval,scaleStart,scaleDiff,transXStart,transXDiff,transYStart,transYDiff,transX,transY,viewportChangeEvent=jvm.$.Event("zoom.jvectormap"),that=this,i=0,count=Math.abs(Math.round(60*(scale-this.scale)/Math.max(scale,this.scale))),deferred=new jvm.$.Deferred;return scale>this.params.zoomMax*this.baseScale?scale=this.params.zoomMax*this.baseScale:scale<this.params.zoomMin*this.baseScale&&(scale=this.params.zoomMin*this.baseScale),void 0!==anchorX&&void 0!==anchorY&&(zoomStep=scale/this.scale,transY=isCentered?(transX=anchorX+this.defaultWidth*(this.width/(this.defaultWidth*scale))/2,anchorY+this.defaultHeight*(this.height/(this.defaultHeight*scale))/2):(transX=this.transX-(zoomStep-1)/scale*anchorX,this.transY-(zoomStep-1)/scale*anchorY)),animate&&0<count?(scaleStart=this.scale,scaleDiff=(scale-scaleStart)/count,transXStart=this.transX*this.scale,transYStart=this.transY*this.scale,transXDiff=(transX*scale-transXStart)/count,transYDiff=(transY*scale-transYStart)/count,interval=setInterval(function(){i+=1,that.scale=scaleStart+scaleDiff*i,that.transX=(transXStart+transXDiff*i)/that.scale,that.transY=(transYStart+transYDiff*i)/that.scale,that.applyTransform(),i==count&&(clearInterval(interval),that.container.trigger(viewportChangeEvent,[scale/that.baseScale]),deferred.resolve())},10)):(this.transX=transX,this.transY=transY,this.scale=scale,this.applyTransform(),this.container.trigger(viewportChangeEvent,[scale/this.baseScale]),deferred.resolve()),deferred},setFocus:function(config){var bbox,itemBbox,codes,i,point;if((config=config||{}).region?codes=[config.region]:config.regions&&(codes=config.regions),codes){for(i=0;i<codes.length;i++)this.regions[codes[i]]&&(itemBbox=this.regions[codes[i]].element.shape.getBBox())&&(bbox=void 0===bbox?itemBbox:{x:Math.min(bbox.x,itemBbox.x),y:Math.min(bbox.y,itemBbox.y),width:Math.max(bbox.x+bbox.width,itemBbox.x+itemBbox.width)-Math.min(bbox.x,itemBbox.x),height:Math.max(bbox.y+bbox.height,itemBbox.y+itemBbox.height)-Math.min(bbox.y,itemBbox.y)});return this.setScale(Math.min(this.width/bbox.width,this.height/bbox.height),-(bbox.x+bbox.width/2),-(bbox.y+bbox.height/2),!0,config.animate)}return void 0!==config.lat&&void 0!==config.lng?(point=this.latLngToPoint(config.lat,config.lng),config.x=this.transX-point.x/this.scale,config.y=this.transY-point.y/this.scale):config.x&&config.y&&(config.x*=-this.defaultWidth,config.y*=-this.defaultHeight),this.setScale(config.scale*this.baseScale,config.x,config.y,!0,config.animate)},getSelected:function(type){var key,selected=[];for(key in this[type])this[type][key].element.isSelected&&selected.push(key);return selected},getSelectedRegions:function(){return this.getSelected("regions")},getSelectedMarkers:function(){return this.getSelected("markers")},setSelected:function(type,keys){var i;if("object"!=typeof keys&&(keys=[keys]),jvm.$.isArray(keys))for(i=0;i<keys.length;i++)this[type][keys[i]].element.setSelected(!0);else for(i in keys)this[type][i].element.setSelected(!!keys[i])},setSelectedRegions:function(keys){this.setSelected("regions",keys)},setSelectedMarkers:function(keys){this.setSelected("markers",keys)},clearSelected:function(type){var i,select={},selected=this.getSelected(type);for(i=0;i<selected.length;i++)select[selected[i]]=!1;this.setSelected(type,select)},clearSelectedRegions:function(){this.clearSelected("regions")},clearSelectedMarkers:function(){this.clearSelected("markers")},getMapObject:function(){return this},getRegionName:function(code){return this.mapData.paths[code].name},createRegions:function(){var key,region,map=this;for(key in this.regionLabelsGroup=this.regionLabelsGroup||this.canvas.addGroup(),this.mapData.paths)region=new jvm.Region({map:this,path:this.mapData.paths[key].path,code:key,style:jvm.$.extend(!0,{},this.params.regionStyle),labelStyle:jvm.$.extend(!0,{},this.params.regionLabelStyle),canvas:this.canvas,labelsGroup:this.regionLabelsGroup,label:"vml"!=this.canvas.mode?this.params.labels&&this.params.labels.regions:null}),jvm.$(region.shape).bind("selected",function(e,isSelected){map.container.trigger("regionSelected.jvectormap",[jvm.$(this.node).attr("data-code"),isSelected,map.getSelectedRegions()])}),this.regions[key]={element:region,config:this.mapData.paths[key]}},createMarkers:function(markers){var i,marker,point,markerConfig,markersArray,map=this;if(this.markersGroup=this.markersGroup||this.canvas.addGroup(),this.markerLabelsGroup=this.markerLabelsGroup||this.canvas.addGroup(),jvm.$.isArray(markers))for(markersArray=markers.slice(),markers={},i=0;i<markersArray.length;i++)markers[i]=markersArray[i];for(i in markers)markerConfig=markers[i]instanceof Array?{latLng:markers[i]}:markers[i],!1!==(point=this.getMarkerPosition(markerConfig))&&(marker=new jvm.Marker({map:this,style:jvm.$.extend(!0,{},this.params.markerStyle,{initial:markerConfig.style||{}}),labelStyle:jvm.$.extend(!0,{},this.params.markerLabelStyle),index:i,cx:point.x,cy:point.y,group:this.markersGroup,canvas:this.canvas,labelsGroup:this.markerLabelsGroup,label:"vml"!=this.canvas.mode?this.params.labels&&this.params.labels.markers:null}),jvm.$(marker.shape).bind("selected",function(e,isSelected){map.container.trigger("markerSelected.jvectormap",[jvm.$(this.node).attr("data-index"),isSelected,map.getSelectedMarkers()])}),this.markers[i]&&this.removeMarkers([i]),this.markers[i]={element:marker,config:markerConfig})},repositionMarkers:function(){var i,point;for(i in this.markers)!1!==(point=this.getMarkerPosition(this.markers[i].config))&&this.markers[i].element.setStyle({cx:point.x,cy:point.y})},repositionLabels:function(){var key;for(key in this.regions)this.regions[key].element.updateLabelPosition();for(key in this.markers)this.markers[key].element.updateLabelPosition()},getMarkerPosition:function(markerConfig){return jvm.Map.maps[this.params.map].projection?this.latLngToPoint.apply(this,markerConfig.latLng||[0,0]):{x:markerConfig.coords[0]*this.scale+this.transX*this.scale,y:markerConfig.coords[1]*this.scale+this.transY*this.scale}},addMarker:function(key,marker,seriesData){var values,i,markers={},data=[];seriesData=seriesData||[];for(markers[key]=marker,i=0;i<seriesData.length;i++)values={},void 0!==seriesData[i]&&(values[key]=seriesData[i]),data.push(values);this.addMarkers(markers,data)},addMarkers:function(markers,seriesData){var i;for(seriesData=seriesData||[],this.createMarkers(markers),i=0;i<seriesData.length;i++)this.series.markers[i].setValues(seriesData[i]||{})},removeMarkers:function(markers){var i;for(i=0;i<markers.length;i++)this.markers[markers[i]].element.remove(),delete this.markers[markers[i]]},removeAllMarkers:function(){var i,markers=[];for(i in this.markers)markers.push(i);this.removeMarkers(markers)},latLngToPoint:function(lat,lng){var point,inset,bbox,proj=jvm.Map.maps[this.params.map].projection,centralMeridian=proj.centralMeridian;return lng<-180+centralMeridian&&(lng+=360),point=jvm.Proj[proj.type](lat,lng,centralMeridian),!!(inset=this.getInsetForPoint(point.x,point.y))&&(bbox=inset.bbox,point.x=(point.x-bbox[0].x)/(bbox[1].x-bbox[0].x)*inset.width*this.scale,point.y=(point.y-bbox[0].y)/(bbox[1].y-bbox[0].y)*inset.height*this.scale,{x:point.x+this.transX*this.scale+inset.left*this.scale,y:point.y+this.transY*this.scale+inset.top*this.scale})},pointToLatLng:function(x,y){var i,inset,bbox,nx,ny,proj=jvm.Map.maps[this.params.map].projection,centralMeridian=proj.centralMeridian,insets=jvm.Map.maps[this.params.map].insets;for(i=0;i<insets.length;i++)if(bbox=(inset=insets[i]).bbox,nx=x-(this.transX*this.scale+inset.left*this.scale),ny=y-(this.transY*this.scale+inset.top*this.scale),nx=nx/(inset.width*this.scale)*(bbox[1].x-bbox[0].x)+bbox[0].x,ny=ny/(inset.height*this.scale)*(bbox[1].y-bbox[0].y)+bbox[0].y,nx>bbox[0].x&&nx<bbox[1].x&&ny>bbox[0].y&&ny<bbox[1].y)return jvm.Proj[proj.type+"_inv"](nx,-ny,centralMeridian);return!1},getInsetForPoint:function(x,y){var i,bbox,insets=jvm.Map.maps[this.params.map].insets;for(i=0;i<insets.length;i++)if(x>(bbox=insets[i].bbox)[0].x&&x<bbox[1].x&&y>bbox[0].y&&y<bbox[1].y)return insets[i]},createSeries:function(){var i,key;for(key in this.series={markers:[],regions:[]},this.params.series)for(i=0;i<this.params.series[key].length;i++)this.series[key][i]=new jvm.DataSeries(this.params.series[key][i],this[key],this)},remove:function(){this.tip.remove(),this.container.remove(),jvm.$(window).unbind("resize",this.onResize),jvm.$("body").unbind("mouseup",this.onContainerMouseUp)}},jvm.Map.maps={},jvm.Map.defaultParams={map:"world_mill_en",backgroundColor:"#505050",zoomButtons:!0,zoomOnScroll:!0,zoomOnScrollSpeed:3,panOnDrag:!0,zoomMax:8,zoomMin:1,zoomStep:1.6,zoomAnimate:!0,regionsSelectable:!1,markersSelectable:!1,bindTouchEvents:!0,regionStyle:{initial:{fill:"white","fill-opacity":1,stroke:"none","stroke-width":0,"stroke-opacity":1},hover:{"fill-opacity":.8,cursor:"pointer"},selected:{fill:"yellow"},selectedHover:{}},regionLabelStyle:{initial:{"font-family":"Verdana","font-size":"12","font-weight":"bold",cursor:"default",fill:"black"},hover:{cursor:"pointer"}},markerStyle:{initial:{fill:"grey",stroke:"#505050","fill-opacity":1,"stroke-width":1,"stroke-opacity":1,r:5},hover:{stroke:"black","stroke-width":2,cursor:"pointer"},selected:{fill:"blue"},selectedHover:{}},markerLabelStyle:{initial:{"font-family":"Verdana","font-size":"12","font-weight":"bold",cursor:"default",fill:"black"},hover:{cursor:"pointer"}}},jvm.Map.apiEvents={onRegionTipShow:"regionTipShow",onRegionOver:"regionOver",onRegionOut:"regionOut",onRegionClick:"regionClick",onRegionSelected:"regionSelected",onMarkerTipShow:"markerTipShow",onMarkerOver:"markerOver",onMarkerOut:"markerOut",onMarkerClick:"markerClick",onMarkerSelected:"markerSelected",onViewportChange:"viewportChange"},jvm.MultiMap=function(params){var that=this;this.maps={},this.params=jvm.$.extend(!0,{},jvm.MultiMap.defaultParams,params),this.params.maxLevel=this.params.maxLevel||Number.MAX_VALUE,this.params.main=this.params.main||{},this.params.main.multiMapLevel=0,this.history=[this.addMap(this.params.main.map,this.params.main)],this.defaultProjection=this.history[0].mapData.projection.type,this.mapsLoaded={},this.params.container.css({position:"relative"}),this.backButton=jvm.$("<div/>").addClass("jvectormap-goback").text("Back").appendTo(this.params.container),this.backButton.hide(),this.backButton.click(function(){that.goBack()}),this.spinner=jvm.$("<div/>").addClass("jvectormap-spinner").appendTo(this.params.container),this.spinner.hide()},jvm.MultiMap.prototype={addMap:function(name,config){var cnt=jvm.$("<div/>").css({width:"100%",height:"100%"});return this.params.container.append(cnt),this.maps[name]=new jvm.Map(jvm.$.extend(config,{container:cnt})),this.params.maxLevel>config.multiMapLevel&&this.maps[name].container.on("regionClick.jvectormap",{scope:this},function(e,code){var multimap=e.data.scope,mapName=multimap.params.mapNameByCode(code,multimap);multimap.drillDownPromise&&"pending"===multimap.drillDownPromise.state()||multimap.drillDown(mapName,code)}),this.maps[name]},downloadMap:function(code){var that=this,deferred=jvm.$.Deferred();return this.mapsLoaded[code]?deferred.resolve():jvm.$.get(this.params.mapUrlByCode(code,this)).then(function(){that.mapsLoaded[code]=!0,deferred.resolve()},function(){deferred.reject()}),deferred},drillDown:function(name,code){var currentMap=this.history[this.history.length-1],that=this,focusPromise=currentMap.setFocus({region:code,animate:!0}),downloadPromise=this.downloadMap(code);focusPromise.then(function(){"pending"===downloadPromise.state()&&that.spinner.show()}),downloadPromise.always(function(){that.spinner.hide()}),this.drillDownPromise=jvm.$.when(downloadPromise,focusPromise),this.drillDownPromise.then(function(){currentMap.params.container.hide(),that.maps[name]?that.maps[name].params.container.show():that.addMap(name,{map:name,multiMapLevel:currentMap.params.multiMapLevel+1}),that.history.push(that.maps[name]),that.backButton.show()})},goBack:function(){var currentMap=this.history.pop(),prevMap=this.history[this.history.length-1],that=this;currentMap.setFocus({scale:1,x:.5,y:.5,animate:!0}).then(function(){currentMap.params.container.hide(),prevMap.params.container.show(),prevMap.updateSize(),1===that.history.length&&that.backButton.hide(),prevMap.setFocus({scale:1,x:.5,y:.5,animate:!0})})}},jvm.MultiMap.defaultParams={mapNameByCode:function(code,multiMap){return code.toLowerCase()+"_"+multiMap.defaultProjection+"_en"},mapUrlByCode:function(code,multiMap){return"jquery-jvectormap-data-"+code.toLowerCase()+"-"+multiMap.defaultProjection+"-en.js"}};
jQuery.fn.vectorMap('addMap', 'world_merc',{"insets": [{"width": 900, "top": 0, "height": 583.0802520919394, "bbox": [{"y": -18449355.69035302, "x": -20004297.151525836}, {"y": 7485321.539093307, "x": 20026572.394749384}], "left": 0}], "paths": {"BD": {"path": "M651.84,359.63l-0.6,-2.05l-1.36,-1.76l-2.31,-0.11l-0.41,0.48l0.2,0.98l-0.54,1.03l-0.71,-0.37l-0.68,0.36l-1.19,-0.37l-0.37,-2.06l-0.81,-1.92l0.39,-1.52l-0.21,-0.46l-1.16,-0.55l0.3,-0.55l1.48,-0.98l0.03,-0.64l-1.56,-1.27l0.56,-1.2l1.6,0.97l1.04,0.16l0.18,1.62l0.33,0.35l5.65,0.65l-0.86,1.73l-1.21,0.35l-0.77,1.56l0.07,0.46l1.37,1.41l0.68,-0.19l0.42,-1.44l1.21,3.96l-0.03,1.26l-0.32,-0.15l-0.41,0.28Z", "name": "Bangladesh"}, "BE": {"path": "M429.3,264.88l1.93,0.28l2.07,-0.74l1.41,1.55l1.25,0.86l-0.23,2.13l-0.68,0.42l-0.18,1.46l-1.63,-1.32l-1.4,0.17l-2.72,-3.22l-1.17,-0.21l-0.2,-0.77l1.57,-0.62Z", "name": "Belgium"}, "BF": {"path": "M421.42,377.38l-0.11,0.96l0.34,1.18l1.4,1.73l0.07,1.11l0.32,0.37l2.56,0.52l-0.04,1.3l-0.38,0.54l-1.07,0.21l-0.73,1.19l-0.63,0.21l-3.22,-0.25l-0.94,0.39l-5.4,-0.05l-0.39,0.38l0.16,2.75l-1.23,-0.43l-1.17,0.1l-0.89,0.57l-2.27,-1.73l-0.13,-1.12l0.61,-0.96l0.01,-0.93l1.87,-2.0l0.44,-1.83l0.43,-0.39l1.28,0.26l1.05,-0.52l0.47,-0.73l1.84,-1.1l0.55,-0.84l2.2,-1.01l1.15,-0.31l0.72,0.46l1.13,-0.01Z", "name": "Burkina Faso"}, "BG": {"path": "M491.72,293.09l-0.93,1.06l-0.91,2.45l0.52,1.52l-1.65,-0.27l-2.55,1.06l-0.27,1.69l-1.79,0.25l-2.03,-1.11l-1.92,0.88l-1.4,-0.07l-0.15,-1.87l-1.09,-1.09l0.34,-1.71l0.91,-1.02l0.01,-0.52l-1.15,-1.41l-0.06,-1.14l0.44,0.87l0.46,0.21l0.87,-0.23l1.91,0.53l3.68,0.18l1.44,-0.92l2.7,-0.74l1.67,1.16l0.95,0.26Z", "name": "Bulgaria"}, "BA": {"path": "M463.49,287.91l2.09,0.57l1.72,-0.03l1.56,0.78l-0.4,0.99l1.14,1.61l-0.27,1.19l-1.82,1.31l-0.37,1.54l-1.65,-0.96l-0.89,-1.36l-2.11,-2.07l-1.65,-2.57l0.25,-0.7l0.45,0.41l0.59,-0.06l0.43,-0.59l0.92,-0.06Z", "name": "Bosnia and Herz."}, "BN": {"path": "M707.48,403.47l0.69,-0.65l1.41,-0.91l-0.15,1.64l-0.81,-0.05l-0.61,0.58l-0.53,-0.6Z", "name": "Brunei"}, "BO": {"path": "M263.83,471.11l-3.09,-0.24l-0.38,0.24l-0.7,1.56l-1.31,-1.57l-3.28,-0.66l-2.38,2.47l-1.3,0.27l-0.88,-3.36l-1.31,-2.93l0.74,-2.43l-0.12,-0.42l-1.2,-1.03l-0.37,-1.92l-1.09,-1.59l1.46,-2.61l-0.97,-2.36l0.48,-1.07l-0.35,-0.74l0.91,-1.33l0.16,-3.89l0.5,-1.18l-1.81,-3.45l2.46,0.08l0.8,-0.85l3.4,-1.92l2.66,-0.35l-0.19,1.39l0.3,1.07l-0.05,1.98l2.72,2.29l2.88,0.49l0.89,0.87l1.79,0.59l0.98,0.71l1.71,0.05l1.17,0.61l0.6,2.74l-0.7,0.54l0.96,3.03l0.37,0.28l4.3,0.1l-0.25,1.22l0.27,1.03l1.43,0.92l0.5,1.38l-0.41,1.9l-0.65,1.11l0.13,1.37l-2.69,-1.68l-2.4,-0.03l-4.36,0.77l-1.49,2.56l-0.1,1.55l-0.75,2.44Z", "name": "Bolivia"}, "JP": {"path": "M781.1,291.58l1.81,0.77l1.63,-1.08l0.4,2.83l-3.6,1.02l-1.98,3.05l-3.61,-2.12l-0.58,0.21l-1.27,3.44l-2.14,0.04l-0.3,-2.88l1.09,-2.32l2.44,-0.17l0.37,-0.34l1.26,-6.78l2.45,3.07l2.03,1.27ZM773.56,314.42l-0.92,2.42l0.38,1.64l-1.15,1.91l-3.02,1.35l-4.59,0.3l-3.33,3.22l-1.25,-0.86l-0.09,-2.06l-0.46,-0.38l-4.35,0.67l-3.0,1.42l-2.84,0.06l-0.37,0.26l0.11,0.44l2.34,2.04l-1.55,4.67l-1.25,0.95l-0.8,-0.75l0.56,-2.43l-0.2,-0.44l-1.47,-0.8l-0.77,-1.54l2.14,-0.91l1.27,-1.83l2.45,-1.53l1.83,-2.06l4.77,-0.88l2.6,0.61l0.45,-0.22l2.39,-5.05l1.27,1.14l0.53,0.01l5.1,-4.39l1.68,-4.08l-0.39,-3.75l0.92,-1.82l2.11,-0.49l1.24,4.16l-0.07,2.45l-2.25,3.13l-0.03,3.43ZM757.77,324.02l0.2,0.64l-1.01,1.31l-1.17,-0.72l-1.28,0.7l-0.69,1.54l-1.01,-0.53l0.01,-1.04l1.14,-1.49l1.58,0.15l0.85,-1.05l1.38,0.49Z", "name": "Japan"}, "BI": {"path": "M495.45,425.39l-1.08,-2.99l1.14,-0.11l0.64,-1.19l0.76,0.09l0.65,1.83l-2.1,2.37Z", "name": "Burundi"}, "BJ": {"path": "M429.57,385.57l-0.05,0.81l0.5,1.35l-0.42,0.87l0.17,0.79l-1.82,2.14l-0.57,1.77l-0.08,5.44l-1.41,0.2l-0.48,-1.36l0.11,-5.73l-0.52,-0.7l-0.2,-1.35l-1.48,-1.49l0.22,-0.91l0.89,-0.43l0.42,-0.93l1.27,-0.36l1.22,-1.35l0.61,-0.0l1.62,1.25Z", "name": "Benin"}, "BT": {"path": "M650.32,342.67l0.85,0.75l-0.12,1.18l-3.76,-0.12l-1.57,0.41l-1.93,-0.91l1.49,-2.09l1.12,-0.6l1.62,0.6l1.33,0.09l0.98,0.68Z", "name": "Bhutan"}, "JM": {"path": "M228.38,368.9l-0.8,0.41l-2.27,-1.09l0.84,-0.25l2.14,0.31l1.18,0.59l-1.09,0.03Z", "name": "Jamaica"}, "BW": {"path": "M483.92,460.24l2.27,4.08l2.83,2.92l0.96,0.32l0.77,2.5l2.13,0.63l1.04,0.8l-3.01,1.7l-2.32,2.09l-1.54,2.79l-1.52,0.46l-0.64,2.01l-1.34,0.54l-1.84,-0.12l-1.21,-0.77l-1.36,-0.31l-1.22,0.64l-0.75,1.42l-2.31,1.98l-1.39,0.22l-0.36,-0.63l0.16,-1.82l-1.48,-2.63l-0.62,-0.44l-0.0,-7.35l2.08,-0.08l0.38,-0.4l0.07,-9.12l1.56,-0.08l3.63,-0.87l0.8,0.91l0.52,0.07l1.5,-0.97l2.2,-0.5Z", "name": "Botswana"}, "BR": {"path": "M259.98,404.95l3.24,0.7l0.65,-0.53l4.55,-1.32l1.08,-1.06l-0.02,-0.64l0.55,-0.05l0.28,0.28l-0.26,0.87l0.22,0.48l0.73,0.32l0.4,0.81l-0.62,0.86l-0.4,2.13l0.82,2.56l1.69,1.43l1.43,0.2l3.17,-1.68l3.18,0.3l0.65,-0.75l-0.27,-0.92l1.9,-0.09l2.39,0.99l1.06,-0.61l0.84,0.78l1.2,-0.18l1.18,-1.06l0.84,-1.94l1.36,-2.11l0.37,-0.05l1.89,5.46l1.33,0.59l0.05,1.28l-1.77,1.94l0.02,0.56l1.02,0.87l4.07,0.36l0.08,2.16l0.66,0.29l1.74,-1.5l6.97,2.32l1.02,1.22l-0.35,1.18l0.49,0.5l2.81,-0.74l4.77,1.3l3.75,-0.08l3.57,2.0l3.29,2.86l1.93,0.73l2.12,0.12l0.71,0.62l1.21,4.52l-0.95,4.0l-4.72,5.09l-1.64,2.95l-1.72,2.07l-0.8,0.3l-0.72,2.05l0.18,4.81l-0.94,5.62l-0.81,1.15l-0.43,3.44l-2.55,3.58l-0.4,2.59l-1.86,1.08l-0.67,1.57l-2.54,0.01l-3.94,1.05l-1.83,1.24l-2.87,0.85l-3.03,2.27l-2.2,2.92l-0.36,2.08l0.4,1.64l-0.45,2.73l-0.52,1.26l-1.77,1.62l-2.75,5.05l-3.83,3.63l-1.23,2.92l-1.18,1.22l-0.37,-0.92l0.96,-1.23l0.01,-0.48l-1.52,-2.09l-4.56,-3.52l-1.03,-0.01l-2.38,-2.13l-0.85,0.0l5.38,-5.77l3.77,-2.69l0.21,-2.55l-1.34,-1.86l-0.92,0.07l0.59,-2.44l0.01,-1.59l-1.11,-0.85l-1.75,0.31l-0.44,-3.22l-0.52,-0.97l-1.88,-0.9l-1.24,0.48l-2.17,-0.43l0.15,-3.31l-0.63,-1.37l0.67,-0.74l-0.22,-1.37l0.66,-1.16l0.44,-2.08l-0.61,-1.86l-1.4,-0.87l-0.2,-0.77l0.34,-1.41l-0.38,-0.49l-4.52,-0.1l-0.72,-2.27l0.59,-0.42l-0.03,-1.12l-0.5,-0.87l-0.32,-1.71l-1.45,-0.76l-1.63,-0.02l-1.05,-0.73l-1.6,-0.48l-1.13,-1.0l-2.69,-0.41l-2.47,-2.08l0.13,-4.38l-0.45,-0.45l-3.46,0.5l-3.44,1.95l-0.6,0.74l-2.89,-0.17l-1.47,0.42l-0.72,-0.18l0.15,-3.54l-0.64,-0.34l-1.94,1.42l-1.87,-0.06l-0.83,-1.19l-1.38,-0.27l0.21,-1.01l-1.35,-1.5l-0.88,-1.92l0.56,-0.6l-0.0,-0.81l1.29,-0.62l0.22,-0.43l-0.22,-1.19l0.61,-0.91l0.15,-0.99l2.65,-1.58l1.99,-0.47l0.42,-0.36l2.06,0.11l0.42,-0.33l1.19,-8.0l-0.41,-1.56l-1.1,-1.0l0.01,-1.33l1.91,-0.42l0.08,-0.96l-0.33,-0.43l-1.14,-0.2l-0.02,-0.83l4.47,0.05l0.82,-0.67l0.82,1.81l0.8,0.07l1.15,1.1l2.26,-0.05l0.71,-0.83l2.78,-0.96l0.48,-1.13l1.6,-0.64l0.24,-0.47l-0.48,-0.83l-1.83,-0.19l-0.36,-3.22Z", "name": "Brazil"}, "BS": {"path": "M227.69,345.88l0.0,-0.01l0.0,0.0l-0.0,0.01ZM226.4,353.1l-0.48,-1.18l-0.85,-0.78l0.36,-1.17l0.95,2.03l0.01,1.1ZM225.65,345.38l-1.96,0.32l-0.04,-0.26l0.74,-0.14l1.26,0.08Z", "name": "Bahamas"}, "BY": {"path": "M493.82,245.43l0.3,0.93l0.53,0.25l1.16,-0.47l2.08,0.9l0.2,1.73l-0.48,1.43l1.57,2.82l0.93,0.75l0.13,0.97l1.58,0.7l0.48,0.74l-0.6,0.57l-1.85,-0.13l-0.76,0.48l-0.12,0.47l1.08,3.5l-1.96,0.33l-0.87,1.12l-0.12,1.49l-0.67,-0.22l-2.03,0.17l-0.52,-0.75l-0.57,-0.09l-0.72,0.54l-0.9,-0.5l-1.91,-0.08l-2.74,-0.95l-2.61,-0.34l-2.01,0.09l-1.52,1.11l-0.65,0.08l-0.07,-1.5l-0.64,-1.57l1.4,-1.01l0.01,-1.65l-0.7,-1.69l-0.08,-1.37l2.2,-0.03l2.72,-1.61l0.73,-2.54l2.1,-1.69l-0.2,-1.69l3.82,-2.26l2.27,0.97Z", "name": "Belarus"}, "BZ": {"path": "M198.03,374.09l0.1,-4.57l0.69,-0.06l0.74,-1.32l0.34,0.28l-0.4,1.33l0.17,0.59l-0.34,2.3l-1.3,1.44Z", "name": "Belize"}, "RU": {"path": "M491.5,228.55l2.65,-2.55l-0.01,-0.58l-2.35,-2.15l7.46,-9.43l1.0,-2.89l-0.09,-0.41l-3.55,-3.64l0.93,-3.78l-2.18,-4.19l1.62,-5.27l-2.85,-6.95l2.24,-4.74l-0.06,-0.43l-3.73,-4.33l0.33,-4.4l1.87,-0.61l4.26,-2.85l2.35,-2.28l3.83,4.05l6.96,1.77l9.34,7.63l1.83,2.99l0.16,4.03l-2.62,3.11l-3.84,1.55l-11.03,-4.69l-2.16,0.81l-0.14,0.63l3.99,4.45l0.31,8.71l5.34,3.55l0.64,-0.27l0.32,-2.78l-1.43,-2.53l1.23,-1.72l5.74,3.47l0.43,-0.01l2.11,-1.42l0.15,-0.48l-1.59,-4.12l5.51,-5.69l1.99,0.31l2.25,2.09l0.65,-0.16l1.46,-4.3l-2.03,-4.0l1.18,-3.78l-1.5,-3.67l5.98,1.86l1.2,3.14l-2.74,0.7l-0.3,0.39l0.02,3.61l2.07,2.45l0.43,0.11l3.87,-1.38l0.85,-4.25l13.69,-8.82l1.16,0.21l-2.17,3.65l0.26,0.59l3.11,0.7l0.4,-0.14l1.68,-2.16l4.51,-0.18l3.61,-2.68l2.61,3.78l0.67,-0.02l2.85,-4.55l-0.0,-0.43l-2.5,-3.89l1.03,-1.89l7.03,2.08l3.39,2.18l9.05,7.85l0.62,-0.13l1.64,-3.95l-2.48,-3.58l-0.07,-1.39l-0.31,-0.37l-2.62,-0.61l0.73,-3.21l-1.33,-5.76l-0.07,-2.28l4.55,-7.04l1.67,-7.53l1.59,-1.44l6.17,2.09l0.48,4.29l-2.34,6.42l1.55,2.76l0.79,5.18l-0.57,9.85l2.73,4.33l-1.02,4.26l-4.88,9.07l0.23,0.57l2.86,0.92l0.49,-0.22l0.94,-2.13l2.83,-1.82l0.65,-3.1l2.12,-3.05l-1.37,-4.06l1.14,-4.42l-0.31,-0.49l-2.47,-0.52l-0.55,-3.59l1.95,-7.61l-3.13,-6.05l4.31,-5.2l-0.45,-5.83l0.53,-0.08l1.2,4.22l-0.98,7.66l0.21,0.4l2.68,1.42l0.58,-0.43l-1.09,-5.45l3.9,-2.98l4.9,-0.41l4.5,4.5l0.49,0.06l0.17,-0.47l-2.21,-6.76l-0.24,-8.85l4.01,-1.66l5.93,0.39l5.54,-1.19l0.28,-0.55l-1.97,-4.64l2.73,-5.9l2.89,-0.36l4.78,-4.84l6.49,-1.33l1.07,-2.85l6.11,-0.9l1.91,2.17l0.58,0.02l5.5,-5.45l4.43,0.17l0.41,-0.34l0.68,-4.62l2.32,-4.63l5.58,-4.48l3.69,3.23l-3.04,2.5l0.14,0.69l5.42,1.64l0.64,5.13l0.7,0.21l2.17,-2.49l6.98,0.14l5.48,5.07l1.92,3.72l-0.59,4.98l-2.66,2.78l-6.56,5.27l-1.96,2.84l0.18,0.6l3.08,1.27l3.68,2.26l0.45,-0.02l1.76,-1.33l1.14,5.11l0.34,0.31l0.41,-0.22l1.03,-2.14l3.75,-1.32l7.65,1.4l0.57,3.81l0.35,0.34l10.47,1.28l0.45,-0.39l0.13,-6.16l4.81,1.41l3.93,-0.03l3.85,4.37l1.1,5.17l-1.42,3.65l3.15,6.24l4.05,3.25l0.63,-0.2l2.24,-7.6l3.55,3.15l0.44,0.06l4.09,-2.03l4.67,2.34l0.49,-0.1l1.68,-2.01l3.85,1.04l0.49,-0.48l-1.76,-7.3l3.0,-3.3l22.19,5.31l2.15,4.74l6.55,5.95l10.36,-1.34l4.76,1.21l1.93,2.89l-0.3,5.24l3.26,2.4l3.66,-1.4l4.3,-0.18l4.84,1.4l4.5,-0.75l4.22,6.04l0.56,0.1l3.1,-2.22l0.13,-0.49l-1.96,-4.39l0.94,-2.74l7.63,1.95l5.23,-0.41l7.05,3.36l9.59,8.27l6.43,6.42l-0.21,3.79l1.82,1.88l0.45,0.06l0.21,-0.41l-0.52,-4.08l6.13,0.86l4.58,5.48l-2.15,2.3l-3.97,0.6l-0.34,0.39l-0.06,5.64l-0.78,0.94l-1.98,-0.15l-1.91,-1.99l-3.16,-1.63l-0.77,-2.69l-2.54,-0.99l-2.81,0.69l-1.11,-1.73l0.5,-2.12l-0.56,-0.45l-3.0,1.46l-0.2,0.51l1.06,2.68l-1.31,2.33l-3.03,2.42l-3.08,-0.41l-0.37,0.63l2.22,3.03l1.47,4.59l1.16,1.53l0.26,2.04l-0.46,1.02l-4.64,-1.05l-6.95,4.01l-2.18,0.6l-7.62,6.88l-0.81,1.88l-3.15,-3.07l-0.49,-0.06l-6.18,3.75l-0.93,-1.52l-0.61,-0.09l-2.26,2.01l-3.15,-0.64l-0.47,0.3l-0.79,3.18l-3.03,4.85l0.09,1.91l0.26,0.36l2.58,0.95l-0.3,6.03l-1.97,0.14l-0.36,0.29l-1.07,3.72l0.87,1.82l-4.01,2.02l-1.04,4.88l-3.49,0.95l-0.29,0.32l-0.73,4.06l-3.07,3.18l-0.71,-2.11l-2.45,-15.41l1.17,-6.06l2.06,-2.67l0.2,-2.12l3.83,-1.13l4.47,-6.06l4.28,-5.09l4.48,-4.07l2.13,-7.67l-0.45,-0.5l-3.36,0.72l-1.47,4.3l-5.81,5.21l-1.86,-5.8l-0.49,-0.26l-6.68,1.94l-6.27,8.55l-0.01,0.46l1.74,2.54l-8.37,1.57l0.16,-3.05l-0.32,-0.41l-3.89,-0.75l-3.3,2.39l-7.61,-0.82l-8.47,1.58l-17.7,19.78l0.24,0.67l3.73,0.52l1.14,2.49l2.65,1.15l0.46,-0.13l1.47,-1.95l2.35,0.24l3.43,4.41l0.08,3.28l-1.96,4.11l-0.21,4.69l-1.11,6.02l-3.72,5.32l-0.87,2.56l-8.3,10.17l-3.18,1.92l-1.29,0.04l-1.45,-1.54l-0.53,-0.05l-2.48,1.84l0.28,-0.27l0.36,-4.08l-0.6,-2.85l1.77,-1.03l2.89,0.6l0.44,-0.22l1.71,-3.57l0.84,-3.92l0.97,-1.37l1.32,-3.37l-0.48,-0.53l-4.14,1.11l-2.19,1.46l-3.38,-0.0l-1.05,-3.43l-2.97,-2.72l-4.29,-1.26l-1.76,-6.1l-2.63,-6.06l-2.3,-1.58l-3.75,-1.25l-3.46,0.09l-3.19,0.77l-2.26,2.18l0.05,0.61l1.21,0.86l0.03,1.88l-1.34,1.28l-2.26,4.23l-0.03,1.71l-3.16,2.2l-2.8,-1.36l-3.02,0.27l-1.18,-1.17l-1.68,-0.52l-3.94,2.75l-3.21,0.62l-2.27,0.93l-3.04,-0.6l-2.21,0.03l-1.47,-1.89l-2.61,-1.95l-2.65,-0.52l-5.44,1.21l-3.23,-1.49l-0.71,-3.08l-5.2,-1.5l-2.75,-1.64l-0.54,0.13l-2.59,4.17l0.89,2.46l-2.1,2.34l-3.38,-0.91l-2.42,-0.14l-1.85,-1.84l-2.51,-0.06l-2.46,-1.17l-3.86,1.89l-4.72,3.31l-3.26,0.87l-1.17,-2.07l-0.41,-0.2l-2.97,0.48l-1.1,-1.58l-1.62,-0.7l-1.31,-2.32l-1.38,-0.72l-3.71,0.94l-3.3,-2.2l-0.56,0.12l-0.97,1.52l-5.27,-9.77l-3.03,-3.13l0.73,-1.08l-0.04,-0.5l-0.5,-0.06l-6.2,3.97l-1.82,0.18l0.16,-1.83l-0.23,-0.4l-3.22,-1.46l-2.47,0.85l-0.7,-4.0l-0.31,-0.32l-4.5,-0.95l-2.52,1.84l-6.18,1.58l-1.3,1.08l-9.51,1.62l-1.15,1.45l-0.03,0.46l1.56,2.48l-1.98,0.89l-0.21,0.52l0.35,0.85l-2.18,1.8l0.03,0.64l3.81,2.6l-0.44,1.31l-3.21,-0.16l-0.87,1.02l-3.08,-1.9l-3.97,0.08l-2.66,1.61l-8.29,-4.28l-4.1,0.06l-5.42,4.44l-0.37,2.36l-2.0,-1.76l-0.63,0.13l-2.0,4.27l0.61,1.02l-1.32,2.63l0.05,0.44l2.13,2.54l1.95,0.05l1.39,2.15l-0.23,1.74l1.12,0.83l-0.86,1.61l-2.49,0.71l-2.49,3.66l0.0,0.45l2.19,3.19l-0.16,2.44l2.54,3.7l-1.62,1.81l-0.67,-0.14l-1.63,-1.93l-2.29,-0.94l-0.94,-1.47l-2.34,-0.71l-1.48,0.44l-0.42,-0.51l-3.52,-1.68l-5.76,-1.14l-0.47,0.2l-2.87,-2.64l-2.9,-1.36l-1.63,-1.56l1.39,-0.52l2.08,-3.01l-0.04,-0.51l-0.98,-1.01l3.14,-1.27l0.25,-0.4l-0.07,-0.8l-0.5,-0.35l-1.72,0.45l0.04,-0.92l1.06,-0.85l2.31,-0.26l0.34,-0.28l0.4,-1.47l-0.51,-1.94l0.95,-1.86l0.01,-1.32l-0.27,-0.37l-3.69,-1.26l-1.41,0.02l-1.42,-1.68l-0.43,-0.12l-1.78,0.57l-2.78,-1.21l-0.01,-0.71l-0.89,-1.73l-2.01,-0.38l-0.13,-0.77l0.53,-1.15l-1.6,-2.31l-3.58,0.03l-0.92,0.88l-0.42,-0.07l-1.05,-3.54l2.29,-0.07l0.97,-0.92l0.06,-0.51l-0.9,-1.27l-1.4,-0.62l-0.06,-0.85l-0.95,-0.73l-1.43,-2.57l0.49,-1.21l-0.25,-2.07l-2.69,-1.38l-1.22,0.37l-0.45,-0.94l-2.46,-1.05l-0.74,-2.46l-0.21,-2.19l-1.07,-1.09l0.93,-1.49l-0.72,-4.29l1.7,-2.67l-0.24,-0.98ZM749.34,295.94l-0.76,0.56l-0.11,0.15l-0.01,-0.65l0.87,-0.06ZM871.96,154.57l2.04,-0.2l3.29,2.04l-0.13,0.64l-2.37,1.7l-5.54,0.79l-0.34,-1.85l3.05,-3.11ZM797.75,123.25l-2.42,3.18l-3.66,-0.78l-4.39,-3.6l0.47,-2.52l10.01,3.72ZM783.79,118.53l-1.81,6.68l-8.92,-0.26l-4.06,2.13l-4.64,-5.86l1.28,-6.57l3.04,-1.79l6.39,0.44l8.71,5.22ZM778.23,253.99l-0.64,-1.28l0.31,-0.17l0.33,1.45ZM778.36,254.55l0.92,4.28l-0.05,4.08l1.05,4.08l2.23,6.09l-2.91,-0.99l-0.51,0.27l-1.54,5.47l2.42,4.01l-0.04,1.39l-1.22,-1.41l-0.65,0.06l-1.07,1.83l-0.29,-1.88l0.28,-3.61l-0.28,-4.01l0.58,-2.92l0.11,-5.24l-1.46,-4.02l0.21,-5.38l2.23,-2.09ZM780.09,139.86l-3.31,0.05l-5.09,-1.07l2.11,-3.11l2.77,-0.74l3.29,3.15l0.23,1.71ZM683.7,87.54l-13.17,4.38l4.34,-15.76l1.75,-1.29l1.59,0.74l6.17,7.25l-0.68,4.69ZM670.82,80.26l-5.03,1.48l-6.76,-3.64l-4.04,-4.98l-1.9,-10.03l-3.29,-2.93l6.28,-10.21l5.0,-3.39l4.63,7.67l5.72,14.22l-0.6,11.8ZM564.4,160.28l-0.92,0.41l-7.78,-0.94l-0.83,-3.41l-4.32,-2.0l-0.33,-3.85l2.54,-1.96l-0.08,-4.42l4.9,-7.29l-0.16,-0.58l-1.86,-0.88l5.7,-7.68l-0.57,-4.44l5.43,-5.07l8.18,-6.55l8.25,-1.96l4.4,-4.05l4.43,-1.3l1.54,3.81l-1.55,3.04l-16.43,9.84l-7.93,9.27l-7.69,17.13l0.59,6.93l4.49,5.95ZM548.68,56.87l-5.47,3.05l-0.54,2.57l-2.49,2.05l-2.33,-2.98l1.37,-4.49l-0.35,-0.52l-4.3,-0.36l3.7,-2.13l3.34,-0.17l0.47,3.78l0.35,0.35l0.42,-0.25l1.41,-3.62l2.04,-2.24l3.21,2.97l-0.81,1.96ZM477.39,251.71l-4.1,0.06l-2.6,-0.41l0.38,-1.28l3.15,-1.29l3.25,1.22l-0.09,1.7Z", "name": "Russia"}, "RW": {"path": "M497.0,418.15l0.71,1.01l-0.11,1.09l-1.63,0.03l-1.04,1.39l-0.83,-0.11l0.51,-1.2l0.08,-1.34l0.42,-0.41l0.7,0.14l1.19,-0.61Z", "name": "Rwanda"}, "RS": {"path": "M469.33,288.43l0.49,-1.17l-1.2,-1.97l1.47,-0.73l1.3,0.13l1.18,1.23l0.45,1.29l1.35,0.74l0.34,1.53l1.46,1.02l0.76,-0.3l0.25,0.82l-0.51,0.87l0.22,1.27l1.08,1.41l-0.8,0.94l-0.38,1.72l-1.22,0.09l0.27,-0.81l-2.46,-2.38l-0.93,0.06l-0.47,1.05l-2.15,-1.58l0.57,-1.85l-1.13,-1.51l0.53,-1.32l-0.49,-0.55Z", "name": "Serbia"}, "TL": {"path": "M734.55,437.87l-0.09,-0.98l4.5,-0.86l-2.82,1.28l-1.59,0.55Z", "name": "Timor-Leste"}, "TM": {"path": "M553.03,299.38l-0.05,0.44l-0.1,-0.29l0.15,-0.15ZM555.85,298.15l0.46,-0.11l1.47,0.82l2.08,2.72l4.07,-0.21l0.38,-0.49l-0.34,-1.39l1.95,-1.07l1.9,-1.78l2.93,1.56l0.41,2.75l1.21,0.76l2.57,-0.15l0.62,0.45l1.32,3.46l4.54,3.8l2.67,1.6l3.07,1.26l-0.04,1.22l-1.32,-0.81l-0.61,0.19l-0.32,0.93l-2.19,0.86l-0.47,2.34l-1.21,0.81l-1.91,0.45l-0.73,1.44l-1.54,0.33l-2.22,-1.01l-0.2,-2.37l-0.37,-0.37l-1.72,-0.1l-2.76,-2.67l-2.14,-0.44l-2.84,-1.62l-1.78,-0.29l-1.25,0.58l-1.56,-0.09l-2.01,1.85l-1.69,0.47l-0.37,-1.75l0.36,-3.28l-0.2,-0.39l-1.68,-0.94l0.55,-1.92l-0.34,-0.51l-1.23,-0.14l0.38,-1.9l2.23,0.64l2.2,-1.06l0.12,-0.63l-1.77,-1.94l-0.69,-1.85Z", "name": "Turkmenistan"}, "TJ": {"path": "M597.8,305.02l-0.08,0.09l-2.5,-0.5l-0.48,0.34l-0.24,1.88l0.43,0.45l2.63,-0.24l3.18,1.04l4.38,-0.45l0.56,2.63l0.54,0.29l0.66,-0.26l1.12,0.54l0.21,2.4l-3.76,-0.23l-1.81,1.45l-1.74,0.8l-0.62,-0.64l0.22,-2.47l-0.65,-0.49l-0.04,-1.02l-1.36,-0.73l-0.48,0.07l-1.08,1.11l-0.54,1.62l-1.3,-0.06l-0.96,1.26l-0.91,-0.37l-1.63,0.91l-0.24,-0.12l1.28,-3.1l-0.54,-2.38l-1.69,-0.89l0.36,-0.8l2.18,-0.05l1.19,-1.8l0.76,-1.99l2.44,-0.56l-0.28,1.13l0.36,0.91l0.43,0.25Z", "name": "Tajikistan"}, "RO": {"path": "M487.52,276.99l0.59,0.28l2.89,4.68l-0.18,3.12l0.45,1.64l1.3,0.9l1.37,-0.47l0.76,0.41l0.03,0.46l-0.83,0.52l-0.57,-0.25l-0.55,0.3l-0.63,3.8l-0.98,-0.24l-2.1,-1.28l-2.95,0.81l-1.25,0.86l-3.49,-0.17l-1.88,-0.53l-0.87,0.17l-0.86,-1.54l0.34,-0.35l-0.05,-0.61l-0.62,-0.44l-0.51,0.04l-0.55,0.55l-1.04,-0.73l-0.17,-1.29l-1.58,-1.05l-0.34,-1.15l-0.92,-0.96l1.63,-0.65l2.66,-4.89l2.39,-1.44l2.93,0.39l1.06,0.83l0.47,0.02l0.79,-0.53l1.77,-0.34l0.76,-0.87l0.76,0.0Z", "name": "Romania"}, "GW": {"path": "M386.23,383.41l-0.29,0.84l0.15,0.61l-2.21,0.6l-0.86,0.96l-1.04,-0.83l-1.09,-0.23l-0.54,-1.07l-0.66,-0.5l2.41,-0.49l4.13,0.1Z", "name": "Guinea-Bissau"}, "GT": {"path": "M195.08,379.54l-2.48,-0.37l-1.03,-0.46l-1.14,-0.9l0.3,-1.01l-0.24,-0.68l0.96,-1.69l2.98,-0.01l0.4,-0.37l-0.19,-1.29l-1.68,-1.44l0.53,-0.4l0.0,-1.08l3.85,0.02l-0.21,4.61l0.4,0.43l1.48,0.38l-1.5,1.01l-0.34,0.71l0.12,0.57l-2.2,1.98Z", "name": "Guatemala"}, "GR": {"path": "M487.09,300.31l-0.62,1.67l-0.37,0.23l-2.84,-0.38l-3.03,0.86l-0.18,0.66l1.34,1.43l-0.67,0.28l-1.12,0.0l-1.2,-1.54l-0.65,0.03l-0.52,1.05l0.56,1.95l1.06,1.34l-0.61,0.46l-0.05,0.59l2.53,2.34l0.02,1.02l-1.77,-0.64l-0.5,0.54l0.53,1.16l-1.1,0.23l-0.3,0.52l0.77,2.24l-0.99,0.02l-1.84,-1.22l-1.37,-4.59l-2.21,-3.25l-0.12,-0.67l1.06,-1.44l0.2,-1.06l0.84,-0.7l0.03,-0.55l1.33,-0.24l1.01,-0.71l1.21,0.06l0.67,-0.62l2.26,-0.01l1.8,-0.83l1.85,1.11l2.28,-0.31l0.35,-0.39l0.01,-0.9l0.35,0.26ZM480.49,319.61l0.67,0.51l-0.8,-0.16l0.13,-0.35ZM482.3,320.35l2.74,0.05l0.29,0.4l-2.04,0.15l-0.32,-0.47l-0.67,-0.13Z", "name": "Greece"}, "GQ": {"path": "M448.79,409.52l0.02,2.22l-4.09,0.0l0.69,-2.27l3.38,0.05Z", "name": "Eq. Guinea"}, "GY": {"path": "M277.42,399.96l-0.32,1.83l-1.32,0.57l-0.23,0.46l-0.28,2.01l1.11,1.82l0.83,0.19l0.32,1.25l1.13,1.62l-1.21,-0.19l-1.08,0.71l-1.77,0.5l-0.44,0.46l-0.86,-0.09l-1.32,-1.01l-0.77,-2.27l0.36,-1.91l0.68,-1.23l-0.57,-1.17l-0.74,-0.43l0.12,-1.16l-0.9,-0.69l-1.1,0.09l-1.31,-1.48l0.53,-0.72l-0.04,-0.84l1.99,-0.86l0.05,-0.59l-0.71,-0.78l0.14,-0.57l1.66,-1.24l1.36,0.77l1.41,1.5l0.06,1.15l0.37,0.38l0.8,0.05l2.06,1.87Z", "name": "Guyana"}, "GE": {"path": "M521.61,293.9l5.38,1.03l3.26,1.57l0.84,0.7l1.39,-0.49l2.05,0.63l0.69,1.25l1.15,0.65l-0.2,0.63l1.05,1.54l-1.06,-0.15l-1.81,-0.93l-0.97,0.52l-3.21,0.48l-2.28,-1.55l-2.37,0.06l0.23,-1.11l-0.75,-2.51l-1.45,-1.26l-1.43,-0.44l-0.53,-0.61Z", "name": "Georgia"}, "GB": {"path": "M412.72,233.04l-2.32,4.44l0.45,0.57l2.5,-0.63l2.22,0.02l-0.56,3.24l-2.22,4.0l0.31,0.59l2.36,0.26l2.34,5.43l1.76,0.84l2.21,6.35l2.96,0.93l-0.25,2.13l-1.17,1.09l-0.09,0.47l0.87,1.82l-1.92,1.78l-3.29,-0.02l-4.09,1.04l-1.02,-0.68l-0.52,0.07l-1.5,1.67l-2.09,-0.4l-1.88,1.4l-0.67,-0.39l3.29,-3.71l2.15,-0.83l0.25,-0.41l-0.33,-0.35l-3.72,-0.64l-0.47,-1.06l2.27,-1.1l0.17,-0.57l-1.29,-2.09l0.39,-2.22l3.35,0.34l0.44,-0.34l0.37,-2.46l-1.77,-2.98l-3.1,-0.89l-0.43,-0.84l0.8,-2.18l-0.82,-1.22l-0.67,0.01l-0.66,1.02l-0.1,-3.02l-1.24,-2.37l0.87,-4.6l1.78,-3.54l1.83,0.33l2.26,-0.3ZM406.3,251.21l-1.06,2.32l-1.53,-0.71l-1.21,0.0l0.4,-1.97l-0.42,-1.89l1.46,-0.13l2.36,2.36Z", "name": "United Kingdom"}, "GA": {"path": "M453.24,409.42l-0.08,0.98l0.7,1.29l2.36,0.24l-0.98,2.63l1.18,1.79l0.25,1.78l-0.29,1.52l-0.6,0.93l-1.84,-0.09l-1.23,-1.11l-0.66,0.23l-0.15,0.84l-1.42,0.26l-1.02,0.7l-0.11,0.52l0.77,1.35l-1.34,0.98l-3.94,-4.31l-1.44,-2.45l0.06,-0.6l0.54,-0.81l1.05,-3.46l4.17,-0.07l0.4,-0.4l-0.02,-2.66l2.39,0.21l1.25,-0.27Z", "name": "Gabon"}, "GN": {"path": "M391.8,383.91l0.47,0.81l1.11,-0.32l0.98,0.71l1.07,0.2l2.26,-1.23l0.63,0.44l1.13,1.58l-0.48,1.41l0.8,0.3l-0.08,0.48l0.46,0.69l-0.35,1.37l1.05,2.63l-1.0,0.69l0.03,1.42l-0.72,-0.06l-1.07,1.01l-0.24,-0.27l0.07,-1.11l-1.05,-1.55l-0.49,-0.14l-1.3,0.36l-0.35,-2.01l-1.6,-2.19l-2.0,-0.0l-1.31,0.54l-1.95,2.19l-1.86,-2.2l-1.2,-0.78l-0.3,-1.12l-0.8,-0.86l0.65,-0.73l0.81,-0.03l1.64,-0.8l0.23,-1.88l2.67,0.64l0.89,-0.31l1.21,0.15Z", "name": "Guinea"}, "GM": {"path": "M379.31,381.18l0.1,-0.36l2.43,-0.07l0.74,-0.62l0.5,-0.03l0.83,0.53l-1.08,-0.33l-1.87,0.91l-1.65,-0.04ZM384.0,380.68l0.95,0.06l0.76,-0.23l-0.59,0.32l-1.11,-0.15Z", "name": "Gambia"}, "GL": {"path": "M352.9,3.19l15.35,16.28l-4.35,6.99l-9.4,0.81l-13.48,1.81l-0.32,0.54l1.26,3.26l0.46,0.25l8.67,-1.96l7.39,6.05l0.55,-0.04l4.4,-4.95l1.83,5.61l-2.72,9.68l0.18,0.45l0.48,-0.06l6.34,-6.15l11.94,-6.62l7.14,3.24l1.33,6.85l-10.07,11.17l-1.42,3.42l-7.83,2.5l-0.28,0.42l0.35,0.36l5.33,0.65l-2.8,9.83l-2.03,8.69l0.08,13.63l2.84,7.11l-3.6,0.49l-4.12,3.47l-0.05,0.56l4.54,5.53l0.56,8.17l-2.39,0.81l-0.24,0.53l3.05,7.7l-5.05,0.6l-0.27,0.64l2.78,3.54l-0.72,2.75l-3.27,1.26l-3.42,0.02l-0.35,0.59l3.09,5.7l0.03,2.82l-4.32,-2.99l-0.57,0.13l-1.29,2.22l0.14,0.54l3.3,2.0l3.18,4.75l0.88,5.79l-3.85,1.25l-4.86,-7.12l-0.48,-0.14l-0.24,0.44l0.83,5.08l-2.81,3.81l0.3,0.64l9.17,0.61l-6.07,5.68l-6.74,5.42l-7.2,2.3l-2.98,0.14l-2.66,2.67l-3.44,6.75l-5.23,4.25l-1.73,0.27l-7.11,3.08l-2.15,3.69l-0.09,4.21l-1.22,3.58l-4.03,4.36l0.89,4.48l-2.31,8.95l-3.05,0.26l-3.56,-4.0l-5.12,-0.16l-2.26,-2.64l-1.69,-5.21l-4.31,-6.82l-1.24,-3.62l-0.4,-5.4l-3.39,-5.47l0.87,-4.47l-1.62,-2.41l2.37,-7.41l3.81,-2.67l1.01,-3.01l0.52,-5.6l-0.22,-0.39l-0.45,0.06l-4.16,3.58l-1.99,0.9l-2.73,-2.07l-0.16,-4.72l0.9,-3.66l1.94,-0.09l5.03,1.98l0.47,-0.14l-0.03,-0.49l-6.54,-7.53l-0.47,-0.11l-2.25,1.0l-1.7,-1.6l2.69,-7.67l-1.51,-3.12l-4.99,-15.74l-3.17,-3.76l-0.11,-4.29l-6.93,-6.07l-5.4,-0.76l-12.62,1.16l-2.75,-3.16l-4.1,-6.46l6.13,-3.31l4.96,-0.6l0.35,-0.37l-0.29,-0.42l-10.63,-2.99l-5.42,-4.66l0.32,-4.37l9.32,-6.03l9.34,-6.65l0.97,-5.04l-0.15,-0.39l-6.52,-4.97l2.06,-5.6l8.57,-10.89l3.56,-1.73l0.22,-0.41l-1.01,-7.43l5.7,-4.5l7.58,-2.82l7.37,-0.16l2.62,5.4l0.69,0.04l6.35,-9.67l5.63,6.55l3.58,1.5l5.14,5.66l0.54,0.05l0.1,-0.53l-5.89,-9.52l0.33,-7.89l8.21,-11.86l8.55,0.93l0.41,-0.25l3.12,-7.8l8.58,-2.09l19.79,2.78Z", "name": "Greenland"}, "GH": {"path": "M420.53,387.35l-0.01,0.72l0.96,1.2l0.24,3.75l0.59,0.95l-0.51,2.1l0.19,1.41l1.02,2.22l-6.97,2.85l-1.8,-0.57l0.04,-0.89l-1.02,-2.04l0.61,-2.66l1.07,-2.33l-0.96,-6.5l5.01,0.07l0.94,-0.39l0.61,0.11Z", "name": "Ghana"}, "OM": {"path": "M568.09,360.37l-0.91,1.71l-1.22,0.04l-0.59,0.78l-0.41,1.53l0.26,1.63l-1.16,0.05l-1.56,0.99l-0.76,1.78l-1.62,0.05l-0.98,0.66l-0.17,1.17l-0.89,0.53l-1.49,-0.18l-2.4,0.95l-2.48,-5.51l7.35,-2.77l1.67,-5.36l-1.12,-2.14l0.05,-0.87l0.67,-1.04l0.07,-1.08l0.91,-0.43l-0.05,-2.14l0.7,-0.01l1.01,1.68l1.51,1.12l3.3,0.87l1.73,2.37l0.81,0.38l-1.23,2.44l-0.99,0.81ZM561.83,347.23l-0.0,-0.01l0.01,-0.01l-0.0,0.02Z", "name": "Oman"}, "TN": {"path": "M448.18,315.32l-1.08,1.46l-0.02,1.43l0.84,0.93l-0.29,2.3l-1.65,1.83l0.48,1.65l1.41,0.33l0.53,1.2l0.9,0.55l-0.11,1.83l-3.54,2.81l-0.09,2.52l-0.58,0.32l-0.96,-4.72l-1.54,-1.32l-0.15,-0.82l-1.93,-1.68l-0.19,-1.93l1.52,-1.74l0.59,-2.52l-0.38,-3.0l0.43,-1.35l2.45,-1.14l1.29,0.28l-0.06,1.25l0.59,0.37l1.54,-0.84Z", "name": "Tunisia"}, "JO": {"path": "M518.65,329.54l-5.15,1.67l-0.19,0.64l2.19,2.56l-0.58,0.44l-0.33,0.78l-1.71,0.36l-1.71,1.89l-2.34,-0.38l1.21,-4.6l0.56,-4.33l2.81,0.99l4.45,-2.88l0.8,2.87Z", "name": "Jordan"}, "HR": {"path": "M455.59,286.98l1.42,0.1l0.57,-0.46l0.74,0.44l0.98,0.07l0.43,-0.4l-0.01,-0.73l0.86,-0.57l0.21,-1.25l1.62,-0.78l2.55,1.93l2.07,0.69l0.88,-0.35l1.09,1.85l-0.56,0.77l-1.05,-0.63l-1.67,0.05l-2.1,-0.57l-1.3,0.07l-0.58,0.54l-0.57,-0.52l-0.65,0.16l-0.47,1.84l1.79,2.75l2.11,2.07l0.81,1.23l-1.27,-1.06l-2.2,-0.99l-1.73,-2.1l0.2,-0.63l-1.06,-1.38l-0.31,-1.43l-1.61,-0.56l-0.49,0.2l-0.45,0.89l-0.26,-1.24Z", "name": "Croatia"}, "HT": {"path": "M238.65,368.15l-1.58,-0.17l-1.19,0.44l-0.91,-0.56l0.06,-0.21l3.62,0.5ZM239.22,368.07l0.82,-0.54l0.06,-0.62l-1.02,-1.03l0.02,-0.84l-0.3,-0.39l-0.93,-0.35l3.16,0.46l0.02,1.9l-0.48,0.35l-0.07,0.58l0.54,0.74l-1.81,-0.26Z", "name": "Haiti"}, "HU": {"path": "M462.05,281.37l0.68,-1.93l-0.16,-0.54l0.71,-0.0l0.39,-0.35l0.1,-0.84l1.72,1.0l2.35,-0.43l0.43,-0.77l3.49,-0.92l0.69,-0.91l0.54,-0.15l2.55,1.09l0.69,-0.26l1.03,0.76l0.1,0.55l-1.45,0.83l-2.6,4.82l-1.79,0.61l-1.69,-0.11l-2.72,1.41l-1.83,-0.61l-2.55,-1.92l-0.7,-1.3Z", "name": "Hungary"}, "HN": {"path": "M199.6,379.29l-1.71,-1.22l0.07,-0.96l3.04,-2.17l2.37,0.29l1.27,-0.09l1.1,-0.53l1.3,0.28l1.14,-0.26l1.37,0.37l2.25,1.39l-2.37,0.95l-1.23,-0.4l-0.88,1.31l-1.28,1.0l-0.43,-0.3l-0.55,0.08l-0.42,0.53l-0.96,0.05l-0.36,0.41l0.04,0.89l-0.52,0.6l-0.3,0.04l-0.3,-0.56l-0.66,-0.32l0.12,-0.68l-0.48,-0.66l-0.63,-0.25l-0.97,0.2Z", "name": "Honduras"}, "PR": {"path": "M256.17,368.34l-0.27,0.28l-2.83,0.06l-0.07,-0.57l1.95,-0.1l1.23,0.34Z", "name": "Puerto Rico"}, "PS": {"path": "M509.06,331.4l0.27,-0.17l-0.04,0.09l-0.23,0.08ZM509.37,331.14l-0.03,-0.63l-0.35,-0.18l0.32,-1.21l0.24,0.11l-0.19,1.91Z", "name": "Palestine"}, "PT": {"path": "M401.85,314.47l-0.65,0.52l-1.11,-0.37l-0.93,0.18l0.29,-1.97l-0.24,-1.95l-1.24,-0.59l-0.47,-0.95l0.18,-1.87l1.01,-1.29l0.69,-3.25l-0.04,-1.52l-0.59,-2.16l1.29,-0.96l0.85,1.5l3.09,-0.33l0.49,1.17l-1.07,1.02l-0.03,2.43l-0.41,0.6l-0.08,1.25l-0.8,0.2l-0.26,0.57l0.93,1.79l-0.64,1.95l0.78,1.16l-1.12,1.72l0.08,1.13Z", "name": "Portugal"}, "PY": {"path": "M274.9,466.41l0.74,1.55l-0.16,3.55l0.32,0.41l2.64,0.52l1.11,-0.48l1.4,0.6l0.36,0.62l0.53,3.53l1.27,0.41l0.98,-0.39l0.52,0.28l-0.0,1.23l-1.21,5.54l-2.09,1.99l-1.8,0.41l-4.72,-1.03l2.21,-3.81l-0.32,-1.54l-2.77,-1.32l-3.03,-2.01l-2.07,-0.45l-4.34,-4.19l0.91,-2.99l0.08,-1.45l1.07,-2.09l4.13,-0.73l2.18,0.04l2.06,1.2l0.03,0.61Z", "name": "Paraguay"}, "PA": {"path": "M213.79,393.56l0.26,-1.53l-0.36,-0.26l-0.01,-0.5l0.44,-0.1l0.93,1.4l1.26,0.03l0.77,0.5l1.38,-0.24l2.51,-1.12l0.86,-0.72l3.45,0.85l1.4,1.19l0.41,1.75l-0.21,0.34l-0.53,-0.12l-0.47,0.29l-0.16,0.6l-0.68,-1.28l0.45,-0.49l-0.19,-0.66l-0.47,-0.13l-0.54,-0.84l-1.5,-0.75l-1.1,0.16l-0.75,0.99l-1.62,0.84l-0.18,0.96l0.85,0.97l-0.58,0.45l-0.69,0.08l-0.34,-1.18l-1.27,0.03l-0.71,-1.05l-2.59,-0.47Z", "name": "Panama"}, "PG": {"path": "M808.58,428.76l2.54,2.57l-0.13,0.26l-0.33,0.12l-0.87,-0.78l-1.22,-2.17ZM801.41,422.94l0.51,0.29l0.26,0.27l-0.49,-0.36l-0.28,-0.21ZM803.17,424.48l0.59,0.5l0.08,1.06l-0.29,-0.91l-0.38,-0.65ZM796.68,428.31l0.52,0.75l1.43,-0.19l2.27,-1.82l-0.01,-1.43l1.12,0.16l-0.04,1.1l-0.7,1.28l-1.12,0.18l-0.62,0.79l-2.46,1.11l-1.17,-0.0l-3.08,-1.25l3.41,0.0l0.45,-0.68ZM789.15,433.47l2.31,1.81l1.59,2.62l1.34,0.14l-0.06,0.66l0.31,0.43l1.06,0.24l0.06,0.66l2.25,1.06l-1.21,0.13l-0.72,-0.64l-4.56,-0.65l-3.22,-2.89l-1.49,-2.35l-3.27,-1.11l-2.38,0.72l-1.59,0.86l-0.2,0.42l0.27,1.56l-1.55,0.69l-1.36,-0.4l-2.21,-0.09l-0.08,-15.44l8.39,2.93l2.95,2.4l0.6,1.64l4.02,1.5l0.31,0.69l-1.76,0.21l-0.33,0.52l0.55,1.68Z", "name": "Papua New Guinea"}, "PE": {"path": "M244.97,425.11l-1.26,-0.07l-0.57,0.42l-1.93,0.45l-2.98,1.76l-0.36,1.36l-0.58,0.8l0.12,1.37l-1.24,0.6l-0.22,1.22l-0.62,0.84l1.04,2.28l1.28,1.44l-0.41,0.85l0.32,0.57l1.48,0.13l1.16,1.37l2.21,0.07l1.63,-1.08l-0.13,3.04l0.3,0.4l1.14,0.29l1.31,-0.35l1.9,3.62l-0.48,0.86l-0.17,3.89l-0.94,1.6l0.35,0.76l-0.48,1.08l0.98,2.0l-2.1,3.89l-0.97,0.51l-2.17,-1.31l-0.39,-1.18l-4.95,-2.62l-4.46,-2.82l-1.85,-1.53l-0.91,-1.87l0.3,-0.97l-2.11,-3.36l-4.82,-9.74l-1.04,-1.2l-0.87,-1.95l-3.4,-2.49l0.58,-1.18l-1.13,-2.23l0.66,-1.5l1.45,-1.15l-0.6,0.99l0.07,0.92l0.47,0.36l1.74,0.03l0.97,1.17l0.54,0.07l1.42,-1.03l0.6,-1.84l1.42,-2.02l3.04,-1.04l2.73,-2.62l0.86,-1.74l-0.1,-1.87l1.44,1.02l0.9,1.25l1.06,0.59l1.7,2.73l1.86,0.31l1.45,-0.61l0.96,0.39l1.36,-0.19l1.45,0.89l-1.4,2.21l0.31,0.61l0.59,0.05l0.47,0.5Z", "name": "Peru"}, "PK": {"path": "M615.13,319.81l-1.88,2.0l-2.59,0.42l-3.73,-0.73l-1.6,1.43l-0.09,0.4l1.77,4.7l1.73,1.32l-1.73,1.38l-0.11,2.26l-2.34,2.8l-1.59,2.95l-2.46,2.8l-3.03,-0.07l-2.76,2.96l0.05,0.59l1.51,1.16l0.26,1.98l1.44,1.55l0.37,1.77l-5.02,-0.01l-1.78,1.76l-1.41,-0.53l-0.76,-1.94l-2.27,-2.23l-11.61,0.89l0.72,-2.47l3.43,-1.37l0.25,-0.43l-0.21,-1.29l-1.2,-0.67l-0.28,-2.57l-2.29,-1.2l-1.32,-2.09l2.85,1.0l2.62,-0.4l1.42,0.35l0.77,-0.59l1.71,0.2l3.25,-1.2l0.26,-0.36l0.08,-2.33l1.19,-1.41l1.68,0.0l0.58,-0.87l1.59,-0.32l1.2,0.17l0.98,-0.83l0.01,-1.99l0.94,-1.58l1.48,-0.71l0.19,-0.54l-0.69,-1.39l2.06,-0.12l0.69,-1.09l-0.03,-1.23l1.12,-1.15l-0.18,-1.88l-0.5,-1.14l1.17,-1.09l5.42,-0.99l2.59,-0.89l1.6,1.26l0.97,2.53l3.5,1.06Z", "name": "Pakistan"}, "PH": {"path": "M737.01,393.71l0.39,2.98l-0.44,1.19l-0.55,-1.53l-0.67,-0.14l-1.17,1.28l0.65,2.1l-0.42,0.69l-2.48,-1.23l-0.58,-1.49l0.66,-1.03l-0.1,-0.53l-1.59,-1.19l-0.56,0.08l-0.65,0.87l-1.23,0.0l-1.58,0.97l0.83,-1.81l2.56,-1.42l0.65,0.84l0.45,0.13l1.9,-0.69l0.56,-1.12l1.5,-0.06l0.38,-0.43l-0.09,-1.2l1.21,0.72l0.36,2.03ZM733.59,386.41l0.05,0.76l0.08,0.27l-0.8,-0.42l-0.18,-0.72l0.85,0.12ZM734.08,385.93l-0.12,-1.13l-1.01,-1.29l1.36,0.03l0.53,0.73l0.51,2.06l-1.27,-0.4ZM733.76,387.52l0.39,0.99l-0.32,0.15l-0.07,-1.14ZM724.65,368.03l1.46,0.71l0.72,-0.31l-0.32,1.19l0.79,1.74l-0.57,1.88l-1.53,1.06l-0.39,2.27l0.56,2.06l1.63,0.57l1.16,-0.27l2.72,1.24l-0.19,1.1l0.77,0.85l-0.08,0.37l-1.4,-0.9l-0.88,-1.29l-0.66,0.0l-0.38,0.55l-1.6,-1.32l-2.15,0.36l-0.87,-0.4l0.07,-0.62l0.66,-0.56l-0.01,-0.62l-0.75,-0.6l-0.72,0.44l-0.73,-0.88l-0.39,-2.53l0.32,0.27l0.66,-0.28l0.26,-4.04l0.71,-2.06l1.14,0.0ZM731.03,388.72l-0.88,0.85l-1.19,1.95l-1.05,-1.2l0.93,-1.11l0.32,-1.48l0.52,-0.06l-0.27,1.16l0.22,0.45l0.49,-0.12l1.0,-1.32l-0.08,0.86ZM726.83,385.61l0.83,0.38l1.17,-0.0l-0.02,0.48l-2.0,1.41l0.02,-2.28ZM724.81,381.88l-0.39,1.29l-1.42,-1.98l1.2,0.05l0.6,0.64ZM716.54,391.7l1.12,-0.97l0.03,-0.03l-0.28,0.38l-0.87,0.63ZM719.21,388.91l0.04,-0.07l0.8,-1.54l0.16,0.76l-1.01,0.85Z", "name": "Philippines"}, "PL": {"path": "M468.45,271.45l-1.1,-1.82l-1.87,-0.39l-0.48,-1.25l-1.72,-0.44l-0.47,0.25l-0.21,0.56l-0.72,-0.43l0.12,-0.82l-0.32,-0.45l-1.74,-0.32l-1.05,-1.13l-0.96,-2.4l0.17,-1.46l-0.62,-2.19l-0.82,-1.37l0.61,-1.22l-0.51,-1.88l1.46,-1.07l6.88,-3.37l2.12,0.62l0.15,0.81l0.38,0.33l5.51,0.54l4.53,-0.06l1.06,0.38l0.5,1.09l0.14,1.93l0.66,1.51l-0.01,1.34l-1.3,0.73l-0.17,0.5l0.74,1.83l0.07,1.86l1.22,3.37l-0.19,0.78l-1.23,0.53l-2.27,3.23l0.24,1.15l-1.99,-1.23l-2.01,0.46l-1.38,-0.32l-1.2,0.67l-1.05,-1.13l-1.17,0.27Z", "name": "Poland"}, "ZM": {"path": "M481.47,443.27l0.39,0.31l2.52,0.15l0.99,1.18l2.01,0.36l1.4,-0.64l0.69,1.18l1.78,0.33l1.84,2.38l2.24,0.19l0.4,-0.43l-0.21,-2.77l-0.62,-0.3l-0.48,0.33l-1.98,-1.18l0.72,-5.32l-0.51,-1.19l0.58,-1.31l3.68,-0.62l0.26,0.64l1.21,0.63l0.9,-0.22l2.16,0.67l1.33,0.71l1.07,1.02l0.56,1.89l-0.88,2.72l0.43,2.1l-0.73,0.88l-0.76,2.39l0.6,0.68l-6.61,1.85l-0.29,0.44l0.19,1.47l-1.69,0.36l-1.43,1.04l-0.38,0.89l-0.87,0.26l-3.48,3.75l-4.15,-0.54l-1.52,-1.01l-1.77,-0.14l-1.82,0.53l-3.04,-3.46l0.11,-7.69l4.82,0.03l0.39,-0.49l-0.18,-0.76l0.33,-0.84l-0.4,-1.37l0.24,-1.06Z", "name": "Zambia"}, "EH": {"path": "M384.42,359.7l0.26,-0.83l1.06,-1.32l0.8,-3.63l3.38,-2.88l0.69,-1.87l0.06,5.03l-1.98,0.21l-0.94,1.63l0.39,3.66l-3.71,-0.01ZM392.0,347.13l0.72,-1.91l1.77,-0.25l2.09,0.35l0.96,-0.65l1.27,-0.07l-0.0,2.65l-6.8,-0.12Z", "name": "W. Sahara"}, "EE": {"path": "M485.7,228.2l2.62,0.79l2.44,-0.11l0.18,0.41l-1.67,2.62l0.66,4.56l-0.85,1.18l-1.72,-0.01l-3.21,-2.27l-1.85,0.58l0.22,-2.14l-0.62,-0.38l-0.64,0.42l-1.26,-1.35l-0.18,-2.36l2.87,-1.24l3.02,-0.69Z", "name": "Estonia"}, "EG": {"path": "M492.06,333.38l1.47,0.44l2.95,-1.74l2.03,-0.22l1.52,0.32l0.6,1.27l0.7,0.04l0.41,-0.68l1.8,0.61l1.95,0.17l1.04,-0.54l1.43,4.34l-2.03,4.78l-1.66,-1.85l-1.76,-4.05l-0.65,-0.12l-0.35,0.67l1.04,3.03l3.44,7.26l1.77,3.16l2.04,2.76l-0.37,0.54l0.22,2.06l2.73,2.28l-28.43,0.0l0.0,-19.72l-0.73,-2.31l0.6,-1.66l-0.33,-1.32l0.69,-1.07l3.05,-0.04l4.82,1.62Z", "name": "Egypt"}, "ZA": {"path": "M467.15,505.21l-0.13,-2.11l-0.69,-1.7l0.71,-0.7l-0.12,-2.46l-4.57,-8.67l0.78,-0.92l0.59,0.47l0.69,1.37l2.83,0.75l1.5,-0.27l2.24,-1.46l0.18,-9.94l1.35,2.39l-0.21,1.57l0.61,1.24l0.41,0.2l1.79,-0.29l2.61,-2.16l0.69,-1.37l0.95,-0.5l2.19,1.08l2.04,0.14l1.78,-0.67l0.85,-2.2l1.38,-0.34l1.59,-2.85l2.15,-1.95l3.41,-1.92l1.99,0.46l1.02,-0.28l0.99,0.2l1.75,5.47l-0.37,3.39l-0.82,-0.24l-1.0,0.47l-0.87,1.75l-0.04,1.2l1.98,1.91l1.47,-0.3l0.7,-1.24l1.09,0.01l-0.77,3.89l-0.58,1.15l-2.2,1.88l-3.17,5.02l-2.8,3.01l-3.57,3.07l-2.53,1.12l-1.22,0.15l-0.51,0.75l-1.17,-0.34l-1.4,0.54l-2.58,-0.55l-1.62,0.35l-1.19,-0.11l-2.54,1.18l-2.1,0.47l-1.6,1.15l-0.84,0.05l-0.93,-0.95l-0.93,-0.16l-0.97,-1.21l-0.25,0.05ZM491.46,495.56l0.62,-0.98l1.48,-0.62l1.18,-2.31l-0.07,-0.48l-1.99,-1.77l-1.68,0.59l-1.42,1.19l-1.34,1.82l0.02,0.49l1.88,2.23l1.32,-0.17Z", "name": "South Africa"}, "EC": {"path": "M231.86,415.43l0.29,1.59l-0.69,1.45l-2.61,2.51l-3.13,1.11l-1.53,2.18l-0.49,1.68l-1.0,0.73l-1.02,-1.11l-1.78,-0.16l0.67,-1.15l-0.24,-0.86l1.25,-2.13l-0.54,-1.09l-0.67,-0.08l-0.72,0.87l-0.87,-0.64l0.35,-0.69l-0.36,-1.96l0.81,-0.51l0.45,-1.51l0.92,-1.57l-0.07,-0.97l2.65,-1.33l2.75,1.35l0.77,1.05l2.12,0.35l0.76,-0.32l1.96,1.21Z", "name": "Ecuador"}, "IT": {"path": "M451.58,282.14l3.5,1.08l-0.22,1.43l0.34,1.0l-1.55,-0.28l-2.22,1.64l0.13,1.69l-0.27,1.22l0.82,1.78l2.39,1.84l1.3,2.87l2.79,2.73l2.05,0.1l0.25,0.31l-0.43,0.41l0.09,0.64l4.05,2.19l2.2,2.0l-0.17,0.42l-1.16,-1.17l-2.18,-0.54l-0.45,0.21l-1.05,2.12l0.14,0.51l1.59,1.06l-0.2,1.15l-1.06,0.36l-1.25,2.57l-0.36,0.08l0.0,-0.41l1.01,-2.65l-1.73,-3.5l-1.12,-0.56l-0.67,-1.29l-1.72,-0.75l-1.01,-1.25l-2.01,-0.35l-4.11,-3.59l-1.63,-1.87l-1.03,-3.6l-3.56,-1.55l-1.3,0.58l-1.68,1.6l0.17,-0.9l-0.27,-0.45l-1.14,-0.37l-0.55,-2.31l0.78,-1.37l-0.66,-1.44l0.81,0.44l1.41,-0.27l1.08,-0.94l0.53,0.39l1.19,-0.11l0.75,-1.38l1.51,0.37l1.39,-0.65l0.34,-1.31l1.06,0.36l0.5,-0.22l0.21,-0.51l1.95,-0.5l0.42,0.96ZM459.21,311.54l-0.67,1.87l0.33,1.12l-0.32,0.99l-1.48,-0.91l-4.52,-1.83l0.21,-0.97l2.67,0.25l3.8,-0.53ZM443.92,301.94l1.19,1.86l-0.3,3.74l-1.07,-0.01l-0.75,0.79l-0.53,-0.48l-0.1,-3.76l-0.41,-1.41l1.07,0.0l0.9,-0.74Z", "name": "Italy"}, "VN": {"path": "M690.58,359.66l-2.72,1.89l-2.09,2.52l-0.63,1.98l4.31,6.55l2.32,1.68l1.44,1.97l1.11,4.65l-0.32,4.28l-1.93,1.55l-2.84,1.62l-2.11,2.17l-2.73,2.07l-0.59,-1.06l0.63,-1.54l-0.12,-0.47l-1.34,-1.05l1.51,-0.72l2.55,-0.18l0.3,-0.63l-0.82,-1.16l4.0,-2.09l0.31,-3.08l-0.57,-1.79l0.42,-2.69l-0.73,-1.99l-1.86,-1.79l-3.63,-5.38l-2.73,-1.5l0.37,-0.5l1.5,-0.65l0.21,-0.52l-0.97,-2.33l-0.37,-0.25l-2.83,-0.02l-2.25,-4.02l0.84,-0.42l4.39,-0.3l2.06,-1.35l1.15,0.91l1.88,0.41l-0.18,1.55l1.36,1.19l1.69,0.47Z", "name": "Vietnam"}, "SB": {"path": "M826.68,441.55l-0.6,0.09l-0.2,-0.34l0.37,0.15l0.44,0.09ZM824.18,437.32l-0.26,-0.31l-0.31,-0.91l0.03,0.0l0.54,1.22ZM823.04,439.28l-1.66,-0.22l-0.2,-0.53l1.16,0.28l0.7,0.47ZM819.26,434.58l1.17,0.66l0.03,0.04l-0.82,-0.45l-0.38,-0.25Z", "name": "Solomon Is."}, "ET": {"path": "M516.04,377.54l1.1,0.85l1.63,-0.46l0.68,0.48l1.63,0.03l2.01,0.96l1.73,1.68l1.64,2.1l-1.52,2.06l0.16,1.73l0.39,0.38l2.05,0.01l-0.36,1.03l2.86,3.6l8.32,3.09l1.32,0.02l-6.33,6.76l-3.1,0.11l-2.36,1.77l-1.47,0.04l-0.86,0.79l-1.38,-0.0l-1.32,-0.81l-2.29,1.05l-0.76,0.98l-3.29,-0.41l-3.07,-2.07l-1.8,-0.07l-0.62,-0.6l0.0,-1.24l-0.28,-0.38l-1.15,-0.37l-1.4,-2.6l-1.19,-0.69l-0.47,-1.01l-1.27,-1.23l-1.16,-0.22l0.43,-0.73l1.45,-0.28l0.41,-0.95l-0.03,-2.22l0.68,-2.45l1.05,-0.63l1.43,-3.08l1.57,-1.38l1.02,-2.53l0.35,-1.9l2.52,0.47l0.44,-0.24l0.58,-1.44Z", "name": "Ethiopia"}, "SO": {"path": "M525.13,418.38l-1.13,-1.57l-0.03,-8.86l2.66,-3.38l1.67,-0.13l2.13,-1.69l3.41,-0.23l7.08,-7.57l2.91,-3.71l0.08,-4.85l2.98,-0.67l1.24,-0.87l0.45,-0.0l-0.2,3.03l-1.21,3.64l-2.73,6.0l-2.13,3.66l-5.03,6.17l-8.56,6.4l-2.78,3.08l-0.8,1.56Z", "name": "Somalia"}, "ZW": {"path": "M498.91,471.53l-1.1,-0.22l-0.92,0.29l-2.09,-0.46l-1.49,-1.14l-1.89,-0.44l-0.62,-1.44l-0.01,-0.86l-0.3,-0.38l-0.97,-0.26l-2.72,-2.8l-1.93,-3.41l3.83,0.46l3.74,-3.89l1.08,-0.44l0.26,-0.78l1.25,-0.91l1.41,-0.26l0.5,0.9l1.99,-0.05l1.72,1.19l1.11,0.18l1.05,0.68l0.01,3.05l-0.59,3.84l0.38,0.87l-0.23,1.26l-0.39,0.36l-0.64,1.86l-2.43,2.82Z", "name": "Zimbabwe"}, "ES": {"path": "M415.99,294.24l1.08,1.32l4.61,1.55l1.08,-0.64l2.58,1.41l2.72,-0.33l0.09,1.34l-2.15,2.02l-3.1,0.68l-0.31,0.31l-0.2,1.01l-1.54,1.87l-0.97,2.65l0.86,1.9l-1.34,1.4l-0.49,1.86l-1.88,0.7l-1.66,2.25l-5.35,-0.01l-1.81,1.17l-0.88,1.06l-0.86,-0.18l-0.79,-0.9l-0.68,-1.73l-2.37,-0.68l-0.12,-0.6l1.21,-2.0l-0.78,-1.19l0.62,-1.89l-0.8,-1.8l0.89,-0.51l0.09,-1.41l0.42,-0.63l0.03,-2.39l1.01,-0.78l0.12,-0.47l-1.04,-1.93l-1.46,-0.12l-0.63,0.42l-1.04,0.0l-0.53,-1.39l-0.55,-0.22l-1.31,0.73l0.07,-1.41l-0.87,-1.4l3.08,-2.16l2.98,0.6l3.32,-0.02l2.62,0.58l6.01,-0.06Z", "name": "Spain"}, "ER": {"path": "M520.38,375.96l3.42,2.46l3.5,3.81l0.85,0.55l-0.95,-0.01l-3.51,-3.92l-2.33,-1.16l-1.73,-0.07l-0.91,-0.51l-1.25,0.52l-1.34,-1.03l-0.62,0.17l-0.66,1.63l-2.34,-0.43l-0.18,-0.68l1.29,-5.37l0.62,-0.63l1.95,-0.54l0.87,-1.03l1.17,2.45l0.68,2.36l1.49,1.45Z", "name": "Eritrea"}, "ME": {"path": "M468.91,298.06l-1.24,-1.13l0.5,-2.11l0.88,-0.81l2.29,1.73l-0.52,0.71l-0.77,-0.3l-1.14,1.91Z", "name": "Montenegro"}, "MD": {"path": "M491.9,285.98l-0.28,-1.04l0.25,-1.54l-0.15,-1.8l-3.32,-5.2l1.4,-0.31l1.71,1.08l1.07,0.18l0.88,0.78l0.03,1.44l0.78,0.52l0.33,1.38l0.81,0.94l0.0,0.67l-1.14,-0.08l-0.7,-0.47l-0.52,0.29l-0.06,0.94l-1.08,2.21Z", "name": "Moldova"}, "MG": {"path": "M545.91,449.15l0.4,3.06l0.63,1.22l-0.21,1.04l-0.56,-0.81l-0.69,-0.01l-0.47,0.77l0.41,2.15l-0.18,0.89l-0.72,0.79l-0.15,2.18l-5.77,18.57l-3.92,1.7l-3.12,-1.54l-0.6,-1.26l-0.19,-2.48l-0.86,-2.12l-0.21,-1.83l0.39,-1.67l1.21,-0.76l0.01,-0.79l1.19,-2.08l0.23,-1.69l-1.06,-3.05l-0.19,-2.26l0.81,-1.36l0.32,-1.49l4.63,-1.23l3.44,-3.04l0.85,-1.42l-0.09,-0.71l0.78,-0.04l1.38,-1.79l0.13,-1.65l0.45,-0.62l1.16,1.7l0.59,1.62Z", "name": "Madagascar"}, "MA": {"path": "M378.77,359.44l0.06,-0.63l0.93,-0.75l0.82,-1.41l-0.09,-1.07l0.79,-1.77l1.31,-1.64l0.95,-0.61l0.66,-1.61l0.09,-1.52l0.81,-1.54l1.72,-1.11l1.55,-2.81l1.16,-1.0l2.44,-0.41l1.94,-1.91l1.31,-0.82l2.09,-2.4l-0.51,-3.84l1.25,-3.95l1.5,-1.88l4.46,-2.74l2.37,-4.82l1.43,0.01l1.7,1.31l2.31,-0.21l3.46,0.7l0.81,1.67l0.16,1.84l0.86,3.17l0.57,0.63l-0.27,0.69l-3.05,0.46l-1.26,1.11l-1.33,0.24l-0.33,0.37l-0.09,1.91l-2.69,1.06l-1.07,1.5l-1.89,0.72l-2.58,0.47l-4.04,2.12l-0.53,4.86l-1.16,0.07l-0.92,0.64l-1.96,-0.36l-2.42,0.56l-0.74,1.99l-0.86,0.41l-1.14,3.39l-3.53,3.11l-0.81,3.66l-0.96,1.14l-0.29,0.84l-4.94,0.19Z", "name": "Morocco"}, "UZ": {"path": "M598.64,298.24l-1.64,1.79l0.06,0.61l1.85,1.26l1.99,-0.71l2.27,1.34l-2.58,1.91l-2.57,-0.24l-0.2,-0.5l0.47,-1.39l-0.47,-0.52l-3.35,0.77l-2.1,3.89l-1.86,-0.14l-0.39,0.23l-0.65,1.43l0.21,0.53l1.65,0.69l0.47,2.05l-1.21,2.74l-1.54,-0.54l-1.11,-0.04l0.05,-1.53l-0.25,-0.38l-3.3,-1.35l-2.56,-1.53l-4.4,-3.69l-1.33,-3.48l-1.1,-0.68l-2.57,0.15l-0.7,-0.5l-0.46,-2.81l-3.37,-1.79l-0.46,0.06l-2.07,1.94l-2.09,1.14l-0.2,0.45l0.29,1.2l-1.92,0.03l-0.09,-11.97l5.98,-1.95l6.18,4.04l2.35,3.08l7.41,-0.61l2.72,2.28l-0.18,3.21l0.39,0.42l0.89,0.02l0.45,2.42l0.38,0.33l2.93,0.1l0.96,1.58l1.29,-0.25l1.05,-2.28l3.18,-2.25l1.24,-0.54Z", "name": "Uzbekistan"}, "MM": {"path": "M673.9,359.64l-1.97,1.62l-0.57,0.98l-1.4,0.62l-1.36,1.08l-1.99,0.36l-1.08,2.72l-0.91,0.41l-0.19,0.55l1.21,2.31l2.52,3.49l-0.79,1.95l-0.74,0.41l-0.17,0.52l0.65,1.39l1.61,1.98l0.25,2.61l0.9,2.15l-1.92,3.6l0.68,-2.27l-0.81,-1.75l0.19,-2.68l-1.05,-1.54l-1.24,-6.25l-1.12,-2.29l-0.61,-0.13l-4.33,3.06l-2.39,-0.66l0.77,-2.89l-0.52,-2.65l-1.92,-3.02l0.25,-0.78l-0.29,-0.51l-1.33,-0.31l-1.61,-1.97l-0.1,-1.35l0.82,-0.23l0.04,-1.7l1.03,-0.53l0.21,-0.44l-0.23,-0.99l0.54,-0.98l0.08,-2.3l1.45,0.46l0.48,-0.2l1.12,-2.26l0.16,-1.4l1.34,-2.25l-0.01,-1.58l2.89,-1.73l1.62,0.46l0.51,-0.43l-0.17,-1.48l0.65,-0.39l0.07,-1.08l0.77,-0.11l0.71,1.41l1.06,0.72l-0.03,4.05l-2.38,2.46l-0.3,3.26l0.47,0.43l2.27,-0.39l0.51,2.15l1.47,0.69l-0.61,1.87l0.19,0.47l2.97,1.52l1.64,-0.56l0.02,0.35Z", "name": "Myanmar"}, "ML": {"path": "M392.61,383.9l-0.19,-2.39l-0.99,-0.88l-0.44,-1.31l-0.09,-1.3l0.81,-0.59l0.35,-1.26l2.37,0.66l1.31,-0.48l0.86,0.15l0.66,-0.57l9.83,-0.04l0.38,-0.28l0.56,-1.82l-0.44,-0.66l-2.35,-22.51l3.26,-0.04l16.7,11.72l0.74,1.34l2.5,1.11l0.02,1.42l0.44,0.39l2.34,-0.22l0.01,5.49l-1.28,1.64l-0.26,1.51l-5.31,0.58l-1.08,0.93l-2.9,0.1l-0.87,-0.48l-1.38,0.37l-2.4,1.1l-0.6,0.88l-1.86,1.1l-0.43,0.71l-0.79,0.4l-1.44,-0.21l-0.81,0.84l-0.34,1.65l-1.91,2.04l-0.06,1.04l-0.67,1.23l0.13,1.17l-0.97,0.39l-0.23,-0.65l-0.52,-0.24l-1.35,0.4l-0.34,0.55l-2.69,-0.29l-0.37,-0.36l-0.02,-0.91l-0.65,-0.35l0.45,-0.65l-0.03,-0.52l-2.12,-2.46l-0.76,-0.01l-2.0,1.17l-0.78,-0.15l-0.8,-0.67l-1.21,0.23Z", "name": "Mali"}, "MN": {"path": "M676.61,267.85l3.78,1.95l5.69,-1.19l2.35,0.48l2.34,1.79l1.81,2.09l2.28,-0.04l3.11,0.62l2.49,-0.96l3.42,-0.7l3.51,-2.62l1.21,0.34l1.56,1.35l2.31,-0.25l-2.72,6.05l0.64,1.85l0.5,0.22l1.31,-0.44l2.36,0.55l2.04,-1.29l1.73,1.03l2.1,2.39l-0.15,0.72l-1.72,-0.34l-3.79,0.54l-1.88,1.14l-1.76,2.29l-3.71,1.35l-2.44,1.82l-3.81,-0.99l-0.44,0.19l-1.31,2.27l1.07,2.53l-1.56,1.04l-1.74,1.78l-2.78,1.14l-3.78,0.14l-4.05,1.18l-2.75,1.69l-1.16,-0.94l-2.93,0.0l-3.61,-2.0l-2.59,-0.55l-3.41,0.46l-5.11,-0.75l-2.62,0.07l-1.31,-1.82l-1.4,-3.4l-1.47,-0.37l-3.14,-2.22l-6.15,-1.06l-0.73,-1.26l0.89,-4.37l-1.73,-2.97l-3.7,-1.54l-1.96,-1.86l-0.53,-2.16l2.39,-0.63l4.75,-3.33l3.59,-1.75l2.18,1.16l2.44,0.05l1.83,1.83l2.46,0.14l3.58,0.97l0.4,-0.12l2.43,-2.72l0.07,-0.43l-0.93,-2.14l2.28,-3.66l2.59,1.52l4.94,1.41l0.44,2.74Z", "name": "Mongolia"}, "MK": {"path": "M472.81,299.6l0.49,-0.78l3.56,-0.8l1.01,0.87l0.14,1.71l-0.66,0.59l-1.14,-0.05l-1.14,0.75l-1.37,0.24l-0.79,-0.61l-0.3,-1.19l0.2,-0.73Z", "name": "Macedonia"}, "MW": {"path": "M505.5,439.25l0.85,1.96l0.15,2.88l-0.69,1.66l0.72,1.81l0.06,1.29l0.49,0.64l0.07,1.07l0.4,0.55l0.8,-0.23l0.55,0.62l0.7,-0.21l0.34,0.6l0.19,2.98l-1.04,0.63l-0.53,1.27l-1.11,-1.1l-0.16,-1.59l0.51,-1.33l-0.32,-1.32l-0.99,-0.65l-0.82,0.12l-2.36,-1.66l0.63,-1.99l0.82,-1.18l-0.46,-2.03l0.9,-2.88l-0.95,-2.53l0.97,0.19l0.29,0.41Z", "name": "Malawi"}, "MR": {"path": "M407.4,349.79l-2.62,0.03l-0.39,0.44l2.42,23.13l0.37,0.43l-0.39,1.27l-9.75,0.04l-0.56,0.54l-0.91,-0.11l-1.27,0.46l-1.61,-0.66l-0.98,0.03l-0.36,0.29l-0.38,1.37l-0.42,0.24l-2.93,-3.44l-2.96,-1.55l-1.62,-0.03l-1.27,0.55l-1.12,-0.2l-0.65,0.4l-0.08,-0.51l0.68,-1.31l0.31,-2.47l-0.57,-3.99l0.23,-1.25l-0.68,-1.53l-1.16,-1.05l0.25,-0.42l9.58,0.02l0.4,-0.45l-0.46,-3.79l0.47,-1.08l2.11,-0.22l0.36,-0.4l-0.08,-6.64l7.81,0.14l0.41,-0.4l0.01,-3.47l7.8,5.59Z", "name": "Mauritania"}, "UG": {"path": "M498.55,406.22l0.7,-0.46l1.65,0.5l1.96,-0.57l1.7,0.01l1.45,-0.98l0.91,1.33l1.33,3.95l-2.57,4.03l-1.46,-0.4l-2.54,0.91l-1.37,1.61l-0.01,0.81l-2.42,-0.01l-2.26,1.01l-0.17,-1.59l0.58,-1.04l0.14,-1.94l1.37,-2.28l1.78,-1.58l-0.17,-0.65l-0.72,-0.24l0.13,-2.43Z", "name": "Uganda"}, "MY": {"path": "M717.48,403.36l-1.39,0.65l-2.12,-0.41l-2.88,-0.0l-0.38,0.28l-0.84,2.75l-0.99,0.96l-1.21,3.29l-1.73,0.45l-2.45,-0.68l-1.39,0.31l-1.33,1.15l-1.59,-0.14l-1.41,0.44l-1.44,-1.19l-0.18,-0.73l1.34,0.53l1.93,-0.47l0.75,-2.23l4.02,-1.03l2.75,-3.21l0.82,0.94l0.64,-0.05l0.4,-0.65l0.96,0.06l0.42,-0.36l0.24,-2.69l1.81,-1.65l1.21,-1.87l0.63,-0.01l1.07,1.06l0.34,1.28l3.44,1.35l-0.06,0.35l-1.37,0.1l-0.35,0.54l0.32,0.88ZM673.68,399.48l0.17,1.1l0.47,0.33l1.65,-0.3l0.87,-0.94l1.61,1.52l0.98,1.57l-0.12,2.81l0.41,2.29l0.95,0.9l0.88,2.44l-1.27,0.12l-5.1,-3.68l-0.34,-1.29l-1.37,-1.59l-0.33,-1.97l-0.88,-1.4l0.25,-1.68l-0.46,-1.06l1.63,0.84Z", "name": "Malaysia"}, "MX": {"path": "M133.1,328.46l0.22,0.49l9.64,3.54l6.96,-0.02l0.4,-0.4l0.0,-0.81l3.76,0.0l3.55,3.11l1.4,2.99l1.51,1.09l2.08,0.86l0.48,-0.14l1.46,-2.1l1.72,-0.05l1.59,1.03l2.06,3.53l1.47,1.63l1.26,3.28l2.18,1.06l2.27,0.6l-1.19,3.88l-0.42,5.19l1.79,5.01l1.62,1.94l0.61,1.55l1.2,1.45l2.55,0.67l1.38,1.13l7.54,-1.93l1.86,-1.32l1.14,-4.4l4.1,-1.24l3.56,-0.11l0.32,0.31l-0.06,0.97l-1.26,1.49l-0.67,1.74l0.38,0.71l-0.73,2.32l-0.49,-0.3l-1.0,0.08l-1.0,1.41l-0.47,-0.11l-0.53,0.47l-4.26,-0.02l-0.4,0.4l-0.0,1.08l-1.1,0.26l0.1,0.44l1.82,1.46l0.56,0.94l-3.19,0.21l-1.21,2.12l0.24,0.73l-0.2,0.45l-2.24,-2.21l-1.45,-0.94l-2.22,-0.7l-1.52,0.23l-3.06,1.18l-10.55,-3.9l-2.86,-2.0l-3.78,-0.94l-1.08,-1.21l-2.62,-1.46l-1.18,-1.57l-0.39,-0.85l0.66,-0.64l-0.19,-0.55l0.53,-0.77l0.01,-0.93l-2.0,-3.91l-2.21,-2.71l-2.53,-2.16l-1.19,-1.68l-2.2,-1.21l-0.31,-0.45l0.34,-1.56l-0.21,-0.44l-1.23,-0.63l-1.36,-1.26l-0.59,-1.87l-1.53,-0.48l-2.44,-2.68l-0.15,-0.94l-1.33,-2.14l-0.84,-2.11l-0.15,-1.39l-1.81,-1.16l-0.98,0.05l-1.31,-0.74l-0.58,0.22l-0.4,1.19l0.71,3.95l3.51,4.09l0.28,0.83l0.53,0.26l0.41,1.51l1.33,1.8l1.58,1.46l0.8,2.49l1.43,2.51l0.13,1.37l0.37,0.36l1.03,0.08l1.68,2.38l-0.84,0.79l-0.66,-1.55l-1.68,-1.59l-2.91,-1.94l0.06,-1.89l-0.53,-1.73l-2.91,-2.11l-0.56,0.08l-1.95,-1.14l-0.92,-1.02l0.72,-0.08l0.93,-1.06l0.08,-1.82l-1.93,-2.04l-1.46,-0.81l-3.76,-8.06l4.87,-0.45Z", "name": "Mexico"}, "IL": {"path": "M507.77,331.27l0.39,-0.81l0.2,0.43l-0.34,1.09l0.52,0.43l0.68,-0.23l-0.86,3.84l-1.16,-3.52l0.6,-0.8l-0.03,-0.44ZM508.72,328.43l0.38,-1.13l0.64,0.0l0.52,-0.54l0.02,0.67l-0.52,1.01l-0.55,-0.25l-0.5,0.24Z", "name": "Israel"}, "FR": {"path": "M444.48,298.15l-0.65,2.02l-0.56,-0.34l-0.51,-1.98l0.42,-1.04l0.99,-0.8l0.31,2.13ZM429.62,268.54l1.78,1.88l1.48,-0.14l2.08,1.68l1.36,0.33l1.23,0.98l3.1,0.6l-1.08,2.26l-0.3,2.52l-0.41,0.38l-0.92,-0.28l-0.51,0.42l0.07,0.77l-1.82,2.19l-0.04,1.65l0.57,0.37l0.85,-0.41l0.62,1.14l-0.04,1.13l0.61,1.11l-0.78,1.22l0.65,2.72l1.29,0.62l-0.19,1.03l-2.02,1.73l-4.75,-0.9l-3.84,1.13l-0.52,2.09l-2.47,0.37l-2.7,-1.47l-1.18,0.64l-4.28,-1.44l-0.76,-1.02l1.21,-2.03l0.41,-7.31l-2.58,-3.82l-1.89,-1.93l-3.74,-1.44l-0.2,-2.16l2.82,-0.72l4.11,0.96l0.48,-0.46l-0.62,-3.38l1.98,1.12l5.83,-3.02l0.91,-3.28l1.57,-0.58l0.25,0.97l1.34,0.35l1.05,1.43ZM289.01,408.29l-0.81,0.8l-0.78,0.12l-0.5,-0.66l-0.56,-0.1l-0.91,0.6l-0.46,-0.22l1.09,-2.96l-0.96,-1.77l-0.17,-1.49l1.07,-1.77l2.32,0.75l2.51,2.01l0.3,0.74l-2.14,3.96Z", "name": "France"}, "XS": {"path": "M531.15,388.78l1.52,0.12l5.13,-0.96l5.3,-1.49l-0.01,4.43l-2.67,3.4l-1.85,0.01l-8.04,-2.95l-2.55,-3.19l1.12,-1.73l2.04,2.35Z", "name": "Somaliland"}, "FI": {"path": "M492.16,172.43l-0.28,5.17l3.67,4.26l-2.21,4.98l2.86,6.98l-1.64,5.01l2.21,4.51l-0.98,3.55l3.63,4.02l-0.84,2.48l-7.53,9.52l-4.5,0.42l-4.38,1.84l-3.74,0.97l-1.3,-2.46l-2.36,-1.68l0.53,-4.89l-1.2,-4.86l1.14,-3.04l2.23,-3.46l5.68,-6.22l1.8,-1.58l-0.4,-2.8l-3.4,-2.81l-0.79,-2.25l-0.16,-10.13l-7.02,-7.77l0.96,-1.19l2.47,3.3l3.5,-0.17l2.57,1.6l0.53,-0.09l2.46,-3.23l1.19,-5.07l3.49,-2.23l2.82,2.55l-1.01,4.77Z", "name": "Finland"}, "FJ": {"path": "M869.95,457.1l-1.21,0.42l-0.08,-0.24l2.98,-1.23l-0.15,0.44l-1.54,0.62ZM867.58,459.4l0.43,0.38l-0.27,0.91l-1.24,0.29l-1.04,-0.25l-0.14,-0.69l0.64,-0.59l0.92,0.26l0.7,-0.31Z", "name": "Fiji"}, "FK": {"path": "M274.37,564.69l1.48,1.33l-0.53,1.0l-2.96,1.07l-0.95,-1.2l-0.57,-0.05l-1.79,1.54l-0.79,-1.16l2.52,-2.03l1.9,0.9l0.46,-0.09l1.23,-1.32Z", "name": "Falkland Is."}, "NI": {"path": "M202.32,382.47l0.82,-0.18l1.03,-1.02l-0.04,-0.89l0.68,-0.0l0.63,-0.54l0.97,0.23l1.53,-1.28l0.58,-1.0l1.17,0.35l2.41,-0.95l0.13,1.34l-0.81,1.96l0.1,2.77l-0.36,0.38l-0.11,1.76l-0.47,0.81l0.18,1.15l-1.73,-0.86l-0.71,0.27l-1.47,-0.6l-0.52,0.16l-4.02,-3.85Z", "name": "Nicaragua"}, "NL": {"path": "M430.16,264.22l0.76,-0.72l2.14,-5.88l3.19,-1.63l1.7,0.1l0.35,1.07l-0.6,3.64l-0.51,1.24l-1.24,0.0l-0.4,0.44l0.34,3.35l-2.18,-2.14l-0.43,-0.11l-2.22,0.8l-0.89,-0.15Z", "name": "Netherlands"}, "NO": {"path": "M491.42,157.32l7.17,5.11l-2.71,1.67l-0.13,0.55l2.55,4.24l-3.9,2.61l-1.31,0.42l0.79,-4.7l-3.21,-2.91l-0.48,-0.04l-4.06,2.73l-1.21,5.15l-2.11,2.72l-2.64,-1.54l-3.04,0.32l-2.65,-3.53l-0.63,-0.01l-1.41,1.75l-1.41,0.26l-0.33,0.36l-0.33,4.08l-4.27,-0.99l-0.48,0.32l-0.6,3.44l-2.07,-0.02l-0.38,0.27l-4.15,11.7l-3.88,8.48l0.84,2.18l-0.71,1.86l-2.2,-0.09l-0.4,0.28l-1.64,5.41l0.15,7.19l1.58,2.74l-0.8,5.79l-2.04,3.34l-0.83,2.09l-1.27,-2.26l-0.65,-0.07l-4.87,5.52l-3.05,1.02l-3.16,-2.22l-0.86,-5.06l-0.78,-11.7l2.19,-3.29l6.55,-4.59l5.02,-5.96l4.64,-8.4l6.0,-12.26l11.0,-13.83l5.32,-3.11l3.99,0.38l0.38,-0.19l3.69,-6.04l4.48,0.3l4.3,-1.47ZM484.42,59.58l4.68,4.94l-3.51,7.19l-6.97,1.55l-7.03,-2.18l-0.42,-3.6l-0.37,-0.35l-3.35,-0.23l-2.51,-6.12l7.16,-3.9l3.42,3.43l0.63,-0.09l2.33,-4.19l5.93,3.56ZM482.22,93.35l-4.99,4.27l-3.84,-2.35l1.56,-3.06l-1.38,-3.53l4.4,-2.11l0.89,4.13l3.36,2.65ZM466.32,69.71l8.02,9.81l-6.13,5.05l-1.37,8.88l-2.22,2.36l-1.15,9.08l-2.49,0.35l-5.08,-6.44l2.14,-3.9l-0.08,-0.49l-3.69,-3.4l-4.82,-10.44l-1.89,-10.23l6.16,-4.58l1.22,4.4l0.41,0.29l3.57,-0.19l0.37,-0.32l0.9,-4.57l3.14,-0.43l3.02,4.76Z", "name": "Norway"}, "NA": {"path": "M474.4,460.84l-1.11,0.05l-0.38,0.4l-0.07,9.11l-2.09,0.08l-0.38,0.4l-0.0,18.09l-1.98,1.29l-1.16,0.18l-2.43,-0.69l-0.48,-1.18l-0.99,-0.78l-0.55,0.05l-0.9,1.05l-1.52,-1.75l-0.94,-1.97l-1.99,-8.9l-0.06,-3.23l-0.33,-1.56l-2.3,-3.43l-1.91,-4.94l-1.96,-2.48l-0.12,-1.61l2.33,-0.8l1.43,0.07l1.82,1.15l10.23,-0.26l1.84,1.26l6.01,0.37ZM474.58,460.83l6.59,-1.65l1.91,0.41l-1.71,0.41l-1.31,0.85l-1.12,-0.95l-4.36,0.94Z", "name": "Namibia"}, "VU": {"path": "M839.03,452.86l0.23,1.16l-0.44,0.03l-0.2,-1.47l0.42,0.28Z", "name": "Vanuatu"}, "NC": {"path": "M838.79,471.67l-0.34,0.23l-2.9,-1.8l-3.27,-3.48l1.65,0.85l4.86,4.19Z", "name": "New Caledonia"}, "NE": {"path": "M454.74,355.83l1.33,1.41l0.49,0.07l1.26,-0.72l0.53,3.62l0.94,0.85l0.17,0.94l0.82,0.72l-0.45,0.98l-0.96,5.37l-0.13,3.28l-3.05,2.34l-1.22,3.61l1.02,1.25l-0.0,1.48l0.39,0.4l1.13,0.04l-0.1,0.49l-0.45,0.09l-0.35,0.68l-1.47,-2.44l-0.86,-0.29l-2.09,1.38l-1.73,-0.67l-1.45,-0.17l-0.85,0.35l-1.36,-0.07l-1.64,1.1l-1.06,0.05l-2.94,-1.29l-1.44,0.59l-1.01,-0.03l-0.97,-0.95l-2.7,-0.99l-2.69,0.31l-0.87,0.65l-0.46,1.62l-0.74,1.17l-0.12,1.55l-1.57,-1.1l-1.31,0.24l0.03,-0.82l-0.32,-0.41l-2.59,-0.52l-0.15,-1.17l-1.36,-1.62l-0.29,-1.01l0.13,-0.85l1.29,-0.08l1.08,-0.93l3.31,-0.22l2.22,-0.41l0.32,-0.34l0.2,-1.5l1.39,-1.91l-0.01,-5.78l3.37,-1.15l7.24,-5.24l8.41,-5.07l3.69,1.09Z", "name": "Niger"}, "NG": {"path": "M456.32,383.7l0.64,0.66l-0.28,1.06l-2.11,2.02l-2.03,5.2l-1.37,1.16l-1.15,3.19l-1.33,0.66l-1.46,-0.97l-1.21,0.16l-1.38,1.37l-0.91,0.24l-1.79,4.07l-2.33,0.81l-1.11,-0.07l-0.86,0.51l-1.71,-0.05l-1.19,-1.39l-0.89,-1.9l-1.77,-1.66l-3.95,-0.08l0.07,-5.23l0.42,-1.44l1.95,-2.32l-0.14,-0.91l0.43,-1.18l-0.53,-1.42l0.25,-2.95l0.72,-1.08l0.32,-1.35l0.46,-0.39l2.47,-0.28l2.34,0.89l1.15,1.03l1.28,0.04l1.22,-0.59l3.03,1.28l1.5,-0.14l1.36,-1.01l1.32,0.07l0.82,-0.35l3.45,0.81l1.82,-1.34l1.84,2.7l0.66,0.16Z", "name": "Nigeria"}, "NZ": {"path": "M857.8,512.11l1.85,3.38l0.45,0.2l0.3,-0.38l0.03,-1.36l0.38,0.29l0.56,2.51l2.02,1.03l1.81,0.29l1.59,-1.16l0.7,0.2l-1.16,4.01l-1.98,0.12l-0.73,1.27l0.21,1.25l-2.44,4.45l-1.47,1.02l-0.42,-0.65l-0.66,-0.3l1.25,-2.35l-0.81,-2.16l-2.64,-1.38l0.04,-0.7l1.82,-1.29l0.42,-2.46l-0.15,-2.29l-0.96,-2.0l-0.05,-0.75l-3.11,-3.94l-0.82,-1.69l1.57,1.56l1.76,0.72l0.66,2.55ZM853.83,527.42l0.57,1.38l0.61,0.17l1.4,-1.06l0.46,0.9l0.0,1.2l-2.48,3.93l-1.26,1.36l-0.06,0.47l0.6,1.08l-1.47,0.09l-2.32,1.54l-2.04,5.78l-3.02,2.49l-2.03,-0.07l-1.72,-1.2l-2.46,-0.23l-0.29,-0.92l1.25,-2.46l3.05,-3.36l1.62,-0.67l4.01,-3.18l1.56,-1.87l1.08,-2.44l1.01,-1.01l0.35,-1.73l1.23,-1.07l0.35,0.88Z", "name": "New Zealand"}, "NP": {"path": "M641.15,342.42l-0.0,3.36l-1.74,0.04l-4.8,-0.9l-1.59,-1.45l-3.36,-0.36l-7.66,-3.88l0.81,-2.23l2.33,-1.79l1.77,0.78l2.49,1.85l1.38,0.43l0.99,1.42l1.89,0.55l1.99,1.22l5.5,0.95Z", "name": "Nepal"}, "XK": {"path": "M472.78,298.18l-1.1,-1.47l0.98,-0.9l0.29,-0.94l2.0,1.84l-0.4,0.85l-1.77,0.62Z", "name": "Kosovo"}, "CI": {"path": "M407.4,389.11l0.86,0.42l0.56,0.9l1.13,0.54l1.19,-0.61l0.97,-0.08l1.42,0.54l0.6,3.25l-1.03,2.09l-0.65,2.85l1.06,2.33l-0.06,0.53l-2.54,-0.47l-1.66,0.03l-3.06,0.47l-4.11,1.61l0.32,-3.06l-1.18,-1.31l-1.32,-0.67l0.42,-0.86l-0.2,-1.4l0.5,-0.68l0.01,-1.59l0.84,-0.33l0.26,-0.5l-1.15,-3.02l0.12,-0.51l0.51,-0.25l0.66,0.31l1.93,0.02l0.67,-0.72l0.71,-0.14l0.25,0.7l0.57,0.22l1.4,-0.61Z", "name": "C\u00f4te d'Ivoire"}, "CH": {"path": "M444.61,279.47l-0.29,1.12l0.16,0.5l1.13,0.67l1.03,0.12l-0.12,0.88l-0.79,0.44l-1.7,-0.42l-0.47,0.25l-0.46,1.23l-0.72,0.07l-0.3,-0.39l-0.58,-0.06l-1.31,1.14l-0.93,0.13l-0.87,-0.62l-0.82,-1.51l-0.52,-0.17l-0.61,0.29l0.02,-0.85l1.73,-1.95l0.07,-0.65l0.96,0.08l0.57,-0.53l1.97,0.02l0.67,-0.71l2.16,0.92Z", "name": "Switzerland"}, "CO": {"path": "M242.07,384.75l-1.7,0.59l-0.59,1.19l-1.7,1.7l-0.37,1.94l-0.67,1.44l0.31,0.57l1.03,0.14l0.25,0.91l0.57,0.65l-0.04,2.35l1.64,1.42l3.16,-0.24l1.26,0.28l1.67,2.06l0.41,0.13l4.09,-0.39l0.45,0.22l-0.92,1.95l-0.2,1.8l0.52,1.83l0.75,1.05l-1.12,1.1l0.07,0.63l0.84,0.51l0.74,1.3l-0.39,-0.45l-0.59,-0.01l-0.71,0.74l-4.71,-0.05l-0.4,0.41l0.03,1.57l0.33,0.39l1.11,0.2l-1.68,0.4l-0.29,0.38l-0.01,1.82l1.16,1.14l0.34,1.25l-1.05,7.05l-1.04,-0.87l1.26,-1.99l-0.13,-0.56l-2.18,-1.23l-1.38,0.2l-1.14,-0.38l-1.27,0.61l-1.55,-0.26l-1.38,-2.46l-1.23,-0.75l-0.85,-1.2l-1.67,-1.19l-0.86,0.13l-2.11,-1.32l-1.01,0.31l-1.8,-0.29l-0.52,-0.91l-3.09,-1.68l0.77,-0.52l-0.1,-1.12l0.41,-0.64l1.34,-0.32l2.0,-2.88l-0.11,-0.57l-0.67,-0.43l0.39,-1.38l-0.52,-2.11l0.49,-0.83l-0.4,-2.13l-0.97,-1.36l0.17,-0.67l0.86,-0.08l0.47,-0.75l-0.46,-1.63l1.41,-0.07l1.8,-1.7l0.93,-0.24l0.3,-0.38l0.45,-2.78l1.22,-1.01l1.44,-0.04l0.45,-0.5l1.91,0.12l2.93,-1.85l1.15,-1.15l0.91,0.47l-0.26,0.45Z", "name": "Colombia"}, "CN": {"path": "M740.22,270.81l4.55,1.5l2.81,2.58l0.98,3.43l0.38,0.29l3.8,0.0l2.34,-1.51l3.31,-0.89l-1.01,2.59l-1.01,1.46l-0.85,3.95l-1.53,3.16l-2.73,-0.57l-2.43,1.3l-0.19,0.43l0.65,2.95l-0.32,3.68l-0.94,0.07l-0.37,0.4l0.01,0.58l-0.89,-1.11l-0.67,0.07l-0.92,1.77l-3.72,1.4l-0.25,0.46l0.28,1.25l-1.5,-0.08l-1.08,-0.96l-0.59,0.06l-1.68,2.31l-2.7,1.74l-2.03,2.08l-3.39,0.92l-1.93,1.54l-1.22,0.4l0.42,-0.81l-0.43,-1.03l1.81,-2.01l0.02,-0.51l-1.32,-1.73l-0.51,-0.11l-2.25,1.21l-2.83,2.28l-1.5,2.02l-2.27,0.14l-1.56,1.64l-0.04,0.47l1.32,2.16l2.01,0.63l0.3,1.47l1.98,0.92l0.42,-0.05l2.6,-2.09l1.99,1.1l1.5,0.12l0.24,0.97l-3.39,0.94l-1.12,1.61l-2.5,1.64l-1.29,2.15l0.13,0.55l2.57,1.6l0.97,2.9l3.17,4.94l-0.03,1.8l-1.36,0.69l-0.19,0.5l0.6,1.55l1.41,0.95l-0.9,4.05l-1.43,0.4l-3.85,6.72l-2.28,3.23l-6.78,4.72l-2.73,0.3l-1.45,1.07l-0.61,-0.62l-0.56,-0.01l-1.36,1.29l-3.39,1.31l-2.61,0.41l-1.1,2.86l-0.81,0.09l-0.5,-1.47l0.5,-0.88l-0.25,-0.59l-3.36,-0.86l-1.3,0.41l-2.3,-0.64l-0.95,-0.87l0.34,-1.33l-0.3,-0.49l-2.19,-0.48l-1.13,-0.96l-0.48,-0.03l-2.06,1.4l-4.28,0.28l-2.76,1.08l-0.28,0.43l0.32,2.61l-0.59,-0.03l-0.19,-1.39l-0.56,-0.34l-1.67,0.72l-2.47,-1.26l0.63,-1.94l-0.25,-0.5l-1.37,-0.46l-0.55,-2.3l-0.46,-0.3l-2.13,0.37l0.24,-2.6l2.39,-2.48l0.03,-4.49l-1.19,-0.94l-0.79,-1.57l-0.41,-0.22l-1.4,0.2l-2.0,-0.32l0.48,-1.12l-1.17,-1.78l-0.56,-0.11l-1.62,1.1l-2.25,-0.6l-2.89,1.82l-2.25,2.08l-1.74,0.31l-1.17,-0.74l-3.32,-0.68l-1.48,0.83l-1.04,1.32l-0.12,-1.23l-0.54,-0.34l-1.44,0.56l-5.54,-0.9l-1.98,-1.22l-1.89,-0.56l-0.99,-1.42l-1.34,-0.39l-2.55,-1.88l-2.01,-0.89l-1.21,0.59l-5.57,-3.64l-0.54,-2.5l1.19,0.26l0.49,-0.37l0.08,-1.52l-0.98,-1.65l0.16,-2.6l-2.69,-3.58l-4.12,-1.33l-0.68,-2.18l-1.91,-1.6l-0.38,-0.78l-0.5,-3.27l-1.52,-0.73l-0.7,0.14l-0.49,-2.31l0.57,-0.59l-0.13,-0.89l2.06,-1.34l1.59,-0.59l2.55,0.42l0.43,-0.23l0.85,-1.9l2.99,-0.37l1.11,-1.41l4.04,-1.97l0.39,-0.97l-0.17,-1.67l1.48,-0.77l0.19,-0.49l-2.1,-5.65l4.54,-1.3l1.38,-0.84l1.88,-6.37l4.59,1.12l0.4,-0.13l1.49,-1.91l0.11,-3.42l2.01,-0.45l1.83,-2.43l0.45,-0.15l0.67,2.44l2.23,2.08l3.44,1.35l1.58,2.72l-0.93,4.08l0.95,1.84l6.54,1.28l2.95,2.14l1.48,0.4l1.07,3.0l1.52,2.13l3.06,0.09l5.13,0.76l3.38,-0.46l2.34,0.48l3.65,2.02l3.07,0.05l0.99,0.93l0.48,0.05l2.87,-1.78l3.94,-1.15l3.84,-0.16l3.06,-1.29l1.77,-1.81l1.72,-1.14l0.16,-0.47l-1.12,-2.36l1.05,-1.82l4.03,0.9l2.45,-1.85l3.76,-1.36l1.97,-2.46l1.63,-0.96l3.49,-0.47l1.91,0.4l0.47,-0.31l0.18,-1.65l-2.27,-2.59l-2.11,-1.27l-0.44,0.02l-1.78,1.27l-2.29,-0.54l-1.28,0.37l-0.43,-1.02l2.76,-6.16l3.03,1.25l3.53,-2.45l0.15,-1.96l2.18,-4.08l1.47,-1.55l-0.03,-2.26l-1.16,-1.03l1.66,-1.66l2.96,-0.72l3.21,-0.11l3.62,1.21l2.05,1.43l3.31,8.17l0.92,3.82ZM696.92,366.89l-1.87,1.1l-1.63,-0.65l-0.06,-1.84l1.03,-1.01l2.58,-0.7l1.15,0.05l0.31,0.56l-0.98,1.09l-0.53,1.4Z", "name": "China"}, "CM": {"path": "M457.92,387.33l1.06,1.92l-1.4,0.16l-1.05,-0.23l-0.45,0.23l-0.54,1.2l0.08,0.45l1.48,1.48l1.05,0.45l1.01,2.47l-1.52,3.0l-0.68,0.68l-0.13,3.69l2.38,3.84l1.09,0.8l0.24,2.48l-3.67,-1.14l-11.27,-0.13l0.23,-1.79l-0.98,-1.66l-1.19,-0.54l-0.44,-0.97l-0.6,-0.42l1.71,-4.28l0.75,-0.13l1.38,-1.37l0.65,-0.03l1.71,0.99l1.93,-1.12l1.14,-3.2l1.38,-1.17l2.0,-5.16l2.17,-2.15l0.3,-1.65l-0.86,-0.89l0.18,-0.37l0.8,1.32l0.07,3.24Z", "name": "Cameroon"}, "CL": {"path": "M246.67,568.71l-3.34,2.4l-0.55,3.89l-0.62,0.06l-2.66,-1.3l-2.82,-2.86l-3.06,-2.32l-0.71,-2.33l0.65,-2.52l-1.22,-2.56l-0.31,-6.43l1.02,-3.46l2.58,-2.79l-0.19,-0.66l-3.24,-0.91l2.11,-2.91l0.78,-5.35l2.3,1.02l0.56,-0.29l1.31,-7.14l-0.2,-0.42l-1.68,-0.9l-0.58,0.28l-0.7,3.81l-0.82,-0.25l1.58,-10.59l1.15,-2.43l-0.71,-3.1l-0.18,-3.15l1.02,-0.35l3.26,-9.88l1.07,-4.5l-0.56,-4.47l0.74,-2.47l-0.29,-3.45l1.46,-3.5l2.04,-17.19l-0.67,-7.94l1.04,-0.54l0.54,-0.92l0.79,1.16l0.32,1.82l1.25,1.19l-0.69,2.61l1.33,2.98l0.97,3.7l0.47,0.29l1.49,-0.31l0.11,0.25l-0.77,2.53l-2.57,1.28l-0.22,0.37l0.08,4.51l-0.47,0.8l0.58,1.25l-1.59,1.59l-1.68,2.74l-0.89,2.6l0.21,2.85l-1.49,2.9l1.12,5.38l0.64,0.64l-0.01,2.49l-1.39,2.89l0.02,2.59l-1.89,2.18l0.02,2.98l0.7,2.85l-1.44,1.23l-1.26,6.27l0.39,3.95l-0.98,0.94l0.58,3.94l1.04,1.3l-0.69,1.22l0.14,0.54l1.01,0.61l0.18,0.88l-1.04,0.92l0.26,2.03l-0.89,4.69l-1.31,3.11l0.25,2.01l-0.73,2.21l-1.97,1.93l0.28,4.31l0.88,1.43l1.6,0.0l-0.01,2.68l1.04,2.36l6.16,0.76ZM248.69,570.67l0.0,9.15l0.4,0.4l3.58,0.07l-0.53,1.14l-1.93,1.23l-2.45,-0.46l-1.9,-1.34l-2.54,-0.61l-5.59,-4.63l-2.57,-3.5l4.23,3.11l3.32,1.53l0.5,-0.14l1.29,-1.95l0.83,-2.85l2.04,-1.51l1.3,0.35Z", "name": "Chile"}, "XC": {"path": "M504.86,320.38l0.39,0.01l0.27,-0.07l-0.3,0.35l-0.36,-0.28Z", "name": "N. Cyprus"}, "CA": {"path": "M280.04,266.9l-1.66,3.44l0.11,0.49l0.5,-0.0l1.44,-1.15l1.05,0.52l-0.63,0.98l0.16,0.58l2.22,1.06l1.38,-0.83l1.97,0.93l-0.68,2.46l0.52,0.48l1.3,-0.48l0.99,3.78l-0.93,2.87l-0.77,0.09l-1.25,-0.52l0.49,-2.7l-0.87,-0.87l-0.52,0.06l-2.77,3.06l-0.43,-0.04l1.14,-1.12l-0.14,-0.66l-2.4,-0.9l-7.4,0.09l-0.2,-0.58l1.35,-1.14l0.02,-0.6l-0.8,-0.75l1.91,-2.12l2.57,-6.16l1.48,-2.16l1.98,-1.26l0.5,0.08l-1.6,3.09ZM68.32,168.48l4.07,1.51l3.89,3.35l2.78,0.73l0.42,-0.15l2.16,-2.88l2.84,-2.09l3.89,0.75l3.71,-3.14l3.71,-1.66l1.54,2.72l0.62,0.1l1.99,-1.93l0.48,-2.97l1.15,0.53l4.17,6.45l0.67,0.01l2.68,-3.95l0.27,4.33l0.54,0.35l3.08,-1.17l1.05,-2.04l2.63,0.36l3.83,3.0l5.86,2.58l3.48,1.19l2.44,-0.39l2.95,3.04l-3.23,3.06l0.16,0.67l4.53,1.42l6.92,-0.76l1.96,-1.04l2.47,3.65l0.64,0.03l2.72,-3.33l-0.01,-0.52l-2.34,-2.61l1.33,-1.93l2.87,-0.3l1.88,-0.64l1.8,1.47l2.48,3.63l0.41,0.17l2.63,-0.5l4.62,2.96l3.83,-1.03l3.59,0.16l0.42,-0.43l-0.27,-3.92l1.8,-0.96l3.49,2.08l-0.01,6.03l0.34,0.4l0.44,-0.28l1.5,-4.95l1.69,0.15l0.43,-0.33l1.13,-6.89l-2.74,-4.66l-2.86,-2.89l0.19,-8.09l2.75,-5.34l2.86,1.11l2.44,3.36l3.31,8.33l-2.12,3.42l0.22,0.59l4.38,1.37l-0.01,6.85l0.29,0.39l0.45,-0.18l3.02,-4.91l2.56,3.84l-0.68,5.11l2.42,4.42l0.7,0.0l2.61,-4.74l1.86,-5.93l0.15,-7.44l3.08,0.48l3.57,1.03l3.18,3.35l0.14,3.2l-1.81,3.53l1.71,3.82l-0.29,2.9l-4.72,4.27l-3.21,0.89l-2.43,-1.77l-0.62,0.23l-0.74,3.09l-2.4,5.08l-0.73,2.58l-2.76,3.73l-3.68,0.5l-2.07,2.63l-0.15,3.32l-2.86,0.78l-3.1,4.45l-2.74,5.98l-0.98,4.09l-0.14,5.74l0.31,0.4l3.44,0.75l2.25,7.78l0.48,0.26l3.37,-0.88l4.49,1.92l2.43,1.68l1.92,2.2l3.09,1.21l2.61,1.84l6.65,0.69l-0.36,3.49l0.8,4.33l1.81,4.63l3.81,3.97l0.51,0.05l2.08,-1.51l1.37,-4.39l-1.31,-6.63l-1.54,-2.05l3.69,-1.91l2.84,-3.1l1.49,-3.43l-0.24,-3.19l-1.7,-3.97l-2.92,-3.49l2.86,-5.19l-1.09,-4.55l-0.81,-7.95l1.39,-0.99l4.1,1.4l2.62,0.54l2.14,-1.31l5.09,4.62l1.07,2.2l4.09,0.36l-0.06,3.98l0.83,6.25l2.42,1.04l1.74,2.7l0.57,0.11l3.63,-2.66l2.51,-5.54l1.22,-1.73l7.63,15.44l-0.95,2.7l0.14,0.45l3.3,2.51l2.23,2.5l4.1,1.23l1.45,1.25l0.96,3.51l2.08,0.8l0.87,1.37l0.17,4.34l-3.4,2.77l-4.22,1.5l-3.06,3.15l-4.04,0.61l-5.35,-0.82l-6.4,0.25l-2.32,2.87l-3.25,1.78l-6.48,8.38l-0.03,0.47l0.45,0.17l2.33,-0.73l3.98,-4.83l5.12,-3.08l3.49,-0.36l1.77,1.49l-2.18,2.58l0.8,4.03l1.01,2.99l3.5,1.85l4.14,-0.52l2.14,-3.2l0.24,1.68l1.22,0.99l-2.64,2.0l-5.49,2.09l-2.54,1.45l-2.73,2.43l-1.38,-0.18l-0.08,-2.39l4.16,-2.8l0.16,-0.45l-0.39,-0.28l-4.01,0.12l-2.61,0.4l-1.4,-1.73l-0.12,-5.1l-1.11,-1.06l-1.83,0.44l-0.65,-0.76l-0.63,0.03l-1.91,2.77l-0.81,2.9l-0.81,1.48l-1.66,0.64l-0.47,0.87l-8.32,0.08l-1.21,0.71l-2.33,2.23l-0.72,-0.14l-1.36,1.08l-1.12,-0.54l-4.75,1.43l-0.9,1.32l0.21,0.59l1.7,0.22l0.05,0.22l-1.84,0.36l-1.85,0.9l-1.19,-0.29l-0.92,0.15l-2.95,2.0l-0.71,-0.11l0.32,-0.68l1.12,-1.78l1.72,-1.33l0.09,-2.6l1.16,-2.28l0.48,0.59l2.03,0.48l0.42,-0.16l0.82,-1.6l-2.66,-4.02l-2.29,-0.71l-5.63,-0.81l-0.4,-0.66l-0.86,0.2l0.27,-0.64l-0.21,-0.52l-0.72,-0.32l0.32,-1.06l-0.91,-1.28l0.34,-0.82l-0.29,-0.55l-2.6,-0.52l-0.76,-1.93l-0.95,-0.76l-1.67,-0.09l-2.67,-0.67l-1.13,1.4l-1.48,0.69l-0.85,1.24l-2.8,-0.89l-2.1,0.45l-2.38,-1.13l-4.23,-0.83l-0.58,-0.48l-0.42,-1.96l-0.4,-0.32l-0.85,0.02l-0.39,0.4l-0.01,1.07l-69.11,-0.01l-6.5,-5.37l-4.5,-1.66l-1.29,-3.28l0.34,-2.39l-0.2,-0.41l-3.03,-1.66l-0.52,-3.39l-2.92,-2.97l-0.05,-1.94l1.39,-2.23l-0.07,-2.8l-4.34,-3.13l-4.08,-8.55l-4.01,-4.22l-1.31,-2.51l-0.57,-0.15l-2.51,1.6l-2.18,2.42l-3.81,-5.1l-2.44,-1.39l-2.26,-0.18l0.03,-55.45ZM265.75,272.87l-0.72,0.04l-3.11,-1.15l-1.72,-1.35l3.19,0.89l2.36,1.57ZM249.33,12.09l6.65,1.61l5.26,2.56l4.43,5.22l-0.1,4.84l-5.98,7.79l-6.13,3.67l-2.26,3.84l0.35,0.6l4.74,-0.08l-5.52,9.28l-4.14,4.52l-4.23,11.87l-5.01,2.26l-1.69,2.82l-7.4,1.42l-0.32,0.34l0.22,0.41l3.02,1.48l-1.51,2.34l2.02,6.18l-2.26,4.04l-3.94,3.58l-1.16,4.49l-3.53,3.68l0.35,2.54l0.44,0.34l3.85,-0.39l0.04,2.09l-6.37,6.12l-6.3,-2.81l-7.5,1.6l-3.7,-1.27l-4.4,-0.52l-0.28,-4.64l4.41,-2.41l0.2,-0.41l-1.19,-8.1l1.06,-0.58l6.49,4.94l0.49,-0.0l0.12,-0.48l-3.41,-7.64l-3.92,-2.37l1.85,-4.46l4.51,-3.29l0.71,-4.65l-3.55,-5.6l-0.98,-6.84l6.22,0.58l1.88,1.51l0.57,-0.08l3.91,-5.41l-0.21,-0.62l-5.64,-1.76l-8.71,0.93l-4.24,-5.03l-2.06,-6.44l-2.92,-4.92l-0.52,-5.65l3.5,-3.22l2.94,-0.62l4.91,-2.99l3.67,-6.97l2.62,0.86l2.63,5.2l0.41,0.22l0.34,-0.32l1.88,-10.36l3.17,-3.13l4.37,-2.24l7.32,-0.83l1.2,2.03l0.52,0.16l7.1,-3.49l10.71,2.64ZM203.82,140.61l1.98,5.56l0.38,0.26l0.37,-0.27l2.27,-6.74l5.84,-3.34l4.06,8.5l-0.37,5.31l0.57,0.39l4.95,-2.38l2.28,-3.11l5.2,3.94l3.34,3.74l0.31,3.32l0.54,0.34l4.32,-1.65l2.44,4.64l6.13,3.12l2.09,2.87l2.25,6.4l-4.35,3.07l-0.01,0.65l5.9,4.44l3.95,1.47l3.53,5.87l3.81,0.57l-0.69,3.91l-4.11,6.58l-2.68,-2.22l-3.9,-5.85l-0.43,-0.17l-3.24,0.78l-0.3,0.35l-0.24,3.8l2.63,3.5l3.42,2.75l0.96,1.44l1.58,5.48l-0.73,3.38l-2.67,-1.26l-6.25,-4.45l-0.52,0.05l-0.04,0.52l6.1,8.03l0.24,1.1l-6.09,-1.92l-5.3,-3.12l-2.77,-2.46l0.72,-1.31l-0.1,-0.51l-7.38,-5.75l-0.64,0.33l0.03,1.33l-6.7,0.85l-1.79,-1.68l1.46,-3.85l4.49,-0.1l5.15,-0.77l0.31,-0.54l-0.79,-2.04l0.83,-2.91l3.22,-6.15l-0.67,-3.24l-1.07,-2.43l-3.84,-3.29l-4.67,-2.18l1.24,-1.37l0.05,-0.47l-2.65,-4.44l-2.33,-0.57l-1.88,-2.37l-0.65,0.04l-1.25,2.02l-4.3,0.88l-9.0,-1.6l-5.26,-2.14l-3.98,-1.1l-1.81,-2.3l2.43,-3.26l-0.32,-0.64l-3.2,-0.03l-0.75,-7.66l1.89,-7.38l2.46,-3.41l5.58,-2.04l-1.59,4.91ZM261.18,282.95l2.07,0.7l1.54,-0.05l-0.57,0.69l-0.66,0.17l-2.92,-1.41l-0.44,-0.86l0.38,-0.46l0.61,1.23ZM230.78,185.0l-2.28,0.26l-0.54,-2.72l0.98,-3.45l1.88,-0.76l1.65,1.57l0.03,2.61l-0.24,0.76l-1.47,1.73ZM229.41,141.37l0.16,1.75l-4.89,-0.38l-2.72,1.08l-0.48,-0.34l-2.65,-4.39l0.09,-2.82l0.87,-0.43l5.47,0.92l4.14,4.61ZM222.03,214.7l-0.78,2.22l-0.56,-0.23l-0.54,-1.3l0.87,-1.54l0.57,0.07l0.44,0.77ZM183.65,102.44l3.0,3.59l4.7,-0.02l1.97,3.24l-0.41,4.19l2.83,2.3l1.84,2.54l6.99,1.27l4.2,-2.19l4.96,-0.84l3.84,0.67l2.53,3.56l0.53,3.8l-1.43,2.32l-3.48,1.88l-3.25,-1.1l-7.15,1.44l-5.04,0.16l-3.95,-1.13l-6.43,-2.95l-0.83,-5.12l-0.3,-4.98l-2.56,-4.72l-5.31,-1.46l-2.69,-3.1l0.83,-3.99l4.63,0.64ZM207.36,195.03l0.42,2.4l0.63,0.26l0.99,-0.72l1.27,1.36l5.47,3.76l0.21,2.54l0.49,0.36l1.62,-0.39l1.33,1.4l-1.71,1.36l-3.54,-1.23l-1.33,-2.43l-0.66,-0.06l-2.46,2.99l-3.05,2.47l-0.7,-2.67l-0.45,-0.29l-2.39,0.38l1.64,-2.22l0.32,-4.55l0.78,-5.03l1.13,0.31ZM215.49,211.5l-2.69,2.74l-1.33,-0.09l-0.38,-1.01l1.61,-2.18l2.82,0.04l-0.02,0.5ZM202.66,70.17l2.91,4.33l-3.3,3.83l-4.54,9.4l-4.14,0.83l-4.93,-1.5l-2.57,-4.9l0.04,-4.53l1.93,-3.49l-0.36,-0.59l-4.35,0.1l-2.61,-4.34l-1.55,-6.33l1.71,-6.55l1.67,-4.57l2.41,-1.04l0.22,-0.48l-0.96,-3.26l5.05,-0.73l3.21,8.41l8.21,6.06l1.95,9.35ZM187.39,143.67l-2.74,6.11l-2.28,-0.24l-1.49,-6.99l0.04,-4.2l1.26,-3.63l2.29,-2.28l4.96,0.3l4.35,2.01l-3.51,7.33l-2.87,1.59ZM186.12,124.07l-1.2,3.26l-3.2,-0.62l-2.75,-2.26l1.22,-4.02l3.15,-2.36l1.93,3.09l0.86,2.91ZM185.64,96.93l-0.83,0.24l-4.33,-0.68l-0.51,-2.52l4.35,0.15l1.52,1.89l-0.2,0.91ZM180.62,90.66l-3.24,2.16l-1.76,-2.41l-1.05,-4.51l-0.18,-4.75l2.69,0.43l1.32,0.77l2.85,4.19l-0.63,4.11ZM180.98,172.19l-1.22,1.91l-3.04,-1.9l-2.16,0.64l-2.93,-2.72l1.98,-2.02l1.52,-2.75l3.72,3.03l2.13,3.8ZM169.77,135.22l2.97,1.73l4.08,-1.03l0.51,2.03l-2.26,4.02l0.07,0.48l3.66,3.51l-0.43,6.97l-3.8,2.82l-2.06,-0.56l-1.71,-2.96l-6.1,-6.18l0.04,-2.04l4.64,0.95l0.44,-0.57l-2.66,-5.4l2.61,-3.78ZM174.46,107.75l1.36,3.53l0.08,5.21l-1.09,7.07l-3.71,0.89l-2.35,-1.35l0.05,-5.54l-0.47,-0.4l-3.64,0.69l-0.14,-7.04l2.56,0.16l3.62,-3.51l3.32,0.59l0.42,-0.3ZM170.01,87.71l0.84,4.38l-3.36,-1.1l-4.3,-4.01l-4.91,-0.41l2.06,-3.18l-0.05,-0.5l-2.92,-2.99l-0.16,-4.33l4.31,1.6l6.62,4.67l1.87,5.86ZM134.6,141.21l-1.16,3.7l0.55,0.48l5.29,-2.43l3.29,4.01l0.64,-0.03l2.53,-3.85l1.89,2.29l2.03,7.94l0.37,0.3l0.4,-0.26l1.28,-3.56l-1.72,-8.28l1.76,-1.01l2.22,1.24l2.69,3.29l2.45,13.62l8.57,7.16l-0.23,2.66l-3.8,0.53l-0.29,0.6l1.51,2.57l-0.67,2.03l-4.14,-1.0l-4.49,-1.91l-3.03,0.47l-4.65,2.34l-10.43,1.63l-1.41,-3.17l-3.42,-1.92l-2.23,0.65l-2.72,-5.01l5.02,-1.82l3.63,0.3l3.27,-1.29l0.25,-0.38l-0.26,-0.37l-4.84,-1.75l-5.5,0.57l-3.28,-0.14l-1.06,-2.23l5.47,-2.91l0.2,-0.46l-0.4,-0.3l-3.77,0.11l-3.96,-1.88l1.97,-5.68l1.69,-3.21l6.41,-4.99l2.07,1.35ZM158.82,138.54l-1.83,4.71l-3.34,-5.15l0.6,-0.86l2.98,-0.32l1.59,1.62ZM149.59,111.85l0.99,3.73l0.63,0.21l2.09,-1.62l2.15,0.37l0.41,4.59l-1.42,4.36l-8.24,1.45l-6.38,4.09l-3.32,0.18l-0.26,-2.47l5.03,-4.13l0.12,-0.46l-0.41,-0.24l-11.2,1.15l-3.08,-1.54l3.28,-9.52l2.11,-2.66l6.67,3.38l4.39,5.99l4.63,0.92l0.44,-0.53l-3.52,-9.7l2.01,-3.46l2.07,1.01l0.81,4.89ZM145.71,84.15l-2.55,2.05l-3.61,-0.01l0.03,-1.26l2.32,-3.45l0.99,0.43l2.82,2.24ZM144.69,94.95l-4.27,3.06l-3.27,-3.31l1.81,-3.41l3.34,-1.13l3.11,1.67l-0.73,3.12ZM118.92,155.09l-5.99,3.39l-1.29,-3.14l-5.55,-4.03l2.72,-9.3l2.17,-5.73l-2.25,-5.4l7.82,-1.34l3.61,1.91l6.24,0.5l2.31,2.51l2.44,3.4l-2.87,2.01l-6.21,6.07l-3.1,5.73l-0.05,3.42ZM129.56,96.45l-0.31,7.96l-1.8,3.53l-2.35,0.59l-4.6,4.46l-3.74,1.48l-2.92,-1.93l4.07,-7.68l5.0,-7.12l3.62,0.15l3.02,-1.45ZM111.13,275.3l-0.71,0.3l-3.83,-1.6l-0.83,-1.38l-2.13,-1.28l-0.67,-1.21l-2.4,-0.65l-0.75,-2.19l3.73,1.32l2.25,0.41l2.0,3.05l2.52,1.64l0.8,1.62ZM87.8,253.38l0.9,0.35l1.87,-0.27l-0.67,4.25l1.83,2.97l-1.42,-1.69l-0.98,-1.97l-1.19,-1.23l-0.34,-2.41Z", "name": "Canada"}, "CG": {"path": "M466.72,406.37l-0.1,1.03l-1.25,2.97l-0.19,3.62l-0.46,1.78l-0.23,0.63l-1.61,1.19l-1.21,1.39l-1.09,2.43l0.04,2.09l-3.25,3.25l-0.5,-0.24l-0.5,-0.83l-1.36,-0.02l-0.98,0.89l-1.68,-0.99l-1.54,1.24l-1.52,-1.96l1.57,-1.14l0.11,-0.52l-0.77,-1.35l2.1,-0.66l0.39,-0.73l1.05,0.82l2.21,0.11l1.12,-1.37l0.37,-1.81l-0.27,-2.09l-1.13,-1.5l1.0,-2.69l-0.13,-0.45l-0.92,-0.58l-1.6,0.17l-0.51,-0.94l0.1,-0.61l2.75,0.09l3.97,1.24l0.51,-0.33l0.17,-1.28l1.24,-2.21l1.28,-1.14l2.76,0.49Z", "name": "Congo"}, "CF": {"path": "M461.16,408.1l-0.26,-1.19l-1.09,-0.77l-0.84,-1.18l-0.29,-1.0l-1.04,-1.15l0.08,-3.44l0.58,-0.49l1.16,-2.36l1.85,-0.17l0.61,-0.62l0.97,0.58l3.15,-0.97l2.48,-1.92l0.02,-0.96l2.82,0.02l2.36,-1.18l1.93,-2.86l1.16,-0.94l1.11,-0.31l0.27,0.87l1.34,1.48l-0.39,2.02l0.3,1.01l4.01,2.76l0.17,0.93l2.63,2.31l0.6,1.44l2.08,1.4l-3.84,-0.21l-1.94,0.88l-1.24,-0.49l-2.67,1.2l-1.29,-0.18l-0.51,0.37l-0.6,1.22l-3.35,-0.65l-1.57,-0.91l-2.42,-0.83l-1.45,0.91l-0.97,1.28l-0.26,1.56l-3.22,-0.43l-1.49,1.33l-0.94,1.62Z", "name": "Central African Rep."}, "CD": {"path": "M487.01,402.27l2.34,-0.14l1.35,1.84l1.34,0.45l0.86,-0.39l1.21,0.12l1.07,-0.41l0.54,0.89l2.04,1.54l-0.14,2.72l0.7,0.54l-1.38,1.13l-1.53,2.54l-0.17,2.05l-0.59,1.08l-0.02,1.72l-0.72,0.84l-0.66,3.01l0.63,1.32l-0.44,4.26l0.64,1.47l-0.37,1.22l0.86,1.8l1.53,1.42l0.3,1.27l0.44,0.51l-4.08,0.75l-0.92,1.82l0.51,1.35l-0.74,5.46l0.17,0.38l2.45,1.47l0.54,-0.1l0.12,1.64l-1.28,-0.01l-1.85,-2.37l-1.94,-0.45l-0.48,-1.14l-0.56,-0.2l-1.41,0.74l-1.71,-0.3l-1.01,-1.19l-2.49,-0.2l-0.44,-0.77l-1.98,-0.21l-2.88,0.36l0.11,-2.42l-0.85,-1.13l-0.16,-1.36l0.32,-1.74l-0.47,-0.89l-0.04,-1.5l-0.4,-0.39l-2.53,0.02l0.1,-0.41l-0.39,-0.49l-1.28,0.01l-0.43,0.46l-1.62,0.32l-0.83,1.8l-1.09,-0.28l-2.4,0.52l-1.37,-1.91l-1.3,-3.31l-0.38,-0.27l-7.39,-0.03l-2.46,0.42l0.5,-0.45l0.37,-1.47l0.66,-0.38l0.92,0.08l0.73,-0.82l0.87,0.02l0.31,0.68l1.4,0.36l3.59,-3.63l0.01,-2.23l1.02,-2.29l2.69,-2.39l0.43,-0.99l0.49,-1.96l0.17,-3.51l1.25,-2.95l0.36,-3.15l0.86,-1.13l1.1,-0.67l3.57,1.73l3.65,0.73l0.46,-0.21l0.8,-1.46l1.24,0.19l2.61,-1.17l0.81,0.44l1.04,-0.03l0.59,-0.66l0.7,-0.16l1.81,0.25Z", "name": "Dem. Rep. Congo"}, "CZ": {"path": "M458.44,265.89l1.23,1.2l1.49,0.27l0.09,1.1l1.36,0.81l0.58,-0.21l0.25,-0.67l1.12,0.29l0.53,1.3l1.67,0.21l0.69,1.14l-1.4,1.19l-0.12,0.65l-0.55,0.55l-1.59,0.21l-0.56,0.65l-1.03,-0.52l-1.03,0.17l-2.15,-1.12l-1.05,0.4l-1.18,1.3l-1.53,-1.0l-2.59,-2.49l-0.57,-2.36l1.48,-0.7l0.99,-1.01l1.72,-0.74l0.54,-0.59l0.73,0.29l0.87,-0.32Z", "name": "Czech Rep."}, "CY": {"path": "M504.35,321.02l0.49,0.34l-1.34,0.65l-0.91,-0.29l-0.26,-0.55l2.02,-0.14Z", "name": "Cyprus"}, "CR": {"path": "M211.34,387.89l0.48,1.0l1.61,1.62l-0.54,0.45l0.3,1.42l-0.25,1.2l-1.09,-0.6l-0.05,-1.25l-2.46,-1.43l-0.28,-0.77l-0.66,-0.45l-0.45,-0.0l-0.11,1.05l-1.32,-0.95l0.31,-1.31l-0.36,-0.6l0.31,-0.27l1.42,0.58l1.29,-0.14l0.56,0.56l0.74,0.17l0.55,-0.27Z", "name": "Costa Rica"}, "CU": {"path": "M221.21,356.57l1.27,1.05l2.18,-0.29l4.43,3.42l2.09,0.45l-0.1,0.41l0.36,0.49l1.75,0.1l1.44,0.97l-3.07,0.42l-4.17,-0.03l0.79,-0.7l-0.04,-0.63l-1.2,-0.76l-1.49,-0.16l-0.7,-0.62l-0.56,-1.44l-0.4,-0.25l-1.34,0.1l-2.2,-0.68l-0.89,-0.6l-3.18,-0.41l-0.28,-0.17l0.6,-0.76l-0.36,-0.29l-2.73,-0.05l-1.7,1.33l-0.91,0.03l-0.61,0.71l-1.03,0.22l1.14,-1.35l1.01,-0.54l3.69,-1.04l3.98,0.22l2.21,0.87Z", "name": "Cuba"}, "SZ": {"path": "M500.35,482.11l0.5,2.14l-0.39,0.94l-1.04,0.22l-1.23,-1.25l-0.02,-0.69l0.84,-1.65l1.34,0.28Z", "name": "Swaziland"}, "SY": {"path": "M510.98,327.85l0.08,-1.44l0.55,-1.47l1.28,-1.07l0.12,-0.44l-0.41,-1.19l-1.14,-0.38l-0.19,-1.91l0.53,-1.11l1.29,-1.31l0.19,-1.27l0.6,0.24l2.61,-0.82l1.36,0.56l2.06,-0.01l2.95,-1.17l3.29,-0.29l-0.72,1.1l-1.49,1.11l0.23,2.19l-0.89,3.46l-10.14,6.13l-2.17,-0.92Z", "name": "Syria"}, "KG": {"path": "M621.37,297.76l-3.91,1.98l-0.95,1.31l-3.03,0.37l-1.14,2.06l-2.35,-0.39l-2.01,0.7l-2.39,1.55l0.09,1.02l-0.42,0.44l-4.5,0.47l-3.01,-1.02l-2.38,0.19l0.12,-0.96l2.3,0.46l1.14,-0.97l1.99,0.21l3.21,-2.37l-0.03,-0.67l-2.97,-1.75l-1.95,0.72l-1.27,-0.86l1.77,-1.84l-0.12,-0.64l-0.4,-0.18l0.36,-0.95l1.35,-0.39l4.01,1.14l0.5,-0.31l0.35,-1.82l1.08,-0.54l3.4,1.37l1.14,-0.35l7.61,0.43l1.15,1.13l1.27,0.45Z", "name": "Kyrgyzstan"}, "KE": {"path": "M506.26,414.59l1.87,-2.56l0.93,-2.15l-1.38,-4.08l-1.06,-1.6l2.82,-2.75l0.79,0.26l0.12,1.41l0.86,0.83l1.9,0.11l3.28,2.13l3.57,0.44l1.05,-1.12l1.96,-0.9l0.82,0.69l1.16,0.09l-1.78,2.45l0.03,9.12l1.3,1.94l-1.37,0.78l-0.67,1.03l-1.08,0.46l-0.34,1.67l-0.81,1.07l-0.45,1.55l-0.68,0.56l-3.2,-2.23l-0.35,-1.58l-8.86,-4.98l0.14,-1.6l-0.57,-1.04Z", "name": "Kenya"}, "SS": {"path": "M481.71,393.21l1.07,-0.73l1.2,-3.2l1.36,-0.26l1.61,2.0l0.87,0.34l1.11,-0.41l1.5,0.07l0.57,0.53l2.49,0.0l0.44,-0.63l1.07,-0.4l0.45,-0.84l0.59,-0.33l1.9,1.34l1.6,-0.2l2.83,-3.35l-0.32,-2.23l1.6,-0.53l-0.24,1.62l0.3,1.84l1.34,1.18l0.2,1.88l0.35,0.41l0.02,1.54l-0.23,0.47l-1.42,0.25l-0.85,1.44l0.3,0.6l1.4,0.17l1.12,1.08l0.59,1.13l1.03,0.53l1.28,2.37l-4.42,3.99l-1.74,0.01l-1.89,0.55l-1.47,-0.52l-1.15,0.57l-2.96,-2.62l-1.3,0.49l-1.06,-0.15l-0.79,0.39l-0.82,-0.22l-1.8,-2.7l-1.91,-1.1l-0.66,-1.5l-2.62,-2.33l-0.18,-0.94l-2.37,-1.61Z", "name": "S. Sudan"}, "SR": {"path": "M283.12,400.08l2.1,0.53l-1.08,1.95l0.2,1.72l0.93,1.49l-0.59,2.04l-0.43,0.71l-1.12,-0.42l-1.32,0.22l-0.93,-0.2l-0.46,0.26l-0.25,0.73l0.33,0.7l-0.89,-0.13l-1.39,-1.98l-0.31,-1.34l-0.97,-0.31l-0.89,-1.47l0.35,-1.61l1.45,-0.82l0.33,-1.87l2.61,0.44l0.58,-0.47l1.75,-0.16Z", "name": "Suriname"}, "KH": {"path": "M689.52,379.15l0.5,1.47l-0.28,2.77l-4.0,1.87l-0.16,0.59l0.69,0.97l-2.06,0.17l-2.05,0.97l-1.82,-0.32l-0.9,-1.17l-1.23,-2.56l-0.55,-2.88l1.4,-1.87l3.01,-0.46l2.23,0.35l2.01,0.99l0.51,-0.14l0.95,-1.49l1.74,0.75Z", "name": "Cambodia"}, "SV": {"path": "M195.8,379.9l1.41,-1.21l2.24,1.46l0.98,-0.27l0.44,0.21l-0.27,1.07l-1.14,-0.03l-3.65,-1.23Z", "name": "El Salvador"}, "SK": {"path": "M476.87,273.43l-1.2,2.33l-2.74,-1.08l-1.05,0.4l-0.52,0.78l-3.44,0.85l-0.48,0.81l-1.74,0.38l-1.88,-1.17l-0.2,-1.03l0.4,-0.94l1.02,0.01l0.86,-0.39l1.74,-2.23l0.83,0.19l0.76,-0.39l1.06,1.14l0.49,0.08l1.33,-0.74l1.26,0.34l1.63,-0.49l1.87,1.16Z", "name": "Slovakia"}, "KR": {"path": "M737.47,312.73l1.03,-0.11l0.87,-1.28l2.69,-0.35l0.32,-0.3l1.75,3.04l0.59,1.94l0.02,3.41l-0.81,1.45l-2.22,0.59l-1.92,1.21l-1.79,0.21l-0.2,-1.21l0.44,-2.44l-0.97,-2.83l1.45,-0.41l0.23,-0.6l-1.48,-2.32Z", "name": "Korea"}, "SI": {"path": "M456.18,286.22l-0.51,-1.56l0.2,-1.29l1.68,0.23l1.44,-0.83l2.08,-0.09l0.62,-0.56l0.24,0.62l-1.66,0.8l-0.43,1.53l-0.67,0.28l-0.24,0.94l-1.2,-0.55l-0.54,0.09l-0.33,0.43l-0.67,-0.05Z", "name": "Slovenia"}, "KP": {"path": "M736.77,312.06l-0.91,-0.45l-0.89,0.68l-1.23,-0.97l0.49,-1.01l0.5,-0.32l0.58,-2.78l-0.45,-0.8l-1.38,-0.34l-0.75,-0.55l1.69,-1.74l2.72,-1.75l1.57,-2.11l1.1,0.86l2.17,0.12l0.41,-0.49l-0.32,-1.43l3.54,-1.33l0.93,-1.56l1.03,1.28l-1.46,1.26l-0.79,1.2l0.02,2.38l-1.08,0.61l-1.41,1.55l-1.7,0.58l-1.23,1.17l-0.16,2.14l2.12,1.67l-0.16,0.33l-2.59,0.32l-1.14,1.41l-1.21,0.08Z", "name": "Dem. Rep. Korea"}, "KW": {"path": "M540.8,336.41l0.38,0.92l-0.17,0.78l0.61,1.64l-0.95,0.04l-0.83,-1.35l-1.59,-0.2l1.34,-2.02l1.21,0.17Z", "name": "Kuwait"}, "SN": {"path": "M390.09,377.95l0.12,1.57l0.49,1.48l0.96,0.82l0.05,1.3l-1.26,-0.19l-0.75,0.33l-1.84,-0.62l-5.84,-0.13l-2.54,0.51l-0.22,-1.04l1.78,0.04l2.01,-0.92l1.03,0.48l1.09,0.05l1.29,-0.62l0.14,-0.58l-0.51,-0.74l-1.81,0.25l-1.13,-0.64l-0.79,0.04l-0.72,0.61l-2.31,0.06l-0.92,-1.79l-0.82,-0.65l0.64,-0.36l1.81,-3.15l0.65,-0.64l1.04,0.19l1.39,-0.56l1.19,-0.02l2.72,1.39l3.03,3.53Z", "name": "Senegal"}, "SL": {"path": "M394.46,393.98l-1.73,1.98l-0.58,1.34l-2.07,-1.06l-1.22,-1.26l-0.65,-2.4l1.16,-0.97l0.67,-1.18l1.21,-0.52l1.66,0.0l1.03,1.65l0.52,2.42Z", "name": "Sierra Leone"}, "KZ": {"path": "M552.75,298.52l0.51,-1.47l-0.48,-1.19l-2.96,-1.32l-1.07,-2.94l-1.37,-0.98l-0.03,-0.45l1.95,0.27l0.45,-0.38l0.09,-2.29l1.75,-0.47l2.09,0.51l0.49,-0.34l0.45,-3.5l-0.45,-2.38l-0.42,-0.32l-2.41,0.17l-2.39,-0.84l-2.87,1.59l-2.15,0.7l-0.86,-0.4l0.15,-1.86l-1.6,-2.47l-2.02,-0.09l-1.83,-2.19l1.33,-2.64l-0.61,-1.04l1.66,-3.54l2.17,1.91l0.66,-0.26l0.29,-2.7l4.94,-4.15l3.67,-0.1l8.38,4.33l2.97,-1.63l3.74,-0.08l3.1,1.99l0.56,-0.13l0.6,-0.97l3.28,0.16l0.4,-0.27l0.63,-1.89l-0.15,-0.46l-3.62,-2.47l1.99,-1.65l-0.2,-1.23l2.05,-0.92l0.17,-0.58l-1.66,-2.63l0.88,-1.1l9.22,-1.46l1.35,-1.1l6.17,-1.58l2.26,-1.78l4.05,0.85l0.74,4.22l0.54,0.3l2.46,-0.98l2.8,1.27l-0.18,2.03l0.44,0.43l2.58,-0.3l4.83,-3.09l0.03,0.36l3.16,3.23l5.57,10.31l0.69,0.03l1.11,-1.75l3.11,2.07l3.78,-0.93l1.13,0.59l1.15,2.17l1.83,0.89l1.0,1.55l0.4,0.18l2.95,-0.47l1.06,1.89l-1.65,2.2l-1.92,0.33l-0.33,0.38l-0.12,3.61l-1.14,1.37l-4.73,-1.15l-0.48,0.28l-1.76,6.36l-1.1,0.68l-4.91,1.4l-0.26,0.52l2.13,5.72l-1.4,0.73l-0.08,1.73l-0.87,-0.28l-1.43,-1.27l-7.9,-0.45l-0.92,0.34l-3.74,-1.37l-1.63,0.99l-0.31,1.59l-3.7,-1.05l-1.87,0.48l-0.76,1.57l-1.35,0.6l-3.3,2.34l-1.12,2.31l-0.42,0.01l-0.93,-1.56l-2.86,-0.1l-0.45,-2.43l-0.39,-0.33l-0.81,-0.02l0.02,-3.32l-3.0,-2.52l-4.58,0.18l-2.74,0.47l-2.34,-3.04l-6.74,-4.23l-6.45,2.1l-0.28,0.38l0.1,12.31l-0.69,0.09l-1.62,-2.42l-1.83,-1.07l-3.13,0.66l-0.68,0.6Z", "name": "Kazakhstan"}, "SA": {"path": "M537.53,338.97l2.0,0.25l0.91,1.39l1.49,-0.06l0.88,2.19l1.29,0.79l0.51,1.03l1.56,1.08l-0.1,1.98l0.32,0.93l1.57,2.56l0.76,0.55l0.71,-0.04l1.37,4.1l7.83,1.63l0.51,-0.29l0.77,1.29l-1.56,5.0l-7.29,2.58l-7.31,1.05l-2.34,1.19l-1.88,2.79l-0.76,0.28l-0.83,-0.79l-0.91,0.12l-2.88,-0.52l-3.5,0.25l-0.86,-0.57l-0.58,0.15l-0.66,1.29l0.16,1.12l-0.43,0.33l-0.93,-1.42l-0.33,-1.18l-1.23,-0.89l-1.27,-2.1l-0.78,-2.27l-1.73,-1.83l-1.14,-0.49l-1.54,-2.37l-0.2,-3.5l-1.44,-3.02l-1.27,-1.19l-1.33,-0.58l-1.31,-3.5l-0.77,-0.7l-0.97,-2.05l-2.8,-4.2l-1.07,-0.17l0.59,-2.85l2.75,0.31l1.08,-0.88l0.6,-0.99l1.74,-0.36l0.65,-1.08l0.72,-0.43l0.1,-0.6l-2.09,-2.45l4.42,-1.3l0.48,-0.39l2.75,0.73l3.66,2.01l7.03,5.8l4.88,0.32Z", "name": "Saudi Arabia"}, "SE": {"path": "M480.3,192.35l-4.15,1.76l-2.43,4.19l0.32,3.66l-3.86,4.45l-4.93,4.95l-1.79,7.79l1.78,3.64l2.29,2.71l-2.14,5.19l-2.69,1.39l-0.95,7.87l-1.3,3.9l-2.71,-0.39l-0.43,0.25l-1.32,3.3l-2.29,0.16l-0.75,-3.94l-2.09,-5.18l-1.86,-6.56l1.04,-2.66l2.12,-3.53l0.83,-6.02l-1.6,-2.83l-0.15,-7.02l1.52,-4.93l2.18,0.09l0.39,-0.26l0.87,-2.28l-0.85,-2.14l3.83,-8.36l4.06,-11.45l2.12,0.02l0.4,-0.33l0.59,-3.35l4.31,1.0l0.49,-0.36l0.34,-4.24l1.04,-0.19l6.98,7.72l0.07,9.8l0.74,2.18Z", "name": "Sweden"}, "SD": {"path": "M505.98,389.25l-0.34,-0.78l-1.17,-0.91l-0.27,-1.62l0.29,-1.82l-0.34,-0.46l-1.16,-0.18l-0.54,0.59l-1.23,0.11l-0.28,0.65l0.53,0.66l0.17,1.23l-2.44,3.01l-0.96,0.2l-2.39,-1.41l-0.95,0.52l-0.38,0.78l-1.11,0.41l-0.29,0.5l-1.94,0.0l-0.54,-0.52l-1.81,-0.09l-0.95,0.41l-2.45,-2.36l-2.07,0.54l-0.73,1.27l-0.6,2.11l-1.25,0.58l-0.75,-0.62l0.27,-2.67l-1.48,-1.78l-0.22,-1.49l-0.92,-0.97l-0.02,-1.3l-0.57,-1.17l-0.69,-0.16l0.7,-1.31l-0.18,-1.15l0.65,-0.63l0.03,-0.55l-0.36,-0.42l1.56,-3.02l1.91,0.16l0.43,-0.4l-0.1,-11.14l2.49,-0.01l0.4,-0.4l-0.0,-4.96l29.02,0.0l0.65,2.11l-0.49,0.67l0.36,2.75l0.93,3.22l2.12,1.59l-0.9,1.07l-1.72,0.4l-0.98,0.91l-1.42,5.73l0.24,1.16l-0.38,2.09l-0.97,2.4l-1.53,1.32l-1.32,2.93l-1.22,0.86l-0.37,1.34Z", "name": "Sudan"}, "DO": {"path": "M241.8,368.82l0.05,-0.67l-0.47,-0.75l0.43,-0.45l0.19,-1.02l-0.09,-1.57l1.66,0.01l1.99,0.64l0.33,0.69l1.29,0.19l0.33,0.77l0.99,0.09l0.81,0.64l-0.46,0.53l-1.13,-0.48l-1.87,-0.01l-1.27,0.6l-0.75,-0.56l-1.01,0.55l-0.79,1.43l-0.23,-0.62Z", "name": "Dominican Rep."}, "DJ": {"path": "M528.43,386.01l-0.45,0.67l-0.58,-0.25l-1.51,0.13l-0.18,-1.02l1.45,-1.97l0.83,0.17l0.77,-0.44l0.2,1.01l-1.21,0.52l-0.06,0.7l0.73,0.48Z", "name": "Djibouti"}, "DK": {"path": "M452.3,246.5l-1.22,2.88l-2.11,-1.99l-0.26,-1.39l2.98,-1.2l0.61,1.7ZM447.78,242.9l-0.32,0.89l-0.89,-0.07l-1.8,3.21l0.54,2.1l-1.13,0.47l-1.58,-0.48l-0.91,-2.19l-0.07,-4.44l0.99,-2.3l2.0,-0.26l1.11,-1.38l1.3,-0.85l-0.05,1.54l-0.73,1.69l0.3,1.28l1.25,0.79Z", "name": "Denmark"}, "DE": {"path": "M453.15,278.66l-0.56,-0.42l-1.2,-0.11l-1.89,0.66l-2.12,-0.15l-0.57,0.71l-0.83,-0.67l-0.98,0.09l-2.56,-1.08l-0.49,0.15l-0.39,0.62l-1.46,-0.02l0.26,-2.16l1.24,-2.54l-0.28,-0.57l-3.51,-0.68l-0.95,-0.81l0.12,-1.49l-0.49,-1.0l0.27,-2.61l-0.38,-3.76l1.43,-0.25l0.63,-1.53l0.65,-3.87l-0.43,-1.44l0.31,-0.56l1.61,-0.18l0.34,0.68l0.67,0.07l1.7,-2.09l-0.57,-3.77l1.35,0.41l1.33,-0.45l0.28,1.46l2.27,0.9l-0.02,1.24l0.52,0.39l2.55,-0.8l1.33,-1.07l2.53,1.51l1.08,1.24l0.51,1.88l-0.61,1.39l0.88,1.43l0.58,2.06l-0.16,1.52l0.87,2.18l-0.54,0.2l-0.49,-0.34l-0.54,0.07l-0.57,0.68l-1.71,0.73l-1.01,1.02l-1.75,0.82l-0.2,0.5l0.84,2.98l2.45,2.3l-0.71,1.4l-1.0,0.83l0.33,2.27Z", "name": "Germany"}, "YE": {"path": "M528.26,376.46l0.26,-0.43l-0.22,-1.03l0.28,-0.61l-0.09,-0.91l0.92,-0.7l-0.08,-1.37l0.39,-0.76l1.01,0.48l3.33,-0.27l3.76,0.42l0.95,0.82l1.36,-0.59l1.74,-2.67l2.18,-1.11l6.86,-0.96l2.48,5.52l-1.64,0.77l-0.56,1.93l-6.23,2.19l-2.29,1.82l-1.93,0.05l-1.41,1.03l-4.24,0.75l-1.72,1.5l-3.28,0.19l-0.52,-1.19l0.02,-1.52l-1.34,-3.33Z", "name": "Yemen"}, "DZ": {"path": "M441.47,315.57l-0.34,1.19l0.39,2.88l-0.55,2.35l-1.58,1.92l0.36,2.53l1.92,1.66l0.17,0.85l1.43,1.1l1.85,7.66l0.13,1.23l-0.57,5.23l0.2,1.59l-0.88,1.03l-0.02,0.5l1.41,1.93l0.14,1.24l0.89,1.54l0.5,0.17l0.97,-0.42l1.72,1.11l0.83,1.29l-8.23,4.95l-7.23,5.24l-3.43,1.15l-2.3,0.21l-0.28,-1.63l-2.56,-1.12l-0.67,-1.28l-26.12,-18.48l0.01,-3.67l3.77,-1.98l2.44,-0.43l2.12,-0.8l1.08,-1.5l2.81,-1.11l0.34,-2.2l1.34,-0.31l1.04,-1.0l3.46,-0.73l0.36,-1.59l-0.58,-0.56l-0.83,-3.02l-0.18,-1.95l-0.8,-1.65l2.06,-1.44l2.62,-0.52l1.71,-1.32l2.31,-0.91l8.23,-0.8l1.51,0.41l2.27,-1.19l2.45,-0.02l0.91,0.65l1.38,-0.05Z", "name": "Algeria"}, "US": {"path": "M892.73,206.44l1.34,0.72l1.36,-0.5l1.85,1.36l2.21,0.69l-1.59,1.04l-2.57,-2.02l-2.38,0.18l-0.3,-0.25l0.09,-1.21ZM183.2,272.56l0.38,1.78l1.12,0.96l4.22,0.82l2.39,1.15l2.19,-0.43l2.01,0.64l-1.73,0.85l-3.49,3.04l-0.14,0.83l0.52,0.39l2.3,-0.7l1.8,1.17l5.17,-2.8l-0.37,0.89l0.24,0.53l1.35,0.45l1.71,1.35l4.7,-1.01l0.4,0.77l1.58,0.45l0.68,0.78l-1.42,0.21l-2.2,-0.37l-3.59,1.03l-2.72,3.73l0.35,0.91l0.62,-0.0l0.61,-0.75l-1.43,5.39l0.29,3.47l0.67,1.77l0.61,0.48l1.03,-0.07l0.75,-0.43l1.59,-2.19l0.13,-2.45l-0.82,-2.2l0.11,-1.33l1.2,-2.74l0.42,-0.36l0.48,0.84l0.4,-0.3l0.4,-1.6l0.59,-0.51l0.24,-0.94l1.66,0.56l1.67,1.25l-0.03,2.8l-1.28,1.3l0.02,1.21l0.87,0.37l1.67,-1.46l0.49,0.18l0.51,3.02l-2.51,4.23l0.17,0.59l1.54,0.69l1.51,0.19l1.93,-0.49l4.72,-2.41l2.16,-2.03l-0.08,-1.39l0.77,-0.26l3.91,0.4l2.14,-1.19l0.19,-0.39l-0.31,-1.71l2.31,-2.21l1.0,-0.57l8.31,-0.03l0.57,-0.94l1.9,-0.88l0.92,-1.72l0.75,-2.75l1.58,-2.29l0.94,0.69l1.44,-0.54l0.81,0.77l-0.0,4.78l1.98,3.01l-2.38,1.52l-5.36,2.37l-1.81,3.03l0.01,1.98l0.83,1.79l0.78,0.27l-6.43,1.12l-2.21,1.0l-0.21,0.48l0.45,0.28l3.52,-0.57l-2.73,0.77l-1.77,-0.26l-0.76,0.91l0.23,0.65l0.34,0.07l-0.43,1.87l-1.26,1.73l-1.46,-1.16l-0.49,-0.06l-0.18,0.46l0.52,1.74l0.61,0.64l0.03,0.92l-0.94,1.5l-1.22,-1.31l-0.28,-2.52l-0.35,-0.35l-0.42,0.27l-0.48,1.39l0.34,1.57l-0.97,-0.29l-0.48,0.22l0.16,0.5l1.54,0.91l0.1,2.78l0.78,0.52l0.53,3.76l-1.43,2.04l-2.47,0.86l-1.71,1.78l-1.31,0.27l-1.27,1.11l-0.43,1.05l-2.7,1.91l-2.64,3.21l-0.45,2.23l0.45,2.17l0.85,2.51l1.09,2.0l0.04,1.26l1.16,3.2l-0.18,2.82l-0.55,1.49l-0.47,0.22l-0.88,-0.24l-0.33,-1.01l-1.03,-0.79l-2.75,-5.4l0.46,-2.04l-0.76,-1.66l-1.95,-2.41l-1.47,-0.55l-2.38,1.23l-1.46,-1.42l-1.79,-0.75l-2.78,0.36l-2.27,-0.31l-2.03,0.23l-1.04,0.45l-0.18,0.57l0.39,0.67l0.19,1.47l-0.9,-0.23l-0.84,0.49l-1.57,-0.08l-2.08,-1.52l-2.08,0.34l-1.91,-0.65l-3.74,0.89l-2.39,2.17l-2.54,1.28l-1.45,1.47l-0.61,1.43l-0.02,1.98l0.38,1.9l-1.99,-0.55l-1.81,-0.8l-1.25,-3.25l-1.44,-1.57l-2.24,-3.73l-1.76,-1.15l-2.28,-0.01l-1.71,2.18l-1.74,-0.72l-1.16,-0.78l-1.52,-3.14l-3.94,-3.35l-4.34,-0.0l-0.4,0.4l-0.0,0.81l-6.5,0.02l-9.04,-3.34l-0.33,-0.75l-5.69,0.52l-0.43,-1.37l-1.62,-1.72l-1.14,-0.41l-0.55,-0.94l-1.27,-0.14l-1.02,-0.83l-2.22,-0.29l-0.43,-0.33l-0.36,-1.7l-2.4,-3.06l-2.02,-4.21l-0.05,-0.96l-2.93,-3.59l-0.33,-2.54l-1.3,-1.83l0.52,-2.65l-0.09,-2.87l-0.78,-2.59l0.96,-3.2l0.61,-6.46l-0.46,-4.91l-1.48,-4.8l0.09,-0.23l3.09,1.09l1.27,3.33l0.71,0.07l0.68,-1.24l-1.12,-5.71l68.79,-0.0l0.4,-0.4l0.13,-1.09ZM32.37,157.48l1.75,3.33l0.67,0.06l0.98,-1.29l3.62,0.39l-0.12,1.35l0.27,0.41l3.83,1.28l2.65,-0.7l5.14,2.3l4.86,0.72l1.87,0.93l3.47,-1.11l3.64,2.11l2.52,0.95l-0.03,56.12l0.38,0.4l2.37,0.14l2.29,1.31l3.91,5.31l0.63,0.04l2.4,-2.69l2.1,-1.34l1.18,2.24l3.95,4.14l4.1,8.6l4.22,2.91l0.06,2.46l-1.03,1.56l-1.12,-1.31l-2.06,-1.31l-0.68,-3.73l-3.26,-3.82l-1.32,-4.34l-0.33,-0.28l-6.34,-0.42l-2.8,-1.31l-5.26,-5.09l-6.77,-2.72l-3.55,0.39l-4.79,-2.25l-3.33,-2.21l-2.78,1.09l-0.25,0.43l0.46,3.15l-3.97,1.29l-2.26,1.69l-2.25,0.84l-0.29,-2.33l1.07,-4.71l2.51,-1.5l0.15,-0.53l-0.69,-1.3l-0.62,-0.11l-3.19,2.88l-1.77,3.43l-3.56,3.49l-0.04,0.53l1.65,2.14l-2.16,3.15l-5.1,3.33l-0.76,2.13l-3.78,2.28l-0.91,2.19l-2.68,1.74l-1.82,-0.27l-6.95,4.17l-3.92,1.13l2.36,-1.94l2.5,-1.4l2.58,-2.35l3.26,-0.66l1.2,-1.79l3.42,-2.69l2.56,-2.83l0.42,-3.52l1.25,-2.78l-0.09,-0.45l-0.46,-0.07l-2.63,1.33l-0.6,-0.62l-0.6,0.03l-1.02,1.31l-1.33,-1.98l-0.71,0.08l-0.3,0.77l-0.56,-1.45l-0.62,-0.17l-2.39,1.85l-1.03,-0.0l-0.18,-2.46l0.44,-1.74l-1.7,-2.14l-0.41,-0.11l-3.01,0.89l-1.94,-2.17l-1.61,-1.16l-0.11,-2.96l-1.78,-2.05l0.88,-2.78l2.01,-2.96l0.87,-2.7l1.66,-0.33l1.59,0.82l0.5,-0.12l1.86,-2.47l1.93,0.32l1.91,-1.75l-0.34,-2.97l-1.22,-1.04l1.59,-1.93l-0.33,-0.65l-1.69,0.11l-2.66,1.27l-0.72,1.08l-1.92,-1.11l-3.43,0.63l-3.41,-1.3l-1.05,-2.33l-2.87,-3.16l3.14,-2.29l5.47,-2.98l1.51,0.0l-0.29,2.67l0.42,0.44l5.29,-0.24l0.34,-0.59l-2.03,-3.88l-3.12,-2.51l-1.79,-3.25l-2.4,-2.83l-3.25,-2.04l1.19,-3.05l4.45,-0.33l3.16,-3.2l0.69,-3.62l2.43,-3.32l2.42,-0.86l4.6,-3.26l2.51,0.36l3.66,-3.91l3.4,1.47ZM37.56,239.39l-2.21,1.54l-0.94,-0.87l-0.32,-1.79l3.24,-2.14l1.37,0.26l0.77,1.05l-1.9,1.94ZM31.06,363.53l0.98,0.48l0.75,0.91l-1.77,1.1l-0.44,-1.57l0.48,-0.92ZM29.32,361.52l0.19,0.06l0.11,0.07l-0.18,0.04l-0.12,-0.16ZM25.2,359.55l0.2,0.24l-0.14,-0.02l-0.05,-0.23ZM5.91,226.07l-1.09,0.55l-2.4,-1.69l1.72,-0.6l1.6,0.37l0.17,1.37Z", "name": "United States"}, "UY": {"path": "M286.86,504.69l-0.94,1.64l-2.58,1.54l-1.67,-0.55l-1.42,0.28l-2.4,-1.28l-1.51,0.09l-1.28,-1.4l0.16,-1.65l0.56,-0.83l-0.02,-2.91l1.22,-5.04l1.18,-0.23l2.36,2.12l1.08,0.03l4.36,3.37l1.24,1.73l-0.98,1.58l0.62,1.52Z", "name": "Uruguay"}, "LB": {"path": "M510.37,325.96l-0.89,0.55l1.84,-3.86l0.6,0.08l0.24,0.7l-1.15,0.96l-0.64,1.57Z", "name": "Lebanon"}, "LA": {"path": "M689.54,378.29l-1.76,-0.75l-0.5,0.15l-0.94,1.48l-1.33,-0.65l0.62,-0.99l0.11,-2.2l-2.04,-2.45l-0.25,-2.69l-1.9,-2.14l-2.15,-0.31l-0.79,0.93l-1.12,0.06l-1.06,-0.4l-2.05,1.22l-0.04,-1.63l0.61,-2.74l-0.36,-0.49l-1.35,-0.1l-0.11,-1.26l-0.97,-0.9l0.33,-0.61l1.63,-1.34l0.39,0.36l1.33,0.07l0.42,-0.45l-0.34,-2.75l0.7,-0.21l1.28,1.86l1.11,2.41l0.36,0.23l2.82,0.02l0.72,1.72l-1.4,0.67l-0.72,0.95l0.13,0.59l2.91,1.54l3.61,5.34l1.88,1.81l0.57,1.65l-0.35,1.99Z", "name": "Lao PDR"}, "TW": {"path": "M724.01,356.0l-0.73,1.52l-0.9,-1.56l-0.26,-1.81l1.38,-2.53l1.73,-1.8l0.64,0.46l-1.86,5.73Z", "name": "Taiwan"}, "TT": {"path": "M266.64,389.17l0.28,-1.17l1.13,-0.22l-0.06,1.21l-1.35,0.18Z", "name": "Trinidad and Tobago"}, "TR": {"path": "M513.19,301.28l3.65,1.31l3.06,-0.48l2.09,0.29l3.13,-1.74l2.44,-0.15l2.19,1.49l0.35,0.95l-0.23,1.5l0.24,0.43l2.34,1.31l-1.23,0.67l-0.2,0.43l0.75,3.55l-0.42,1.23l1.16,2.15l-0.57,0.25l-0.9,-0.73l-2.91,-0.41l-1.25,0.5l-4.23,0.45l-2.81,1.15l-1.9,0.01l-1.54,-0.57l-2.56,0.81l-0.66,-0.49l-0.64,0.29l-0.12,1.59l-0.89,0.9l-0.49,-0.75l0.8,-1.4l-0.41,-0.19l-1.43,0.25l-2.0,-0.69l-2.04,1.79l-3.49,0.32l-2.14,-1.66l-2.7,-0.1l-0.87,1.34l-1.36,0.29l-2.28,-1.56l-2.71,-0.02l-1.37,-2.89l-1.7,-1.68l1.09,-2.23l-0.08,-0.46l-1.31,-1.28l2.41,-2.71l3.68,-0.13l0.36,-0.25l0.94,-2.24l4.48,0.41l3.23,-2.2l2.8,-0.91l3.98,-0.07l4.28,2.31ZM488.78,302.77l-1.7,1.44l-0.51,-0.99l1.37,-2.91l-0.78,-0.93l1.78,-0.74l1.78,0.37l0.45,1.31l1.81,0.89l-0.14,0.26l-2.76,0.17l-1.31,1.13Z", "name": "Turkey"}, "LK": {"path": "M624.16,398.87l-1.82,0.48l-0.99,-1.67l-0.42,-3.47l0.95,-3.45l1.21,0.98l2.26,4.21l-0.34,2.34l-0.85,0.58Z", "name": "Sri Lanka"}, "LV": {"path": "M489.13,238.44l0.98,0.86l0.21,2.15l0.72,2.39l-3.68,2.17l-2.21,-1.98l-1.3,-0.34l-0.27,-0.73l-0.45,-0.25l-2.41,0.44l-4.15,-0.29l-2.48,1.13l0.07,-2.68l1.15,-2.72l1.91,-1.29l2.14,3.3l2.01,-0.09l0.38,-0.35l0.45,-3.34l1.74,-0.68l3.03,2.19l2.16,0.1Z", "name": "Latvia"}, "LT": {"path": "M486.92,246.68l0.19,1.58l-2.02,1.5l-0.54,2.27l-2.48,1.47l-2.05,-0.02l-0.5,-1.08l-1.3,-0.59l-0.07,-2.33l-1.21,-0.74l-2.38,-0.69l-0.45,-3.18l2.51,-1.21l4.09,0.28l2.23,-0.39l0.52,0.88l1.23,0.27l2.22,1.99Z", "name": "Lithuania"}, "LU": {"path": "M436.07,271.5l-0.48,-0.1l0.29,-1.66l0.29,0.51l-0.1,1.25Z", "name": "Luxembourg"}, "LR": {"path": "M399.36,395.85l0.18,1.54l-0.49,1.0l0.08,0.47l2.47,1.8l-0.33,2.81l-2.65,-1.13l-5.78,-4.62l0.58,-1.32l2.1,-2.34l0.86,-0.22l0.77,1.14l-0.14,0.86l0.59,0.87l1.0,0.14l0.76,-0.99Z", "name": "Liberia"}, "LS": {"path": "M491.05,494.85l-0.48,0.15l-1.5,-1.78l1.12,-1.53l2.18,-1.51l1.52,1.34l-0.99,1.94l-1.23,0.4l-0.62,0.98Z", "name": "Lesotho"}, "TH": {"path": "M670.27,385.68l-1.41,3.9l0.15,2.01l0.38,0.36l1.38,0.07l0.9,2.05l0.55,2.34l1.4,1.45l1.61,0.38l0.96,0.97l-0.5,0.64l-1.1,0.2l-0.34,-1.18l-2.04,-1.1l-0.63,0.23l-0.63,-0.62l-0.48,-1.3l-2.55,-2.64l-0.73,0.41l0.95,-3.91l2.16,-4.25ZM670.67,384.59l-0.92,-2.2l-0.26,-2.64l-2.14,-3.1l0.72,-0.5l0.89,-2.62l-2.62,-3.66l-0.99,-1.9l0.88,-0.52l1.05,-2.63l1.74,-0.19l2.59,-1.63l0.76,0.58l0.13,1.42l0.37,0.36l1.23,0.09l-0.52,2.34l0.05,2.46l0.6,0.33l2.43,-1.45l0.77,0.4l1.47,-0.08l0.71,-0.89l1.48,0.14l1.71,1.92l0.25,2.69l1.92,2.15l-0.1,1.92l-0.61,0.87l-2.22,-0.33l-3.5,0.65l-1.6,2.14l0.36,2.6l-1.51,-0.79l-1.85,-0.01l0.28,-1.54l-0.4,-0.47l-2.21,0.02l-0.4,0.37l-0.19,2.77l-0.34,0.94Z", "name": "Thailand"}, "TF": {"path": "M596.66,558.28l-3.18,0.21l-0.05,-1.59l0.4,-1.7l1.28,0.9l2.08,0.42l-0.53,1.76Z", "name": "Fr. S. Antarctic Lands"}, "TG": {"path": "M422.7,387.47l-0.1,1.24l1.53,1.53l0.08,1.1l0.5,0.65l-0.11,5.64l0.49,1.47l-1.31,0.35l-1.02,-2.13l-0.18,-1.13l0.53,-2.2l-0.63,-1.16l-0.22,-3.7l-1.01,-1.41l0.07,-0.29l1.37,0.03Z", "name": "Togo"}, "TD": {"path": "M480.25,365.02l0.12,9.75l-2.1,0.05l-1.14,1.91l-0.69,1.65l0.34,0.73l-0.66,0.92l0.24,0.9l-0.86,1.97l0.45,0.5l0.59,-0.1l0.34,0.65l0.03,1.39l0.9,1.06l-1.45,0.43l-1.27,1.03l-1.83,2.78l-2.16,1.08l-2.31,-0.15l-0.86,0.25l-0.26,0.49l0.17,0.62l-2.11,1.69l-2.85,0.87l-1.09,-0.57l-0.73,0.67l-1.12,0.1l-1.1,-3.13l-1.25,-0.64l-1.22,-1.23l0.3,-0.65l3.01,0.04l0.35,-0.6l-1.3,-2.21l-0.08,-3.33l-0.97,-1.68l0.22,-1.06l-0.38,-0.48l-1.22,-0.04l0.0,-1.27l-0.98,-1.08l0.97,-3.05l3.25,-2.68l0.13,-3.38l0.95,-5.29l0.52,-1.1l-0.1,-0.47l-0.91,-0.8l-0.19,-0.98l-0.8,-0.6l-0.55,-3.77l2.11,-1.24l19.56,10.1Z", "name": "Chad"}, "LY": {"path": "M483.49,331.4l-0.77,1.19l0.3,1.46l-0.6,1.92l0.73,2.26l0.0,25.02l-2.48,0.01l-0.41,0.87l-19.41,-10.02l-4.41,2.35l-1.37,-1.37l-3.82,-1.13l-1.14,-1.71l-1.98,-1.28l-1.22,0.33l-0.67,-1.15l-0.16,-1.3l-1.29,-1.77l0.88,-1.24l-0.07,-4.54l0.43,-2.38l-0.86,-3.65l1.13,-0.8l0.22,-1.23l-0.21,-1.1l3.49,-2.78l0.28,-2.06l2.44,0.85l1.18,-0.22l1.97,0.47l3.14,1.26l1.37,2.7l5.71,1.77l2.64,1.43l1.62,-0.76l1.29,-1.41l-0.45,-2.46l0.67,-1.22l1.67,-1.29l1.56,-0.37l3.13,0.56l1.09,1.36l3.98,0.83l0.38,0.6Z", "name": "Libya"}, "AE": {"path": "M550.76,353.19l1.89,-0.42l3.84,0.02l4.77,-4.92l0.19,0.38l0.26,1.67l-0.82,0.01l-0.39,0.35l-0.08,2.12l-0.82,0.64l-0.01,1.0l-0.67,1.03l-0.39,1.45l-7.07,-1.29l-0.71,-2.04Z", "name": "United Arab Emirates"}, "VE": {"path": "M240.68,386.52l0.53,0.75l-0.02,1.07l-1.07,1.78l0.95,2.01l0.42,0.23l1.4,-0.44l0.56,-1.84l-0.77,-1.17l-0.1,-1.49l2.83,-0.94l0.26,-0.49l-0.28,-0.97l0.3,-0.28l0.66,1.32l1.96,0.26l1.4,1.23l0.08,0.69l0.39,0.35l4.81,-0.23l1.49,1.12l1.92,0.31l1.67,-0.84l0.22,-0.61l3.44,-0.14l-0.18,0.56l0.86,1.2l2.19,0.35l1.68,1.1l0.37,1.87l0.41,0.32l1.56,0.17l-1.66,1.36l-0.22,0.92l0.66,0.98l-1.67,0.54l-0.3,0.4l0.04,0.99l-0.56,0.57l-0.01,0.55l1.85,2.27l-0.66,0.69l-4.47,1.29l-0.72,0.54l-3.69,-0.9l-0.71,0.27l-0.02,0.7l0.91,0.53l-0.08,1.55l0.35,1.58l0.35,0.31l1.66,0.17l-1.3,0.52l-0.48,1.13l-2.68,0.91l-0.6,0.77l-1.57,0.13l-1.17,-1.13l-0.8,-2.52l-1.25,-1.26l1.02,-1.23l-1.29,-2.95l0.18,-1.62l1.0,-2.21l-0.2,-0.49l-1.14,-0.47l-4.02,0.36l-1.82,-2.11l-1.57,-0.33l-2.99,0.23l-1.06,-0.98l0.25,-1.24l-0.2,-1.02l-0.59,-0.69l-0.29,-1.06l-1.08,-0.39l0.78,-2.81l1.9,-2.12Z", "name": "Venezuela"}, "AF": {"path": "M600.86,316.06l-1.73,1.47l0.72,3.0l-1.1,1.13l-0.02,1.35l-0.49,0.78l-2.15,-0.09l-0.37,0.58l0.8,1.63l-1.4,0.74l-1.06,1.8l0.07,1.81l-0.66,0.56l-0.91,-0.22l-1.91,0.38l-0.48,0.81l-1.88,0.14l-1.49,1.9l-0.08,2.2l-2.91,1.07l-1.64,-0.24l-0.72,0.58l-1.41,-0.31l-2.4,0.41l-3.54,-1.24l1.98,-2.49l-0.21,-1.88l-0.3,-0.34l-1.63,-0.42l-0.19,-1.69l-0.76,-2.19l0.96,-1.48l-0.18,-0.59l-0.75,-0.31l1.48,-5.22l2.12,0.97l2.14,-0.38l0.74,-1.45l1.77,-0.42l1.54,-1.0l0.62,-2.51l1.88,-0.54l0.48,-0.87l0.93,0.61l2.13,0.12l2.55,1.01l1.96,-0.89l0.64,0.46l0.58,-0.13l0.69,-1.23l1.58,-0.09l0.47,-0.64l0.24,-1.17l0.79,-0.81l0.81,0.43l-0.19,0.66l0.71,0.58l-0.09,2.61l1.28,1.05ZM601.25,315.96l1.86,-0.88l1.42,-1.28l3.93,0.22l0.11,0.23l-2.26,0.81l-5.06,0.9Z", "name": "Afghanistan"}, "IQ": {"path": "M530.81,314.51l0.79,0.72l1.26,-0.3l1.46,3.35l1.63,1.01l0.15,1.38l-1.23,1.13l-0.53,2.67l1.73,2.85l3.12,1.72l1.16,2.02l-0.38,1.98l0.39,0.48l0.41,-0.0l0.02,1.16l0.79,1.02l-2.51,-0.11l-1.71,2.58l-4.3,-0.21l-7.02,-5.78l-3.73,-2.06l-2.89,-0.78l-0.86,-3.1l5.46,-3.23l0.95,-3.7l-0.2,-2.14l1.28,-0.77l1.22,-1.86l0.86,-0.39l2.67,0.37Z", "name": "Iraq"}, "IS": {"path": "M384.17,190.14l-0.45,3.88l2.67,3.88l-3.04,4.17l-9.15,4.83l-9.47,-2.42l1.99,-2.05l-0.1,-0.63l-4.53,-2.38l3.43,-0.89l0.3,-0.41l-0.11,-1.75l-0.3,-0.36l-4.81,-1.29l1.43,-3.39l3.37,-0.82l3.74,4.02l0.56,0.03l3.59,-3.17l2.9,1.61l0.45,-0.04l3.95,-3.21l3.58,0.38Z", "name": "Iceland"}, "IR": {"path": "M533.43,314.24l-1.29,-2.38l0.43,-1.06l-0.72,-3.4l1.03,-0.56l0.32,0.9l1.26,1.49l2.06,0.57l1.12,-0.18l2.89,-2.33l0.6,-0.15l0.42,0.54l-0.74,1.37l0.06,0.46l1.56,1.68l0.66,0.05l0.67,1.99l2.55,0.89l1.88,1.61l3.7,0.53l3.91,-0.83l0.47,-0.8l2.17,-0.66l1.65,-1.68l1.49,0.08l1.19,-0.57l1.57,0.26l2.84,1.62l1.88,0.32l2.77,2.69l1.78,0.2l0.18,2.19l-1.69,5.93l0.23,0.49l0.64,0.26l-0.85,1.58l0.81,2.33l0.19,1.83l0.3,0.35l1.63,0.43l0.16,1.43l-2.16,2.5l-0.01,0.51l2.21,3.19l2.35,1.3l0.06,2.26l1.24,0.74l0.12,0.75l-3.31,1.33l-1.08,3.14l-9.68,-1.74l-0.99,-3.18l-1.43,-0.75l-2.18,0.48l-2.47,1.31l-2.82,-0.86l-2.46,-2.11l-2.41,-0.84l-3.42,-6.37l-0.49,-0.2l-1.17,0.41l-1.43,-0.86l-0.51,0.09l-0.64,0.77l-0.97,-1.07l-0.02,-1.4l-0.71,-0.39l0.27,-1.92l-1.29,-2.25l-3.13,-1.73l-1.59,-2.62l0.51,-2.08l1.3,-1.32l-0.19,-1.79l-1.73,-1.17l-1.57,-3.6Z", "name": "Iran"}, "AM": {"path": "M537.0,308.96l-0.27,0.03l-1.24,-2.34l-0.92,0.01l-0.62,-0.73l-0.69,-0.08l-0.96,-0.89l-1.58,-0.69l0.2,-1.3l-0.28,-0.9l2.73,-0.41l1.13,1.15l-0.21,1.0l1.06,0.9l-0.5,0.74l0.08,0.53l2.05,1.37l0.04,1.62Z", "name": "Armenia"}, "AL": {"path": "M470.32,297.19l0.73,0.03l0.93,0.99l0.13,0.95l-0.3,1.27l0.36,1.43l1.02,0.9l-1.82,3.2l-0.18,-0.65l-1.26,-1.0l-0.19,-1.36l0.53,-3.17l-0.55,-1.64l0.61,-0.94Z", "name": "Albania"}, "AO": {"path": "M461.55,429.93l1.26,3.16l1.94,2.36l2.47,-0.54l1.25,0.32l0.44,-0.18l0.93,-1.92l1.31,-0.08l0.41,-0.44l0.47,-0.0l-0.1,0.41l0.39,0.49l2.65,-0.02l0.03,1.2l0.48,1.02l-0.34,1.52l0.18,1.56l0.83,1.04l-0.13,2.87l0.54,0.39l3.96,-0.41l-0.1,1.81l0.39,1.06l-0.24,1.45l-4.7,-0.03l-0.4,0.39l-0.12,8.23l2.93,3.55l-3.84,0.9l-5.89,-0.36l-1.88,-1.27l-10.47,0.23l-1.3,-1.03l-1.85,-0.16l-2.4,0.78l-0.15,-1.08l0.33,-2.2l1.0,-3.5l1.35,-3.24l2.24,-2.82l0.33,-2.07l-0.13,-1.54l-0.8,-1.08l-1.21,-2.88l0.87,-1.62l-1.27,-4.13l-1.17,-1.53l2.47,-0.63l7.03,0.03ZM451.71,428.77l-0.47,-1.26l1.25,-1.11l0.32,0.3l-0.99,1.03l-0.12,1.04Z", "name": "Angola"}, "AR": {"path": "M258.05,471.85l1.38,1.83l0.68,-0.08l0.87,-1.93l2.39,0.09l4.94,4.92l2.17,0.51l2.99,1.99l2.47,1.04l0.26,0.88l-2.38,4.1l0.23,0.58l5.39,1.21l2.13,-0.46l2.46,-2.25l0.49,-2.47l0.76,-0.32l0.98,1.25l-0.04,1.9l-3.67,2.62l-2.85,2.79l-3.42,4.08l-1.3,5.37l0.01,2.9l-0.54,0.77l-0.36,3.52l3.15,2.82l-0.31,1.9l1.54,1.59l-0.1,1.23l-2.3,3.86l-3.55,1.64l-4.91,0.65l-2.7,-0.32l-0.43,0.5l0.5,1.83l-0.49,2.34l0.4,1.59l-1.21,0.94l-2.34,0.42l-2.29,-1.15l-1.41,0.93l0.41,3.97l1.69,1.02l1.41,-0.77l0.39,0.92l-2.08,0.99l-2.01,2.14l-0.47,3.69l-0.49,1.57l-2.34,0.12l-2.08,2.01l-0.63,3.07l2.46,2.67l2.21,0.74l-0.73,2.83l-2.84,2.04l-1.73,4.57l-2.18,1.47l-1.15,1.98l0.77,4.43l1.16,1.7l-2.44,-0.66l-5.82,-0.52l-0.91,-2.06l0.05,-2.9l-0.46,-0.4l-1.41,0.21l-0.69,-1.12l-0.2,-3.82l1.89,-1.73l0.79,-2.4l-0.26,-1.97l1.31,-3.13l0.91,-4.79l-0.23,-1.96l1.06,-0.95l-0.27,-1.32l-1.01,-0.76l0.63,-1.12l-0.05,-0.46l-1.05,-1.22l-0.53,-3.58l0.97,-0.92l-0.42,-4.02l1.21,-6.04l1.53,-1.49l-0.75,-3.06l-0.01,-2.68l1.79,-1.91l0.05,-2.76l1.43,-3.06l0.01,-2.77l-0.69,-0.77l-1.09,-4.84l1.48,-2.87l-0.19,-2.93l0.85,-2.48l1.59,-2.58l1.73,-1.72l0.05,-0.51l-0.61,-0.89l0.45,-0.89l-0.07,-4.37l2.71,-1.48l0.86,-2.84l-0.22,-0.73l1.77,-2.07l2.9,0.58ZM256.68,580.89l-1.95,0.18l-1.42,-1.53l-3.82,-0.12l-0.0,-7.37l1.57,3.7l3.26,2.57l3.18,1.01l-0.81,1.56Z", "name": "Argentina"}, "AU": {"path": "M705.79,484.09l0.27,0.04l0.18,-0.47l-0.49,-1.51l0.92,1.16l0.45,0.15l0.28,-0.39l-0.09,-1.61l-1.99,-3.77l1.09,-3.43l-0.24,-1.62l0.34,-0.64l0.38,1.08l0.43,-0.19l0.99,-1.75l1.91,-0.85l1.29,-1.18l1.81,-0.93l0.95,-0.17l0.93,0.27l1.92,-0.97l1.46,-0.29l1.03,-0.82l1.44,0.04l2.78,-0.86l1.36,-1.18l0.71,-1.48l1.41,-1.28l0.3,-2.63l1.27,-1.61l0.78,1.67l0.54,0.19l1.07,-0.52l0.15,-0.59l-0.73,-1.02l0.45,-0.73l0.78,0.4l0.58,-0.3l0.28,-1.84l1.87,-2.17l1.12,-0.39l0.28,-0.58l0.62,0.17l0.5,-0.36l0.03,-0.38l1.87,-0.58l1.65,1.06l1.35,1.49l3.4,0.39l0.44,-0.54l-0.46,-1.24l1.05,-1.82l1.04,-0.62l0.14,-0.55l-0.25,-0.41l0.88,-1.19l1.31,-0.78l1.31,0.27l2.1,-0.48l0.31,-0.4l-0.05,-1.31l-0.92,-0.78l1.48,0.56l1.41,1.08l2.11,0.65l0.81,-0.21l1.4,0.71l1.69,-0.67l0.8,0.19l0.64,-0.33l0.71,0.78l-1.33,1.96l-0.71,0.07l-0.35,0.51l0.24,0.87l-1.52,2.38l0.12,1.06l2.15,1.66l1.97,0.86l3.04,2.4l1.97,0.66l0.54,0.89l2.72,0.87l1.84,-1.12l2.07,-6.05l-0.43,-3.63l0.3,-1.75l0.47,-0.87l-0.32,-0.69l1.09,-3.31l0.46,-0.47l0.4,0.71l0.17,1.52l0.65,0.53l0.15,1.04l0.85,1.22l0.12,2.41l0.9,2.03l0.57,0.18l1.3,-0.79l1.69,1.73l-0.2,1.09l0.53,2.23l0.39,1.32l0.68,0.49l0.6,1.99l-0.2,1.51l0.81,1.79l2.87,1.56l3.14,2.21l-0.12,0.78l1.38,1.62l0.95,2.84l0.58,0.22l0.71,-0.42l0.8,0.92l0.61,0.01l0.46,2.48l4.82,4.87l0.66,2.1l-0.07,3.44l1.15,2.31l-0.13,2.37l-1.1,3.88l0.04,1.73l-0.48,2.02l-1.05,2.56l-1.9,1.57l-1.73,3.77l-2.38,6.57l-0.24,3.08l-1.15,0.88l-2.86,0.16l-2.31,1.3l-2.5,2.46l-1.81,-1.24l-1.29,-0.49l0.31,-1.32l-0.55,-0.46l-1.5,0.69l-2.01,2.12l-7.1,-2.39l-1.49,-1.79l-1.13,-4.06l-1.45,-1.37l-1.84,-0.28l0.58,-1.28l-0.61,-2.26l-0.73,-0.1l-1.14,1.96l-0.94,0.24l0.6,-0.77l0.44,-1.84l0.99,-1.67l-0.2,-2.22l-0.28,-0.35l-0.43,0.13l-2.0,2.51l-1.51,1.0l-0.93,2.15l-1.35,-0.87l-0.01,-1.63l-1.57,-2.18l-1.11,-0.96l0.27,-0.39l-0.13,-0.58l-3.21,-1.8l-1.84,-0.13l-2.55,-1.44l-4.58,0.3l-6.02,2.02l-2.54,-0.14l-2.62,1.5l-2.13,0.67l-1.49,2.78l-3.48,0.33l-2.3,-0.54l-3.48,0.46l-1.6,1.58l-0.81,-0.03l-2.36,1.75l-3.24,-0.11l-3.72,-2.38l0.04,-1.18l1.19,-0.49l0.48,-0.93l0.21,-3.17l-0.28,-1.75l-1.34,-3.02l-0.39,-1.56l0.06,-1.8l-0.96,-1.79l-0.17,-1.0l-1.02,-1.04l-0.29,-2.09l-1.15,-1.85ZM784.91,527.24l2.67,1.14l3.23,-1.06l1.08,0.16l0.16,3.5l-0.85,1.25l-0.18,1.86l-0.27,-0.29l-0.62,0.04l-1.56,2.15l-1.66,-0.2l-1.41,-2.68l-0.37,-2.29l-1.4,-2.82l0.04,-0.96l1.14,0.2Z", "name": "Australia"}, "AT": {"path": "M462.92,275.34l0.01,2.75l-1.06,0.01l-0.34,0.61l0.39,0.64l-1.07,2.55l-2.0,0.08l-1.34,0.81l-5.27,-1.14l-0.48,-1.1l-0.47,-0.23l-2.47,0.64l-0.42,0.58l-2.45,-0.51l-0.75,-0.44l0.44,-1.16l1.11,0.9l0.63,-0.17l0.25,-0.69l1.91,0.14l1.87,-0.66l0.97,0.09l0.68,0.66l0.65,-0.15l0.25,-0.83l-0.31,-2.16l0.82,-0.52l0.68,-1.35l1.49,0.98l0.52,-0.07l1.34,-1.47l0.61,-0.2l1.79,1.07l1.3,-0.12l0.74,0.46Z", "name": "Austria"}, "IN": {"path": "M623.36,335.51l-1.27,1.12l-0.97,2.68l0.21,0.5l8.04,4.05l3.43,0.39l1.57,1.44l4.92,0.91l2.18,-0.04l0.38,-0.3l0.29,-1.28l-0.32,-1.72l0.15,-0.92l0.82,-0.32l0.44,2.59l2.28,1.07l1.78,-0.4l4.14,0.1l0.38,-0.36l0.18,-1.73l-0.53,-0.69l1.4,-0.31l2.25,-2.09l2.69,-1.7l1.92,0.64l1.8,-1.03l0.8,1.22l-0.69,0.98l0.26,0.63l2.42,0.38l0.09,0.52l-0.83,0.77l0.13,1.14l-1.53,-0.3l-3.24,1.94l-0.12,1.84l-1.32,2.23l-0.17,1.44l-0.93,1.89l-1.63,-0.52l-0.52,0.37l-0.09,2.72l-0.56,1.13l0.2,0.85l-0.53,0.28l-1.18,-3.85l-1.08,-0.27l-0.38,0.31l-0.24,1.03l-0.66,-0.68l0.55,-1.12l1.21,-0.35l1.15,-2.33l-0.23,-0.56l-1.58,-0.49l-4.33,-0.29l-0.19,-1.63l-0.35,-0.35l-1.11,-0.13l-1.91,-1.16l-0.57,0.17l-0.88,1.89l0.11,0.48l1.38,1.12l-1.11,0.73l-0.69,1.14l0.18,0.55l1.24,0.59l-0.32,1.59l0.85,2.01l0.36,2.08l-0.22,0.62l-4.58,0.54l-0.33,0.42l0.13,1.86l-1.18,1.39l-3.65,1.85l-2.79,3.1l-4.32,3.33l-0.18,1.29l-4.65,1.82l-0.77,2.19l0.64,5.37l-1.06,2.51l-0.01,3.97l-1.24,0.28l-1.14,1.94l0.39,0.85l-1.69,0.53l-1.04,1.84l-0.65,0.47l-2.06,-2.06l-2.1,-6.05l-2.2,-3.67l-1.05,-4.8l-2.29,-3.61l-1.76,-8.34l0.01,-3.18l-0.49,-2.59l-0.55,-0.29l-3.53,1.56l-1.52,-0.28l-2.87,-2.86l0.86,-0.7l0.08,-0.54l-0.74,-1.06l-2.68,-2.13l1.26,-1.38l5.33,0.01l0.39,-0.48l-0.5,-2.37l-1.42,-1.51l-0.27,-2.01l-1.44,-1.26l2.33,-2.5l3.05,0.07l2.62,-2.99l1.6,-2.96l2.4,-2.88l0.06,-2.16l1.98,-1.58l-0.01,-0.64l-1.93,-1.4l-0.82,-1.91l-0.81,-2.4l0.91,-0.97l3.58,0.7l2.93,-0.45l2.32,-2.35l2.31,3.07l-0.24,2.31l0.99,1.68l-0.05,0.92l-1.34,-0.3l-0.48,0.47l0.7,3.26l2.61,2.09l3.02,1.77Z", "name": "India"}, "TZ": {"path": "M495.56,426.32l2.8,-3.13l-0.02,-0.82l-0.64,-1.3l0.68,-0.52l0.14,-1.47l-0.76,-1.25l0.31,-0.11l2.26,0.03l-0.51,2.76l0.76,1.3l0.5,0.12l1.05,-0.53l1.19,-0.12l0.61,0.24l1.43,-0.62l0.1,-0.67l-0.71,-0.62l1.57,-1.7l8.65,4.86l0.32,1.53l3.34,2.33l-1.05,2.81l0.13,1.61l1.63,1.12l-0.6,1.77l-0.01,2.33l1.89,4.05l0.57,0.44l-1.47,1.09l-2.61,0.95l-1.43,-0.04l-1.06,0.77l-2.29,0.36l-2.87,-0.69l-0.83,0.07l-0.64,-0.75l-0.31,-2.8l-1.32,-1.36l-3.25,-0.77l-3.96,-1.59l-1.18,-2.42l-0.32,-1.75l-1.76,-1.49l0.42,-1.05l-0.44,-0.89l0.08,-0.96l-0.46,-0.58l0.06,-0.56Z", "name": "Tanzania"}, "AZ": {"path": "M539.27,301.57l1.33,0.36l0.44,-0.21l0.4,-0.78l1.11,-1.01l2.3,3.71l1.5,0.55l-1.32,0.17l-0.34,0.33l-0.81,3.49l-0.98,1.01l0.05,1.26l-1.28,-1.27l0.73,-1.34l-0.78,-1.39l-1.51,0.17l-2.32,1.87l-0.04,-1.43l-2.05,-1.48l0.5,-0.74l-0.07,-0.53l-1.07,-0.91l0.33,-0.54l-0.14,-0.55l-1.17,-1.02l1.91,0.73l1.71,0.07l0.37,-0.88l-1.01,-1.48l0.2,-0.14l0.4,0.06l1.63,1.92ZM533.76,306.94l0.63,0.52l0.69,-0.0l0.63,1.35l-0.71,-0.18l-1.25,-1.69Z", "name": "Azerbaijan"}, "IE": {"path": "M405.07,254.34l0.37,2.67l-1.78,3.47l-4.21,2.28l-2.89,-0.5l1.83,-4.09l-1.24,-4.04l4.62,-4.68l0.33,1.5l-0.5,2.21l0.41,0.49l1.45,-0.06l1.61,0.75Z", "name": "Ireland"}, "ID": {"path": "M756.47,417.79l0.69,4.01l2.79,1.78l0.51,-0.1l2.04,-2.59l2.71,-1.43l2.05,-0.0l3.9,1.73l2.46,0.45l0.08,15.16l-1.75,-1.55l-2.54,-0.51l-0.88,0.72l-2.32,0.06l0.69,-1.33l1.45,-0.64l0.23,-0.46l-0.65,-2.74l-1.24,-2.22l-5.04,-2.3l-2.09,-0.23l-3.68,-2.27l-0.55,0.13l-0.65,1.07l-0.52,0.12l-0.55,-1.89l-1.21,-0.78l1.84,-0.62l1.72,0.05l0.39,-0.52l-0.21,-0.66l-0.38,-0.28l-3.45,-0.0l-1.13,-1.48l-2.1,-0.43l-0.52,-0.61l2.69,-0.48l1.28,-0.78l3.66,0.94l0.3,0.71ZM757.91,430.25l-0.62,0.82l-0.1,-0.8l0.59,-1.12l0.13,1.1ZM747.38,422.88l0.34,0.72l-1.22,-0.57l-4.68,-0.1l0.27,-0.62l2.78,-0.09l2.52,0.67ZM741.05,415.14l-0.67,-2.88l0.64,-2.01l0.41,0.86l1.21,0.18l0.16,0.7l-0.1,1.68l-0.84,-0.16l-0.46,0.3l-0.34,1.34ZM739.05,423.4l-0.5,0.45l-1.34,-0.36l-0.17,-0.37l1.73,-0.08l0.27,0.36ZM721.45,414.41l-0.19,1.97l2.24,2.23l0.54,0.02l1.27,-1.07l2.75,-0.5l-0.9,1.21l-2.11,0.93l-0.16,0.6l2.22,3.01l-0.3,1.07l1.36,1.75l-2.26,0.85l-0.28,-0.31l0.12,-1.19l-1.64,-1.34l0.17,-2.24l-0.56,-0.39l-1.67,0.76l-0.23,0.39l0.3,6.18l-1.1,0.25l-0.69,-0.47l0.64,-2.21l-0.39,-2.42l-0.39,-0.34l-0.8,-0.01l-0.58,-1.29l0.98,-1.6l0.35,-1.96l1.32,-3.87ZM728.59,426.17l0.38,0.5l-0.02,1.28l-0.88,0.49l-0.53,-0.48l1.04,-1.79ZM729.04,416.88l0.27,-0.05l-0.02,0.13l-0.24,-0.08ZM721.68,413.95l0.16,-0.32l1.89,-1.65l1.83,0.68l3.16,0.35l2.94,-0.1l2.39,-1.66l-1.73,2.13l-1.66,0.43l-2.41,-0.48l-4.17,0.13l-2.39,0.51ZM730.55,440.42l1.11,-1.94l2.02,-0.82l0.08,0.62l-1.45,1.68l-1.77,0.46ZM728.12,435.8l-0.1,0.38l-3.46,0.66l-2.91,-0.27l-0.0,-0.25l1.54,-0.41l1.66,0.73l1.67,-0.19l1.61,-0.65ZM722.9,440.18l-0.64,0.03l-2.26,-1.21l1.12,-0.24l1.78,1.42ZM716.26,435.69l0.88,0.51l1.28,-0.17l0.2,0.35l-4.65,0.73l0.4,-0.67l1.15,-0.02l0.75,-0.74ZM711.66,423.74l-0.38,-0.16l-2.54,1.01l-1.12,-1.44l-1.69,-0.13l-1.16,-0.75l-3.04,0.77l-1.1,-1.15l-3.31,-0.11l-0.35,-3.05l-1.35,-0.95l-1.11,-1.98l-0.33,-2.06l0.27,-2.14l0.9,-1.01l0.37,1.15l2.09,1.49l1.53,-0.48l1.82,0.08l1.38,-1.19l1.0,-0.18l2.28,0.67l2.26,-0.53l1.52,-3.64l1.01,-0.99l0.78,-2.57l4.1,0.31l-1.11,1.77l0.02,0.46l1.7,2.2l-0.23,1.39l2.07,1.71l-2.33,0.42l-0.88,1.9l0.1,2.05l-2.4,1.9l-0.06,2.45l-0.7,2.79ZM692.58,431.94l0.35,0.26l4.8,0.25l0.78,-0.97l4.17,1.09l1.13,1.69l3.69,0.45l2.14,1.05l-1.8,0.61l-2.77,-1.0l-4.8,-0.12l-5.24,-1.42l-1.84,-0.25l-1.11,0.3l-4.26,-0.97l-0.7,-1.14l-1.59,-0.13l1.18,-1.66l2.74,0.13l2.87,1.13l0.26,0.69ZM685.53,429.08l-2.22,0.04l-2.06,-2.04l-3.15,-2.01l-2.93,-3.52l-3.11,-5.33l-2.2,-2.12l-1.64,-4.06l-2.32,-1.69l-1.27,-2.07l-1.96,-1.5l-2.51,-2.65l-0.11,-0.66l4.81,0.53l2.15,2.38l3.31,2.74l2.35,2.66l2.7,0.17l1.95,1.59l1.54,2.17l1.59,0.95l-0.84,1.71l0.15,0.52l1.44,0.87l0.79,0.1l0.4,1.58l0.87,1.4l1.96,0.39l1.0,1.31l-0.6,3.01l-0.09,3.51Z", "name": "Indonesia"}, "UA": {"path": "M493.77,283.66l1.85,0.21l0.66,-0.27l0.1,-0.68l-0.25,-0.87l-0.8,-0.85l-0.34,-1.43l-0.87,-0.71l0.01,-1.37l-1.13,-1.01l-1.16,-0.23l-2.07,-1.18l-1.66,0.37l-0.67,0.55l-0.9,-0.0l-0.86,0.91l-1.69,0.33l-0.76,0.47l-1.18,-0.82l-3.05,-0.42l-0.9,0.48l-0.22,-0.62l-1.16,-0.85l0.86,-1.88l0.25,0.1l0.53,-0.51l-0.57,-1.53l2.08,-2.96l1.38,-0.69l0.26,-1.34l-1.09,-3.02l0.9,-0.18l1.27,-1.02l1.78,-0.08l2.45,0.31l2.87,0.98l1.87,0.08l0.85,0.53l1.06,-0.47l0.78,0.77l2.17,-0.18l0.91,0.35l0.54,-0.34l0.15,-1.9l0.58,-0.67l2.82,-0.06l0.87,-0.86l3.0,-0.22l1.29,1.86l-0.53,0.89l0.21,1.25l0.36,0.33l1.78,0.17l0.93,2.49l3.18,1.38l1.95,-0.52l1.69,1.77l1.39,-0.04l3.36,1.15l0.02,0.75l-0.97,1.91l0.49,2.26l-0.28,0.89l-2.37,0.33l-1.29,1.04l-0.21,1.6l-1.85,0.32l-1.58,1.12l-2.41,0.24l-2.16,1.36l-0.19,0.36l0.32,2.54l1.49,0.93l1.92,-0.16l-0.18,0.47l-2.65,0.61l-3.21,1.92l-0.89,-0.46l0.44,-1.33l-0.24,-0.5l-2.27,-0.86l2.41,-1.32l0.12,-0.62l-0.93,-0.95l-3.62,-0.85l-0.14,-1.08l-0.47,-0.34l-2.32,0.45l-2.91,4.52l-1.19,-0.45l-0.98,0.48l-0.36,-0.21l1.35,-2.93Z", "name": "Ukraine"}, "QA": {"path": "M549.32,350.8l-0.76,-0.24l-0.14,-1.72l0.84,-1.35l0.47,0.54l0.04,1.41l-0.45,1.36Z", "name": "Qatar"}, "MZ": {"path": "M508.58,448.77l-0.34,-2.6l0.51,-2.07l3.55,0.64l2.51,-0.38l1.02,-0.76l1.49,0.01l2.74,-0.99l1.66,-1.21l0.51,9.32l0.41,1.25l-0.68,1.69l-0.93,1.74l-1.5,1.52l-5.16,2.32l-2.78,2.78l-1.02,0.54l-1.71,1.84l-0.98,0.59l-0.35,2.45l1.16,1.99l0.49,2.24l0.43,0.31l-0.06,2.14l-0.39,1.21l0.5,0.73l-0.25,0.78l-0.92,0.86l-5.13,2.47l-1.22,1.39l0.21,1.17l0.59,0.4l-0.11,0.78l-1.22,-0.02l-0.73,-3.1l0.42,-3.19l-1.78,-5.56l2.49,-2.89l0.69,-1.93l0.44,-0.43l0.28,-1.57l-0.39,-0.94l0.59,-3.72l-0.01,-3.32l-1.48,-1.17l-1.2,-0.23l-1.74,-1.18l-1.92,0.0l-0.3,-2.12l7.06,-1.98l1.28,1.1l0.89,-0.1l0.67,0.45l0.1,0.75l-0.51,1.3l0.19,1.83l1.75,1.86l0.65,-0.13l0.71,-1.68l1.17,-0.86l-0.26,-3.51l-1.05,-1.87l-1.04,-0.95Z", "name": "Mozambique"}}, "height": 583.0802520919394, "projection": {"type": "merc", "centralMeridian": 11.5}, "width": 900.0});
/*!
 * @copyright Copyright (c) 2017 IcoMoon.io
 * @license   Licensed under MIT license
 *            See https://github.com/Keyamoon/svgxuse
 * @version   1.2.6
 */
/*jslint browser: true */
/*global XDomainRequest, MutationObserver, window */
(function () {
    "use strict";
    if (typeof window !== "undefined" && window.addEventListener) {
        var cache = Object.create(null); // holds xhr objects to prevent multiple requests
        var checkUseElems;
        var tid; // timeout id
        var debouncedCheck = function () {
            clearTimeout(tid);
            tid = setTimeout(checkUseElems, 100);
        };
        var unobserveChanges = function () {
            return;
        };
        var observeChanges = function () {
            var observer;
            window.addEventListener("resize", debouncedCheck, false);
            window.addEventListener("orientationchange", debouncedCheck, false);
            if (window.MutationObserver) {
                observer = new MutationObserver(debouncedCheck);
                observer.observe(document.documentElement, {
                    childList: true,
                    subtree: true,
                    attributes: true
                });
                unobserveChanges = function () {
                    try {
                        observer.disconnect();
                        window.removeEventListener("resize", debouncedCheck, false);
                        window.removeEventListener("orientationchange", debouncedCheck, false);
                    } catch (ignore) {}
                };
            } else {
                document.documentElement.addEventListener("DOMSubtreeModified", debouncedCheck, false);
                unobserveChanges = function () {
                    document.documentElement.removeEventListener("DOMSubtreeModified", debouncedCheck, false);
                    window.removeEventListener("resize", debouncedCheck, false);
                    window.removeEventListener("orientationchange", debouncedCheck, false);
                };
            }
        };
        var createRequest = function (url) {
            // In IE 9, cross origin requests can only be sent using XDomainRequest.
            // XDomainRequest would fail if CORS headers are not set.
            // Therefore, XDomainRequest should only be used with cross origin requests.
            function getOrigin(loc) {
                var a;
                if (loc.protocol !== undefined) {
                    a = loc;
                } else {
                    a = document.createElement("a");
                    a.href = loc;
                }
                return a.protocol.replace(/:/g, "") + a.host;
            }
            var Request;
            var origin;
            var origin2;
            if (window.XMLHttpRequest) {
                Request = new XMLHttpRequest();
                origin = getOrigin(location);
                origin2 = getOrigin(url);
                if (Request.withCredentials === undefined && origin2 !== "" && origin2 !== origin) {
                    Request = XDomainRequest || undefined;
                } else {
                    Request = XMLHttpRequest;
                }
            }
            return Request;
        };
        var xlinkNS = "http://www.w3.org/1999/xlink";
        checkUseElems = function () {
            var base;
            var bcr;
            var fallback = ""; // optional fallback URL in case no base path to SVG file was given and no symbol definition was found.
            var hash;
            var href;
            var i;
            var inProgressCount = 0;
            var isHidden;
            var Request;
            var url;
            var uses;
            var xhr;
            function observeIfDone() {
                // If done with making changes, start watching for chagnes in DOM again
                inProgressCount -= 1;
                if (inProgressCount === 0) { // if all xhrs were resolved
                    unobserveChanges(); // make sure to remove old handlers
                    observeChanges(); // watch for changes to DOM
                }
            }
            function attrUpdateFunc(spec) {
                return function () {
                    if (cache[spec.base] !== true) {
                        spec.useEl.setAttributeNS(xlinkNS, "xlink:href", "#" + spec.hash);
                        if (spec.useEl.hasAttribute("href")) {
                            spec.useEl.setAttribute("href", "#" + spec.hash);
                        }
                    }
                };
            }
            function onloadFunc(xhr) {
                return function () {
                    var body = document.body;
                    var x = document.createElement("x");
                    var svg;
                    xhr.onload = null;
                    x.innerHTML = xhr.responseText;
                    svg = x.getElementsByTagName("svg")[0];
                    if (svg) {
                        svg.setAttribute("aria-hidden", "true");
                        svg.style.position = "absolute";
                        svg.style.width = 0;
                        svg.style.height = 0;
                        svg.style.overflow = "hidden";
                        body.insertBefore(svg, body.firstChild);
                    }
                    observeIfDone();
                };
            }
            function onErrorTimeout(xhr) {
                return function () {
                    xhr.onerror = null;
                    xhr.ontimeout = null;
                    observeIfDone();
                };
            }
            unobserveChanges(); // stop watching for changes to DOM
            // find all use elements
            uses = document.getElementsByTagName("use");
            for (i = 0; i < uses.length; i += 1) {
                try {
                    bcr = uses[i].getBoundingClientRect();
                } catch (ignore) {
                    // failed to get bounding rectangle of the use element
                    bcr = false;
                }
                href = uses[i].getAttribute("href")
                        || uses[i].getAttributeNS(xlinkNS, "href")
                        || uses[i].getAttribute("xlink:href");
                if (href && href.split) {
                    url = href.split("#");
                } else {
                    url = ["", ""];
                }
                base = url[0];
                hash = url[1];
                isHidden = bcr && bcr.left === 0 && bcr.right === 0 && bcr.top === 0 && bcr.bottom === 0;
                if (bcr && bcr.width === 0 && bcr.height === 0 && !isHidden) {
                    // the use element is empty
                    // if there is a reference to an external SVG, try to fetch it
                    // use the optional fallback URL if there is no reference to an external SVG
                    if (fallback && !base.length && hash && !document.getElementById(hash)) {
                        base = fallback;
                    }
                    if (uses[i].hasAttribute("href")) {
                        uses[i].setAttributeNS(xlinkNS, "xlink:href", href);
                    }
                    if (base.length) {
                        // schedule updating xlink:href
                        xhr = cache[base];
                        if (xhr !== true) {
                            // true signifies that prepending the SVG was not required
                            setTimeout(attrUpdateFunc({
                                useEl: uses[i],
                                base: base,
                                hash: hash
                            }), 0);
                        }
                        if (xhr === undefined) {
                            Request = createRequest(base);
                            if (Request !== undefined) {
                                xhr = new Request();
                                cache[base] = xhr;
                                xhr.onload = onloadFunc(xhr);
                                xhr.onerror = onErrorTimeout(xhr);
                                xhr.ontimeout = onErrorTimeout(xhr);
                                xhr.open("GET", base);
                                xhr.send();
                                inProgressCount += 1;
                            }
                        }
                    }
                } else {
                    if (!isHidden) {
                        if (cache[base] === undefined) {
                            // remember this URL if the use element was not empty and no request was sent
                            cache[base] = true;
                        } else if (cache[base].onload) {
                            // if it turns out that prepending the SVG is not necessary,
                            // abort the in-progress xhr.
                            cache[base].abort();
                            delete cache[base].onload;
                            cache[base] = true;
                        }
                    } else if (base.length && cache[base]) {
                        setTimeout(attrUpdateFunc({
                            useEl: uses[i],
                            base: base,
                            hash: hash
                        }), 0);
                    }
                }
            }
            uses = "";
            inProgressCount += 1;
            observeIfDone();
        };
        var winLoad;
        winLoad = function () {
            window.removeEventListener("load", winLoad, false); // to prevent memory leaks
            tid = setTimeout(checkUseElems, 0);
        };
        if (document.readyState !== "complete") {
            // The load event fires when all resources have finished loading, which allows detecting whether SVG use elements are empty.
            window.addEventListener("load", winLoad, false);
        } else {
            // No need to add a listener if the document is already loaded, initialize immediately.
            winLoad();
        }
    }
}());

// 1. Foundation
// --------------------

Foundation.Interchange.SPECIAL_QUERIES['medium-retina'] = 'only screen and (min-width: 40em), (min-width: 40em) and (-webkit-min-device-pixel-ratio: 2), (min-width: 40em) and (min--moz-device-pixel-ratio: 2), (min-width: 40em) and (-o-min-device-pixel-ratio: 2/1), (min-width: 40em) and (min-device-pixel-ratio: 2), (min-width: 40em) and (min-resolution: 192dpi), (min-width: 40em) and (min-resolution: 2dppx)';
Foundation.Interchange.SPECIAL_QUERIES['large-retina'] = 'only screen and (min-width: 64em), (min-width: 64em) and (-webkit-min-device-pixel-ratio: 2), (min-width: 64em) and (min--moz-device-pixel-ratio: 2), (min-width: 64em) and (-o-min-device-pixel-ratio: 2/1), (min-width: 64em) and (min-device-pixel-ratio: 2), (min-width: 64em) and (min-resolution: 192dpi), (min-width: 64em) and (min-resolution: 2dppx)';
Foundation.Interchange.SPECIAL_QUERIES['xlarge-retina'] = 'only screen and (min-width: 75em), (min-width: 75em) and (-webkit-min-device-pixel-ratio: 2), (min-width: 75em) and (min--moz-device-pixel-ratio: 2), (min-width: 75em) and (-o-min-device-pixel-ratio: 2/1), (min-width: 75em) and (min-device-pixel-ratio: 2), (min-width: 75em) and (min-resolution: 192dpi), (min-width: 75em) and (min-resolution: 2dppx)';
Foundation.Interchange.SPECIAL_QUERIES['xxlarge-retina'] = 'only screen and (min-width: 90em), (min-width: 75em) and (-webkit-min-device-pixel-ratio: 2), (min-width: 75em) and (min--moz-device-pixel-ratio: 2), (min-width: 75em) and (-o-min-device-pixel-ratio: 2/1), (min-width: 75em) and (min-device-pixel-ratio: 2), (min-width: 75em) and (min-resolution: 192dpi), (min-width: 75em) and (min-resolution: 2dppx)';

$(document).foundation();

$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

// 2. Cookies Policy
// --------------------

$(function() {
  if($.cookie('showed_modal') != "true") {

setTimeout(
  function()
  {
    //do something special
$("#cookiesPolicy").foundation("open")
  }, 2000);

//     $("#cookiesPolicy").foundation("open");
//     $.cookie('showed_modal', 'true', { expires: 365, path: '/'});


    $.cookie('showed_modal', 'true', { expires: 365 });
  }
});

// 3. Map page
// --------------------

$(function(){
  var $map;
  var countries = {};

  function validInvolvement(text) {
    var validInvolvements = [
      'Standard',
      'Medium',
      'High',
      'Past engagement'
    ]
    return validInvolvements.includes(text);
  }

  function parseCountries() {
    var parsed = {};

    $('.country').each(function(index, country) {
      var $country = $(country);
      var $commitments = $country.find('.country_commitments');
      var $involvement = $country.find('.country_involvement');

      var iso2 = $country.attr('id');
      var name = $country.find('h2').first().text();
      var involvement = null;
      var commitments = $commitments.first().data('commitments') || [];
      var location = null;
      var infobox = $country.find('.callout').first()[0].outerHTML;

      var potentialInvolvement = $involvement.first().data('involvement');
      if(validInvolvement(potentialInvolvement)) {
        involvement = potentialInvolvement;
      }

      if(involvement) {
        location = $involvement.data('location').split(',');
      }

      parsed[iso2] = {
        iso2: iso2,
        name: name,
        involvement: involvement,
        commitments: commitments,
        commitmentLevel: commitmentLevel(commitments),
        location: location,
        infobox: infobox
      }
    });

    return parsed;
  };

  function countryMarkers() {
    return Object.keys(countries)
      .filter(function(iso2) { return countries[iso2].involvement })
      .map(function(iso2) {
        return {
          latLng: countries[iso2].location,
          name: countries[iso2].name,
          iso2: iso2
        };
      });
  };

  /**
   * @description determine if an array contains one or more items from another array.
   * @param {array} haystack the array to search.
   * @param {array} arr the array providing items to check for in the haystack.
   * @return {boolean} true|false if haystack contains at least one item from arr.
   */
  var findOne = function (haystack, arr) {
    return arr.some(function (v) {
      return haystack.indexOf(v) >= 0;
    });
  };

  function commitmentLevel(commitments) {
    var centralCommitments = [
      '2016 ACS: Central register',
      'OGP: Central register',
      'EU: All sectors',
      'EITI'
    ];
    var allSectorCommitments = [
      '2016 ACS: All sectors',
      'OGP: All sectors',
      'EU: All sectors',
    ];
    var publicCommitments = [
      '2016 ACS: Public register',
      'OGP: Public register',
      'EU: All sectors',
      'EITI'
    ];
    var otherCommitments = [
      'Other',
      'BOLG',
      'FSI'
    ];

    var score = 0;
    if(findOne(commitments, centralCommitments)) {
      score += 1;
    }
    if(findOne(commitments, allSectorCommitments)) {
      score += 1;
    }
    if(findOne(commitments, publicCommitments)) {
      score += 1;
    }

    // We map to a 0-1-2 scale, where you have to make 2/3 of central, public
    // and all sectors to get 1, or all three to get 2.
    var level = 0;
    if(score == 2) {
      level = 1;
    }
    if(score == 3) {
      level = 2;
    }
    return level;
  }

  function countryCommitmentLevels() {
    levels = {};
    $.each(countries, function(index, country) {
      levels[country.iso2] = country.commitmentLevel;
    });
    return levels;
  };

  function countryTooltip(country) {
    $tooltip = $(country.infobox);
    $tooltip.removeAttr('data-equalizer-watch').removeAttr('style').removeClass('large shadow');
    return $tooltip[0].outerHTML;
  };

  countries = parseCountries();

  $map = $('.world-map').vectorMap({
    map: 'world_merc',
    zoomOnScroll: false,
    panOnDrag: false,
    backgroundColor: '#fefefe',
    regionStyle: {
      initial: {
        fill: '#DCDCDC',
        stroke: '#fefefe',
        'stroke-width': 1
      }
    },
    markerStyle: {
      initial: {
        fill: '#B20F47',
        stroke: '#fefefe',
        'stroke-width': 1
      }
    },
    markers: countryMarkers(),
    series: {
      regions: [
        {
          values: countryCommitmentLevels(),
          attribute: 'fill',
          scale: ['#DCDCDC', '#3596f2', '#31408c'],
          min: 0,
          max: 2
        }
      ],
    },
    // Disable jvectormap tooltips, we'll use our own library for them
    onRegionTipShow: function(e) { e.preventDefault() },
    onMarkerTipShow: function(e) { e.preventDefault() },
  });

  var map = $map.vectorMap('get', 'mapObject');

  // Markers are not indexed by country code, so build our own index of
  // iso code -> dom node for ease of initialising tooltips
  var markerNodes = {}
  $.each(map.markers, function(index, marker) {
    markerNodes[marker.config.iso2] = marker.element.shape.node;
  });

  $.each(countries, function(index, country) {
    var region = map.regions[country.iso2];
    var markerNode = markerNodes[country.iso2];
    if(region) {
      tippy(region.element.shape.node, {
        theme: 'light',
        content: countryTooltip(country),
        allowHTML: true
      });
    }
    if(markerNode) {
      tippy(markerNode, {
        theme: 'light',
        content: countryTooltip(country),
        allowHTML: true
      });
    }
  });
});
