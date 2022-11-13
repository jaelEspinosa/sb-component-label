"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.customBackgroundColor = exports.CustomFontColor = exports.tertiary = exports.Secondary = exports.AllCaps = exports.Basic = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var MyLabel_1 = require("../../components/MyLabel");
exports.default = {
    title: 'UI/MyLabel',
    component: MyLabel_1.MyLabel,
    argTypes: {
        size: { control: 'select' },
        color: { control: 'select' },
        fontColor: { control: 'color' },
        backgroundColor: { control: 'color' }
    }
};
var Template = function (args) { return (0, jsx_runtime_1.jsx)(MyLabel_1.MyLabel, __assign({}, args)); };
exports.Basic = Template.bind({});
exports.Basic.args = {
    label: 'Basic',
    size: 'h3',
    allCaps: false
};
exports.AllCaps = Template.bind({});
exports.AllCaps.args = {
    label: 'all caps?',
    size: 'h1',
    allCaps: true
};
exports.Secondary = Template.bind({});
exports.Secondary.args = {
    label: 'Secondary',
    size: 'h2',
    color: 'secondary'
};
exports.tertiary = Template.bind({});
exports.tertiary.args = {
    label: 'Tertiary',
    size: 'h2',
    color: 'tertiary'
};
// font color 
exports.CustomFontColor = Template.bind({});
exports.CustomFontColor.args = {
    label: 'Custom Font Color',
    size: 'h2',
    fontColor: 'pink'
};
// backgroundColor
exports.customBackgroundColor = Template.bind({});
exports.customBackgroundColor.args = {
    label: 'Custom Font Color',
    size: 'h2',
    fontColor: 'white',
    backgroundColor: 'black'
};
