<template>
  <div class="calendar">
    <div class="calendar-day">
      <div class="day-name" v-for="(weekName, idx) in weekNames" :key="idx">
        {{ weekName }}
      </div>
    </div>
    <div class="calendar-date">
      <div class="day-date" v-for="(date, dateIdx) in dates" :key="dateIdx">
        {{ date }}
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    const weekNames = [
      '일요일',
      '월요일',
      '화요일',
      '수요일',
      '목요일',
      '금요일',
      '토요일',
    ];
    const date = new Date();
    const dates = ref([]);
    let year = ref(date.getFullYear());
    let month = ref(date.getMonth() + 1);
    const calendarData = () => {
      const [monthFirstDay, monthLastDate, lastMonthLastDate] =
        getFirstDayLastDate(year.value, month.value); // vue3에서 ref데이터는 value를 붙여준다
      dates.value = getMonthOfDays(
        monthFirstDay,
        monthLastDate,
        lastMonthLastDate,
      );
    };
    const getFirstDayLastDate = (year, month) => {
      const firstDay = new Date(year, month - 1, 1).getDay(); // 이번 달 시작 요일

      const lastDate = new Date(year, month, 0).getDate(); // 이번 달 마지막 날짜
      let lastYear = year;
      let lastMonth = month - 1;
      if (month === 1) {
        lastMonth = 12;
        lastYear -= 1;
      }
      const prevLastDate = new Date(lastYear, lastMonth, 0).getDate(); // 지난 달 마지막 날짜
      return [firstDay, lastDate, prevLastDate];
    };
    const getMonthOfDays = (
      monthFirstDay,
      monthLastDate,
      prevMonthLastDate,
    ) => {
      let day = 1;
      let prevDay = prevMonthLastDate - monthFirstDay + 1;
      let datesArray = [];
      let weekOfDays = [];
      while (day <= monthLastDate) {
        if (day === 1) {
          // 1일이 어느 요일인지에 따라 테이블에 그리기 위한 지난 셀의 날짜들을 구할 필요가 있다.
          for (let j = 0; j < monthFirstDay; j += 1) {
            // dates.push(prevDay);
            weekOfDays.push(prevDay); // table태그로 사용할 경우 주석 해제
            prevDay += 1;
          }
        }
        weekOfDays.push(day);

        // table태그로 사용할 경우 주석 해제
        if (weekOfDays.length === 7) {
          // 일주일 채우면
          datesArray.push(weekOfDays);
          weekOfDays = []; // 초기화
        }
        day += 1;
      }
      const len = weekOfDays.length;
      if (len > 0 && len < 7) {
        for (let k = 1; k <= 7 - len; k += 1) {
          weekOfDays.push(k);
        }
      }
      if (weekOfDays.length > 0) datesArray.push(weekOfDays); // 남은 날짜 추가
      return datesArray;
    };

    // let currentDay = ref(date.getDate());
    return {
      weekNames,
      dates,
      year,
      month,
      calendarData,
      // currentDay,
    };
  },
  mounted() {
    this.calendarData();
  },
};
</script>

<style></style>
