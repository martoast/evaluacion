<template>
  <b-card
    class="custom-card border-radius-05 border-0 custom-card-shadow h-auto"
    no-body
  >
    <b-card-body class="d-flex flex-column" style="padding: 20px; flex: 1">
      <b-card-sub-title
        sub-title-text-variant="primary"
        class="font-weight-600 font-size-14"
        style="margin-bottom: 24px"
      >
        <b-img src="/icons/home-equity.svg"></b-img> Net Price Range
      </b-card-sub-title>

      <div class="h-100 d-flex flex-column justify-content-between">
        <div class="text-center" style="margin-bottom: 20px">
          <b-img src="/icons/price-range.svg" fluid-grow></b-img>
        </div>

        <span class="mt-2 text-light-gray font-size-10">*USD - US Dollar</span>
      </div>
    </b-card-body>
  </b-card>
</template>
