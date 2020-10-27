import Appointment from '@modules/appointments/typeorm/entities/Appointments';

export default interface IAppointmentsRepository {
  findByDate(date: Date): Promise<Appointment | undefined>;
}
