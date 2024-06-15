import { addMinutes, format } from "date-fns";
import { ISlot } from "../../app/modules/Slot/slot.interface";

interface IGenerateSlot {
  totalSlots: number;
  slotData: ISlot;
  serviceStartTime: Date;
  serviceDuration: number;
}
const generateSlot = (param: IGenerateSlot) => {
  const { totalSlots, slotData, serviceStartTime, serviceDuration } = param;
  const { service, date } = slotData;
  const genServiceData = [];
  //   const {s}=slotData
  for (let i = 0; i < totalSlots; i++) {
    // Calculate slot start time
    const slotStartTime = addMinutes(serviceStartTime, i * serviceDuration);

    // Calculate slot end time
    const slotEndTime = addMinutes(slotStartTime, serviceDuration);

    // Format start and end times as "HH:mm"
    const startTime = format(slotStartTime, "HH:mm");
    const endTime = format(slotEndTime, "HH:mm");

    // Prepare slot object
    const slot = {
      service,
      date,
      startTime: startTime,
      endTime: endTime,
    };

    // Push slot object to array
    genServiceData.push(slot);
  }

  return genServiceData;
};
export default generateSlot;
