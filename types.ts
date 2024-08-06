import { GraphQLResolveInfo } from 'graphql';
import type { DeepPartial } from './utilTypes';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Cart = {
  __typename?: 'Cart';
  fulfillments: Array<CartFulfillment>;
  id: Scalars['ID']['output'];
};

export type CartFulfillment = {
  __typename?: 'CartFulfillment';
  id: Scalars['ID']['output'];
  lines: Array<CartLine>;
};

export type CartLine = {
  __typename?: 'CartLine';
  id: Scalars['ID']['output'];
  item: Item;
};

export type Item = {
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
};

export type Package = Item & {
  __typename?: 'Package';
  components: Array<PackageComponent>;
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
};

export type PackageComponent = {
  __typename?: 'PackageComponent';
  item: Item;
  quantity: Scalars['Int']['output'];
};

export type Product = Item & {
  __typename?: 'Product';
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
};

export type Query = {
  __typename?: 'Query';
  cartsById?: Maybe<Array<Maybe<Cart>>>;
};


export type QueryCartsByIdArgs = {
  id: Array<Scalars['ID']['input']>;
};

export type CartQueryVariables = Exact<{ [key: string]: never; }>;


export type CartQuery = { __typename?: 'Query', cartsById?: Array<{ __typename?: 'Cart', id: string, fulfillments: Array<{ __typename?: 'CartFulfillment', id: string, lines: Array<{ __typename?: 'CartLine', id: string, item: { __typename?: 'Package', id: string } | { __typename?: 'Product', id: string } }> }> } | null> | null };



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;


/** Mapping of interface types */
export type ResolversInterfaceTypes<_RefType extends Record<string, unknown>> = {
  Item: ( DeepPartial<Package> ) | ( DeepPartial<Product> );
};

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<DeepPartial<Scalars['Boolean']['output']>>;
  Cart: ResolverTypeWrapper<DeepPartial<Cart>>;
  CartFulfillment: ResolverTypeWrapper<DeepPartial<CartFulfillment>>;
  CartLine: ResolverTypeWrapper<DeepPartial<Omit<CartLine, 'item'> & { item: ResolversTypes['Item'] }>>;
  ID: ResolverTypeWrapper<DeepPartial<Scalars['ID']['output']>>;
  Int: ResolverTypeWrapper<DeepPartial<Scalars['Int']['output']>>;
  Item: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['Item']>;
  Package: ResolverTypeWrapper<DeepPartial<Package>>;
  PackageComponent: ResolverTypeWrapper<DeepPartial<Omit<PackageComponent, 'item'> & { item: ResolversTypes['Item'] }>>;
  Product: ResolverTypeWrapper<DeepPartial<Product>>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<DeepPartial<Scalars['String']['output']>>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: DeepPartial<Scalars['Boolean']['output']>;
  Cart: DeepPartial<Cart>;
  CartFulfillment: DeepPartial<CartFulfillment>;
  CartLine: DeepPartial<Omit<CartLine, 'item'> & { item: ResolversParentTypes['Item'] }>;
  ID: DeepPartial<Scalars['ID']['output']>;
  Int: DeepPartial<Scalars['Int']['output']>;
  Item: ResolversInterfaceTypes<ResolversParentTypes>['Item'];
  Package: DeepPartial<Package>;
  PackageComponent: DeepPartial<Omit<PackageComponent, 'item'> & { item: ResolversParentTypes['Item'] }>;
  Product: DeepPartial<Product>;
  Query: {};
  String: DeepPartial<Scalars['String']['output']>;
};

export type CartResolvers<ContextType = any, ParentType extends ResolversParentTypes['Cart'] = ResolversParentTypes['Cart']> = {
  fulfillments?: Resolver<Array<ResolversTypes['CartFulfillment']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CartFulfillmentResolvers<ContextType = any, ParentType extends ResolversParentTypes['CartFulfillment'] = ResolversParentTypes['CartFulfillment']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lines?: Resolver<Array<ResolversTypes['CartLine']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CartLineResolvers<ContextType = any, ParentType extends ResolversParentTypes['CartLine'] = ResolversParentTypes['CartLine']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  item?: Resolver<ResolversTypes['Item'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['Item'] = ResolversParentTypes['Item']> = {
  __resolveType: TypeResolveFn<'Package' | 'Product', ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type PackageResolvers<ContextType = any, ParentType extends ResolversParentTypes['Package'] = ResolversParentTypes['Package']> = {
  components?: Resolver<Array<ResolversTypes['PackageComponent']>, ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PackageComponentResolvers<ContextType = any, ParentType extends ResolversParentTypes['PackageComponent'] = ResolversParentTypes['PackageComponent']> = {
  item?: Resolver<ResolversTypes['Item'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductResolvers<ContextType = any, ParentType extends ResolversParentTypes['Product'] = ResolversParentTypes['Product']> = {
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  cartsById?: Resolver<Maybe<Array<Maybe<ResolversTypes['Cart']>>>, ParentType, ContextType, RequireFields<QueryCartsByIdArgs, 'id'>>;
};

export type Resolvers<ContextType = any> = {
  Cart?: CartResolvers<ContextType>;
  CartFulfillment?: CartFulfillmentResolvers<ContextType>;
  CartLine?: CartLineResolvers<ContextType>;
  Item?: ItemResolvers<ContextType>;
  Package?: PackageResolvers<ContextType>;
  PackageComponent?: PackageComponentResolvers<ContextType>;
  Product?: ProductResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
};

