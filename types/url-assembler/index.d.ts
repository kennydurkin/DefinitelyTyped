// Type definitions for url-assembler 2.1
// Project: https://github.com/Floby/node-url-assembler
// Definitions by: Wolfgang Faust <https://github.com/wolfgang42>
//                 Alice Pote <https://github.com/alicewriteswrongs>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
import * as qs from "qs";

interface UrlAssembler {
    template(template: string): UrlAssembler;
    prefix(subPath: string): UrlAssembler;
    segment(subPathTemplate: string): UrlAssembler;
    param(key: string, value: string, strict?: boolean): UrlAssembler;
    param(params: { [s: string]: any }, strict?: boolean): UrlAssembler;
    query(key: string, value: any): UrlAssembler;
    query(params: { [s: string]: any }): UrlAssembler;
    toString(): string;
    valueOf(): string;
    toJSON(): string;
    qsConfig(config: qs.IStringifyOptions): UrlAssembler;
    pathname: string;
}

interface UrlAssemblerConstructor {
    (baseUrl?: string): UrlAssembler;
    (urlAssembler: UrlAssembler): UrlAssembler;
    new(baseUrl?: string): UrlAssembler;
    new(urlAssembler: UrlAssembler): UrlAssembler;
}

declare const UrlAssembler: UrlAssemblerConstructor;

export = UrlAssembler;
