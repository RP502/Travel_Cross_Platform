export interface Participant {
    id: string;
    fullName: string;
    dateOfBirth: string;
    phoneNumber?: string;
    isSelecting?: boolean;
}