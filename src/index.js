module.exports = function toReadable (number) {
        if(typeof(number) == "undefined") return;
        let num1 = ['','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight','nine','ten', 'eleven','twelve','thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen' ];
        let num2 = ['','','twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
           let h = 'hundred'
    
        let result = ''
        if (number == 0)	return 'zero'
        if(Math.floor(number / 100) > 0){
            result += num1[Math.floor( number / 100)] +' '+ h
            if(number % 100 > 0){
                number = number % 100
                result += ' '
            }else return result      
        }
        if (number < 20){
            result += num1[number]
            return result
        } else{
            result += num2[Math.floor(number / 10)]
            if(number % 10 > 0){
                result += ' '+ num1[number % 10]
            } 
        }
     return result 
}
