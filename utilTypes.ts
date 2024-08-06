export type DeepPartial<T> = T extends string | number | boolean | undefined | null
	? T
	: T extends (infer U)[]
	? DeepPartial<U>[]
	: T extends Promise<infer U>
	? Promise<DeepPartial<U>>
	: T extends {}
	? { [K in keyof T]?: DeepPartial<T[K]> }
	: Partial<T>;
