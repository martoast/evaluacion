<template>
  <b-card
    class="border-radius-05 border-0 custom-card-shadow h-auto"
    style="margin-right: 24px"
    no-body
  >
    <b-card-body class="d-flex flex-column" style="padding: 20px; flex: 1 1 0">
      <b-card-sub-title
        sub-title-text-variant="primary"
        class="font-weight-600 font-size-14"
        style="margin-bottom: 24px"
      >
        <b-img src="/icons/home-equity.svg"></b-img> Home Equity Gain
      </b-card-sub-title>

      <div class="h-100 d-flex flex-column justify-content-between">
        <b-card-text class="text-muted font-size-14">
          Add your Property Value to discover your Home Equity Gain.
        </b-card-text>

        <b-button
          style="border-color: rgba(181, 145, 249, 1); background: transparent"
          border-variant="secondary"
          class="font-weight-600 text-primary"
          @click="onShowOverlay()"
        >
          Add Property Value
        </b-button>
      </div>
    </b-card-body>
  </b-card>
</template>

<script>
export default {
  data() {
    return {
      opacity: 0.9,
      value: null,
      value2: null,
      show_overlay: true,
    };
  },
  methods: {
    onShowOverlay() {
      this.show_overlay = false;
    },
  },
};
</script>

<style lang="scss">
.btn {
  padding: 8px 12px;
}
</style>
