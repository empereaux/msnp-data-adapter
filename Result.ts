/**
 * Represents the result of an operation.
 */
export type Result<TValue> = ErrorResult | SuccessResult<TValue>;

/**
 * Represent an error result.
 */
export type ErrorResult =
{
    /**
     * The error associated with the result.
     */
    error: ErrorResultCode,

    /**
     * Whether the operation succeeded.
     */
    success: false,
}

/**
 * Represents an error result code.
 */
export enum ErrorResultCode
{
    /**
     * An unknown or "other" error.
     */
    unknown = 1,
}

/**
 * Represents a success result.
 */
export type SuccessResult<TValue> =
{
    /**
     * Whether the operation succeeded.
     */
    success: true,

    /**
     * The value associated with the result.
     */
    value: TValue,
}