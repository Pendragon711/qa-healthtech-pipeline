import type { HttpRequestBody, GraphQLBody, BrunoHttpRequestBody } from '../types';
export declare const fromOpenCollectionBody: (body: HttpRequestBody | GraphQLBody | undefined, requestType?: string) => BrunoHttpRequestBody;
export declare const toOpenCollectionBody: (body: BrunoHttpRequestBody | null | undefined) => HttpRequestBody | undefined;
export declare const toOpenCollectionGraphqlBody: (body: BrunoHttpRequestBody | null | undefined) => GraphQLBody | undefined;
//# sourceMappingURL=body.d.ts.map