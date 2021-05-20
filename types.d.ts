interface ITurboJsonConfig {
  buffer: boolean;
  required:boolean;
  ordered: boolean;
  validateStrings: boolean;
  fullMatch: boolean;
  unescapeStrings: boolean;
  defaults: boolean;
  prettyPrinted: boolean;
}

declare function compile (input: string): object;

declare function turboJsonParse (schema: object, config?: ITurboJsonConfig): typeof compile;

export = turboJsonParse
