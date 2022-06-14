<template>
  <div class="main-container">
    <div class="content-container">
      <b-img
        src="/images/bg-kitchen.png"
        class="vh-100 position-absolute"
        fluid-grow
      ></b-img>

      <div class="calculator-card-container">
        <div class="bg-mask"></div>
        <div class="calculator-card-group">
          <monthly-payment></monthly-payment>

          <equity-gain></equity-gain>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MonthlyPayment from "~/components/cards/MonthlyPayment.vue";
import EquityGain from "~/components/cards/EquityGain.vue";
import PriceRange from "~/components/cards/PriceRange.vue";

export default {
  layout: "main",

  components: {
    MonthlyPayment,
    EquityGain,
    PriceRange,
  },
};
</script>

<style lang="scss">
.custom-card-shadow {
  box-shadow: 0px 3.20329px 12.8132px rgba(0, 0, 0, 0.15);
}

.border-radius-05 {
  border-radius: 0.5rem;
}

.main-container {
  width: 100%;
  display: flex;
}

.content-container {
  position: relative;
  width: 100%;
  display: flex;
  flex: 1 1 0;
  flex-direction: column;
}

.main-navbar {
  position: relative;
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  padding: 0;
  border: 1px solid rgba(#ccd2dd, 0.16);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.6) 0%,
    rgba(255, 255, 255, 0.1) 100.24%
  );
  backdrop-filter: blur(42px);

  .nav-logo {
    padding: 17px 12px;
  }

  .nav-item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 64px;
    height: 64px;
  }
}

.calculator-card-container {
  position: relative;
  margin-top: auto;

  .bg-mask {
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg, #ffffff, #ffffff),
      linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0.1) 100.24%);
    mix-blend-mode: lighten;
    opacity: 0.9;
    backdrop-filter: blur(190.076px);
  }

  .calculator-card-group {
    display: flex;
    padding: 24px;
  }
}
</style>
