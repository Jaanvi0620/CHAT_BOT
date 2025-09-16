// ===============================
// Disease Data (50 Diseases)
// ===============================

const diseases = 
  [
  {
    "name": "Malaria",
    "symptoms": "Fever, chills, headache, sweating",
    "diagnosis": "Blood smear, rapid diagnostic tests",
    "causes": "Plasmodium parasites transmitted by Anopheles mosquitoes",
    "image": "./images/maleria.jpg"
  },
  {
    "name": "Dengue",
    "symptoms": "High fever, severe headache, pain behind eyes, joint/muscle pain, rash",
    "diagnosis": "Blood tests (NS1, IgM/IgG), PCR",
    "causes": "Dengue virus transmitted by Aedes mosquitoes",
    "image": "./images/dengue.jpg"
  },
  {
    "name": "Cholera",
    "symptoms": "Profuse watery diarrhea, vomiting, dehydration",
    "diagnosis": "Stool culture, rapid tests",
    "causes": "Vibrio cholerae from contaminated water or food",
    "image": "./images/cholera.jpg"
  },
  {
    "name": "COVID-19",
    "symptoms": "Fever, cough, shortness of breath, loss of taste/smell",
    "diagnosis": "RT-PCR, antigen tests",
    "causes": "SARS-CoV-2 virus transmitted by respiratory droplets",
    "image": "./images/covid.jpg"
  },
  {
    "name": "Tuberculosis",
    "symptoms": "Persistent cough, weight loss, night sweats, fever",
    "diagnosis": "Chest X-ray, sputum smear/culture, GeneXpert",
    "causes": "Mycobacterium tuberculosis transmitted by air",
    "image": "./images/tuber.jpg"
  },
  {
    "name": "Typhoid",
    "symptoms": "High fever, abdominal pain, headache, constipation or diarrhea",
    "diagnosis": "Blood culture, Widal test (limited)",
    "causes": "Salmonella typhi via contaminated food/water",
    "image": "./images/typhoid.jpg"
  },
  {
    "name": "Hepatitis B",
    "symptoms": "Fatigue, jaundice, dark urine, abdominal pain",
    "diagnosis": "HBsAg, anti-HBc, PCR",
    "causes": "Hepatitis B virus via blood/sexmother-child",
    "image": "./images/hepatitis.jpg"
  },
  {
    "name": "Hepatitis C",
    "symptoms": "Often asymptomatic; fatigue, jaundice, abdominal pain if chronic",
    "diagnosis": "HCV antibody, HCV RNA PCR",
    "causes": "Hepatitis C virus via blood, shared needles",
    "image":"./images/hepatitesc.jpg"
  },
  {
    "name": "Pneumonia",
    "symptoms": "Cough, fever, sputum production, shortness of breath, chest pain",
    "diagnosis": "Chest X-ray, sputum culture, blood tests",
    "causes": "Bacteria, viruses, fungi",
    "image": "./images/pneumonia.webp"
  },
  {
    "name": "Asthma",
    "symptoms": "Wheezing, cough, chest tightness, shortness of breath",
    "diagnosis": "Spirometry, peak flow, clinical history",
    "causes": "Airway inflammation from allergies, triggers, genetics",
    "image": "./images/asthma.jpg"
  },
  {
    "name": "Influenza",
    "symptoms": "Fever, sore throat, cough, fatigue",
    "diagnosis": "Rapid influenza diagnostic test",
    "causes": "Influenza virus via droplets",
    "image": "./images/influenza.png"
  },
  {
    "name": "Migraine",
    "symptoms": "Severe unilateral pulsatile headache, nausea, photophobia",
    "diagnosis": "Clinical; imaging to exclude secondary causes",
    "causes": "Neurovascular mechanisms, genetic predisposition",
    " image": "./images/migrane.png"
  },
  {
    "name": "Arthritis",
    "symptoms": "Joint pain, swelling, stiffness, reduced range of motion",
    "diagnosis": "X-ray, MRI, clinical, blood tests (inflammatory markers)",
    "causes": "Osteoarthritis: wear-and-tear; Rheumatoid: autoimmune",
    "image": "./images/arthiritis.jpg"
  },
   {
    "name": "Kidney Stones",
    "symptoms": "Severe flank pain, hematuria, nausea/vomiting",
    "diagnosis": "CT scan / ultrasound, urine analysis",
    "causes": "Crystallization of minerals (calcium oxalate, uric acid)",
    "image": "./images/kidney.jpg"
  },
  {
    "name": "Anemia",
    "symptoms": "Fatigue, pallor, shortness of breath, dizziness",
    "diagnosis": "Complete blood count (CBC), peripheral smear",
    "causes": "Iron deficiency, chronic disease, hemolysis, B12/folate deficiency",
    "image": "./images/anemia.jpg"
  }
];


module.exports = diseases;
