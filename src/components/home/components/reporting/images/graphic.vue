
<style>
  .reporting-graphic {
    width:100%;

    svg {
      width:100%;
      max-width: 100%;
      height: auto;
      margin:auto;

      @media (max-width:  1200px) { max-width:500px; }

      #rg-lbl-location {
        fill:#2ecf94;
        display: none;
      }

      #rg-severity-check {
        display: none;
        fill:#2ecf94;
      }

      #rg-description-text {
        fill:#2ecf94;
        display: none;
      }

      #rg-btn-submit-loading {
        transform-origin: 594px 730px;
        animation: rg-btn-loading 0.5s infinite linear;
        display: none;
      }

      #rg-btn-submit-success-title {
        display: none;
      }

      #rg-btn-submit-bg {
        &.loading { fill: #bbbbbb; }
        &.success { fill: #2ecf94; }
      }

      [data-name="alert"], [id=alert] {
        opacity: 0;
        transition: opacity 1000ms ease-out;
        transform-origin: 50% 50%;

        &.alert {
          opacity: 1;
          animation: reporing-alert-pop-in 200ms ease-out;
        }
      }

      #dots circle {
        //fill:#f00 !important;
        transition:fill 300ms ease;
      }
    }
  }

  @keyframes rg-btn-loading {
    from { transform: rotate(0deg); }
    to { transform: rotate(359deg); }
  }

  @keyframes reporing-alert-pop-in {
    0%   { opacity:0; transform: scale(1.0); }
    50%  { opacity:1; transform: scale(1.02); }
    100% { opacity:1; transform: scale(1.0); }
  }
</style>

<template>
  <div class="reporting-graphic">
    <thesvg></thesvg>
  </div>
</template>

<script>
  import thesvg from "./thesvg.svg";
  import sortBy from "lodash/sortBy";
  import times from "lodash/times";

  export default {
    mounted () {
      lozad(this.$el, {
        threshold: 0.5,
        load: () => {
          setTimeout(this.start, 500);
        }
      }).observe();

      var $container = $(this.$el);
      var center = { x: 1189/2,  y: 1127/2 };
      this.dots = sortBy(
        $($container).find("#dots circle"),
        function(el){
          var $circle = $(el);
          var pos = { x: parseFloat($circle.attr("cx")), y: parseFloat($circle.attr("cy")) };
          return Math.sqrt(Math.pow(pos.x - center.x, 2) + Math.pow(pos.y - center.y, 2));
        }
      );
    },
    methods: {
      start () {
        var $container = $(this.$el);
        var $lblLocation = $container.find('#rg-lbl-location').text('').show();
        var $severityCheck = $container.find('#rg-severity-check');
        var $description = $container.find('#rg-description-text').text('').show();
        var $btnSubmitLoading = $container.find('#rg-btn-submit-loading');
        var $btnSubmitTitle = $container.find('#rg-btn-submit-title');
        var $btnSubmitSuccessTitle = $container.find('#rg-btn-submit-success-title');
        var $btnSubmitBg = $container.find('#rg-btn-submit-bg');
        var $alerts = $container.find('[data-name="alert"],[id=alert]');

        setTimeout(function(){ typeText($lblLocation, ["Houston"], 500); }, 0);
        setTimeout(function(){ $severityCheck.show(); }, 1000);
        setTimeout(function(){ typeText($description, ["The south entrance is", "washed out. Nearly", "slid into the creek."], 1300) }, 1500);
        setTimeout(function(){ $btnSubmitTitle.hide(); }, 3000);
        setTimeout(function(){ $btnSubmitLoading.show(); }, 3000);
        setTimeout(function(){ $btnSubmitBg.addClass("loading"); }, 3000);
        setTimeout(function(){ $btnSubmitLoading.hide(); }, 4000);
        setTimeout(function(){ $btnSubmitBg.removeClass("loading").addClass("success"); }, 4000);
        setTimeout(function(){ $btnSubmitSuccessTitle.show(); }, 4000);

        setTimeout(()=>{
          var dotsDuration = 2000;
          this.dots.forEach((circle, i) => {
            var delay = (dotsDuration / this.dots.length) * i;
            setTimeout(() => {
              $(circle).css('fill', "#999");
            }, delay);
          });
        }, 4100);

        setTimeout(function(){ $alerts.addClass("alert"); }, 6200);

        setTimeout(() => {
          $alerts.removeClass("alert");
          $(this.dots).removeAttr("style");
          setTimeout(() => {
            $lblLocation.text('');
            $severityCheck.hide();
            $description.html('');
            $btnSubmitTitle.show();
            $btnSubmitBg.removeClass("success");
            $btnSubmitSuccessTitle.hide();
          }, 400);

          setTimeout(this.start, 3000);
        }, 10000);
      }
    },
    components: {
      thesvg: thesvg
    }
  }

  function typeText ($el, lines, duration){
    var text = lines.join("|");
    if (!text) return $el.text("");
    var msPerChar = duration / text.length;

    // <tspan x="0" dy="0">The south entrance is</tspan><tspan x="0" dy="1.2em">washed out. Nearly</tspan><tspan x="0" dy="1.2em">slid into the creek.</tspan>
    times(text.length, i => {
      setTimeout(() => {
        var html = text.substr(0, i+1).split("|").map((l, lineIndex) => {
          return '<tspan x="0" dy="'+(lineIndex===0 ? 0 : "1.2em")+'">'+l+'</tspan>';
        }).join("");
        $el.html(html);
      }, msPerChar*i);
    });
  }
</script>
