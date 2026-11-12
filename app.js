// SwasthyaAI - Core Application Logic
// INNOVATHON 2026 - Team CSK (Healthcare & Social Impact)

document.addEventListener("DOMContentLoaded", () => {
  // State
  let currentLanguage = "hi"; // Default to Hindi as per Bharat mission
  let currentSampleId = "sample1";
  let activeCaseData = CLINICAL_SAMPLES.sample1;
  let isAshaMode = false;
  let isSpeaking = false;

  // DOM Elements
  const langSelect = document.getElementById("langSelect");
  const ttsGlobalToggle = document.getElementById("ttsGlobalToggle");
  const ashaModeBtn = document.getElementById("ashaModeBtn");
  const rawLabText = document.getElementById("rawLabText");
  const rawRxText = document.getElementById("rawRxText");
  const runTriageBtn = document.getElementById("runTriageBtn");
  const scanAnimWrapper = document.getElementById("scanAnimWrapper");
  const triageDashboard = document.getElementById("triageDashboard");
  const sampleCards = document.querySelectorAll(".sample-card");

  // Patient Info Elements
  const patientNameDisplay = document.getElementById("patientNameDisplay");
  const patientMetaDisplay = document.getElementById("patientMetaDisplay");
  const overallTriageCard = document.getElementById("overallTriageCard");
  const overallStatusBadge = document.getElementById("overallStatusBadge");
  const overallStatusText = document.getElementById("overallStatusText");
  const overallSummaryText = document.getElementById("overallSummaryText");
  const speakSummaryBtn = document.getElementById("speakSummaryBtn");
  const voiceStatusBadge = document.getElementById("voiceStatusBadge");
  const voiceStatusText = document.getElementById("voiceStatusText");

  // Containers
  const biomarkersContainer = document.getElementById("biomarkersContainer");
  const medsTimelineContainer = document.getElementById("medsTimelineContainer");
  const doctorQuestionsContainer = document.getElementById("doctorQuestionsContainer");

  // Tabs
  const tabBtns = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  // File Upload Elements
  const dropZone = document.getElementById("dropZone");
  const fileInput = document.getElementById("fileInput");
  const cameraBtn = document.getElementById("cameraBtn");
  const uploadPreviewContainer = document.getElementById("uploadPreviewContainer");
  const uploadedImagePreview = document.getElementById("uploadedImagePreview");
  const previewFileName = document.getElementById("previewFileName");

  // Rx Decrypter
  const quickDeccodeInput = document.getElementById("quickDeccodeInput");
  const quickDecodeBtn = document.getElementById("quickDecodeBtn");
  const quickDecodeResult = document.getElementById("quickDecodeResult");

  // Modals
  const archModal = document.getElementById("archModal");
  const openArchModalBtn = document.getElementById("openArchModalBtn");
  const closeArchModalBtn = document.getElementById("closeArchModalBtn");
  const whatsappModal = document.getElementById("whatsappModal");
  const whatsappSimBtn = document.getElementById("whatsappSimBtn");
  const closeWhatsappModalBtn = document.getElementById("closeWhatsappModalBtn");
  const dismissWhatsappBtn = document.getElementById("dismissWhatsappBtn");
  const whatsappMessageBubble = document.getElementById("whatsappMessageBubble");
  const printReportBtn = document.getElementById("printReportBtn");

  // i18n Translations Dictionary
  const I18N = {
    en: {
      view_architecture: "Architecture & Moat",
      voice_assist: "Voice Mode",
      asha_mode: "ASHA Worker View",
      hero_chip: "Zero-Hallucination Multimodal Health AI",
      hero_title: "Demystifying Medical Diagnostics & Doctor Prescriptions for Bharat",
      hero_desc: "Over 70% of Indian citizens cannot decipher pathological reports, and 50% mismanage prescriptions due to cursive handwriting and Latin clinical shorthand. SwasthyaAI delivers instant multimodal triage, vernacular translation, and an exact daily medicine schedule.",
      stat_jargon_title: "Clinical Jargon Barrier",
      stat_jargon_desc: "Patients panic from search engines over routine lab printouts.",
      stat_shorthand_title: "Prescription Mismanagement",
      stat_shorthand_desc: "Rushed handwriting ('1-0-1 AC', 'BD PC') leads to dangerous empty-stomach mixups.",
      stat_lingua_title: "Linguistic Divide",
      stat_lingua_desc: "85% speak Hindi & regional tongues; 98% of lab printouts remain strictly in English.",
      instant_demo_badge: "1-CLICK GRAND FINALE DEMOS",
      select_scenario_title: "Select a Certified Clinical Case or Upload Your Own",
      latency_tag: "Gemini 2.0 Flash Core • Sub-2s Latency",
      btn_load_case: "Load Case →",
      sample1_heading: "Liver Enzymes & Reflux Rx",
      sample1_desc: "Bilirubin 2.4 mg/dL, SGPT 68 U/L with Doctor Rx: Pantocid 40mg (OD AC) + Metformin (BD PC).",
      sample2_heading: "Diabetic & Lipid Crisis",
      sample2_desc: "HbA1c 9.2%, Fasting Sugar 188 mg/dL with Glycomet GP (1-0-1 PC) and Atorvastatin (0-0-1 HS).",
      sample3_heading: "CBC Dengue Platelet Emergency",
      sample3_desc: "Platelets 42,000 /µL (Critical low) + Dengue NS1 Positive with Dolo 650 SOS & Caripill 1-1-1.",
      tab_report_view: "Active Case Input",
      tab_custom_upload: "Upload New Report / Photo",
      tab_shorthand_dictionary: "Doctor Rx Shorthand Decrypter",
      pane_lab_title: "Pathology Lab Diagnostic Printout",
      pane_rx_title: "Doctor Prescription (Handwritten / Latin Shorthand)",
      btn_run_triage: "Execute Multimodal Vision Triage",
      dropzone_title: "Drop your Blood Report or Prescription Photo here",
      dropzone_sub: "Supports JPG, PNG, and PDF medical summaries. Contrast normalization applied automatically.",
      btn_browse_files: "Browse Files",
      btn_take_photo: "Camera Scan",
      ready_to_parse: "Ready for Vision OCR Pipeline",
      decoder_title: "Deciphering Indian Clinical Shorthand into Vernacular Clarity",
      decoder_sub: "Test how SwasthyaAI maps Latin medical shorthand and dosage numbers into exact hourly food schedules.",
      btn_decode: "Decode Shorthand",
      btn_listen_audio: "🔊 Listen to Summary",
      btn_print: "Print / PDF",
      btn_whatsapp: "Send WhatsApp Timetable",
      feature1_tag: "KEY FEATURE 2",
      biomarkers_title: "Biomarker Traffic-Light Triage",
      biomarkers_subtitle: "Numerical lab values mathematically calculated against certified reference ranges. Zero hallucination.",
      legend_normal: "Normal (Healthy)",
      legend_warning: "Borderline Check",
      legend_alert: "Alert (Doctor Review)",
      feature4_tag: "KEY FEATURE 4",
      meds_title: "Chronological Daily Medication Timetable",
      meds_subtitle: "Doctor shorthand (OD AC, BD PC, 1-0-1) decoded into exact clock times and food rules.",
      adherence_tag: "Prevents Empty-Stomach Medication Mistakes",
      safety_tag: "DOCTOR-FIRST ETHICS",
      doc_dialogue_title: "Questions to Ask Your Doctor at Next Visit",
      doc_dialogue_subtitle: "Curated medical dialogue prompts generated strictly from your abnormal test biomarkers.",
      ethics_title: "Strict Medical Safety & Ethical Non-Diagnostic Disclaimer",
      ethics_body: "SwasthyaAI is an educational health-literacy companion designed for patient triaging and comprehension across Bharat. It strictly enforces certified reference range checks and decodes existing doctor instructions. It never autonomously alters dosages or prescribes unprescribed drugs. Always consult a certified MBBS physician for clinical diagnosis."
    },
    hi: {
      view_architecture: "सिस्टम आर्किटेक्चर",
      voice_assist: "आवाज सहायक",
      asha_mode: "आशा कार्यकर्ता दृश्य",
      hero_chip: "जीरो-भ्रम मल्टीमॉडल स्वास्थ्य एआई",
      hero_title: "1.4 अरब नागरिकों के लिए मेडिकल रिपोर्ट व डॉक्टर पर्चे की सरल समझ",
      hero_desc: "भारत में 70% से अधिक मरीज अपनी पैथोलॉजी रिपोर्ट नहीं समझ पाते और 50% से ज्यादा लोग डॉक्टर के कठिन पर्चे और अंग्रेजी संक्षिप्त शब्दों (1-0-1 AC) के कारण गलत समय पर दवा खाते हैं। स्वास्थ्यAI 3 सेकंड में स्पष्ट हिंदी, रंगीन कार्ड्स और दवा का दैनिक समय-सारणी प्रदान करता है।",
      stat_jargon_title: "मेडिकल भाषा की रुकावट",
      stat_jargon_desc: "कठिन लैब रिपोर्ट देखकर मरीज इंटरनेट पर डर जाते हैं।",
      stat_shorthand_title: "पर्चे की गलत दवा समय",
      stat_shorthand_desc: "'1-0-1 AC' न समझने के कारण खाली पेट वाली दवा खाने के बाद खा लेते हैं।",
      stat_lingua_title: "मातृभाषा की दूरी",
      stat_lingua_desc: "85% नागरिक हिंदी व स्थानीय भाषा बोलते हैं, पर 98% रिपोर्ट सिर्फ अंग्रेजी में होती हैं।",
      instant_demo_badge: "1-क्लिक ग्रैंड फिनाले लाइव डेमो",
      select_scenario_title: "जांच का उदाहरण चुनें या अपनी रिपोर्ट अपलोड करें",
      latency_tag: "Gemini 2.0 Flash • 2 सेकंड से कम समय",
      btn_load_case: "केस लोड करें →",
      sample1_heading: "लिवर एंजाइम व एसिडिटी पर्चा",
      sample1_desc: "बिलिरुबिन 2.4 mg/dL, SGPT 68 U/L और डॉक्टर पर्चा: Pantocid 40mg (OD AC) + Metformin (BD PC)।",
      sample2_heading: "डायबिटीज व कोलेस्ट्रॉल अलर्ट",
      sample2_desc: "HbA1c 9.2%, शुगर 188 mg/dL एवं दवाएं Glycomet GP (1-0-1 PC) और Atorva (0-0-1 HS)।",
      sample3_heading: "डेंगू व प्लेटलेट आपातकाल",
      sample3_desc: "प्लेटलेट्स मात्र 42,000 /µL (खतरा), डेंगू पॉजिटिव और Dolo 650 SOS + Caripill 1-1-1।",
      tab_report_view: "सक्रिय केस डेटा",
      tab_custom_upload: "नई रिपोर्ट / फोटो अपलोड करें",
      tab_shorthand_dictionary: "डॉक्टर शॉर्टहैंड डिकोडर",
      pane_lab_title: "पैथोलॉजी लैब रिपोर्ट प्रिंटआउट",
      pane_rx_title: "डॉक्टर का पर्चा (हस्तलिखित / शॉर्टहैंड)",
      btn_run_triage: "मल्टीमॉडल विजन AI जांच शुरू करें",
      dropzone_title: "अपनी ब्लड टेस्ट रिपोर्ट या पर्चे की फोटो यहां डालें",
      dropzone_sub: "JPG, PNG और PDF सपोर्टेड। ब्राइटनेस व स्क्यू अपने आप ठीक हो जाएगा।",
      btn_browse_files: "फाइल चुनें",
      btn_take_photo: "कैमरा स्कैन",
      ready_to_parse: "एआई विश्लेषण के लिए तैयार",
      decoder_title: "डॉक्टर के कठिन शॉर्टहैंड को हिंदी में समझें",
      decoder_sub: "जानें कि '1-0-1 AC', 'BD PC', 'TDS' और 'HS' का सही समय और खाने का नियम क्या है।",
      btn_decode: "अर्थ जानें",
      btn_listen_audio: "🔊 हिंदी में सुनें",
      btn_print: "प्रिंट / PDF",
      btn_whatsapp: "व्हाट्सएप पर समय-सारणी भेजें",
      feature1_tag: "प्रमुख विशेषता 2",
      biomarkers_title: "ट्रैफिक-लाइट रंगीन स्वास्थ्य कार्ड्स",
      biomarkers_subtitle: "सर्टिफाइड मेडिकल रेंज के साथ सटीक तुलना। कोई मनगढ़ंत सलाह नहीं।",
      legend_normal: "🟢 सामान्य (स्वस्थ)",
      legend_warning: "🟡 हल्का बढ़ा हुआ",
      legend_alert: "🔴 गंभीर अलर्ट (डॉक्टर को दिखाएं)",
      feature4_tag: "प्रमुख विशेषता 4",
      meds_title: "दैनिक दवा समय-सारणी (टाइमटेबल)",
      meds_subtitle: "डॉक्टर के संक्षिप्त कोड (OD AC, BD PC) को सही घड़ी के समय और खाली/भरे पेट में बदला गया।",
      adherence_tag: "खाली पेट की दवा में गलती से बचाव",
      safety_tag: "डॉक्टर से परामर्श पहले",
      doc_dialogue_title: "अगली बार डॉक्टर से पूछने योग्य जरूरी सवाल",
      doc_dialogue_subtitle: "आपकी खराब टेस्ट रिपोर्ट के आधार पर तैयार किए गए सटीक सवाल।",
      ethics_title: "सख्त मेडिकल सुरक्षा एवं कानूनी डिस्क्लेमर",
      ethics_body: "स्वास्थ्यAI केवल मरीजों की सहायता और स्वास्थ्य साक्षरता के लिए बनाया गया डिजिटल साथी है। यह स्वयं कोई नई दवा नहीं लिखता और न ही डॉक्टर की दी गई खुराक बदलता है। किसी भी बीमारी के अंतिम इलाज और निर्णय के लिए हमेशा अपने एमबीबीएस डॉक्टर से सलाह लें।"
    },
    hinglish: {
      view_architecture: "Architecture & Moat",
      voice_assist: "Voice Mode",
      asha_mode: "ASHA Worker View",
      hero_chip: "Zero-Hallucination Health AI",
      hero_title: "Medical Reports aur Doctor Prescription ko Samjhein Aasan Bhasha Me",
      hero_desc: "70% se zyada log pathology blood report nahi samajh paate aur 50% log doctor ki handwriting aur '1-0-1 AC' jaise shorthand ki wajah se galat time pe dawai lete hain. SwasthyaAI deta hai instant color-coded cards aur daily medicine schedule.",
      stat_jargon_title: "Clinical Jargon Problem",
      stat_jargon_desc: "Report dekh kar internet pe galat bimari dhoond kar log darr jaate hain.",
      stat_shorthand_title: "Prescription Shorthand Confusion",
      stat_shorthand_desc: "'1-0-1 AC' na samajh aane se khali pet wali dawai khane ke baad le lete hain.",
      stat_lingua_title: "Language Barrier",
      stat_lingua_desc: "85% log Hindi/Vernacular bolte hain jabki 98% reports sirf English me hoti hain.",
      instant_demo_badge: "1-CLICK GRAND FINALE DEMOS",
      select_scenario_title: "Clinical Case select karein ya nayi report upload karein",
      latency_tag: "Gemini 2.0 Flash Core • Sub-2s Latency",
      btn_load_case: "Case Load Karein →",
      sample1_heading: "Liver Enzymes & Acidity Rx",
      sample1_desc: "Bilirubin 2.4 mg/dL, SGPT 68 U/L aur Rx: Pantocid 40mg (OD AC) + Metformin (BD PC).",
      sample2_heading: "Diabetic & Cholesterol Crisis",
      sample2_desc: "HbA1c 9.2%, Fasting Sugar 188 mg/dL with Glycomet GP (1-0-1 PC) and Atorva (0-0-1 HS).",
      sample3_heading: "Dengue Platelet Alert (Emergency)",
      sample3_desc: "Platelets 42,000 /µL (Critical low) + Dengue Positive with Dolo 650 SOS & Caripill.",
      tab_report_view: "Active Case Data",
      tab_custom_upload: "Nayi Photo / PDF Upload Karein",
      tab_shorthand_dictionary: "Doctor Shorthand Decoder",
      pane_lab_title: "Pathology Lab Diagnostic Report",
      pane_rx_title: "Doctor Prescription (Handwriting / Shorthand)",
      btn_run_triage: "Multimodal Vision AI Run Karein",
      dropzone_title: "Apni Blood Report ya Doctor Parchi yahan drop karein",
      dropzone_sub: "JPG, PNG aur PDF files supported. Contrast aur skew auto-fix hoga.",
      btn_browse_files: "Browse Files",
      btn_take_photo: "Camera Scan",
      ready_to_parse: "AI Analysis ke liye ready",
      decoder_title: "Doctor ke Shorthand ka simple meaning samjhein",
      decoder_sub: "'1-0-1 AC', 'BD PC', 'TDS' ka exact time aur khana khane ke pehle/baad ka rule.",
      btn_decode: "Meaning Dekhein",
      btn_listen_audio: "🔊 Voice Suno",
      btn_print: "Print / PDF",
      btn_whatsapp: "WhatsApp Schedule Bhejo",
      feature1_tag: "KEY FEATURE 2",
      biomarkers_title: "Biomarker Traffic-Light Cards",
      biomarkers_subtitle: "Certified lab reference ranges se instant mathematical verification.",
      legend_normal: "Normal (Healthy)",
      legend_warning: "Borderline Check",
      legend_alert: "Alert (Doctor ko dikhayein)",
      feature4_tag: "KEY FEATURE 4",
      meds_title: "Daily Medicine Time-Table",
      meds_subtitle: "Doctor shorthand (OD AC, BD PC) ko exact ghadi ke time me decode kiya gaya.",
      adherence_tag: "Khali pet dawai ki galti se bachaye",
      safety_tag: "DOCTOR FIRST",
      doc_dialogue_title: "Agli visit pe Doctor se kya poochein",
      doc_dialogue_subtitle: "Aapki abnormal test report ke mutabik customized questions.",
      ethics_title: "Strict Medical Safety & Ethical Disclaimer",
      ethics_body: "SwasthyaAI sirf health education aur triaging ke liye hai. Ye na koi nayi dawa likhta hai na doctor ka dose badalta hai. Final treatment ke liye hamesha certified MBBS doctor se milen."
    }
  };

  // Switch UI Language
  function updateLanguage(lang) {
    currentLanguage = lang;
    const dict = I18N[lang] || I18N.en;

    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    renderTriageResults(activeCaseData);
  }

  // Load a Case Sample
  function loadCase(sampleId) {
    currentSampleId = sampleId;
    activeCaseData = CLINICAL_SAMPLES[sampleId];

    // Update active class on sample cards
    sampleCards.forEach(card => {
      if (card.dataset.sample === sampleId) {
        card.classList.add("active");
      } else {
        card.classList.remove("active");
      }
    });

    // Populate Raw Terminal Panes
    rawLabText.textContent = activeCaseData.rawInput.labText;
    rawRxText.textContent = activeCaseData.rawInput.rxText;

    // Trigger Scan Animation for realistic pitch effect
    executeTriageSimulation();
  }

  // Execute Multimodal Vision AI Simulation
  function executeTriageSimulation() {
    scanAnimWrapper.classList.remove("hidden");
    triageDashboard.classList.add("hidden");

    const steps = [
      document.getElementById("hudStep1"),
      document.getElementById("hudStep2"),
      document.getElementById("hudStep3"),
      document.getElementById("hudStep4")
    ];

    steps.forEach(s => s.classList.remove("active"));
    steps[0].classList.add("active");

    setTimeout(() => {
      steps[0].classList.remove("active");
      steps[1].classList.add("active");
    }, 400);

    setTimeout(() => {
      steps[1].classList.remove("active");
      steps[2].classList.add("active");
    }, 850);

    setTimeout(() => {
      steps[2].classList.remove("active");
      steps[3].classList.add("active");
    }, 1300);

    setTimeout(() => {
      scanAnimWrapper.classList.add("hidden");
      triageDashboard.classList.remove("hidden");
      renderTriageResults(activeCaseData);
      
      // Smooth scroll down to dashboard
      triageDashboard.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 1750);
  }

  // Render Triage Results
  function renderTriageResults(data) {
    if (!data) return;

    // Patient Strip
    patientNameDisplay.textContent = `${data.patient.name}, ${data.patient.age}Y / ${data.patient.gender}`;
    patientMetaDisplay.textContent = `Pathology: ${data.patient.lab} • Doctor: ${data.patient.doctor} • Date: ${data.patient.date}`;

    // Overall Status
    overallTriageCard.className = `overall-triage-card ${data.triageStatus}-border`;
    overallStatusBadge.className = `triage-status-pill pill-${data.triageStatus}-bg`;
    
    if (data.triageStatus === "alert") {
      overallStatusText.textContent = currentLanguage === "hi" ? "🔴 आपातकालीन समीक्षा आवश्यक" : (currentLanguage === "hinglish" ? "🔴 URGENT DOCTOR REVIEW" : "🔴 URGENT TRIAGE ALERT");
    } else if (data.triageStatus === "warning") {
      overallStatusText.textContent = currentLanguage === "hi" ? "🟡 जीवनशैली व फॉलोअप जांच" : "🟡 BORDERLINE MONITORING";
    } else {
      overallStatusText.textContent = currentLanguage === "hi" ? "🟢 सभी पैरामीटर सामान्य" : "🟢 OPTIMAL HEALTH PROFILE";
    }

    // Overall Summary Text
    overallSummaryText.textContent = data.overallSummary[currentLanguage] || data.overallSummary.en;

    // Render Biomarkers
    renderBiomarkers(data.biomarkers);

    // Render Medication Timetable
    renderMedications(data.medications);

    // Render Doctor Dialogue
    renderDoctorQuestions(data.doctorQuestions);
  }

  // Render Biomarkers with Range Gauge
  function renderBiomarkers(biomarkers) {
    biomarkersContainer.innerHTML = "";

    biomarkers.forEach(bm => {
      const card = document.createElement("div");
      card.className = `biomarker-card status-${bm.status}`;

      // Calculate Gauge Needle position
      let needlePct = 50;
      if (bm.refLow !== undefined && bm.refHigh !== undefined) {
        const spread = (bm.refHigh - bm.refLow) * 1.5;
        const minScale = Math.max(0, bm.refLow - spread * 0.3);
        const maxScale = bm.refHigh + spread * 0.5;
        needlePct = ((bm.value - minScale) / (maxScale - minScale)) * 100;
        needlePct = Math.max(5, Math.min(95, needlePct));
      }

      const displayName = currentLanguage === "hi" ? (bm.name_hi || bm.name) : bm.name;
      const statusLabel = currentLanguage === "hi" ? (bm.statusLabel_hi || bm.statusLabel) : bm.statusLabel;
      const meaning = currentLanguage === "hi" ? (bm.meaning_hi || bm.meaning_en) : (currentLanguage === "hinglish" ? (bm.meaning_hinglish || bm.meaning_en) : bm.meaning_en);

      card.innerHTML = `
        <div class="bm-header">
          <span class="bm-name">${displayName}</span>
          <span class="bm-badge bm-badge-${bm.status}">${statusLabel}</span>
        </div>
        <div class="bm-values-row">
          <div>
            <span class="bm-measured">${bm.value.toLocaleString()}</span>
            <span class="bm-unit">${bm.unit}</span>
          </div>
          <div class="bm-reference">
            Ref Range: ${bm.refLow !== undefined ? `${bm.refLow} - ${bm.refHigh} ${bm.unit}` : 'Standard'}
          </div>
        </div>
        <div class="bm-gauge-wrapper">
          <div class="bm-gauge-bar">
            <div class="bm-needle" style="left: ${needlePct}%;"></div>
          </div>
          <div class="bm-gauge-labels">
            <span>Low</span>
            <span>Normal Range</span>
            <span>High</span>
          </div>
        </div>
        <div class="bm-meaning-box">
          ${meaning}
        </div>
      `;

      biomarkersContainer.appendChild(card);
    });
  }

  // Render Medication Timetable
  function renderMedications(medications) {
    medsTimelineContainer.innerHTML = "";

    medications.forEach(med => {
      const card = document.createElement("div");
      card.className = "med-card";

      const decoded = currentLanguage === "hi" ? med.decoded_hi : (currentLanguage === "hinglish" ? med.decoded_hinglish : med.decoded);
      const foodText = currentLanguage === "hi" ? med.foodLabel_hi : med.foodLabel;
      const purpose = currentLanguage === "hi" ? med.purpose_hi : med.purpose;

      let foodClass = "food-after";
      if (med.foodRelation === "before_food") foodClass = "food-before";
      else if (med.foodRelation === "bedtime") foodClass = "food-bedtime";
      else if (med.foodRelation === "anytime") foodClass = "food-anytime";

      card.innerHTML = `
        <div class="med-time-slot">
          <div class="med-icon-badge">
            ${med.icon === 'pill' ? '💊' : (med.icon === 'drink' ? '🥤' : '🩹')}
          </div>
          <div>
            <div class="med-clock">${med.timing}</div>
            <div class="med-timing-label">Schedule Slot</div>
          </div>
        </div>
        <div class="med-details">
          <div class="med-name-row">
            <span class="med-brand-name">${med.medicine}</span>
            <span class="med-shorthand-badge">${med.shorthand}</span>
          </div>
          <div class="med-decoded-text">👉 ${decoded}</div>
          <div class="med-purpose-text"><strong>Why prescribed:</strong> ${purpose}</div>
        </div>
        <div class="med-food-prereq">
          <span class="food-badge ${foodClass}">${foodText}</span>
          <span class="med-duration-tag">Duration: ${med.duration}</span>
        </div>
      `;

      medsTimelineContainer.appendChild(card);
    });
  }

  // Render Doctor Questions
  function renderDoctorQuestions(questions) {
    doctorQuestionsContainer.innerHTML = "";

    questions.forEach((q, idx) => {
      const item = document.createElement("div");
      item.className = "doc-q-item";

      const text = currentLanguage === "hi" ? q.hi : (currentLanguage === "hinglish" ? q.hinglish : q.en);

      item.innerHTML = `
        <input type="checkbox" id="q_chk_${idx}" class="doc-q-checkbox">
        <label for="q_chk_${idx}" class="doc-q-text">${text}</label>
      `;

      doctorQuestionsContainer.appendChild(item);
    });
  }

  // Text-to-Speech (Audio Voiceover for Illiterate / Elderly Bharat)
  function speakSummary() {
    if (!('speechSynthesis' in window)) {
      alert("Text-to-Speech is not supported in this browser.");
      return;
    }

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      isSpeaking = false;
      voiceStatusBadge.style.display = "none";
      speakSummaryBtn.querySelector("span").textContent = currentLanguage === "hi" ? "🔊 हिंदी में सुनें" : "🔊 Listen to Summary";
      return;
    }

    const text = activeCaseData.overallSummary[currentLanguage] || activeCaseData.overallSummary.en;
    const utterance = new SpeechSynthesisUtterance(text);

    // Language setting
    if (currentLanguage === "hi") {
      utterance.lang = "hi-IN";
    } else {
      utterance.lang = "en-IN";
    }

    utterance.rate = 0.95; // Slightly slower for clarity
    utterance.pitch = 1.0;

    utterance.onstart = () => {
      isSpeaking = true;
      voiceStatusBadge.style.display = "inline-flex";
      voiceStatusText.textContent = currentLanguage === "hi" ? "ऑडियो व्याख्या चल रही है..." : "Playing audio explanation...";
      speakSummaryBtn.querySelector("span").textContent = "⏹️ Stop Audio";
    };

    utterance.onend = () => {
      isSpeaking = false;
      voiceStatusBadge.style.display = "none";
      speakSummaryBtn.querySelector("span").textContent = currentLanguage === "hi" ? "🔊 हिंदी में सुनें" : "🔊 Listen to Summary";
    };

    utterance.onerror = () => {
      isSpeaking = false;
      voiceStatusBadge.style.display = "none";
      speakSummaryBtn.querySelector("span").textContent = currentLanguage === "hi" ? "🔊 हिंदी में सुनें" : "🔊 Listen to Summary";
    };

    window.speechSynthesis.speak(utterance);
  }

  // Shorthand Decrypter Tool
  function decodeShorthand(input) {
    const raw = (input || "").toUpperCase().trim();
    if (!raw) return;

    let match = RX_DICTIONARY[raw];
    if (!match) {
      // Check partial tokens
      const tokens = raw.split(/[\s,+-]+/);
      let foundMatches = [];
      tokens.forEach(tok => {
        if (RX_DICTIONARY[tok]) {
          foundMatches.push(`<strong>${tok}</strong>: ${RX_DICTIONARY[tok].en} (${RX_DICTIONARY[tok].hi}) - <em>${RX_DICTIONARY[tok].hint}</em>`);
        }
      });

      if (foundMatches.length > 0) {
        quickDecodeResult.innerHTML = `
          <div style="font-size:0.875rem; line-height:1.6;">
            <div style="font-weight:700; color:#0f172a; margin-bottom:6px;">Decoded Shorthand Combination:</div>
            ${foundMatches.map(m => `<div>• ${m}</div>`).join('')}
          </div>
        `;
        return;
      }

      quickDecodeResult.innerHTML = `
        <div style="font-size:0.875rem; color:#b91c1c;">
          ⚠️ Shorthand '${raw}' not found in quick dictionary. Standard Indian shorthands include: OD, BD, TDS, AC (Before Food), PC (After Food), HS (Bedtime), 1-0-1.
        </div>
      `;
      return;
    }

    quickDecodeResult.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px;">
        <div>
          <span style="font-size:1.1rem; font-weight:800; color:#0284c7;">${raw}</span>
          <span style="font-size:0.9rem; font-weight:700; color:#0f172a; margin-left:8px;">${match.en}</span>
          <div style="font-size:0.875rem; color:#475569; margin-top:2px;">🇮🇳 हिंदी: <strong>${match.hi}</strong></div>
        </div>
        <div style="background:#dcfce7; color:#15803d; font-size:0.75rem; font-weight:700; padding:4px 10px; border-radius:999px;">
          Rule: ${match.hint}
        </div>
      </div>
    `;
  }

  // WhatsApp Schedule Simulation
  function triggerWhatsAppSimulator() {
    const data = activeCaseData;
    let message = `🏥 *SwasthyaAI Daily Health & Medicine Alert*\n`;
    message += `👤 Patient: ${data.patient.name} (${data.patient.age}Y)\n`;
    message += `📅 Date: ${data.patient.date}\n`;
    message += `--------------------------------\n`;
    message += `⚠️ *Triage Status:* ${data.triageStatus.toUpperCase()}\n`;
    message += `📝 *Summary:* ${data.overallSummary[currentLanguage] || data.overallSummary.en}\n\n`;
    message += `⏰ *YOUR DAILY MEDICINE SCHEDULE:*\n`;

    data.medications.forEach((m, idx) => {
      const decoded = currentLanguage === "hi" ? m.decoded_hi : m.decoded;
      message += `${idx + 1}. *${m.medicine}* (${m.timing})\n`;
      message += `   👉 ${decoded}\n`;
      message += `   🍽️ ${m.foodLabel}\n\n`;
    });

    message += `⚠️ *Educational triage only. Never stop medication without your doctor's approval.*`;

    whatsappMessageBubble.textContent = message;
    whatsappModal.classList.remove("hidden");
  }

  // Event Listeners
  langSelect.addEventListener("change", (e) => {
    updateLanguage(e.target.value);
  });

  ttsGlobalToggle.addEventListener("click", () => {
    ttsGlobalToggle.classList.toggle("active");
    speakSummary();
  });

  speakSummaryBtn.addEventListener("click", speakSummary);

  ashaModeBtn.addEventListener("click", () => {
    isAshaMode = !isAshaMode;
    document.body.classList.toggle("asha-mode", isAshaMode);
    ashaModeBtn.classList.toggle("active", isAshaMode);
  });

  // Sample Card click handlers
  sampleCards.forEach(card => {
    card.addEventListener("click", () => {
      loadCase(card.dataset.sample);
    });
  });

  runTriageBtn.addEventListener("click", executeTriageSimulation);

  // Tab Switching
  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const target = btn.dataset.tab;
      tabBtns.forEach(b => b.classList.remove("active"));
      tabContents.forEach(c => c.classList.remove("active"));

      btn.classList.add("active");
      document.getElementById(`tab-${target}`).classList.add("active");
    });
  });

  // Quick Shorthand Decrypter
  quickDecodeBtn.addEventListener("click", () => {
    decodeShorthand(quickDeccodeInput.value);
  });

  quickDeccodeInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      decodeShorthand(quickDeccodeInput.value);
    }
  });

  // Initial Decoder run
  decodeShorthand("1-0-1 AC");

  // File Upload Handlers
  dropZone.addEventListener("click", () => fileInput.click());
  dropZone.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropZone.classList.add("dragover");
  });
  dropZone.addEventListener("dragleave", () => dropZone.classList.remove("dragover"));
  dropZone.addEventListener("drop", (e) => {
    e.preventDefault();
    dropZone.classList.remove("dragover");
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleCustomFile(e.dataTransfer.files[0]);
    }
  });

  fileInput.addEventListener("change", (e) => {
    if (e.target.files && e.target.files[0]) {
      handleCustomFile(e.target.files[0]);
    }
  });

  cameraBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    fileInput.setAttribute("capture", "environment");
    fileInput.click();
  });

  function handleCustomFile(file) {
    previewFileName.textContent = file.name;
    uploadPreviewContainer.classList.remove("hidden");

    if (file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        uploadedImagePreview.src = ev.target.result;
      };
      reader.readAsDataURL(file);
    } else {
      uploadedImagePreview.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 24 24'><text y='20' font-size='20'>📄</text></svg>";
    }

    // Switch to active case tab and run vision pipeline
    setTimeout(() => {
      tabBtns[0].click();
      executeTriageSimulation();
    }, 900);
  }

  // WhatsApp Simulation
  whatsappSimBtn.addEventListener("click", triggerWhatsAppSimulator);
  closeWhatsappModalBtn.addEventListener("click", () => whatsappModal.classList.add("hidden"));
  dismissWhatsappBtn.addEventListener("click", () => whatsappModal.classList.add("hidden"));

  // Architecture Modal
  openArchModalBtn.addEventListener("click", () => archModal.classList.remove("hidden"));
  closeArchModalBtn.addEventListener("click", () => archModal.classList.add("hidden"));

  // Print Report
  printReportBtn.addEventListener("click", () => {
    window.print();
  });

  // Close modals on backdrop click
  window.addEventListener("click", (e) => {
    if (e.target === archModal) archModal.classList.add("hidden");
    if (e.target === whatsappModal) whatsappModal.classList.add("hidden");
  });

  // Initial Load
  loadCase("sample1");
  updateLanguage("hi");
});
