let btn=document.getElementById('btn')
let output=document.getElementById('otxt')

btn.addEventListener('click',function(){
    let input=document.getElementById('usrip').value;
    count=0
    if(input>101){
        output.innerHTML='Invalid Input'
    }else{
    for(i=0;i<5;i++){
        let abc=[Math.floor(Math.random()*101)]
        output.innerHTML='${abc}'
        if(abc==input){
            count++
            break
        }
    };
    if(count==0){
        output.innerHTML="You won"
    }else{
        output.innerHTML="You loose"
    };
};
})