<template>
  <div>
    <b-card class="border-05 border-0 shadow mt-4" no-body>
      <b-card-body class="p-4">
        <b-card-sub-title
          sub-title-text-variant="primary"
          class="font-weight-bold mb-3"
        >
          <b-img src="/icons/monthly-payment.svg"></b-img> Home Equity Gain
        </b-card-sub-title>
        <div class="text-center">
          <b-img src="/icons/slider.svg"></b-img>
        </div>
        <div
          class="d-flex justify-content-center"
          style="align-items: self-end"
        >
          <p class="text-light-gray">*Choose Loan Terms</p>
          <b-dropdown variant="outline-danger" text="5 years" class="m-2">
            <b-dropdown-item href="#">5 years</b-dropdown-item>
            <b-dropdown-item href="#">10 years</b-dropdown-item>
            <b-dropdown-item href="#">30 years</b-dropdown-item>
          </b-dropdown>
        </div>
      </b-card-body>
    </b-card>
  </div>
</template>
