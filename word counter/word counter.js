const textarea = document.querySelector('#textbox')
const words = document.querySelector('.words')
const char = document.querySelector('.char')


textarea.addEventListener('input',function(){
    const text = this.value;
    console.log(text)
    let character = text.length ;
    char.textContent=character;
    let word = text.split(" ")
    let cleanword = word.filter(function(elm){
        return elm !="";
    })
    words.innerHTML=cleanword.length
})