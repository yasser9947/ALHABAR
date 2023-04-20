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



// const questions = [
//     new Question("lorem lorem" , ["yasir" , "ali" , "Areen" , "khalid"] , 0),
//     new Question("what is my name2" , ["yasir" , "ali" , "Areen" , "khalid"] , 0),
//     new Question("what is my name3" , ["yasir" , "ali" , "Areen" , "khalid"] , 2)]

const questions =  [
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
    }
]