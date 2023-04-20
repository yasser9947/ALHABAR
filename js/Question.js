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



const questions = [
    new Question("lorem lorem" , ["yasir" , "ali" , "Areen" , "khalid"] , 0),
    new Question("what is my name2" , ["yasir" , "ali" , "Areen" , "khalid"] , 0),
    new Question("what is my name3" , ["yasir" , "ali" , "Areen" , "khalid"] , 0)
]