let win=document.getElementById("winner");
let member1=document.getElementById("member1");
let member2=document.getElementById("member2");
let member3=document.getElementById("member3");
let button=document.getElementById("roll");


button.addEventListener('click',function(){
    let n1=Math.floor(Math.random()*6)+1;
    let n2=Math.floor(Math.random()*6)+1;
    let n3=Math.floor(Math.random()*6)+1;

    member1.textContent=n1;
    member2.textContent=n2;
    member3.textContent=n3;

    if((n1>n2)&&(n1>n3)){
        win.textContent="Member1 Won!!!";
        member1.style.backgroundColor="green";

        if (n2>n3){
            member2.style.backgroundColor="yellow";
            member3.style.backgroundColor="red";
        }else if(n3>n2){
            member3.style.backgroundColor="yellow";
            member2.style.backgroundColor="red";
        }else{
            member2.style.backgroundColor="blue";
            member3.style.backgroundColor="blue";
        }
    }else if((n2>n1)&&(n2>n3)){
        win.textContent="Member2 Won!!!";
        member2.style.backgroundColor="green";

        if (n1>n3){
            member1.style.backgroundColor="yellow";
            member3.style.backgroundColor="red";
        }else if(n3>n1){
            member3.style.backgroundColor="yellow";
            member1.style.backgroundColor="red";
        }else{
            member1.style.backgroundColor="blue";
            member3.style.backgroundColor="blue";
        }
    }else if((n3>n1)&&(n3>n2)){
        win.textContent="Member3 Won!!!";
        member3.style.backgroundColor="green";

        if (n1>n2){
            member1.style.backgroundColor="yellow";
            member2.style.backgroundColor="red";
        }else if(n2>n1){
            member2.style.backgroundColor="yellow";
            member1.style.backgroundColor="red";
        }else{
            member1.style.backgroundColor="blue";
            member2.style.backgroundColor="blue";
        }
    }else if((n1==n2)&&(n1>n3)){
        win.textContent="Member1 and Member2 Won!!!";
        member1.style.backgroundColor="green";
        member2.style.backgroundColor="green";
        member3.style.backgroundColor="red";
    }else if((n2==n3)&&(n2>n1)){
        win.textContent="Member2 and Member3 Won!!!";
        member2.style.backgroundColor="green";
        member3.style.backgroundColor="green";
        member1.style.backgroundColor="red";
    }else if((n1==n3)&&(n1>n2)){
        win.textContent="Member1 and Member3 Won!!!";
        member1.style.backgroundColor="green";
        member3.style.backgroundColor="green";
        member2.style.backgroundColor="red";
    }else if((n1==n2)&&(n1==n3)){
        win.textContent="3Way Tie!!!";
        member1.style.backgroundColor="blue";
        member2.style.backgroundColor="blue";
        member3.style.backgroundColor="blue";
    }
})