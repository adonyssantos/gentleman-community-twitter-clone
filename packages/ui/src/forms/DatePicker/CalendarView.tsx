import { useMemo, useState } from 'react';
import { Pressable } from 'react-native';
import dayjs from '@root/shared/datejs';
import { Typography } from '@root/ui/common/Typography';
import { View } from '@universal-labs/primitives';
import clsx from 'clsx';

export function CalendarView() {
  const calendar = useMemo(() => dayjs.calendarSets(), []);
  const [selectedDay, setSelectedDay] = useState('');
  const [monthWeeks, setMonthWeeks] = useState<string[][]>(() => calendar.month());
  const weekDays = dayjs.weekdaysMin();
  const nameMonths = Array.from({ length: 12 }, (_, i) => dayjs().month(i).format('MMMM'));
  const setNextMonth = () => setMonthWeeks(calendar.next());
  const setPrevMonth = () => setMonthWeeks(calendar.prev());

  const formatDate = (date: string) => {
    if (date === '') return '';
    return dayjs(date).get('D');
  };
  const selectedDate = (date: string) => {
    setSelectedDay(date);
  };

  return (
    <View className='w-full flex-1 items-center justify-center bg-gray-200 p-5'>
      <View className='w-full flex-row justify-between'>
        <Pressable onPress={setPrevMonth}>
          <Typography>Prev</Typography>
        </Pressable>
        <select name='months'>
          {nameMonths.map((nameMonth, index) => (
            <option key={index} value={nameMonth}>
              {nameMonth}
            </option>
          ))}
        </select>
        <Pressable onPress={setNextMonth}>
          <Typography>Next</Typography>
        </Pressable>
      </View>
      <View>
        <View className='mt-2 max-w-screen-sm flex-row'>
          {weekDays.map((day: []) => (
            <View className='flex-1 basis-[15%]' key={`day-${day}`}>
              <Typography>{day}</Typography>
            </View>
          ))}
        </View>
        <View className='max-w-screen-sm'>
          {monthWeeks.map((week, index) => (
            <View className='flex-1 flex-row' key={`week-${index}`}>
              {week.map((date, index) => (
                <View
                  className={clsx(
                    'my-1 mx-1 h-10 basis-[15%] px-2',
                    'items-center justify-center bg-gray-600',
                    `${
                      selectedDay === date && selectedDay !== '' ? 'bg-red-700' : 'bg-gray-600'
                    }`,
                  )}
                  key={`date-${index}`}
                >
                  <Pressable onPress={() => selectedDate(date)}>
                    <Typography>{formatDate(date)}</Typography>
                  </Pressable>
                </View>
              ))}
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}
