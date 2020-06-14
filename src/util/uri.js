import URI from 'urijs';

// Document:
// http//medialize.github.io/URI.js/docs.html

// 不转义空格为+，而转为%20
URI.escapeQuerySpace = false;
// 不允许出现值相同的重复query，如foo=1&foo=1不行，foo=1&foo=2则可以
URI.duplicateQueryParameters = false;
// 允许无效的hostname
URI.preventInvalidHostname = false;

export default URI;
