import type { Resolvers } from "../types";

const queryResolvers: Resolvers['Query'] = {
    cartsById: () => [{ id: 'cartId1', fulfillments: [{ id: 'fulfillmentId1' }] }]
}

export default queryResolvers;
