class Question {

    question;
    options;
    currectOption;

    constructor(question,options,currectOption){
        this.question = question;
        this.options = options;
        this.currectOption = currectOption;
    }

    checkIfCurrect(option){
        if(option==this.currectOption){
            return true;
        }
        return false;
    }
}
const  questions  =  [
  {
    "question": "اختر الاجابة الاولى وتربح هذه الجولة ",
    "options":[
      "انا لست الثاني",
       "انا لست الاول",
       "كلنا اوائل",
       "انا الاخير صدقوني"
    ],
    "currectOption": null
  },{
  "question": "هل بيوت الشِِعر تنكسر",
  "options":[
    "نعم اذا كانت فقط ! مبنية على الزجاج",
     "لا هي تنهدم لا تنكسر",
     "نعم ولكن ليست دائما",
     "استسلم لا اريد الاستمرار"
  ],
  "currectOption": 0
},{
  "question": "هنالك اربعة شبان اثنين معهم عصي , الاثنان الذين معهم عصي ضربوا الذين ليس معهم عصي ضربا مبرحا , بم ان الاثنين ضربوا فكم ناتج اثنين ضرب اثنين",
  "options":[
    "اربعة",
     "اثنين",
     "اثنين واربعة",
     "اكره الرياضيات لا اريد الاستمرار"
  ],
  "currectOption": 2
},{
  "question": "هل تريد الاستمرار",
  "options":[
    "نعم",
     "لا",
     "سوف افكر",
     "ابدا"
  ],
  "currectOption": 0
},{
  "question": "  ذهب  جد وابوان و ابن الى شباك تذاكر المباريات كم عدد التذاكر التي شروها,  اقل حد ممكن بحيث الكل يملك تذكرة واحدة على الاكثر",
  "options":[
    "6",
     "5",
     "4",
     "3"
  ],
  "currectOption": 0
},{
  "question": " طبيب وسائق حافلة يحبان نفس المرأة، وهي فتاة جميلة اسمها تفاحة . كان على سائق الحافلة الذهاب في رحلة حافلة طويلة تستغرق أسبوعًا. لكن قبل أن يغادر، أعطى سارة سبع تفاحات. لماذا؟ ",
  "options":[
    "تفاحة يوميا تغنيك عن الطبيب",
     "لان اسمها تفاحة ",
     "تعبيرا عن مجموع الايام التي يقضيها",
     "لا يهمني الامر"
  ],
  "currectOption": 3
},{
  "question": "اتحداك تحلها , متى استقلت الأردن؟ ",
  "options":[
    "1964",
     "1945",
     "1954",
     "1946"//this
  ],
  "currectOption": 0
},

]


// const questions = [
//     new Question("lorem lorem" , ["yasir" , "ali" , "Areen" , "khalid"] , 0),
//     new Question("what is my name2" , ["yasir" , "ali" , "Areen" , "khalid"] , 0),
//     new Question("what is my name3" , ["yasir" , "ali" , "Areen" , "khalid"] , 2)]

const q =  [
    {
      "question": "ما هي الحيوانات التي تحتوي على أكبر عدد من الأسنان؟",
      "options":[
         "الفيل",
         "القرش",
         "الحوت الأحدب",
         "الكلب"
      ],
      "currectOption": "a"
    },
    {
      "question": "ما هي الحيوانات التي تعيش فقط في أستراليا؟",
      "options":[
         "الكنغر",
         "البومة الأسترالية",
         "الكوالا",
         "الكركدن"
      ],
      "currectOption": 0
    },
    {
      "question": "ما هو البحر الذي يحتوي على أعلى مستوى للملوحة في العالم؟",
      "options":[
         "بحر الميت",
         "بحر البلطيق",
         "بحر الأعشاب",
         "بحر اليابان"
      ],
      "currectOption": 2
    },
    {
      "question": "ما هي أعلى قمة في العالم؟",
      "options":[
         "إفرست",
         "كيليمنجارو",
         "جبل فينسون",
         "جبل ماكينلي"
      ],
      "currectOption": 0
    },
    {
      "question": "ما هي الدولة التي ينبعث منها نهر الأمازون؟",
      "options":[
         "البرازيل",
         "بيرو",
         "كولومبيا",
         "إكوادور"
      ],
      "currectOption": 0
    },
    {
      "question": "ما هو الحيوان الذي يمكنه النوم لمدة تصل إلى 3 سنوات؟",
      "options":[
         "الدببة",
         "الخفافيش",
         "السحالي",
         "السنجاب"
      ],
      "currectOption": 0
    },
    {
      "question": "ما هو عدد الكواكب في المجموعة الشمسية؟",
      "options":[
         "7",
         "9",
         "12",
         "8"
      ],
      "currectOption": 2
    },{
      "question": " ",
      "options":[
        "",
         "",
         "",
         ""
      ],
      "currectOption": null
    },
]