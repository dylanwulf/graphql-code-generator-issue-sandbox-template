import type { Resolvers } from "../types";

const queryResolvers: Resolvers['Query'] = {
    cartsById: () => [{ id: 'cartId1', fulfillments: [{
        id: 'fulfillmentId1', lines: [{
            id: 'lineId1',
            item: {
                id: 'asdf',
                description: 'asdf',
                components: [{
                    quantity: 2,
                    item: [{id: 'component1', description: 'asfd'}]
                }]
            }
        }]
    }] }]
}

export default queryResolvers;
