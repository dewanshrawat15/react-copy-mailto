"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var copyToClipboard = function copyToClipboard(str) {
  var _document$getSelectio, _document$getSelectio2;

  var el = document.createElement("textarea"); // Create a <textarea> element

  el.value = str; // Set its value to the string that you want copied

  el.setAttribute("readonly", ""); // Make it readonly to be tamper-proof

  el.style.position = "absolute";
  el.style.left = "-9999px"; // Move outside the screen to make it invisible

  document.body.appendChild(el); // Append the <textarea> element to the HTML document

  var selected = ((_document$getSelectio = document.getSelection()) === null || _document$getSelectio === void 0 ? void 0 : _document$getSelectio.rangeCount) || 0 > 0 // Check if there is any content selected previously
  ? (_document$getSelectio2 = document.getSelection()) === null || _document$getSelectio2 === void 0 ? void 0 : _document$getSelectio2.getRangeAt(0) // Store selection if found
  : false; // Mark as false to know no selection existed before

  el.select(); // Select the <textarea> content

  document.execCommand("copy"); // Copy - only works as a result of a user action (e.g. click events)

  document.body.removeChild(el); // Remove the <textarea> element

  if (selected) {
    var _document$getSelectio3, _document$getSelectio4;

    // If a selection existed before copying
    (_document$getSelectio3 = document.getSelection()) === null || _document$getSelectio3 === void 0 ? void 0 : _document$getSelectio3.removeAllRanges(); // Unselect everything on the HTML document

    (_document$getSelectio4 = document.getSelection()) === null || _document$getSelectio4 === void 0 ? void 0 : _document$getSelectio4.addRange(selected); // Restore the original selection
  }
};

var containerBaseStyles = {
  position: "relative"
};

var tooltipBaseStyles = function tooltipBaseStyles(pos) {
  var _ref;

  return _ref = {}, _defineProperty(_ref, pos === "above" ? "bottom" : "top", "26px"), _defineProperty(_ref, "maxWidth", "fit-content"), _defineProperty(_ref, "position", "absolute"), _defineProperty(_ref, "width", "auto"), _defineProperty(_ref, "margin", "auto"), _defineProperty(_ref, "fontWeight", "bold"), _defineProperty(_ref, "left", "0px"), _defineProperty(_ref, "right", "0px"), _defineProperty(_ref, "boxShadow", "0px 15px 25px rgba(0,0,0,.1),0px 10px 60px rgba(0,0,0,.1)"), _defineProperty(_ref, "fontSize", "12px"), _defineProperty(_ref, "backgroundColor", "black"), _defineProperty(_ref, "color", "white"), _defineProperty(_ref, "padding", "6px 8px"), _defineProperty(_ref, "borderRadius", "5px"), _defineProperty(_ref, "opacity", 0), _defineProperty(_ref, "transform", "translateY(".concat(pos === "above" ? "-5px" : "5px", ")")), _defineProperty(_ref, "visibility", "hidden"), _defineProperty(_ref, "transition", "all 0.2s ease-in-out"), _ref;
};

var toolTipVisibleStyles = {
  opacity: 1,
  transform: "none",
  visibility: "visible"
};

var CopyMailTo = function CopyMailTo(_ref2) {
  var email = _ref2.email,
      _ref2$children = _ref2.children,
      children = _ref2$children === void 0 ? null : _ref2$children,
      _ref2$defaultTooltip = _ref2.defaultTooltip,
      defaultTooltip = _ref2$defaultTooltip === void 0 ? "Copy email address" : _ref2$defaultTooltip,
      _ref2$copiedTooltip = _ref2.copiedTooltip,
      copiedTooltip = _ref2$copiedTooltip === void 0 ? "Copied to clipboard!" : _ref2$copiedTooltip,
      _ref2$containerStyles = _ref2.containerStyles,
      containerStyles = _ref2$containerStyles === void 0 ? {} : _ref2$containerStyles,
      _ref2$tooltipStyles = _ref2.tooltipStyles,
      tooltipStyles = _ref2$tooltipStyles === void 0 ? {} : _ref2$tooltipStyles,
      _ref2$anchorStyles = _ref2.anchorStyles,
      anchorStyles = _ref2$anchorStyles === void 0 ? {} : _ref2$anchorStyles,
      _ref2$pos = _ref2.pos,
      pos = _ref2$pos === void 0 ? "above" : _ref2$pos;

  var _React$useState = _react["default"].useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      showCopied = _React$useState2[0],
      setShowCopied = _React$useState2[1];

  var _React$useState3 = _react["default"].useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      showTooltip = _React$useState4[0],
      setShowTooltip = _React$useState4[1];

  var copyEmail = function copyEmail(e) {
    e.preventDefault();
    copyToClipboard(email);
    setShowCopied(true);
    setShowTooltip(true);
  };

  var displayTooltip = function displayTooltip() {
    setShowTooltip(true);
  };

  var hideTooltip = function hideTooltip() {
    setShowTooltip(false);
  };

  _react["default"].useEffect(function () {
    if (showCopied) {
      window.setTimeout(function () {
        setShowCopied(false);
      }, 1000);
    }
  }, [showCopied]);

  var allContainerStyles = _objectSpread(_objectSpread({}, containerBaseStyles), containerStyles);

  var allTooltipStyles = _objectSpread(_objectSpread(_objectSpread({}, tooltipBaseStyles(pos)), tooltipStyles), showTooltip && toolTipVisibleStyles);

  return /*#__PURE__*/_react["default"].createElement("span", {
    style: allContainerStyles
  }, /*#__PURE__*/_react["default"].createElement("a", {
    "aria-label": defaultTooltip,
    onClick: copyEmail,
    onMouseOver: displayTooltip,
    onMouseOut: hideTooltip,
    onFocus: displayTooltip,
    onBlur: hideTooltip,
    href: "mailto:".concat(email),
    style: anchorStyles
  }, children || email), /*#__PURE__*/_react["default"].createElement("span", {
    style: allTooltipStyles
  }, showCopied ? copiedTooltip : defaultTooltip));
};

var _default = CopyMailTo;
exports["default"] = _default;