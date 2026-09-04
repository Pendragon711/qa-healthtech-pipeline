import type { Variable, BrunoVariables } from '../types';
interface BrunoVars {
    req: BrunoVariables;
    res: BrunoVariables;
}
export declare const fromOpenCollectionVariables: (variables: Variable[] | undefined) => BrunoVars;
export declare const toOpenCollectionVariables: (vars: BrunoVars | {
    req?: BrunoVariables;
    res?: BrunoVariables;
} | null | undefined) => Variable[] | undefined;
export {};
//# sourceMappingURL=variables.d.ts.map