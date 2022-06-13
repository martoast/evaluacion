<template>
  <div>
    <div>
      <b-card class="border-05 border-0 shadow mt-4" no-body>
        <b-card-body class="p-4">
          <div class="position-relative">
            <!-- <b-img
              src="/images/overlay.png"
              fluid-grow
              style="top: 0; left: 0; position: absolute; z-index: -1"
            ></b-img> -->
          </div>
          <b-card-sub-title
            sub-title-text-variant="primary"
            class="font-weight-bold mb-3"
          >
            <b-img src="/icons/monthly-payment.svg"></b-img> Home Equity Gain
          </b-card-sub-title>

          <b-card-text class="text-gray mt-3 mb-4">
            Add your Property Value to discover your Home Equity Gain.
          </b-card-text>

          <b-button
            style="
              border-color: rgba(181, 145, 249, 1);
              background: transparent;
            "
            border-variant="secondary"
            class="font-weight-600 text-primary"
            @click="onShowOverlay()"
          >
            Add Property Value
          </b-button>
        </b-card-body>
      </b-card>
    </div>
  </div>
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
