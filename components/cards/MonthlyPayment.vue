<template>
  <b-card
    class="border-radius-05 border-0 custom-card-shadow h-auto"
    style="margin-right: 24px"
    no-body
  >
    <b-card-body style="padding: 20px">
      <b-card-sub-title
        sub-title-text-variant="primary"
        class="font-weight-600 font-size-14"
        style="margin-bottom: 24px"
      >
        <b-img src="/icons/monthly-payment.svg"></b-img> Monthly Payment Range*
      </b-card-sub-title>

      <div class="text-center" style="margin-bottom: 20px">
        <b-img src="/icons/slider.svg"></b-img>
      </div>

      <div class="d-flex align-items-center">
        <span class="text-light-gray font-size-10">*Choose Loan Terms</span>

        <b-dropdown
          variant="link"
          class="custom-dropdown ml-3"
          menu-class="w-100"
          toggle-class="d-flex align-items-center justify-content-between text-left font-size-14"
          block
          no-caret
          style="flex: 1 1 0"
        >
          <template #button-content>
            <span>5 years</span>
            <b-icon
              icon="chevron-down"
              class="custom-caret font-size-14 text-light-gray"
            ></b-icon>
          </template>

          <b-dropdown-item href="#">5 years</b-dropdown-item>
          <b-dropdown-item href="#">10 years</b-dropdown-item>
          <b-dropdown-item href="#">30 years</b-dropdown-item>
        </b-dropdown>
      </div>
    </b-card-body>
  </b-card>
</template>

<style lang="scss">
.custom-dropdown {
  .dropdown-toggle {
    padding-block: 8px;
    color: #222222;
    border: 1px solid #ccd2dd;
    text-decoration: none;
  }

  &.show .custom-caret {
    transform: rotate(180deg);
  }
}
</style>
