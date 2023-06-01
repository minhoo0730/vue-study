<template>
  <div class="option-components">
    <div
      :class="`menu-option menu-option_${itemsIdx}`"
      v-for="(optionItems, itemsIdx) in 1"
      :key="optionItems"
    >
    <!-- <div
      class="flex flex-col items-start mb-16 menu-option"
      :class="`menu-option${itemsIdx}`"
      v-for="(optionItems, itemsIdx) in 1"
      :key="optionItems"
    > -->
      <h2 class="option-title">옵션타이틀</h2>
      <p>옵션 디테일 코멘트</p>
      <!-- <p class="text-[1.4rem] text-gray-500">옵션 디테일 코멘트</p> -->
      <div class="option-list">
        <div
          class="option-idx"
          v-for="(optionList, idx) in 3"
          :key="optionList"
        >
          <div>
          <!-- <div class="flex items-center"> -->
            <input
              :id="`push-everything${idx + 1}`"
              name="push-notifications"
              type="radio"
            />
            <label
              :for="`push-everything${idx + 1}`"
              >옵션이름</label
            >
            <!-- <label
              :for="`push-everything${idx + 1}`"
              class="block font-medium leading-16 text-gray-900 pl-6"
              >옵션이름</label
            > -->
          </div>
          <p class="flex"><b class="mr-4">+14,000</b>원</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.option-components{
  padding:16px;
  border-top:1px solid #eee;
  .menu-option {
    .option-title{
      font-weight:700;
      font-size:2.0rem;
    }
    > p{
      font-size:1.6rem; margin-top:8px; color:#616161;
    }
  }
  .option-list {
    width:100%; margin-top:8px;
    > div {
      width:100%; height:40px; display:flex; align-items:center; justify-content: space-between;
      > div{
        display:flex; align-items: center;
        input[type='radio']:checked + label {
          color:#6A1B9A;
        }
        label{font-size:1.6rem; margin-left:8px;}
        input[type='radio'] {
          border:1px solid #ddd;
          width:16px; height:16px; color:#6A1B9A; border-radius:50px;
          // border-1 h-16 w-16 border-gray-300 text-indigo-600 rounded-full;
          &:checked {
            background:#6A1B9A; position:relative;
            &:before {
              content: '';
              position:absolute;
              background:white;
              width:6px;
              height:6px;
              top:4px;
              left:4px;
              border-radius:50px;
            }
          }
        }
      }
    }
  }
}
// .option-components {
//   @apply p-16;
//   .menu-option {
//     .option-title {
//       @apply font-black;
//     }
//     .option-list {
//       @apply w-full mt-8;
//       > div {
//         @apply h-40 flex items-center w-full justify-between;
//         input[type='radio']:checked + label {
//           @apply text-indigo-600;
//         }
//         input[type='radio'] {
//           @apply border-1 h-16 w-16 border-gray-300 text-indigo-600 rounded-full;
//           &:checked {
//             @apply bg-indigo-600 relative;
//             &:before {
//               content: '';
//               @apply absolute bg-white w-6 h-6 top-4 left-4 rounded-full;
//             }
//           }
//         }
//       }
//     }
//     &:last-child {
//       @apply mb-0;
//     }
//   }
// }
</style>
