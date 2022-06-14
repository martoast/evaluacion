<template>
    <b-navbar class="main-navbar">
        <div class="nav-logo">
            <b-avatar src="/images/multitaskr-avatar.png"></b-avatar>
        </div>

        <b-navbar-nav class="flex-column">
            <b-nav-item>
                <b-img src="/icons/house-door-fill.svg"></b-img>
            </b-nav-item>
            <b-nav-item>
                <b-img src="/icons/layers-half.svg"></b-img>
            </b-nav-item>
            <b-nav-item>
                <b-img src="/icons/calculator-fill.svg"></b-img>
            </b-nav-item>
            <b-nav-item>
                <b-img src="/icons/calendar2-date-fill.svg"></b-img>
            </b-nav-item>
            <b-nav-item>
                <b-img src="/icons/info-circle-fill.svg"></b-img>
            </b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="flex-column">
            <b-nav-item>
                <b-img src="/icons/bell-fill.svg"></b-img>
            </b-nav-item>
            <b-nav-item>
                <b-avatar src="/images/homeowner.png"></b-avatar>
            </b-nav-item>
        </b-navbar-nav>
    </b-navbar>
</template>

<style lang="scss">
.main-navbar {
    position: sticky;
    display: inline-flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
    padding: 0;
    border: 1px solid rgba(#ccd2dd, 0.4);
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
</style>
