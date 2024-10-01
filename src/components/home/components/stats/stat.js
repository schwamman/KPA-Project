
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function getCurrentCount (countPerMs, endTime, endCount) {
  var deltaMs = new Date().getTime() - endTime;
  var deltaCount = countPerMs * deltaMs;
  var count = Math.round(endCount + deltaCount);
  return numberWithCommas(count);
}

export default {
  props: {
    label: { type: String },
    multiplier: { type: Number, default: 1 },
    startTime: { type: Number },
    startCount: { type: Number },
    endTime: { type: Number },
    endCount: { type: Number },
  },
  data () {
    var countPerMs = ((this.endCount - this.startCount) * this.multiplier) / (this.endTime - this.startTime);
    return {
      countPerMs: countPerMs,
      currentCount: getCurrentCount(countPerMs, this.endTime, this.endCount*this.multiplier),
    };
  },
  mounted () {
    var msPerChange = 1 / this.countPerMs;
    var msInterval = Math.max(50, msPerChange);
    this.interval = setInterval(() => {
      this.currentCount = getCurrentCount(this.countPerMs, this.endTime, this.endCount*this.multiplier);
    }, msInterval);
  },
  beforeDestroy () {
    clearInterval(this.interval);
  }
}
