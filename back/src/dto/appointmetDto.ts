export interface IAppointmentDto{
    date: string,
    time: string,
    userId: number,
    status: "active" | "cancelled"
}
    