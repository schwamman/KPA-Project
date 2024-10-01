
<style type="text/css" src="./page.css"></style>

<template>
  <div class="body body-copy it-page">

    <div class="instructions">
      <!-- <div class="instructions-header">
        On September 15th, 2021 iScout was renamed to KPA Flex.
      </div> -->
      <div class="instruction">
        <h2>If web access is filtered, please whitelist</h2>
        <p><code>*.kpaehs.com</code></p>
        <p><code>hzd.io</code></p>

        <p class="extra-suggestions">
          KPA Flex also uses a few 3rd party services including:<br>

          player.vimeo.com (Training Videos)<br>
          www.youtube.com (Training Videos)<br>
          maps.googleapis.com (Google Maps)<br>
          view.officeapps.live.com (Office Document Previews)<br>
          www.visualcrossing.com (View historical weather)<br>
          <b>flex-prod-uploads-us-west-2.s3.us-west-2.amazonaws.com</b> (S3 content)<br>
          <b>flex-prod-temp-us-west-2.s3.us-west-2.amazonaws.com</b> (S3 content)<br>
        </p>

      </div>

      <div class="instruction">
        <h2>For email notifications, please whitelist</h2>
        <p><code>*@kpaehs.com</code></p>

        <p class="extra-suggestions" style="margin-bottom: 0;">
          System emails come from <b>system@kpaehs.com</b> and
          are DKIM / SPF signed. Support tickets, feature release,
          and other notifications will come from other *@kpaehs.com
          addresses.
        </p>

        <p>
          <b style="color: rgb(244, 133, 133);">
            As of April 19 2024
          </b>
        </p>

        <p class="extra-suggestions">
          KPA Flex will <i>stop</i> sending email from the following IP addresses:
        </p>
        <ul>
          <li style="list-style-type:none; text-decoration: line-through; color: rgb(244, 133, 133);">54.240.42.136</li>
          <li style="list-style-type:none; text-decoration: line-through; color: rgb(244, 133, 133);">54.240.42.137</li>
        </ul>

        <hr/>

        <p>
          <b style="color: #27bf81;">
            As of April 22 2024
          </b>
        </p>

        <p class="extra-suggestions">
          KPA Flex will start sending email from the following IP addresses:
        </p>

        <ul>
          <li style="list-style-type:none; color: #27bf81;">54.240.85.177</li>
          <li style="list-style-type:none; color: #27bf81;">54.240.85.176</li>
        </ul>
      </div>

      <div class="instruction">
        <h2>If using SFTP, please whitelist</h2>
        <p><code>dataload.iscout.com</code></p>

        <p class="extra-suggestions">
          IP addresses:
        </p>

        <ul>
          <li style="list-style-type:none; color: #27bf81;">18.205.214.149</li>
          <li style="list-style-type:none; color: #27bf81;">18.233.88.213</li>
        </ul>
      </div>
    </div>

    <div style="text-align: center">
      <h1>Have More Questions?</h1>
      <p>
        Visit the <a href="/security">Security & Backups FAQ Page</a>
        <!-- or
        <a href="mailto:help@kpaehs.com">contact our support team</a> with any specific questions. -->
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    head () {
      return {
        title: "IT / Domains - KPA Flex"
      };
    }
  }
</script>
