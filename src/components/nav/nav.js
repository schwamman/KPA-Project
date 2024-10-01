import MobileMenu from "./components/mobile-menu/mobile-menu.vue";
import NavLink from "./components/nav-link/nav-link.vue";
import FeaturesMenu from "./components/features-menu/features-menu.vue";
import AboutMenu from "./components/about-menu/about-menu.vue";
import LoginButton from "./components/login-button/login-button.vue";

export default {
  data () {
    return {
      fixedIn: false,
      fixedOut:false,
      showMobileMenu: false,
    };
  },
  mounted () {
    window.addEventListener("scroll", this.onScroll, false);
    this.onScroll();
  },
  beforeDestroy(){
    window.removeEventListener("scroll", this.onScroll);
  },
  computed: {
    fixed () {
      return this.fixedIn || this.fixedOut;
    }
  },
  methods: {
    onScroll (e) {
      if (window.scrollY <= 0) {
        this.fixedIn = false;
        this.fixedOut = false;
      }

      var isFixed = window.scrollY > 400;
      if (isFixed === this.fixedIn) return;

      this.fixedOut = !isFixed;
      this.fixedIn = isFixed;
      clearTimeout(this.timeout);
      if (this.fixedOut) {
        this.timeout = setTimeout(() => this.fixedOut = false, 420);
      }
    }
  },
  components: {
    'mobile-menu': MobileMenu,
    'nav-link': NavLink,
    FeaturesMenu: FeaturesMenu,
    AboutMenu: AboutMenu,
    LoginButton: LoginButton,
  }
}
