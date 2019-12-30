import * as yup from 'yup';
import { startOfHour, parseISO, isBefore } from 'date-fns';
import Appointment from '../models/Appointment';
import User from '../models/User';

class AppointmentController {
  async store(req, res) {
    const schema = yup.object().shape({
      date: yup.date().required(),
      provider_id: yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'VALIDATION FAILS' });
    }

    const { provider_id, date } = req.body;

    // check if provider_id is a provider

    const isProvider = await User.findOne({
      where: {
        id: provider_id,
        provider: true,
      },
    });

    if (!isProvider) {
      return res
        .status(401)
        .json({ error: 'You can only create appointments with providers' });
    }

    // check for past dates
    const hourStart = startOfHour(parseISO(date));

    if (isBefore(hourStart, new Date())) {
      return res.status(401).json({
        error: 'Past dates are not allowed',
      });
    }

    // check date availability

    const checkAvailability = await Appointment.findOne({
      where: {
        provider_id,
        canceled_at: null,
        date: hourStart,
      },
    });

    if (checkAvailability) {
      return res
        .status(400)
        .json({ error: 'Appointment Date is no available' });
    }

    const appointment = await Appointment.create({
      user_id: req.userId,
      provider_id,
      date,
    });

    return res.json(appointment);
  }
}

export default new AppointmentController();
