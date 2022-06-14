<template>
  <div class="kitchen">
    <div class="container-fluid">
      <div class="block-container block-container--1">
        <div class="block-container block-container--2">
          <div class="block-container block-container--3">
            <div class="block">
              <div class="block__right">
                <div>
                  <img
                    class="logo-customizer"
                    src="/images/kitchen/logo-customizer.svg"
                    alt="logo customizer image"
                  />

                  <h1>
                    <span class="d-md-block">Customize</span> your
                    <strong>Kitchen</strong>
                  </h1>

                  <img
                    class="kitchen-image"
                    src="/images/kitchen/kitchen.svg"
                    alt="Kitchen image"
                  />

                  <img
                    class="line"
                    src="/images/kitchen/line.svg"
                    alt="line image"
                  />

                  <div class="links">
                    <a class="text-white text-decoration-none" href="#">Back</a>
                    <a class="text-white text-decoration-none" href="#"
                      >Customize
                      <img
                        src="/images/kitchen/arrow-bottom-right-thick.svg"
                        alt="arrow icon"
                    /></a>
                  </div>
                </div>
              </div>
              <div class="block__left">
                <kitchens-grid></kitchens-grid>
              </div>
            </div>
          </div>
        </div>
        <footer></footer>
      </div>
    </div>
  </div>
</template>

<script>
import KitchensGrid from "@/components/kitchen/KitchensGrid.vue";

export default {
  components: {
    KitchensGrid,
  },

  mounted() {
    const gsap = this.$gsap;
    const els = ".block__right > div > *";

    gsap.set(els, {
      opacity: 0,
      x: "30%",
    });
    gsap.to(els, { opacity: 1, stagger: 0.1, x: "0" });
  },
};
</script>

<style lang="scss" scoped>
.kitchen {
  color: #fff;
  font-family: "Poppins";
  letter-spacing: 0.02em;

  .logo-customizer,
  &-image,
  .line {
    display: block;
    max-width: 100%;
  }

  .logo-customizer {
    margin-bottom: 3.5625rem;
  }

  h1 {
    font-weight: 400;
    line-height: 3.3125rem;

    strong {
      font-weight: 600;
    }
  }

  &-image {
    margin: 3.5625rem 0;
  }

  .line {
    margin-bottom: 1.625rem;
  }

  .links {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 20rem;
  }

  .block {
    @media screen and (min-width: 76rem) {
      border: 0.375rem solid #ffffff;
      border-radius: 0.25rem;

      display: flex;
    }

    &-container {
      &--1 {
        background-image: url(/images/purple-glass.png);
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 0.5rem;
        margin: 0 auto;

        max-width: 76rem;

        @media screen and (min-width: 76rem) {
          padding: 4rem;
        }
      }

      &--2 {
        @media screen and (min-width: 76rem) {
          background-image: url(/images/kitchen/hero.svg);
          background-repeat: no-repeat;
          background-size: calc(50% + 2rem) 100%;
        }
      }

      &--3 {
        @media screen and (min-width: 76rem) {
          padding: 4rem 0 4rem 4rem;
        }
      }
    }

    &__right,
    &__left {
      @media screen and (min-width: 76rem) {
        width: 50%;
      }
    }

    &__right {
      font-weight: 600;
      font-size: 1.1765rem;
      line-height: 133%;
      margin: 1rem 0;
      padding: 1rem;

      @media screen and (min-width: 76rem) {
        display: flex;
        align-items: center;
        order: 2;

        padding: 0 6.25rem;
      }
    }

    &__left {
      background-color: #fff;

      @media screen and (min-width: 76rem) {
        order: 1;
        overflow: hidden;
      }
    }
  }
}
</style>
