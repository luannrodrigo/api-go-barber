import FakeAppointmentsRepository from '@modules/appointments/repositories/fakes/FakeAppointmentsRepository';
import AppError from '@shared/errors/AppError';
import CreateAppointmentService from './CreateAppointmentService';

let fakeAppointmentsRepository: FakeAppointmentsRepository;
let createAppointment: CreateAppointmentService;

describe('CreateAppointment', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();
    createAppointment = new CreateAppointmentService(
      fakeAppointmentsRepository,
    );
  });

  it('should be able to create a new appointment', async () => {
    const appointment = await createAppointment.execute({
      date: new Date(),
      user_id: '1234',
      provider_id: '1d5d4c8c-10ba-4ee8-ba76-a95571704a7a',
    });

    expect(appointment).toHaveProperty('id');
    expect(appointment).toHaveProperty('date');
    expect(appointment).toHaveProperty('provider_id');
    expect(appointment.provider_id).toBe(
      '1d5d4c8c-10ba-4ee8-ba76-a95571704a7a',
    );
  });

  it('should not able to create two appointment on same time', async () => {
    const appoitmentDate = new Date(2020, 4, 10, 11);

    await createAppointment.execute({
      date: appoitmentDate,
      user_id: '1245',
      provider_id: '1d5d4c8c-10ba-4ee8-ba76-a95571704a7a',
    });

    expect(
      createAppointment.execute({
        date: appoitmentDate,
        user_id: '1245',
        provider_id: '1d5d4c8c-10ba-4ee8-ba76-a95571704a7a',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
