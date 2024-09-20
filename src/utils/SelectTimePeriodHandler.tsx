  // const SelectTimePeriodHandler = (e: ChangeEvent<HTMLSelectElement>) => {
  //   const SelectId = e.target.value;
  //   switch (SelectId) {
  //     case "1":
  //       startDesiredTimePeriod = new DateObject({ calendar: persian }).toFirstOfWeek();
  //       endDesiredTimePeriod = new DateObject({ calendar: persian }).toLastOfWeek();
  //       setDesiredTimePeriod([startDesiredTimePeriod , endDesiredTimePeriod]);
  //       return;
  //     case "2":
  //     startDesiredTimePeriod = new DateObject({calendar: persian}).subtract(2, "day");
  //     endDesiredTimePeriod = new DateObject({calendar: persian}).subtract(1, "day");
  //      setDesiredTimePeriod([startDesiredTimePeriod , endDesiredTimePeriod]);
  //     return
  //     case "3":
  //       let dayOfWeek = new DateObject({calendar: persian}).weekDay.index;
  //       let startOfThisWeek = new DateObject({calendar: persian}).subtract(dayOfWeek, "days");
  //       let endOfThisWeek = new DateObject({calendar: persian}).subtract(dayOfWeek, "days");
  //       startDesiredTimePeriod = startOfThisWeek.subtract(7 , "days");
  //       endDesiredTimePeriod = endOfThisWeek.subtract(1 , "days");
  //       setDesiredTimePeriod([startDesiredTimePeriod , endDesiredTimePeriod]);
  //       return
  //       case "4":
  //         let startLastMonthDate = new DateObject({calendar: persian}).subtract(1, "month");
  //         let endLastMonthDate = new DateObject({calendar: persian}).subtract(1, "month");
  //         startDesiredTimePeriod = startLastMonthDate.setDay(1);
  //         endDesiredTimePeriod = endLastMonthDate.add(1, "month").setDay(1);
  //         setDesiredTimePeriod([startDesiredTimePeriod , endDesiredTimePeriod]);
  //         return
  //         case "5":
  //         startDesiredTimePeriod = new DateObject({calendar: persian}).subtract(7, "days");
  //         endDesiredTimePeriod = new DateObject({calendar: persian}).subtract(1, "day");
  //         setDesiredTimePeriod([startDesiredTimePeriod , endDesiredTimePeriod]);
  //         return
  //         case "6":
  //         startDesiredTimePeriod = new DateObject({calendar: persian}).subtract(30, "days");
  //         endDesiredTimePeriod = new DateObject({calendar: persian}).subtract(1, "day");
  //         setDesiredTimePeriod([startDesiredTimePeriod , endDesiredTimePeriod]);
  //         return
  //         case "7":
  //         startDesiredTimePeriod = new DateObject({calendar: persian}).subtract(365, "days");
  //         endDesiredTimePeriod = new DateObject({calendar: persian}).subtract(1, "day");
  //         setDesiredTimePeriod([startDesiredTimePeriod , endDesiredTimePeriod]);
  //         return
  //     default:
  //       break;
  //   }
  // };