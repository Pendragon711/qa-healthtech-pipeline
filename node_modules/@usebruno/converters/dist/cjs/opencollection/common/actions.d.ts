import type { Action, BrunoVariables } from '../types';
/**
 * Convert Bruno post-response variables to OpenCollection actions.
 * Post-response variables in Bruno are converted to 'set-variable' actions
 * with phase 'after-response'.
 */
export declare const toOpenCollectionActions: (resVariables: BrunoVariables | null | undefined) => Action[] | undefined;
/**
 * Convert OpenCollection actions to Bruno post-response variables.
 * Only 'set-variable' actions with phase 'after-response' are converted.
 */
export declare const fromOpenCollectionActions: (actions: Action[] | null | undefined) => BrunoVariables;
//# sourceMappingURL=actions.d.ts.map