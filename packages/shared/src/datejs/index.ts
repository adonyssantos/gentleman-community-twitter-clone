import dayjs from 'dayjs';
import { Dayjs } from 'dayjs';
import calendarPlugin from 'dayjs-plugin-calendar-sets';
import localeData from 'dayjs/plugin/localeData';

dayjs.extend(calendarPlugin);
dayjs.extend(localeData);
export default dayjs;
export type { Dayjs };
