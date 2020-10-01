var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from "react";
var copyToClipboard = function (str) {
    var _a, _b, _c, _d;
    var el = document.createElement("textarea"); // Create a <textarea> element
    el.value = str; // Set its value to the string that you want copied
    el.setAttribute("readonly", ""); // Make it readonly to be tamper-proof
    el.style.position = "absolute";
    el.style.left = "-9999px"; // Move outside the screen to make it invisible
    document.body.appendChild(el); // Append the <textarea> element to the HTML document
    var selected = ((_a = document.getSelection()) === null || _a === void 0 ? void 0 : _a.rangeCount) || 0 > 0 // Check if there is any content selected previously
        ? (_b = document.getSelection()) === null || _b === void 0 ? void 0 : _b.getRangeAt(0) : false; // Mark as false to know no selection existed before
    el.select(); // Select the <textarea> content
    document.execCommand("copy"); // Copy - only works as a result of a user action (e.g. click events)
    document.body.removeChild(el); // Remove the <textarea> element
    if (selected) {
        // If a selection existed before copying
        (_c = document.getSelection()) === null || _c === void 0 ? void 0 : _c.removeAllRanges(); // Unselect everything on the HTML document
        (_d = document.getSelection()) === null || _d === void 0 ? void 0 : _d.addRange(selected); // Restore the original selection
    }
};
var containerBaseStyles = {
    position: "relative",
};
var tooltipBaseStyles = function (pos) {
    var _a;
    return (_a = {},
        _a[pos === "above" ? "bottom" : "top"] = "26px",
        _a.maxWidth = "fit-content",
        _a.position = "absolute",
        _a.width = "auto",
        _a.margin = "auto",
        _a.fontWeight = "bold",
        _a.left = "0px",
        _a.right = "0px",
        _a.boxShadow = "0px 15px 25px rgba(0,0,0,.1),0px 10px 60px rgba(0,0,0,.1)",
        _a.fontSize = "12px",
        _a.backgroundColor = "black",
        _a.color = "white",
        _a.padding = "6px 8px",
        _a.borderRadius = "5px",
        _a.opacity = 0,
        _a.transform = "translateY(" + (pos === "above" ? "-5px" : "5px") + ")",
        _a.visibility = "hidden",
        _a.transition = "all 0.2s ease-in-out",
        _a);
};
var toolTipVisibleStyles = {
    opacity: 1,
    transform: "none",
    visibility: "visible",
};
var CopyMailTo = function (_a) {
    var email = _a.email, _b = _a.children, children = _b === void 0 ? null : _b, _c = _a.defaultTooltip, defaultTooltip = _c === void 0 ? "Copy email address" : _c, _d = _a.copiedTooltip, copiedTooltip = _d === void 0 ? "Copied to clipboard!" : _d, _e = _a.containerStyles, containerStyles = _e === void 0 ? {} : _e, _f = _a.tooltipStyles, tooltipStyles = _f === void 0 ? {} : _f, _g = _a.anchorStyles, anchorStyles = _g === void 0 ? {} : _g, _h = _a.pos, pos = _h === void 0 ? "above" : _h;
    var _j = React.useState(false), showCopied = _j[0], setShowCopied = _j[1];
    var _k = React.useState(false), showTooltip = _k[0], setShowTooltip = _k[1];
    var copyEmail = function (e) {
        e.preventDefault();
        copyToClipboard(email);
        setShowCopied(true);
        setShowTooltip(true);
    };
    var displayTooltip = function () {
        setShowTooltip(true);
    };
    var hideTooltip = function () {
        setShowTooltip(false);
    };
    React.useEffect(function () {
        if (showCopied) {
            window.setTimeout(function () {
                setShowCopied(false);
            }, 1000);
        }
    }, [showCopied]);
    var allContainerStyles = __assign(__assign({}, containerBaseStyles), containerStyles);
    var allTooltipStyles = __assign(__assign(__assign({}, tooltipBaseStyles(pos)), tooltipStyles), (showTooltip && toolTipVisibleStyles));
    return (React.createElement("span", { style: allContainerStyles },
        React.createElement("a", { "aria-label": defaultTooltip, onClick: copyEmail, onMouseOver: displayTooltip, onMouseOut: hideTooltip, onFocus: displayTooltip, onBlur: hideTooltip, href: "mailto:" + email, style: anchorStyles }, children || email),
        React.createElement("span", { style: allTooltipStyles }, showCopied ? copiedTooltip : defaultTooltip)));
};
export default CopyMailTo;
//# sourceMappingURL=index.js.map