import { Contact } from "./msnp-data/Contact";
import { ContactListTypes } from "./msnp-data/ContactListTypes";
import { Group } from "./msnp-data/Group";
import { PhoneNumbers } from "./msnp-data/PhoneNumbers";
import { Profile } from "./msnp-data/Profile";
import { Result } from "./Result";
import { Settings } from "./msnp-data/Settings";
import { Token } from "./Token";
import { User } from "./msnp-data/User";

/**
 * Represents an adapter.
 * 
 * An adapter is responsible for retrieving user and contact information, updating user and contact information
 * and validating user credentials. It is not responsible for managing user sessions and their lifetimes.
 */
export interface Adapter
{
    /**
     * Adds a contact to a group.
     * 
     * @returns On success, returns the updated contact.
     */
    addContactToGroup(user: User, contactId: string, groupId: string): Promise<Result<Contact>>;

    /**
     * Adds a contact to one or more lists.
     * 
     * @returns On success, returns the updated contact. 
     */
    addContactToLists(user: User, contactId: string, lists: ContactListTypes): Promise<Result<Contact>>;

    /**
     * Authenticates a user.
     * 
     * @returns On success, returns the authenticated user.
     */
    authenticate(token: Token): Promise<Result<User>>;

    /**
     * Gets the user's contacts.
     * 
     * @returns On success, returns the contacts.
     */
    getContacts(user: User): Promise<Result<Array<Contact>>>;

    /**
     * Gets the user's groups.
     * 
     * @returns On success, returns the groups.
     */
    getGroups(user: User): Promise<Result<Array<Group>>>;

    /**
     * Removes a contact from a group.
     * 
     * @returns On success, returns the updated contact.
     */
    removeContactFromGroup(user: User, contactId: string, groupId: string): Promise<Result<Contact>>;

    /**
     * Removes a contact from one or more lists.
     * 
     * @returns On success, returns the updated contact. 
     */
    removeContactFromLists(user: User, contactId: string, lists: ContactListTypes): Promise<Result<Contact>>;

    /**
     * Updates the friendly name of a contact.
     * 
     * @returns On success, returns the updated contact.
     */
    updateContactFriendlyName(user: User, contactId: string, friendlyName: string): Promise<Result<Contact>>;

    /**
     * Updates one or more phone numbers.
     * 
     * @returns On success, returns the phone numbers of the user.
     */
    updatePhoneNumbers(user: User, phone: Partial<PhoneNumbers>): Promise<Result<PhoneNumbers>>;

    /**
     * Updates one or more profile fields.
     * 
     * @returns On success, returns the profile of the user.
     */
    updateProfile(user: User, profile: Partial<Profile>): Promise<Result<Profile>>;

    /**
     * Updates one or more settings fields.
     * 
     * @returns On success, returns the settings of the user.
     */
    updateSettings(user: User, settings: Partial<Settings>): Promise<Result<Settings>>;
}