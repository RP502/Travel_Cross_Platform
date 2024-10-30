export interface DateOfBooking {
  date: string;
  isSelected?: boolean;
}

export const getNextSevenDays: () => DateOfBooking[] = () => {
const date = new Date();
date.setDate(date.getDate() + 7);
  const result: DateOfBooking[] = [];
  const currentDate = new Date(date);

  for (let i = 0; i < 7; i++) {
    const nextDate = new Date(currentDate);
    nextDate.setDate(currentDate.getDate() + i);
    result.push({
      date: `${nextDate.getDate().toString().padStart(2, "0")}/${(
        nextDate.getMonth() + 1
      )
        .toString()
        .padStart(2, "0")}/${nextDate.getFullYear()}`,
        isSelected: false,
    });
  }
  return result;
};
