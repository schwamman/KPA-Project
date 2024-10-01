
import Logo from "./logo.vue";
import { times, sample } from "lodash";
import logos from "../logos";
const allSrcs = logos.map(l => l.src);

var srcsForIteration = function(iteration){
  var numberToShow = 9;
  var offset = iteration * numberToShow;
  return times(numberToShow, i => allSrcs[(i+offset)%allSrcs.length]);
};

export default {
  data () {
    return {
      visible: true,
      iteration: 0,
      srcs: srcsForIteration(0)
    };
  },
  mounted () {
    setTimeout(() => {
      this.visible = true;
      this.interval = setInterval(this.swap, 10000);
    }, 1000);
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
  methods: {
    swap () {
      this.iteration += 1;
      var newSrcs = srcsForIteration(this.iteration);
      newSrcs.forEach((s, i) => {
        setTimeout(() => {
          this.srcs.splice(i, 1, newSrcs[i]);
        }, 100*i);
      });
    }
  },
  components:{
    logo: Logo
  }
}
