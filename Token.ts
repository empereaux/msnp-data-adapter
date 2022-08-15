import { TokenType } from "./TokenType";

/**
 * Represents a token.
 */
export type Token =
    PasswordToken;

/**
 * Represents an authentication token for a username and password.
 */
export type PasswordToken =
{
    /**
     * The password.
     */
    password: string,

    /**
     * The token type.
     */
    type: TokenType,

    /**
     * The username.
     */
    username: string,
}