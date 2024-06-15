"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const date_fns_1 = require("date-fns");
const generateSlot = (param) => {
    const { totalSlots, slotData, serviceStartTime, serviceDuration } = param;
    const { service, date } = slotData;
    const genServiceData = [];
    //   const {s}=slotData
    for (let i = 0; i < totalSlots; i++) {
        // Calculate slot start time
        const slotStartTime = (0, date_fns_1.addMinutes)(serviceStartTime, i * serviceDuration);
        // Calculate slot end time
        const slotEndTime = (0, date_fns_1.addMinutes)(slotStartTime, serviceDuration);
        // Format start and end times as "HH:mm"
        const startTime = (0, date_fns_1.format)(slotStartTime, "HH:mm");
        const endTime = (0, date_fns_1.format)(slotEndTime, "HH:mm");
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
exports.default = generateSlot;
