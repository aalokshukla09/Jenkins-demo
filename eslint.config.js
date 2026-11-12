// eslint-disable-next-line no-undef
const js = require("@eslint/js");
// eslint-disable-next-line no-undef
const globals = require("globals");

// eslint-disable-next-line no-undef
module.exports = [
    js.configs.recommended,

    {
        files: ["src/**/*.js"],
        languageOptions: {
            globals: globals.node
        }
    },

    {
        files: ["tests/**/*.js"],
        languageOptions: {
            globals: {
                ...globals.node,
                ...globals.jest
            }
        }
    }
];
