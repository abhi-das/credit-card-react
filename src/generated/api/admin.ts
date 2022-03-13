import { ApiFetchError } from "./common";

export interface Role {
    name: string;
    id?: string;
}
export type AdminState = {
    loading: boolean;
    roles: Role[];
    errors?: ApiFetchError;
}