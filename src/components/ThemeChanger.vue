<!--
 * Welcome to Clovuer
 * The comments in each files will guide you through your very cool journey
 * discovering what Vue can do.
 -->
<template>
    <div class="theme-changer">
        <!--
         * v-on is used to listen to a certain event. In this case, button clicks
         * v-on then emit `changeLocale()` method to inject locale into prefered lang.
        -->
        <li class="nav-item">
            <input  style="display:none;" type="checkbox" id='theme-switch' class='theme-switch' v-model="darkMode"/>
            <label for='theme-switch' class="nav-link mb-0">
                        <span v-if="darkMode === true">
                            <i class="far fa-moon fa-lg" style="color:#ffffff !important;"></i>
                        </span>
                <span v-else>
                            <i class="fas fa-sun fa-lg" style="color:#000000 !important;"></i>
                        </span>
            </label>
        </li>

    </div>
</template>

<script lang="js">
    import Vue from "vue"
    import {Component} from "vue-property-decorator";
    @Component({
        name: "ThemeChanger",
        data() {
            return {
             darkMode: false,
            }
        },
        mounted() {
            const htmlElement = document.documentElement;
            const theme = localStorage.getItem("theme");
            if (theme === 'dark') {
                htmlElement.setAttribute('theme', 'dark');
                this.darkMode = true;
            } else {
                htmlElement.setAttribute('theme', 'light');
                this.darkMode = false;
            }
        },
        watch: {
            darkMode: function () {
                const htmlElement = document.documentElement;
                if (this.darkMode) {
                    localStorage.setItem("theme", 'dark');
                    htmlElement.setAttribute('theme', 'dark');
                } else {
                    localStorage.setItem("theme", 'light');
                    htmlElement.setAttribute('theme', 'light');
                }
            }
        }
    })
    export default class ThemeChanger extends Vue {
    }
</script>
