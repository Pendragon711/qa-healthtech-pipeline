type PredicateOrMapper = ((obj: any) => any) | Record<string, any>;
/**
 * Getter with deep navigation, filter and map support
 *
 * 1. Easy array navigation
 *    ```js
 *    get(data, 'customer.orders.items.amount')
 *    ```
 * 2. Deep navigation .. double dots
 *    ```js
 *    get(data, '..items.amount')
 *    ```
 * 3. Array indexing
 *    ```js
 *    get(data, '..items[0].amount')
 *    ```
 * 4. Array filtering [?] with corresponding filter function
 *    ```js
 *    get(data, '..items[?].amount', i => i.amount > 20)
 *    ```
 * 5. Array filtering [?] with simple object predicate, same as (i => i.id === 2 && i.amount === 20)
 *    ```js
 *    get(data, '..items[?]', { id: 2, amount: 20 })
 *    ```
 * 6. Array mapping [?] with corresponding mapper function
 *    ```js
 *    get(data, '..items[?].amount', i => i.amount + 10)
 *    ```
 */
export declare function get(source: any, path: string, ...fns: PredicateOrMapper[]): any;
export {};
