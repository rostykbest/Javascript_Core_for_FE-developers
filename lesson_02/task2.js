var test = prompt ('Set any number');
if (test>0){
    alert('1');
}else if(test<0){
    alert('-1');
}else{
    alert('0');
}

var login = prompt ('Who is there?');

if (login == 'Admin'){
    var password = prompt('Password?');
    if(password == 'Cancel'){
        alert('Canceled.');
    }else if(password == 'TheMaster'){
        alert('Welcome!');
    }else{
        alert('Wrong password');
    }
}else if (login == 'Cancel'){
    alert('Canceled.');
}else{
    alert('I dont know');
}

switch(login)
    {
        case 'Admin':{
            var password = prompt('Password?');
            switch(password){
                case 'TheMaster':{
                    alert('Welcome!');
                    break;
                }
                case 'Cancel':{
                    alert('Canceled');
                    break;
                }
                default:{
                    alert('Wrong Password');
                }
            }
            break;
        }
        case 'Cancel':{
            alert('Canceled');
            break;
        }
        default:{
            alert('I dont know');
        }
            
    }