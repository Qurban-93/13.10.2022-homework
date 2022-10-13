let btn = document.getElementById('btn');
console.log(btn);

btn.onclick = function(){
    let div = document.createElement('div')
    let div2 = document.createElement('div')
    document.body.append(div,div2);
    


    let input1 = document.createElement('input');
    let input2 = document.createElement('input');
    let input3 = document.createElement('input');
    let signin = document.createElement('button');


    input1.setAttribute('class','typein')
    input2.setAttribute('class','typein')
    input3.setAttribute('class','typein')
    input1.setAttribute('placeholder','Enter your name')
    input2.setAttribute('placeholder','Enter your surname')
    input3.setAttribute('placeholder','Enter your mail')
    input3.setAttribute('type','mail')
    div.setAttribute('class','user');
    div2.setAttribute('class','show');
    
    let info = document.createElement('h1');
    let username = document.createElement('p');
    let surname = document.createElement('p');
    let mail = document.createElement('p');
    let trashbox = document.createElement('i');

    trashbox.setAttribute('class',"fa-solid fa-trash-can");

    div2.append(info,username,surname,mail,trashbox);

    info.innerText = 'User Info Empty!'
    username.innerText = 'Ad: '
    surname.innerText = 'Soyad: '
    mail.innerHTML = 'Mail: '
    
    
    signin.setAttribute('class','sign');
    signin.innerText = 'Sign In'
    div.append(input1,input2,input3,signin);

    signin.onclick = () => {
        if(input1.value==="" || input2.value ==="" ||input3.value === ""){
            alert('Melumati bosh gondermek olmaz !');
        }else{
            div.remove();
            username.innerText+= input1.value;
            surname.innerText += input2.value;
            mail.innerHTML += input3.value;
            info.innerText = " User Added !"
            info.style.color = 'rgb(12, 253, 64)'
        }
        
    }

    trashbox.onclick = () => {
        trashbox.parentElement.remove();
    }

    
}

    