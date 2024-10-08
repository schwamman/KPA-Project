// file deepcode ignore OR: redirects come from a whitelist
// file deepcode ignore NoRateLimitingForExpensiveWebOperation: rate limiting is applied in another file.

export default (req, res, next) => {
  const path = req.path.toLowerCase();
  const basePath = path.split('/')[1] || '';

  if (redirectsLookup.has(basePath)) {
    return res.redirect(redirectsLookup.get(basePath));
  }

  if (redirectsLookup.has(path)) {
      return res.redirect(redirectsLookup.get(path));
  }

  next();
}

const redirectsLookup = new Map([
  ['/download-android', 'https://play.google.com/store/apps/details?id=app.hazardscout&hl=en_US'],
  ['/download-ios', 'https://apps.apple.com/us/app/iscout-safety-reporting/id978056741'],
  ["/android-apk", "https://hzs-apps.s3.amazonaws.com/android/app.apk"],
  ["/android/apk", "https://hzs-apps.s3.amazonaws.com/android/app.apk"],

  ["why-iscout","/features"],
  ["blog","/articles"],
  ["support","/help"],
  ["/help/how-to-sync-your-employee-list-with-iscout","/help/sync-your-employee-list"],
  ["/help/how-to-sync-your-employee-list-with-iscout/","/help/sync-your-employee-list"],
  ["category","/articles"],
  ["uncategorized","/articles"],
  ["ehs-training-management-software-2020","/features/ehs-training"],
  ["/newsletter/in-everything-give-thanks","/newsletter/db8a023652/in-everything-give-thanks"],
  ["/newsletter/let-information-flow","/newsletter/2b8d116fcd/let-information-flow"],
  ["/newsletter/manage-your-message","/newsletter/f1025710b4/manager-your-message"],
  ["/newsletter/oop-a-little-knot-here","/newsletter/4ea38f5860/oop-a-little-knot-here"],
  ["/newsletter/new-in-hazardscout-stickers-pdfs-color-coding","/newsletter/3748814c99/new-in-hazardscout-stickers-pdfs-color-coding-more"],
  ['/glossary', 'https://www.kpa.io/ehs-software/kpa-ehs-glossary'],
  ['/sitemap', '/'],
  ['/responsible-disclosure-policy','https://kpa.io/responsible-disclosure-policy'],
  ['/schedule-a-demo', 'https://info.kpa.io/kpa-ehs-demo'],
  ['/schedule-a-demo-receipt', 'https://info.kpa.io/kpa-ehs-demo'],
  ['/industries/agriculture-ehs-management-software', 'https://www.kpa.io/agriculture-safety-management-software'],
  ['/industries/construction-ehs-management-software', 'https://www.kpa.io/construction'],
  ['/industries/construction-ehs-management-software?d_utk=0fe19b4b-233c-485f-bed5-c90e0bbd5345&_om=325197', 'https://www.kpa.io/construction'],
  ['/industries/construction-ehs-management-software', 'https://www.kpa.io/construction'],
  ['/features/control-panel', 'https://www.kpa.io/ehs-software/admin-control-panel'],
  ['/features/ehs-employee-management', 'https://www.kpa.io/ehs-software/admin-control-panel'],
  ['/features/importing-data', 'https://www.kpa.io/ehs-software/admin-control-panel'],
  ['/features/roles-and-permissions', 'https://www.kpa.io/ehs-software/admin-control-panel'],
  ['/features/custom-notifications-for-forms', 'https://www.kpa.io/ehs-software/compliance-form-management'],
  ['/features/online-form-builder', 'https://www.kpa.io/ehs-software/compliance-form-management'],
  ['/features/simple-online-forms', 'https://www.kpa.io/ehs-software/compliance-form-management'],
  ['/driver-qualifications', 'https://www.kpa.io/ehs-software/driver-qualification-file-management'],
  ['/driver-qualifications', 'https://www.kpa.io/ehs-software/driver-qualification-file-management'],
  ['/features/assign-and-schedule-inspections', 'https://www.kpa.io/ehs-software/ehs-audits-software'],
  ['/features/inspection-status-report', 'https://www.kpa.io/ehs-software/ehs-audits-software'],
  ['/features/tracking-follow-ups', 'https://www.kpa.io/ehs-software/ehs-audits-software'],
  ['/features/analyzing-form-responses', 'https://www.kpa.io/ehs-software/ehs-reporting-dashboards'],
  ['/features/participation-report', 'https://www.kpa.io/ehs-software/ehs-reporting-dashboards'],
  ['/features/scheduled-reports', 'https://www.kpa.io/ehs-software/ehs-reporting-dashboards'],
  ['/features/training-status-report-and-matrix', 'https://www.kpa.io/ehs-software/ehs-reporting-dashboards'],
  ['/features/ehs-asset-management', 'https://www.kpa.io/ehs-software/equipment-inspection-software'],
  ['/features/equipment-profile', 'https://www.kpa.io/ehs-software/equipment-inspection-software'],
  ['/features/qr-scanner', 'https://www.kpa.io/ehs-software/equipment-inspection-software'],
  ['/features/api', 'https://www.kpa.io/ehs-software/kpa-ehs-api'],
  ['/features/api', 'https://www.kpa.io/ehs-software/kpa-ehs-api'],
  ['/features/multilingual-forms-and-training', 'https://www.kpa.io/ehs-software/multilingual-forms-training'],
  ['/osha/osha-300-form', 'https://www.kpa.io/ehs-software/osha-recordkeeping-software'],
  ['/osha/osha-300-form-sample.xls', 'https://www.kpa.io/ehs-software/osha-recordkeeping-software'],
  ['/features/ehs-resource-library', 'https://www.kpa.io/ehs-software/resource-management'],
  ['/security', 'https://www.kpa.io/ehs-software/security-backup-faq'],
  ['/security', 'https://www.kpa.io/ehs-software/security-backup-faq'],
  ['/features/sso-single-sign-on', 'https://www.kpa.io/ehs-software/single-sign-on'],
  ['/features/sso-single-sign-on', 'https://www.kpa.io/ehs-software/single-sign-on'],
  ['/industries/electric-power-ehs-management-software', 'https://www.kpa.io/electric-utilities-power-safety-management-software'],
  ['/tools', 'https://www.kpa.io/library'],
  ['/tools/', 'https://www.kpa.io/library'],
  ['/tools/ppe-assessment?zarsrc=30', 'https://www.kpa.io/library'],
  ['/webinar', 'https://www.kpa.io/library/events-webinars'],
  ['/industries/manufacturing-ehs-management-software', 'https://www.kpa.io/manufacturing'],
  ['/industries/oil-and-gas-ehs-management-software', 'https://www.kpa.io/oil-and-gas-safety-management-software'],
  ['/privacy-policy', 'https://www.kpa.io/privacy-policy'],
  ['/terms-of-service', 'https://www.kpa.io/privacy-policy'],
  ['/features/group-training', 'https://www.kpa.io/safety-compliance-training/'],
  ['/features/one-off-training', 'https://www.kpa.io/safety-compliance-training/'],
  ['/features/question-of-the-day', 'https://www.kpa.io/safety-compliance-training/'],
  ['/2020-training', 'https://www.kpa.io/safety-compliance-training/online-training'],
  ['/2020-training/', 'https://www.kpa.io/safety-compliance-training/online-training'],
  ['/features/complete-training-online', 'https://www.kpa.io/safety-compliance-training/online-training'],
  ['/features/ehs-training', 'https://www.kpa.io/safety-compliance-training/online-training'],
  ['/features/lesson-builder', 'https://www.kpa.io/safety-compliance-training/online-training'],
  ['/contact', 'https://www.kpa.io/who-we-are/contact-kpa'],
  ['/getting-started', 'https://www.kpaehs.com/help'],

  ['/features/ehs-app-for-iphone-android', 'https://www.kpa.io/ehs-software/ehs-mobile-application'],
  ['/features/mobile-forms', 'https://www.kpa.io/ehs-software/ehs-mobile-application'],
  ['/features/mobile-my-profile', 'https://www.kpa.io/ehs-software/ehs-mobile-application'],
  ['/features/mobile-sops-and-resources', 'https://www.kpa.io/ehs-software/ehs-mobile-application'],
  ['/features/mobile-training', 'https://www.kpa.io/ehs-software/ehs-mobile-application'],
  ['/features/push-notifications', 'https://www.kpa.io/ehs-software/ehs-mobile-application'],

  ['/features/assign-training-online', 'https://www.kpa.io/ehs-software'],
  ['/features/c2ltcgxllw', 'https://www.kpa.io/ehs-software'],
  ['/features/ehs-sign-offs', 'https://www.kpa.io/ehs-software'],
  ['/features/electronic-signature', 'https://www.kpa.io/ehs-software'],
  ['/features/notices-and-bulletin-board', 'https://www.kpa.io/ehs-software'],
  ['/features/open-tasks-list', 'https://www.kpa.io/ehs-software'],
  ['/features/zwhzlwfwcc', 'https://www.kpa.io/ehs-software'],

  ['/articles', 'https://www.kpa.io/blog'],
  ['/articles/5-monsters-hiding-in-your-safety-closet', 'https://www.kpa.io/blog'],
  ['/articles/5-safety-tips-for-the-new-year/', 'https://www.kpa.io/blog'],
  ['/articles/best-practices', 'https://www.kpa.io/blog'],
  ['/articles/change-your-culture-by-making-employees-a-part-of-safety-strategy/', 'https://www.kpa.io/blog'],
  ['/articles/coronavirus-disease-2019-covid-19/', 'https://www.kpa.io/blog'],
  ['/articles/four-keys-to-managing-the-new-normal/', 'https://www.kpa.io/blog'],
  ['/articles/front-line-workers-know-whats-up', 'https://www.kpa.io/blog'],
  ['/articles/hand-hygiene-can-save-lives/', 'https://www.kpa.io/blog'],
  ['/articles/holiday', 'https://www.kpa.io/blog'],
  ['/articles/if-you-cant-stand-the-heat-get-out-the-heat-management-plan/', 'https://www.kpa.io/blog'],
  ['/articles/importance-of-employee-training-5-reasons-why-you-need-it/', 'https://www.kpa.io/blog'],
  ['/articles/increasing-employee-engagement-with-2020-training/', 'https://www.kpa.io/blog'],
  ['/articles/new-years-safety-resolutions-that-take-less-than-10-minutes/', 'https://www.kpa.io/blog'],
  ['/articles/quotes-to-live-by-literally/', 'https://www.kpa.io/blog'],
  ['/articles/safety', 'https://www.kpa.io/blog'],
  ['/articles/safety-culture', 'https://www.kpa.io/blog'],
  ['/articles/safety-tips', 'https://www.kpa.io/blog'],
  ['/articles/the-iscout-gameplan-for-covid-19/', 'https://www.kpa.io/blog'],
  ['/articles/the-road-team/', 'https://www.kpa.io/blog'],
  ['/articles/training', 'https://www.kpa.io/blog'],
  ['/articles/updates', 'https://www.kpa.io/blog'],
  ['/articles/whats-new-in-iscout/', 'https://www.kpa.io/blog'],
  ['/articles/why-safety-culture-matters/', 'https://www.kpa.io/blog'],
  ['/tools/ltir-calculator', 'https://www.kpa.io/blog/what-is-your-trir-calculate-yours-and-use-it-to-improve-your-business'],
  ['/tools/trir-calculator', 'https://www.kpa.io/blog/what-is-your-trir-calculate-yours-and-use-it-to-improve-your-business'],
  ['/tools/trir-calculator/trir-industry-averages', 'https://www.kpa.io/blog/what-is-your-trir-calculate-yours-and-use-it-to-improve-your-business'],

  ['/3s', 'https://www.kpa.io/iscout-is-now-kpa'],
  ['/cimarex', 'https://www.kpa.io/iscout-is-now-kpa'],
  ['/exxon', 'https://www.kpa.io/iscout-is-now-kpa'],
  ['/features', 'https://www.kpa.io/iscout-is-now-kpa'],
  ['/features/', 'https://www.kpa.io/iscout-is-now-kpa'],
  ['/forms', 'https://www.kpa.io/iscout-is-now-kpa'],
  ['/forms/cleaning-and-disinfection-checklist-advanced-form', 'https://www.kpa.io/iscout-is-now-kpa'],
  ['/forms/cleaning-and-disinfection-checklist-form', 'https://www.kpa.io/iscout-is-now-kpa'],
  ['/forms/cleaning-and-personal-hygiene-inspection-form', 'https://www.kpa.io/iscout-is-now-kpa'],
  ['/forms/daily-activity-time-sheet', 'https://www.kpa.io/iscout-is-now-kpa'],
  ['/forms/daily-contact-tracing-questionnaire-form', 'https://www.kpa.io/iscout-is-now-kpa'],
  ['/forms/flowback-safety-audit', 'https://www.kpa.io/iscout-is-now-kpa'],
  ['/forms/forklift-equipment-inspection-checklist', 'https://www.kpa.io/iscout-is-now-kpa'],
  ['/forms/harness-equipment-inspection', 'https://www.kpa.io/iscout-is-now-kpa'],
  ['/forms/health-and-wellness-screening-checklist-form', 'https://www.kpa.io/iscout-is-now-kpa'],
  ['/forms/heat-management-planning-checklist-form', 'https://www.kpa.io/iscout-is-now-kpa'],
  ['/forms/home-office-self-assessment-checklist-form', 'https://www.kpa.io/iscout-is-now-kpa'],
  ['/forms/infectious-disease-control-questionnaire-form', 'https://www.kpa.io/iscout-is-now-kpa'],
  ['/forms/ladder-equipment-inspection', 'https://www.kpa.io/iscout-is-now-kpa'],
  ['/forms/lanyard-equipment-inspection', 'https://www.kpa.io/iscout-is-now-kpa'],
  ['/forms/osha-housekeeping-checklist-form', 'https://www.kpa.io/iscout-is-now-kpa'],
  ['/forms/overhead-crane-equipment-inspection', 'https://www.kpa.io/iscout-is-now-kpa'],
  ['/forms/ppe-assessment-checklist', 'https://www.kpa.io/iscout-is-now-kpa'],
  ['/forms/reasonable-suspicion-checklist-form', 'https://www.kpa.io/iscout-is-now-kpa'],
  ['/forms/safety-observation-card?back=https://www.google.com/search?client=safari&as_qdr=all&as_occt=any&safe=active&as_q=observation card&channel=aplab&source=a-app1&hl=en', 'https://www.kpa.io/iscout-is-now-kpa'],
  ['/forms/silica-exposure-plan', 'https://www.kpa.io/iscout-is-now-kpa'],
  ['/forms/trenching-and-excavation-inspection-form', 'https://www.kpa.io/iscout-is-now-kpa'],
  ['/forms/zmlyc3qtcm', 'https://www.kpa.io/iscout-is-now-kpa'],
  ['/industries', 'https://www.kpa.io/iscout-is-now-kpa'],
  ['/newsletter', 'https://www.kpa.io/iscout-is-now-kpa'],
  ['/newsletter/0ad1f783cf/iscout-new-feature-update', 'https://www.kpa.io/iscout-is-now-kpa'],
  ['/newsletter/42c490ca0f/hazardscout-say-hello-to-iscout', 'https://www.kpa.io/iscout-is-now-kpa'],
  ['/newsletter/6675100891/iscout-new-2020-lessons-now-available', 'https://www.kpa.io/iscout-is-now-kpa'],
  ['/newsletter/8595438bda/no-one-plans-to-get-in-an-accident', 'https://www.kpa.io/iscout-is-now-kpa'],
  ['/newsletter/b60cf95508/iscout-new-feature-2020-lessons', 'https://www.kpa.io/iscout-is-now-kpa'],
  ['/newsletter/c281db579a/iscout-osha-case-management', 'https://www.kpa.io/iscout-is-now-kpa'],
  ['/newsletter/cb2f5267d8/iscout-free-coronavirus-lesson', 'https://www.kpa.io/iscout-is-now-kpa'],
  ['/newsletter/ccbfa03ec5/iscout-new-feature-and-2020-lesson', 'https://www.kpa.io/iscout-is-now-kpa'],
  ['/pricing', 'https://www.kpa.io/iscout-is-now-kpa'],
  ['/team', 'https://www.kpa.io/iscout-is-now-kpa'],

  ['/2020-training/aboveground-storage-tanks', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/abusive-workplace-conduct-prevention', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/access-to-medical-and-exposure-records', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/accident-record-keeping-with-osha-300-logs', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/acid-handling', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/active-shooter', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/aerial-lifts-and-elevated-platform-safety', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/aerial-manlift-safety', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/aggressive-driving-for-cmv-drivers', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/air-permitting', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/alcohol-and-drugs-in-the-workplace', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/alligator-shear-safety', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/anti-harassment-discrimination-for-supervisors', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/anti-harassment-training-for-managers-new-york', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/asbestos-awareness', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/avoiding-lacerations', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/back-safety', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/back-safety-ergonomics-safe-lifting', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/baler-and-shear-safety-spanish', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/basic-first-aid-awareness', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/behavioral-based-safety', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/benzene-awareness', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/bloodborne-pathogens', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/bloodborne-pathogens-and-first-aid', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/bloodborne-pathogens-general-awareness', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/bmf0dxjhbg', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/cadmium-awareness', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/cleaning-and-disinfecting', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/cold-weather-management', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/complacency-on-the-job', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/compliance-expert-privacy-and-information-security-examples', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/compliance-expert-privacy-and-information-security-examples-spanish', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/compliance-expert-privacy-and-information-security-the-basics', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/compliance-expert-privacy-and-information-security-the-basics-spanish', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/compressed-gas-safety', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/conducting-effective-interviews', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/confined-space-entry', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/confined-space-entry-awareness', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/confined-space-permit-required', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/construction-safety-overview', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/contractor-safety', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/coronavirus-disease-2019-covid-19', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/covid-19-ppe-video-toolbox-talk-spanish', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/crane-lifting-rigging-safety', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/crane-rigging-basic-safety', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/crane-safety', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/crane-safety-spanish', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/cyber-security', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/deer-vehicle-safety', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/distracted-driving-for-cmv-drivers', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/dot-cargo-securement', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/dot-entry-level-driver-training', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/dot-hazardous-materials-training', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/driver-safety', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/driver-safety-defensive-driving', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/dropped-objects', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/drug-free-workplace-series-reasonable-suspicion-testing', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/drugs-and-alcohol-in-the-workplace-fmcsa-compliant', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/electrical-awareness-safety', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/electrical-grounding-and-bonding', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/electrical-safety', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/emergency-action-plans', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/emergency-response', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/ergonomics', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/ethics-in-the-workplace', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/excavation-trenching', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/fall-protection', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/fall-protection-awareness', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/fall-protection-for-construction', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/fall-protection-for-general-industry', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/fatigue-management', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/fire-extinguisher-safety-spanish', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/fire-prevention', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/fire-safety', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/flammable-and-combustible-liquids', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/forklift-operator-training-requirements-for-supervisors', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/forklift-safety', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/fourth-of-july-safety', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/fraud-awareness-and-prevention', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/global-privacy-and-information-security', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/global-privacy-and-information-security-spanish', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/gmp-allergen-controls', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/halloween-safety', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/hand-and-power-tool-safety', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/hand-and-power-tools', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/hand-protection', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/hazard-communication', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/hazard-communication-for-managers', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/hazard-communications-ghs', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/hazardous-waste-management-for-massachusetts', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/healthy-backs-and-safe-lifting', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/hearing-conservation', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/hearing-protection', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/heat-management', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/hot-work', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/hot-work-welding-cutting-and-brazing', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/housekeeping', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/hydrogen-sulfide-h2s-awareness', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/hydrogen-sulfide-safety-awareness', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/incident-and-near-miss-reporting', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/incident-investigation', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/incident-reporting-and-investigation', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/job-hazard-analysis-jha', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/job-safety-analysis-jsa', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/journey-management', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/ladder-safety', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/lockout-tagout', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/lockout-tagout-tryout-spanish', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/maintenance-safety', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/naturally-occurring-radioactive-material-norm', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/nfpa-70e-qualified-worker', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/office-safety', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/osha-inspections', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/overhead-crane-safety', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/personal-protective-equipment-for-management', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/personal-protective-equipment-ppe', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/powered-industrial-trucks-forklift-safety', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/preventing-sprains-and-strains-in-the-workplace', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/rcra-spanish', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/reactive-corrosive-materials', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/respiratory-protection', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/rollover-prevention-for-cargo-tanks-for-cmv-drivers', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/safety-belt-awareness-for-cmv-drivers', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/silica-awareness', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/slip-trip-and-fall-prevention', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/slips-trips-falls', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/social-media-and-email', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/space-management-for-cmv-drivers', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/spcc', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/spill-prevention-controls-and-countermeasures-spcc-spanish', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/spotter-safety', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/stop-work-authority', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/stop-work-authority-spanish', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/thanksgiving-safety', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/tire-repair-safety', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/understanding-hipaa-general-awareness', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/understanding-hipaa-the-privacy-rule', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/using-communication-strategies-to-bridge-cultural-divides', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/walking-and-working-surfaces', 'https://www.kpa.io/compliance-training-library'],
  ['/2020-training/y29yb25hdm', 'https://www.kpa.io/compliance-training-library'],
]);
