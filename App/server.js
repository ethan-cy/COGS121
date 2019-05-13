const express = require('express');
const app = express();

app.use(express.static('static_files'));

// const fakeData = {
//     'Vicodin': {Indiction: 'Management of pain severe enough to require an opioid analgesic and for which alternative treatments are inadequate.',
//                 Dosage:  'Give every 4–6hrs as needed. Initially 1–2 tabs of 5mg/300mg (max 8 tabs/day) or 1 tab of 7.5mg/300mg or 10mg/300mg (max 6 tabs/day).'},
//     'Synthroid': {Indiction: 'As adjunct to surgery and radioiodine therapy for thyrotropin-dependent well-differentiated thyroid cancer.', 
//                 Dosage: 'Take in AM on empty stomach, ½ to 1hr before breakfast.'},
//     'Lipitor': {Indiction: 'Adjunct to diet in primary hypercholesterolemia (heterozygous familial and nonfamilial) and mixed dyslipidemia (Types IIa and IIb) to reduce total-C, LDL-C, apo B and TG, and to increase HDL-C.', 
//                 Dosage: 'Heterozygous and Types IIa and IIb: initially 10 or 20mg once daily; if more than a 45% reduction in LDL-C is needed, may start at 40mg once daily; range 10–80mg once daily.'},
//     'Norvasc': {Indiction: 'Vasospastic and chronic stable angina.', 
//                 Dosage: '10mg once daily. Elderly or hepatic impairment: 5mg once daily.'},
//     'Amoxicillin': {Indiction: 'Susceptible infections including ear/nose/throat (ENT), genitourinary tract, skin and skin structures, lower respiratory, acute uncomplicated gonorrhea.', 
//                     Dosage: '>40kg: ENT: mild/moderate: 500mg every 12hrs; severe: 875mg every 12hrs.'},
//     'Hydrochlorothiazide': {Indiction: 'Edema.',    
//                             Dosage: '25–100mg daily in single or divided doses; may give on intermittent schedule (every other day or 3–5 days/wk).'},
//     'Zocor': {Indiction: 'Adjunct to diet when response to nondrug therapy is inadequate.', 
//             Dosage: ' Initially 10–20mg once daily in the PM; if patient is high risk of CHD event: initially 40mg/day; range 5–40mg/day; monitor lipids after 4 weeks and periodically thereafter.'},
//     'Lisinopril': {Indiction: 'Hypertension', 
//                     Dosage: ' Initially 10mg/12.5mg or 20mg/12.5mg. Wait 2–3 weeks before increasing HCTZ dose. Max 80mg/50mg daily. CrCl <30mL/min: not recommended.'},
//     'Azasite': {Indiction: 'Susceptible bacterial conjunctivitis.', 
//                 Dosage: '1 drop in affected eye(s) twice daily (8–12hrs apart) for 2 days then once daily for the next 5 days.'},
//     'Metformin': {Indiction: 'Adjunct to diet and exercise to improve glycemic control in adults with type 2 diabetes.', 
//                 Dosage: 'Give in divided doses with meals. Drug-naive: initially 2mg/500mg once or twice daily; may increase by 2mg/500mg per day after 4 weeks; max 8mg/2000mg per day.'},
// };

// app.get('/drugName', (req, res) => {
//     const allDrugName = Object.keys(fakeData);
//     res.send(allDrugName);
// });

// app.get('/drugName/:drugid', (req, res) => {
//     const nameToLookup = req.params.drugid;
//     const val = fakeData[nameToLookup];
//     if (val){
//         res.send(val);
//     } else{
//         res.send({});
//     }
// });

app.listen(3000, () => {
    console.log('Server started at http://localhost:3000/');
});