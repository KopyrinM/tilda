function sort_all(){
  document.getElementById('rolex').style.display='block';
  document.getElementById('car').style.display='block';
  document.getElementById('steak').style.display='block';
  document.getElementById('morgen').style.display='block';
  document.getElementById('house').style.display='block';
  document.getElementById('kalan').style.display='block';
  {
    site.style.backgroundColor='white';
    site.style.color='black';

    all.style.backgroundColor='black';
    all.style.color='white';

    razrabotka.style.backgroundColor='white';
    razrabotka.style.color='black';

    designe.style.backgroundColor='white';
    designe.style.color='black';
  }
}

function sort_site(){
  document.getElementById('rolex').style.display='block';
  document.getElementById('car').style.display='block';
  document.getElementById('steak').style.display='none';
  document.getElementById('morgen').style.display='none';
  document.getElementById('house').style.display='none';
  document.getElementById('kalan').style.display='none';
  {
    site.style.backgroundColor='black';
    site.style.color='white';

    all.style.backgroundColor='white';
    all.style.color='black';

    razrabotka.style.backgroundColor='white';
    razrabotka.style.color='black';

    designe.style.backgroundColor='white';
    designe.style.color='black';

    
  }
}

function sort_razrabotka(){
  document.getElementById('rolex').style.display='none';
  document.getElementById('car').style.display='none';
  document.getElementById('steak').style.display='block';
  document.getElementById('morgen').style.display='block';
  document.getElementById('house').style.display='none';
  document.getElementById('kalan').style.display='none';
  {
    site.style.backgroundColor='white';
    site.style.color='black';

    all.style.backgroundColor='white';
    all.style.color='black';

    razrabotka.style.backgroundColor='black';
    razrabotka.style.color='white';

    designe.style.backgroundColor='white';
    designe.style.color='black';
  }
}

function sort_designe(){
  document.getElementById('rolex').style.display='none';
  document.getElementById('car').style.display='none';
  document.getElementById('steak').style.display='none';
  document.getElementById('morgen').style.display='none';
  document.getElementById('house').style.display='block';
  document.getElementById('kalan').style.display='block';
  {
    site.style.backgroundColor='white';
    site.style.color='black';

    all.style.backgroundColor='white';
    all.style.color='black';

    razrabotka.style.backgroundColor='white';
    razrabotka.style.color='black';

    designe.style.backgroundColor='black';
    designe.style.color='white';
  }
}



function calcular(){
  type = document.getElementById('calculating__type').value;
  switch (type){
    case "1":
      price = 250000;
      break;
    case "2":
      price = 120000;
      break;
    case "3":
      price = 50000;
      break;
    case "4":
      price = 60000;
      break;
    case "5":
      price = 1000000;
      break        
  }

  type = document.getElementById('calculating__size').value;
  switch (type){
    case "1":
      price = price+10000;
      break;
    case "2":
      price = price + 20000;
    case "3":
      price = price + 30000;
      break
    case "4":
      price = price+ 40000;
      break
    case "5":
      price = price + 50000;
      break    
  }


  document.getElementById('calculating__price').innerHTML = "От " + price + " ₽";
}



function ShowCalculating(){
  if (document.getElementById('calculating__type').value==0){
    alert('выберите пункт')
  }
  else if(document.getElementById('calculating__size').value ==0){
    alert('выберите пункт')
  }
}






const btn = document.querySelector(".btn");
const content = document.querySelector(".content");

btn.addEventListener("click", btnClick);

function btnClick() {
    console.log(content.classList);

    if (content.classList.contains("hidden")) {
        btn.textContent = "Рассчитать стоимость";
    } else {
        btn.textContent = "Рассчитать стоимость";
    }

    content.classList.toggle("hidden");
}




























































