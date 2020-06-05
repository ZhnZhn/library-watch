module.exports = {
    "parser": "babel-eslint",
    "env": {
        "es6" : true,
        "browser": true,
        "jest": true
    },
    "plugins" : [
          "react",
          "jsx-a11y"
    ],

    "extends": [
      "eslint:recommended",
      "plugin:jsx-a11y/recommended"
    ],


    "rules" : {

    "no-mixed-spaces-and-tabs" : [2, "smart-tabs"],
    "no-console" : 0,
    "no-whitespace-before-property": 2,

    "default-case": 2,
    "jsx-quotes": [2, "prefer-double"],
    "no-unused-expressions": 1,
    "no-unused-vars": [1, {"args": "none"}],


    "react/display-name": 0,
    "react/jsx-boolean-value": [1, "always"],
    "react/jsx-no-undef": 0,


    "react/jsx-sort-prop-types": 0,
    "react/jsx-sort-props": 0,
    "react/jsx-uses-react": 1,
    "react/jsx-uses-vars": 1,


    "react/no-did-mount-set-state": 0,
    "react/no-did-update-set-state": 0,


    "react/no-multi-comp": 0,
    "react/no-unknown-property": 0,


    "react/prop-types": 0,
    "react/react-in-jsx-scope": 1,
    "react/self-closing-comp": 1,

    "react/sort-comp": 0,
    "react/jsx-wrap-multilines": [1, {"declaration": false, "assignment": false}],


      "jsx-a11y/no-access-key": 0

    }

}
