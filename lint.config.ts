import type { ITtscLintConfig } from "@ttsc/lint";

export default {
  extends: "./lint.ignore.config.json",
  files: ["packages/observable/src/**/*.ts", "packages/rxjs/src/**/*.ts"],
  ignores: ["**/*.d.ts"],
  format: {
    printWidth: 140,
    tabWidth: 2,
    useTabs: false,
    trailingComma: "es5",
    singleQuote: true,
  },
  rules: {
    "no-var": "error",
    "prefer-const": "error",
    eqeqeq: "error",
    "object-shorthand": "error",
    "no-unneeded-ternary": "error",
    "prefer-template": "error",
    "no-useless-rename": "error",
    "dot-notation": "error",
    "no-extra-boolean-cast": "error",
    "no-useless-escape": "error",
    "prefer-as-const": "error",
    "prefer-namespace-keyword": "error",
  },
} satisfies ITtscLintConfig;
