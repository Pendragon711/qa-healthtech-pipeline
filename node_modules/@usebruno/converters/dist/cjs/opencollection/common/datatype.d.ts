import type { VariableTypedValue } from '@opencollection/types/common/variables';
import { BrunoVariableDataType, isBrunoVariableDataType } from '@usebruno/common/utils';
export { BrunoVariableDataType, isBrunoVariableDataType };
export declare const serializeVariableValue: (value: unknown) => string;
export declare const isTypedValue: (value: unknown) => value is VariableTypedValue;
export interface TypedVariableFields {
    dataType?: BrunoVariableDataType;
}
export declare const hasTypedMetadata: (v: TypedVariableFields) => boolean;
export declare const toOpenCollectionTypedValue: (v: TypedVariableFields, dataStr: string) => VariableTypedValue;
export declare const fromOpenCollectionTypedValue: (typed: VariableTypedValue) => {
    value: any;
} & TypedVariableFields;
//# sourceMappingURL=datatype.d.ts.map