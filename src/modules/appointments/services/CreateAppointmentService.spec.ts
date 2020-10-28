import FakeAppointmentsRepository from '@modules/appointments/repositories/fakes/FakeAppointmentsRepository';
import CreateAppointmentService from './CreateAppointmentService';

describe('CreateAppointment', () => {
  it('should be able to create a new appointment', async () => {
    const fakeAppointmentsRepository = new FakeAppointmentsRepository();
    const createAppointment = new CreateAppointmentService(
      fakeAppointmentsRepository,
    );

    const appointment = await createAppointment.execute({
      date: new Date(),
      provider_id: '1d5d4c8c-10ba-4ee8-ba76-a95571704a7a',
    });

    expect(appointment).toHaveProperty('id');
    expect(appointment).toHaveProperty('date');
    expect(appointment).toHaveProperty('provider_id');
    expect(appointment.provider_id).toBe(
      '1d5d4c8c-10ba-4ee8-ba76-a95571704a7a',
    );
  });

  // it('should not able to create two appointment on same time', () => {});
});
