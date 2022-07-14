youtube = document.querySelectorAll('.y');
yy = document.querySelectorAll('.yy');
if(yy.length > 0){ yy.forEach( channel => { channel.innerHTML=`<img src="../IMG/youbtube.png">`;}); }
else{ youtube.forEach( channel => { channel.innerHTML=`<img src="../../IMG/youbtube.png">`; }); }