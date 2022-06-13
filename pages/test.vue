<template>
  <div>
    <monthly-payment></monthly-payment>
    <equity-gain></equity-gain>
    <price-range></price-range>
  </div>
</template>
<script>
import MonthlyPayment from "~/components/cards/MonthlyPayment.vue";
import EquityGain from "~/components/cards/EquityGain.vue";
import PriceRange from "~/components/cards/PriceRange.vue";
export default {
  components: {
    MonthlyPayment,
    EquityGain,
    PriceRange,
  },
};
</script>
