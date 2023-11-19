<script setup>
import { useLayout } from '@/layout/composables/layout';
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// import AppConfig from '@/layout/AppConfig.vue';

const { layoutConfig } = useLayout();

const smoothScroll = (id) => {
    document.querySelector(id).scrollIntoView({
        behavior: 'smooth'
    });
};

const logoUrl = computed(() => {
    return `layout/images/${layoutConfig.darkTheme.value ? 'logo-white' : 'logo-dark'}.svg`;
});
</script>

<template>
    <div class="surface-0 flex justify-content-center">
        <div id="home" class="landing-wrapper overflow-hidden">
            <div class="py-4 px-4 mx-0 md:mx-6 lg:mx-8 lg:px-8 flex align-items-center justify-content-between relative lg:static mb-3">
                <a class="flex align-items-center" href="#"> <img :src="logoUrl" alt="Sakai Logo" height="50" class="mr-0 lg:mr-2" /><span class="text-900 font-medium text-2xl line-height-3 mr-8">Zyoosh</span> </a>
                <a class="cursor-pointer block lg:hidden text-700 p-ripple" v-ripple v-styleclass="{ selector: '@next', enterClass: 'hidden', leaveToClass: 'hidden', hideOnOutsideClick: true }">
                    <i class="pi pi-bars text-4xl"></i>
                </a>
                <div class="align-items-center surface-0 flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full left-0 px-6 lg:px-0 z-2" style="top: 120px">
                    <ul class="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row cursor-pointer">
                        <li>
                            <a @click="smoothScroll('#hero')" class="flex m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3 p-ripple" v-ripple>
                                <span>Home</span>
                            </a>
                        </li>
                        <li>
                            <router-link to="/aboutus" class="flex m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3 p-ripple" v-ripple>
                                <span>About Us</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/media" class="flex m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3 p-ripple" v-ripple>
                                <span>Media</span>
                            </router-link>
                        </li>
                    </ul>
                    <div class="flex justify-content-between lg:block border-top-1 lg:border-top-none surface-border py-3 lg:py-0 mt-3 lg:mt-0">
                        <Button label="Login" class="p-button-text p-button-rounded border-none font-light line-height-2 text-blue-500" @click="router.push('/auth/login')"></Button>
                        <Button label="Sign Up" class="p-button-rounded border-none ml-5 font-light text-white line-height-2 bg-blue-500"></Button>
                    </div>
                </div>
            </div>

            <div
                id="hero"
                class="flex flex-column pt-4 px-4 lg:px-8 overflow-hidden"
                style="background: linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), radial-gradient(77.36% 256.97% at 77.36% 57.52%, rgb(238, 239, 175) 0%, rgb(195, 227, 250) 100%); clip-path: ellipse(150% 87% at 93% 13%)"
            >
            </div>

            <div id="achievements" class="py-4 px-4 lg:px-8 mx-0 my-6 lg:mx-8">
                <div class="text-center">
                    <h2 class="text-900 font-normal mb-2">Our Coaches</h2>
                    <!-- <span class="text-600 text-2xl">Achieving greatness, one stroke at a time</span> -->
                </div>

                <div class="grid mt-8 pb-2 md:pb-8">
                    <div class="flex justify-content-center col-12 lg:col-6 bg-purple-100 p-0 flex-order-1 lg:flex-order-0" style="border-radius: 8px">
                        <img src="/images/landing/sample-david.jpg" class="w-11" alt="sample david" />
                    </div>

                    <div class="col-12 lg:col-6 my-auto flex flex-column">
                        <h2 class="ml-8 line-height-1 text-900 text-4xl font-normal">Low Zheng Yong</h2>
                        <ul class="ml-8 text-700 text-2xl line-height-3" style="max-width: 650px">
                            <li>National Swimmer</li>
                            <li>Participated in Youth Olympics 2018</li>
                            <li>Participated in World Junior Championship 2019</li>
                            <li>3x SEA Games Finalist</li>
                            <li>SUKMA Gold Medalist</li>
                            <li>Malaysia Open Swimming Gold Medalist</li>
                        </ul>
                    </div>
                </div>

                <div class="grid my-8 pb-2 md:pb-8">
                    <div class="col-12 lg:col-6 my-auto flex flex-column text-center lg:text-left lg:align-items-start">
                        <h2 class="line-height-1 text-900 text-4xl font-normal">Christy Teh</h2>
                        <ul class="text-700 text-2xl line-height-3" style="max-width: 650px">
                            <li>Selangor State Swimmer</li>
                            <li>Participated in ASEAN University Games</li>
                            <li>Participated in ASEAN School Games</li>
                            <li>Participated in SEA Age Group Championships</li>
                            <li>SUKMA Medalist</li>
                            <li>SUKIPT Medalist</li>
                            <li>MSSM Overall Champion</li>
                        </ul>
                    </div>

                    <div class="flex justify-content-center flex-order-1 sm:flex-order-2 col-12 lg:col-6 bg-yellow-100 p-0" style="border-radius: 8px">
                        <img src="/images/landing/sample-relay.png" class="w-11" alt="mockup" />
                    </div>
                </div>

                <div class="grid mt-8 pb-2 md:pb-8">
                    <div class="flex justify-content-center col-12 lg:col-6 bg-purple-100 p-0 flex-order-1 lg:flex-order-0" style="border-radius: 8px">
                        <img src="/images/landing/sample-david.jpg" class="w-11" alt="sample david" />
                    </div>

                    <div class="col-12 lg:col-6 my-auto flex flex-column">
                        <h2 class="ml-8 line-height-1 text-900 text-4xl font-normal">Terence Lim</h2>
                        <ul class="ml-8 text-700 text-2xl line-height-3" style="max-width: 650px">
                            <li>Melaka State Swimmer</li>
                            <li>MSSM Finalist</li>
                            <li>Experienced Learn to swim coach</li>
                        </ul>
                    </div>
                </div>

                <div class="grid my-8">
                    <div class="col-12 lg:col-6 my-auto flex flex-column text-center lg:text-left lg:align-items-start">
                        <h2 class="line-height-1 text-900 text-4xl font-normal">Ong Yong Qi</h2>
                        <ul class="text-700 text-2xl line-height-3" style="max-width: 650px">
                            <li>Malaysia National Swimmer</li>
                            <li>ASEAN University Games Gold Medalist</li>
                            <li>SUKMA Gold Medalist</li>
                            <li>SEA Games Finalist</li>
                            <li>Malaysia Open Gold Medalist</li>
                        </ul>
                    </div>

                    <div class="flex justify-content-center flex-order-1 sm:flex-order-2 col-12 lg:col-6 bg-yellow-100 p-0" style="border-radius: 8px">
                        <img src="/images/landing/sample-relay.png" class="w-11" alt="mockup" />
                    </div>
                </div>
            </div>




            <div class="py-4 px-4 mx-0 mt-8 lg:mx-8">
                <div class="grid justify-content-between">
                    <div class="col-12 md:col-2" style="margin-top: -1.5rem">
                        <a @click="smoothScroll('#home')" class="flex flex-wrap align-items-center justify-content-center md:justify-content-start md:mb-0 mb-3 cursor-pointer">
                            <img :src="logoUrl" alt="footer sections" width="50" height="50" class="mr-2" />
                            <h4 class="font-medium text-3xl text-900">Zyoosh</h4>
                        </a>
                    </div>

                    <div class="col-12 md:col-10 lg:col-7">
                        <div class="grid text-center md:text-left">
                            <div class="col-12 md:col-3">
                            </div>
                            <div class="col-12 md:col-3">
                                <h4 class="font-medium text-2xl line-height-3 mb-3 text-900">Company</h4>
                                <a class="line-height-3 text-xl block cursor-pointer mb-2 text-700">About Us</a>
                                <a class="line-height-3 text-xl block cursor-pointer mb-2 text-700">Careers</a>
                            </div>

                            <div class="col-12 md:col-3 mt-4 md:mt-0">
                                <h4 class="font-medium text-2xl line-height-3 mb-3 text-900">Resources</h4>
                                <a class="line-height-3 text-xl block cursor-pointer mb-2 text-700">News</a>
                                <a class="line-height-3 text-xl block cursor-pointer mb-2 text-700">FAQ</a>
                                <a class="line-height-3 text-xl block cursor-pointer text-700">Blog</a>
                            </div>

                            <div class="col-12 md:col-3 mt-4 md:mt-0">
                                <h4 class="font-medium text-2xl line-height-3 mb-3 text-900">Contact Us</h4>
                                <a class="line-height-3 text-xl block cursor-pointer mb-2 text-700" href="https://www.instagram.com/zyoosh_swimming/" target="_blank">Instagram</a>
                                <a class="line-height-3 text-xl block cursor-pointer mb-2 text-700" href="https://www.instagram.com/zyoosh_swimming/" target="_blank">Facebook</a>
                                <a href="tel:+601111664621" class="line-height-3 text-xl block cursor-pointer mb-2 text-700" v-tooltip.left="'+60 11-11664621'">WhatsApp</a>
                                <a href="mailto:zyooshmys@gmail.com" class="line-height-3 text-xl block cursor-pointer mb-2 text-700" v-tooltip.left="'zyooshmys@gmail.com'">Email</a>
                                <!-- <a class="line-height-3 text-xl block cursor-pointer mb-2 text-700">Events<img src="/images/landing/new-badge.svg" class="ml-2" /></a> -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- <AppConfig simple /> -->
</template>

<!-- <style scoped>
#hero {
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), radial-gradient(77.36% 256.97% at 77.36% 57.52%, #eeefaf 0%, #c3e3fa 100%);
    height: 700px;
    overflow: hidden;
}

@media screen and (min-width: 768px) {
    #hero {
        -webkit-clip-path: ellipse(150% 87% at 93% 13%);
        clip-path: ellipse(150% 87% at 93% 13%);
        height: 530px;
    }
}

@media screen and (min-width: 1300px) {
    #hero > img {
        position: absolute;
    }

    #hero > div > p {
        max-width: 450px;
    }
}

@media screen and (max-width: 1300px) {
    #hero {
        height: 600px;
    }

    #hero > img {
        position: static;
        transform: scale(1);
        margin-left: auto;
    }

    #hero > div {
        width: 100%;
    }

    #hero > div > p {
        width: 100%;
        max-width: 100%;
    }
}
</style> -->
