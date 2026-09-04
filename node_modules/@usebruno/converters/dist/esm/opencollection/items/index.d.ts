import type { BrunoItem } from '../types';
export declare const fromOpenCollectionItem: (item: unknown, parseFolder: (folder: unknown) => BrunoItem) => BrunoItem | null;
export declare const toOpenCollectionItem: (item: BrunoItem, stringifyFolder: (folder: BrunoItem) => unknown) => unknown | null;
export declare const fromOpenCollectionItems: (items: unknown[] | undefined, parseFolder: (folder: unknown) => BrunoItem) => BrunoItem[];
export declare const toOpenCollectionItems: (items: BrunoItem[] | undefined | null, stringifyFolder: (folder: BrunoItem) => unknown) => unknown[];
export { fromOpenCollectionHttpItem, toOpenCollectionHttpItem } from './http';
export { fromOpenCollectionGraphqlItem, toOpenCollectionGraphqlItem } from './graphql';
export { fromOpenCollectionGrpcItem, toOpenCollectionGrpcItem } from './grpc';
export { fromOpenCollectionWebsocketItem, toOpenCollectionWebsocketItem } from './websocket';
//# sourceMappingURL=index.d.ts.map