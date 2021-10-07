interface ITurboJsonConfig {
    buffer: boolean;
    required: boolean;
    ordered: boolean;
    validate: boolean;
    validateStrings: boolean;
    fullMatch: boolean;
    unescapeStrings: boolean;
    defaults: boolean;
    prettyPrinted: boolean;
}

declare function compile(input: string | Buffer): Record<string, unknown>;

declare function turboJsonParse(
    schema: Record<string, unknown>,
    config?: ITurboJsonConfig,
): typeof compile;

export = turboJsonParse
