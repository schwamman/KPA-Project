// import addEmailToMailchimp from "../newsletter-signup/client/add-email-to-mailchimp";

export default {
  props: {
    formId: String,
    goToWebinarWebinarKey: String,
    values:Object,
    mode: {
      type: String,
      validator (val) { return ["bare", "thin", "large"].includes(val); }
    }
  },
  data () {
    return {
      loading: true,
      id: "form-"+new Array(10).join().replace(/(.|$)/g, function(){return ((Math.random()*36)|0).toString(36);}),
    };
  },
  mounted () {
    this.loadScript();
  },
  computed: {
    isPrimaryCampaignForm() {
      return this.formId === '1f0b074a-c9ce-48ee-93c3-9343ebc295a1';
    },

    region() {
      return (
        this.isPrimaryCampaignForm
          ? 'na1'
          : undefined
      );
    },

    portalId() {
      return (
        this.isPrimaryCampaignForm
          ? '403729'
          : '5340199'
      );
    },

    sfdcCampaignId() {
      return (
        this.isPrimaryCampaignForm
          ? '7013n000001erKUAAY'
          : undefined
      );
    },
  },
  methods: {
    loadScript () {
      var success = () => this.loadForm();
      var fail = () => {};

      var src = "https://js.hsforms.net/forms/v2.js";
      if (window.hbspt) {
        success();
        return;
      }

      const el = document.createElement('script');
      el.type = 'text/javascript';
      el.async = true;
      el.src = src;

      el.addEventListener('load', success);
      el.addEventListener('error', fail);
      el.addEventListener('abort', fail);

      document.head.appendChild(el);
    },
    loadForm () {
      // See https://developers.hubspot.com/docs/methods/forms/advanced_form_options
      const isScheduleDemoForm = this.isPrimaryCampaignForm;
      window.hbspt.forms.create({
        region: this.region,
        target: "."+this.id,
        portalId: this.portalId,
        formId: this.formId,
        sfdcCampaignId: this.sfdcCampaignId,
        goToWebinarWebinarKey: this.goToWebinarWebinarKey,
        onFormReady: function (form) {
          // Set initial values
          try {
            for (var name in this.values){
              $(form).find("[name='"+name+"']").val(this.values[name]);
            }
          }catch(e){}

          this.loading = false;
        }.bind(this),
        onFormSubmit: function ($form) {
          // Save form data so we can access it on `submitted`
          var data = {};
          try { $form.serializeArray().map(function(x){data[x.name] = x.value;}); }catch(e){}
          this.formData = data;
        }.bind(this),
        onFormSubmitted: function ($form) {
          //this.$emit("submitted", this.formData);

          // // any value that looks like an email, add to mailchimp
          // try {
          //   var rxEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          //   _.each(this.formData, function(value, key){
          //     if (typeof value === "string" && rxEmail.test(value)){
          //       addEmailToMailchimp(value);
          //     }
          //   });
          // }catch(e){}

          // Hacky, but several pages use the 'Schedule a Demo' form but we need all of them
          // to redirect to the receipt page so that we measure conversions (capterra)
          if (isScheduleDemoForm) {
            setTimeout(function(){ location.href = '/schedule-a-demo-receipt'; }, 1000);
          }
        }.bind(this),
      });
    }
  }
};
