import {
  require_react_dom
} from "/build/_shared/chunk-GIAAE3CH.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __commonJS,
  __export,
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// node_modules/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
  "node_modules/react-is/cjs/react-is.development.js"(exports2) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var hasSymbol = typeof Symbol === "function" && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
        function isValidElementType(type) {
          return typeof type === "string" || typeof type === "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
          type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf3(object) {
          if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_ASYNC_MODE_TYPE:
                  case REACT_CONCURRENT_MODE_TYPE:
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element2 = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal2 = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
            }
          }
          return isConcurrentMode(object) || typeOf3(object) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object) {
          return typeOf3(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object) {
          return typeOf3(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf3(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef2(object) {
          return typeOf3(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment2(object) {
          return typeOf3(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
          return typeOf3(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
          return typeOf3(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf3(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf3(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf3(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf3(object) === REACT_SUSPENSE_TYPE;
        }
        exports2.AsyncMode = AsyncMode;
        exports2.ConcurrentMode = ConcurrentMode;
        exports2.ContextConsumer = ContextConsumer;
        exports2.ContextProvider = ContextProvider;
        exports2.Element = Element2;
        exports2.ForwardRef = ForwardRef;
        exports2.Fragment = Fragment;
        exports2.Lazy = Lazy;
        exports2.Memo = Memo;
        exports2.Portal = Portal2;
        exports2.Profiler = Profiler;
        exports2.StrictMode = StrictMode;
        exports2.Suspense = Suspense;
        exports2.isAsyncMode = isAsyncMode;
        exports2.isConcurrentMode = isConcurrentMode;
        exports2.isContextConsumer = isContextConsumer;
        exports2.isContextProvider = isContextProvider;
        exports2.isElement = isElement;
        exports2.isForwardRef = isForwardRef2;
        exports2.isFragment = isFragment2;
        exports2.isLazy = isLazy;
        exports2.isMemo = isMemo;
        exports2.isPortal = isPortal;
        exports2.isProfiler = isProfiler;
        exports2.isStrictMode = isStrictMode;
        exports2.isSuspense = isSuspense;
        exports2.isValidElementType = isValidElementType;
        exports2.typeOf = typeOf3;
      })();
    }
  }
});

// node_modules/react-is/index.js
var require_react_is = __commonJS({
  "node_modules/react-is/index.js"(exports2, module2) {
    "use strict";
    if (false) {
      module2.exports = null;
    } else {
      module2.exports = require_react_is_development();
    }
  }
});

// node_modules/object-assign/index.js
var require_object_assign = __commonJS({
  "node_modules/object-assign/index.js"(exports2, module2) {
    "use strict";
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty14 = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;
    function toObject(val) {
      if (val === null || val === void 0) {
        throw new TypeError("Object.assign cannot be called with null or undefined");
      }
      return Object(val);
    }
    function shouldUseNative() {
      try {
        if (!Object.assign) {
          return false;
        }
        var test1 = new String("abc");
        test1[5] = "de";
        if (Object.getOwnPropertyNames(test1)[0] === "5") {
          return false;
        }
        var test2 = {};
        for (var i = 0; i < 10; i++) {
          test2["_" + String.fromCharCode(i)] = i;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
          return test2[n];
        });
        if (order2.join("") !== "0123456789") {
          return false;
        }
        var test3 = {};
        "abcdefghijklmnopqrst".split("").forEach(function(letter) {
          test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
          return false;
        }
        return true;
      } catch (err) {
        return false;
      }
    }
    module2.exports = shouldUseNative() ? Object.assign : function(target, source) {
      var from;
      var to = toObject(target);
      var symbols;
      for (var s = 1; s < arguments.length; s++) {
        from = Object(arguments[s]);
        for (var key in from) {
          if (hasOwnProperty14.call(from, key)) {
            to[key] = from[key];
          }
        }
        if (getOwnPropertySymbols) {
          symbols = getOwnPropertySymbols(from);
          for (var i = 0; i < symbols.length; i++) {
            if (propIsEnumerable.call(from, symbols[i])) {
              to[symbols[i]] = from[symbols[i]];
            }
          }
        }
      }
      return to;
    };
  }
});

// node_modules/prop-types/lib/ReactPropTypesSecret.js
var require_ReactPropTypesSecret = __commonJS({
  "node_modules/prop-types/lib/ReactPropTypesSecret.js"(exports2, module2) {
    "use strict";
    var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    module2.exports = ReactPropTypesSecret;
  }
});

// node_modules/prop-types/lib/has.js
var require_has = __commonJS({
  "node_modules/prop-types/lib/has.js"(exports2, module2) {
    module2.exports = Function.call.bind(Object.prototype.hasOwnProperty);
  }
});

// node_modules/prop-types/checkPropTypes.js
var require_checkPropTypes = __commonJS({
  "node_modules/prop-types/checkPropTypes.js"(exports2, module2) {
    "use strict";
    var printWarning = function() {
    };
    if (true) {
      ReactPropTypesSecret = require_ReactPropTypesSecret();
      loggedTypeFailures = {};
      has2 = require_has();
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    var ReactPropTypesSecret;
    var loggedTypeFailures;
    var has2;
    function checkPropTypes(typeSpecs, values2, location, componentName, getStack) {
      if (true) {
        for (var typeSpecName in typeSpecs) {
          if (has2(typeSpecs, typeSpecName)) {
            var error;
            try {
              if (typeof typeSpecs[typeSpecName] !== "function") {
                var err = Error(
                  (componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                );
                err.name = "Invariant Violation";
                throw err;
              }
              error = typeSpecs[typeSpecName](values2, typeSpecName, componentName, location, null, ReactPropTypesSecret);
            } catch (ex) {
              error = ex;
            }
            if (error && !(error instanceof Error)) {
              printWarning(
                (componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
              );
            }
            if (error instanceof Error && !(error.message in loggedTypeFailures)) {
              loggedTypeFailures[error.message] = true;
              var stack = getStack ? getStack() : "";
              printWarning(
                "Failed " + location + " type: " + error.message + (stack != null ? stack : "")
              );
            }
          }
        }
      }
    }
    checkPropTypes.resetWarningCache = function() {
      if (true) {
        loggedTypeFailures = {};
      }
    };
    module2.exports = checkPropTypes;
  }
});

// node_modules/prop-types/factoryWithTypeCheckers.js
var require_factoryWithTypeCheckers = __commonJS({
  "node_modules/prop-types/factoryWithTypeCheckers.js"(exports2, module2) {
    "use strict";
    var ReactIs3 = require_react_is();
    var assign = require_object_assign();
    var ReactPropTypesSecret = require_ReactPropTypesSecret();
    var has2 = require_has();
    var checkPropTypes = require_checkPropTypes();
    var printWarning = function() {
    };
    if (true) {
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    function emptyFunctionThatReturnsNull() {
      return null;
    }
    module2.exports = function(isValidElement2, throwOnDirectAccess) {
      var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = "@@iterator";
      function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === "function") {
          return iteratorFn;
        }
      }
      var ANONYMOUS = "<<anonymous>>";
      var ReactPropTypes = {
        array: createPrimitiveTypeChecker("array"),
        bigint: createPrimitiveTypeChecker("bigint"),
        bool: createPrimitiveTypeChecker("boolean"),
        func: createPrimitiveTypeChecker("function"),
        number: createPrimitiveTypeChecker("number"),
        object: createPrimitiveTypeChecker("object"),
        string: createPrimitiveTypeChecker("string"),
        symbol: createPrimitiveTypeChecker("symbol"),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker
      };
      function is(x, y) {
        if (x === y) {
          return x !== 0 || 1 / x === 1 / y;
        } else {
          return x !== x && y !== y;
        }
      }
      function PropTypeError(message, data) {
        this.message = message;
        this.data = data && typeof data === "object" ? data : {};
        this.stack = "";
      }
      PropTypeError.prototype = Error.prototype;
      function createChainableTypeChecker(validate) {
        if (true) {
          var manualPropTypeCallCache = {};
          var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
          componentName = componentName || ANONYMOUS;
          propFullName = propFullName || propName;
          if (secret !== ReactPropTypesSecret) {
            if (throwOnDirectAccess) {
              var err = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
              );
              err.name = "Invariant Violation";
              throw err;
            } else if (typeof console !== "undefined") {
              var cacheKey = componentName + ":" + propName;
              if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
              manualPropTypeWarningCount < 3) {
                printWarning(
                  "You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
                );
                manualPropTypeCallCache[cacheKey] = true;
                manualPropTypeWarningCount++;
              }
            }
          }
          if (props[propName] == null) {
            if (isRequired) {
              if (props[propName] === null) {
                return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
              }
              return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
            }
            return null;
          } else {
            return validate(props, propName, componentName, location, propFullName);
          }
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
      }
      function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== expectedType) {
            var preciseType = getPreciseType(propValue);
            return new PropTypeError(
              "Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."),
              { expectedType }
            );
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
      }
      function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
          }
          var propValue = props[propName];
          if (!Array.isArray(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
          }
          for (var i = 0; i < propValue.length; i++) {
            var error = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret);
            if (error instanceof Error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!isValidElement2(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!ReactIs3.isValidElementType(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
          if (!(props[propName] instanceof expectedClass)) {
            var expectedClassName = expectedClass.name || ANONYMOUS;
            var actualClassName = getClassName(props[propName]);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
          if (true) {
            if (arguments.length > 1) {
              printWarning(
                "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
              );
            } else {
              printWarning("Invalid argument supplied to oneOf, expected an array.");
            }
          }
          return emptyFunctionThatReturnsNull;
        }
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          for (var i = 0; i < expectedValues.length; i++) {
            if (is(propValue, expectedValues[i])) {
              return null;
            }
          }
          var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
            var type = getPreciseType(value);
            if (type === "symbol") {
              return String(value);
            }
            return value;
          });
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
          }
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
          }
          for (var key in propValue) {
            if (has2(propValue, key)) {
              var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
              if (error instanceof Error) {
                return error;
              }
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
          true ? printWarning("Invalid argument supplied to oneOfType, expected an instance of array.") : void 0;
          return emptyFunctionThatReturnsNull;
        }
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          if (typeof checker !== "function") {
            printWarning(
              "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i + "."
            );
            return emptyFunctionThatReturnsNull;
          }
        }
        function validate(props, propName, componentName, location, propFullName) {
          var expectedTypes = [];
          for (var i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
            var checker2 = arrayOfTypeCheckers[i2];
            var checkerResult = checker2(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
            if (checkerResult == null) {
              return null;
            }
            if (checkerResult.data && has2(checkerResult.data, "expectedType")) {
              expectedTypes.push(checkerResult.data.expectedType);
            }
          }
          var expectedTypesMessage = expectedTypes.length > 0 ? ", expected one of type [" + expectedTypes.join(", ") + "]" : "";
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`" + expectedTypesMessage + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          if (!isNode(props[propName])) {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function invalidValidatorError(componentName, location, propFullName, key, type) {
        return new PropTypeError(
          (componentName || "React class") + ": " + location + " type `" + propFullName + "." + key + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + type + "`."
        );
      }
      function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          for (var key in shapeTypes) {
            var checker = shapeTypes[key];
            if (typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          var allKeys = assign({}, props[propName], shapeTypes);
          for (var key in allKeys) {
            var checker = shapeTypes[key];
            if (has2(shapeTypes, key) && typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            if (!checker) {
              return new PropTypeError(
                "Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  ")
              );
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function isNode(propValue) {
        switch (typeof propValue) {
          case "number":
          case "string":
          case "undefined":
            return true;
          case "boolean":
            return !propValue;
          case "object":
            if (Array.isArray(propValue)) {
              return propValue.every(isNode);
            }
            if (propValue === null || isValidElement2(propValue)) {
              return true;
            }
            var iteratorFn = getIteratorFn(propValue);
            if (iteratorFn) {
              var iterator = iteratorFn.call(propValue);
              var step;
              if (iteratorFn !== propValue.entries) {
                while (!(step = iterator.next()).done) {
                  if (!isNode(step.value)) {
                    return false;
                  }
                }
              } else {
                while (!(step = iterator.next()).done) {
                  var entry = step.value;
                  if (entry) {
                    if (!isNode(entry[1])) {
                      return false;
                    }
                  }
                }
              }
            } else {
              return false;
            }
            return true;
          default:
            return false;
        }
      }
      function isSymbol2(propType, propValue) {
        if (propType === "symbol") {
          return true;
        }
        if (!propValue) {
          return false;
        }
        if (propValue["@@toStringTag"] === "Symbol") {
          return true;
        }
        if (typeof Symbol === "function" && propValue instanceof Symbol) {
          return true;
        }
        return false;
      }
      function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
          return "array";
        }
        if (propValue instanceof RegExp) {
          return "object";
        }
        if (isSymbol2(propType, propValue)) {
          return "symbol";
        }
        return propType;
      }
      function getPreciseType(propValue) {
        if (typeof propValue === "undefined" || propValue === null) {
          return "" + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === "object") {
          if (propValue instanceof Date) {
            return "date";
          } else if (propValue instanceof RegExp) {
            return "regexp";
          }
        }
        return propType;
      }
      function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch (type) {
          case "array":
          case "object":
            return "an " + type;
          case "boolean":
          case "date":
          case "regexp":
            return "a " + type;
          default:
            return type;
        }
      }
      function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
          return ANONYMOUS;
        }
        return propValue.constructor.name;
      }
      ReactPropTypes.checkPropTypes = checkPropTypes;
      ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
      ReactPropTypes.PropTypes = ReactPropTypes;
      return ReactPropTypes;
    };
  }
});

// node_modules/prop-types/index.js
var require_prop_types = __commonJS({
  "node_modules/prop-types/index.js"(exports2, module2) {
    if (true) {
      ReactIs3 = require_react_is();
      throwOnDirectAccess = true;
      module2.exports = require_factoryWithTypeCheckers()(ReactIs3.isElement, throwOnDirectAccess);
    } else {
      module2.exports = null();
    }
    var ReactIs3;
    var throwOnDirectAccess;
  }
});

// node_modules/exenv/index.js
var require_exenv = __commonJS({
  "node_modules/exenv/index.js"(exports2, module2) {
    (function() {
      "use strict";
      var canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
      var ExecutionEnvironment = {
        canUseDOM,
        canUseWorkers: typeof Worker !== "undefined",
        canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),
        canUseViewport: canUseDOM && !!window.screen
      };
      if (typeof define === "function" && typeof define.amd === "object" && define.amd) {
        define(function() {
          return ExecutionEnvironment;
        });
      } else if (typeof module2 !== "undefined" && module2.exports) {
        module2.exports = ExecutionEnvironment;
      } else {
        window.ExecutionEnvironment = ExecutionEnvironment;
      }
    })();
  }
});

// node_modules/@semantic-ui-react/event-stack/lib/cjs/event-stack.development.js
var require_event_stack_development = __commonJS({
  "node_modules/@semantic-ui-react/event-stack/lib/cjs/event-stack.development.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var env = require_exenv();
    var PropTypes35 = require_prop_types();
    var React41 = require_react();
    function _typeof(obj) {
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof = function(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof(obj);
    }
    function _classCallCheck(instance2, Constructor) {
      if (!(instance2 instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          writable: true,
          configurable: true
        }
      });
      if (superClass)
        _setPrototypeOf2(subClass, superClass);
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
    function _setPrototypeOf2(o, p) {
      _setPrototypeOf2 = Object.setPrototypeOf || function _setPrototypeOf3(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf2(o, p);
    }
    function _assertThisInitialized2(self2) {
      if (self2 === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self2;
    }
    function _possibleConstructorReturn(self2, call) {
      if (call && (typeof call === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized2(self2);
    }
    var EventSet = /* @__PURE__ */ function() {
      function EventSet2(eventHandlers) {
        _classCallCheck(this, EventSet2);
        _defineProperty(this, "handlers", void 0);
        this.handlers = eventHandlers.slice(0);
      }
      _createClass(EventSet2, [{
        key: "addHandlers",
        value: function addHandlers(additionalHandlers) {
          var newHandlers = this.handlers.slice(0);
          var length = additionalHandlers.length;
          for (var i = 0; i < length; i += 1) {
            newHandlers.push(additionalHandlers[i]);
          }
          return new EventSet2(newHandlers);
        }
        /**
         * @see https://jsperf.com/suir-eventset-dispatchsingle
         * @see https://jsperf.com/suir-eventset-dispatchmultiple2
         */
      }, {
        key: "dispatchEvent",
        value: function dispatchEvent(event, dispatchAll) {
          var count = this.handlers.length - 1;
          if (!dispatchAll) {
            var recentHandler = this.handlers[count];
            recentHandler(event);
            return;
          }
          for (var i = count; i >= 0; i -= 1) {
            if (!this.handlers[i].called) {
              this.handlers[i].called = true;
              this.handlers[i](event);
            }
          }
          for (var _i = count; _i >= 0; _i -= 1) {
            this.handlers[_i].called = false;
          }
        }
      }, {
        key: "hasHandlers",
        value: function hasHandlers() {
          return this.handlers.length > 0;
        }
        /**
         * @see https://jsperf.com/suir-eventset-removehandlers
         */
      }, {
        key: "removeHandlers",
        value: function removeHandlers(removalHandlers) {
          var newHandlers = [];
          var length = this.handlers.length;
          for (var i = 0; i < length; i += 1) {
            var handler = this.handlers[i];
            if (removalHandlers.indexOf(handler) === -1) {
              newHandlers.push(handler);
            }
          }
          return new EventSet2(newHandlers);
        }
      }]);
      return EventSet2;
    }();
    function cloneMap(map2) {
      var newMap = /* @__PURE__ */ new Map();
      map2.forEach(function(value, key) {
        newMap.set(key, value);
      });
      return newMap;
    }
    function normalizeHandlers(handlers) {
      return Array.isArray(handlers) ? handlers : [handlers];
    }
    var isRefObject3 = function isRefObject4(ref2) {
      return ref2 !== null && _typeof(ref2) === "object" && ref2.hasOwnProperty("current");
    };
    function normalizeTarget(target) {
      if (target === "document")
        return document;
      if (target === "window")
        return window;
      if (isRefObject3(target))
        return target.current || document;
      return target || document;
    }
    var EventPool = /* @__PURE__ */ function() {
      function EventPool2(poolName, handlerSets) {
        _classCallCheck(this, EventPool2);
        _defineProperty(this, "handlerSets", void 0);
        _defineProperty(this, "poolName", void 0);
        this.handlerSets = handlerSets;
        this.poolName = poolName;
      }
      _createClass(EventPool2, [{
        key: "addHandlers",
        value: function addHandlers(eventType, eventHandlers) {
          var handlerSets = cloneMap(this.handlerSets);
          if (handlerSets.has(eventType)) {
            var eventSet = handlerSets.get(eventType);
            handlerSets.set(eventType, eventSet.addHandlers(eventHandlers));
          } else {
            handlerSets.set(eventType, new EventSet(eventHandlers));
          }
          return new EventPool2(this.poolName, handlerSets);
        }
      }, {
        key: "dispatchEvent",
        value: function dispatchEvent(eventType, event) {
          var handlerSet = this.handlerSets.get(eventType);
          var shouldDispatchAll = this.poolName === "default";
          if (handlerSet) {
            handlerSet.dispatchEvent(event, shouldDispatchAll);
          }
        }
      }, {
        key: "hasHandlers",
        value: function hasHandlers(eventType) {
          if (!eventType) {
            return this.handlerSets.size > 0;
          }
          var eventSet = this.handlerSets.get(eventType);
          if (eventSet) {
            return eventSet.hasHandlers();
          }
          return false;
        }
      }, {
        key: "removeHandlers",
        value: function removeHandlers(eventType, eventHandlers) {
          var handlerSets = cloneMap(this.handlerSets);
          if (!handlerSets.has(eventType)) {
            return new EventPool2(this.poolName, handlerSets);
          }
          var currentSet = handlerSets.get(eventType);
          var nextSet = currentSet.removeHandlers(eventHandlers);
          if (nextSet.hasHandlers()) {
            handlerSets.set(eventType, nextSet);
          } else {
            handlerSets.delete(eventType);
          }
          return new EventPool2(this.poolName, handlerSets);
        }
      }]);
      return EventPool2;
    }();
    _defineProperty(EventPool, "createByType", function(poolName, eventType, eventHandlers) {
      var handlerSets = /* @__PURE__ */ new Map();
      handlerSets.set(eventType, new EventSet(eventHandlers));
      return new EventPool(poolName, handlerSets);
    });
    var EventTarget = /* @__PURE__ */ function() {
      function EventTarget2(target) {
        var _this = this;
        _classCallCheck(this, EventTarget2);
        _defineProperty(this, "handlers", /* @__PURE__ */ new Map());
        _defineProperty(this, "pools", /* @__PURE__ */ new Map());
        _defineProperty(this, "target", void 0);
        _defineProperty(this, "createEmitter", function(eventType) {
          return function(event) {
            _this.pools.forEach(function(pool) {
              pool.dispatchEvent(eventType, event);
            });
          };
        });
        this.target = target;
      }
      _createClass(EventTarget2, [{
        key: "addHandlers",
        value: function addHandlers(poolName, eventType, eventHandlers) {
          if (this.pools.has(poolName)) {
            var eventPool = this.pools.get(poolName);
            this.pools.set(poolName, eventPool.addHandlers(eventType, eventHandlers));
          } else {
            this.pools.set(poolName, EventPool.createByType(poolName, eventType, eventHandlers));
          }
          if (!this.handlers.has(eventType)) {
            this.addTargetHandler(eventType);
          }
        }
      }, {
        key: "hasHandlers",
        value: function hasHandlers() {
          return this.handlers.size > 0;
        }
      }, {
        key: "removeHandlers",
        value: function removeHandlers(poolName, eventType, eventHandlers) {
          if (!this.pools.has(poolName)) {
            return;
          }
          var pool = this.pools.get(poolName);
          var newPool = pool.removeHandlers(eventType, eventHandlers);
          if (newPool.hasHandlers()) {
            this.pools.set(poolName, newPool);
          } else {
            this.pools.delete(poolName);
          }
          var hasHandlers = false;
          this.pools.forEach(function(pool2) {
            return hasHandlers = hasHandlers || pool2.hasHandlers(eventType);
          });
          if (!hasHandlers) {
            this.removeTargetHandler(eventType);
          }
        }
      }, {
        key: "addTargetHandler",
        value: function addTargetHandler(eventType) {
          var handler = this.createEmitter(eventType);
          this.handlers.set(eventType, handler);
          this.target.addEventListener(eventType, handler, true);
        }
      }, {
        key: "removeTargetHandler",
        value: function removeTargetHandler(eventType) {
          if (this.handlers.has(eventType)) {
            this.target.removeEventListener(eventType, this.handlers.get(eventType), true);
            this.handlers.delete(eventType);
          }
        }
      }]);
      return EventTarget2;
    }();
    var EventStack2 = /* @__PURE__ */ function() {
      function EventStack3() {
        var _this = this;
        _classCallCheck(this, EventStack3);
        _defineProperty(this, "targets", /* @__PURE__ */ new Map());
        _defineProperty(this, "getTarget", function(target) {
          var autoCreate = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
          var normalized = normalizeTarget(target);
          if (_this.targets.has(normalized)) {
            return _this.targets.get(normalized);
          }
          if (!autoCreate)
            return null;
          var eventTarget = new EventTarget(normalized);
          _this.targets.set(normalized, eventTarget);
          return eventTarget;
        });
        _defineProperty(this, "removeTarget", function(target) {
          _this.targets.delete(normalizeTarget(target));
        });
      }
      _createClass(EventStack3, [{
        key: "sub",
        value: function sub(eventName, eventHandlers) {
          var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          if (!env.canUseDOM)
            return;
          var _options$target = options.target, target = _options$target === void 0 ? document : _options$target, _options$pool = options.pool, pool = _options$pool === void 0 ? "default" : _options$pool;
          var eventTarget = this.getTarget(target);
          eventTarget.addHandlers(pool, eventName, normalizeHandlers(eventHandlers));
        }
      }, {
        key: "unsub",
        value: function unsub(eventName, eventHandlers) {
          var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          if (!env.canUseDOM)
            return;
          var _options$target2 = options.target, target = _options$target2 === void 0 ? document : _options$target2, _options$pool2 = options.pool, pool = _options$pool2 === void 0 ? "default" : _options$pool2;
          var eventTarget = this.getTarget(target, false);
          if (eventTarget) {
            eventTarget.removeHandlers(pool, eventName, normalizeHandlers(eventHandlers));
            if (!eventTarget.hasHandlers())
              this.removeTarget(target);
          }
        }
      }]);
      return EventStack3;
    }();
    var instance = new EventStack2();
    var EventStack$1 = /* @__PURE__ */ function(_React$PureComponent) {
      _inherits(EventStack3, _React$PureComponent);
      function EventStack3() {
        _classCallCheck(this, EventStack3);
        return _possibleConstructorReturn(this, _getPrototypeOf(EventStack3).apply(this, arguments));
      }
      _createClass(EventStack3, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          this.subscribe(this.props);
        }
      }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps) {
          this.unsubscribe(prevProps);
          this.subscribe(this.props);
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          this.unsubscribe(this.props);
        }
      }, {
        key: "subscribe",
        value: function subscribe(props) {
          var name = props.name, on = props.on, pool = props.pool, target = props.target;
          instance.sub(name, on, {
            pool,
            target
          });
        }
      }, {
        key: "unsubscribe",
        value: function unsubscribe(props) {
          var name = props.name, on = props.on, pool = props.pool, target = props.target;
          instance.unsub(name, on, {
            pool,
            target
          });
        }
      }, {
        key: "render",
        value: function render() {
          return null;
        }
      }]);
      return EventStack3;
    }(React41.PureComponent);
    _defineProperty(EventStack$1, "defaultProps", {
      pool: "default",
      target: "document"
    });
    EventStack$1.propTypes = {
      /** An event name on which we will subscribe. */
      name: PropTypes35.string.isRequired,
      /** An event handler or array of event handlers. */
      on: PropTypes35.oneOfType([PropTypes35.func, PropTypes35.arrayOf(PropTypes35.func)]).isRequired,
      /** A name of pool. */
      pool: PropTypes35.string,
      /** A DOM element on which we will subscribe. */
      target: PropTypes35.oneOfType([
        PropTypes35.oneOf(["document", "window"]),
        // Heads up!
        // This condition for SSR safety.
        PropTypes35.instanceOf(env.canUseDOM ? HTMLElement : Object),
        PropTypes35.shape({
          current: PropTypes35.object
        })
      ])
    };
    exports2.instance = instance;
    exports2.default = EventStack$1;
  }
});

// node_modules/@semantic-ui-react/event-stack/lib/index.js
var require_lib = __commonJS({
  "node_modules/@semantic-ui-react/event-stack/lib/index.js"(exports2, module2) {
    "use strict";
    var stack;
    if (false) {
      stack = null;
    } else {
      stack = require_event_stack_development();
    }
    module2.exports = stack.default;
    module2.exports.instance = stack.instance;
  }
});

// node_modules/keyboard-key/src/keyboardKey.js
var require_keyboardKey = __commonJS({
  "node_modules/keyboard-key/src/keyboardKey.js"(exports2, module2) {
    "use strict";
    var isObject2 = function isObject3(val) {
      return val !== null && !Array.isArray(val) && typeof val === "object";
    };
    var codes = {
      // ----------------------------------------
      // By Code
      // ----------------------------------------
      3: "Cancel",
      6: "Help",
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      28: "Convert",
      29: "NonConvert",
      30: "Accept",
      31: "ModeChange",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      41: "Select",
      42: "Print",
      43: "Execute",
      44: "PrintScreen",
      45: "Insert",
      46: "Delete",
      48: ["0", ")"],
      49: ["1", "!"],
      50: ["2", "@"],
      51: ["3", "#"],
      52: ["4", "$"],
      53: ["5", "%"],
      54: ["6", "^"],
      55: ["7", "&"],
      56: ["8", "*"],
      57: ["9", "("],
      91: "OS",
      93: "ContextMenu",
      144: "NumLock",
      145: "ScrollLock",
      181: "VolumeMute",
      182: "VolumeDown",
      183: "VolumeUp",
      186: [";", ":"],
      187: ["=", "+"],
      188: [",", "<"],
      189: ["-", "_"],
      190: [".", ">"],
      191: ["/", "?"],
      192: ["`", "~"],
      219: ["[", "{"],
      220: ["\\", "|"],
      221: ["]", "}"],
      222: ["'", '"'],
      224: "Meta",
      225: "AltGraph",
      246: "Attn",
      247: "CrSel",
      248: "ExSel",
      249: "EraseEof",
      250: "Play",
      251: "ZoomOut"
    };
    for (i = 0; i < 24; i += 1) {
      codes[112 + i] = "F" + (i + 1);
    }
    var i;
    for (j = 0; j < 26; j += 1) {
      n = j + 65;
      codes[n] = [String.fromCharCode(n + 32), String.fromCharCode(n)];
    }
    var n;
    var j;
    var keyboardKey2 = {
      codes,
      /**
       * Get the `keyCode` or `which` value from a keyboard event or `key` name.
       * @param {string|object} eventOrKey A keyboard event-like object or `key` name.
       * @param {string} [eventOrKey.key] If object, it must have one of these keys.
       * @param {number} [eventOrKey.keyCode] If object, it must have one of these keys.
       * @param {number} [eventOrKey.which] If object, it must have one of these keys.
       * @returns {number|undefined}
       */
      getCode: function getCode(eventOrKey) {
        if (isObject2(eventOrKey)) {
          return eventOrKey.keyCode || eventOrKey.which || this[eventOrKey.key];
        }
        return this[eventOrKey];
      },
      /**
       * Get the key name from a keyboard event, `keyCode`, or `which` value.
       * @param {number|object} eventOrCode A keyboard event-like object or key code.
       * @param {string} [eventOrCode.key] If object with a `key` name, it will be returned.
       * @param {number} [eventOrCode.keyCode] If object, it must have one of these keys.
       * @param {number} [eventOrCode.which] If object, it must have one of these keys.
       * @param {boolean} [eventOrCode.shiftKey] If object, it must have one of these keys.
       * @returns {string|undefined}
       */
      getKey: function getKey(eventOrCode) {
        var isEvent = isObject2(eventOrCode);
        if (isEvent && eventOrCode.key) {
          return eventOrCode.key;
        }
        var name = codes[isEvent ? eventOrCode.keyCode || eventOrCode.which : eventOrCode];
        if (Array.isArray(name)) {
          if (isEvent) {
            name = name[eventOrCode.shiftKey ? 1 : 0];
          } else {
            name = name[0];
          }
        }
        return name;
      },
      // ----------------------------------------
      // By Name
      // ----------------------------------------
      // declare these manually for static analysis
      Cancel: 3,
      Help: 6,
      Backspace: 8,
      Tab: 9,
      Clear: 12,
      Enter: 13,
      Shift: 16,
      Control: 17,
      Alt: 18,
      Pause: 19,
      CapsLock: 20,
      Escape: 27,
      Convert: 28,
      NonConvert: 29,
      Accept: 30,
      ModeChange: 31,
      " ": 32,
      PageUp: 33,
      PageDown: 34,
      End: 35,
      Home: 36,
      ArrowLeft: 37,
      ArrowUp: 38,
      ArrowRight: 39,
      ArrowDown: 40,
      Select: 41,
      Print: 42,
      Execute: 43,
      PrintScreen: 44,
      Insert: 45,
      Delete: 46,
      0: 48,
      ")": 48,
      1: 49,
      "!": 49,
      2: 50,
      "@": 50,
      3: 51,
      "#": 51,
      4: 52,
      $: 52,
      5: 53,
      "%": 53,
      6: 54,
      "^": 54,
      7: 55,
      "&": 55,
      8: 56,
      "*": 56,
      9: 57,
      "(": 57,
      a: 65,
      A: 65,
      b: 66,
      B: 66,
      c: 67,
      C: 67,
      d: 68,
      D: 68,
      e: 69,
      E: 69,
      f: 70,
      F: 70,
      g: 71,
      G: 71,
      h: 72,
      H: 72,
      i: 73,
      I: 73,
      j: 74,
      J: 74,
      k: 75,
      K: 75,
      l: 76,
      L: 76,
      m: 77,
      M: 77,
      n: 78,
      N: 78,
      o: 79,
      O: 79,
      p: 80,
      P: 80,
      q: 81,
      Q: 81,
      r: 82,
      R: 82,
      s: 83,
      S: 83,
      t: 84,
      T: 84,
      u: 85,
      U: 85,
      v: 86,
      V: 86,
      w: 87,
      W: 87,
      x: 88,
      X: 88,
      y: 89,
      Y: 89,
      z: 90,
      Z: 90,
      OS: 91,
      ContextMenu: 93,
      F1: 112,
      F2: 113,
      F3: 114,
      F4: 115,
      F5: 116,
      F6: 117,
      F7: 118,
      F8: 119,
      F9: 120,
      F10: 121,
      F11: 122,
      F12: 123,
      F13: 124,
      F14: 125,
      F15: 126,
      F16: 127,
      F17: 128,
      F18: 129,
      F19: 130,
      F20: 131,
      F21: 132,
      F22: 133,
      F23: 134,
      F24: 135,
      NumLock: 144,
      ScrollLock: 145,
      VolumeMute: 181,
      VolumeDown: 182,
      VolumeUp: 183,
      ";": 186,
      ":": 186,
      "=": 187,
      "+": 187,
      ",": 188,
      "<": 188,
      "-": 189,
      _: 189,
      ".": 190,
      ">": 190,
      "/": 191,
      "?": 191,
      "`": 192,
      "~": 192,
      "[": 219,
      "{": 219,
      "\\": 220,
      "|": 220,
      "]": 221,
      "}": 221,
      "'": 222,
      '"': 222,
      Meta: 224,
      AltGraph: 225,
      Attn: 246,
      CrSel: 247,
      ExSel: 248,
      EraseEof: 249,
      Play: 250,
      ZoomOut: 251
    };
    keyboardKey2.Spacebar = keyboardKey2[" "];
    keyboardKey2.Digit0 = keyboardKey2["0"];
    keyboardKey2.Digit1 = keyboardKey2["1"];
    keyboardKey2.Digit2 = keyboardKey2["2"];
    keyboardKey2.Digit3 = keyboardKey2["3"];
    keyboardKey2.Digit4 = keyboardKey2["4"];
    keyboardKey2.Digit5 = keyboardKey2["5"];
    keyboardKey2.Digit6 = keyboardKey2["6"];
    keyboardKey2.Digit7 = keyboardKey2["7"];
    keyboardKey2.Digit8 = keyboardKey2["8"];
    keyboardKey2.Digit9 = keyboardKey2["9"];
    keyboardKey2.Tilde = keyboardKey2["~"];
    keyboardKey2.GraveAccent = keyboardKey2["`"];
    keyboardKey2.ExclamationPoint = keyboardKey2["!"];
    keyboardKey2.AtSign = keyboardKey2["@"];
    keyboardKey2.PoundSign = keyboardKey2["#"];
    keyboardKey2.PercentSign = keyboardKey2["%"];
    keyboardKey2.Caret = keyboardKey2["^"];
    keyboardKey2.Ampersand = keyboardKey2["&"];
    keyboardKey2.PlusSign = keyboardKey2["+"];
    keyboardKey2.MinusSign = keyboardKey2["-"];
    keyboardKey2.EqualsSign = keyboardKey2["="];
    keyboardKey2.DivisionSign = keyboardKey2["/"];
    keyboardKey2.MultiplicationSign = keyboardKey2["*"];
    keyboardKey2.Comma = keyboardKey2[","];
    keyboardKey2.Decimal = keyboardKey2["."];
    keyboardKey2.Colon = keyboardKey2[":"];
    keyboardKey2.Semicolon = keyboardKey2[";"];
    keyboardKey2.Pipe = keyboardKey2["|"];
    keyboardKey2.BackSlash = keyboardKey2["\\"];
    keyboardKey2.QuestionMark = keyboardKey2["?"];
    keyboardKey2.SingleQuote = keyboardKey2["'"];
    keyboardKey2.DoubleQuote = keyboardKey2['"'];
    keyboardKey2.LeftCurlyBrace = keyboardKey2["{"];
    keyboardKey2.RightCurlyBrace = keyboardKey2["}"];
    keyboardKey2.LeftParenthesis = keyboardKey2["("];
    keyboardKey2.RightParenthesis = keyboardKey2[")"];
    keyboardKey2.LeftAngleBracket = keyboardKey2["<"];
    keyboardKey2.RightAngleBracket = keyboardKey2[">"];
    keyboardKey2.LeftSquareBracket = keyboardKey2["["];
    keyboardKey2.RightSquareBracket = keyboardKey2["]"];
    module2.exports = keyboardKey2;
  }
});

// node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

// node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf(o, p);
}

// node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}

// node_modules/lodash-es/_freeGlobal.js
var freeGlobal = typeof globalThis == "object" && globalThis && globalThis.Object === Object && globalThis;
var freeGlobal_default = freeGlobal;

// node_modules/lodash-es/_root.js
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root = freeGlobal_default || freeSelf || Function("return this")();
var root_default = root;

// node_modules/lodash-es/_Symbol.js
var Symbol2 = root_default.Symbol;
var Symbol_default = Symbol2;

// node_modules/lodash-es/_getRawTag.js
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
var nativeObjectToString = objectProto.toString;
var symToStringTag = Symbol_default ? Symbol_default.toStringTag : void 0;
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
  try {
    value[symToStringTag] = void 0;
    var unmasked = true;
  } catch (e) {
  }
  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}
var getRawTag_default = getRawTag;

// node_modules/lodash-es/_objectToString.js
var objectProto2 = Object.prototype;
var nativeObjectToString2 = objectProto2.toString;
function objectToString(value) {
  return nativeObjectToString2.call(value);
}
var objectToString_default = objectToString;

// node_modules/lodash-es/_baseGetTag.js
var nullTag = "[object Null]";
var undefinedTag = "[object Undefined]";
var symToStringTag2 = Symbol_default ? Symbol_default.toStringTag : void 0;
function baseGetTag(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag2 && symToStringTag2 in Object(value) ? getRawTag_default(value) : objectToString_default(value);
}
var baseGetTag_default = baseGetTag;

// node_modules/lodash-es/isObject.js
function isObject(value) {
  var type = typeof value;
  return value != null && (type == "object" || type == "function");
}
var isObject_default = isObject;

// node_modules/lodash-es/isFunction.js
var asyncTag = "[object AsyncFunction]";
var funcTag = "[object Function]";
var genTag = "[object GeneratorFunction]";
var proxyTag = "[object Proxy]";
function isFunction(value) {
  if (!isObject_default(value)) {
    return false;
  }
  var tag = baseGetTag_default(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}
var isFunction_default = isFunction;

// node_modules/lodash-es/_coreJsData.js
var coreJsData = root_default["__core-js_shared__"];
var coreJsData_default = coreJsData;

// node_modules/lodash-es/_isMasked.js
var maskSrcKey = function() {
  var uid = /[^.]+$/.exec(coreJsData_default && coreJsData_default.keys && coreJsData_default.keys.IE_PROTO || "");
  return uid ? "Symbol(src)_1." + uid : "";
}();
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
var isMasked_default = isMasked;

// node_modules/lodash-es/_toSource.js
var funcProto = Function.prototype;
var funcToString = funcProto.toString;
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {
    }
    try {
      return func + "";
    } catch (e) {
    }
  }
  return "";
}
var toSource_default = toSource;

// node_modules/lodash-es/_baseIsNative.js
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var funcProto2 = Function.prototype;
var objectProto3 = Object.prototype;
var funcToString2 = funcProto2.toString;
var hasOwnProperty2 = objectProto3.hasOwnProperty;
var reIsNative = RegExp(
  "^" + funcToString2.call(hasOwnProperty2).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function baseIsNative(value) {
  if (!isObject_default(value) || isMasked_default(value)) {
    return false;
  }
  var pattern = isFunction_default(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource_default(value));
}
var baseIsNative_default = baseIsNative;

// node_modules/lodash-es/_getValue.js
function getValue(object, key) {
  return object == null ? void 0 : object[key];
}
var getValue_default = getValue;

// node_modules/lodash-es/_getNative.js
function getNative(object, key) {
  var value = getValue_default(object, key);
  return baseIsNative_default(value) ? value : void 0;
}
var getNative_default = getNative;

// node_modules/lodash-es/_nativeCreate.js
var nativeCreate = getNative_default(Object, "create");
var nativeCreate_default = nativeCreate;

// node_modules/lodash-es/_hashClear.js
function hashClear() {
  this.__data__ = nativeCreate_default ? nativeCreate_default(null) : {};
  this.size = 0;
}
var hashClear_default = hashClear;

// node_modules/lodash-es/_hashDelete.js
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}
var hashDelete_default = hashDelete;

// node_modules/lodash-es/_hashGet.js
var HASH_UNDEFINED = "__lodash_hash_undefined__";
var objectProto4 = Object.prototype;
var hasOwnProperty3 = objectProto4.hasOwnProperty;
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate_default) {
    var result = data[key];
    return result === HASH_UNDEFINED ? void 0 : result;
  }
  return hasOwnProperty3.call(data, key) ? data[key] : void 0;
}
var hashGet_default = hashGet;

// node_modules/lodash-es/_hashHas.js
var objectProto5 = Object.prototype;
var hasOwnProperty4 = objectProto5.hasOwnProperty;
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate_default ? data[key] !== void 0 : hasOwnProperty4.call(data, key);
}
var hashHas_default = hashHas;

// node_modules/lodash-es/_hashSet.js
var HASH_UNDEFINED2 = "__lodash_hash_undefined__";
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate_default && value === void 0 ? HASH_UNDEFINED2 : value;
  return this;
}
var hashSet_default = hashSet;

// node_modules/lodash-es/_Hash.js
function Hash(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
Hash.prototype.clear = hashClear_default;
Hash.prototype["delete"] = hashDelete_default;
Hash.prototype.get = hashGet_default;
Hash.prototype.has = hashHas_default;
Hash.prototype.set = hashSet_default;
var Hash_default = Hash;

// node_modules/lodash-es/_listCacheClear.js
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}
var listCacheClear_default = listCacheClear;

// node_modules/lodash-es/eq.js
function eq(value, other) {
  return value === other || value !== value && other !== other;
}
var eq_default = eq;

// node_modules/lodash-es/_assocIndexOf.js
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq_default(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}
var assocIndexOf_default = assocIndexOf;

// node_modules/lodash-es/_listCacheDelete.js
var arrayProto = Array.prototype;
var splice = arrayProto.splice;
function listCacheDelete(key) {
  var data = this.__data__, index = assocIndexOf_default(data, key);
  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}
var listCacheDelete_default = listCacheDelete;

// node_modules/lodash-es/_listCacheGet.js
function listCacheGet(key) {
  var data = this.__data__, index = assocIndexOf_default(data, key);
  return index < 0 ? void 0 : data[index][1];
}
var listCacheGet_default = listCacheGet;

// node_modules/lodash-es/_listCacheHas.js
function listCacheHas(key) {
  return assocIndexOf_default(this.__data__, key) > -1;
}
var listCacheHas_default = listCacheHas;

// node_modules/lodash-es/_listCacheSet.js
function listCacheSet(key, value) {
  var data = this.__data__, index = assocIndexOf_default(data, key);
  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}
var listCacheSet_default = listCacheSet;

// node_modules/lodash-es/_ListCache.js
function ListCache(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
ListCache.prototype.clear = listCacheClear_default;
ListCache.prototype["delete"] = listCacheDelete_default;
ListCache.prototype.get = listCacheGet_default;
ListCache.prototype.has = listCacheHas_default;
ListCache.prototype.set = listCacheSet_default;
var ListCache_default = ListCache;

// node_modules/lodash-es/_Map.js
var Map2 = getNative_default(root_default, "Map");
var Map_default = Map2;

// node_modules/lodash-es/_mapCacheClear.js
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    "hash": new Hash_default(),
    "map": new (Map_default || ListCache_default)(),
    "string": new Hash_default()
  };
}
var mapCacheClear_default = mapCacheClear;

// node_modules/lodash-es/_isKeyable.js
function isKeyable(value) {
  var type = typeof value;
  return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
}
var isKeyable_default = isKeyable;

// node_modules/lodash-es/_getMapData.js
function getMapData(map2, key) {
  var data = map2.__data__;
  return isKeyable_default(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
}
var getMapData_default = getMapData;

// node_modules/lodash-es/_mapCacheDelete.js
function mapCacheDelete(key) {
  var result = getMapData_default(this, key)["delete"](key);
  this.size -= result ? 1 : 0;
  return result;
}
var mapCacheDelete_default = mapCacheDelete;

// node_modules/lodash-es/_mapCacheGet.js
function mapCacheGet(key) {
  return getMapData_default(this, key).get(key);
}
var mapCacheGet_default = mapCacheGet;

// node_modules/lodash-es/_mapCacheHas.js
function mapCacheHas(key) {
  return getMapData_default(this, key).has(key);
}
var mapCacheHas_default = mapCacheHas;

// node_modules/lodash-es/_mapCacheSet.js
function mapCacheSet(key, value) {
  var data = getMapData_default(this, key), size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}
var mapCacheSet_default = mapCacheSet;

// node_modules/lodash-es/_MapCache.js
function MapCache(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
MapCache.prototype.clear = mapCacheClear_default;
MapCache.prototype["delete"] = mapCacheDelete_default;
MapCache.prototype.get = mapCacheGet_default;
MapCache.prototype.has = mapCacheHas_default;
MapCache.prototype.set = mapCacheSet_default;
var MapCache_default = MapCache;

// node_modules/lodash-es/_setCacheAdd.js
var HASH_UNDEFINED3 = "__lodash_hash_undefined__";
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED3);
  return this;
}
var setCacheAdd_default = setCacheAdd;

// node_modules/lodash-es/_setCacheHas.js
function setCacheHas(value) {
  return this.__data__.has(value);
}
var setCacheHas_default = setCacheHas;

// node_modules/lodash-es/_SetCache.js
function SetCache(values2) {
  var index = -1, length = values2 == null ? 0 : values2.length;
  this.__data__ = new MapCache_default();
  while (++index < length) {
    this.add(values2[index]);
  }
}
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd_default;
SetCache.prototype.has = setCacheHas_default;
var SetCache_default = SetCache;

// node_modules/lodash-es/_baseFindIndex.js
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
  while (fromRight ? index-- : ++index < length) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}
var baseFindIndex_default = baseFindIndex;

// node_modules/lodash-es/_baseIsNaN.js
function baseIsNaN(value) {
  return value !== value;
}
var baseIsNaN_default = baseIsNaN;

// node_modules/lodash-es/_strictIndexOf.js
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1, length = array.length;
  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}
var strictIndexOf_default = strictIndexOf;

// node_modules/lodash-es/_baseIndexOf.js
function baseIndexOf(array, value, fromIndex) {
  return value === value ? strictIndexOf_default(array, value, fromIndex) : baseFindIndex_default(array, baseIsNaN_default, fromIndex);
}
var baseIndexOf_default = baseIndexOf;

// node_modules/lodash-es/_arrayIncludes.js
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf_default(array, value, 0) > -1;
}
var arrayIncludes_default = arrayIncludes;

// node_modules/lodash-es/_arrayIncludesWith.js
function arrayIncludesWith(array, value, comparator) {
  var index = -1, length = array == null ? 0 : array.length;
  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}
var arrayIncludesWith_default = arrayIncludesWith;

// node_modules/lodash-es/_arrayMap.js
function arrayMap(array, iteratee) {
  var index = -1, length = array == null ? 0 : array.length, result = Array(length);
  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}
var arrayMap_default = arrayMap;

// node_modules/lodash-es/_baseUnary.js
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}
var baseUnary_default = baseUnary;

// node_modules/lodash-es/_cacheHas.js
function cacheHas(cache, key) {
  return cache.has(key);
}
var cacheHas_default = cacheHas;

// node_modules/lodash-es/_baseDifference.js
var LARGE_ARRAY_SIZE = 200;
function baseDifference(array, values2, iteratee, comparator) {
  var index = -1, includes2 = arrayIncludes_default, isCommon = true, length = array.length, result = [], valuesLength = values2.length;
  if (!length) {
    return result;
  }
  if (iteratee) {
    values2 = arrayMap_default(values2, baseUnary_default(iteratee));
  }
  if (comparator) {
    includes2 = arrayIncludesWith_default;
    isCommon = false;
  } else if (values2.length >= LARGE_ARRAY_SIZE) {
    includes2 = cacheHas_default;
    isCommon = false;
    values2 = new SetCache_default(values2);
  }
  outer:
    while (++index < length) {
      var value = array[index], computed = iteratee == null ? value : iteratee(value);
      value = comparator || value !== 0 ? value : 0;
      if (isCommon && computed === computed) {
        var valuesIndex = valuesLength;
        while (valuesIndex--) {
          if (values2[valuesIndex] === computed) {
            continue outer;
          }
        }
        result.push(value);
      } else if (!includes2(values2, computed, comparator)) {
        result.push(value);
      }
    }
  return result;
}
var baseDifference_default = baseDifference;

// node_modules/lodash-es/identity.js
function identity(value) {
  return value;
}
var identity_default = identity;

// node_modules/lodash-es/_apply.js
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);
    case 1:
      return func.call(thisArg, args[0]);
    case 2:
      return func.call(thisArg, args[0], args[1]);
    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}
var apply_default = apply;

// node_modules/lodash-es/_overRest.js
var nativeMax = Math.max;
function overRest(func, start, transform) {
  start = nativeMax(start === void 0 ? func.length - 1 : start, 0);
  return function() {
    var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array(length);
    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply_default(func, this, otherArgs);
  };
}
var overRest_default = overRest;

// node_modules/lodash-es/constant.js
function constant(value) {
  return function() {
    return value;
  };
}
var constant_default = constant;

// node_modules/lodash-es/_defineProperty.js
var defineProperty = function() {
  try {
    var func = getNative_default(Object, "defineProperty");
    func({}, "", {});
    return func;
  } catch (e) {
  }
}();
var defineProperty_default = defineProperty;

// node_modules/lodash-es/_baseSetToString.js
var baseSetToString = !defineProperty_default ? identity_default : function(func, string) {
  return defineProperty_default(func, "toString", {
    "configurable": true,
    "enumerable": false,
    "value": constant_default(string),
    "writable": true
  });
};
var baseSetToString_default = baseSetToString;

// node_modules/lodash-es/_shortOut.js
var HOT_COUNT = 800;
var HOT_SPAN = 16;
var nativeNow = Date.now;
function shortOut(func) {
  var count = 0, lastCalled = 0;
  return function() {
    var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(void 0, arguments);
  };
}
var shortOut_default = shortOut;

// node_modules/lodash-es/_setToString.js
var setToString = shortOut_default(baseSetToString_default);
var setToString_default = setToString;

// node_modules/lodash-es/_baseRest.js
function baseRest(func, start) {
  return setToString_default(overRest_default(func, start, identity_default), func + "");
}
var baseRest_default = baseRest;

// node_modules/lodash-es/isLength.js
var MAX_SAFE_INTEGER = 9007199254740991;
function isLength(value) {
  return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
var isLength_default = isLength;

// node_modules/lodash-es/isArrayLike.js
function isArrayLike(value) {
  return value != null && isLength_default(value.length) && !isFunction_default(value);
}
var isArrayLike_default = isArrayLike;

// node_modules/lodash-es/isObjectLike.js
function isObjectLike(value) {
  return value != null && typeof value == "object";
}
var isObjectLike_default = isObjectLike;

// node_modules/lodash-es/isArrayLikeObject.js
function isArrayLikeObject(value) {
  return isObjectLike_default(value) && isArrayLike_default(value);
}
var isArrayLikeObject_default = isArrayLikeObject;

// node_modules/lodash-es/without.js
var without = baseRest_default(function(array, values2) {
  return isArrayLikeObject_default(array) ? baseDifference_default(array, values2) : [];
});
var without_default = without;

// node_modules/lodash-es/isArray.js
var isArray = Array.isArray;
var isArray_default = isArray;

// node_modules/lodash-es/isSymbol.js
var symbolTag = "[object Symbol]";
function isSymbol(value) {
  return typeof value == "symbol" || isObjectLike_default(value) && baseGetTag_default(value) == symbolTag;
}
var isSymbol_default = isSymbol;

// node_modules/lodash-es/_isKey.js
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
var reIsPlainProp = /^\w*$/;
function isKey(value, object) {
  if (isArray_default(value)) {
    return false;
  }
  var type = typeof value;
  if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol_default(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}
var isKey_default = isKey;

// node_modules/lodash-es/memoize.js
var FUNC_ERROR_TEXT = "Expected a function";
function memoize(func, resolver) {
  if (typeof func != "function" || resolver != null && typeof resolver != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache_default)();
  return memoized;
}
memoize.Cache = MapCache_default;
var memoize_default = memoize;

// node_modules/lodash-es/_memoizeCapped.js
var MAX_MEMOIZE_SIZE = 500;
function memoizeCapped(func) {
  var result = memoize_default(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });
  var cache = result.cache;
  return result;
}
var memoizeCapped_default = memoizeCapped;

// node_modules/lodash-es/_stringToPath.js
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var reEscapeChar = /\\(\\)?/g;
var stringToPath = memoizeCapped_default(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46) {
    result.push("");
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
  });
  return result;
});
var stringToPath_default = stringToPath;

// node_modules/lodash-es/_baseToString.js
var INFINITY = 1 / 0;
var symbolProto = Symbol_default ? Symbol_default.prototype : void 0;
var symbolToString = symbolProto ? symbolProto.toString : void 0;
function baseToString(value) {
  if (typeof value == "string") {
    return value;
  }
  if (isArray_default(value)) {
    return arrayMap_default(value, baseToString) + "";
  }
  if (isSymbol_default(value)) {
    return symbolToString ? symbolToString.call(value) : "";
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY ? "-0" : result;
}
var baseToString_default = baseToString;

// node_modules/lodash-es/toString.js
function toString(value) {
  return value == null ? "" : baseToString_default(value);
}
var toString_default = toString;

// node_modules/lodash-es/_castPath.js
function castPath(value, object) {
  if (isArray_default(value)) {
    return value;
  }
  return isKey_default(value, object) ? [value] : stringToPath_default(toString_default(value));
}
var castPath_default = castPath;

// node_modules/lodash-es/last.js
function last(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : void 0;
}
var last_default = last;

// node_modules/lodash-es/_toKey.js
var INFINITY2 = 1 / 0;
function toKey(value) {
  if (typeof value == "string" || isSymbol_default(value)) {
    return value;
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY2 ? "-0" : result;
}
var toKey_default = toKey;

// node_modules/lodash-es/_baseGet.js
function baseGet(object, path) {
  path = castPath_default(path, object);
  var index = 0, length = path.length;
  while (object != null && index < length) {
    object = object[toKey_default(path[index++])];
  }
  return index && index == length ? object : void 0;
}
var baseGet_default = baseGet;

// node_modules/lodash-es/_baseSlice.js
function baseSlice(array, start, end) {
  var index = -1, length = array.length;
  if (start < 0) {
    start = -start > length ? 0 : length + start;
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : end - start >>> 0;
  start >>>= 0;
  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}
var baseSlice_default = baseSlice;

// node_modules/lodash-es/_parent.js
function parent(object, path) {
  return path.length < 2 ? object : baseGet_default(object, baseSlice_default(path, 0, -1));
}
var parent_default = parent;

// node_modules/lodash-es/_baseInvoke.js
function baseInvoke(object, path, args) {
  path = castPath_default(path, object);
  object = parent_default(object, path);
  var func = object == null ? object : object[toKey_default(last_default(path))];
  return func == null ? void 0 : apply_default(func, object, args);
}
var baseInvoke_default = baseInvoke;

// node_modules/lodash-es/invoke.js
var invoke = baseRest_default(baseInvoke_default);
var invoke_default = invoke;

// node_modules/lodash-es/isNil.js
function isNil(value) {
  return value == null;
}
var isNil_default = isNil;

// node_modules/clsx/dist/clsx.m.js
function r(e) {
  var t, f, n = "";
  if ("string" == typeof e || "number" == typeof e)
    n += e;
  else if ("object" == typeof e)
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    else
      for (t in e)
        e[t] && (n && (n += " "), n += t);
  return n;
}
function clsx() {
  for (var e, t, f = 0, n = ""; f < arguments.length; )
    (e = arguments[f++]) && (t = r(e)) && (n && (n += " "), n += t);
  return n;
}
var clsx_m_default = clsx;

// node_modules/semantic-ui-react/dist/es/elements/Icon/Icon.js
var import_prop_types3 = __toESM(require_prop_types());
var import_react4 = __toESM(require_react());

// node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}

// node_modules/lodash-es/isUndefined.js
function isUndefined(value) {
  return value === void 0;
}
var isUndefined_default = isUndefined;

// node_modules/lodash-es/_baseClamp.js
function baseClamp(number, lower, upper) {
  if (number === number) {
    if (upper !== void 0) {
      number = number <= upper ? number : upper;
    }
    if (lower !== void 0) {
      number = number >= lower ? number : lower;
    }
  }
  return number;
}
var baseClamp_default = baseClamp;

// node_modules/lodash-es/_trimmedEndIndex.js
var reWhitespace = /\s/;
function trimmedEndIndex(string) {
  var index = string.length;
  while (index-- && reWhitespace.test(string.charAt(index))) {
  }
  return index;
}
var trimmedEndIndex_default = trimmedEndIndex;

// node_modules/lodash-es/_baseTrim.js
var reTrimStart = /^\s+/;
function baseTrim(string) {
  return string ? string.slice(0, trimmedEndIndex_default(string) + 1).replace(reTrimStart, "") : string;
}
var baseTrim_default = baseTrim;

// node_modules/lodash-es/toNumber.js
var NAN = 0 / 0;
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
var reIsBinary = /^0b[01]+$/i;
var reIsOctal = /^0o[0-7]+$/i;
var freeParseInt = parseInt;
function toNumber(value) {
  if (typeof value == "number") {
    return value;
  }
  if (isSymbol_default(value)) {
    return NAN;
  }
  if (isObject_default(value)) {
    var other = typeof value.valueOf == "function" ? value.valueOf() : value;
    value = isObject_default(other) ? other + "" : other;
  }
  if (typeof value != "string") {
    return value === 0 ? value : +value;
  }
  value = baseTrim_default(value);
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
var toNumber_default = toNumber;

// node_modules/lodash-es/toFinite.js
var INFINITY3 = 1 / 0;
var MAX_INTEGER = 17976931348623157e292;
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber_default(value);
  if (value === INFINITY3 || value === -INFINITY3) {
    var sign = value < 0 ? -1 : 1;
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}
var toFinite_default = toFinite;

// node_modules/lodash-es/toInteger.js
function toInteger(value) {
  var result = toFinite_default(value), remainder = result % 1;
  return result === result ? remainder ? result - remainder : result : 0;
}
var toInteger_default = toInteger;

// node_modules/lodash-es/startsWith.js
function startsWith(string, target, position) {
  string = toString_default(string);
  position = position == null ? 0 : baseClamp_default(toInteger_default(position), 0, string.length);
  target = baseToString_default(target);
  return string.slice(position, position + target.length) == target;
}
var startsWith_default = startsWith;

// node_modules/lodash-es/_arrayFilter.js
function arrayFilter(array, predicate) {
  var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}
var arrayFilter_default = arrayFilter;

// node_modules/lodash-es/_createBaseFor.js
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}
var createBaseFor_default = createBaseFor;

// node_modules/lodash-es/_baseFor.js
var baseFor = createBaseFor_default();
var baseFor_default = baseFor;

// node_modules/lodash-es/_baseTimes.js
function baseTimes(n, iteratee) {
  var index = -1, result = Array(n);
  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}
var baseTimes_default = baseTimes;

// node_modules/lodash-es/_baseIsArguments.js
var argsTag = "[object Arguments]";
function baseIsArguments(value) {
  return isObjectLike_default(value) && baseGetTag_default(value) == argsTag;
}
var baseIsArguments_default = baseIsArguments;

// node_modules/lodash-es/isArguments.js
var objectProto6 = Object.prototype;
var hasOwnProperty5 = objectProto6.hasOwnProperty;
var propertyIsEnumerable = objectProto6.propertyIsEnumerable;
var isArguments = baseIsArguments_default(function() {
  return arguments;
}()) ? baseIsArguments_default : function(value) {
  return isObjectLike_default(value) && hasOwnProperty5.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
};
var isArguments_default = isArguments;

// node_modules/lodash-es/stubFalse.js
function stubFalse() {
  return false;
}
var stubFalse_default = stubFalse;

// node_modules/lodash-es/isBuffer.js
var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
var moduleExports = freeModule && freeModule.exports === freeExports;
var Buffer = moduleExports ? root_default.Buffer : void 0;
var nativeIsBuffer = Buffer ? Buffer.isBuffer : void 0;
var isBuffer = nativeIsBuffer || stubFalse_default;
var isBuffer_default = isBuffer;

// node_modules/lodash-es/_isIndex.js
var MAX_SAFE_INTEGER2 = 9007199254740991;
var reIsUint = /^(?:0|[1-9]\d*)$/;
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER2 : length;
  return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
}
var isIndex_default = isIndex;

// node_modules/lodash-es/_baseIsTypedArray.js
var argsTag2 = "[object Arguments]";
var arrayTag = "[object Array]";
var boolTag = "[object Boolean]";
var dateTag = "[object Date]";
var errorTag = "[object Error]";
var funcTag2 = "[object Function]";
var mapTag = "[object Map]";
var numberTag = "[object Number]";
var objectTag = "[object Object]";
var regexpTag = "[object RegExp]";
var setTag = "[object Set]";
var stringTag = "[object String]";
var weakMapTag = "[object WeakMap]";
var arrayBufferTag = "[object ArrayBuffer]";
var dataViewTag = "[object DataView]";
var float32Tag = "[object Float32Array]";
var float64Tag = "[object Float64Array]";
var int8Tag = "[object Int8Array]";
var int16Tag = "[object Int16Array]";
var int32Tag = "[object Int32Array]";
var uint8Tag = "[object Uint8Array]";
var uint8ClampedTag = "[object Uint8ClampedArray]";
var uint16Tag = "[object Uint16Array]";
var uint32Tag = "[object Uint32Array]";
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag2] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag2] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
function baseIsTypedArray(value) {
  return isObjectLike_default(value) && isLength_default(value.length) && !!typedArrayTags[baseGetTag_default(value)];
}
var baseIsTypedArray_default = baseIsTypedArray;

// node_modules/lodash-es/_nodeUtil.js
var freeExports2 = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule2 = freeExports2 && typeof module == "object" && module && !module.nodeType && module;
var moduleExports2 = freeModule2 && freeModule2.exports === freeExports2;
var freeProcess = moduleExports2 && freeGlobal_default.process;
var nodeUtil = function() {
  try {
    var types = freeModule2 && freeModule2.require && freeModule2.require("util").types;
    if (types) {
      return types;
    }
    return freeProcess && freeProcess.binding && freeProcess.binding("util");
  } catch (e) {
  }
}();
var nodeUtil_default = nodeUtil;

// node_modules/lodash-es/isTypedArray.js
var nodeIsTypedArray = nodeUtil_default && nodeUtil_default.isTypedArray;
var isTypedArray = nodeIsTypedArray ? baseUnary_default(nodeIsTypedArray) : baseIsTypedArray_default;
var isTypedArray_default = isTypedArray;

// node_modules/lodash-es/_arrayLikeKeys.js
var objectProto7 = Object.prototype;
var hasOwnProperty6 = objectProto7.hasOwnProperty;
function arrayLikeKeys(value, inherited) {
  var isArr = isArray_default(value), isArg = !isArr && isArguments_default(value), isBuff = !isArr && !isArg && isBuffer_default(value), isType = !isArr && !isArg && !isBuff && isTypedArray_default(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes_default(value.length, String) : [], length = result.length;
  for (var key in value) {
    if ((inherited || hasOwnProperty6.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
    (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
    isIndex_default(key, length)))) {
      result.push(key);
    }
  }
  return result;
}
var arrayLikeKeys_default = arrayLikeKeys;

// node_modules/lodash-es/_isPrototype.js
var objectProto8 = Object.prototype;
function isPrototype(value) {
  var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto8;
  return value === proto;
}
var isPrototype_default = isPrototype;

// node_modules/lodash-es/_overArg.js
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}
var overArg_default = overArg;

// node_modules/lodash-es/_nativeKeys.js
var nativeKeys = overArg_default(Object.keys, Object);
var nativeKeys_default = nativeKeys;

// node_modules/lodash-es/_baseKeys.js
var objectProto9 = Object.prototype;
var hasOwnProperty7 = objectProto9.hasOwnProperty;
function baseKeys(object) {
  if (!isPrototype_default(object)) {
    return nativeKeys_default(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty7.call(object, key) && key != "constructor") {
      result.push(key);
    }
  }
  return result;
}
var baseKeys_default = baseKeys;

// node_modules/lodash-es/keys.js
function keys(object) {
  return isArrayLike_default(object) ? arrayLikeKeys_default(object) : baseKeys_default(object);
}
var keys_default = keys;

// node_modules/lodash-es/_baseForOwn.js
function baseForOwn(object, iteratee) {
  return object && baseFor_default(object, iteratee, keys_default);
}
var baseForOwn_default = baseForOwn;

// node_modules/lodash-es/_createBaseEach.js
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike_default(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length, index = fromRight ? length : -1, iterable = Object(collection);
    while (fromRight ? index-- : ++index < length) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}
var createBaseEach_default = createBaseEach;

// node_modules/lodash-es/_baseEach.js
var baseEach = createBaseEach_default(baseForOwn_default);
var baseEach_default = baseEach;

// node_modules/lodash-es/_baseFilter.js
function baseFilter(collection, predicate) {
  var result = [];
  baseEach_default(collection, function(value, index, collection2) {
    if (predicate(value, index, collection2)) {
      result.push(value);
    }
  });
  return result;
}
var baseFilter_default = baseFilter;

// node_modules/lodash-es/_stackClear.js
function stackClear() {
  this.__data__ = new ListCache_default();
  this.size = 0;
}
var stackClear_default = stackClear;

// node_modules/lodash-es/_stackDelete.js
function stackDelete(key) {
  var data = this.__data__, result = data["delete"](key);
  this.size = data.size;
  return result;
}
var stackDelete_default = stackDelete;

// node_modules/lodash-es/_stackGet.js
function stackGet(key) {
  return this.__data__.get(key);
}
var stackGet_default = stackGet;

// node_modules/lodash-es/_stackHas.js
function stackHas(key) {
  return this.__data__.has(key);
}
var stackHas_default = stackHas;

// node_modules/lodash-es/_stackSet.js
var LARGE_ARRAY_SIZE2 = 200;
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache_default) {
    var pairs = data.__data__;
    if (!Map_default || pairs.length < LARGE_ARRAY_SIZE2 - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache_default(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}
var stackSet_default = stackSet;

// node_modules/lodash-es/_Stack.js
function Stack(entries) {
  var data = this.__data__ = new ListCache_default(entries);
  this.size = data.size;
}
Stack.prototype.clear = stackClear_default;
Stack.prototype["delete"] = stackDelete_default;
Stack.prototype.get = stackGet_default;
Stack.prototype.has = stackHas_default;
Stack.prototype.set = stackSet_default;
var Stack_default = Stack;

// node_modules/lodash-es/_arraySome.js
function arraySome(array, predicate) {
  var index = -1, length = array == null ? 0 : array.length;
  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}
var arraySome_default = arraySome;

// node_modules/lodash-es/_equalArrays.js
var COMPARE_PARTIAL_FLAG = 1;
var COMPARE_UNORDERED_FLAG = 2;
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache_default() : void 0;
  stack.set(array, other);
  stack.set(other, array);
  while (++index < arrLength) {
    var arrValue = array[index], othValue = other[index];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== void 0) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    if (seen) {
      if (!arraySome_default(other, function(othValue2, othIndex) {
        if (!cacheHas_default(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
          return seen.push(othIndex);
        }
      })) {
        result = false;
        break;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
      result = false;
      break;
    }
  }
  stack["delete"](array);
  stack["delete"](other);
  return result;
}
var equalArrays_default = equalArrays;

// node_modules/lodash-es/_Uint8Array.js
var Uint8Array = root_default.Uint8Array;
var Uint8Array_default = Uint8Array;

// node_modules/lodash-es/_mapToArray.js
function mapToArray(map2) {
  var index = -1, result = Array(map2.size);
  map2.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}
var mapToArray_default = mapToArray;

// node_modules/lodash-es/_setToArray.js
function setToArray(set) {
  var index = -1, result = Array(set.size);
  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}
var setToArray_default = setToArray;

// node_modules/lodash-es/_equalByTag.js
var COMPARE_PARTIAL_FLAG2 = 1;
var COMPARE_UNORDERED_FLAG2 = 2;
var boolTag2 = "[object Boolean]";
var dateTag2 = "[object Date]";
var errorTag2 = "[object Error]";
var mapTag2 = "[object Map]";
var numberTag2 = "[object Number]";
var regexpTag2 = "[object RegExp]";
var setTag2 = "[object Set]";
var stringTag2 = "[object String]";
var symbolTag2 = "[object Symbol]";
var arrayBufferTag2 = "[object ArrayBuffer]";
var dataViewTag2 = "[object DataView]";
var symbolProto2 = Symbol_default ? Symbol_default.prototype : void 0;
var symbolValueOf = symbolProto2 ? symbolProto2.valueOf : void 0;
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag2:
      if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;
    case arrayBufferTag2:
      if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array_default(object), new Uint8Array_default(other))) {
        return false;
      }
      return true;
    case boolTag2:
    case dateTag2:
    case numberTag2:
      return eq_default(+object, +other);
    case errorTag2:
      return object.name == other.name && object.message == other.message;
    case regexpTag2:
    case stringTag2:
      return object == other + "";
    case mapTag2:
      var convert = mapToArray_default;
    case setTag2:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG2;
      convert || (convert = setToArray_default);
      if (object.size != other.size && !isPartial) {
        return false;
      }
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG2;
      stack.set(object, other);
      var result = equalArrays_default(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack["delete"](object);
      return result;
    case symbolTag2:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}
var equalByTag_default = equalByTag;

// node_modules/lodash-es/_arrayPush.js
function arrayPush(array, values2) {
  var index = -1, length = values2.length, offset = array.length;
  while (++index < length) {
    array[offset + index] = values2[index];
  }
  return array;
}
var arrayPush_default = arrayPush;

// node_modules/lodash-es/_baseGetAllKeys.js
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray_default(object) ? result : arrayPush_default(result, symbolsFunc(object));
}
var baseGetAllKeys_default = baseGetAllKeys;

// node_modules/lodash-es/stubArray.js
function stubArray() {
  return [];
}
var stubArray_default = stubArray;

// node_modules/lodash-es/_getSymbols.js
var objectProto10 = Object.prototype;
var propertyIsEnumerable2 = objectProto10.propertyIsEnumerable;
var nativeGetSymbols = Object.getOwnPropertySymbols;
var getSymbols = !nativeGetSymbols ? stubArray_default : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter_default(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable2.call(object, symbol);
  });
};
var getSymbols_default = getSymbols;

// node_modules/lodash-es/_getAllKeys.js
function getAllKeys(object) {
  return baseGetAllKeys_default(object, keys_default, getSymbols_default);
}
var getAllKeys_default = getAllKeys;

// node_modules/lodash-es/_equalObjects.js
var COMPARE_PARTIAL_FLAG3 = 1;
var objectProto11 = Object.prototype;
var hasOwnProperty8 = objectProto11.hasOwnProperty;
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG3, objProps = getAllKeys_default(object), objLength = objProps.length, othProps = getAllKeys_default(other), othLength = othProps.length;
  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty8.call(other, key))) {
      return false;
    }
  }
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);
  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key], othValue = other[key];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
    }
    if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == "constructor");
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor, othCtor = other.constructor;
    if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack["delete"](object);
  stack["delete"](other);
  return result;
}
var equalObjects_default = equalObjects;

// node_modules/lodash-es/_DataView.js
var DataView = getNative_default(root_default, "DataView");
var DataView_default = DataView;

// node_modules/lodash-es/_Promise.js
var Promise2 = getNative_default(root_default, "Promise");
var Promise_default = Promise2;

// node_modules/lodash-es/_Set.js
var Set = getNative_default(root_default, "Set");
var Set_default = Set;

// node_modules/lodash-es/_WeakMap.js
var WeakMap = getNative_default(root_default, "WeakMap");
var WeakMap_default = WeakMap;

// node_modules/lodash-es/_getTag.js
var mapTag3 = "[object Map]";
var objectTag2 = "[object Object]";
var promiseTag = "[object Promise]";
var setTag3 = "[object Set]";
var weakMapTag2 = "[object WeakMap]";
var dataViewTag3 = "[object DataView]";
var dataViewCtorString = toSource_default(DataView_default);
var mapCtorString = toSource_default(Map_default);
var promiseCtorString = toSource_default(Promise_default);
var setCtorString = toSource_default(Set_default);
var weakMapCtorString = toSource_default(WeakMap_default);
var getTag = baseGetTag_default;
if (DataView_default && getTag(new DataView_default(new ArrayBuffer(1))) != dataViewTag3 || Map_default && getTag(new Map_default()) != mapTag3 || Promise_default && getTag(Promise_default.resolve()) != promiseTag || Set_default && getTag(new Set_default()) != setTag3 || WeakMap_default && getTag(new WeakMap_default()) != weakMapTag2) {
  getTag = function(value) {
    var result = baseGetTag_default(value), Ctor = result == objectTag2 ? value.constructor : void 0, ctorString = Ctor ? toSource_default(Ctor) : "";
    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag3;
        case mapCtorString:
          return mapTag3;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return setTag3;
        case weakMapCtorString:
          return weakMapTag2;
      }
    }
    return result;
  };
}
var getTag_default = getTag;

// node_modules/lodash-es/_baseIsEqualDeep.js
var COMPARE_PARTIAL_FLAG4 = 1;
var argsTag3 = "[object Arguments]";
var arrayTag2 = "[object Array]";
var objectTag3 = "[object Object]";
var objectProto12 = Object.prototype;
var hasOwnProperty9 = objectProto12.hasOwnProperty;
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray_default(object), othIsArr = isArray_default(other), objTag = objIsArr ? arrayTag2 : getTag_default(object), othTag = othIsArr ? arrayTag2 : getTag_default(other);
  objTag = objTag == argsTag3 ? objectTag3 : objTag;
  othTag = othTag == argsTag3 ? objectTag3 : othTag;
  var objIsObj = objTag == objectTag3, othIsObj = othTag == objectTag3, isSameTag = objTag == othTag;
  if (isSameTag && isBuffer_default(object)) {
    if (!isBuffer_default(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack_default());
    return objIsArr || isTypedArray_default(object) ? equalArrays_default(object, other, bitmask, customizer, equalFunc, stack) : equalByTag_default(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG4)) {
    var objIsWrapped = objIsObj && hasOwnProperty9.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty9.call(other, "__wrapped__");
    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
      stack || (stack = new Stack_default());
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack_default());
  return equalObjects_default(object, other, bitmask, customizer, equalFunc, stack);
}
var baseIsEqualDeep_default = baseIsEqualDeep;

// node_modules/lodash-es/_baseIsEqual.js
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || !isObjectLike_default(value) && !isObjectLike_default(other)) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep_default(value, other, bitmask, customizer, baseIsEqual, stack);
}
var baseIsEqual_default = baseIsEqual;

// node_modules/lodash-es/_baseIsMatch.js
var COMPARE_PARTIAL_FLAG5 = 1;
var COMPARE_UNORDERED_FLAG3 = 2;
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length, length = index, noCustomizer = !customizer;
  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0], objValue = object[key], srcValue = data[1];
    if (noCustomizer && data[2]) {
      if (objValue === void 0 && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack_default();
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === void 0 ? baseIsEqual_default(srcValue, objValue, COMPARE_PARTIAL_FLAG5 | COMPARE_UNORDERED_FLAG3, customizer, stack) : result)) {
        return false;
      }
    }
  }
  return true;
}
var baseIsMatch_default = baseIsMatch;

// node_modules/lodash-es/_isStrictComparable.js
function isStrictComparable(value) {
  return value === value && !isObject_default(value);
}
var isStrictComparable_default = isStrictComparable;

// node_modules/lodash-es/_getMatchData.js
function getMatchData(object) {
  var result = keys_default(object), length = result.length;
  while (length--) {
    var key = result[length], value = object[key];
    result[length] = [key, value, isStrictComparable_default(value)];
  }
  return result;
}
var getMatchData_default = getMatchData;

// node_modules/lodash-es/_matchesStrictComparable.js
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue && (srcValue !== void 0 || key in Object(object));
  };
}
var matchesStrictComparable_default = matchesStrictComparable;

// node_modules/lodash-es/_baseMatches.js
function baseMatches(source) {
  var matchData = getMatchData_default(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable_default(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch_default(object, source, matchData);
  };
}
var baseMatches_default = baseMatches;

// node_modules/lodash-es/get.js
function get(object, path, defaultValue) {
  var result = object == null ? void 0 : baseGet_default(object, path);
  return result === void 0 ? defaultValue : result;
}
var get_default = get;

// node_modules/lodash-es/_baseHasIn.js
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}
var baseHasIn_default = baseHasIn;

// node_modules/lodash-es/_hasPath.js
function hasPath(object, path, hasFunc) {
  path = castPath_default(path, object);
  var index = -1, length = path.length, result = false;
  while (++index < length) {
    var key = toKey_default(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength_default(length) && isIndex_default(key, length) && (isArray_default(object) || isArguments_default(object));
}
var hasPath_default = hasPath;

// node_modules/lodash-es/hasIn.js
function hasIn(object, path) {
  return object != null && hasPath_default(object, path, baseHasIn_default);
}
var hasIn_default = hasIn;

// node_modules/lodash-es/_baseMatchesProperty.js
var COMPARE_PARTIAL_FLAG6 = 1;
var COMPARE_UNORDERED_FLAG4 = 2;
function baseMatchesProperty(path, srcValue) {
  if (isKey_default(path) && isStrictComparable_default(srcValue)) {
    return matchesStrictComparable_default(toKey_default(path), srcValue);
  }
  return function(object) {
    var objValue = get_default(object, path);
    return objValue === void 0 && objValue === srcValue ? hasIn_default(object, path) : baseIsEqual_default(srcValue, objValue, COMPARE_PARTIAL_FLAG6 | COMPARE_UNORDERED_FLAG4);
  };
}
var baseMatchesProperty_default = baseMatchesProperty;

// node_modules/lodash-es/_baseProperty.js
function baseProperty(key) {
  return function(object) {
    return object == null ? void 0 : object[key];
  };
}
var baseProperty_default = baseProperty;

// node_modules/lodash-es/_basePropertyDeep.js
function basePropertyDeep(path) {
  return function(object) {
    return baseGet_default(object, path);
  };
}
var basePropertyDeep_default = basePropertyDeep;

// node_modules/lodash-es/property.js
function property(path) {
  return isKey_default(path) ? baseProperty_default(toKey_default(path)) : basePropertyDeep_default(path);
}
var property_default = property;

// node_modules/lodash-es/_baseIteratee.js
function baseIteratee(value) {
  if (typeof value == "function") {
    return value;
  }
  if (value == null) {
    return identity_default;
  }
  if (typeof value == "object") {
    return isArray_default(value) ? baseMatchesProperty_default(value[0], value[1]) : baseMatches_default(value);
  }
  return property_default(value);
}
var baseIteratee_default = baseIteratee;

// node_modules/lodash-es/filter.js
function filter(collection, predicate) {
  var func = isArray_default(collection) ? arrayFilter_default : baseFilter_default;
  return func(collection, baseIteratee_default(predicate, 3));
}
var filter_default = filter;

// node_modules/lodash-es/isEmpty.js
var mapTag4 = "[object Map]";
var setTag4 = "[object Set]";
var objectProto13 = Object.prototype;
var hasOwnProperty10 = objectProto13.hasOwnProperty;
function isEmpty(value) {
  if (value == null) {
    return true;
  }
  if (isArrayLike_default(value) && (isArray_default(value) || typeof value == "string" || typeof value.splice == "function" || isBuffer_default(value) || isTypedArray_default(value) || isArguments_default(value))) {
    return !value.length;
  }
  var tag = getTag_default(value);
  if (tag == mapTag4 || tag == setTag4) {
    return !value.size;
  }
  if (isPrototype_default(value)) {
    return !baseKeys_default(value).length;
  }
  for (var key in value) {
    if (hasOwnProperty10.call(value, key)) {
      return false;
    }
  }
  return true;
}
var isEmpty_default = isEmpty;

// node_modules/lodash-es/_baseIntersection.js
var nativeMin = Math.min;
function baseIntersection(arrays, iteratee, comparator) {
  var includes2 = comparator ? arrayIncludesWith_default : arrayIncludes_default, length = arrays[0].length, othLength = arrays.length, othIndex = othLength, caches = Array(othLength), maxLength = Infinity, result = [];
  while (othIndex--) {
    var array = arrays[othIndex];
    if (othIndex && iteratee) {
      array = arrayMap_default(array, baseUnary_default(iteratee));
    }
    maxLength = nativeMin(array.length, maxLength);
    caches[othIndex] = !comparator && (iteratee || length >= 120 && array.length >= 120) ? new SetCache_default(othIndex && array) : void 0;
  }
  array = arrays[0];
  var index = -1, seen = caches[0];
  outer:
    while (++index < length && result.length < maxLength) {
      var value = array[index], computed = iteratee ? iteratee(value) : value;
      value = comparator || value !== 0 ? value : 0;
      if (!(seen ? cacheHas_default(seen, computed) : includes2(result, computed, comparator))) {
        othIndex = othLength;
        while (--othIndex) {
          var cache = caches[othIndex];
          if (!(cache ? cacheHas_default(cache, computed) : includes2(arrays[othIndex], computed, comparator))) {
            continue outer;
          }
        }
        if (seen) {
          seen.push(computed);
        }
        result.push(value);
      }
    }
  return result;
}
var baseIntersection_default = baseIntersection;

// node_modules/lodash-es/_castArrayLikeObject.js
function castArrayLikeObject(value) {
  return isArrayLikeObject_default(value) ? value : [];
}
var castArrayLikeObject_default = castArrayLikeObject;

// node_modules/lodash-es/intersection.js
var intersection = baseRest_default(function(arrays) {
  var mapped = arrayMap_default(arrays, castArrayLikeObject_default);
  return mapped.length && mapped[0] === arrays[0] ? baseIntersection_default(mapped) : [];
});
var intersection_default = intersection;

// node_modules/lodash-es/_baseHas.js
var objectProto14 = Object.prototype;
var hasOwnProperty11 = objectProto14.hasOwnProperty;
function baseHas(object, key) {
  return object != null && hasOwnProperty11.call(object, key);
}
var baseHas_default = baseHas;

// node_modules/lodash-es/has.js
function has(object, path) {
  return object != null && hasPath_default(object, path, baseHas_default);
}
var has_default = has;

// node_modules/lodash-es/_arrayEach.js
function arrayEach(array, iteratee) {
  var index = -1, length = array == null ? 0 : array.length;
  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}
var arrayEach_default = arrayEach;

// node_modules/lodash-es/_castFunction.js
function castFunction(value) {
  return typeof value == "function" ? value : identity_default;
}
var castFunction_default = castFunction;

// node_modules/lodash-es/forEach.js
function forEach(collection, iteratee) {
  var func = isArray_default(collection) ? arrayEach_default : baseEach_default;
  return func(collection, castFunction_default(iteratee));
}
var forEach_default = forEach;

// node_modules/semantic-ui-react/dist/es/lib/ModernAutoControlledComponent.js
var import_react = __toESM(require_react());
var getDefaultPropName = function getDefaultPropName2(prop) {
  return "default" + (prop[0].toUpperCase() + prop.slice(1));
};
var getAutoControlledStateValue = function getAutoControlledStateValue2(propName, props, state, includeDefaults) {
  if (includeDefaults === void 0) {
    includeDefaults = false;
  }
  var propValue = props[propName];
  if (propValue !== void 0)
    return propValue;
  if (includeDefaults) {
    var defaultProp = props[getDefaultPropName(propName)];
    if (defaultProp !== void 0)
      return defaultProp;
    if (state) {
      var initialState = state[propName];
      if (initialState !== void 0)
        return initialState;
    }
  }
  if (propName === "checked")
    return false;
  if (propName === "value")
    return props.multiple ? [] : "";
};
var ModernAutoControlledComponent = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(ModernAutoControlledComponent2, _React$Component);
  function ModernAutoControlledComponent2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    var _this$constructor = _this.constructor, autoControlledProps = _this$constructor.autoControlledProps, getAutoControlledStateFromProps = _this$constructor.getAutoControlledStateFromProps;
    var state = invoke_default(_assertThisInitialized(_this), "getInitialAutoControlledState", _this.props) || {};
    if (true) {
      var _this$constructor2 = _this.constructor, defaultProps = _this$constructor2.defaultProps, name = _this$constructor2.name, propTypes = _this$constructor2.propTypes, getDerivedStateFromProps = _this$constructor2.getDerivedStateFromProps;
      if (getDerivedStateFromProps !== ModernAutoControlledComponent2.getDerivedStateFromProps) {
        console.error("Auto controlled " + name + " must specify a static getAutoControlledStateFromProps() instead of getDerivedStateFromProps().");
      }
      forEach_default(autoControlledProps, function(prop) {
        var defaultProp = getDefaultPropName(prop);
        if (!has_default(propTypes, defaultProp)) {
          console.error(name + ' is missing "' + defaultProp + '" propTypes validation for auto controlled prop "' + prop + '".');
        }
        if (!has_default(propTypes, prop)) {
          console.error(name + ' is missing propTypes validation for auto controlled prop "' + prop + '".');
        }
      });
      var illegalDefaults = intersection_default(autoControlledProps, keys_default(defaultProps));
      if (!isEmpty_default(illegalDefaults)) {
        console.error(["Do not set defaultProps for autoControlledProps. You can set defaults by", "setting state in the constructor or using an ES7 property initializer", "(https://babeljs.io/blog/2015/06/07/react-on-es6-plus#property-initializers)", "See " + name + ' props: "' + illegalDefaults + '".'].join(" "));
      }
      var illegalAutoControlled = filter_default(autoControlledProps, function(prop) {
        return startsWith_default(prop, "default");
      });
      if (!isEmpty_default(illegalAutoControlled)) {
        console.error(["Do not add default props to autoControlledProps.", "Default props are automatically handled.", "See " + name + ' autoControlledProps: "' + illegalAutoControlled + '".'].join(" "));
      }
    }
    var initialAutoControlledState = autoControlledProps.reduce(function(acc, prop) {
      acc[prop] = getAutoControlledStateValue(prop, _this.props, state, true);
      if (true) {
        var defaultPropName = getDefaultPropName(prop);
        var _name = _this.constructor.name;
        if (!isUndefined_default(_this.props[defaultPropName]) && !isUndefined_default(_this.props[prop])) {
          console.error(_name + ' prop "' + prop + '" is auto controlled. Specify either ' + defaultPropName + " or " + prop + ", but not both.");
        }
      }
      return acc;
    }, {});
    _this.state = _extends({}, state, initialAutoControlledState, {
      autoControlledProps,
      getAutoControlledStateFromProps
    });
    return _this;
  }
  ModernAutoControlledComponent2.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    var autoControlledProps = state.autoControlledProps, getAutoControlledStateFromProps = state.getAutoControlledStateFromProps;
    var newStateFromProps = autoControlledProps.reduce(function(acc, prop) {
      var isNextDefined = !isUndefined_default(props[prop]);
      if (isNextDefined)
        acc[prop] = props[prop];
      return acc;
    }, {});
    if (getAutoControlledStateFromProps) {
      var computedState = getAutoControlledStateFromProps(props, _extends({}, state, newStateFromProps), state);
      return _extends({}, newStateFromProps, computedState);
    }
    return newStateFromProps;
  };
  ModernAutoControlledComponent2.getAutoControlledStateFromProps = function getAutoControlledStateFromProps() {
    return null;
  };
  return ModernAutoControlledComponent2;
}(import_react.default.Component);

// node_modules/semantic-ui-react/dist/es/lib/childrenUtils.js
var childrenUtils_exports = {};
__export(childrenUtils_exports, {
  findByType: () => findByType,
  isNil: () => isNil2,
  someByType: () => someByType
});

// node_modules/lodash-es/_createFind.js
function createFind(findIndexFunc) {
  return function(collection, predicate, fromIndex) {
    var iterable = Object(collection);
    if (!isArrayLike_default(collection)) {
      var iteratee = baseIteratee_default(predicate, 3);
      collection = keys_default(collection);
      predicate = function(key) {
        return iteratee(iterable[key], key, iterable);
      };
    }
    var index = findIndexFunc(collection, predicate, fromIndex);
    return index > -1 ? iterable[iteratee ? collection[index] : index] : void 0;
  };
}
var createFind_default = createFind;

// node_modules/lodash-es/findIndex.js
var nativeMax2 = Math.max;
function findIndex(array, predicate, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index = fromIndex == null ? 0 : toInteger_default(fromIndex);
  if (index < 0) {
    index = nativeMax2(length + index, 0);
  }
  return baseFindIndex_default(array, baseIteratee_default(predicate, 3), index);
}
var findIndex_default = findIndex;

// node_modules/lodash-es/find.js
var find = createFind_default(findIndex_default);
var find_default = find;

// node_modules/lodash-es/_baseSome.js
function baseSome(collection, predicate) {
  var result;
  baseEach_default(collection, function(value, index, collection2) {
    result = predicate(value, index, collection2);
    return !result;
  });
  return !!result;
}
var baseSome_default = baseSome;

// node_modules/lodash-es/_isIterateeCall.js
function isIterateeCall(value, index, object) {
  if (!isObject_default(object)) {
    return false;
  }
  var type = typeof index;
  if (type == "number" ? isArrayLike_default(object) && isIndex_default(index, object.length) : type == "string" && index in object) {
    return eq_default(object[index], value);
  }
  return false;
}
var isIterateeCall_default = isIterateeCall;

// node_modules/lodash-es/some.js
function some(collection, predicate, guard) {
  var func = isArray_default(collection) ? arraySome_default : baseSome_default;
  if (guard && isIterateeCall_default(collection, predicate, guard)) {
    predicate = void 0;
  }
  return func(collection, baseIteratee_default(predicate, 3));
}
var some_default = some;

// node_modules/semantic-ui-react/dist/es/lib/childrenUtils.js
var import_react2 = __toESM(require_react());
var someByType = function someByType2(children, type) {
  return some_default(import_react2.Children.toArray(children), {
    type
  });
};
var findByType = function findByType2(children, type) {
  return find_default(import_react2.Children.toArray(children), {
    type
  });
};
var isNil2 = function isNil3(children) {
  return children === null || children === void 0 || Array.isArray(children) && children.length === 0;
};

// node_modules/semantic-ui-react/dist/es/lib/numberToWord.js
var numberToWordMap = {
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "fifteen",
  16: "sixteen"
};
function numberToWord(value) {
  var type = typeof value;
  if (type === "string" || type === "number") {
    return numberToWordMap[value] || value;
  }
  return "";
}

// node_modules/semantic-ui-react/dist/es/lib/classNameBuilders.js
var useKeyOnly = function useKeyOnly2(val, key) {
  return val && key;
};
var useValueAndKey = function useValueAndKey2(val, key) {
  return val && val !== true && val + " " + key;
};
var useKeyOrValueAndKey = function useKeyOrValueAndKey2(val, key) {
  return val && (val === true ? key : val + " " + key);
};
var useMultipleProp = function useMultipleProp2(val, key) {
  if (!val || val === true)
    return null;
  return val.replace("large screen", "large-screen").replace(/ vertically/g, "-vertically").split(" ").map(function(prop) {
    return prop.replace("-", " ") + " " + key;
  }).join(" ");
};
var useTextAlignProp = function useTextAlignProp2(val) {
  return val === "justified" ? "justified" : useValueAndKey(val, "aligned");
};
var useVerticalAlignProp = function useVerticalAlignProp2(val) {
  return useValueAndKey(val, "aligned");
};
var useWidthProp = function useWidthProp2(val, widthClass, canEqual) {
  if (widthClass === void 0) {
    widthClass = "";
  }
  if (canEqual === void 0) {
    canEqual = false;
  }
  if (canEqual && val === "equal") {
    return "equal width";
  }
  var valType = typeof val;
  if ((valType === "string" || valType === "number") && widthClass) {
    return numberToWord(val) + " " + widthClass;
  }
  return numberToWord(val);
};

// node_modules/semantic-ui-react/dist/es/lib/customPropTypes.js
var customPropTypes_exports = {};
__export(customPropTypes_exports, {
  collectionShorthand: () => collectionShorthand,
  contentShorthand: () => contentShorthand,
  demand: () => demand,
  deprecate: () => deprecate,
  disallow: () => disallow,
  domNode: () => domNode,
  every: () => every,
  givenProps: () => givenProps,
  itemShorthand: () => itemShorthand,
  multipleProp: () => multipleProp,
  ref: () => ref,
  refObject: () => refObject,
  suggest: () => suggest
});

// node_modules/lodash-es/_isFlattenable.js
var spreadableSymbol = Symbol_default ? Symbol_default.isConcatSpreadable : void 0;
function isFlattenable(value) {
  return isArray_default(value) || isArguments_default(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
}
var isFlattenable_default = isFlattenable;

// node_modules/lodash-es/_baseFlatten.js
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1, length = array.length;
  predicate || (predicate = isFlattenable_default);
  result || (result = []);
  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush_default(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}
var baseFlatten_default = baseFlatten;

// node_modules/lodash-es/difference.js
var difference = baseRest_default(function(array, values2) {
  return isArrayLikeObject_default(array) ? baseDifference_default(array, baseFlatten_default(values2, 1, isArrayLikeObject_default, true)) : [];
});
var difference_default = difference;

// node_modules/lodash-es/_castSlice.js
function castSlice(array, start, end) {
  var length = array.length;
  end = end === void 0 ? length : end;
  return !start && end >= length ? array : baseSlice_default(array, start, end);
}
var castSlice_default = castSlice;

// node_modules/lodash-es/_charsEndIndex.js
function charsEndIndex(strSymbols, chrSymbols) {
  var index = strSymbols.length;
  while (index-- && baseIndexOf_default(chrSymbols, strSymbols[index], 0) > -1) {
  }
  return index;
}
var charsEndIndex_default = charsEndIndex;

// node_modules/lodash-es/_charsStartIndex.js
function charsStartIndex(strSymbols, chrSymbols) {
  var index = -1, length = strSymbols.length;
  while (++index < length && baseIndexOf_default(chrSymbols, strSymbols[index], 0) > -1) {
  }
  return index;
}
var charsStartIndex_default = charsStartIndex;

// node_modules/lodash-es/_asciiToArray.js
function asciiToArray(string) {
  return string.split("");
}
var asciiToArray_default = asciiToArray;

// node_modules/lodash-es/_hasUnicode.js
var rsAstralRange = "\\ud800-\\udfff";
var rsComboMarksRange = "\\u0300-\\u036f";
var reComboHalfMarksRange = "\\ufe20-\\ufe2f";
var rsComboSymbolsRange = "\\u20d0-\\u20ff";
var rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;
var rsVarRange = "\\ufe0e\\ufe0f";
var rsZWJ = "\\u200d";
var reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + "]");
function hasUnicode(string) {
  return reHasUnicode.test(string);
}
var hasUnicode_default = hasUnicode;

// node_modules/lodash-es/_unicodeToArray.js
var rsAstralRange2 = "\\ud800-\\udfff";
var rsComboMarksRange2 = "\\u0300-\\u036f";
var reComboHalfMarksRange2 = "\\ufe20-\\ufe2f";
var rsComboSymbolsRange2 = "\\u20d0-\\u20ff";
var rsComboRange2 = rsComboMarksRange2 + reComboHalfMarksRange2 + rsComboSymbolsRange2;
var rsVarRange2 = "\\ufe0e\\ufe0f";
var rsAstral = "[" + rsAstralRange2 + "]";
var rsCombo = "[" + rsComboRange2 + "]";
var rsFitz = "\\ud83c[\\udffb-\\udfff]";
var rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")";
var rsNonAstral = "[^" + rsAstralRange2 + "]";
var rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}";
var rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]";
var rsZWJ2 = "\\u200d";
var reOptMod = rsModifier + "?";
var rsOptVar = "[" + rsVarRange2 + "]?";
var rsOptJoin = "(?:" + rsZWJ2 + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*";
var rsSeq = rsOptVar + reOptMod + rsOptJoin;
var rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
function unicodeToArray(string) {
  return string.match(reUnicode) || [];
}
var unicodeToArray_default = unicodeToArray;

// node_modules/lodash-es/_stringToArray.js
function stringToArray(string) {
  return hasUnicode_default(string) ? unicodeToArray_default(string) : asciiToArray_default(string);
}
var stringToArray_default = stringToArray;

// node_modules/lodash-es/trim.js
function trim(string, chars, guard) {
  string = toString_default(string);
  if (string && (guard || chars === void 0)) {
    return baseTrim_default(string);
  }
  if (!string || !(chars = baseToString_default(chars))) {
    return string;
  }
  var strSymbols = stringToArray_default(string), chrSymbols = stringToArray_default(chars), start = charsStartIndex_default(strSymbols, chrSymbols), end = charsEndIndex_default(strSymbols, chrSymbols) + 1;
  return castSlice_default(strSymbols, start, end).join("");
}
var trim_default = trim;

// node_modules/lodash-es/_baseAssignValue.js
function baseAssignValue(object, key, value) {
  if (key == "__proto__" && defineProperty_default) {
    defineProperty_default(object, key, {
      "configurable": true,
      "enumerable": true,
      "value": value,
      "writable": true
    });
  } else {
    object[key] = value;
  }
}
var baseAssignValue_default = baseAssignValue;

// node_modules/lodash-es/_assignValue.js
var objectProto15 = Object.prototype;
var hasOwnProperty12 = objectProto15.hasOwnProperty;
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty12.call(object, key) && eq_default(objValue, value)) || value === void 0 && !(key in object)) {
    baseAssignValue_default(object, key, value);
  }
}
var assignValue_default = assignValue;

// node_modules/lodash-es/_baseSet.js
function baseSet(object, path, value, customizer) {
  if (!isObject_default(object)) {
    return object;
  }
  path = castPath_default(path, object);
  var index = -1, length = path.length, lastIndex = length - 1, nested = object;
  while (nested != null && ++index < length) {
    var key = toKey_default(path[index]), newValue = value;
    if (key === "__proto__" || key === "constructor" || key === "prototype") {
      return object;
    }
    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : void 0;
      if (newValue === void 0) {
        newValue = isObject_default(objValue) ? objValue : isIndex_default(path[index + 1]) ? [] : {};
      }
    }
    assignValue_default(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}
var baseSet_default = baseSet;

// node_modules/lodash-es/_basePickBy.js
function basePickBy(object, paths, predicate) {
  var index = -1, length = paths.length, result = {};
  while (++index < length) {
    var path = paths[index], value = baseGet_default(object, path);
    if (predicate(value, path)) {
      baseSet_default(result, castPath_default(path, object), value);
    }
  }
  return result;
}
var basePickBy_default = basePickBy;

// node_modules/lodash-es/_basePick.js
function basePick(object, paths) {
  return basePickBy_default(object, paths, function(value, path) {
    return hasIn_default(object, path);
  });
}
var basePick_default = basePick;

// node_modules/lodash-es/flatten.js
function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten_default(array, 1) : [];
}
var flatten_default = flatten;

// node_modules/lodash-es/_flatRest.js
function flatRest(func) {
  return setToString_default(overRest_default(func, void 0, flatten_default), func + "");
}
var flatRest_default = flatRest;

// node_modules/lodash-es/pick.js
var pick = flatRest_default(function(object, paths) {
  return object == null ? {} : basePick_default(object, paths);
});
var pick_default = pick;

// node_modules/lodash-es/_getPrototype.js
var getPrototype = overArg_default(Object.getPrototypeOf, Object);
var getPrototype_default = getPrototype;

// node_modules/lodash-es/isPlainObject.js
var objectTag4 = "[object Object]";
var funcProto3 = Function.prototype;
var objectProto16 = Object.prototype;
var funcToString3 = funcProto3.toString;
var hasOwnProperty13 = objectProto16.hasOwnProperty;
var objectCtorString = funcToString3.call(Object);
function isPlainObject(value) {
  if (!isObjectLike_default(value) || baseGetTag_default(value) != objectTag4) {
    return false;
  }
  var proto = getPrototype_default(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty13.call(proto, "constructor") && proto.constructor;
  return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString3.call(Ctor) == objectCtorString;
}
var isPlainObject_default = isPlainObject;

// node_modules/lodash-es/_baseExtremum.js
function baseExtremum(array, iteratee, comparator) {
  var index = -1, length = array.length;
  while (++index < length) {
    var value = array[index], current = iteratee(value);
    if (current != null && (computed === void 0 ? current === current && !isSymbol_default(current) : comparator(current, computed))) {
      var computed = current, result = value;
    }
  }
  return result;
}
var baseExtremum_default = baseExtremum;

// node_modules/lodash-es/_baseLt.js
function baseLt(value, other) {
  return value < other;
}
var baseLt_default = baseLt;

// node_modules/lodash-es/min.js
function min(array) {
  return array && array.length ? baseExtremum_default(array, identity_default, baseLt_default) : void 0;
}
var min_default = min;

// node_modules/lodash-es/_baseSum.js
function baseSum(array, iteratee) {
  var result, index = -1, length = array.length;
  while (++index < length) {
    var current = iteratee(array[index]);
    if (current !== void 0) {
      result = result === void 0 ? current : result + current;
    }
  }
  return result;
}
var baseSum_default = baseSum;

// node_modules/lodash-es/sum.js
function sum(array) {
  return array && array.length ? baseSum_default(array, identity_default) : 0;
}
var sum_default = sum;

// node_modules/lodash-es/_baseMap.js
function baseMap(collection, iteratee) {
  var index = -1, result = isArrayLike_default(collection) ? Array(collection.length) : [];
  baseEach_default(collection, function(value, key, collection2) {
    result[++index] = iteratee(value, key, collection2);
  });
  return result;
}
var baseMap_default = baseMap;

// node_modules/lodash-es/map.js
function map(collection, iteratee) {
  var func = isArray_default(collection) ? arrayMap_default : baseMap_default;
  return func(collection, baseIteratee_default(iteratee, 3));
}
var map_default = map;

// node_modules/lodash-es/_baseSortBy.js
function baseSortBy(array, comparer) {
  var length = array.length;
  array.sort(comparer);
  while (length--) {
    array[length] = array[length].value;
  }
  return array;
}
var baseSortBy_default = baseSortBy;

// node_modules/lodash-es/_compareAscending.js
function compareAscending(value, other) {
  if (value !== other) {
    var valIsDefined = value !== void 0, valIsNull = value === null, valIsReflexive = value === value, valIsSymbol = isSymbol_default(value);
    var othIsDefined = other !== void 0, othIsNull = other === null, othIsReflexive = other === other, othIsSymbol = isSymbol_default(other);
    if (!othIsNull && !othIsSymbol && !valIsSymbol && value > other || valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol || valIsNull && othIsDefined && othIsReflexive || !valIsDefined && othIsReflexive || !valIsReflexive) {
      return 1;
    }
    if (!valIsNull && !valIsSymbol && !othIsSymbol && value < other || othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol || othIsNull && valIsDefined && valIsReflexive || !othIsDefined && valIsReflexive || !othIsReflexive) {
      return -1;
    }
  }
  return 0;
}
var compareAscending_default = compareAscending;

// node_modules/lodash-es/_compareMultiple.js
function compareMultiple(object, other, orders) {
  var index = -1, objCriteria = object.criteria, othCriteria = other.criteria, length = objCriteria.length, ordersLength = orders.length;
  while (++index < length) {
    var result = compareAscending_default(objCriteria[index], othCriteria[index]);
    if (result) {
      if (index >= ordersLength) {
        return result;
      }
      var order = orders[index];
      return result * (order == "desc" ? -1 : 1);
    }
  }
  return object.index - other.index;
}
var compareMultiple_default = compareMultiple;

// node_modules/lodash-es/_baseOrderBy.js
function baseOrderBy(collection, iteratees, orders) {
  if (iteratees.length) {
    iteratees = arrayMap_default(iteratees, function(iteratee) {
      if (isArray_default(iteratee)) {
        return function(value) {
          return baseGet_default(value, iteratee.length === 1 ? iteratee[0] : iteratee);
        };
      }
      return iteratee;
    });
  } else {
    iteratees = [identity_default];
  }
  var index = -1;
  iteratees = arrayMap_default(iteratees, baseUnary_default(baseIteratee_default));
  var result = baseMap_default(collection, function(value, key, collection2) {
    var criteria = arrayMap_default(iteratees, function(iteratee) {
      return iteratee(value);
    });
    return { "criteria": criteria, "index": ++index, "value": value };
  });
  return baseSortBy_default(result, function(object, other) {
    return compareMultiple_default(object, other, orders);
  });
}
var baseOrderBy_default = baseOrderBy;

// node_modules/lodash-es/sortBy.js
var sortBy = baseRest_default(function(collection, iteratees) {
  if (collection == null) {
    return [];
  }
  var length = iteratees.length;
  if (length > 1 && isIterateeCall_default(collection, iteratees[0], iteratees[1])) {
    iteratees = [];
  } else if (length > 2 && isIterateeCall_default(iteratees[0], iteratees[1], iteratees[2])) {
    iteratees = [iteratees[0]];
  }
  return baseOrderBy_default(collection, baseFlatten_default(iteratees, 1), []);
});
var sortBy_default = sortBy;

// node_modules/lodash-es/take.js
function take(array, n, guard) {
  if (!(array && array.length)) {
    return [];
  }
  n = guard || n === void 0 ? 1 : toInteger_default(n);
  return baseSlice_default(array, 0, n < 0 ? 0 : n);
}
var take_default = take;

// node_modules/semantic-ui-react/dist/es/lib/customPropTypes.js
var import_prop_types = __toESM(require_prop_types());

// node_modules/semantic-ui-react/dist/es/lib/leven.js
var leven = function leven2() {
  return 0;
};
if (true) {
  arr = [];
  charCodeCache = [];
  leven = function leven3(a, b) {
    if (a === b)
      return 0;
    var aLen = a.length;
    var bLen = b.length;
    if (aLen === 0)
      return bLen;
    if (bLen === 0)
      return aLen;
    var bCharCode;
    var ret;
    var tmp;
    var tmp2;
    var i = 0;
    var j = 0;
    while (i < aLen) {
      charCodeCache[i] = a.charCodeAt(i);
      arr[i] = ++i;
    }
    while (j < bLen) {
      bCharCode = b.charCodeAt(j);
      tmp = j++;
      ret = j;
      for (i = 0; i < aLen; i++) {
        tmp2 = bCharCode === charCodeCache[i] ? tmp : tmp + 1;
        tmp = arr[i];
        ret = arr[i] = tmp > ret ? tmp2 > ret ? ret + 1 : tmp2 : tmp2 > tmp ? tmp + 1 : tmp2;
      }
    }
    return ret;
  };
}
var arr;
var charCodeCache;
var leven_default = leven;

// node_modules/semantic-ui-react/dist/es/lib/customPropTypes.js
var typeOf = function typeOf2() {
  var _Object$prototype$toS;
  return (_Object$prototype$toS = Object.prototype.toString).call.apply(_Object$prototype$toS, arguments);
};
var domNode = function domNode2(props, propName) {
  if (props[propName] === void 0)
    return;
  if (typeof Element === "undefined")
    return;
  if (props[propName] instanceof Element)
    return;
  return new Error('Invalid prop "' + propName + '" supplied, expected a DOM node.');
};
var suggest = function suggest2(suggestions) {
  if (!Array.isArray(suggestions)) {
    throw new Error("Invalid argument supplied to suggest, expected an instance of array.");
  }
  var findBestSuggestions = memoize_default(function(str) {
    var propValueWords = str.split(" ");
    return take_default(sortBy_default(map_default(suggestions, function(suggestion) {
      var suggestionWords = suggestion.split(" ");
      var propValueScore = sum_default(map_default(map_default(propValueWords, function(x) {
        return map_default(suggestionWords, function(y) {
          return leven_default(x, y);
        });
      }), min_default));
      var suggestionScore = sum_default(map_default(map_default(suggestionWords, function(x) {
        return map_default(propValueWords, function(y) {
          return leven_default(x, y);
        });
      }), min_default));
      return {
        suggestion,
        score: propValueScore + suggestionScore
      };
    }), ["score", "suggestion"]), 3);
  });
  var suggestionsLookup = suggestions.reduce(function(acc, key) {
    acc[key.split(" ").sort().join(" ")] = true;
    return acc;
  }, {});
  return function(props, propName, componentName) {
    var propValue = props[propName];
    if (!propValue || suggestionsLookup[propValue])
      return;
    var propValueSorted = propValue.split(" ").sort().join(" ");
    if (suggestionsLookup[propValueSorted])
      return;
    var bestMatches = findBestSuggestions(propValue);
    if (bestMatches.some(function(x) {
      return x.score === 0;
    }))
      return;
    return new Error(["Invalid prop `" + propName + "` of value `" + propValue + "` supplied to `" + componentName + "`.", "\n\nInstead of `" + propValue + "`, did you mean:", bestMatches.map(function(x) {
      return "\n  - " + x.suggestion;
    }).join(""), "\n"].join(""));
  };
};
var disallow = function disallow2(disallowedProps) {
  return function(props, propName, componentName) {
    if (!Array.isArray(disallowedProps)) {
      throw new Error(["Invalid argument supplied to disallow, expected an instance of array.", " See `" + propName + "` prop in `" + componentName + "`."].join(""));
    }
    if (isNil_default(props[propName]) || props[propName] === false) {
      return;
    }
    var disallowed = disallowedProps.reduce(function(acc, disallowedProp) {
      if (!isNil_default(props[disallowedProp]) && props[disallowedProp] !== false) {
        return [].concat(acc, [disallowedProp]);
      }
      return acc;
    }, []);
    if (disallowed.length > 0) {
      return new Error(["Prop `" + propName + "` in `" + componentName + "` conflicts with props: `" + disallowed.join("`, `") + "`.", "They cannot be defined together, choose one or the other."].join(" "));
    }
  };
};
var every = function every2(validators) {
  return function(props, propName, componentName) {
    for (var _len = arguments.length, rest = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
      rest[_key - 3] = arguments[_key];
    }
    if (!Array.isArray(validators)) {
      throw new Error(["Invalid argument supplied to every, expected an instance of array.", "See `" + propName + "` prop in `" + componentName + "`."].join(" "));
    }
    var errors = [];
    validators.forEach(function(validator) {
      if (typeof validator !== "function") {
        throw new Error('every() argument "validators" should contain functions, found: ' + typeOf(validator) + ".");
      }
      var error = validator.apply(void 0, [props, propName, componentName].concat(rest));
      if (error) {
        errors.push(error);
      }
    });
    return errors[0];
  };
};
var givenProps = function givenProps2(propsShape, validator) {
  return function(props, propName, componentName) {
    for (var _len2 = arguments.length, rest = new Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
      rest[_key2 - 3] = arguments[_key2];
    }
    if (!isPlainObject_default(propsShape)) {
      throw new Error(["Invalid argument supplied to givenProps, expected an object.", "See `" + propName + "` prop in `" + componentName + "`."].join(" "));
    }
    if (typeof validator !== "function") {
      throw new Error(["Invalid argument supplied to givenProps, expected a function.", "See `" + propName + "` prop in `" + componentName + "`."].join(" "));
    }
    var shouldValidate = keys_default(propsShape).every(function(key) {
      var val = propsShape[key];
      return typeof val === "function" ? !val.apply(void 0, [props, key, componentName].concat(rest)) : val === props[propName];
    });
    if (!shouldValidate)
      return;
    var error = validator.apply(void 0, [props, propName, componentName].concat(rest));
    if (error) {
      var prettyProps = "{ " + keys_default(pick_default(keys_default(propsShape), props)).map(function(key) {
        var val = props[key];
        var renderedValue = val;
        if (typeof val === "string")
          renderedValue = '"' + val + '"';
        else if (Array.isArray(val))
          renderedValue = "[" + val.join(", ") + "]";
        else if (isObject_default(val))
          renderedValue = "{...}";
        return key + ": " + renderedValue;
      }).join(", ") + " }";
      error.message = "Given props " + prettyProps + ": " + error.message;
      return error;
    }
  };
};
var demand = function demand2(requiredProps) {
  return function(props, propName, componentName) {
    if (!Array.isArray(requiredProps)) {
      throw new Error(["Invalid `requiredProps` argument supplied to require, expected an instance of array.", " See `" + propName + "` prop in `" + componentName + "`."].join(""));
    }
    if (props[propName] === void 0)
      return;
    var missingRequired = requiredProps.filter(function(requiredProp) {
      return props[requiredProp] === void 0;
    });
    if (missingRequired.length > 0) {
      return new Error("`" + propName + "` prop in `" + componentName + "` requires props: `" + missingRequired.join("`, `") + "`.");
    }
  };
};
var multipleProp = function multipleProp2(possible) {
  return function(props, propName, componentName) {
    if (!Array.isArray(possible)) {
      throw new Error(["Invalid argument supplied to some, expected an instance of array.", "See `" + propName + "` prop in `" + componentName + "`."].join(" "));
    }
    var propValue = props[propName];
    if (isNil_default(propValue) || propValue === false)
      return;
    var values2 = propValue.replace("large screen", "large-screen").replace(/ vertically/g, "-vertically").split(" ").map(function(val) {
      return trim_default(val).replace("-", " ");
    });
    var invalid = difference_default(values2, possible);
    if (invalid.length > 0) {
      return new Error("`" + propName + "` prop in `" + componentName + "` has invalid values: `" + invalid.join("`, `") + "`.");
    }
  };
};
var contentShorthand = function contentShorthand2() {
  return every([disallow(["children"]), import_prop_types.default.node]).apply(void 0, arguments);
};
var itemShorthand = function itemShorthand2() {
  return every([disallow(["children"]), import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.node, import_prop_types.default.object, import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.node, import_prop_types.default.object]))])]).apply(void 0, arguments);
};
var collectionShorthand = function collectionShorthand2() {
  return every([disallow(["children"]), import_prop_types.default.arrayOf(itemShorthand)]).apply(void 0, arguments);
};
var deprecate = function deprecate2(help, validator) {
  return function(props, propName, componentName) {
    if (typeof help !== "string") {
      throw new Error(["Invalid `help` argument supplied to deprecate, expected a string.", "See `" + propName + "` prop in `" + componentName + "`."].join(" "));
    }
    if (props[propName] === void 0)
      return;
    var error = new Error("The `" + propName + "` prop in `" + componentName + "` is deprecated.");
    if (help)
      error.message += " " + help;
    if (validator) {
      if (typeof validator === "function") {
        for (var _len3 = arguments.length, args = new Array(_len3 > 3 ? _len3 - 3 : 0), _key3 = 3; _key3 < _len3; _key3++) {
          args[_key3 - 3] = arguments[_key3];
        }
        var validationError = validator.apply(void 0, [props, propName, componentName].concat(args));
        if (validationError) {
          error.message = error.message + " " + validationError.message;
        }
      } else {
        throw new Error(["Invalid argument supplied to deprecate, expected a function.", "See `" + propName + "` prop in `" + componentName + "`."].join(" "));
      }
    }
    return error;
  };
};
var refObject = import_prop_types.default.shape({
  current: import_prop_types.default.object
});
var ref = import_prop_types.default.oneOfType([import_prop_types.default.func, refObject]);

// node_modules/lodash-es/noop.js
function noop() {
}
var noop_default = noop;

// node_modules/lodash-es/_createSet.js
var INFINITY4 = 1 / 0;
var createSet = !(Set_default && 1 / setToArray_default(new Set_default([, -0]))[1] == INFINITY4) ? noop_default : function(values2) {
  return new Set_default(values2);
};
var createSet_default = createSet;

// node_modules/lodash-es/_baseUniq.js
var LARGE_ARRAY_SIZE3 = 200;
function baseUniq(array, iteratee, comparator) {
  var index = -1, includes2 = arrayIncludes_default, length = array.length, isCommon = true, result = [], seen = result;
  if (comparator) {
    isCommon = false;
    includes2 = arrayIncludesWith_default;
  } else if (length >= LARGE_ARRAY_SIZE3) {
    var set = iteratee ? null : createSet_default(array);
    if (set) {
      return setToArray_default(set);
    }
    isCommon = false;
    includes2 = cacheHas_default;
    seen = new SetCache_default();
  } else {
    seen = iteratee ? [] : result;
  }
  outer:
    while (++index < length) {
      var value = array[index], computed = iteratee ? iteratee(value) : value;
      value = comparator || value !== 0 ? value : 0;
      if (isCommon && computed === computed) {
        var seenIndex = seen.length;
        while (seenIndex--) {
          if (seen[seenIndex] === computed) {
            continue outer;
          }
        }
        if (iteratee) {
          seen.push(computed);
        }
        result.push(value);
      } else if (!includes2(seen, computed, comparator)) {
        if (seen !== result) {
          seen.push(computed);
        }
        result.push(value);
      }
    }
  return result;
}
var baseUniq_default = baseUniq;

// node_modules/lodash-es/uniq.js
function uniq(array) {
  return array && array.length ? baseUniq_default(array) : [];
}
var uniq_default = uniq;

// node_modules/lodash-es/isNumber.js
var numberTag3 = "[object Number]";
function isNumber(value) {
  return typeof value == "number" || isObjectLike_default(value) && baseGetTag_default(value) == numberTag3;
}
var isNumber_default = isNumber;

// node_modules/lodash-es/isString.js
var stringTag3 = "[object String]";
function isString(value) {
  return typeof value == "string" || !isArray_default(value) && isObjectLike_default(value) && baseGetTag_default(value) == stringTag3;
}
var isString_default = isString;

// node_modules/lodash-es/isBoolean.js
var boolTag3 = "[object Boolean]";
function isBoolean(value) {
  return value === true || value === false || isObjectLike_default(value) && baseGetTag_default(value) == boolTag3;
}
var isBoolean_default = isBoolean;

// node_modules/semantic-ui-react/dist/es/lib/factories.js
var React2 = __toESM(require_react());
var DEPRECATED_CALLS = {};
function createShorthand(Component10, mapValueToProps, val, options) {
  if (options === void 0) {
    options = {};
  }
  if (typeof Component10 !== "function" && typeof Component10 !== "string") {
    throw new Error("createShorthand() Component must be a string or function.");
  }
  if (isNil_default(val) || isBoolean_default(val)) {
    return null;
  }
  var valIsString = isString_default(val);
  var valIsNumber = isNumber_default(val);
  var valIsFunction = isFunction_default(val);
  var valIsReactElement = /* @__PURE__ */ React2.isValidElement(val);
  var valIsPropsObject = isPlainObject_default(val);
  var valIsPrimitiveValue = valIsString || valIsNumber || isArray_default(val);
  if (!valIsFunction && !valIsReactElement && !valIsPropsObject && !valIsPrimitiveValue) {
    if (true) {
      console.error(["Shorthand value must be a string|number|array|object|ReactElement|function.", " Use null|undefined|boolean for none", " Received " + typeof val + "."].join(""));
    }
    return null;
  }
  var _options = options, _options$defaultProps = _options.defaultProps, defaultProps = _options$defaultProps === void 0 ? {} : _options$defaultProps;
  var usersProps = valIsReactElement && val.props || valIsPropsObject && val || valIsPrimitiveValue && mapValueToProps(val);
  var _options2 = options, _options2$overridePro = _options2.overrideProps, overrideProps = _options2$overridePro === void 0 ? {} : _options2$overridePro;
  overrideProps = isFunction_default(overrideProps) ? overrideProps(_extends({}, defaultProps, usersProps)) : overrideProps;
  var props = _extends({}, defaultProps, usersProps, overrideProps);
  if (defaultProps.className || overrideProps.className || usersProps.className) {
    var mergedClassesNames = clsx_m_default(defaultProps.className, overrideProps.className, usersProps.className);
    props.className = uniq_default(mergedClassesNames.split(" ")).join(" ");
  }
  if (defaultProps.style || overrideProps.style || usersProps.style) {
    props.style = _extends({}, defaultProps.style, usersProps.style, overrideProps.style);
  }
  if (isNil_default(props.key)) {
    var childKey = props.childKey;
    var _options3 = options, _options3$autoGenerat = _options3.autoGenerateKey, autoGenerateKey = _options3$autoGenerat === void 0 ? true : _options3$autoGenerat;
    if (!isNil_default(childKey)) {
      props.key = typeof childKey === "function" ? childKey(props) : childKey;
      delete props.childKey;
    } else if (autoGenerateKey && (valIsString || valIsNumber)) {
      props.key = val;
    }
  }
  if (valIsReactElement) {
    return /* @__PURE__ */ React2.cloneElement(val, props);
  }
  if (typeof props.children === "function") {
    return props.children(Component10, _extends({}, props, {
      children: void 0
    }));
  }
  if (valIsPrimitiveValue || valIsPropsObject) {
    return /* @__PURE__ */ React2.createElement(Component10, props);
  }
  if (valIsFunction) {
    if (true) {
      if (!DEPRECATED_CALLS[Component10]) {
        DEPRECATED_CALLS[Component10] = true;
        console.warn('Warning: There is a deprecated shorthand function usage for "' + Component10 + '". It is deprecated and will be removed in v3 release. Please follow our upgrade guide: https://github.com/Semantic-Org/Semantic-UI-React/pull/4029');
      }
    }
    return val(Component10, props, props.children);
  }
}
function createShorthandFactory(Component10, mapValueToProps) {
  if (typeof Component10 !== "function" && typeof Component10 !== "string") {
    throw new Error("createShorthandFactory() Component must be a string or function.");
  }
  return function(val, options) {
    return createShorthand(Component10, mapValueToProps, val, options);
  };
}

// node_modules/semantic-ui-react/dist/es/lib/getUnhandledProps.js
var getUnhandledProps = function getUnhandledProps2(Component10, props) {
  var _Component$handledPro = Component10.handledProps, handledProps = _Component$handledPro === void 0 ? [] : _Component$handledPro;
  return Object.keys(props).reduce(function(acc, prop) {
    if (prop === "childKey")
      return acc;
    if (handledProps.indexOf(prop) === -1)
      acc[prop] = props[prop];
    return acc;
  }, {});
};
var getUnhandledProps_default = getUnhandledProps;

// node_modules/semantic-ui-react/dist/es/lib/getElementType.js
function getElementType(Component10, props, getDefault) {
  var _Component$defaultPro = Component10.defaultProps, defaultProps = _Component$defaultPro === void 0 ? {} : _Component$defaultPro;
  if (props.as && props.as !== defaultProps.as)
    return props.as;
  if (getDefault) {
    var computedDefault = getDefault();
    if (computedDefault)
      return computedDefault;
  }
  if (props.href)
    return "a";
  return defaultProps.as || "div";
}
var getElementType_default = getElementType;

// node_modules/lodash-es/_baseValues.js
function baseValues(object, props) {
  return arrayMap_default(props, function(key) {
    return object[key];
  });
}
var baseValues_default = baseValues;

// node_modules/lodash-es/values.js
function values(object) {
  return object == null ? [] : baseValues_default(object, keys_default(object));
}
var values_default = values;

// node_modules/lodash-es/includes.js
var nativeMax3 = Math.max;
function includes(collection, value, fromIndex, guard) {
  collection = isArrayLike_default(collection) ? collection : values_default(collection);
  fromIndex = fromIndex && !guard ? toInteger_default(fromIndex) : 0;
  var length = collection.length;
  if (fromIndex < 0) {
    fromIndex = nativeMax3(length + fromIndex, 0);
  }
  return isString_default(collection) ? fromIndex <= length && collection.indexOf(value, fromIndex) > -1 : !!length && baseIndexOf_default(collection, value, fromIndex) > -1;
}
var includes_default = includes;

// node_modules/semantic-ui-react/dist/es/lib/htmlPropsUtils.js
var htmlInputAttrs = [
  // REACT
  "selected",
  "defaultValue",
  "defaultChecked",
  // LIMITED HTML PROPS
  "accept",
  "autoCapitalize",
  "autoComplete",
  "autoCorrect",
  "autoFocus",
  "checked",
  "disabled",
  "enterKeyHint",
  "form",
  "id",
  "inputMode",
  "lang",
  "list",
  "max",
  "maxLength",
  "min",
  "minLength",
  "multiple",
  "name",
  "pattern",
  "placeholder",
  "readOnly",
  "required",
  "step",
  "title",
  "type",
  "value"
];
var htmlInputEvents = [
  // EVENTS
  // keyboard
  "onKeyDown",
  "onKeyPress",
  "onKeyUp",
  // focus
  "onFocus",
  "onBlur",
  // form
  "onChange",
  "onInput",
  // mouse
  "onClick",
  "onContextMenu",
  "onDrag",
  "onDragEnd",
  "onDragEnter",
  "onDragExit",
  "onDragLeave",
  "onDragOver",
  "onDragStart",
  "onDrop",
  "onMouseDown",
  "onMouseEnter",
  "onMouseLeave",
  "onMouseMove",
  "onMouseOut",
  "onMouseOver",
  "onMouseUp",
  // selection
  "onSelect",
  // touch
  "onTouchCancel",
  "onTouchEnd",
  "onTouchMove",
  "onTouchStart"
];
var htmlInputProps = [].concat(htmlInputAttrs, htmlInputEvents);
var htmlImageProps = ["alt", "height", "src", "srcSet", "width", "loading"];
var partitionHTMLProps = function partitionHTMLProps2(props, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, _options$htmlProps = _options.htmlProps, htmlProps = _options$htmlProps === void 0 ? htmlInputProps : _options$htmlProps, _options$includeAria = _options.includeAria, includeAria = _options$includeAria === void 0 ? true : _options$includeAria;
  var inputProps = {};
  var rest = {};
  forEach_default(props, function(val, prop) {
    var possibleAria = includeAria && (/^aria-.*$/.test(prop) || prop === "role");
    var target = includes_default(htmlProps, prop) || possibleAria ? inputProps : rest;
    target[prop] = val;
  });
  return [inputProps, rest];
};

// node_modules/semantic-ui-react/dist/es/lib/isBrowser.js
var hasDocument = typeof document === "object" && document !== null;
var hasWindow = typeof window === "object" && window !== null && window.self === window;
var isBrowser = function isBrowser2() {
  return !isNil_default(isBrowser2.override) ? isBrowser2.override : hasDocument && hasWindow;
};
var isBrowser_default = isBrowser;

// node_modules/lodash-es/_baseInRange.js
var nativeMax4 = Math.max;
var nativeMin2 = Math.min;
function baseInRange(number, start, end) {
  return number >= nativeMin2(start, end) && number < nativeMax4(start, end);
}
var baseInRange_default = baseInRange;

// node_modules/lodash-es/inRange.js
function inRange(number, start, end) {
  start = toFinite_default(start);
  if (end === void 0) {
    end = start;
    start = 0;
  } else {
    end = toFinite_default(end);
  }
  number = toNumber_default(number);
  return baseInRange_default(number, start, end);
}
var inRange_default = inRange;

// node_modules/lodash-es/head.js
function head(array) {
  return array && array.length ? array[0] : void 0;
}
var head_default = head;

// node_modules/semantic-ui-react/dist/es/lib/doesNodeContainClick.js
var doesNodeContainClick = function doesNodeContainClick2(node, e) {
  if (some_default([e, node], isNil_default))
    return false;
  if (e.target) {
    invoke_default(e.target, "setAttribute", "data-suir-click-target", true);
    if (document.querySelector("[data-suir-click-target=true]")) {
      invoke_default(e.target, "removeAttribute", "data-suir-click-target");
      return node.contains(e.target);
    }
  }
  var clientX = e.clientX, clientY = e.clientY;
  if (some_default([clientX, clientY], isNil_default))
    return false;
  var clientRects = node.getClientRects();
  if (!node.offsetWidth || !node.offsetHeight || !clientRects || !clientRects.length)
    return false;
  var _first2 = head_default(clientRects), top = _first2.top, bottom = _first2.bottom, left = _first2.left, right = _first2.right;
  if (some_default([top, bottom, left, right], isNil_default))
    return false;
  return inRange_default(clientY, top, bottom + 1e-3) && inRange_default(clientX, left, right + 1e-3);
};
var doesNodeContainClick_default = doesNodeContainClick;

// node_modules/semantic-ui-react/dist/es/lib/SUI.js
var SUI_exports = {};
__export(SUI_exports, {
  ACCESSIBILITY: () => ACCESSIBILITY,
  ALL_ICONS_IN_ALL_CONTEXTS: () => ALL_ICONS_IN_ALL_CONTEXTS,
  ARROWS: () => ARROWS,
  AUDIO_VIDEO: () => AUDIO_VIDEO,
  BRANDS: () => BRANDS,
  BUSINESS: () => BUSINESS,
  CHESS: () => CHESS,
  CODE: () => CODE,
  COLORS: () => COLORS,
  COMMUNICATION: () => COMMUNICATION,
  COMPONENT_CONTEXT_SPECIFIC_ICONS: () => COMPONENT_CONTEXT_SPECIFIC_ICONS,
  COMPUTERS: () => COMPUTERS,
  CURRENCY: () => CURRENCY,
  DATE_TIME: () => DATE_TIME,
  DESIGN: () => DESIGN,
  DIRECTIONAL_TRANSITIONS: () => DIRECTIONAL_TRANSITIONS,
  EDITORS: () => EDITORS,
  FILES: () => FILES,
  FLOATS: () => FLOATS,
  GENDERS: () => GENDERS,
  HANDS_GESTURES: () => HANDS_GESTURES,
  HEALTH: () => HEALTH,
  ICONS: () => ICONS,
  ICONS_AND_ALIASES: () => ICONS_AND_ALIASES,
  ICON_ALIASES: () => ICON_ALIASES,
  IMAGES: () => IMAGES,
  INTERFACES: () => INTERFACES,
  LOGISTICS: () => LOGISTICS,
  MAPS: () => MAPS,
  MEDICAL: () => MEDICAL,
  OBJECTS: () => OBJECTS,
  PAYMENTS_SHOPPING: () => PAYMENTS_SHOPPING,
  SHAPES: () => SHAPES,
  SIZES: () => SIZES,
  SPINNERS: () => SPINNERS,
  SPORTS: () => SPORTS,
  STATIC_TRANSITIONS: () => STATIC_TRANSITIONS,
  STATUS: () => STATUS,
  TEXT_ALIGNMENTS: () => TEXT_ALIGNMENTS,
  TRANSITIONS: () => TRANSITIONS,
  USERS_PEOPLE: () => USERS_PEOPLE,
  VEHICLES: () => VEHICLES,
  VERTICAL_ALIGNMENTS: () => VERTICAL_ALIGNMENTS,
  VISIBILITY: () => VISIBILITY,
  WIDTHS: () => WIDTHS,
  WRITING: () => WRITING
});
var COLORS = ["red", "orange", "yellow", "olive", "green", "teal", "blue", "violet", "purple", "pink", "brown", "grey", "black"];
var FLOATS = ["left", "right"];
var SIZES = ["mini", "tiny", "small", "medium", "large", "big", "huge", "massive"];
var TEXT_ALIGNMENTS = ["left", "center", "right", "justified"];
var VERTICAL_ALIGNMENTS = ["bottom", "middle", "top"];
var VISIBILITY = ["mobile", "tablet", "computer", "large screen", "widescreen"];
var WIDTHS = [].concat(keys_default(numberToWordMap), keys_default(numberToWordMap).map(Number), values_default(numberToWordMap));
var DIRECTIONAL_TRANSITIONS = ["browse", "browse right", "drop", "fade", "fade up", "fade down", "fade left", "fade right", "fly up", "fly down", "fly left", "fly right", "horizontal flip", "vertical flip", "scale", "slide up", "slide down", "slide left", "slide right", "swing up", "swing down", "swing left", "swing right", "zoom"];
var STATIC_TRANSITIONS = ["jiggle", "flash", "shake", "pulse", "tada", "bounce", "glow"];
var TRANSITIONS = [].concat(DIRECTIONAL_TRANSITIONS, STATIC_TRANSITIONS);
var ACCESSIBILITY = ["american sign language interpreting", "assistive listening systems", "audio description", "blind", "braille", "closed captioning", "closed captioning outline", "deaf", "low vision", "phone volume", "question circle", "question circle outline", "sign language", "tty", "universal access", "wheelchair"];
var ARROWS = ["angle double down", "angle double left", "angle double right", "angle double up", "angle down", "angle left", "angle right", "angle up", "arrow alternate circle down", "arrow alternate circle down outline", "arrow alternate circle left", "arrow alternate circle left outline", "arrow alternate circle right", "arrow alternate circle right outline", "arrow alternate circle up", "arrow alternate circle up outline", "arrow circle down", "arrow circle left", "arrow circle right", "arrow circle up", "arrow down", "arrow left", "arrow right", "arrow up", "arrows alternate", "arrows alternate horizontal", "arrows alternate vertical", "caret down", "caret left", "caret right", "caret square down", "caret square down outline", "caret square left", "caret square left outline", "caret square right", "caret square right outline", "caret square up", "caret square up outline", "caret up", "cart arrow down", "chart line", "chevron circle down", "chevron circle left", "chevron circle right", "chevron circle up", "chevron down", "chevron left", "chevron right", "chevron up", "cloud download", "cloud upload", "download", "exchange", "expand arrows alternate", "external alternate", "external square alternate", "hand point down", "hand point down outline", "hand point left", "hand point left outline", "hand point right", "hand point right outline", "hand point up", "hand point up outline", "hand pointer", "hand pointer outline", "history", "level down alternate", "level up alternate", "location arrow", "long arrow alternate down", "long arrow alternate left", "long arrow alternate right", "long arrow alternate up", "mouse pointer", "play", "random", "recycle", "redo", "redo alternate", "reply", "reply all", "retweet", "share", "share square", "share square outline", "sign-in", "sign-out", "sign-in alternate", "sign-out alternate", "sort", "sort alphabet down", "sort alphabet up", "sort amount down", "sort amount up", "sort down", "sort numeric down", "sort numeric up", "sort up", "sync", "sync alternate", "text height", "text width", "undo", "undo alternate", "upload", "zoom-in", "zoom-out"];
var AUDIO_VIDEO = ["audio description", "backward", "circle", "circle outline", "closed captioning", "closed captioning outline", "compress", "eject", "expand", "expand arrows alternate", "fast backward", "fast forward", "file audio", "file audio outline", "file video", "file video outline", "film", "forward", "headphones", "microphone", "microphone slash", "music", "pause", "pause circle", "pause circle outline", "phone volume", "play", "play circle", "play circle outline", "podcast", "random", "redo", "redo alternate", "rss", "rss square", "step backward", "step forward", "stop", "stop circle", "stop circle outline", "sync", "sync alternate", "undo", "undo alternate", "video", "volume down", "volume off", "volume up"];
var BUSINESS = ["address book", "address book outline", "address card", "address card outline", "archive", "balance scale", "birthday cake", "book", "briefcase", "building", "building outline", "bullhorn", "bullseye", "calculator", "calendar", "calendar outline", "calendar alternate", "calendar alternate outline", "certificate", "chart area", "chart bar", "chart bar outline", "chart line", "chart pie", "clipboard", "clipboard outline", "coffee", "columns", "compass", "compass outline", "copy", "copy outline", "copyright", "copyright outline", "cut", "edit", "edit outline", "envelope", "envelope outline", "envelope open", "envelope open outline", "envelope square", "eraser", "fax", "file", "file outline", "file alternate", "file alternate outline", "folder", "folder outline", "folder open", "folder open outline", "globe", "industry", "paperclip", "paste", "pen square", "pencil alternate", "percent", "phone", "phone square", "phone volume", "registered", "registered outline", "save", "save outline", "sitemap", "sticky note", "sticky note outline", "suitcase", "table", "tag", "tags", "tasks", "thumbtack", "trademark"];
var CHESS = ["chess", "chess bishop", "chess board", "chess king", "chess knight", "chess pawn", "chess queen", "chess rook", "square full"];
var CODE = ["archive", "barcode", "bath", "bug", "code", "code branch", "coffee", "file", "file outline", "file alternate", "file alternate outline", "file code", "file code outline", "filter", "fire extinguisher", "folder", "folder outline", "folder open", "folder open outline", "keyboard", "keyboard outline", "microchip", "qrcode", "shield alternate", "sitemap", "terminal", "user secret", "window close", "window close outline", "window maximize", "window maximize outline", "window minimize", "window minimize outline", "window restore", "window restore outline"];
var COMMUNICATION = ["address book", "address book outline", "address card", "address card outline", "american sign language interpreting", "assistive listening systems", "at", "bell", "bell outline", "bell slash", "bell slash outline", "bullhorn", "comment", "comment outline", "comment alternate", "comment alternate outline", "comments", "comments outline", "envelope", "envelope outline", "envelope open", "envelope open outline", "envelope square", "fax", "inbox", "language", "microphone", "microphone slash", "mobile", "mobile alternate", "paper plane", "paper plane outline", "phone", "phone square", "phone volume", "rss", "rss square", "tty", "wifi"];
var COMPUTERS = ["desktop", "download", "hdd", "hdd outline", "headphones", "keyboard", "keyboard outline", "laptop", "microchip", "mobile", "mobile alternate", "plug", "power off", "print", "save", "save outline", "server", "tablet", "tablet alternate", "tv", "upload"];
var CURRENCY = ["dollar sign", "euro sign", "lira sign", "money bill alternate", "money bill alternate outline", "pound sign", "ruble sign", "rupee sign", "shekel sign", "won sign", "yen sign"];
var DATE_TIME = ["bell", "bell outline", "bell slash", "bell slash outline", "calendar", "calendar outline", "calendar alternate", "calendar alternate outline", "calendar check", "calendar check outline", "calendar minus", "calendar minus outline", "calendar plus", "calendar plus outline", "calendar times", "calendar times outline", "clock", "clock outline", "hourglass", "hourglass outline", "hourglass end", "hourglass half", "hourglass start", "stopwatch"];
var DESIGN = ["adjust", "clone", "clone outline", "copy", "copy outline", "crop", "crosshairs", "cut", "edit", "edit outline", "eraser", "eye", "eye dropper", "eye slash", "eye slash outline", "object group", "object group outline", "object ungroup", "object ungroup outline", "paint brush", "paste", "pencil alternate", "save", "save outline", "tint"];
var EDITORS = ["align center", "align justify", "align left", "align right", "bold", "clipboard", "clipboard outline", "clone", "clone outline", "columns", "copy", "copy outline", "cut", "edit", "edit outline", "eraser", "file", "file outline", "file alternate", "file alternate outline", "font", "heading", "i cursor", "indent", "italic", "linkify", "list", "list alternate", "list alternate outline", "list ol", "list ul", "outdent", "paper plane", "paper plane outline", "paperclip", "paragraph", "paste", "pencil alternate", "print", "quote left", "quote right", "redo", "redo alternate", "reply", "reply all", "share", "strikethrough", "subscript", "superscript", "sync", "sync alternate", "table", "tasks", "text height", "text width", "th", "th large", "th list", "trash", "trash alternate", "trash alternate outline", "underline", "undo", "undo alternate", "unlink"];
var FILES = ["archive", "clone", "clone outline", "copy", "copy outline", "cut", "file", "file outline", "file alternate", "file alternate outline", "file archive", "file archive outline", "file audio", "file audio outline", "file code", "file code outline", "file excel", "file excel outline", "file image", "file image outline", "file pdf", "file pdf outline", "file powerpoint", "file powerpoint outline", "file video", "file video outline", "file word", "file word outline", "folder", "folder outline", "folder open", "folder open outline", "paste", "save", "save outline", "sticky note", "sticky note outline"];
var GENDERS = ["genderless", "mars", "mars double", "mars stroke", "mars stroke horizontal", "mars stroke vertical", "mercury", "neuter", "transgender", "transgender alternate", "venus", "venus double", "venus mars"];
var HANDS_GESTURES = ["hand lizard", "hand lizard outline", "hand paper", "hand paper outline", "hand peace", "hand peace outline", "hand point down", "hand point down outline", "hand point left", "hand point left outline", "hand point right", "hand point right outline", "hand point up", "hand point up outline", "hand pointer", "hand pointer outline", "hand rock", "hand rock outline", "hand scissors", "hand scissors outline", "hand spock", "hand spock outline", "handshake", "handshake outline", "thumbs down", "thumbs down outline", "thumbs up", "thumbs up outline"];
var HEALTH = ["ambulance", "h square", "heart", "heart outline", "heartbeat", "hospital", "hospital outline", "medkit", "plus square", "plus square outline", "stethoscope", "user md", "wheelchair"];
var IMAGES = ["adjust", "bolt", "camera", "camera retro", "clone", "clone outline", "compress", "expand", "eye", "eye dropper", "eye slash", "eye slash outline", "file image", "file image outline", "film", "id badge", "id badge outline", "id card", "id card outline", "image", "image outline", "images", "images outline", "sliders horizontal", "tint"];
var INTERFACES = ["ban", "barcode", "bars", "beer", "bell", "bell outline", "bell slash", "bell slash outline", "bug", "bullhorn", "bullseye", "calculator", "calendar", "calendar outline", "calendar alternate", "calendar alternate outline", "calendar check", "calendar check outline", "calendar minus", "calendar minus outline", "calendar plus", "calendar plus outline", "calendar times", "calendar times outline", "certificate", "check", "check circle", "check circle outline", "check square", "check square outline", "circle", "circle outline", "clipboard", "clipboard outline", "clone", "clone outline", "cloud", "cloud download", "cloud upload", "coffee", "cog", "cogs", "copy", "copy outline", "cut", "database", "dot circle", "dot circle outline", "download", "edit", "edit outline", "ellipsis horizontal", "ellipsis vertical", "envelope", "envelope outline", "envelope open", "envelope open outline", "eraser", "exclamation", "exclamation circle", "exclamation triangle", "external alternate", "external square alternate", "eye", "eye slash", "eye slash outline", "file", "file outline", "file alternate", "file alternate outline", "filter", "flag", "flag outline", "flag checkered", "folder", "folder outline", "folder open", "folder open outline", "frown", "frown outline", "hashtag", "heart", "heart outline", "history", "home", "i cursor", "info", "info circle", "language", "magic", "meh", "meh outline", "microphone", "microphone slash", "minus", "minus circle", "minus square", "minus square outline", "paste", "pencil alternate", "plus", "plus circle", "plus square", "plus square outline", "qrcode", "question", "question circle", "question circle outline", "quote left", "quote right", "redo", "redo alternate", "reply", "reply all", "rss", "rss square", "save", "save outline", "search", "search minus", "search plus", "share", "share alternate", "share alternate square", "share square", "share square outline", "shield alternate", "sign-in", "sign-out", "signal", "sitemap", "sliders horizontal", "smile", "smile outline", "sort", "sort alphabet down", "sort alphabet up", "sort amount down", "sort amount up", "sort down", "sort numeric down", "sort numeric up", "sort up", "star", "star outline", "star half", "star half outline", "sync", "sync alternate", "thumbs down", "thumbs down outline", "thumbs up", "thumbs up outline", "times", "times circle", "times circle outline", "toggle off", "toggle on", "trash", "trash alternate", "trash alternate outline", "trophy", "undo", "undo alternate", "upload", "user", "user outline", "user circle", "user circle outline", "wifi"];
var LOGISTICS = ["box", "boxes", "clipboard check", "clipboard list", "dolly", "dolly flatbed", "pallet", "shipping fast", "truck", "warehouse"];
var MAPS = ["ambulance", "anchor", "balance scale", "bath", "bed", "beer", "bell", "bell outline", "bell slash", "bell slash outline", "bicycle", "binoculars", "birthday cake", "blind", "bomb", "book", "bookmark", "bookmark outline", "briefcase", "building", "building outline", "car", "coffee", "crosshairs", "dollar sign", "eye", "eye slash", "eye slash outline", "fighter jet", "fire", "fire extinguisher", "flag", "flag outline", "flag checkered", "flask", "gamepad", "gavel", "gift", "glass martini", "globe", "graduation cap", "h square", "heart", "heart outline", "heartbeat", "home", "hospital", "hospital outline", "image", "image outline", "images", "images outline", "industry", "info", "info circle", "key", "leaf", "lemon", "lemon outline", "life ring", "life ring outline", "lightbulb", "lightbulb outline", "location arrow", "low vision", "magnet", "male", "map", "map outline", "map marker", "map marker alternate", "map pin", "map signs", "medkit", "money bill alternate", "money bill alternate outline", "motorcycle", "music", "newspaper", "newspaper outline", "paw", "phone", "phone square", "phone volume", "plane", "plug", "plus", "plus square", "plus square outline", "print", "recycle", "road", "rocket", "search", "search minus", "search plus", "ship", "shopping bag", "shopping basket", "shopping cart", "shower", "street view", "subway", "suitcase", "tag", "tags", "taxi", "thumbtack", "ticket alternate", "tint", "train", "tree", "trophy", "truck", "tty", "umbrella", "university", "utensil spoon", "utensils", "wheelchair", "wifi", "wrench"];
var MEDICAL = ["ambulance", "band aid", "dna", "first aid", "heart", "heart outline", "heartbeat", "hospital", "hospital outline", "hospital symbol", "pills", "plus", "stethoscope", "syringe", "thermometer", "user md", "weight"];
var OBJECTS = ["ambulance", "anchor", "archive", "balance scale", "bath", "bed", "beer", "bell", "bell outline", "bicycle", "binoculars", "birthday cake", "bomb", "book", "bookmark", "bookmark outline", "briefcase", "bug", "building", "building outline", "bullhorn", "bullseye", "bus", "calculator", "calendar", "calendar outline", "calendar alternate", "calendar alternate outline", "camera", "camera retro", "car", "clipboard", "clipboard outline", "cloud", "coffee", "cog", "cogs", "compass", "compass outline", "copy", "copy outline", "cube", "cubes", "cut", "envelope", "envelope outline", "envelope open", "envelope open outline", "eraser", "eye", "eye dropper", "fax", "fighter jet", "file", "file outline", "file alternate", "file alternate outline", "film", "fire", "fire extinguisher", "flag", "flag outline", "flag checkered", "flask", "futbol", "futbol outline", "gamepad", "gavel", "gem", "gem outline", "gift", "glass martini", "globe", "graduation cap", "hdd", "hdd outline", "headphones", "heart", "heart outline", "home", "hospital", "hospital outline", "hourglass", "hourglass outline", "image", "image outline", "images", "images outline", "industry", "key", "keyboard", "keyboard outline", "laptop", "leaf", "lemon", "lemon outline", "life ring", "life ring outline", "lightbulb", "lightbulb outline", "lock", "lock open", "magic", "magnet", "map", "map outline", "map marker", "map marker alternate", "map pin", "map signs", "medkit", "microchip", "microphone", "mobile", "mobile alternate", "money bill alternate", "money bill alternate outline", "moon", "moon outline", "motorcycle", "newspaper", "newspaper outline", "paint brush", "paper plane", "paper plane outline", "paperclip", "paste", "paw", "pencil alternate", "phone", "plane", "plug", "print", "puzzle piece", "road", "rocket", "save", "save outline", "search", "shield alternate", "shopping bag", "shopping basket", "shopping cart", "shower", "snowflake", "snowflake outline", "space shuttle", "star", "star outline", "sticky note", "sticky note outline", "stopwatch", "subway", "suitcase", "sun", "sun outline", "tablet", "tablet alternate", "tachometer alternate", "tag", "tags", "taxi", "thumbtack", "ticket alternate", "train", "trash", "trash alternate", "trash alternate outline", "tree", "trophy", "truck", "tv", "umbrella", "university", "unlock", "unlock alternate", "utensil spoon", "utensils", "wheelchair", "wrench"];
var PAYMENTS_SHOPPING = ["bell", "bell outline", "bookmark", "bookmark outline", "bullhorn", "camera", "camera retro", "cart arrow down", "cart plus", "certificate", "credit card", "credit card outline", "gem", "gem outline", "gift", "handshake", "handshake outline", "heart", "heart outline", "key", "shopping bag", "shopping basket", "shopping cart", "star", "star outline", "tag", "tags", "thumbs down", "thumbs down outline", "thumbs up", "thumbs up outline", "trophy"];
var SHAPES = ["bookmark", "bookmark outline", "calendar", "calendar outline", "certificate", "circle", "circle outline", "cloud", "comment", "comment outline", "file", "file outline", "folder", "folder outline", "heart", "heart outline", "map marker", "play", "square", "square outline", "star", "star outline"];
var SPINNERS = ["asterisk", "certificate", "circle notch", "cog", "compass", "compass outline", "crosshairs", "life ring", "life ring outline", "snowflake", "snowflake outline", "spinner", "sun", "sun outline", "sync"];
var SPORTS = ["baseball ball", "basketball ball", "bowling ball", "football ball", "futbol", "futbol outline", "golf ball", "hockey puck", "quidditch", "table tennis", "volleyball ball"];
var STATUS = ["ban", "battery empty", "battery full", "battery half", "battery quarter", "battery three quarters", "bell", "bell outline", "bell slash", "bell slash outline", "calendar", "calendar outline", "calendar alternate", "calendar alternate outline", "calendar check", "calendar check outline", "calendar minus", "calendar minus outline", "calendar plus", "calendar plus outline", "calendar times", "calendar times outline", "cart arrow down", "cart plus", "exclamation", "exclamation circle", "exclamation triangle", "eye", "eye slash", "eye slash outline", "file", "file outline", "file alternate", "file alternate outline", "folder", "folder outline", "folder open", "folder open outline", "info", "info circle", "lock", "lock open", "minus", "minus circle", "minus square", "minus square outline", "plus", "plus circle", "plus square", "plus square outline", "question", "question circle", "question circle outline", "shield alternate", "shopping cart", "sign in alternate", "sign out alternate", "thermometer empty", "thermometer full", "thermometer half", "thermometer quarter", "thermometer three quarters", "thumbs down", "thumbs down outline", "thumbs up", "thumbs up outline", "toggle off", "toggle on", "unlock", "unlock alternate"];
var USERS_PEOPLE = ["address book", "address book outline", "address card", "address card outline", "bed", "blind", "child", "female", "frown", "frown outline", "id badge", "id badge outline", "id card", "id card outline", "male", "meh", "meh outline", "power off", "smile", "smile outline", "street view", "user", "user outline", "user circle", "user circle outline", "user md", "user plus", "user secret", "user times", "users", "wheelchair"];
var VEHICLES = ["ambulance", "bicycle", "bus", "car", "fighter jet", "motorcycle", "paper plane", "paper plane outline", "plane", "rocket", "ship", "shopping cart", "space shuttle", "subway", "taxi", "train", "truck", "wheelchair"];
var WRITING = ["archive", "book", "bookmark", "bookmark outline", "edit", "edit outline", "envelope", "envelope outline", "envelope open", "envelope open outline", "eraser", "file", "file outline", "file alternate", "file alternate outline", "folder", "folder outline", "folder open", "folder open outline", "keyboard", "keyboard outline", "newspaper", "newspaper outline", "paper plane", "paper plane outline", "paperclip", "paragraph", "pen square", "pencil alternate", "quote left", "quote right", "sticky note", "sticky note outline", "thumbtack"];
var BRANDS = ["500px", "accessible", "accusoft", "adn", "adversal", "affiliatetheme", "algolia", "amazon", "amazon pay", "amilia", "android", "angellist", "angrycreative", "angular", "app store", "app store ios", "apper", "apple", "apple pay", "asymmetrik", "audible", "autoprefixer", "avianex", "aviato", "aws", "bandcamp", "behance", "behance square", "bimobject", "bitbucket", "bitcoin", "bity", "black tie", "blackberry", "blogger", "blogger b", "bluetooth", "bluetooth b", "btc", "buromobelexperte", "buysellads", "cc amazon pay", "cc amex", "cc apple pay", "cc diners club", "cc discover", "cc jcb", "cc mastercard", "cc paypal", "cc stripe", "cc visa", "centercode", "chrome", "cloudscale", "cloudsmith", "cloudversify", "codepen", "codiepie", "connectdevelop", "contao", "cpanel", "creative commons", "css3", "css3 alternate", "cuttlefish", "d and d", "dashcube", "delicious", "deploydog", "deskpro", "deviantart", "digg", "digital ocean", "discord", "discourse", "dochub", "docker", "draft2digital", "dribbble", "dribbble square", "dropbox", "drupal", "dyalog", "earlybirds", "edge", "elementor", "ember", "empire", "envira", "erlang", "ethereum", "etsy", "expeditedssl", "facebook", "facebook f", "facebook messenger", "facebook square", "firefox", "first order", "firstdraft", "flickr", "flipboard", "fly", "font awesome", "font awesome alternate", "font awesome flag", "fonticons", "fonticons fi", "fort awesome", "fort awesome alternate", "forumbee", "foursquare", "free code camp", "freebsd", "get pocket", "gg", "gg circle", "git", "git square", "github", "github alternate", "github square", "gitkraken", "gitlab", "gitter", "glide", "glide g", "gofore", "goodreads", "goodreads g", "google", "google drive", "google play", "google plus", "google plus g", "google plus square", "google wallet", "gratipay", "grav", "gripfire", "grunt", "gulp", "hacker news", "hacker news square", "hips", "hire a helper", "hooli", "hotjar", "houzz", "html5", "hubspot", "imdb", "instagram", "internet explorer", "ioxhost", "itunes", "itunes note", "jenkins", "joget", "joomla", "js", "js square", "jsfiddle", "keycdn", "kickstarter", "kickstarter k", "korvue", "laravel", "lastfm", "lastfm square", "leanpub", "less", "linechat", "linkedin", "linkedin alternate", "linode", "linux", "lyft", "magento", "maxcdn", "medapps", "medium", "medium m", "medrt", "meetup", "microsoft", "mix", "mixcloud", "mizuni", "modx", "monero", "napster", "nintendo switch", "node", "node js", "npm", "ns8", "nutritionix", "odnoklassniki", "odnoklassniki square", "opencart", "openid", "opera", "optin monster", "osi", "page4", "pagelines", "palfed", "patreon", "paypal", "periscope", "phabricator", "phoenix framework", "php", "pied piper", "pied piper alternate", "pied piper pp", "pinterest", "pinterest p", "pinterest square", "playstation", "product hunt", "pushed", "python", "qq", "quinscape", "quora", "ravelry", "react", "rebel", "redriver", "reddit", "reddit alien", "reddit square", "rendact", "renren", "replyd", "resolving", "rocketchat", "rockrms", "safari", "sass", "schlix", "scribd", "searchengin", "sellcast", "sellsy", "servicestack", "shirtsinbulk", "simplybuilt", "sistrix", "skyatlas", "skype", "slack", "slack hash", "slideshare", "snapchat", "snapchat ghost", "snapchat square", "soundcloud", "speakap", "spotify", "stack exchange", "stack overflow", "staylinked", "steam", "steam square", "steam symbol", "sticker mule", "strava", "stripe", "stripe s", "studiovinari", "stumbleupon", "stumbleupon circle", "superpowers", "supple", "telegram", "telegram plane", "tencent weibo", "themeisle", "trello", "tripadvisor", "tumblr", "tumblr square", "twitch", "twitter", "twitter square", "typo3", "uber", "uikit", "uniregistry", "untappd", "usb", "ussunnah", "vaadin", "viacoin", "viadeo", "viadeo square", "viber", "vimeo", "vimeo square", "vimeo v", "vine", "vk", "vnv", "vuejs", "wechat", "weibo", "weixin", "whatsapp", "whatsapp square", "whmcs", "wikipedia w", "windows", "wordpress", "wordpress simple", "wpbeginner", "wpexplorer", "wpforms", "xbox", "xing", "xing square", "y combinator", "yahoo", "yandex", "yandex international", "yelp", "yoast", "youtube", "youtube square"];
var ICONS = uniq_default([].concat(ACCESSIBILITY, ARROWS, AUDIO_VIDEO, BUSINESS, CHESS, CODE, COMMUNICATION, COMPUTERS, CURRENCY, DATE_TIME, DESIGN, EDITORS, FILES, GENDERS, HANDS_GESTURES, HEALTH, IMAGES, INTERFACES, LOGISTICS, MAPS, MEDICAL, OBJECTS, PAYMENTS_SHOPPING, SHAPES, SPINNERS, SPORTS, STATUS, USERS_PEOPLE, VEHICLES, WRITING, BRANDS));
var ICON_ALIASES = ["chess rock", "ordered list", "unordered list", "user doctor", "shield", "puzzle", "add circle", "add square", "add to calendar", "add to cart", "add user", "add", "alarm mute", "alarm", "ald", "als", "announcement", "area chart", "area graph", "arrow down cart", "asexual", "asl interpreting", "asl", "assistive listening devices", "attach", "attention", "balance", "bar", "bathtub", "battery four", "battery high", "battery low", "battery one", "battery three", "battery two", "battery zero", "birthday", "block layout", "bluetooth alternative", "broken chain", "browser", "call square", "call", "cancel", "cart", "cc", "chain", "chat", "checked calendar", "checkmark", "circle notched", "close", "cny", "cocktail", "commenting", "computer", "configure", "content", "deafness", "delete calendar", "delete", "detective", "discussions", "doctor", "dollar", "dont", "drivers license", "dropdown", "emergency", "envira gallery", "erase", "eur", "euro", "eyedropper", "factory", "favorite", "feed", "female homosexual", "file text", "file text outline", "find", "first aid", "fork", "game", "gay", "gbp", "google plus circle", "google plus official", "grab", "graduation", "grid layout", "group", "h", "hand victory", "handicap", "hard of hearing", "header", "help circle", "help", "heterosexual", "hide", "hotel", "hourglass four", "hourglass full", "hourglass one", "hourglass three", "hourglass two", "idea", "ils", "in cart", "inr", "intergender", "intersex", "jpy", "krw", "lab", "law", "legal", "lesbian", "lightning", "like", "line graph", "linkedin square", "linkify", "lira", "list layout", "magnify", "mail forward", "mail outline", "mail square", "mail", "male homosexual", "man", "marker", "mars alternate", "mars horizontal", "mars vertical", "microsoft edge", "military", "ms edge", "mute", "new pied piper", "non binary transgender", "numbered list", "options", "other gender horizontal", "other gender vertical", "other gender", "payment", "paypal card", "pencil square", "photo", "picture", "pie chart", "pie graph", "pied piper hat", "pin", "plus cart", "point", "pointing down", "pointing left", "pointing right", "pointing up", "pound", "power cord", "power", "privacy", "r circle", "rain", "record", "refresh", "remove circle", "remove from calendar", "remove user", "remove", "repeat", "rmb", "rouble", "rub", "ruble", "rupee", "s15", "selected radio", "send", "setting", "settings", "shekel", "sheqel", "shipping", "shop", "shuffle", "shutdown", "sidebar", "signing", "signup", "sliders", "soccer", "sort alphabet ascending", "sort alphabet descending", "sort ascending", "sort content ascending", "sort content descending", "sort descending", "sort numeric ascending", "sort numeric descending", "sound", "spy", "stripe card", "student", "talk", "target", "teletype", "television", "text cursor", "text telephone", "theme", "thermometer", "thumb tack", "time", "tm", "toggle down", "toggle left", "toggle right", "toggle up", "translate", "travel", "treatment", "triangle down", "triangle left", "triangle right", "triangle up", "try", "unhide", "unlinkify", "unmute", "usd", "user cancel", "user close", "user delete", "user x", "vcard", "video camera", "video play", "volume control phone", "wait", "warning circle", "warning sign", "warning", "wi-fi", "winner", "wizard", "woman", "won", "wordpress beginner", "wordpress forms", "world", "write square", "x", "yen", "zip", "zoom in", "zoom out", "zoom", "bitbucket square", "checkmark box", "circle thin", "cloud download", "cloud upload", "compose", "conversation", "credit card alternative", "currency", "dashboard", "diamond", "disk", "exchange", "external share", "external square", "external", "facebook official", "food", "hourglass zero", "level down", "level up", "log out", "meanpath", "money", "move", "pencil", "protect", "radio", "remove bookmark", "resize horizontal", "resize vertical", "sign in", "sign out", "spoon", "star half empty", "star half full", "ticket", "times rectangle", "write", "youtube play"];
var ICONS_AND_ALIASES = uniq_default([].concat(ICONS, ICON_ALIASES));
var COMPONENT_CONTEXT_SPECIFIC_ICONS = [
  "left dropdown"
  // nested dropdown menu direction icon
];
var ALL_ICONS_IN_ALL_CONTEXTS = uniq_default([].concat(ICONS_AND_ALIASES, COMPONENT_CONTEXT_SPECIFIC_ICONS));

// node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}

// node_modules/@fluentui/react-component-ref/dist/es/Ref.js
var React5 = __toESM(require_react());
var ReactIs = __toESM(require_react_is());

// node_modules/@fluentui/react-component-ref/dist/es/RefFindNode.js
var React3 = __toESM(require_react());
var ReactDOM = __toESM(require_react_dom());

// node_modules/@fluentui/react-component-ref/dist/es/utils.js
var handleRef = function handleRef2(ref2, node) {
  if (true) {
    if (typeof ref2 === "string") {
      throw new Error("We do not support refs as string, this is a legacy API and will be likely to be removed in one of the future releases of React.");
    }
  }
  if (typeof ref2 === "function") {
    ref2(node);
    return;
  }
  if (ref2 !== null && typeof ref2 === "object") {
    ref2.current = node;
  }
};
var isRefObject = function isRefObject2(ref2) {
  return (
    // https://github.com/facebook/react/blob/v16.8.2/packages/react-reconciler/src/ReactFiberCommitWork.js#L665
    ref2 !== null && typeof ref2 === "object" && ref2.hasOwnProperty("current")
  );
};

// node_modules/@fluentui/react-component-ref/dist/es/RefFindNode.js
function isFiberRef(node) {
  if (node === null) {
    return false;
  }
  if (node instanceof Element || node instanceof Text) {
    return false;
  }
  return !!(node.type && node.tag);
}
var RefFindNode = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(RefFindNode2, _React$Component);
  function RefFindNode2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.prevNode = void 0;
    return _this;
  }
  var _proto = RefFindNode2.prototype;
  _proto.componentDidMount = function componentDidMount() {
    var currentNode = ReactDOM.findDOMNode(this);
    if (true) {
      if (isFiberRef(currentNode)) {
        currentNode = null;
      }
    }
    this.prevNode = currentNode;
    handleRef(this.props.innerRef, currentNode);
  };
  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var currentNode = ReactDOM.findDOMNode(this);
    if (true) {
      if (isFiberRef(currentNode)) {
        currentNode = null;
      }
    }
    if (this.prevNode !== currentNode) {
      this.prevNode = currentNode;
      handleRef(this.props.innerRef, currentNode);
    }
    if (prevProps.innerRef !== this.props.innerRef) {
      handleRef(this.props.innerRef, currentNode);
    }
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    handleRef(this.props.innerRef, null);
    delete this.prevNode;
  };
  _proto.render = function render() {
    var children = this.props.children;
    return children;
  };
  return RefFindNode2;
}(React3.Component);

// node_modules/@fluentui/react-component-ref/dist/es/RefForward.js
var React4 = __toESM(require_react());
var RefForward = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(RefForward2, _React$Component);
  function RefForward2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.currentNode = void 0;
    _this.handleRefOverride = function(node) {
      var _this$props = _this.props, children = _this$props.children, innerRef = _this$props.innerRef;
      handleRef(children.ref, node);
      handleRef(innerRef, node);
      _this.currentNode = node;
    };
    return _this;
  }
  var _proto = RefForward2.prototype;
  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (prevProps.innerRef !== this.props.innerRef) {
      handleRef(this.props.innerRef, this.currentNode);
    }
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    delete this.currentNode;
  };
  _proto.render = function render() {
    var children = this.props.children;
    return /* @__PURE__ */ React4.cloneElement(children, {
      ref: this.handleRefOverride
    });
  };
  return RefForward2;
}(React4.Component);

// node_modules/@fluentui/react-component-ref/dist/es/Ref.js
var _excluded = ["children", "innerRef"];
var Ref = function Ref2(props) {
  var children = props.children, innerRef = props.innerRef, rest = _objectWithoutPropertiesLoose(props, _excluded);
  var child = React5.Children.only(children);
  var ElementType = ReactIs.isForwardRef(child) ? RefForward : RefFindNode;
  var childWithProps = child && rest && Object.keys(rest).length > 0 ? /* @__PURE__ */ React5.cloneElement(child, rest) : child;
  return /* @__PURE__ */ React5.createElement(ElementType, {
    innerRef
  }, childWithProps);
};

// node_modules/semantic-ui-react/dist/es/elements/Icon/IconGroup.js
var import_prop_types2 = __toESM(require_prop_types());
var import_react3 = __toESM(require_react());
function IconGroup(props) {
  var children = props.children, className = props.className, content = props.content, size = props.size;
  var classes = clsx_m_default(size, "icons", className);
  var rest = getUnhandledProps_default(IconGroup, props);
  var ElementType = getElementType_default(IconGroup, props);
  return /* @__PURE__ */ import_react3.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), childrenUtils_exports.isNil(children) ? content : children);
}
IconGroup.handledProps = ["as", "children", "className", "content", "size"];
IconGroup.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types2.default.elementType,
  /** Primary content. */
  children: import_prop_types2.default.node,
  /** Additional classes. */
  className: import_prop_types2.default.string,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand,
  /** Size of the icon group. */
  size: import_prop_types2.default.oneOf(without_default(SUI_exports.SIZES, "medium"))
} : {};
IconGroup.defaultProps = {
  as: "i"
};
var IconGroup_default = IconGroup;

// node_modules/semantic-ui-react/dist/es/elements/Icon/Icon.js
var Icon = /* @__PURE__ */ function(_PureComponent) {
  _inheritsLoose(Icon2, _PureComponent);
  function Icon2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _PureComponent.call.apply(_PureComponent, [this].concat(args)) || this;
    _this.handleClick = function(e) {
      var disabled = _this.props.disabled;
      if (disabled) {
        e.preventDefault();
        return;
      }
      invoke_default(_this.props, "onClick", e, _this.props);
    };
    return _this;
  }
  var _proto = Icon2.prototype;
  _proto.getIconAriaOptions = function getIconAriaOptions() {
    var ariaOptions = {};
    var _this$props = this.props, ariaLabel = _this$props["aria-label"], ariaHidden = _this$props["aria-hidden"];
    if (isNil_default(ariaLabel)) {
      ariaOptions["aria-hidden"] = "true";
    } else {
      ariaOptions["aria-label"] = ariaLabel;
    }
    if (!isNil_default(ariaHidden)) {
      ariaOptions["aria-hidden"] = ariaHidden;
    }
    return ariaOptions;
  };
  _proto.render = function render() {
    var _this$props2 = this.props, bordered = _this$props2.bordered, circular = _this$props2.circular, className = _this$props2.className, color = _this$props2.color, corner = _this$props2.corner, disabled = _this$props2.disabled, fitted = _this$props2.fitted, flipped = _this$props2.flipped, inverted = _this$props2.inverted, link = _this$props2.link, loading = _this$props2.loading, name = _this$props2.name, rotated = _this$props2.rotated, size = _this$props2.size;
    var classes = clsx_m_default(color, name, size, useKeyOnly(bordered, "bordered"), useKeyOnly(circular, "circular"), useKeyOnly(disabled, "disabled"), useKeyOnly(fitted, "fitted"), useKeyOnly(inverted, "inverted"), useKeyOnly(link, "link"), useKeyOnly(loading, "loading"), useKeyOrValueAndKey(corner, "corner"), useValueAndKey(flipped, "flipped"), useValueAndKey(rotated, "rotated"), "icon", className);
    var rest = getUnhandledProps_default(Icon2, this.props);
    var ElementType = getElementType_default(Icon2, this.props);
    var ariaOptions = this.getIconAriaOptions();
    return /* @__PURE__ */ import_react4.default.createElement(ElementType, _extends({}, rest, ariaOptions, {
      className: classes,
      onClick: this.handleClick
    }));
  };
  return Icon2;
}(import_react4.PureComponent);
Icon.handledProps = ["aria-hidden", "aria-label", "as", "bordered", "circular", "className", "color", "corner", "disabled", "fitted", "flipped", "inverted", "link", "loading", "name", "rotated", "size"];
Icon.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types3.default.elementType,
  /** Formatted to appear bordered. */
  bordered: import_prop_types3.default.bool,
  /** Icon can formatted to appear circular. */
  circular: import_prop_types3.default.bool,
  /** Additional classes. */
  className: import_prop_types3.default.string,
  /** Color of the icon. */
  color: import_prop_types3.default.oneOf(SUI_exports.COLORS),
  /** Icons can display a smaller corner icon. */
  corner: import_prop_types3.default.oneOfType([import_prop_types3.default.bool, import_prop_types3.default.oneOf(["top left", "top right", "bottom left", "bottom right"])]),
  /** Show that the icon is inactive. */
  disabled: import_prop_types3.default.bool,
  /** Fitted, without space to left or right of Icon. */
  fitted: import_prop_types3.default.bool,
  /** Icon can be flipped. */
  flipped: import_prop_types3.default.oneOf(["horizontally", "vertically"]),
  /** Formatted to have its colors inverted for contrast. */
  inverted: import_prop_types3.default.bool,
  /** Icon can be formatted as a link. */
  link: import_prop_types3.default.bool,
  /** Icon can be used as a simple loader. */
  loading: import_prop_types3.default.bool,
  /** Name of the icon. */
  name: customPropTypes_exports.suggest(SUI_exports.ALL_ICONS_IN_ALL_CONTEXTS),
  /** Icon can rotated. */
  rotated: import_prop_types3.default.oneOf(["clockwise", "counterclockwise"]),
  /** Size of the icon. */
  size: import_prop_types3.default.oneOf(without_default(SUI_exports.SIZES, "medium")),
  /** Icon can have an aria label. */
  "aria-hidden": import_prop_types3.default.string,
  /** Icon can have an aria label. */
  "aria-label": import_prop_types3.default.string
} : {};
Icon.defaultProps = {
  as: "i"
};
Icon.Group = IconGroup_default;
Icon.create = createShorthandFactory(Icon, function(value) {
  return {
    name: value
  };
});
var Icon_default = Icon;

// node_modules/semantic-ui-react/dist/es/elements/Image/Image.js
var import_prop_types13 = __toESM(require_prop_types());
var import_react15 = __toESM(require_react());

// node_modules/semantic-ui-react/dist/es/modules/Dimmer/Dimmer.js
var import_prop_types8 = __toESM(require_prop_types());
var import_react10 = __toESM(require_react());

// node_modules/semantic-ui-react/dist/es/addons/Portal/Portal.js
var import_event_stack = __toESM(require_lib());
var import_keyboard_key = __toESM(require_keyboardKey());
var import_prop_types5 = __toESM(require_prop_types());
var import_react7 = __toESM(require_react());

// node_modules/semantic-ui-react/dist/es/addons/Portal/utils/validateTrigger.js
var import_react5 = __toESM(require_react());
var ReactIs2 = __toESM(require_react_is());
function validateTrigger(element) {
  if (element) {
    import_react5.default.Children.only(element);
    if (ReactIs2.isFragment(element)) {
      throw new Error('An "React.Fragment" cannot be used as a `trigger`.');
    }
  }
}

// node_modules/semantic-ui-react/dist/es/addons/Portal/PortalInner.js
var import_prop_types4 = __toESM(require_prop_types());
var import_react6 = __toESM(require_react());
var import_react_dom = __toESM(require_react_dom());
var PortalInner = /* @__PURE__ */ function(_Component) {
  _inheritsLoose(PortalInner2, _Component);
  function PortalInner2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.handleRef = function(c) {
      handleRef(_this.props.innerRef, c);
    };
    return _this;
  }
  var _proto = PortalInner2.prototype;
  _proto.componentDidMount = function componentDidMount() {
    invoke_default(this.props, "onMount", null, this.props);
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    invoke_default(this.props, "onUnmount", null, this.props);
  };
  _proto.render = function render() {
    if (!isBrowser_default())
      return null;
    var _this$props = this.props, children = _this$props.children, _this$props$mountNode = _this$props.mountNode, mountNode = _this$props$mountNode === void 0 ? document.body : _this$props$mountNode;
    return /* @__PURE__ */ (0, import_react_dom.createPortal)(/* @__PURE__ */ import_react6.default.createElement(Ref, {
      innerRef: this.handleRef
    }, children), mountNode);
  };
  return PortalInner2;
}(import_react6.Component);
PortalInner.handledProps = ["children", "innerRef", "mountNode", "onMount", "onUnmount"];
PortalInner.propTypes = true ? {
  /** Primary content. */
  children: import_prop_types4.default.node.isRequired,
  /** Called with a ref to the inner node. */
  innerRef: customPropTypes_exports.ref,
  /** The node where the portal should mount. */
  mountNode: import_prop_types4.default.any,
  /**
   * Called when the portal is mounted on the DOM
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onMount: import_prop_types4.default.func,
  /**
   * Called when the portal is unmounted from the DOM
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onUnmount: import_prop_types4.default.func
} : {};
var PortalInner_default = PortalInner;

// node_modules/semantic-ui-react/dist/es/addons/Portal/Portal.js
var Portal = /* @__PURE__ */ function(_Component) {
  _inheritsLoose(Portal2, _Component);
  function Portal2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.contentRef = /* @__PURE__ */ import_react7.default.createRef();
    _this.triggerRef = /* @__PURE__ */ import_react7.default.createRef();
    _this.latestDocumentMouseDownEvent = null;
    _this.handleDocumentMouseDown = function(e) {
      _this.latestDocumentMouseDownEvent = e;
    };
    _this.handleDocumentClick = function(e) {
      var closeOnDocumentClick = _this.props.closeOnDocumentClick;
      var currentMouseDownEvent = _this.latestDocumentMouseDownEvent;
      _this.latestDocumentMouseDownEvent = null;
      if (!_this.contentRef.current || // no portal
      doesNodeContainClick_default(_this.triggerRef.current, e) || // event happened in trigger (delegate to trigger handlers)
      currentMouseDownEvent && doesNodeContainClick_default(_this.contentRef.current, currentMouseDownEvent) || // event originated in the portal but was ended outside
      doesNodeContainClick_default(_this.contentRef.current, e)) {
        return;
      }
      if (closeOnDocumentClick) {
        _this.close(e);
      }
    };
    _this.handleEscape = function(e) {
      if (!_this.props.closeOnEscape)
        return;
      if (import_keyboard_key.default.getCode(e) !== import_keyboard_key.default.Escape)
        return;
      _this.close(e);
    };
    _this.handlePortalMouseLeave = function(e) {
      var _this$props = _this.props, closeOnPortalMouseLeave = _this$props.closeOnPortalMouseLeave, mouseLeaveDelay = _this$props.mouseLeaveDelay;
      if (!closeOnPortalMouseLeave)
        return;
      if (e.target !== _this.contentRef.current)
        return;
      _this.mouseLeaveTimer = _this.closeWithTimeout(e, mouseLeaveDelay);
    };
    _this.handlePortalMouseEnter = function() {
      var closeOnPortalMouseLeave = _this.props.closeOnPortalMouseLeave;
      if (!closeOnPortalMouseLeave)
        return;
      clearTimeout(_this.mouseLeaveTimer);
    };
    _this.handleTriggerBlur = function(e) {
      var _this$props2 = _this.props, trigger = _this$props2.trigger, closeOnTriggerBlur = _this$props2.closeOnTriggerBlur;
      for (var _len2 = arguments.length, rest = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        rest[_key2 - 1] = arguments[_key2];
      }
      invoke_default.apply(void 0, [trigger, "props.onBlur", e].concat(rest));
      var target = e.relatedTarget || document.activeElement;
      var didFocusPortal = invoke_default(_this.contentRef.current, "contains", target);
      if (!closeOnTriggerBlur || didFocusPortal)
        return;
      _this.close(e);
    };
    _this.handleTriggerClick = function(e) {
      var _this$props3 = _this.props, trigger = _this$props3.trigger, closeOnTriggerClick = _this$props3.closeOnTriggerClick, openOnTriggerClick = _this$props3.openOnTriggerClick;
      var open = _this.state.open;
      for (var _len3 = arguments.length, rest = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        rest[_key3 - 1] = arguments[_key3];
      }
      invoke_default.apply(void 0, [trigger, "props.onClick", e].concat(rest));
      if (open && closeOnTriggerClick) {
        _this.close(e);
      } else if (!open && openOnTriggerClick) {
        _this.open(e);
      }
    };
    _this.handleTriggerFocus = function(e) {
      var _this$props4 = _this.props, trigger = _this$props4.trigger, openOnTriggerFocus = _this$props4.openOnTriggerFocus;
      for (var _len4 = arguments.length, rest = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        rest[_key4 - 1] = arguments[_key4];
      }
      invoke_default.apply(void 0, [trigger, "props.onFocus", e].concat(rest));
      if (!openOnTriggerFocus)
        return;
      _this.open(e);
    };
    _this.handleTriggerMouseLeave = function(e) {
      clearTimeout(_this.mouseEnterTimer);
      var _this$props5 = _this.props, trigger = _this$props5.trigger, closeOnTriggerMouseLeave = _this$props5.closeOnTriggerMouseLeave, mouseLeaveDelay = _this$props5.mouseLeaveDelay;
      for (var _len5 = arguments.length, rest = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
        rest[_key5 - 1] = arguments[_key5];
      }
      invoke_default.apply(void 0, [trigger, "props.onMouseLeave", e].concat(rest));
      if (!closeOnTriggerMouseLeave)
        return;
      _this.mouseLeaveTimer = _this.closeWithTimeout(e, mouseLeaveDelay);
    };
    _this.handleTriggerMouseEnter = function(e) {
      clearTimeout(_this.mouseLeaveTimer);
      var _this$props6 = _this.props, trigger = _this$props6.trigger, mouseEnterDelay = _this$props6.mouseEnterDelay, openOnTriggerMouseEnter = _this$props6.openOnTriggerMouseEnter;
      for (var _len6 = arguments.length, rest = new Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
        rest[_key6 - 1] = arguments[_key6];
      }
      invoke_default.apply(void 0, [trigger, "props.onMouseEnter", e].concat(rest));
      if (!openOnTriggerMouseEnter)
        return;
      _this.mouseEnterTimer = _this.openWithTimeout(e, mouseEnterDelay);
    };
    _this.open = function(e) {
      invoke_default(_this.props, "onOpen", e, _extends({}, _this.props, {
        open: true
      }));
      _this.setState({
        open: true
      });
    };
    _this.openWithTimeout = function(e, delay) {
      var eventClone = _extends({}, e);
      return setTimeout(function() {
        return _this.open(eventClone);
      }, delay || 0);
    };
    _this.close = function(e) {
      _this.setState({
        open: false
      });
      invoke_default(_this.props, "onClose", e, _extends({}, _this.props, {
        open: false
      }));
    };
    _this.closeWithTimeout = function(e, delay) {
      var eventClone = _extends({}, e);
      return setTimeout(function() {
        return _this.close(eventClone);
      }, delay || 0);
    };
    _this.handleMount = function() {
      invoke_default(_this.props, "onMount", null, _this.props);
    };
    _this.handleUnmount = function() {
      invoke_default(_this.props, "onUnmount", null, _this.props);
    };
    _this.handleTriggerRef = function(c) {
      _this.triggerRef.current = c;
      handleRef(_this.props.triggerRef, c);
    };
    return _this;
  }
  var _proto = Portal2.prototype;
  _proto.componentWillUnmount = function componentWillUnmount() {
    clearTimeout(this.mouseEnterTimer);
    clearTimeout(this.mouseLeaveTimer);
  };
  _proto.render = function render() {
    var _this$props7 = this.props, children = _this$props7.children, eventPool = _this$props7.eventPool, mountNode = _this$props7.mountNode, trigger = _this$props7.trigger;
    var open = this.state.open;
    if (true) {
      validateTrigger(trigger);
    }
    return /* @__PURE__ */ import_react7.default.createElement(import_react7.default.Fragment, null, open && /* @__PURE__ */ import_react7.default.createElement(import_react7.default.Fragment, null, /* @__PURE__ */ import_react7.default.createElement(PortalInner_default, {
      innerRef: this.contentRef,
      mountNode,
      onMount: this.handleMount,
      onUnmount: this.handleUnmount
    }, children), /* @__PURE__ */ import_react7.default.createElement(import_event_stack.default, {
      name: "mouseleave",
      on: this.handlePortalMouseLeave,
      pool: eventPool,
      target: this.contentRef
    }), /* @__PURE__ */ import_react7.default.createElement(import_event_stack.default, {
      name: "mouseenter",
      on: this.handlePortalMouseEnter,
      pool: eventPool,
      target: this.contentRef
    }), /* @__PURE__ */ import_react7.default.createElement(import_event_stack.default, {
      name: "mousedown",
      on: this.handleDocumentMouseDown,
      pool: eventPool
    }), /* @__PURE__ */ import_react7.default.createElement(import_event_stack.default, {
      name: "click",
      on: this.handleDocumentClick,
      pool: eventPool
    }), /* @__PURE__ */ import_react7.default.createElement(import_event_stack.default, {
      name: "keydown",
      on: this.handleEscape,
      pool: eventPool
    })), trigger && /* @__PURE__ */ import_react7.default.createElement(Ref, {
      innerRef: this.handleTriggerRef
    }, /* @__PURE__ */ import_react7.default.cloneElement(trigger, {
      onBlur: this.handleTriggerBlur,
      onClick: this.handleTriggerClick,
      onFocus: this.handleTriggerFocus,
      onMouseLeave: this.handleTriggerMouseLeave,
      onMouseEnter: this.handleTriggerMouseEnter
    })));
  };
  return Portal2;
}(ModernAutoControlledComponent);
Portal.handledProps = ["children", "closeOnDocumentClick", "closeOnEscape", "closeOnPortalMouseLeave", "closeOnTriggerBlur", "closeOnTriggerClick", "closeOnTriggerMouseLeave", "defaultOpen", "eventPool", "mountNode", "mouseEnterDelay", "mouseLeaveDelay", "onClose", "onMount", "onOpen", "onUnmount", "open", "openOnTriggerClick", "openOnTriggerFocus", "openOnTriggerMouseEnter", "trigger", "triggerRef"];
Portal.propTypes = true ? {
  /** Primary content. */
  children: import_prop_types5.default.node.isRequired,
  /** Controls whether or not the portal should close when the document is clicked. */
  closeOnDocumentClick: import_prop_types5.default.bool,
  /** Controls whether or not the portal should close when escape is pressed is displayed. */
  closeOnEscape: import_prop_types5.default.bool,
  /**
   * Controls whether or not the portal should close when mousing out of the portal.
   * NOTE: This will prevent `closeOnTriggerMouseLeave` when mousing over the
   * gap from the trigger to the portal.
   */
  closeOnPortalMouseLeave: import_prop_types5.default.bool,
  /** Controls whether or not the portal should close on blur of the trigger. */
  closeOnTriggerBlur: import_prop_types5.default.bool,
  /** Controls whether or not the portal should close on click of the trigger. */
  closeOnTriggerClick: import_prop_types5.default.bool,
  /** Controls whether or not the portal should close when mousing out of the trigger. */
  closeOnTriggerMouseLeave: import_prop_types5.default.bool,
  /** Initial value of open. */
  defaultOpen: import_prop_types5.default.bool,
  /** Event pool namespace that is used to handle component events */
  eventPool: import_prop_types5.default.string,
  /** The node where the portal should mount. */
  mountNode: import_prop_types5.default.any,
  /** Milliseconds to wait before opening on mouse over */
  mouseEnterDelay: import_prop_types5.default.number,
  /** Milliseconds to wait before closing on mouse leave */
  mouseLeaveDelay: import_prop_types5.default.number,
  /**
   * Called when a close event happens
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClose: import_prop_types5.default.func,
  /**
   * Called when the portal is mounted on the DOM.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onMount: import_prop_types5.default.func,
  /**
   * Called when an open event happens
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onOpen: import_prop_types5.default.func,
  /**
   * Called when the portal is unmounted from the DOM.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onUnmount: import_prop_types5.default.func,
  /** Controls whether or not the portal is displayed. */
  open: import_prop_types5.default.bool,
  /** Controls whether or not the portal should open when the trigger is clicked. */
  openOnTriggerClick: import_prop_types5.default.bool,
  /** Controls whether or not the portal should open on focus of the trigger. */
  openOnTriggerFocus: import_prop_types5.default.bool,
  /** Controls whether or not the portal should open when mousing over the trigger. */
  openOnTriggerMouseEnter: import_prop_types5.default.bool,
  /** Element to be rendered in-place where the portal is defined. */
  trigger: import_prop_types5.default.node,
  /** Called with a ref to the trigger node. */
  triggerRef: customPropTypes_exports.ref
} : {};
Portal.defaultProps = {
  closeOnDocumentClick: true,
  closeOnEscape: true,
  eventPool: "default",
  openOnTriggerClick: true
};
Portal.autoControlledProps = ["open"];
Portal.Inner = PortalInner_default;
var Portal_default = Portal;

// node_modules/semantic-ui-react/dist/es/modules/Dimmer/DimmerDimmable.js
var import_prop_types6 = __toESM(require_prop_types());
var import_react8 = __toESM(require_react());
function DimmerDimmable(props) {
  var blurring = props.blurring, className = props.className, children = props.children, content = props.content, dimmed = props.dimmed;
  var classes = clsx_m_default(useKeyOnly(blurring, "blurring"), useKeyOnly(dimmed, "dimmed"), "dimmable", className);
  var rest = getUnhandledProps_default(DimmerDimmable, props);
  var ElementType = getElementType_default(DimmerDimmable, props);
  return /* @__PURE__ */ import_react8.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), childrenUtils_exports.isNil(children) ? content : children);
}
DimmerDimmable.handledProps = ["as", "blurring", "children", "className", "content", "dimmed"];
DimmerDimmable.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types6.default.elementType,
  /** A dimmable element can blur its contents. */
  blurring: import_prop_types6.default.bool,
  /** Primary content. */
  children: import_prop_types6.default.node,
  /** Additional classes. */
  className: import_prop_types6.default.string,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand,
  /** Controls whether or not the dim is displayed. */
  dimmed: import_prop_types6.default.bool
} : {};
var DimmerDimmable_default = DimmerDimmable;

// node_modules/semantic-ui-react/dist/es/modules/Dimmer/DimmerInner.js
var import_prop_types7 = __toESM(require_prop_types());
var import_react9 = __toESM(require_react());
var DimmerInner = /* @__PURE__ */ function(_Component) {
  _inheritsLoose(DimmerInner2, _Component);
  function DimmerInner2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.containerRef = /* @__PURE__ */ (0, import_react9.createRef)();
    _this.contentRef = /* @__PURE__ */ (0, import_react9.createRef)();
    _this.handleClick = function(e) {
      var contentRef = _this.contentRef.current;
      invoke_default(_this.props, "onClick", e, _this.props);
      if (contentRef && contentRef !== e.target && doesNodeContainClick_default(contentRef, e)) {
        return;
      }
      invoke_default(_this.props, "onClickOutside", e, _this.props);
    };
    return _this;
  }
  var _proto = DimmerInner2.prototype;
  _proto.componentDidMount = function componentDidMount() {
    var active = this.props.active;
    this.toggleStyles(active);
  };
  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var currentActive = this.props.active;
    var prevActive = prevProps.active;
    if (prevActive !== currentActive)
      this.toggleStyles(currentActive);
  };
  _proto.toggleStyles = function toggleStyles(active) {
    var containerRef = this.containerRef.current;
    if (!containerRef || !containerRef.style)
      return;
    if (active) {
      containerRef.style.setProperty("display", "flex", "important");
    } else {
      containerRef.style.removeProperty("display");
    }
  };
  _proto.render = function render() {
    var _this$props = this.props, active = _this$props.active, children = _this$props.children, className = _this$props.className, content = _this$props.content, disabled = _this$props.disabled, inverted = _this$props.inverted, page = _this$props.page, simple = _this$props.simple, verticalAlign = _this$props.verticalAlign;
    var classes = clsx_m_default("ui", useKeyOnly(active, "active transition visible"), useKeyOnly(disabled, "disabled"), useKeyOnly(inverted, "inverted"), useKeyOnly(page, "page"), useKeyOnly(simple, "simple"), useVerticalAlignProp(verticalAlign), "dimmer", className);
    var rest = getUnhandledProps_default(DimmerInner2, this.props);
    var ElementType = getElementType_default(DimmerInner2, this.props);
    var childrenContent = childrenUtils_exports.isNil(children) ? content : children;
    return /* @__PURE__ */ import_react9.default.createElement(Ref, {
      innerRef: this.containerRef
    }, /* @__PURE__ */ import_react9.default.createElement(ElementType, _extends({}, rest, {
      className: classes,
      onClick: this.handleClick
    }), childrenContent && /* @__PURE__ */ import_react9.default.createElement("div", {
      className: "content",
      ref: this.contentRef
    }, childrenContent)));
  };
  return DimmerInner2;
}(import_react9.Component);
DimmerInner.handledProps = ["active", "as", "children", "className", "content", "disabled", "inverted", "onClick", "onClickOutside", "page", "simple", "verticalAlign"];
DimmerInner.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types7.default.elementType,
  /** An active dimmer will dim its parent container. */
  active: import_prop_types7.default.bool,
  /** Primary content. */
  children: import_prop_types7.default.node,
  /** Additional classes. */
  className: import_prop_types7.default.string,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand,
  /** A disabled dimmer cannot be activated */
  disabled: import_prop_types7.default.bool,
  /**
   * Called on click.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: import_prop_types7.default.func,
  /**
   * Handles click outside Dimmer's content, but inside Dimmer area.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClickOutside: import_prop_types7.default.func,
  /** A dimmer can be formatted to have its colors inverted. */
  inverted: import_prop_types7.default.bool,
  /** A dimmer can be formatted to be fixed to the page. */
  page: import_prop_types7.default.bool,
  /** A dimmer can be controlled with simple prop. */
  simple: import_prop_types7.default.bool,
  /** A dimmer can have its content top or bottom aligned. */
  verticalAlign: import_prop_types7.default.oneOf(["bottom", "top"])
} : {};

// node_modules/semantic-ui-react/dist/es/modules/Dimmer/Dimmer.js
var Dimmer = /* @__PURE__ */ function(_Component) {
  _inheritsLoose(Dimmer2, _Component);
  function Dimmer2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.handlePortalMount = function() {
      if (!isBrowser_default())
        return;
      document.body.classList.add("dimmed");
      document.body.classList.add("dimmable");
    };
    _this.handlePortalUnmount = function() {
      if (!isBrowser_default())
        return;
      document.body.classList.remove("dimmed");
      document.body.classList.remove("dimmable");
    };
    return _this;
  }
  var _proto = Dimmer2.prototype;
  _proto.render = function render() {
    var _this$props = this.props, active = _this$props.active, page = _this$props.page;
    var rest = getUnhandledProps_default(Dimmer2, this.props);
    if (page) {
      return /* @__PURE__ */ import_react10.default.createElement(Portal_default, {
        closeOnEscape: false,
        closeOnDocumentClick: false,
        onMount: this.handlePortalMount,
        onUnmount: this.handlePortalUnmount,
        open: active,
        openOnTriggerClick: false
      }, /* @__PURE__ */ import_react10.default.createElement(DimmerInner, _extends({}, rest, {
        active,
        page
      })));
    }
    return /* @__PURE__ */ import_react10.default.createElement(DimmerInner, _extends({}, rest, {
      active,
      page
    }));
  };
  return Dimmer2;
}(import_react10.Component);
Dimmer.handledProps = ["active", "page"];
Dimmer.propTypes = true ? {
  /** An active dimmer will dim its parent container. */
  active: import_prop_types8.default.bool,
  /** A dimmer can be formatted to be fixed to the page. */
  page: import_prop_types8.default.bool
} : {};
Dimmer.Dimmable = DimmerDimmable_default;
Dimmer.Inner = DimmerInner;
Dimmer.create = createShorthandFactory(Dimmer, function(value) {
  return {
    content: value
  };
});

// node_modules/semantic-ui-react/dist/es/elements/Label/Label.js
var import_prop_types11 = __toESM(require_prop_types());
var import_react13 = __toESM(require_react());

// node_modules/semantic-ui-react/dist/es/elements/Label/LabelDetail.js
var import_prop_types9 = __toESM(require_prop_types());
var import_react11 = __toESM(require_react());
function LabelDetail(props) {
  var children = props.children, className = props.className, content = props.content;
  var classes = clsx_m_default("detail", className);
  var rest = getUnhandledProps_default(LabelDetail, props);
  var ElementType = getElementType_default(LabelDetail, props);
  return /* @__PURE__ */ import_react11.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), childrenUtils_exports.isNil(children) ? content : children);
}
LabelDetail.handledProps = ["as", "children", "className", "content"];
LabelDetail.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types9.default.elementType,
  /** Primary content. */
  children: import_prop_types9.default.node,
  /** Additional classes. */
  className: import_prop_types9.default.string,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand
} : {};
LabelDetail.create = createShorthandFactory(LabelDetail, function(val) {
  return {
    content: val
  };
});
var LabelDetail_default = LabelDetail;

// node_modules/semantic-ui-react/dist/es/elements/Label/LabelGroup.js
var import_prop_types10 = __toESM(require_prop_types());
var import_react12 = __toESM(require_react());
function LabelGroup(props) {
  var children = props.children, circular = props.circular, className = props.className, color = props.color, content = props.content, size = props.size, tag = props.tag;
  var classes = clsx_m_default("ui", color, size, useKeyOnly(circular, "circular"), useKeyOnly(tag, "tag"), "labels", className);
  var rest = getUnhandledProps_default(LabelGroup, props);
  var ElementType = getElementType_default(LabelGroup, props);
  return /* @__PURE__ */ import_react12.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), childrenUtils_exports.isNil(children) ? content : children);
}
LabelGroup.handledProps = ["as", "children", "circular", "className", "color", "content", "size", "tag"];
LabelGroup.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types10.default.elementType,
  /** Primary content. */
  children: import_prop_types10.default.node,
  /** Labels can share shapes. */
  circular: import_prop_types10.default.bool,
  /** Additional classes. */
  className: import_prop_types10.default.string,
  /** Label group can share colors together. */
  color: import_prop_types10.default.oneOf(SUI_exports.COLORS),
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand,
  /** Label group can share sizes together. */
  size: import_prop_types10.default.oneOf(SUI_exports.SIZES),
  /** Label group can share tag formatting. */
  tag: import_prop_types10.default.bool
} : {};
var LabelGroup_default = LabelGroup;

// node_modules/semantic-ui-react/dist/es/elements/Label/Label.js
var Label = /* @__PURE__ */ function(_Component) {
  _inheritsLoose(Label2, _Component);
  function Label2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.handleClick = function(e) {
      var onClick = _this.props.onClick;
      if (onClick)
        onClick(e, _this.props);
    };
    _this.handleIconOverrides = function(predefinedProps) {
      return {
        onClick: function onClick(e) {
          invoke_default(predefinedProps, "onClick", e);
          invoke_default(_this.props, "onRemove", e, _this.props);
        }
      };
    };
    return _this;
  }
  var _proto = Label2.prototype;
  _proto.render = function render() {
    var _this$props = this.props, active = _this$props.active, attached = _this$props.attached, basic = _this$props.basic, children = _this$props.children, circular = _this$props.circular, className = _this$props.className, color = _this$props.color, content = _this$props.content, corner = _this$props.corner, detail = _this$props.detail, empty = _this$props.empty, floating = _this$props.floating, horizontal = _this$props.horizontal, icon = _this$props.icon, image = _this$props.image, onRemove = _this$props.onRemove, pointing = _this$props.pointing, prompt = _this$props.prompt, removeIcon = _this$props.removeIcon, ribbon = _this$props.ribbon, size = _this$props.size, tag = _this$props.tag;
    var pointingClass = pointing === true && "pointing" || (pointing === "left" || pointing === "right") && pointing + " pointing" || (pointing === "above" || pointing === "below") && "pointing " + pointing;
    var classes = clsx_m_default("ui", color, pointingClass, size, useKeyOnly(active, "active"), useKeyOnly(basic, "basic"), useKeyOnly(circular, "circular"), useKeyOnly(empty, "empty"), useKeyOnly(floating, "floating"), useKeyOnly(horizontal, "horizontal"), useKeyOnly(image === true, "image"), useKeyOnly(prompt, "prompt"), useKeyOnly(tag, "tag"), useKeyOrValueAndKey(corner, "corner"), useKeyOrValueAndKey(ribbon, "ribbon"), useValueAndKey(attached, "attached"), "label", className);
    var rest = getUnhandledProps_default(Label2, this.props);
    var ElementType = getElementType_default(Label2, this.props);
    if (!childrenUtils_exports.isNil(children)) {
      return /* @__PURE__ */ import_react13.default.createElement(ElementType, _extends({}, rest, {
        className: classes,
        onClick: this.handleClick
      }), children);
    }
    var removeIconShorthand = isUndefined_default(removeIcon) ? "delete" : removeIcon;
    return /* @__PURE__ */ import_react13.default.createElement(ElementType, _extends({
      className: classes,
      onClick: this.handleClick
    }, rest), Icon_default.create(icon, {
      autoGenerateKey: false
    }), typeof image !== "boolean" && Image_default.create(image, {
      autoGenerateKey: false
    }), content, LabelDetail_default.create(detail, {
      autoGenerateKey: false
    }), onRemove && Icon_default.create(removeIconShorthand, {
      autoGenerateKey: false,
      overrideProps: this.handleIconOverrides
    }));
  };
  return Label2;
}(import_react13.Component);
Label.handledProps = ["active", "as", "attached", "basic", "children", "circular", "className", "color", "content", "corner", "detail", "empty", "floating", "horizontal", "icon", "image", "onClick", "onRemove", "pointing", "prompt", "removeIcon", "ribbon", "size", "tag"];
Label.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types11.default.elementType,
  /** A label can be active. */
  active: import_prop_types11.default.bool,
  /** A label can attach to a content segment. */
  attached: import_prop_types11.default.oneOf(["top", "bottom", "top right", "top left", "bottom left", "bottom right"]),
  /** A label can reduce its complexity. */
  basic: import_prop_types11.default.bool,
  /** Primary content. */
  children: import_prop_types11.default.node,
  /** A label can be circular. */
  circular: import_prop_types11.default.bool,
  /** Additional classes. */
  className: import_prop_types11.default.string,
  /** Color of the label. */
  color: import_prop_types11.default.oneOf(SUI_exports.COLORS),
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand,
  /** A label can position itself in the corner of an element. */
  corner: import_prop_types11.default.oneOfType([import_prop_types11.default.bool, import_prop_types11.default.oneOf(["left", "right"])]),
  /** Shorthand for LabelDetail. */
  detail: customPropTypes_exports.itemShorthand,
  /** Formats the label as a dot. */
  empty: customPropTypes_exports.every([import_prop_types11.default.bool, customPropTypes_exports.demand(["circular"])]),
  /** Float above another element in the upper right corner. */
  floating: import_prop_types11.default.bool,
  /** A horizontal label is formatted to label content along-side it horizontally. */
  horizontal: import_prop_types11.default.bool,
  /** Shorthand for Icon. */
  icon: customPropTypes_exports.itemShorthand,
  /** A label can be formatted to emphasize an image or prop can be used as shorthand for Image. */
  image: import_prop_types11.default.oneOfType([import_prop_types11.default.bool, customPropTypes_exports.itemShorthand]),
  /**
   * Called on click.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: import_prop_types11.default.func,
  /**
   * Adds an "x" icon, called when "x" is clicked.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onRemove: import_prop_types11.default.func,
  /** A label can point to content next to it. */
  pointing: import_prop_types11.default.oneOfType([import_prop_types11.default.bool, import_prop_types11.default.oneOf(["above", "below", "left", "right"])]),
  /** A label can prompt for an error in your forms. */
  prompt: import_prop_types11.default.bool,
  /** Shorthand for Icon to appear as the last child and trigger onRemove. */
  removeIcon: customPropTypes_exports.itemShorthand,
  /** A label can appear as a ribbon attaching itself to an element. */
  ribbon: import_prop_types11.default.oneOfType([import_prop_types11.default.bool, import_prop_types11.default.oneOf(["right"])]),
  /** A label can have different sizes. */
  size: import_prop_types11.default.oneOf(SUI_exports.SIZES),
  /** A label can appear as a tag. */
  tag: import_prop_types11.default.bool
} : {};
Label.Detail = LabelDetail_default;
Label.Group = LabelGroup_default;
Label.create = createShorthandFactory(Label, function(value) {
  return {
    content: value
  };
});

// node_modules/semantic-ui-react/dist/es/elements/Image/ImageGroup.js
var import_prop_types12 = __toESM(require_prop_types());
var import_react14 = __toESM(require_react());
function ImageGroup(props) {
  var children = props.children, className = props.className, content = props.content, size = props.size;
  var classes = clsx_m_default("ui", size, className, "images");
  var rest = getUnhandledProps_default(ImageGroup, props);
  var ElementType = getElementType_default(ImageGroup, props);
  return /* @__PURE__ */ import_react14.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), childrenUtils_exports.isNil(children) ? content : children);
}
ImageGroup.handledProps = ["as", "children", "className", "content", "size"];
ImageGroup.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types12.default.elementType,
  /** Primary content. */
  children: import_prop_types12.default.node,
  /** Additional classes. */
  className: import_prop_types12.default.string,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand,
  /** A group of images can be formatted to have the same size. */
  size: import_prop_types12.default.oneOf(SUI_exports.SIZES)
} : {};
var ImageGroup_default = ImageGroup;

// node_modules/semantic-ui-react/dist/es/elements/Image/Image.js
function Image(props) {
  var avatar = props.avatar, bordered = props.bordered, centered = props.centered, children = props.children, circular = props.circular, className = props.className, content = props.content, dimmer = props.dimmer, disabled = props.disabled, floated = props.floated, fluid = props.fluid, hidden = props.hidden, href = props.href, inline = props.inline, label = props.label, rounded = props.rounded, size = props.size, spaced = props.spaced, verticalAlign = props.verticalAlign, wrapped = props.wrapped, ui = props.ui;
  var classes = clsx_m_default(useKeyOnly(ui, "ui"), size, useKeyOnly(avatar, "avatar"), useKeyOnly(bordered, "bordered"), useKeyOnly(circular, "circular"), useKeyOnly(centered, "centered"), useKeyOnly(disabled, "disabled"), useKeyOnly(fluid, "fluid"), useKeyOnly(hidden, "hidden"), useKeyOnly(inline, "inline"), useKeyOnly(rounded, "rounded"), useKeyOrValueAndKey(spaced, "spaced"), useValueAndKey(floated, "floated"), useVerticalAlignProp(verticalAlign, "aligned"), "image", className);
  var rest = getUnhandledProps_default(Image, props);
  var _partitionHTMLProps = partitionHTMLProps(rest, {
    htmlProps: htmlImageProps
  }), imgTagProps = _partitionHTMLProps[0], rootProps = _partitionHTMLProps[1];
  var ElementType = getElementType_default(Image, props, function() {
    if (!isNil_default(dimmer) || !isNil_default(label) || !isNil_default(wrapped) || !childrenUtils_exports.isNil(children)) {
      return "div";
    }
  });
  if (!childrenUtils_exports.isNil(children)) {
    return /* @__PURE__ */ import_react15.default.createElement(ElementType, _extends({}, rest, {
      className: classes
    }), children);
  }
  if (!childrenUtils_exports.isNil(content)) {
    return /* @__PURE__ */ import_react15.default.createElement(ElementType, _extends({}, rest, {
      className: classes
    }), content);
  }
  if (ElementType === "img") {
    return /* @__PURE__ */ import_react15.default.createElement(ElementType, _extends({}, rootProps, imgTagProps, {
      className: classes
    }));
  }
  return /* @__PURE__ */ import_react15.default.createElement(ElementType, _extends({}, rootProps, {
    className: classes,
    href
  }), Dimmer.create(dimmer, {
    autoGenerateKey: false
  }), Label.create(label, {
    autoGenerateKey: false
  }), /* @__PURE__ */ import_react15.default.createElement("img", imgTagProps));
}
Image.handledProps = ["as", "avatar", "bordered", "centered", "children", "circular", "className", "content", "dimmer", "disabled", "floated", "fluid", "hidden", "href", "inline", "label", "rounded", "size", "spaced", "ui", "verticalAlign", "wrapped"];
Image.Group = ImageGroup_default;
Image.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types13.default.elementType,
  /** An image may be formatted to appear inline with text as an avatar. */
  avatar: import_prop_types13.default.bool,
  /** An image may include a border to emphasize the edges of white or transparent content. */
  bordered: import_prop_types13.default.bool,
  /** An image can appear centered in a content block. */
  centered: import_prop_types13.default.bool,
  /** Primary content. */
  children: import_prop_types13.default.node,
  /** An image may appear circular. */
  circular: import_prop_types13.default.bool,
  /** Additional classes. */
  className: import_prop_types13.default.string,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand,
  /** An image can show that it is disabled and cannot be selected. */
  disabled: import_prop_types13.default.bool,
  /** Shorthand for Dimmer. */
  dimmer: customPropTypes_exports.itemShorthand,
  /** An image can sit to the left or right of other content. */
  floated: import_prop_types13.default.oneOf(SUI_exports.FLOATS),
  /** An image can take up the width of its container. */
  fluid: customPropTypes_exports.every([import_prop_types13.default.bool, customPropTypes_exports.disallow(["size"])]),
  /** An image can be hidden. */
  hidden: import_prop_types13.default.bool,
  /** Renders the Image as an <a> tag with this href. */
  href: import_prop_types13.default.string,
  /** An image may appear inline. */
  inline: import_prop_types13.default.bool,
  /** Shorthand for Label. */
  label: customPropTypes_exports.itemShorthand,
  /** An image may appear rounded. */
  rounded: import_prop_types13.default.bool,
  /** An image may appear at different sizes. */
  size: import_prop_types13.default.oneOf(SUI_exports.SIZES),
  /** An image can specify that it needs an additional spacing to separate it from nearby content. */
  spaced: import_prop_types13.default.oneOfType([import_prop_types13.default.bool, import_prop_types13.default.oneOf(["left", "right"])]),
  /** Whether or not to add the ui className. */
  ui: import_prop_types13.default.bool,
  /** An image can specify its vertical alignment. */
  verticalAlign: import_prop_types13.default.oneOf(SUI_exports.VERTICAL_ALIGNMENTS),
  /** An image can render wrapped in a `div.ui.image` as alternative HTML markup. */
  wrapped: import_prop_types13.default.bool
} : {};
Image.defaultProps = {
  as: "img",
  ui: true
};
Image.create = createShorthandFactory(Image, function(value) {
  return {
    src: value
  };
});
var Image_default = Image;

// node_modules/semantic-ui-react/dist/es/elements/Button/Button.js
var import_prop_types17 = __toESM(require_prop_types());
var import_react19 = __toESM(require_react());

// node_modules/semantic-ui-react/dist/es/elements/Button/ButtonContent.js
var import_prop_types14 = __toESM(require_prop_types());
var import_react16 = __toESM(require_react());
function ButtonContent(props) {
  var children = props.children, className = props.className, content = props.content, hidden = props.hidden, visible = props.visible;
  var classes = clsx_m_default(useKeyOnly(visible, "visible"), useKeyOnly(hidden, "hidden"), "content", className);
  var rest = getUnhandledProps_default(ButtonContent, props);
  var ElementType = getElementType_default(ButtonContent, props);
  return /* @__PURE__ */ import_react16.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), childrenUtils_exports.isNil(children) ? content : children);
}
ButtonContent.handledProps = ["as", "children", "className", "content", "hidden", "visible"];
ButtonContent.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types14.default.elementType,
  /** Primary content. */
  children: import_prop_types14.default.node,
  /** Additional classes. */
  className: import_prop_types14.default.string,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand,
  /** Initially hidden, visible on hover. */
  hidden: import_prop_types14.default.bool,
  /** Initially visible, hidden on hover. */
  visible: import_prop_types14.default.bool
} : {};
var ButtonContent_default = ButtonContent;

// node_modules/semantic-ui-react/dist/es/elements/Button/ButtonGroup.js
var import_prop_types15 = __toESM(require_prop_types());
var import_react17 = __toESM(require_react());
function ButtonGroup(props) {
  var attached = props.attached, basic = props.basic, buttons = props.buttons, children = props.children, className = props.className, color = props.color, compact = props.compact, content = props.content, floated = props.floated, fluid = props.fluid, icon = props.icon, inverted = props.inverted, labeled = props.labeled, negative = props.negative, positive = props.positive, primary = props.primary, secondary = props.secondary, size = props.size, toggle = props.toggle, vertical = props.vertical, widths = props.widths;
  var classes = clsx_m_default("ui", color, size, useKeyOnly(basic, "basic"), useKeyOnly(compact, "compact"), useKeyOnly(fluid, "fluid"), useKeyOnly(icon, "icon"), useKeyOnly(inverted, "inverted"), useKeyOnly(labeled, "labeled"), useKeyOnly(negative, "negative"), useKeyOnly(positive, "positive"), useKeyOnly(primary, "primary"), useKeyOnly(secondary, "secondary"), useKeyOnly(toggle, "toggle"), useKeyOnly(vertical, "vertical"), useKeyOrValueAndKey(attached, "attached"), useValueAndKey(floated, "floated"), useWidthProp(widths), "buttons", className);
  var rest = getUnhandledProps_default(ButtonGroup, props);
  var ElementType = getElementType_default(ButtonGroup, props);
  if (isNil_default(buttons)) {
    return /* @__PURE__ */ import_react17.default.createElement(ElementType, _extends({}, rest, {
      className: classes
    }), childrenUtils_exports.isNil(children) ? content : children);
  }
  return /* @__PURE__ */ import_react17.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), map_default(buttons, function(button) {
    return Button_default.create(button);
  }));
}
ButtonGroup.handledProps = ["as", "attached", "basic", "buttons", "children", "className", "color", "compact", "content", "floated", "fluid", "icon", "inverted", "labeled", "negative", "positive", "primary", "secondary", "size", "toggle", "vertical", "widths"];
ButtonGroup.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types15.default.elementType,
  /** Groups can be attached to other content. */
  attached: import_prop_types15.default.oneOfType([import_prop_types15.default.bool, import_prop_types15.default.oneOf(["left", "right", "top", "bottom"])]),
  /** Groups can be less pronounced. */
  basic: import_prop_types15.default.bool,
  /** Array of shorthand Button values. */
  buttons: customPropTypes_exports.collectionShorthand,
  /** Primary content. */
  children: import_prop_types15.default.node,
  /** Additional classes. */
  className: import_prop_types15.default.string,
  /** Groups can have a shared color. */
  color: import_prop_types15.default.oneOf(SUI_exports.COLORS),
  /** Groups can reduce their padding to fit into tighter spaces. */
  compact: import_prop_types15.default.bool,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand,
  /** Groups can be aligned to the left or right of its container. */
  floated: import_prop_types15.default.oneOf(SUI_exports.FLOATS),
  /** Groups can take the width of their container. */
  fluid: import_prop_types15.default.bool,
  /** Groups can be formatted as icons. */
  icon: import_prop_types15.default.bool,
  /** Groups can be formatted to appear on dark backgrounds. */
  inverted: import_prop_types15.default.bool,
  /** Groups can be formatted as labeled icon buttons. */
  labeled: import_prop_types15.default.bool,
  /** Groups can hint towards a negative consequence. */
  negative: import_prop_types15.default.bool,
  /** Groups can hint towards a positive consequence. */
  positive: import_prop_types15.default.bool,
  /** Groups can be formatted to show different levels of emphasis. */
  primary: import_prop_types15.default.bool,
  /** Groups can be formatted to show different levels of emphasis. */
  secondary: import_prop_types15.default.bool,
  /** Groups can have different sizes. */
  size: import_prop_types15.default.oneOf(SUI_exports.SIZES),
  /** Groups can be formatted to toggle on and off. */
  toggle: import_prop_types15.default.bool,
  /** Groups can be formatted to appear vertically. */
  vertical: import_prop_types15.default.bool,
  /** Groups can have their widths divided evenly. */
  widths: import_prop_types15.default.oneOf(SUI_exports.WIDTHS)
} : {};
var ButtonGroup_default = ButtonGroup;

// node_modules/semantic-ui-react/dist/es/elements/Button/ButtonOr.js
var import_prop_types16 = __toESM(require_prop_types());
var import_react18 = __toESM(require_react());
function ButtonOr(props) {
  var className = props.className, text = props.text;
  var classes = clsx_m_default("or", className);
  var rest = getUnhandledProps_default(ButtonOr, props);
  var ElementType = getElementType_default(ButtonOr, props);
  return /* @__PURE__ */ import_react18.default.createElement(ElementType, _extends({}, rest, {
    className: classes,
    "data-text": text
  }));
}
ButtonOr.handledProps = ["as", "className", "text"];
ButtonOr.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types16.default.elementType,
  /** Additional classes. */
  className: import_prop_types16.default.string,
  /** Or buttons can have their text localized, or adjusted by using the text prop. */
  text: import_prop_types16.default.oneOfType([import_prop_types16.default.number, import_prop_types16.default.string])
} : {};
var ButtonOr_default = ButtonOr;

// node_modules/semantic-ui-react/dist/es/elements/Button/Button.js
var Button = /* @__PURE__ */ function(_Component) {
  _inheritsLoose(Button2, _Component);
  function Button2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.ref = /* @__PURE__ */ (0, import_react19.createRef)();
    _this.computeElementType = function() {
      var _this$props = _this.props, attached = _this$props.attached, label = _this$props.label;
      if (!isNil_default(attached) || !isNil_default(label))
        return "div";
    };
    _this.computeTabIndex = function(ElementType) {
      var _this$props2 = _this.props, disabled = _this$props2.disabled, tabIndex = _this$props2.tabIndex;
      if (!isNil_default(tabIndex))
        return tabIndex;
      if (disabled)
        return -1;
      if (ElementType === "div")
        return 0;
    };
    _this.focus = function(options) {
      return invoke_default(_this.ref.current, "focus", options);
    };
    _this.handleClick = function(e) {
      var disabled = _this.props.disabled;
      if (disabled) {
        e.preventDefault();
        return;
      }
      invoke_default(_this.props, "onClick", e, _this.props);
    };
    _this.hasIconClass = function() {
      var _this$props3 = _this.props, labelPosition = _this$props3.labelPosition, children = _this$props3.children, content = _this$props3.content, icon = _this$props3.icon;
      if (icon === true)
        return true;
      return icon && (labelPosition || childrenUtils_exports.isNil(children) && isNil_default(content));
    };
    return _this;
  }
  var _proto = Button2.prototype;
  _proto.computeButtonAriaRole = function computeButtonAriaRole(ElementType) {
    var role = this.props.role;
    if (!isNil_default(role))
      return role;
    if (ElementType !== "button")
      return "button";
  };
  _proto.render = function render() {
    var _this$props4 = this.props, active = _this$props4.active, animated = _this$props4.animated, attached = _this$props4.attached, basic = _this$props4.basic, children = _this$props4.children, circular = _this$props4.circular, className = _this$props4.className, color = _this$props4.color, compact = _this$props4.compact, content = _this$props4.content, disabled = _this$props4.disabled, floated = _this$props4.floated, fluid = _this$props4.fluid, icon = _this$props4.icon, inverted = _this$props4.inverted, label = _this$props4.label, labelPosition = _this$props4.labelPosition, loading = _this$props4.loading, negative = _this$props4.negative, positive = _this$props4.positive, primary = _this$props4.primary, secondary = _this$props4.secondary, size = _this$props4.size, toggle = _this$props4.toggle, type = _this$props4.type;
    var baseClasses = clsx_m_default(color, size, useKeyOnly(active, "active"), useKeyOnly(basic, "basic"), useKeyOnly(circular, "circular"), useKeyOnly(compact, "compact"), useKeyOnly(fluid, "fluid"), useKeyOnly(this.hasIconClass(), "icon"), useKeyOnly(inverted, "inverted"), useKeyOnly(loading, "loading"), useKeyOnly(negative, "negative"), useKeyOnly(positive, "positive"), useKeyOnly(primary, "primary"), useKeyOnly(secondary, "secondary"), useKeyOnly(toggle, "toggle"), useKeyOrValueAndKey(animated, "animated"), useKeyOrValueAndKey(attached, "attached"));
    var labeledClasses = clsx_m_default(useKeyOrValueAndKey(labelPosition || !!label, "labeled"));
    var wrapperClasses = clsx_m_default(useKeyOnly(disabled, "disabled"), useValueAndKey(floated, "floated"));
    var rest = getUnhandledProps_default(Button2, this.props);
    var ElementType = getElementType_default(Button2, this.props, this.computeElementType);
    var tabIndex = this.computeTabIndex(ElementType);
    if (!isNil_default(label)) {
      var buttonClasses = clsx_m_default("ui", baseClasses, "button", className);
      var containerClasses = clsx_m_default("ui", labeledClasses, "button", className, wrapperClasses);
      var labelElement = Label.create(label, {
        defaultProps: {
          basic: true,
          pointing: labelPosition === "left" ? "right" : "left"
        },
        autoGenerateKey: false
      });
      return /* @__PURE__ */ import_react19.default.createElement(ElementType, _extends({}, rest, {
        className: containerClasses,
        onClick: this.handleClick
      }), labelPosition === "left" && labelElement, /* @__PURE__ */ import_react19.default.createElement(Ref, {
        innerRef: this.ref
      }, /* @__PURE__ */ import_react19.default.createElement("button", {
        className: buttonClasses,
        "aria-pressed": toggle ? !!active : void 0,
        disabled,
        type,
        tabIndex
      }, Icon_default.create(icon, {
        autoGenerateKey: false
      }), " ", content)), (labelPosition === "right" || !labelPosition) && labelElement);
    }
    var classes = clsx_m_default("ui", baseClasses, wrapperClasses, labeledClasses, "button", className);
    var hasChildren = !childrenUtils_exports.isNil(children);
    var role = this.computeButtonAriaRole(ElementType);
    return /* @__PURE__ */ import_react19.default.createElement(Ref, {
      innerRef: this.ref
    }, /* @__PURE__ */ import_react19.default.createElement(ElementType, _extends({}, rest, {
      className: classes,
      "aria-pressed": toggle ? !!active : void 0,
      disabled: disabled && ElementType === "button" || void 0,
      onClick: this.handleClick,
      role,
      type,
      tabIndex
    }), hasChildren && children, !hasChildren && Icon_default.create(icon, {
      autoGenerateKey: false
    }), !hasChildren && content));
  };
  return Button2;
}(import_react19.Component);
Button.handledProps = ["active", "animated", "as", "attached", "basic", "children", "circular", "className", "color", "compact", "content", "disabled", "floated", "fluid", "icon", "inverted", "label", "labelPosition", "loading", "negative", "onClick", "positive", "primary", "role", "secondary", "size", "tabIndex", "toggle", "type"];
Button.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types17.default.elementType,
  /** A button can show it is currently the active user selection. */
  active: import_prop_types17.default.bool,
  /** A button can animate to show hidden content. */
  animated: import_prop_types17.default.oneOfType([import_prop_types17.default.bool, import_prop_types17.default.oneOf(["fade", "vertical"])]),
  /** A button can be attached to other content. */
  attached: import_prop_types17.default.oneOfType([import_prop_types17.default.bool, import_prop_types17.default.oneOf(["left", "right", "top", "bottom"])]),
  /** A basic button is less pronounced. */
  basic: import_prop_types17.default.bool,
  /** Primary content. */
  children: customPropTypes_exports.every([import_prop_types17.default.node, customPropTypes_exports.disallow(["label"]), customPropTypes_exports.givenProps({
    icon: import_prop_types17.default.oneOfType([import_prop_types17.default.string.isRequired, import_prop_types17.default.object.isRequired, import_prop_types17.default.element.isRequired])
  }, customPropTypes_exports.disallow(["icon"]))]),
  /** A button can be circular. */
  circular: import_prop_types17.default.bool,
  /** Additional classes. */
  className: import_prop_types17.default.string,
  /** A button can have different colors */
  color: import_prop_types17.default.oneOf([].concat(SUI_exports.COLORS, ["facebook", "google plus", "instagram", "linkedin", "twitter", "vk", "youtube"])),
  /** A button can reduce its padding to fit into tighter spaces. */
  compact: import_prop_types17.default.bool,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand,
  /** A button can show it is currently unable to be interacted with. */
  disabled: import_prop_types17.default.bool,
  /** A button can be aligned to the left or right of its container. */
  floated: import_prop_types17.default.oneOf(SUI_exports.FLOATS),
  /** A button can take the width of its container. */
  fluid: import_prop_types17.default.bool,
  /** Add an Icon by name, props object, or pass an <Icon />. */
  icon: import_prop_types17.default.oneOfType([import_prop_types17.default.bool, import_prop_types17.default.string, import_prop_types17.default.object, import_prop_types17.default.element]),
  /** A button can be formatted to appear on dark backgrounds. */
  inverted: import_prop_types17.default.bool,
  /** Add a Label by text, props object, or pass a <Label />. */
  label: import_prop_types17.default.oneOfType([import_prop_types17.default.string, import_prop_types17.default.object, import_prop_types17.default.element]),
  /** A labeled button can format a Label or Icon to appear on the left or right. */
  labelPosition: import_prop_types17.default.oneOf(["right", "left"]),
  /** A button can show a loading indicator. */
  loading: import_prop_types17.default.bool,
  /** A button can hint towards a negative consequence. */
  negative: import_prop_types17.default.bool,
  /**
   * Called after user's click.
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: import_prop_types17.default.func,
  /** A button can hint towards a positive consequence. */
  positive: import_prop_types17.default.bool,
  /** A button can be formatted to show different levels of emphasis. */
  primary: import_prop_types17.default.bool,
  /** The role of the HTML element. */
  role: import_prop_types17.default.string,
  /** A button can be formatted to show different levels of emphasis. */
  secondary: import_prop_types17.default.bool,
  /** A button can have different sizes. */
  size: import_prop_types17.default.oneOf(SUI_exports.SIZES),
  /** A button can receive focus. */
  tabIndex: import_prop_types17.default.oneOfType([import_prop_types17.default.number, import_prop_types17.default.string]),
  /** A button can be formatted to toggle on and off. */
  toggle: import_prop_types17.default.bool,
  /** The type of the HTML element. */
  type: import_prop_types17.default.oneOf(["button", "submit", "reset"])
} : {};
Button.defaultProps = {
  as: "button"
};
Button.Content = ButtonContent_default;
Button.Group = ButtonGroup_default;
Button.Or = ButtonOr_default;
Button.create = createShorthandFactory(Button, function(value) {
  return {
    content: value
  };
});
var Button_default = Button;

// node_modules/lodash-es/_arrayReduce.js
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1, length = array == null ? 0 : array.length;
  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}
var arrayReduce_default = arrayReduce;

// node_modules/lodash-es/_basePropertyOf.js
function basePropertyOf(object) {
  return function(key) {
    return object == null ? void 0 : object[key];
  };
}
var basePropertyOf_default = basePropertyOf;

// node_modules/lodash-es/_deburrLetter.js
var deburredLetters = {
  // Latin-1 Supplement block.
  "\xC0": "A",
  "\xC1": "A",
  "\xC2": "A",
  "\xC3": "A",
  "\xC4": "A",
  "\xC5": "A",
  "\xE0": "a",
  "\xE1": "a",
  "\xE2": "a",
  "\xE3": "a",
  "\xE4": "a",
  "\xE5": "a",
  "\xC7": "C",
  "\xE7": "c",
  "\xD0": "D",
  "\xF0": "d",
  "\xC8": "E",
  "\xC9": "E",
  "\xCA": "E",
  "\xCB": "E",
  "\xE8": "e",
  "\xE9": "e",
  "\xEA": "e",
  "\xEB": "e",
  "\xCC": "I",
  "\xCD": "I",
  "\xCE": "I",
  "\xCF": "I",
  "\xEC": "i",
  "\xED": "i",
  "\xEE": "i",
  "\xEF": "i",
  "\xD1": "N",
  "\xF1": "n",
  "\xD2": "O",
  "\xD3": "O",
  "\xD4": "O",
  "\xD5": "O",
  "\xD6": "O",
  "\xD8": "O",
  "\xF2": "o",
  "\xF3": "o",
  "\xF4": "o",
  "\xF5": "o",
  "\xF6": "o",
  "\xF8": "o",
  "\xD9": "U",
  "\xDA": "U",
  "\xDB": "U",
  "\xDC": "U",
  "\xF9": "u",
  "\xFA": "u",
  "\xFB": "u",
  "\xFC": "u",
  "\xDD": "Y",
  "\xFD": "y",
  "\xFF": "y",
  "\xC6": "Ae",
  "\xE6": "ae",
  "\xDE": "Th",
  "\xFE": "th",
  "\xDF": "ss",
  // Latin Extended-A block.
  "\u0100": "A",
  "\u0102": "A",
  "\u0104": "A",
  "\u0101": "a",
  "\u0103": "a",
  "\u0105": "a",
  "\u0106": "C",
  "\u0108": "C",
  "\u010A": "C",
  "\u010C": "C",
  "\u0107": "c",
  "\u0109": "c",
  "\u010B": "c",
  "\u010D": "c",
  "\u010E": "D",
  "\u0110": "D",
  "\u010F": "d",
  "\u0111": "d",
  "\u0112": "E",
  "\u0114": "E",
  "\u0116": "E",
  "\u0118": "E",
  "\u011A": "E",
  "\u0113": "e",
  "\u0115": "e",
  "\u0117": "e",
  "\u0119": "e",
  "\u011B": "e",
  "\u011C": "G",
  "\u011E": "G",
  "\u0120": "G",
  "\u0122": "G",
  "\u011D": "g",
  "\u011F": "g",
  "\u0121": "g",
  "\u0123": "g",
  "\u0124": "H",
  "\u0126": "H",
  "\u0125": "h",
  "\u0127": "h",
  "\u0128": "I",
  "\u012A": "I",
  "\u012C": "I",
  "\u012E": "I",
  "\u0130": "I",
  "\u0129": "i",
  "\u012B": "i",
  "\u012D": "i",
  "\u012F": "i",
  "\u0131": "i",
  "\u0134": "J",
  "\u0135": "j",
  "\u0136": "K",
  "\u0137": "k",
  "\u0138": "k",
  "\u0139": "L",
  "\u013B": "L",
  "\u013D": "L",
  "\u013F": "L",
  "\u0141": "L",
  "\u013A": "l",
  "\u013C": "l",
  "\u013E": "l",
  "\u0140": "l",
  "\u0142": "l",
  "\u0143": "N",
  "\u0145": "N",
  "\u0147": "N",
  "\u014A": "N",
  "\u0144": "n",
  "\u0146": "n",
  "\u0148": "n",
  "\u014B": "n",
  "\u014C": "O",
  "\u014E": "O",
  "\u0150": "O",
  "\u014D": "o",
  "\u014F": "o",
  "\u0151": "o",
  "\u0154": "R",
  "\u0156": "R",
  "\u0158": "R",
  "\u0155": "r",
  "\u0157": "r",
  "\u0159": "r",
  "\u015A": "S",
  "\u015C": "S",
  "\u015E": "S",
  "\u0160": "S",
  "\u015B": "s",
  "\u015D": "s",
  "\u015F": "s",
  "\u0161": "s",
  "\u0162": "T",
  "\u0164": "T",
  "\u0166": "T",
  "\u0163": "t",
  "\u0165": "t",
  "\u0167": "t",
  "\u0168": "U",
  "\u016A": "U",
  "\u016C": "U",
  "\u016E": "U",
  "\u0170": "U",
  "\u0172": "U",
  "\u0169": "u",
  "\u016B": "u",
  "\u016D": "u",
  "\u016F": "u",
  "\u0171": "u",
  "\u0173": "u",
  "\u0174": "W",
  "\u0175": "w",
  "\u0176": "Y",
  "\u0177": "y",
  "\u0178": "Y",
  "\u0179": "Z",
  "\u017B": "Z",
  "\u017D": "Z",
  "\u017A": "z",
  "\u017C": "z",
  "\u017E": "z",
  "\u0132": "IJ",
  "\u0133": "ij",
  "\u0152": "Oe",
  "\u0153": "oe",
  "\u0149": "'n",
  "\u017F": "s"
};
var deburrLetter = basePropertyOf_default(deburredLetters);
var deburrLetter_default = deburrLetter;

// node_modules/lodash-es/deburr.js
var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
var rsComboMarksRange3 = "\\u0300-\\u036f";
var reComboHalfMarksRange3 = "\\ufe20-\\ufe2f";
var rsComboSymbolsRange3 = "\\u20d0-\\u20ff";
var rsComboRange3 = rsComboMarksRange3 + reComboHalfMarksRange3 + rsComboSymbolsRange3;
var rsCombo2 = "[" + rsComboRange3 + "]";
var reComboMark = RegExp(rsCombo2, "g");
function deburr(string) {
  string = toString_default(string);
  return string && string.replace(reLatin, deburrLetter_default).replace(reComboMark, "");
}
var deburr_default = deburr;

// node_modules/lodash-es/_asciiWords.js
var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
function asciiWords(string) {
  return string.match(reAsciiWord) || [];
}
var asciiWords_default = asciiWords;

// node_modules/lodash-es/_hasUnicodeWord.js
var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
function hasUnicodeWord(string) {
  return reHasUnicodeWord.test(string);
}
var hasUnicodeWord_default = hasUnicodeWord;

// node_modules/lodash-es/_unicodeWords.js
var rsAstralRange3 = "\\ud800-\\udfff";
var rsComboMarksRange4 = "\\u0300-\\u036f";
var reComboHalfMarksRange4 = "\\ufe20-\\ufe2f";
var rsComboSymbolsRange4 = "\\u20d0-\\u20ff";
var rsComboRange4 = rsComboMarksRange4 + reComboHalfMarksRange4 + rsComboSymbolsRange4;
var rsDingbatRange = "\\u2700-\\u27bf";
var rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff";
var rsMathOpRange = "\\xac\\xb1\\xd7\\xf7";
var rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf";
var rsPunctuationRange = "\\u2000-\\u206f";
var rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000";
var rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde";
var rsVarRange3 = "\\ufe0e\\ufe0f";
var rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
var rsApos = "['\u2019]";
var rsBreak = "[" + rsBreakRange + "]";
var rsCombo3 = "[" + rsComboRange4 + "]";
var rsDigits = "\\d+";
var rsDingbat = "[" + rsDingbatRange + "]";
var rsLower = "[" + rsLowerRange + "]";
var rsMisc = "[^" + rsAstralRange3 + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + "]";
var rsFitz2 = "\\ud83c[\\udffb-\\udfff]";
var rsModifier2 = "(?:" + rsCombo3 + "|" + rsFitz2 + ")";
var rsNonAstral2 = "[^" + rsAstralRange3 + "]";
var rsRegional2 = "(?:\\ud83c[\\udde6-\\uddff]){2}";
var rsSurrPair2 = "[\\ud800-\\udbff][\\udc00-\\udfff]";
var rsUpper = "[" + rsUpperRange + "]";
var rsZWJ3 = "\\u200d";
var rsMiscLower = "(?:" + rsLower + "|" + rsMisc + ")";
var rsMiscUpper = "(?:" + rsUpper + "|" + rsMisc + ")";
var rsOptContrLower = "(?:" + rsApos + "(?:d|ll|m|re|s|t|ve))?";
var rsOptContrUpper = "(?:" + rsApos + "(?:D|LL|M|RE|S|T|VE))?";
var reOptMod2 = rsModifier2 + "?";
var rsOptVar2 = "[" + rsVarRange3 + "]?";
var rsOptJoin2 = "(?:" + rsZWJ3 + "(?:" + [rsNonAstral2, rsRegional2, rsSurrPair2].join("|") + ")" + rsOptVar2 + reOptMod2 + ")*";
var rsOrdLower = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])";
var rsOrdUpper = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])";
var rsSeq2 = rsOptVar2 + reOptMod2 + rsOptJoin2;
var rsEmoji = "(?:" + [rsDingbat, rsRegional2, rsSurrPair2].join("|") + ")" + rsSeq2;
var reUnicodeWord = RegExp([
  rsUpper + "?" + rsLower + "+" + rsOptContrLower + "(?=" + [rsBreak, rsUpper, "$"].join("|") + ")",
  rsMiscUpper + "+" + rsOptContrUpper + "(?=" + [rsBreak, rsUpper + rsMiscLower, "$"].join("|") + ")",
  rsUpper + "?" + rsMiscLower + "+" + rsOptContrLower,
  rsUpper + "+" + rsOptContrUpper,
  rsOrdUpper,
  rsOrdLower,
  rsDigits,
  rsEmoji
].join("|"), "g");
function unicodeWords(string) {
  return string.match(reUnicodeWord) || [];
}
var unicodeWords_default = unicodeWords;

// node_modules/lodash-es/words.js
function words(string, pattern, guard) {
  string = toString_default(string);
  pattern = guard ? void 0 : pattern;
  if (pattern === void 0) {
    return hasUnicodeWord_default(string) ? unicodeWords_default(string) : asciiWords_default(string);
  }
  return string.match(pattern) || [];
}
var words_default = words;

// node_modules/lodash-es/_createCompounder.js
var rsApos2 = "['\u2019]";
var reApos = RegExp(rsApos2, "g");
function createCompounder(callback) {
  return function(string) {
    return arrayReduce_default(words_default(deburr_default(string).replace(reApos, "")), callback, "");
  };
}
var createCompounder_default = createCompounder;

// node_modules/lodash-es/_createCaseFirst.js
function createCaseFirst(methodName) {
  return function(string) {
    string = toString_default(string);
    var strSymbols = hasUnicode_default(string) ? stringToArray_default(string) : void 0;
    var chr = strSymbols ? strSymbols[0] : string.charAt(0);
    var trailing = strSymbols ? castSlice_default(strSymbols, 1).join("") : string.slice(1);
    return chr[methodName]() + trailing;
  };
}
var createCaseFirst_default = createCaseFirst;

// node_modules/lodash-es/upperFirst.js
var upperFirst = createCaseFirst_default("toUpperCase");
var upperFirst_default = upperFirst;

// node_modules/lodash-es/startCase.js
var startCase = createCompounder_default(function(result, word, index) {
  return result + (index ? " " : "") + upperFirst_default(word);
});
var startCase_default = startCase;

// node_modules/semantic-ui-react/dist/es/collections/Menu/MenuItem.js
var import_prop_types18 = __toESM(require_prop_types());
var import_react20 = __toESM(require_react());
var MenuItem = /* @__PURE__ */ function(_Component) {
  _inheritsLoose(MenuItem2, _Component);
  function MenuItem2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.handleClick = function(e) {
      var disabled = _this.props.disabled;
      if (!disabled)
        invoke_default(_this.props, "onClick", e, _this.props);
    };
    return _this;
  }
  var _proto = MenuItem2.prototype;
  _proto.render = function render() {
    var _this$props = this.props, active = _this$props.active, children = _this$props.children, className = _this$props.className, color = _this$props.color, content = _this$props.content, disabled = _this$props.disabled, fitted = _this$props.fitted, header = _this$props.header, icon = _this$props.icon, link = _this$props.link, name = _this$props.name, onClick = _this$props.onClick, position = _this$props.position;
    var classes = clsx_m_default(color, position, useKeyOnly(active, "active"), useKeyOnly(disabled, "disabled"), useKeyOnly(icon === true || icon && !(name || content), "icon"), useKeyOnly(header, "header"), useKeyOnly(link, "link"), useKeyOrValueAndKey(fitted, "fitted"), "item", className);
    var ElementType = getElementType_default(MenuItem2, this.props, function() {
      if (onClick)
        return "a";
    });
    var rest = getUnhandledProps_default(MenuItem2, this.props);
    if (!childrenUtils_exports.isNil(children)) {
      return /* @__PURE__ */ import_react20.default.createElement(ElementType, _extends({}, rest, {
        className: classes,
        onClick: this.handleClick
      }), children);
    }
    return /* @__PURE__ */ import_react20.default.createElement(ElementType, _extends({}, rest, {
      className: classes,
      onClick: this.handleClick
    }), Icon_default.create(icon, {
      autoGenerateKey: false
    }), childrenUtils_exports.isNil(content) ? startCase_default(name) : content);
  };
  return MenuItem2;
}(import_react20.Component);
MenuItem.handledProps = ["active", "as", "children", "className", "color", "content", "disabled", "fitted", "header", "icon", "index", "link", "name", "onClick", "position"];
MenuItem.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types18.default.elementType,
  /** A menu item can be active. */
  active: import_prop_types18.default.bool,
  /** Primary content. */
  children: import_prop_types18.default.node,
  /** Additional classes. */
  className: import_prop_types18.default.string,
  /** Additional colors can be specified. */
  color: import_prop_types18.default.oneOf(SUI_exports.COLORS),
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand,
  /** A menu item can be disabled. */
  disabled: import_prop_types18.default.bool,
  /** A menu item or menu can remove element padding, vertically or horizontally. */
  fitted: import_prop_types18.default.oneOfType([import_prop_types18.default.bool, import_prop_types18.default.oneOf(["horizontally", "vertically"])]),
  /** A menu item may include a header or may itself be a header. */
  header: import_prop_types18.default.bool,
  /** MenuItem can be only icon. */
  icon: import_prop_types18.default.oneOfType([import_prop_types18.default.bool, customPropTypes_exports.itemShorthand]),
  /** MenuItem index inside Menu. */
  index: import_prop_types18.default.number,
  /** A menu item can be link. */
  link: import_prop_types18.default.bool,
  /** Internal name of the MenuItem. */
  name: import_prop_types18.default.string,
  /**
   * Called on click. When passed, the component will render as an `a`
   * tag by default instead of a `div`.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: import_prop_types18.default.func,
  /** A menu item can take left or right position. */
  position: import_prop_types18.default.oneOf(["left", "right"])
} : {};
MenuItem.create = createShorthandFactory(MenuItem, function(val) {
  return {
    content: val,
    name: val
  };
});

// node_modules/semantic-ui-react/dist/es/collections/Menu/Menu.js
var import_prop_types21 = __toESM(require_prop_types());
var import_react23 = __toESM(require_react());

// node_modules/semantic-ui-react/dist/es/collections/Menu/MenuHeader.js
var import_prop_types19 = __toESM(require_prop_types());
var import_react21 = __toESM(require_react());
function MenuHeader(props) {
  var children = props.children, className = props.className, content = props.content;
  var classes = clsx_m_default("header", className);
  var rest = getUnhandledProps_default(MenuHeader, props);
  var ElementType = getElementType_default(MenuHeader, props);
  return /* @__PURE__ */ import_react21.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), childrenUtils_exports.isNil(children) ? content : children);
}
MenuHeader.handledProps = ["as", "children", "className", "content"];
MenuHeader.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types19.default.elementType,
  /** Primary content. */
  children: import_prop_types19.default.node,
  /** Additional classes. */
  className: import_prop_types19.default.string,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand
} : {};
var MenuHeader_default = MenuHeader;

// node_modules/semantic-ui-react/dist/es/collections/Menu/MenuMenu.js
var import_prop_types20 = __toESM(require_prop_types());
var import_react22 = __toESM(require_react());
function MenuMenu(props) {
  var children = props.children, className = props.className, content = props.content, position = props.position;
  var classes = clsx_m_default(position, "menu", className);
  var rest = getUnhandledProps_default(MenuMenu, props);
  var ElementType = getElementType_default(MenuMenu, props);
  return /* @__PURE__ */ import_react22.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), childrenUtils_exports.isNil(children) ? content : children);
}
MenuMenu.handledProps = ["as", "children", "className", "content", "position"];
MenuMenu.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types20.default.elementType,
  /** Primary content. */
  children: import_prop_types20.default.node,
  /** Additional classes. */
  className: import_prop_types20.default.string,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand,
  /** A sub menu can take left or right position. */
  position: import_prop_types20.default.oneOf(["left", "right"])
} : {};
var MenuMenu_default = MenuMenu;

// node_modules/semantic-ui-react/dist/es/collections/Menu/Menu.js
var Menu = /* @__PURE__ */ function(_Component) {
  _inheritsLoose(Menu2, _Component);
  function Menu2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.handleItemOverrides = function(predefinedProps) {
      return {
        onClick: function onClick(e, itemProps) {
          var index = itemProps.index;
          _this.setState({
            activeIndex: index
          });
          invoke_default(predefinedProps, "onClick", e, itemProps);
          invoke_default(_this.props, "onItemClick", e, itemProps);
        }
      };
    };
    return _this;
  }
  var _proto = Menu2.prototype;
  _proto.renderItems = function renderItems() {
    var _this2 = this;
    var items = this.props.items;
    var activeIndex = this.state.activeIndex;
    return map_default(items, function(item, index) {
      return MenuItem.create(item, {
        defaultProps: {
          active: parseInt(activeIndex, 10) === index,
          index
        },
        overrideProps: _this2.handleItemOverrides
      });
    });
  };
  _proto.render = function render() {
    var _this$props = this.props, attached = _this$props.attached, borderless = _this$props.borderless, children = _this$props.children, className = _this$props.className, color = _this$props.color, compact = _this$props.compact, fixed = _this$props.fixed, floated = _this$props.floated, fluid = _this$props.fluid, icon = _this$props.icon, inverted = _this$props.inverted, pagination = _this$props.pagination, pointing = _this$props.pointing, secondary = _this$props.secondary, size = _this$props.size, stackable = _this$props.stackable, tabular = _this$props.tabular, text = _this$props.text, vertical = _this$props.vertical, widths = _this$props.widths;
    var classes = clsx_m_default("ui", color, size, useKeyOnly(borderless, "borderless"), useKeyOnly(compact, "compact"), useKeyOnly(fluid, "fluid"), useKeyOnly(inverted, "inverted"), useKeyOnly(pagination, "pagination"), useKeyOnly(pointing, "pointing"), useKeyOnly(secondary, "secondary"), useKeyOnly(stackable, "stackable"), useKeyOnly(text, "text"), useKeyOnly(vertical, "vertical"), useKeyOrValueAndKey(attached, "attached"), useKeyOrValueAndKey(floated, "floated"), useKeyOrValueAndKey(icon, "icon"), useKeyOrValueAndKey(tabular, "tabular"), useValueAndKey(fixed, "fixed"), useWidthProp(widths, "item"), className, "menu");
    var rest = getUnhandledProps_default(Menu2, this.props);
    var ElementType = getElementType_default(Menu2, this.props);
    return /* @__PURE__ */ import_react23.default.createElement(ElementType, _extends({}, rest, {
      className: classes
    }), childrenUtils_exports.isNil(children) ? this.renderItems() : children);
  };
  return Menu2;
}(ModernAutoControlledComponent);
Menu.handledProps = ["activeIndex", "as", "attached", "borderless", "children", "className", "color", "compact", "defaultActiveIndex", "fixed", "floated", "fluid", "icon", "inverted", "items", "onItemClick", "pagination", "pointing", "secondary", "size", "stackable", "tabular", "text", "vertical", "widths"];
Menu.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types21.default.elementType,
  /** Index of the currently active item. */
  activeIndex: import_prop_types21.default.oneOfType([import_prop_types21.default.number, import_prop_types21.default.string]),
  /** A menu may be attached to other content segments. */
  attached: import_prop_types21.default.oneOfType([import_prop_types21.default.bool, import_prop_types21.default.oneOf(["top", "bottom"])]),
  /** A menu item or menu can have no borders. */
  borderless: import_prop_types21.default.bool,
  /** Primary content. */
  children: import_prop_types21.default.node,
  /** Additional classes. */
  className: import_prop_types21.default.string,
  /** Additional colors can be specified. */
  color: import_prop_types21.default.oneOf(SUI_exports.COLORS),
  /** A menu can take up only the space necessary to fit its content. */
  compact: import_prop_types21.default.bool,
  /** Initial activeIndex value. */
  defaultActiveIndex: import_prop_types21.default.oneOfType([import_prop_types21.default.number, import_prop_types21.default.string]),
  /** A menu can be fixed to a side of its context. */
  fixed: import_prop_types21.default.oneOf(["left", "right", "bottom", "top"]),
  /** A menu can be floated. */
  floated: import_prop_types21.default.oneOfType([import_prop_types21.default.bool, import_prop_types21.default.oneOf(["right"])]),
  /** A vertical menu may take the size of its container. */
  fluid: import_prop_types21.default.bool,
  /** A menu may have just icons (bool) or labeled icons. */
  icon: import_prop_types21.default.oneOfType([import_prop_types21.default.bool, import_prop_types21.default.oneOf(["labeled"])]),
  /** A menu may have its colors inverted to show greater contrast. */
  inverted: import_prop_types21.default.bool,
  /** Shorthand array of props for Menu. */
  items: customPropTypes_exports.collectionShorthand,
  /**
   * onClick handler for MenuItem. Mutually exclusive with children.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All item props.
   */
  onItemClick: customPropTypes_exports.every([customPropTypes_exports.disallow(["children"]), import_prop_types21.default.func]),
  /** A pagination menu is specially formatted to present links to pages of content. */
  pagination: import_prop_types21.default.bool,
  /** A menu can point to show its relationship to nearby content. */
  pointing: import_prop_types21.default.bool,
  /** A menu can adjust its appearance to de-emphasize its contents. */
  secondary: import_prop_types21.default.bool,
  /** A menu can vary in size. */
  size: import_prop_types21.default.oneOf(without_default(SUI_exports.SIZES, "medium", "big")),
  /** A menu can stack at mobile resolutions. */
  stackable: import_prop_types21.default.bool,
  /** A menu can be formatted to show tabs of information. */
  tabular: import_prop_types21.default.oneOfType([import_prop_types21.default.bool, import_prop_types21.default.oneOf(["right"])]),
  /** A menu can be formatted for text content. */
  text: import_prop_types21.default.bool,
  /** A vertical menu displays elements vertically. */
  vertical: import_prop_types21.default.bool,
  /** A menu can have its items divided evenly. */
  widths: import_prop_types21.default.oneOf(SUI_exports.WIDTHS)
} : {};
Menu.autoControlledProps = ["activeIndex"];
Menu.Header = MenuHeader_default;
Menu.Item = MenuItem;
Menu.Menu = MenuMenu_default;
Menu.create = createShorthandFactory(Menu, function(items) {
  return {
    items
  };
});
var Menu_default = Menu;

// node_modules/semantic-ui-react/dist/es/collections/Grid/Grid.js
var import_prop_types24 = __toESM(require_prop_types());
var import_react26 = __toESM(require_react());

// node_modules/semantic-ui-react/dist/es/collections/Grid/GridColumn.js
var import_prop_types22 = __toESM(require_prop_types());
var import_react24 = __toESM(require_react());
function GridColumn(props) {
  var children = props.children, className = props.className, computer = props.computer, color = props.color, floated = props.floated, largeScreen = props.largeScreen, mobile = props.mobile, only = props.only, stretched = props.stretched, tablet = props.tablet, textAlign = props.textAlign, verticalAlign = props.verticalAlign, widescreen = props.widescreen, width = props.width;
  var classes = clsx_m_default(color, useKeyOnly(stretched, "stretched"), useMultipleProp(only, "only"), useTextAlignProp(textAlign), useValueAndKey(floated, "floated"), useVerticalAlignProp(verticalAlign), useWidthProp(computer, "wide computer"), useWidthProp(largeScreen, "wide large screen"), useWidthProp(mobile, "wide mobile"), useWidthProp(tablet, "wide tablet"), useWidthProp(widescreen, "wide widescreen"), useWidthProp(width, "wide"), "column", className);
  var rest = getUnhandledProps_default(GridColumn, props);
  var ElementType = getElementType_default(GridColumn, props);
  return /* @__PURE__ */ import_react24.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), children);
}
GridColumn.handledProps = ["as", "children", "className", "color", "computer", "floated", "largeScreen", "mobile", "only", "stretched", "tablet", "textAlign", "verticalAlign", "widescreen", "width"];
GridColumn.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types22.default.elementType,
  /** Primary content. */
  children: import_prop_types22.default.node,
  /** Additional classes. */
  className: import_prop_types22.default.string,
  /** A grid column can be colored. */
  color: import_prop_types22.default.oneOf(SUI_exports.COLORS),
  /** A column can specify a width for a computer. */
  computer: customPropTypes_exports.every([customPropTypes_exports.disallow(["width"]), import_prop_types22.default.oneOf(SUI_exports.WIDTHS)]),
  /** A column can sit flush against the left or right edge of a row. */
  floated: import_prop_types22.default.oneOf(SUI_exports.FLOATS),
  /** A column can specify a width for a large screen device. */
  largeScreen: customPropTypes_exports.every([customPropTypes_exports.disallow(["width"]), import_prop_types22.default.oneOf(SUI_exports.WIDTHS)]),
  /** A column can specify a width for a mobile device. */
  mobile: customPropTypes_exports.every([customPropTypes_exports.disallow(["width"]), import_prop_types22.default.oneOf(SUI_exports.WIDTHS)]),
  /** A column can appear only for a specific device, or screen sizes. */
  only: customPropTypes_exports.multipleProp(SUI_exports.VISIBILITY),
  /** A column can stretch its contents to take up the entire grid or row height. */
  stretched: import_prop_types22.default.bool,
  /** A column can specify a width for a tablet device. */
  tablet: customPropTypes_exports.every([customPropTypes_exports.disallow(["width"]), import_prop_types22.default.oneOf(SUI_exports.WIDTHS)]),
  /** A column can specify its text alignment. */
  textAlign: import_prop_types22.default.oneOf(SUI_exports.TEXT_ALIGNMENTS),
  /** A column can specify its vertical alignment to have all its columns vertically centered. */
  verticalAlign: import_prop_types22.default.oneOf(SUI_exports.VERTICAL_ALIGNMENTS),
  /** A column can specify a width for a wide screen device. */
  widescreen: customPropTypes_exports.every([customPropTypes_exports.disallow(["width"]), import_prop_types22.default.oneOf(SUI_exports.WIDTHS)]),
  /** Represents width of column. */
  width: customPropTypes_exports.every([customPropTypes_exports.disallow(["computer", "largeScreen", "mobile", "tablet", "widescreen"]), import_prop_types22.default.oneOf(SUI_exports.WIDTHS)])
} : {};
GridColumn.create = createShorthandFactory(GridColumn, function(children) {
  return {
    children
  };
});
var GridColumn_default = GridColumn;

// node_modules/semantic-ui-react/dist/es/collections/Grid/GridRow.js
var import_prop_types23 = __toESM(require_prop_types());
var import_react25 = __toESM(require_react());
function GridRow(props) {
  var centered = props.centered, children = props.children, className = props.className, color = props.color, columns = props.columns, divided = props.divided, only = props.only, reversed = props.reversed, stretched = props.stretched, textAlign = props.textAlign, verticalAlign = props.verticalAlign;
  var classes = clsx_m_default(color, useKeyOnly(centered, "centered"), useKeyOnly(divided, "divided"), useKeyOnly(stretched, "stretched"), useMultipleProp(only, "only"), useMultipleProp(reversed, "reversed"), useTextAlignProp(textAlign), useVerticalAlignProp(verticalAlign), useWidthProp(columns, "column", true), "row", className);
  var rest = getUnhandledProps_default(GridRow, props);
  var ElementType = getElementType_default(GridRow, props);
  return /* @__PURE__ */ import_react25.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), children);
}
GridRow.handledProps = ["as", "centered", "children", "className", "color", "columns", "divided", "only", "reversed", "stretched", "textAlign", "verticalAlign"];
GridRow.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types23.default.elementType,
  /** A row can have its columns centered. */
  centered: import_prop_types23.default.bool,
  /** Primary content. */
  children: import_prop_types23.default.node,
  /** Additional classes. */
  className: import_prop_types23.default.string,
  /** A grid row can be colored. */
  color: import_prop_types23.default.oneOf(SUI_exports.COLORS),
  /** Represents column count per line in Row. */
  columns: import_prop_types23.default.oneOf([].concat(SUI_exports.WIDTHS, ["equal"])),
  /** A row can have dividers between its columns. */
  divided: import_prop_types23.default.bool,
  /** A row can appear only for a specific device, or screen sizes. */
  only: customPropTypes_exports.multipleProp(SUI_exports.VISIBILITY),
  /** A row can specify that its columns should reverse order at different device sizes. */
  reversed: customPropTypes_exports.multipleProp(["computer", "computer vertically", "mobile", "mobile vertically", "tablet", "tablet vertically"]),
  /** A row can stretch its contents to take up the entire column height. */
  stretched: import_prop_types23.default.bool,
  /** A row can specify its text alignment. */
  textAlign: import_prop_types23.default.oneOf(SUI_exports.TEXT_ALIGNMENTS),
  /** A row can specify its vertical alignment to have all its columns vertically centered. */
  verticalAlign: import_prop_types23.default.oneOf(SUI_exports.VERTICAL_ALIGNMENTS)
} : {};
var GridRow_default = GridRow;

// node_modules/semantic-ui-react/dist/es/collections/Grid/Grid.js
function Grid(props) {
  var celled = props.celled, centered = props.centered, children = props.children, className = props.className, columns = props.columns, container = props.container, divided = props.divided, doubling = props.doubling, inverted = props.inverted, padded = props.padded, relaxed = props.relaxed, reversed = props.reversed, stackable = props.stackable, stretched = props.stretched, textAlign = props.textAlign, verticalAlign = props.verticalAlign;
  var classes = clsx_m_default("ui", useKeyOnly(centered, "centered"), useKeyOnly(container, "container"), useKeyOnly(doubling, "doubling"), useKeyOnly(inverted, "inverted"), useKeyOnly(stackable, "stackable"), useKeyOnly(stretched, "stretched"), useKeyOrValueAndKey(celled, "celled"), useKeyOrValueAndKey(divided, "divided"), useKeyOrValueAndKey(padded, "padded"), useKeyOrValueAndKey(relaxed, "relaxed"), useMultipleProp(reversed, "reversed"), useTextAlignProp(textAlign), useVerticalAlignProp(verticalAlign), useWidthProp(columns, "column", true), "grid", className);
  var rest = getUnhandledProps_default(Grid, props);
  var ElementType = getElementType_default(Grid, props);
  return /* @__PURE__ */ import_react26.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), children);
}
Grid.handledProps = ["as", "celled", "centered", "children", "className", "columns", "container", "divided", "doubling", "inverted", "padded", "relaxed", "reversed", "stackable", "stretched", "textAlign", "verticalAlign"];
Grid.Column = GridColumn_default;
Grid.Row = GridRow_default;
Grid.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types24.default.elementType,
  /** A grid can have rows divided into cells. */
  celled: import_prop_types24.default.oneOfType([import_prop_types24.default.bool, import_prop_types24.default.oneOf(["internally"])]),
  /** A grid can have its columns centered. */
  centered: import_prop_types24.default.bool,
  /** Primary content. */
  children: import_prop_types24.default.node,
  /** Additional classes. */
  className: import_prop_types24.default.string,
  /** Represents column count per row in Grid. */
  columns: import_prop_types24.default.oneOf([].concat(SUI_exports.WIDTHS, ["equal"])),
  /** A grid can be combined with a container to use the available layout and alignment. */
  container: import_prop_types24.default.bool,
  /** A grid can have dividers between its columns. */
  divided: import_prop_types24.default.oneOfType([import_prop_types24.default.bool, import_prop_types24.default.oneOf(["vertically"])]),
  /** A grid can double its column width on tablet and mobile sizes. */
  doubling: import_prop_types24.default.bool,
  /** A grid's colors can be inverted. */
  inverted: import_prop_types24.default.bool,
  /** A grid can preserve its vertical and horizontal gutters on first and last columns. */
  padded: import_prop_types24.default.oneOfType([import_prop_types24.default.bool, import_prop_types24.default.oneOf(["horizontally", "vertically"])]),
  /** A grid can increase its gutters to allow for more negative space. */
  relaxed: import_prop_types24.default.oneOfType([import_prop_types24.default.bool, import_prop_types24.default.oneOf(["very"])]),
  /** A grid can specify that its columns should reverse order at different device sizes. */
  reversed: customPropTypes_exports.multipleProp(["computer", "computer vertically", "mobile", "mobile vertically", "tablet", "tablet vertically"]),
  /** A grid can have its columns stack on-top of each other after reaching mobile breakpoints. */
  stackable: import_prop_types24.default.bool,
  /** A grid can stretch its contents to take up the entire grid height. */
  stretched: import_prop_types24.default.bool,
  /** A grid can specify its text alignment. */
  textAlign: import_prop_types24.default.oneOf(SUI_exports.TEXT_ALIGNMENTS),
  /** A grid can specify its vertical alignment to have all its columns vertically centered. */
  verticalAlign: import_prop_types24.default.oneOf(SUI_exports.VERTICAL_ALIGNMENTS)
} : {};
var Grid_default = Grid;

// node_modules/semantic-ui-react/dist/es/elements/Container/Container.js
var import_prop_types25 = __toESM(require_prop_types());
var import_react27 = __toESM(require_react());
function Container(props) {
  var children = props.children, className = props.className, content = props.content, fluid = props.fluid, text = props.text, textAlign = props.textAlign;
  var classes = clsx_m_default("ui", useKeyOnly(text, "text"), useKeyOnly(fluid, "fluid"), useTextAlignProp(textAlign), "container", className);
  var rest = getUnhandledProps_default(Container, props);
  var ElementType = getElementType_default(Container, props);
  return /* @__PURE__ */ import_react27.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), childrenUtils_exports.isNil(children) ? content : children);
}
Container.handledProps = ["as", "children", "className", "content", "fluid", "text", "textAlign"];
Container.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types25.default.elementType,
  /** Primary content. */
  children: import_prop_types25.default.node,
  /** Additional classes. */
  className: import_prop_types25.default.string,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand,
  /** Container has no maximum width. */
  fluid: import_prop_types25.default.bool,
  /** Reduce maximum width to more naturally accommodate text. */
  text: import_prop_types25.default.bool,
  /** Align container text. */
  textAlign: import_prop_types25.default.oneOf(SUI_exports.TEXT_ALIGNMENTS)
} : {};
var Container_default = Container;

// node_modules/semantic-ui-react/dist/es/elements/Header/Header.js
var import_prop_types28 = __toESM(require_prop_types());
var import_react30 = __toESM(require_react());

// node_modules/semantic-ui-react/dist/es/elements/Header/HeaderSubheader.js
var import_prop_types26 = __toESM(require_prop_types());
var import_react28 = __toESM(require_react());
function HeaderSubheader(props) {
  var children = props.children, className = props.className, content = props.content;
  var classes = clsx_m_default("sub header", className);
  var rest = getUnhandledProps_default(HeaderSubheader, props);
  var ElementType = getElementType_default(HeaderSubheader, props);
  return /* @__PURE__ */ import_react28.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), childrenUtils_exports.isNil(children) ? content : children);
}
HeaderSubheader.handledProps = ["as", "children", "className", "content"];
HeaderSubheader.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types26.default.elementType,
  /** Primary content. */
  children: import_prop_types26.default.node,
  /** Additional classes. */
  className: import_prop_types26.default.string,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand
} : {};
HeaderSubheader.create = createShorthandFactory(HeaderSubheader, function(content) {
  return {
    content
  };
});
var HeaderSubheader_default = HeaderSubheader;

// node_modules/semantic-ui-react/dist/es/elements/Header/HeaderContent.js
var import_prop_types27 = __toESM(require_prop_types());
var import_react29 = __toESM(require_react());
function HeaderContent(props) {
  var children = props.children, className = props.className, content = props.content;
  var classes = clsx_m_default("content", className);
  var rest = getUnhandledProps_default(HeaderContent, props);
  var ElementType = getElementType_default(HeaderContent, props);
  return /* @__PURE__ */ import_react29.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), childrenUtils_exports.isNil(children) ? content : children);
}
HeaderContent.handledProps = ["as", "children", "className", "content"];
HeaderContent.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types27.default.elementType,
  /** Primary content. */
  children: import_prop_types27.default.node,
  /** Additional classes. */
  className: import_prop_types27.default.string,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand
} : {};
var HeaderContent_default = HeaderContent;

// node_modules/semantic-ui-react/dist/es/elements/Header/Header.js
function Header(props) {
  var attached = props.attached, block = props.block, children = props.children, className = props.className, color = props.color, content = props.content, disabled = props.disabled, dividing = props.dividing, floated = props.floated, icon = props.icon, image = props.image, inverted = props.inverted, size = props.size, sub = props.sub, subheader = props.subheader, textAlign = props.textAlign;
  var classes = clsx_m_default("ui", color, size, useKeyOnly(block, "block"), useKeyOnly(disabled, "disabled"), useKeyOnly(dividing, "dividing"), useValueAndKey(floated, "floated"), useKeyOnly(icon === true, "icon"), useKeyOnly(image === true, "image"), useKeyOnly(inverted, "inverted"), useKeyOnly(sub, "sub"), useKeyOrValueAndKey(attached, "attached"), useTextAlignProp(textAlign), "header", className);
  var rest = getUnhandledProps_default(Header, props);
  var ElementType = getElementType_default(Header, props);
  if (!childrenUtils_exports.isNil(children)) {
    return /* @__PURE__ */ import_react30.default.createElement(ElementType, _extends({}, rest, {
      className: classes
    }), children);
  }
  var iconElement = Icon_default.create(icon, {
    autoGenerateKey: false
  });
  var imageElement = Image_default.create(image, {
    autoGenerateKey: false
  });
  var subheaderElement = HeaderSubheader_default.create(subheader, {
    autoGenerateKey: false
  });
  if (iconElement || imageElement) {
    return /* @__PURE__ */ import_react30.default.createElement(ElementType, _extends({}, rest, {
      className: classes
    }), iconElement || imageElement, (content || subheaderElement) && /* @__PURE__ */ import_react30.default.createElement(HeaderContent_default, null, content, subheaderElement));
  }
  return /* @__PURE__ */ import_react30.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), content, subheaderElement);
}
Header.handledProps = ["as", "attached", "block", "children", "className", "color", "content", "disabled", "dividing", "floated", "icon", "image", "inverted", "size", "sub", "subheader", "textAlign"];
Header.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types28.default.elementType,
  /** Attach header  to other content, like a segment. */
  attached: import_prop_types28.default.oneOfType([import_prop_types28.default.bool, import_prop_types28.default.oneOf(["top", "bottom"])]),
  /** Format header to appear inside a content block. */
  block: import_prop_types28.default.bool,
  /** Primary content. */
  children: import_prop_types28.default.node,
  /** Additional classes. */
  className: import_prop_types28.default.string,
  /** Color of the header. */
  color: import_prop_types28.default.oneOf(SUI_exports.COLORS),
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand,
  /** Show that the header is inactive. */
  disabled: import_prop_types28.default.bool,
  /** Divide header from the content below it. */
  dividing: import_prop_types28.default.bool,
  /** Header can sit to the left or right of other content. */
  floated: import_prop_types28.default.oneOf(SUI_exports.FLOATS),
  /** Add an icon by icon name or pass an Icon. */
  icon: customPropTypes_exports.every([customPropTypes_exports.disallow(["image"]), import_prop_types28.default.oneOfType([import_prop_types28.default.bool, customPropTypes_exports.itemShorthand])]),
  /** Add an image by img src or pass an Image. */
  image: customPropTypes_exports.every([customPropTypes_exports.disallow(["icon"]), import_prop_types28.default.oneOfType([import_prop_types28.default.bool, customPropTypes_exports.itemShorthand])]),
  /** Inverts the color of the header for dark backgrounds. */
  inverted: import_prop_types28.default.bool,
  /** Content headings are sized with em and are based on the font-size of their container. */
  size: import_prop_types28.default.oneOf(without_default(SUI_exports.SIZES, "big", "massive", "mini")),
  /** Headers may be formatted to label smaller or de-emphasized content. */
  sub: import_prop_types28.default.bool,
  /** Shorthand for Header.Subheader. */
  subheader: customPropTypes_exports.itemShorthand,
  /** Align header content. */
  textAlign: import_prop_types28.default.oneOf(SUI_exports.TEXT_ALIGNMENTS)
} : {};
Header.Content = HeaderContent_default;
Header.Subheader = HeaderSubheader_default;
var Header_default = Header;

// node_modules/semantic-ui-react/dist/es/elements/Segment/Segment.js
var import_prop_types31 = __toESM(require_prop_types());
var import_react33 = __toESM(require_react());

// node_modules/semantic-ui-react/dist/es/elements/Segment/SegmentGroup.js
var import_prop_types29 = __toESM(require_prop_types());
var import_react31 = __toESM(require_react());
function SegmentGroup(props) {
  var children = props.children, className = props.className, compact = props.compact, content = props.content, horizontal = props.horizontal, piled = props.piled, raised = props.raised, size = props.size, stacked = props.stacked;
  var classes = clsx_m_default("ui", size, useKeyOnly(compact, "compact"), useKeyOnly(horizontal, "horizontal"), useKeyOnly(piled, "piled"), useKeyOnly(raised, "raised"), useKeyOnly(stacked, "stacked"), "segments", className);
  var rest = getUnhandledProps_default(SegmentGroup, props);
  var ElementType = getElementType_default(SegmentGroup, props);
  return /* @__PURE__ */ import_react31.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), childrenUtils_exports.isNil(children) ? content : children);
}
SegmentGroup.handledProps = ["as", "children", "className", "compact", "content", "horizontal", "piled", "raised", "size", "stacked"];
SegmentGroup.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types29.default.elementType,
  /** Primary content. */
  children: import_prop_types29.default.node,
  /** Additional classes. */
  className: import_prop_types29.default.string,
  /** A segment may take up only as much space as is necessary. */
  compact: import_prop_types29.default.bool,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand,
  /** Formats content to be aligned horizontally. */
  horizontal: import_prop_types29.default.bool,
  /** Formatted to look like a pile of pages. */
  piled: import_prop_types29.default.bool,
  /** A segment group may be formatted to raise above the page. */
  raised: import_prop_types29.default.bool,
  /** A segment group can have different sizes. */
  size: import_prop_types29.default.oneOf(without_default(SUI_exports.SIZES, "medium")),
  /** Formatted to show it contains multiple pages. */
  stacked: import_prop_types29.default.bool
} : {};
var SegmentGroup_default = SegmentGroup;

// node_modules/semantic-ui-react/dist/es/elements/Segment/SegmentInline.js
var import_prop_types30 = __toESM(require_prop_types());
var import_react32 = __toESM(require_react());
function SegmentInline(props) {
  var children = props.children, className = props.className, content = props.content;
  var classes = clsx_m_default("inline", className);
  var rest = getUnhandledProps_default(SegmentInline, props);
  var ElementType = getElementType_default(SegmentInline, props);
  return /* @__PURE__ */ import_react32.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), childrenUtils_exports.isNil(children) ? content : children);
}
SegmentInline.handledProps = ["as", "children", "className", "content"];
SegmentInline.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types30.default.elementType,
  /** Primary content. */
  children: import_prop_types30.default.node,
  /** Additional classes. */
  className: import_prop_types30.default.string,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand
} : {};
var SegmentInline_default = SegmentInline;

// node_modules/semantic-ui-react/dist/es/elements/Segment/Segment.js
function Segment(props) {
  var attached = props.attached, basic = props.basic, children = props.children, circular = props.circular, className = props.className, clearing = props.clearing, color = props.color, compact = props.compact, content = props.content, disabled = props.disabled, floated = props.floated, inverted = props.inverted, loading = props.loading, placeholder = props.placeholder, padded = props.padded, piled = props.piled, raised = props.raised, secondary = props.secondary, size = props.size, stacked = props.stacked, tertiary = props.tertiary, textAlign = props.textAlign, vertical = props.vertical;
  var classes = clsx_m_default("ui", color, size, useKeyOnly(basic, "basic"), useKeyOnly(circular, "circular"), useKeyOnly(clearing, "clearing"), useKeyOnly(compact, "compact"), useKeyOnly(disabled, "disabled"), useKeyOnly(inverted, "inverted"), useKeyOnly(loading, "loading"), useKeyOnly(placeholder, "placeholder"), useKeyOnly(piled, "piled"), useKeyOnly(raised, "raised"), useKeyOnly(secondary, "secondary"), useKeyOnly(stacked, "stacked"), useKeyOnly(tertiary, "tertiary"), useKeyOnly(vertical, "vertical"), useKeyOrValueAndKey(attached, "attached"), useKeyOrValueAndKey(padded, "padded"), useTextAlignProp(textAlign), useValueAndKey(floated, "floated"), "segment", className);
  var rest = getUnhandledProps_default(Segment, props);
  var ElementType = getElementType_default(Segment, props);
  return /* @__PURE__ */ import_react33.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), childrenUtils_exports.isNil(children) ? content : children);
}
Segment.handledProps = ["as", "attached", "basic", "children", "circular", "className", "clearing", "color", "compact", "content", "disabled", "floated", "inverted", "loading", "padded", "piled", "placeholder", "raised", "secondary", "size", "stacked", "tertiary", "textAlign", "vertical"];
Segment.Group = SegmentGroup_default;
Segment.Inline = SegmentInline_default;
Segment.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types31.default.elementType,
  /** Attach segment to other content, like a header. */
  attached: import_prop_types31.default.oneOfType([import_prop_types31.default.bool, import_prop_types31.default.oneOf(["top", "bottom"])]),
  /** A basic segment has no special formatting. */
  basic: import_prop_types31.default.bool,
  /** Primary content. */
  children: import_prop_types31.default.node,
  /** A segment can be circular. */
  circular: import_prop_types31.default.bool,
  /** Additional classes. */
  className: import_prop_types31.default.string,
  /** A segment can clear floated content. */
  clearing: import_prop_types31.default.bool,
  /** Segment can be colored. */
  color: import_prop_types31.default.oneOf(SUI_exports.COLORS),
  /** A segment may take up only as much space as is necessary. */
  compact: import_prop_types31.default.bool,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand,
  /** A segment may show its content is disabled. */
  disabled: import_prop_types31.default.bool,
  /** Segment content can be floated to the left or right. */
  floated: import_prop_types31.default.oneOf(SUI_exports.FLOATS),
  /** A segment can have its colors inverted for contrast. */
  inverted: import_prop_types31.default.bool,
  /** A segment may show its content is being loaded. */
  loading: import_prop_types31.default.bool,
  /** A segment can increase its padding. */
  padded: import_prop_types31.default.oneOfType([import_prop_types31.default.bool, import_prop_types31.default.oneOf(["very"])]),
  /** A segment can be used to reserve space for conditionally displayed content. */
  placeholder: import_prop_types31.default.bool,
  /** Formatted to look like a pile of pages. */
  piled: import_prop_types31.default.bool,
  /** A segment may be formatted to raise above the page. */
  raised: import_prop_types31.default.bool,
  /** A segment can be formatted to appear less noticeable. */
  secondary: import_prop_types31.default.bool,
  /** A segment can have different sizes. */
  size: import_prop_types31.default.oneOf(without_default(SUI_exports.SIZES, "medium")),
  /** Formatted to show it contains multiple pages. */
  stacked: import_prop_types31.default.bool,
  /** A segment can be formatted to appear even less noticeable. */
  tertiary: import_prop_types31.default.bool,
  /** Formats content to be aligned as part of a vertical group. */
  textAlign: import_prop_types31.default.oneOf(without_default(SUI_exports.TEXT_ALIGNMENTS, "justified")),
  /** Formats content to be aligned vertically. */
  vertical: import_prop_types31.default.bool
} : {};
var Segment_default = Segment;

// node_modules/semantic-ui-react/dist/es/modules/Sidebar/SidebarPushable.js
var import_prop_types32 = __toESM(require_prop_types());
var import_react34 = __toESM(require_react());
function SidebarPushable(props) {
  var className = props.className, children = props.children, content = props.content;
  var classes = clsx_m_default("pushable", className);
  var rest = getUnhandledProps_default(SidebarPushable, props);
  var ElementType = getElementType_default(SidebarPushable, props);
  return /* @__PURE__ */ import_react34.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), childrenUtils_exports.isNil(children) ? content : children);
}
SidebarPushable.handledProps = ["as", "children", "className", "content"];
SidebarPushable.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types32.default.elementType,
  /** Primary content. */
  children: import_prop_types32.default.node,
  /** Additional classes. */
  className: import_prop_types32.default.string,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand
} : {};
var SidebarPushable_default = SidebarPushable;

// node_modules/@fluentui/react-component-event-listener/dist/es/useEventListener.js
var React38 = __toESM(require_react());
var getWindowEvent = function getWindowEvent2(target) {
  if (target) {
    var _ownerDocument$defaul, _ownerDocument, _ownerDocument$defaul2;
    if (typeof target.window === "object" && target.window === target) {
      return target.event;
    }
    return (_ownerDocument$defaul = (_ownerDocument = target.ownerDocument) == null ? void 0 : (_ownerDocument$defaul2 = _ownerDocument.defaultView) == null ? void 0 : _ownerDocument$defaul2.event) != null ? _ownerDocument$defaul : void 0;
  }
  return void 0;
};
var isActionSupported = function isActionSupported2(element, method) {
  return element ? !!element[method] : false;
};
var useEventListener = function useEventListener2(options) {
  var capture = options.capture, listener = options.listener, type = options.type, target = options.target, targetRef = options.targetRef;
  var latestListener = React38.useRef(listener);
  latestListener.current = listener;
  var eventHandler = React38.useCallback(function(event) {
    return latestListener.current(event);
  }, []);
  var timeoutId = React38.useRef(void 0);
  if (true) {
    React38.useEffect(function() {
      if (typeof target !== "undefined" && typeof targetRef !== "undefined") {
        throw new Error("`target` and `targetRef` props are mutually exclusive, please use one of them.");
      }
      if (typeof target === "undefined" && typeof targetRef === "undefined") {
        throw new Error("`target` and `targetRef` props are `undefined`, it' required to use one of them.");
      }
    }, [target, targetRef]);
  }
  React38.useEffect(function() {
    var element = typeof targetRef === "undefined" ? target : targetRef.current;
    var currentEvent = getWindowEvent(window);
    var conditionalHandler = function conditionalHandler2(event) {
      if (event === currentEvent) {
        currentEvent = void 0;
        return;
      }
      eventHandler(event);
    };
    if (isActionSupported(element, "addEventListener")) {
      element.addEventListener(type, conditionalHandler, capture);
    } else if (true) {
      throw new Error("@fluentui/react-component-event-listener: Passed `element` is not valid or does not support `addEventListener()` method.");
    }
    timeoutId.current = setTimeout(function() {
      currentEvent = void 0;
    }, 1);
    return function() {
      clearTimeout(timeoutId.current);
      currentEvent = void 0;
      if (isActionSupported(element, "removeEventListener")) {
        element.removeEventListener(type, conditionalHandler, capture);
      } else if (true) {
        throw new Error("@fluentui/react-component-event-listener: Passed `element` is not valid or does not support `removeEventListener()` method.");
      }
    };
  }, [capture, eventHandler, target, targetRef, type]);
};

// node_modules/@fluentui/react-component-event-listener/dist/es/EventListener.js
var EventListener = /* @__PURE__ */ function() {
  function EventListener2(props) {
    useEventListener(props);
    return null;
  }
  EventListener2.defaultProps = {
    capture: false
  };
  return EventListener2;
}();

// node_modules/@fluentui/react-component-event-listener/dist/es/index.js
var documentRef = {
  current: typeof document === "undefined" ? null : document
};

// node_modules/semantic-ui-react/dist/es/modules/Sidebar/Sidebar.js
var import_prop_types34 = __toESM(require_prop_types());
var import_react36 = __toESM(require_react());

// node_modules/semantic-ui-react/dist/es/modules/Sidebar/SidebarPusher.js
var import_prop_types33 = __toESM(require_prop_types());
var import_react35 = __toESM(require_react());
function SidebarPusher(props) {
  var className = props.className, dimmed = props.dimmed, children = props.children, content = props.content;
  var classes = clsx_m_default("pusher", useKeyOnly(dimmed, "dimmed"), className);
  var rest = getUnhandledProps_default(SidebarPusher, props);
  var ElementType = getElementType_default(SidebarPusher, props);
  return /* @__PURE__ */ import_react35.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), childrenUtils_exports.isNil(children) ? content : children);
}
SidebarPusher.handledProps = ["as", "children", "className", "content", "dimmed"];
SidebarPusher.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types33.default.elementType,
  /** Primary content. */
  children: import_prop_types33.default.node,
  /** Additional classes. */
  className: import_prop_types33.default.string,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand,
  /** Controls whether or not the dim is displayed. */
  dimmed: import_prop_types33.default.bool
} : {};
var SidebarPusher_default = SidebarPusher;

// node_modules/semantic-ui-react/dist/es/modules/Sidebar/Sidebar.js
var Sidebar = /* @__PURE__ */ function(_Component) {
  _inheritsLoose(Sidebar2, _Component);
  function Sidebar2(props) {
    var _this;
    _this = _Component.call(this, props) || this;
    _this.ref = /* @__PURE__ */ (0, import_react36.createRef)();
    _this.handleAnimationStart = function() {
      var visible = _this.props.visible;
      var callback = visible ? "onVisible" : "onHide";
      clearTimeout(_this.animationTimer);
      _this.animationTimer = setTimeout(_this.handleAnimationEnd, Sidebar2.animationDuration);
      if (_this.skipNextCallback) {
        _this.skipNextCallback = false;
        return;
      }
      invoke_default(_this.props, callback, null, _this.props);
    };
    _this.handleAnimationEnd = function() {
      var visible = _this.props.visible;
      var callback = visible ? "onShow" : "onHidden";
      _this.setState({
        animationTick: 0
      });
      invoke_default(_this.props, callback, null, _this.props);
    };
    _this.handleDocumentClick = function(e) {
      if (!doesNodeContainClick_default(_this.ref.current, e)) {
        _this.skipNextCallback = true;
        invoke_default(_this.props, "onHide", e, _extends({}, _this.props, {
          visible: false
        }));
      }
    };
    _this.state = {
      animationTick: 0,
      visible: props.visible
    };
    return _this;
  }
  Sidebar2.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    var tickIncrement = !!props.visible === !!state.visible ? 0 : 1;
    return {
      animationTick: state.animationTick + tickIncrement,
      visible: props.visible
    };
  };
  var _proto = Sidebar2.prototype;
  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    if (this.state.animationTick > prevState.animationTick) {
      this.handleAnimationStart();
    }
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    clearTimeout(this.animationTimer);
  };
  _proto.render = function render() {
    var _this$props = this.props, animation = _this$props.animation, className = _this$props.className, children = _this$props.children, content = _this$props.content, direction = _this$props.direction, target = _this$props.target, visible = _this$props.visible, width = _this$props.width;
    var animationTick = this.state.animationTick;
    var classes = clsx_m_default("ui", animation, direction, width, useKeyOnly(animationTick > 0, "animating"), useKeyOnly(visible, "visible"), "sidebar", className);
    var rest = getUnhandledProps_default(Sidebar2, this.props);
    var ElementType = getElementType_default(Sidebar2, this.props);
    var targetProp = isRefObject(target) ? {
      targetRef: target
    } : {
      target
    };
    return /* @__PURE__ */ import_react36.default.createElement(import_react36.default.Fragment, null, /* @__PURE__ */ import_react36.default.createElement(Ref, {
      innerRef: this.ref
    }, /* @__PURE__ */ import_react36.default.createElement(ElementType, _extends({}, rest, {
      className: classes
    }), childrenUtils_exports.isNil(children) ? content : children)), visible && /* @__PURE__ */ import_react36.default.createElement(EventListener, _extends({
      listener: this.handleDocumentClick,
      type: "click"
    }, targetProp)));
  };
  return Sidebar2;
}(import_react36.Component);
Sidebar.handledProps = ["animation", "as", "children", "className", "content", "direction", "onHidden", "onHide", "onShow", "onVisible", "target", "visible", "width"];
Sidebar.propTypes = true ? {
  /** An element type to render as (string or function). */
  as: import_prop_types34.default.elementType,
  /** Animation style. */
  animation: import_prop_types34.default.oneOf(["overlay", "push", "scale down", "uncover", "slide out", "slide along"]),
  /** Primary content. */
  children: import_prop_types34.default.node,
  /** Additional classes. */
  className: import_prop_types34.default.string,
  /** Shorthand for primary content. */
  content: customPropTypes_exports.contentShorthand,
  /** Direction the sidebar should appear on. */
  direction: import_prop_types34.default.oneOf(["top", "right", "bottom", "left"]),
  /**
   * Called before a sidebar begins to animate out.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onHide: import_prop_types34.default.func,
  /**
   * Called after a sidebar has finished animating out.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onHidden: import_prop_types34.default.func,
  /**
   * Called when a sidebar has finished animating in.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onShow: import_prop_types34.default.func,
  /**
   * Called when a sidebar begins animating in.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onVisible: import_prop_types34.default.func,
  /** A sidebar can handle clicks on the passed element. */
  target: import_prop_types34.default.oneOfType([customPropTypes_exports.domNode, customPropTypes_exports.refObject]),
  /** Controls whether or not the sidebar is visible on the page. */
  visible: import_prop_types34.default.bool,
  /** Sidebar width. */
  width: import_prop_types34.default.oneOf(["very thin", "thin", "wide", "very wide"])
} : {};
Sidebar.defaultProps = {
  direction: "left",
  target: documentRef,
  visible: false
};
Sidebar.animationDuration = 500;
Sidebar.autoControlledProps = ["visible"];
Sidebar.Pushable = SidebarPushable_default;
Sidebar.Pusher = SidebarPusher_default;
var Sidebar_default = Sidebar;

export {
  Icon_default,
  Image_default,
  Button_default,
  MenuItem,
  Menu_default,
  Grid_default,
  Container_default,
  Header_default,
  Segment_default,
  SidebarPushable_default,
  Sidebar_default
};
/*! Bundled license information:

react-is/cjs/react-is.development.js:
  (** @license React v16.13.1
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

object-assign/index.js:
  (*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  *)

exenv/index.js:
  (*!
    Copyright (c) 2015 Jed Watson.
    Based on code that is Copyright 2013-2015, Facebook, Inc.
    All rights reserved.
  *)
*/
//# sourceMappingURL=/build/_shared/chunk-BFLSOAUD.js.map
