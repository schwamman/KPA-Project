<style>
  .training-graphic {
    position: relative;
    flex:1;
    width:100%;
    height:100%;
    min-height:300px;
    display: flex;
    align-items: center;
    justify-content: center;

    img, svg {
      height:80%;
      position: absolute;
      margin:auto;

      &:nth-child(1), &:nth-child(2) {
        transition:all 800ms ease-out;
      }

      &.reveal {
        &:nth-child(1) {
          transform: translateX(-9vh) translateY(2vh) rotate(-14deg);
        }
        &:nth-child(2) {
          transition-delay: 200ms;
          transform: translateX(9vh) translateY(2vh) rotate(14deg);
        }
      }
    }

    svg {
      * {
        transition: all 300ms ease-in-out;
      }
      #td2-answer3 path {
        display: none;
      }
    }
  }
</style>

<template>
  <div class="training-graphic">
    <img alt="ehs training" v-lozad :data-src='require("./ehs-training.svg")' :class="{reveal:reveal}" title="" />
    <img alt="online training" v-lozad :data-src='require("./online-training-software.svg")' :class="{reveal:reveal}" />
    <SvgDevice></SvgDevice>
  </div>
</template>

<script>
  import SvgDevice from "./svg.svg";
  export default {
    data () {
      return {reveal: false};
    },
    mounted() {
      lozad(this.$el, {
        threshold: 0.5,
        load: () => {
          setTimeout(this.start, 500);
        }
      }).observe();
    },
    methods: {
      start () {
        this.reveal = true;

        setTimeout(this.showNextAnswer, 1000);
      },
      showNextAnswer () {
        this.answerCount = (this.answerCount || 0) + 1;
        var answerNumber = [4,3,1][this.answerCount%3];
        this.highlightAnswer(answerNumber);
        setTimeout(() => this.highlightAnswer(0), 4000);
        setTimeout(this.showNextAnswer, 7000);
      },
      highlightAnswer(answer){
        var $container = $(this.$el);
        var $answers = [$container.find("#td2-answer1"), $container.find("#td2-answer2"), $container.find("#td2-answer3"), $container.find("#td2-answer4")];

        $answers.forEach($a => $a.find("*").removeAttr("style"));

        var $answer = $answers[answer-1];
        if (!$answer) return;
        var isCorrect = answer === 3;
        var color = isCorrect ? "#14d46e" : "#db3434";
        $answer.find("rect").css({stroke:color});
        $answer.find("circle").css({stroke:color});
        $answer.find("text").css({fill:color});
        $answer.find("*").show();
      }
    },
    components: {
      SvgDevice: SvgDevice
    }
  }
</script>
