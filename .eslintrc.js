module.exports = {
    "env": {
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "no-console": ["error", { allow: ["warn", "error"] }],

        "comma-dangle": [
            2,
            "always-multiline"
        ],
        "indent": [
            //"error",
            //"tab"
            2,
            4
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        // "quotes": [
        //     "error",
        //     "single"
        // ],
        "semi": [
            "error",
            "always"
        ]
    }
};