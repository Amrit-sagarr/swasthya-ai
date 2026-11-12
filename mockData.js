// SwasthyaAI - Clinical Knowledge Base & Mock Data Engine
// Designed for INNOVATHON 2026 - Team CSK (Healthcare & Social Impact)

const CLINICAL_SAMPLES = {
  sample1: {
    id: "sample1",
    title: "Liver Function Test (LFT) & Acid Reflux",
    title_hi: "लिवर फंक्शन टेस्ट (LFT) और एसिडिटी रिपोर्ट",
    title_hinglish: "Liver Function Test (LFT) aur Acidity Report",
    type: "Combined (Lab Report + Prescription)",
    patient: {
      name: "Ramesh Sharma",
      age: 48,
      gender: "Male",
      date: "12 Nov 2026",
      lab: "Dr. Lal PathLabs, Delhi",
      doctor: "Dr. A. K. Verma, MD (Medicine)"
    },
    rawInput: {
      labText: `PATIENT: Ramesh Sharma | AGE/GENDER: 48Y / M
CLINICAL PATHOLOGY - LIVER FUNCTION PROFILE
- Serum Bilirubin Total: 2.4 mg/dL   (Ref: 0.2 - 1.2 mg/dL) [HIGH]
- Direct Bilirubin: 0.9 mg/dL        (Ref: 0.0 - 0.3 mg/dL) [HIGH]
- SGPT / ALT: 68 U/L                 (Ref: 7 - 56 U/L)      [HIGH]
- SGOT / AST: 52 U/L                 (Ref: 5 - 40 U/L)      [HIGH]
- Alkaline Phosphatase: 110 U/L      (Ref: 44 - 147 U/L)    [NORMAL]
- Hemoglobin: 14.1 g/dL              (Ref: 13.0 - 17.0 g/dL)[NORMAL]
- Total Protein: 7.2 g/dL            (Ref: 6.0 - 8.3 g/dL)  [NORMAL]`,
      rxText: `Rx - Dr. A.K. Verma
1. Tab Pantocid 40mg (OD AC) x 14 days
2. Tab Metformin 500mg (BD PC) x 30 days
3. Tab Udiliv 300mg (BD PC) x 15 days`
    },
    triageStatus: "alert", // normal, warning, alert
    overallSummary: {
      en: "Alert: Elevated liver enzymes detected (Bilirubin & SGPT). Your liver is under mild stress or inflammation. Prompt medical review recommended.",
      hi: "चेतावनी: आपके लिवर एंजाइम (बिलिरुबिन और SGPT) बढ़े हुए हैं। लिवर पर हल्का सूजन या दबाव है। डॉक्टर से परामर्श अनिवार्य है।",
      hinglish: "Alert: Aapka Liver enzymes (Bilirubin & SGPT) badha hua hai. Liver pe halka stress hai. Apne doctor se turant consult karein."
    },
    biomarkers: [
      {
        name: "Serum Bilirubin (Total)",
        name_hi: "सीरम बिलिरुबिन (कुल)",
        value: 2.4,
        unit: "mg/dL",
        refLow: 0.2,
        refHigh: 1.2,
        status: "alert", // alert, warning, normal
        statusLabel: "Critical High (2.4 mg/dL)",
        statusLabel_hi: "अत्यधिक बढ़ा हुआ (2.4 mg/dL)",
        meaning_en: "Bilirubin is a yellow pigment produced during breakdown of red blood cells. High levels indicate impaired liver excretion or bile duct congestion (early jaundice sign).",
        meaning_hi: "बिलिरुबिन रक्त में बनने वाला पीला तत्व है। इसका बढ़ना यह दर्शाता है कि लिवर इसे ठीक से छान नहीं पा रहा है (पीलिया या लिवर तनाव का संकेत)।",
        meaning_hinglish: "Bilirubin khoon ka peela tatva hai. Iska level badhna matlab liver theek se filter nahi kar pa raha (Jaundice ka shuruati sanket)."
      },
      {
        name: "SGPT / ALT (Alanine Aminotransferase)",
        name_hi: "एसजीपीटी / एएलटी एंजाइम",
        value: 68,
        unit: "U/L",
        refLow: 7,
        refHigh: 56,
        status: "alert",
        statusLabel: "Elevated (68 U/L)",
        statusLabel_hi: "बढ़ा हुआ (68 U/L)",
        meaning_en: "An enzyme found mainly in liver cells. Leakage into the bloodstream points to liver cell irritation or fatty liver changes.",
        meaning_hi: "यह एंजाइम मुख्य रूप से लिवर कोशिकाओं में होता है। इसका रक्त में बढ़ना लिवर में सूजन या फैटी लिवर का संकेत है।",
        meaning_hinglish: "Ye enzyme liver cells me hota hai. Blood me iska badhna liver swelling ya fatty liver ki taraf ishara karta hai."
      },
      {
        name: "SGOT / AST (Aspartate Aminotransferase)",
        name_hi: "एसजीओटी / एएसटी एंजाइम",
        value: 52,
        unit: "U/L",
        refLow: 5,
        refHigh: 40,
        status: "warning",
        statusLabel: "Borderline High (52 U/L)",
        statusLabel_hi: "हल्का बढ़ा हुआ (52 U/L)",
        meaning_en: "Mild elevation consistent with general hepatic strain. Should be monitored alongside SGPT.",
        meaning_hi: "सामान्य लिवर तनाव के कारण हल्का बढ़ा हुआ है। डॉक्टर की सलाह से आहार में चिकनाई कम करें।",
        meaning_hinglish: "Halka badha hua hai jo liver pe strain dikhata hai. Diet me tel-masala kam karein."
      },
      {
        name: "Hemoglobin (Hb)",
        name_hi: "हीमोग्लोबिन (खून की मात्रा)",
        value: 14.1,
        unit: "g/dL",
        refLow: 13.0,
        refHigh: 17.0,
        status: "normal",
        statusLabel: "Optimal Healthy (14.1 g/dL)",
        statusLabel_hi: "एकदम सामान्य और स्वस्थ (14.1 g/dL)",
        meaning_en: "Oxygen-carrying capacity of blood is in the optimal range. No signs of anemia.",
        meaning_hi: "रक्त में ऑक्सीजन ले जाने की क्षमता पूरी तरह सामान्य है। खून की कमी (एनीमिया) नहीं है।",
        meaning_hinglish: "Blood me oxygen carry karne ki kshamata normal hai. Khoon ki koi kami nahi hai."
      },
      {
        name: "Alkaline Phosphatase (ALP)",
        name_hi: "एल्कलाइन फॉस्फेटेज",
        value: 110,
        unit: "U/L",
        refLow: 44,
        refHigh: 147,
        status: "normal",
        statusLabel: "Normal (110 U/L)",
        statusLabel_hi: "सामान्य (110 U/L)",
        meaning_en: "Within safe parameters. Indicates no major bile obstruction or bone pathology.",
        meaning_hi: "पूरी तरह सामान्य सीमा के भीतर है।",
        meaning_hinglish: "Bile ducts aur bones normal range me hain."
      }
    ],
    medications: [
      {
        medicine: "Pantocid 40mg",
        generic: "Pantoprazole 40mg",
        shorthand: "OD AC",
        decoded: "Once daily, empty stomach before breakfast",
        decoded_hi: "दिन में 1 बार, सुबह नाश्ते से आधा घंटा पहले खाली पेट",
        decoded_hinglish: "Din me 1 baar, subah nashte se pehle khali pet",
        purpose: "Reduces stomach acid, protects liver & stomach lining",
        purpose_hi: "पेट में गैस और एसिडिटी को रोकता है",
        timing: "07:30 AM",
        foodRelation: "before_food",
        foodLabel: "Empty Stomach (Before Breakfast)",
        foodLabel_hi: "खाली पेट (नाश्ते से पहले)",
        duration: "14 Days",
        icon: "pill"
      },
      {
        medicine: "Metformin 500mg",
        generic: "Metformin Hydrochloride",
        shorthand: "BD PC",
        decoded: "Twice daily, after morning & night meals",
        decoded_hi: "दिन में 2 बार, सुबह नाश्ते और रात के खाने के बाद",
        decoded_hinglish: "Din me 2 baar, subah breakfast aur raat dinner ke baad",
        purpose: "Regulates blood glucose sensitivity",
        purpose_hi: "शुगर और मेटाबॉलिज्म को नियंत्रित करता है",
        timing: "08:30 AM & 08:30 PM",
        foodRelation: "after_food",
        foodLabel: "After Meals (Breakfast & Dinner)",
        foodLabel_hi: "भोजन के बाद (नाश्ता और रात का खाना)",
        duration: "30 Days",
        icon: "tablet"
      },
      {
        medicine: "Udiliv 300mg",
        generic: "Ursodeoxycholic Acid",
        shorthand: "BD PC",
        decoded: "Twice daily after meals",
        decoded_hi: "दिन में 2 बार, भोजन के बाद लिवर एंजाइम सुधारने हेतु",
        decoded_hinglish: "Din me 2 baar, khane ke baad liver theek karne ke liye",
        purpose: "Dissolves bile acids, assists liver recovery",
        purpose_hi: "लिवर से बाइल एसिड को साफ करता है",
        timing: "08:30 AM & 08:30 PM",
        foodRelation: "after_food",
        foodLabel: "After Meals",
        foodLabel_hi: "भोजन के बाद",
        duration: "15 Days",
        icon: "capsule"
      }
    ],
    doctorQuestions: [
      {
        en: "Should we repeat the Liver Function Test (LFT) after 2 to 3 weeks?",
        hi: "क्या मुझे 2 से 3 हफ़्ते बाद लिवर फंक्शन टेस्ट दोबारा करवाना चाहिए?",
        hinglish: "Kya 2-3 hafte baad LFT test dobara repeat karna padega?"
      },
      {
        en: "Do I need an abdominal ultrasound (USG) to rule out fatty liver or gallstones?",
        hi: "क्या फैटी लिवर या पित्त की थैली की पथरी देखने के लिए पेट का अल्ट्रासाउंड कराना ज़रूरी है?",
        hinglish: "Kya fatty liver check karne ke liye Ultrasound karwana chahiye?"
      },
      {
        en: "Are there any dietary restrictions on oils, dairy, or proteins during recovery?",
        hi: "रिकवरी के दौरान क्या मुझे तेल, घी, या किसी खास खाने से परहेज रखना है?",
        hinglish: "Khaane me tel, ghee ya spices ka kitna parhez rakhna hai?"
      }
    ]
  },

  sample2: {
    id: "sample2",
    title: "Diabetic & Lipid Cardiovascular Profile",
    title_hi: "डायबिटीज और कोलेस्ट्रॉल (हृदय सुरक्षा) रिपोर्ट",
    title_hinglish: "Diabetes aur Cholesterol Report",
    type: "Combined (Lab Report + Prescription)",
    patient: {
      name: "Sunita Devi",
      age: 56,
      gender: "Female",
      date: "10 Nov 2026",
      lab: "Thyrocare Technologies, Lucknow",
      doctor: "Dr. Meenakshi Sundaram, Diabetologist"
    },
    rawInput: {
      labText: `PATIENT: Sunita Devi | AGE/GENDER: 56Y / F
METABOLIC & LIPID HEALTH PANEL
- HbA1c (Glycated Hb): 9.2 %         (Ref: < 5.7 % Normal; > 6.5 % Diabetic) [ALERT HIGH]
- Fasting Blood Sugar: 188 mg/dL    (Ref: 70 - 100 mg/dL)                  [ALERT HIGH]
- Post Prandial Sugar: 274 mg/dL    (Ref: < 140 mg/dL)                     [ALERT HIGH]
- Serum Triglycerides: 240 mg/dL    (Ref: < 150 mg/dL)                     [BORDERLINE HIGH]
- Total Cholesterol: 218 mg/dL      (Ref: < 200 mg/dL)                     [BORDERLINE HIGH]
- HDL (Good Cholesterol): 38 mg/dL  (Ref: > 50 mg/dL)                      [LOW]
- Serum Creatinine: 0.9 mg/dL       (Ref: 0.6 - 1.2 mg/dL)                 [NORMAL]`,
      rxText: `Rx - Dr. M. Sundaram
1. Tab Glycomet GP 1 Forte (1-0-1 PC) x 30 days
2. Tab Atorva 20mg (0-0-1 HS) x 30 days
3. Tab Ecosprin 75mg (0-1-0 PC) x 30 days`
    },
    triageStatus: "alert",
    overallSummary: {
      en: "Critical Alert: High HbA1c (9.2%) and elevated fasting sugars show unmanaged diabetes. High triglycerides also present cardiovascular risk. Immediate medication adherence needed.",
      hi: "गंभीर चेतावनी: आपका HbA1c (9.2%) और ब्लड शुगर काफी अधिक है जो अनियंत्रित शुगर दर्शाता है। कोलेस्ट्रॉल भी बढ़ा हुआ है। समय पर दवा लेना अति आवश्यक है।",
      hinglish: "Critical Alert: HbA1c (9.2%) aur sugar bahut high hai. Cholesterol bhi badha hua hai. Medicines time par lena behad zaroori hai."
    },
    biomarkers: [
      {
        name: "HbA1c (3-Month Sugar Average)",
        name_hi: "एचबीए1सी (3 महीने का औसत शुगर)",
        value: 9.2,
        unit: "%",
        refLow: 4.0,
        refHigh: 6.5,
        status: "alert",
        statusLabel: "Severe High (9.2%)",
        statusLabel_hi: "काफी अधिक (9.2%)",
        meaning_en: "Average blood sugar over the last 90 days is critically elevated. Significantly increases risk of diabetic neuropathy and retinal strain.",
        meaning_hi: "पिछले 3 महीनों में शुगर का औसत स्तर 9.2% रहा है जो बहुत अधिक है। इससे नसों और आँखों पर प्रभाव पड़ सकता है।",
        meaning_hinglish: "Pichle 3 mahine ka average sugar bahut high hai. Turant control karna zaroori hai."
      },
      {
        name: "Fasting Blood Sugar (FBS)",
        name_hi: "खाली पेट ब्लड शुगर",
        value: 188,
        unit: "mg/dL",
        refLow: 70,
        refHigh: 100,
        status: "alert",
        statusLabel: "Critical High (188 mg/dL)",
        statusLabel_hi: "अत्यधिक बढ़ा (188 mg/dL)",
        meaning_en: "Your morning baseline glucose before any meal is elevated beyond safe thresholds.",
        meaning_hi: "सुबह खाली पेट शुगर 188 है, जो सामान्य 100 से काफी ज्यादा है।",
        meaning_hinglish: "Khali pet sugar 188 mg/dL hai, jo normal se kaafi zyada hai."
      },
      {
        name: "Serum Triglycerides",
        name_hi: "सीरम ट्राइग्लिसराइड्स (फैट)",
        value: 240,
        unit: "mg/dL",
        refLow: 50,
        refHigh: 150,
        status: "warning",
        statusLabel: "Borderline High (240 mg/dL)",
        statusLabel_hi: "बढ़ा हुआ (240 mg/dL)",
        meaning_en: "Excess blood lipids linked with refined carbohydrate intake. Requires low-sugar, low-oil diet and exercise.",
        meaning_hi: "रक्त में वसा (फैट) बढ़ा हुआ है। मीठा और तला-भुना खाना कम करें।",
        meaning_hinglish: "Khoon me fat badha hua hai. Meetha aur oily khana band karein."
      },
      {
        name: "Serum Creatinine (Kidney Function)",
        name_hi: "सीरम क्रिएटिनिन (किडनी की जांच)",
        value: 0.9,
        unit: "mg/dL",
        refLow: 0.6,
        refHigh: 1.2,
        status: "normal",
        statusLabel: "Healthy Kidney (0.9 mg/dL)",
        statusLabel_hi: "किडनी सुरक्षित (0.9 mg/dL)",
        meaning_en: "Kidneys are filtering blood wastes normally despite the high sugar levels.",
        meaning_hi: "किडनी की कार्यक्षमता सामान्य है। शुगर से किडनी पर अभी बुरा असर नहीं पड़ा है।",
        meaning_hinglish: "Kidney abhi bilkul safe hai aur normal kaam kar rahi hai."
      }
    ],
    medications: [
      {
        medicine: "Glycomet GP 1 Forte",
        generic: "Metformin 1000mg + Glimepiride 1mg",
        shorthand: "1-0-1 PC",
        decoded: "Twice daily: 1 tab morning & 1 tab night after food",
        decoded_hi: "दिन में 2 बार: 1 गोली सुबह और 1 गोली रात भोजन के बाद",
        decoded_hinglish: "1 goli subah aur 1 goli raat khane ke baad",
        purpose: "Reduces blood glucose spikes",
        purpose_hi: "ब्लड शुगर को नियंत्रित करने के लिए",
        timing: "08:30 AM & 08:30 PM",
        foodRelation: "after_food",
        foodLabel: "After Breakfast & Dinner",
        foodLabel_hi: "नाश्ते और रात के खाने के बाद",
        duration: "30 Days",
        icon: "tablet"
      },
      {
        medicine: "Ecosprin 75mg",
        generic: "Aspirin 75mg Gastro-resistant",
        shorthand: "0-1-0 PC",
        decoded: "Once daily at afternoon lunch after food",
        decoded_hi: "दिन में 1 बार दोपहर के खाने के बाद",
        decoded_hinglish: "Dopahar ke khane ke baad 1 goli",
        purpose: "Blood thinner to prevent cardiac clotting",
        purpose_hi: "खून को पतला रखकर दिल का दौरा रोकने हेतु",
        timing: "01:30 PM",
        foodRelation: "after_food",
        foodLabel: "After Lunch (Do NOT take on empty stomach)",
        foodLabel_hi: "दोपहर के खाने के बाद (खाली पेट कभी न लें)",
        duration: "30 Days",
        icon: "pill"
      },
      {
        medicine: "Atorva 20mg",
        generic: "Atorvastatin 20mg",
        shorthand: "0-0-1 HS",
        decoded: "Once daily at bedtime before sleep",
        decoded_hi: "दिन में 1 बार रात को सोने से पहले",
        decoded_hinglish: "Raat ko sone se pehle 1 goli",
        purpose: "Controls liver cholesterol synthesis overnight",
        purpose_hi: "कोलेस्ट्रॉल और ट्राइग्लिसराइड्स कम करने के लिए",
        timing: "10:00 PM",
        foodRelation: "bedtime",
        foodLabel: "Bedtime (Before Sleep)",
        foodLabel_hi: "रात को सोने से ठीक पहले",
        duration: "30 Days",
        icon: "capsule"
      }
    ],
    doctorQuestions: [
      {
        en: "Given HbA1c is 9.2%, do I need insulin initiation or can oral medication manage it?",
        hi: "चूंकि HbA1c 9.2% है, क्या मुझे इंसुलिन की ज़रूरत है या गोलियों से नियंत्रित हो जाएगा?",
        hinglish: "Kya itne high sugar me insulin lena padega ya tablets kaafi hain?"
      },
      {
        en: "What should I do immediately if I experience dizziness or cold sweats (hypoglycemia)?",
        hi: "अगर चक्कर आए या ठंडा पसीना छूटे (लो शुगर हो) तो मुझे तुरंत क्या करना चाहिए?",
        hinglish: "Agar achanak ghabrahat ya low sugar lage to turant kya khana chahiye?"
      },
      {
        en: "When should I get a dilated retinal eye exam and urine microalbumin check?",
        hi: "आँखों और पेशाब की माइक्रोएल्ब्यूमिन जांच कब करवानी चाहिए?",
        hinglish: "Aankhon aur kidney ki advance testing kab karwayein?"
      }
    ]
  },

  sample3: {
    id: "sample3",
    title: "Complete Blood Count (CBC) - Dengue & Platelet Watch",
    title_hi: "कम्प्लीट ब्लड काउंट (CBC) - डेंगू व प्लेटलेट अलर्ट",
    title_hinglish: "CBC Blood Report - Dengue & Platelet Alert",
    type: "Diagnostic Pathology Report",
    patient: {
      name: "Aman Gupta",
      age: 23,
      gender: "Male",
      date: "11 Nov 2026",
      lab: "Agra Diagnostic Centre & Pathology",
      doctor: "Dr. R. S. Chauhan, MD"
    },
    rawInput: {
      labText: `PATIENT: Aman Gupta | AGE/GENDER: 23Y / M
HEMATOLOGY - COMPLETE BLOOD PICTURE (CBC)
- Platelet Count: 42,000 /µL        (Ref: 150,000 - 450,000 /µL) [CRITICAL LOW]
- Total Leukocyte Count (WBC): 3,200 /µL (Ref: 4,000 - 11,000 /µL) [LOW]
- Hemoglobin: 12.8 g/dL              (Ref: 13.0 - 17.0 g/dL)      [MILD LOW]
- Packed Cell Volume (PCV): 46 %     (Ref: 40 - 50 %)             [HIGH NORMAL]
- Dengue NS1 Antigen: POSITIVE       (Ref: Negative)              [ALERT]`,
      rxText: `Rx - Dr. R. S. Chauhan
1. Tab Dolo 650mg (SOS for fever > 100°F, max 3/day)
2. Tab Caripill (1-1-1 PC) x 5 days
3. ORS Solution 2 Litres daily`
    },
    triageStatus: "alert",
    overallSummary: {
      en: "Emergency Alert: Platelet count has dropped to 42,000/µL (Critically Low). Dengue NS1 positive. Immediate hospitalization or physician monitoring required. Do not take Ibuprofen or Aspirin.",
      hi: "आपातकालीन चेतावनी: प्लेटलेट काउंट घटकर 42,000 रह गया है (अत्यधिक कम)। डेंगू पॉजिटिव है। तुरंत डॉक्टर से संपर्क करें या अस्पताल में भर्ती हों। एस्पिरिन या ब्रूफेन कभी न लें।",
      hinglish: "Emergency Alert: Platelets sirf 42,000 bachi hain (Bahut kam). Dengue positive hai. Turant doctor ya hospital jayein. Disprin/Brufen bilkul na lein."
    },
    biomarkers: [
      {
        name: "Platelet Count",
        name_hi: "प्लेटलेट काउंट",
        value: 42000,
        unit: "/µL",
        refLow: 150000,
        refHigh: 450000,
        status: "alert",
        statusLabel: "Critical Danger (42,000 /µL)",
        statusLabel_hi: "खतरे का निशान (42,000 /µL)",
        meaning_en: "Platelets enable blood clotting. A drop below 50,000 puts the body at severe risk of internal hemorrhage or bleeding gums.",
        meaning_hi: "प्लेटलेट्स खून को जमने में मदद करती हैं। 50,000 से कम होना खतरनाक है। मसूड़ों से खून या लाल चकत्ते दिखने पर तुरंत अस्पताल जाएं।",
        meaning_hinglish: "Platelet 50,000 se kam hona dangerous hai. Internal bleeding ka khatra rehta hai. Doctor ko turant dikhayein."
      },
      {
        name: "White Blood Cells (WBC Count)",
        name_hi: "सफेद रक्त कणिकाएं (WBC)",
        value: 3200,
        unit: "/µL",
        refLow: 4000,
        refHigh: 11000,
        status: "warning",
        statusLabel: "Low Leukocytes (3,200 /µL)",
        statusLabel_hi: "कम प्रतिरोधक क्षमता (3,200 /µL)",
        meaning_en: "Low WBC reflects acute viral suppression of immune system typical in dengue infections.",
        meaning_hi: "प्रतिरोधक क्षमता कम है, जो वायरल या डेंगू संक्रमण में सामान्य है।",
        meaning_hinglish: "Immunity cells viral infection ki wajah se kam hue hain."
      },
      {
        name: "Hematocrit / PCV",
        name_hi: "हेमाटोक्रिट / पीसीवी (रक्त गाढ़ापन)",
        value: 46,
        unit: "%",
        refLow: 40,
        refHigh: 50,
        status: "warning",
        statusLabel: "High Normal (46%)",
        statusLabel_hi: "रक्त में गाढ़ापन (46%)",
        meaning_en: "Elevated PCV with falling platelets points to hemoconcentration. Strict hydration with fluids/ORS is required.",
        meaning_hi: "खून में पानी की कमी (डिहाइड्रेशन) का संकेत। ओआरएस और तरल पदार्थ खूब पिएं।",
        meaning_hinglish: "Body me paani ki kami ho rahi hai. ORS aur coconut water zyada se zyada piyein."
      }
    ],
    medications: [
      {
        medicine: "Caripill (Papaya Leaf Extract)",
        generic: "Carica Papaya Extract 1100mg",
        shorthand: "1-1-1 PC",
        decoded: "Thrice daily: 1 tab morning, noon, and night after meals",
        decoded_hi: "दिन में 3 बार: सुबह, दोपहर, रात भोजन के बाद",
        decoded_hinglish: "Subah, dopahar aur raat ko khane ke baad",
        purpose: "Supports natural platelet production",
        purpose_hi: "प्लेटलेट बढ़ाने में सहायक",
        timing: "08:30 AM, 02:00 PM, 08:30 PM",
        foodRelation: "after_food",
        foodLabel: "After Food",
        foodLabel_hi: "भोजन के बाद",
        duration: "5 Days",
        icon: "tablet"
      },
      {
        medicine: "Dolo 650mg",
        generic: "Paracetamol 650mg",
        shorthand: "SOS",
        decoded: "Only as needed for high fever (>100°F). Max 3 tabs/day. Keep gap of 6 hrs.",
        decoded_hi: "सिर्फ तेज बुखार (100°F से अधिक) होने पर ही लें। 24 घंटे में अधिकतम 3 बार।",
        decoded_hinglish: "Sirf tez bukhar hone par lein. Din me 3 se zyada na lein.",
        purpose: "Safe fever relief in dengue (Never take Aspirin/Brufen)",
        purpose_hi: "बुखार उतारने के लिए सुरक्षित दवा",
        timing: "As needed (SOS)",
        foodRelation: "after_food",
        foodLabel: "Only when fever > 100°F",
        foodLabel_hi: "केवल बुखार होने पर",
        duration: "As needed",
        icon: "pill"
      },
      {
        medicine: "Electral ORS Solution",
        generic: "Oral Rehydration Salts",
        shorthand: "Daily 2 Litres",
        decoded: "Sip continuously throughout the day to prevent plasma leakage",
        decoded_hi: "पूरे दिन में 2 लीटर पानी में घोलकर घूंट-घूंट पिएं",
        decoded_hinglish: "Dinbhar me 2 litre ghol kar thoda thoda peete rahein",
        purpose: "Maintains blood volume and critical electrolytes",
        purpose_hi: "डिहाइड्रेशन से बचाने और इलेक्ट्रोलाइट्स बनाए रखने के लिए",
        timing: "Throughout the Day",
        foodRelation: "anytime",
        foodLabel: "Continuous Hydration",
        foodLabel_hi: "लगातार घूंट-घूंट पिएं",
        duration: "Until recovery",
        icon: "drink"
      }
    ],
    doctorQuestions: [
      {
        en: "Do I need immediate hospital admission for intravenous (IV) fluid management or platelet transfusion?",
        hi: "क्या मुझे ड्रिप चढ़ाने या प्लेटलेट चढ़ाने के लिए तुरंत अस्पताल में भर्ती होना पड़ेगा?",
        hinglish: "Kya turant hospital me admit hone ya platelet chadhane ki zaroorat hai?"
      },
      {
        en: "How frequently should we monitor the complete blood count (CBC) — every 12 or 24 hours?",
        hi: "प्लेटलेट की जांच कितने अंतराल पर करवानी है — हर 12 घंटे या 24 घंटे में?",
        hinglish: "CBC test kitni der baad dobara karwana chahiye?"
      },
      {
        en: "What warning signs (black stools, petechial rash, severe stomach pain) should prompt emergency ER arrival?",
        hi: "कौन से गंभीर लक्षण दिखने पर तुरंत इमरजेंसी में भागना चाहिए?",
        hinglish: "Kaun se warning signs aane par turant emergency jana hoga?"
      }
    ]
  }
};

// Prescription Abbreviations Dictionary (Indian Clinical Context)
const RX_DICTIONARY = {
  "OD": { en: "Once Daily", hi: "दिन में एक बार", hint: "Take 1 time per day" },
  "BD": { en: "Twice Daily", hi: "दिन में दो बार", hint: "Take 2 times per day (Morning & Night)" },
  "TDS": { en: "Thrice Daily", hi: "दिन में तीन बार", hint: "Take 3 times per day (Morning, Noon, Night)" },
  "QID": { en: "Four Times Daily", hi: "दिन में चार बार", hint: "Every 6 hours" },
  "AC": { en: "Before Meals (Ante Cibum)", hi: "खाली पेट (भोजन से पहले)", hint: "Take 30 mins before food" },
  "PC": { en: "After Meals (Post Cibum)", hi: "भोजन के बाद", hint: "Take within 30 mins after food" },
  "HS": { en: "At Bedtime (Hora Somni)", hi: "रात को सोने से पहले", hint: "Take right before sleeping" },
  "SOS": { en: "As Needed (Si Opus Sit)", hi: "ज़रूरत पड़ने पर ही", hint: "Take only if symptom/fever occurs" },
  "STAT": { en: "Immediately (Statim)", hi: "तुरंत", hint: "Emergency single dose" },
  "1-0-1": { en: "Morning & Night", hi: "सुबह और रात", hint: "Skip afternoon" },
  "1-0-0": { en: "Morning Only", hi: "सिर्फ सुबह", hint: "Breakfast time" },
  "0-1-0": { en: "Afternoon Only", hi: "सिर्फ दोपहर", hint: "Lunch time" },
  "0-0-1": { en: "Night Only", hi: "सिर्फ रात", hint: "Dinner/Bedtime" },
  "1-1-1": { en: "Morning, Noon & Night", hi: "सुबह, दोपहर और रात", hint: "Three times daily" }
};

if (typeof window !== "undefined") {
  window.CLINICAL_SAMPLES = CLINICAL_SAMPLES;
  window.RX_DICTIONARY = RX_DICTIONARY;
}
