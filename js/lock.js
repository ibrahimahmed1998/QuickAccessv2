function lock(file_name) {
    const pass = prompt("Enter the password");
    if(pass=="1975"){

        switch (file_name) {
            case "Drive": window.open('https://drive.google.com/drive/my-drive', '_blank');  break;
            case "Whatsapp": window.open('https://web.whatsapp.com', '_blank');  break;
            case "Gmail": window.open('https://mail.google.com/mail/u/0/#inbox', '_blank');  break;

            case "Clean":window.location.href ="https://docs.google.com/spreadsheets/d/12d5w_tAwifM6xmW6wfdgidAsyGLbRll0Rc19eOfoffU/edit#gid=866305252"; break;
            case "Expenses":window.location.href ="https://docs.google.com/spreadsheets/d/1gN_C44wSmbnsM_yTlZsGGF_-A-lzhMTK5GALl5gY5ho/edit#gid=969443077"; break;
            case "001":window.location.href ="https://docs.google.com/spreadsheets/d/1sVuvTtsRCpiZcTxU59KT1v8IPQTQd5SZtXTlLcsR7VU/edit#gid=1769405206"; break;
            case "Connection":window.location.href ="https://docs.google.com/spreadsheets/d/1fc6M84QtC5c7pUNPLdK_AT0oWBXHvMsKGMPA4-33XW4/edit";break;
            default:break;    
        }
    }
    else{  alert(" تم حظر المستخدم"); }
}     