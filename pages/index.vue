<template>
    <div class="main-container">
        <Navbar />
        <b-container class="bg-img ml-3" style="margin: 4rem" fluid>
            <b-row class="p-6">
                <b-col md="7" class="pr-0">
                    <div class="w-100">
                        <b-img src="/images/office.png" fluid-grow block />
                    </div>
                </b-col>
                <b-col md="5" class="pl-0 align-self-end">
                    <div>
                        <div class="bg-blur-light">
                            <b-img
                                class="mt-3 ml-3"
                                src="/images/logo-customizer.svg"
                            />
                        </div>
                        <b-row class="px-5">
                            <b-col
                                cols="12"
                                class="mb-4"
                                style="margin-top: 3.6rem"
                            >
                                <h2
                                    class="mb-4 text-white"
                                    style="
                                        font-size: 2.5rem;
                                        letter-spacing: 2px;
                                        font-weight: 300;
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
                        <b-row md="12" class="px-5 mt-1">
                            <b-col cols="12">
                                <b-row>
                                    <b-col cols="4" class="d-inline-block">
                                        <b-img
                                            fluid-grow
                                            block
                                            src="/images/adu.png"
                                            class="img-fluid"
                                        />
                                    </b-col>
                                    <b-col cols="4" class="d-inline-block">
                                        <b-img
                                            fluid-grow
                                            block
                                            src="/images/bathroom.png"
                                            class="img-fluid"
                                        />
                                    </b-col>
                                    <b-col cols="4" class="d-inline-block">
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
                        <div class="px-5 p-0 m-0 w-100">
                            <b-col
                                class="divider"
                                style="margin-top: 2.125rem !important"
                            ></b-col>
                        </div>
                        <b-row
                            class="mt-4 px-5 text-right"
                            style="margin-bottom: 8rem"
                        >
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
                        <b-row class="text-end px-5 mt-5">
                            <b-col cols="12" class="self-align-end copyright">
                                <span style="font-size: 13px; color: #b591f9">
                                    MMT™ | Multitaskr © 2022
                                    <b-img src="/images/logo-waves.png" />
                                </span>
                            </b-col>
                        </b-row>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";

export default {
    components: {
        Navbar,
    },
    methods: {
        redirect() {
            this.$router.push("/calculator");
        },
    },
};
</script>
<style scoped>
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
}

.bg-blur-light:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 300px;
    height: 70px;
    background: linear-gradient(279.22deg, #ffffff 6.34%, #f7f7f7 84.78%),
        linear-gradient(0deg, #ebb4ff, #f1d4ff);
    background-blend-mode: soft-light, screen, normal;
    mix-blend-mode: hard-light;
    opacity: 0.2;
    box-shadow: -12.5392px 36.9576px 31.6779px rgba(0, 0, 0, 0.5);
    border-radius: 5.27966px;
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
    position: absolute;
    top: 19%;
    left: 18%;
    width: 69%;
    height: 90%;
    border: 4px solid #ffffff;
}
button:focus {
    box-shadow: none;
}
</style>
