<template>
  <div class="calendar">
    <div class="calendar-day">
      <span
        class="day-name"
        v-for="(weekName, idx) in weekNames"
        :key="idx"
        :class="dayColor(weekName)"
      >
        {{ weekName }}
      </span>
    </div>
    <div class="week-date" v-for="(week, weekIdx) in dates" :key="weekIdx">
      <div
        v-for="(day, dayIdx) in week"
        :key="dayIdx"
        :class="[
          weekendColor(dayIdx),
          {
            'disable-day':
              (weekIdx === 0 && day >= lastMonthStart) ||
              (dates.length - 1 === weekIdx && nextMonthStart > day),
          },
          {
            'has-text-primary':
              day === today && month === currentMonth && year === currentYear,
          },
          {
            today:
              year === currentYear && month === currentMonth && day === today,
          },
        ]"
        class="day-date"
      >
        <time :data-time="`${year}-${month}-${day}`">{{ day }}</time>
        <div class="sales-data">
          <p><span class="day-use">40,000</span>원</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    // 데이터
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
    let today = ref(date.getDate());
    let year = ref(0).value;
    let month = ref(0).value;
    let currentYear = ref(date.getFullYear());
    let currentMonth = ref(date.getMonth() + 1);
    let lastMonthStart = ref(0);
    let nextMonthStart = ref(0);
    year = currentYear.value;
    month = currentMonth.value;
    // 함수
    const calendarData = () => {
      const [monthFirstDay, monthLastDate, lastMonthLastDate] =
        getFirstDayLastDate(currentYear.value, currentMonth.value); // vue3에서 ref데이터(변동이 있는 데이터)는 value를 붙여준다
      dates.value = getMonthOfDays(
        monthFirstDay,
        monthLastDate,
        lastMonthLastDate,
      );
    };
    const getFirstDayLastDate = (currentYear, currentMonth) => {
      const firstDay = new Date(currentYear, currentMonth - 1, 1).getDay(); // 이번 달 시작 요일

      const lastDate = new Date(currentYear, currentMonth, 0).getDate(); // 이번 달 마지막 날짜
      let lastYear = currentYear;
      let lastMonth = currentMonth - 1;
      if (currentMonth === 1) {
        lastMonth = 12;
        lastYear -= 1;
      }
      const prevLastDate = new Date(lastYear, lastMonth, 0).getDate();
      // 지난 달 마지막 날짜
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
            if (j === 0) lastMonthStart.value = prevDay;
            weekOfDays.push(prevDay);
            prevDay += 1;
          }
        }
        weekOfDays.push(day);

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
      nextMonthStart.value = weekOfDays[0];
      return datesArray;
    };

    // 달력 타이틀 주말 색상 처리
    const dayColor = dayName => {
      if (dayName === '일요일') return 'sun';
      else if (dayName === '토요일') return 'sat';
    };

    // 달력 날짜 주말 색상 처리
    const weekendColor = dayIdx => {
      if (dayIdx === 0) return 'sun';
      else if (dayIdx === 6) return 'sat';
    };
    return {
      weekNames,
      dates,
      today,
      year,
      month,
      currentYear,
      currentMonth,
      lastMonthStart,
      nextMonthStart,
      calendarData,
      dayColor,
      weekendColor,
      // currentDay,
    };
  },
  mounted() {
    this.calendarData();
  },
};
</script>

<style lang="postcss" scoped>
@import '@/style/admin/components/CalendarView.css';
</style>
