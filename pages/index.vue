<template>
    <div class="main-container w-100 p-6 pl-4">
        <div class="content-container bg-img" style="padding: 128px">
            <b-row class="position-relative square" no-gutters>
                <b-col cols="7" class="pr-0">
                    <div class="w-100 h-100 position-relative">
                        <b-img
                            src="/images/office.png"
                            class="position-absolute"
                            style="
                                margin-top: -64px;
                                margin-left: -64px;
                                height: calc(100% + 128px);
                                width: calc(100% + 64px);
                                height: calc(100% + 128px);
                            "
                        />
                    </div>
                </b-col>
                <b-col cols="5" class="pl-0 align-self-end">
                    <div style="margin-top: 64px">
                        <b-img src="/images/logo-customizer-with-bg.svg" />
                    </div>

                    <div class="pt-0 p-6">
                        <b-row no-gutters>
                            <b-col
                                cols="12"
                                class="mb-4"
                                style="margin-top: 3rem"
                            >
                                <h2
                                    class="mb-4 text-white"
                                    style="
                                        font-size: 2.5rem;
                                        letter-spacing: 2px;
                                        font-weight: 400;
                                        max-width: 80%;
                                        line-height: 1.1;
                                    "
                                >
                                    Customize your
                                    <strong style="font-weight: bold"
                                        >dream</strong
                                    >
                                    space
                                </h2>
                            </b-col>
                        </b-row>
                        <b-row md="12" no-gutters>
                            <b-col cols="12">
                                <b-row class="grid-catalog">
                                    <b-col
                                        cols="4"
                                        class="d-inline-block grid-catalog-col"
                                    >
                                        <b-img
                                            fluid-grow
                                            block
                                            src="/images/adu.png"
                                            class="img-fluid"
                                        />
                                    </b-col>
                                    <b-col
                                        cols="4"
                                        class="d-inline-block grid-catalog-col"
                                    >
                                        <b-img
                                            fluid-grow
                                            block
                                            src="/images/bathroom.png"
                                            class="img-fluid"
                                        />
                                    </b-col>
                                    <b-col
                                        cols="4"
                                        class="d-inline-block grid-catalog-col"
                                    >
                                        <b-img
                                            fluid-grow
                                            block
                                            src="/images/kitchen.png"
                                            class="img-fluid"
                                        />
                                    </b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                        <div class="p-0 m-0 w-100">
                            <b-col
                                class="divider"
                                style="margin-top: 2.125rem !important"
                            ></b-col>
                        </div>
                        <b-row class="mt-4 text-right" no-gutters>
                            <b-col>
                                <button
                                    class="btn text-white transparent p-0"
                                    style="letter-spacing: 2px; font-size: 18px"
                                    @click="redirect"
                                >
                                    Explore
                                    <svg
                                        width="14"
                                        height="14"
                                        viewBox="0 0 14 14"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M9.88994 7.05994V2.10994H13.3099V13.3099H2.10994V9.88994H7.05994L0.689941 3.49994L3.49994 0.689941L9.88994 7.05994Z"
                                            fill="white"
                                        />
                                    </svg>
                                </button>
                            </b-col>
                        </b-row>
                    </div>
                </b-col>
            </b-row>

            <b-img src="/images/mmt-multitaskr.svg" class="mmt-logo" />
        </div>
    </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";

export default {
    layout: "main",

    methods: {
        redirect() {
            this.$router.push("/calculator");
        },
    },
};
</script>
<style lang="scss" scoped>
.main-container {
    display: flex;
}

.content-container {
    position: relative;
    width: 100%;
    display: flex;
    flex: 1 1 0;
    flex-direction: column;
}

.p-6 {
    padding: 4rem;
}
.bg-img {
    background: url("/images/purple-glass.png");
    background-repeat: no-repeat;
    background-size: cover;
}

.divider {
    background: rgb(255, 255, 255);
    background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 1) 60%,
        rgba(88, 255, 157, 1) 60%
    );
    height: 2px;
}

.copyright {
    position: absolute;
    right: 0;
    text-align: right;
    bottom: -33px;
}
.square:after {
    content: "";
    border: 6px solid #ffffff;
    position: absolute;
    width: 100%;
    height: 100%;
}
button:focus {
    box-shadow: none;
}

.grid-catalog {
    margin-left: -7.5px;
    margin-right: -7.5px;

    .grid-catalog-col {
        padding-right: 7.5px;
        padding-left: 7.5px;
    }
}

.mmt-logo {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 24px 48px;
}
</style>
