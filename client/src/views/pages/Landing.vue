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

// const logoUrl = computed(() => {
//     return `layout/images/${layoutConfig.darkTheme.value ? 'logo-white' : 'logo-dark'}.svg`;
// });
</script>

<template>
    <div class="surface-0 flex justify-content-center">
        <div id="home" class="landing-wrapper overflow-hidden">
            <div class="py-4 px-4 mx-0 md:mx-6 lg:mx-8 lg:px-8 flex align-items-center justify-content-between relative lg:static mb-3">
                <a class="flex align-items-center" href="#">
                    <img src="/images/logo/Zyoosh-Logo-Shark.png" alt="Zyoosh Logo" height="50" class="mr-0 lg:mr-2" />
                    <img src="/images/logo/Zyoosh-Logo-Word.png" alt="Name" height="40" class="mr-0 lg:mr-2" />
                </a>
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
                            <a @click="smoothScroll('#achievements')" class="flex m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3 p-ripple" v-ripple>
                                <span>Achievements</span>
                            </a>
                        </li>
                        <li>
                            <a @click="smoothScroll('#programs')" class="flex m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3 p-ripple" v-ripple>
                                <span>Programs</span>
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

            <!-- style="background: linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), radial-gradient(77.36% 256.97% at 77.36% 57.52%, rgb(238, 239, 175) 0%, rgb(195, 227, 250) 100%); clip-path: ellipse(150% 87% at 93% 13%)" -->
            <div
                id="hero"
                class="flex flex-column pt-4 px-4 lg:px-8 overflow-hidden"
                style="background-image: url('/images/landing/zyoosh-landing.jpg'); background-size: cover; background-repeat: no-repeat;clip-path: ellipse(150% 87% at 93% 13%); height: 500px"
            >
                <div class="mx-4 md:mx-8 mt-0 md:mt-4">
                    <h1 class="text-6xl font-bold text-gray-200 line-height-2"><span class="font-light block">Welcome</span>Zyoosh community</h1>
                    <p class="font-normal text-2xl line-height-3 md:mt-3 text-gray-200">Here to achieve your goals AND most importantly to SWIM</p>
                    <Button label="Sign Up" class="p-button-rounded text-xl border-none mt-5 bg-blue-500 font-normal text-white line-height-3 px-4"></Button>
                </div>
                <!-- <div class="flex justify-content-center md:justify-content-end">
                    <img src="/images/landing/zyoosh-landing.png" alt="Hero Image" class="w-9 md:w-auto" />
                </div> -->
            </div>

            <div id="achievements" class="py-4 px-4 lg:px-8 mx-0 my-6 lg:mx-8">
                <div class="text-center">
                    <h2 class="text-900 font-normal mb-2">Zyoosh Achievements</h2>
                    <span class="text-600 text-2xl">Achieving greatness, one stroke at a time</span>
                </div>

                <div class="grid mt-8 pb-2 md:pb-8">
                    <div class="flex justify-content-center col-12 lg:col-6 bg-purple-100 p-0 flex-order-1 lg:flex-order-0" style="border-radius: 8px">
                        <img src="/images/landing/sample-david.jpg" class="w-11" alt="sample david" />
                    </div>

                    <div class="col-12 lg:col-6 my-auto flex flex-column lg:align-items-end text-center lg:text-right">
                        <div class="flex align-items-center justify-content-center bg-purple-200 align-self-center lg:align-self-end" style="width: 4.2rem; height: 4.2rem; border-radius: 10px">
                            <i class="pi pi-fw pi-megaphone text-5xl text-purple-700"></i>
                        </div>
                        <h2 class="line-height-1 text-900 text-4xl font-normal">From Underdog to Champion</h2>
                        <span class="text-700 text-2xl line-height-3 ml-0 md:ml-2" style="max-width: 650px"
                            >Dave, once an overlooked swimmer, defies the odds through relentless dedication to secure a national championship, proving that unwavering commitment can lead to greatness.</span
                        >
                    </div>
                </div>

                <div class="grid my-8 pt-2 md:pt-8">
                    <div class="col-12 lg:col-6 my-auto flex flex-column text-center lg:text-left lg:align-items-start">
                        <div class="flex align-items-center justify-content-center bg-yellow-200 align-self-center lg:align-self-start" style="width: 4.2rem; height: 4.2rem; border-radius: 10px">
                            <i class="pi pi-fw pi-megaphone text-5xl text-yellow-700"></i>
                        </div>
                        <h2 class="line-height-1 text-900 text-4xl font-normal">Relay Team's Triumph</h2>
                        <span class="text-700 text-2xl line-height-3 mr-0 md:mr-2" style="max-width: 650px"
                            >A group of diverse and spirited young swimmers joins forces as a relay team, exemplifying the incredible power of teamwork as they clinch their first championship victory, a testament to friendship and shared success in the pool.</span
                        >
                    </div>

                    <div class="flex justify-content-center flex-order-1 sm:flex-order-2 col-12 lg:col-6 bg-yellow-100 p-0" style="border-radius: 8px">
                        <img src="/images/landing/sample-relay.png" class="w-11" alt="mockup" />
                    </div>
                </div>
            </div>

            <div id="programs" class="py-4 px-4 lg:px-8 my-2 md:my-4">
                <div class="text-center">
                    <h2 class="text-900 font-normal mb-2">Available Programs</h2>
                    <span class="text-600 text-2xl">Dive into success with our swim programs, catering to all skill levels</span>
                </div>

                <div class="grid justify-content-between mt-8 md:mt-0">
                    <div class="col-12 lg:col-4 p-0 md:p-3 mt-4 md:mt-0">
                        <div class="p-3 flex flex-column border-200 programs-card cursor-pointer border-2 hover:border-primary transition-duration-300 transition-all" style="border-radius: 10px">
                            <h3 class="text-900 text-center my-5">Learn to Swim</h3>
                            <img src="/images/landing/startup.svg" class="w-10 h-10 mx-auto" alt="startup" />
                            <div class="my-5 text-center">
                                <span class="text-5xl font-bold mr-2 text-900">RM 50</span>
                                <span class="text-600">per class</span>
                                <Button label="Get a free trial" class="block mx-auto mt-4 p-button-rounded border-none ml-3 font-light line-height-2 bg-blue-500 text-white"></Button>
                            </div>
                            <Divider class="w-full bg-surface-200"></Divider>
                            <ul class="my-5 list-none p-0 flex text-900 flex-column">
                                <li class="py-2">
                                    <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                    <span class="text-xl line-height-3">Limit 6 swimmers per session</span>
                                </li>
                                <li class="py-2">
                                    <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                    <span class="text-xl line-height-3">7PM - 8PM (Except Monday)</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-12 lg:col-4 p-0 md:p-3 mt-4 md:mt-0">
                        <div class="p-3 flex flex-column border-200 programs-card cursor-pointer border-2 hover:border-primary transition-duration-300 transition-all" style="border-radius: 10px">
                            <h3 class="text-900 text-center my-5">Competitive</h3>
                            <img src="/images/landing/enterprise.svg" class="w-10 h-10 mx-auto" alt="enterprise" />
                            <div class="my-5 text-center">
                                <span class="text-5xl font-bold mr-2 text-900">RM 55</span>
                                <span class="text-600">per class</span>
                                <Button label="Apply Now" class="block mx-auto mt-4 p-button-rounded border-none ml-3 font-light line-height-2 bg-blue-500 text-white"></Button>
                            </div>
                            <Divider class="w-full bg-surface-200"></Divider>
                            <ul class="my-5 list-none p-0 flex text-900 flex-column">
                                <li class="py-2">
                                    <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                    <span class="text-xl line-height-3">Competitive training</span>
                                </li>
                                <li class="py-2">
                                    <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                    <span class="text-xl line-height-3">Attendance</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-12 lg:col-4 p-0 md:p-3">
                        <div class="p-3 flex flex-column border-200 programs-card cursor-pointer border-2 hover:border-primary transition-duration-300 transition-all" style="border-radius: 10px">
                            <h3 class="text-900 text-center my-5">Stroke Clinic</h3>
                            <img src="/images/landing/free.svg" class="w-10 h-10 mx-auto" alt="free" />
                            <div class="my-5 text-center">
                                <span class="text-5xl font-bold mr-2 text-900">RM 50</span>
                                <span class="text-600">per class</span>
                                <Button label="Get a free trial" class="block mx-auto mt-4 p-button-rounded border-none ml-3 font-light line-height-2 bg-blue-500 text-white"></Button>
                            </div>
                            <Divider class="w-full bg-surface-200"></Divider>
                            <ul class="my-5 list-none p-0 flex text-900 flex-column">
                                <li class="py-2">
                                    <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                    <span class="text-xl line-height-3">Limit of 4 swimmers per session</span>
                                </li>
                                <li class="py-2">
                                    <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                    <span class="text-xl line-height-3">4:30 PM - 5:30 PM & 6:15 PM - 7:15 PM on Monday </span>
                                </li>
                                <li class="py-2">
                                    <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                    <span class="text-xl line-height-3">2:30 PM - 3:30 PM on weekends</span>
                                </li>


                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Divider></Divider>
            <div class="py-4 px-4 mx-0 mt-8 lg:mx-8">
                <div class="grid justify-content-between">
                    <div class="col-12 md:col-2" style="margin-top: -1.5rem">
                        <a @click="smoothScroll('#home')" class="flex flex-wrap align-items-center justify-content-center md:justify-content-start md:mb-0 mb-3 cursor-pointer">
                            <img src="/images/logo/Zyoosh-Logo.png" alt="footer sections" width="100" height="100" class="mr-2" />
                        </a>
                        <!-- <a class="flex align-items-center" href="#">
                            <img src="/images/logo/Zyoosh-Logo-Shark.png" alt="Zyoosh Logo" height="50" class="mr-0 lg:mr-2" />
                            <img src="/images/logo/Zyoosh-Logo-Word.png" alt="Name" height="40" class="mr-0 lg:mr-2" />
                        </a> -->
                    </div>

                    <div class="col-12 md:col-10 lg:col-7">
                        <div class="grid text-center md:text-left">
                            <div class="col-12 md:col-3">
                            </div>
                            <div class="col-12 md:col-3">
                                <h4 class="font-medium text-2xl line-height-3 mb-3 text-900">Club</h4>
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
