<script setup lang="ts">
import { Icon } from '@iconify/vue';
</script>
<template>
    <div class="profiletimeline position-relative">
        <div class="sl-item mt-2 mb-3">
            <div class="sl-left float-left me-3">
                <img src="/images/users/user-2.jpg" height="56" alt="user" class="rounded-circle" />
            </div>
            <div class="sl-right w-100 ps-3">
                <div>
                    <div class="d-flex justify-space-between align-center pt-1">
                        <div class="d-md-flex align-center">
                            <h3 class="text-h6 cursor-pointer hover-primary lh-normal">John Doe</h3>
                            <div class="sl-date ms-3 text-subtitle-1 textSecondary">5 minutes ago</div>
                        </div>
                        <v-btn density="comfortable" flat icon size="30">
                            <Icon icon="solar:menu-dots-line-duotone" height="22" />
                        </v-btn>
                    </div>

                    <p class="textSecondary text-15">assign a new task <span class="text-primary cursor-pointer">Design weblayout</span></p>
                    <div class="v-row mt-1">
                        <div class="v-col-lg-3 v-col-md-6 mb-3">
                            <img src="/images/blog/blog-img1.jpg" class="rounded-md w-100" alt="user" />
                        </div>
                        <div class="v-col-lg-3 v-col-md-6 mb-3">
                            <img src="/images/blog/blog-img2.jpg" class="rounded-md w-100" alt="user" />
                        </div>
                        <div class="v-col-lg-3 v-col-md-6 mb-3">
                            <img src="/images/blog/blog-img3.jpg" class="rounded-md w-100" alt="user" />
                        </div>
                        <div class="v-col-lg-3 v-col-md-6 mb-3">
                            <img src="/images/blog/blog-img1.jpg" class="rounded-md w-100" alt="user" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="sl-item my-4">
            <div class="sl-left float-left me-3">
                <img src="/images/users/user-3.jpg" height="56" alt="user" class="rounded-circle" />
            </div>
            <div class="sl-right w-100 ps-3">
                <div class="pt-1">
                    <div class="d-flex justify-space-between align-center pt-1">
                        <div class="d-md-flex align-center">
                            <h3 class="text-h6 cursor-pointer hover-primary lh-normal">Maria Smith</h3>
                            <div class="sl-date ms-3 text-subtitle-1 textSecondary">5 minutes ago</div>
                        </div>
                        <v-btn density="comfortable" flat icon size="30">
                            <Icon icon="solar:menu-dots-line-duotone" height="22" />
                        </v-btn>
                    </div>
                    <div class="mt-3 bg-lightprimary text-15 pa-5 rounded-md">
                        <p class="textSecondary">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante
                            dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="sl-item my-4 pt-4">
            <div class="sl-left float-left me-3">
                <img src="/images/users/user-2.jpg" height="56" alt="user" class="rounded-circle" />
            </div>
            <div class="sl-right w-100 ps-3">
                <div class="pt-1">
                    <div class="d-flex justify-space-between align-center pt-1">
                        <div class="d-md-flex align-center">
                            <h3 class="text-h6 cursor-pointer hover-primary lh-normal">James Smith</h3>
                            <div class="sl-date ms-3 text-subtitle-1 textSecondary">8 minutes ago</div>
                        </div>
                        <v-btn density="comfortable" flat icon size="30">
                            <Icon icon="solar:menu-dots-line-duotone" height="22" />
                        </v-btn>
                    </div>
                    <v-row class="mt-1">
                        <v-col cols="12" lg="5">
                            <div class="border rounded-md px-7 py-5">
                                <div class="d-flex ga-3 align-center">
                                    <img src="/images/icons/icon-zip.svg" height="40" alt="user" />
                                    <div>
                                        <h5 class="text-16 font-weight-medium">Payments.zip</h5>
                                        <p class="text-14 textSecondary">150kb</p>
                                    </div>
                                </div>
                            </div>
                        </v-col>
                        <v-col cols="12" lg="5">
                            <div class="border rounded-md px-7 py-5">
                                <div class="d-flex ga-3 align-center">
                                    <img src="/images/icons/icon-figma.svg" height="40" alt="user" />
                                    <div>
                                        <h5 class="text-16 font-weight-medium">Homepage.fig</h5>
                                        <p class="text-14 textSecondary">170kb</p>
                                    </div>
                                </div>
                            </div>
                        </v-col>
                        <v-col cols="12" lg="2">
                            <div
                                class="d-flex ga-3 align-center justify-center bg-lightprimary h-100 rounded-md text-h5 text-textSecondary"
                            >
                                +2
                            </div>
                        </v-col>
                    </v-row>
                    <p class="text-15 textSecondary mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
.profiletimeline {
    position: relative;
    padding-left: 40px;
    margin: 10px 10px 0 30px;
    border-left: 1px solid rgb(var(--v-theme-inputBorder));
    .sl-item {
        margin-top: 8px;
        margin-bottom: 30px;
        display: flex;
    }
    .sl-left {
        margin-left: -68px;
        z-index: 1;
        margin-right: 15px;
    }
}
</style>
