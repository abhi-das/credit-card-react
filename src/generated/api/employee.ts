import { ApiFetchError } from "./common";

interface Profile {
    name: string;
    id?: string;
}

export type EmployeeState = {
    profile: Profile;
    loading: boolean;
    errors?: ApiFetchError;
}