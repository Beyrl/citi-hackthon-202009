window.onload=function(){
    let menuLeftList = [
        {title:'New Bot',iconClass:'newBot'},
        {title:'Bot Set',iconClass:'botSet'},
        {title:'Ques and Ans',iconClass:'ques'},
    ],
    homeList = [
        {id:'98980dsfs',name:'hahaBot',status:"Not Release",aTime:'2020-09-12 16:32:51',bTime:'2020-09-12 16:32:51'},
        {id:'98980dsfs',name:'hahaBot',status:"Not Release",aTime:'2020-09-12 16:32:51',bTime:'2020-09-12 16:32:51'},
        {id:'98980dsfs',name:'hahaBot',status:"Not Release",aTime:'2020-09-12 16:32:51',bTime:'2020-09-12 16:32:51'},
        {id:'98980dsfs',name:'hahaBot',status:"Not Release",aTime:'2020-09-12 16:32:51',bTime:'2020-09-12 16:32:51'},
        {id:'98980dsfs',name:'hahaBot',status:"Not Release",aTime:'2020-09-12 16:32:51',bTime:'2020-09-12 16:32:51'},
        {id:'98980dsfs',name:'hahaBot',status:"Not Release",aTime:'2020-09-12 16:32:51',bTime:'2020-09-12 16:32:51'},
        {id:'98980dsfs',name:'hahaBot',status:"Not Release",aTime:'2020-09-12 16:32:51',bTime:'2020-09-12 16:32:51'},
        {id:'98980dsfs',name:'hahaBot',status:"Not Release",aTime:'2020-09-12 16:32:51',bTime:'2020-09-12 16:32:51'},
        {id:'98980dsfs',name:'hahaBot',status:"Not Release",aTime:'2020-09-12 16:32:51',bTime:'2020-09-12 16:32:51'},
        {id:'98980dsfs',name:'hahaBot',status:"Not Release",aTime:'2020-09-12 16:32:51',bTime:'2020-09-12 16:32:51'},
        {id:'98980dsfs',name:'hahaBot',status:"Not Release",aTime:'2020-09-12 16:32:51',bTime:'2020-09-12 16:32:51'},
        {id:'98980dsfs',name:'hahaBot',status:"Not Release",aTime:'2020-09-12 16:32:51',bTime:'2020-09-12 16:32:51'},
    ];
    document.getElementById('themeDrop').addEventListener('click',chooseTheme)

    initLeftMenu();
    initHomeList();

/*<------header part---------*/
showThemeDrop = function (){
    $('#themeDrop').slideToggle();
}
function chooseTheme(e){
    console.log(e)
    let curTheme = e.target.dataset.name;
    document.getElementById('body').setAttribute("class",curTheme ) ;
    $('#themeDrop').slideUp();
}

/*<------left menu part---------*/
function initLeftMenu(){
    let listHtml = '';
    menuLeftList.forEach((item,index)=>{
        listHtml += `<li class="menuLi li${index}" data-id="${index}" onclick=clickMenuLeft()>
                        <div class="bg1">
                            <i class="menuIcon ${item.iconClass}" ></i>
                            <span class="title" >${item.title}</span>
                        </div>
                        <div class="hoverBox" data-id="${index}"></div>
                    </li>`
    })
    const listContent = document.getElementById('contentMenu');
    listContent.innerHTML = listHtml;
}
clickMenuLeft = function (id){
    let curId = id ? id : event.target.dataset.id;
    Array.from(document.getElementsByClassName('contentBox')).forEach((s,idx)=>{
        s.classList.remove('show');
        if(idx == curId){
            s.classList.add('show');
        }
    });
} 
/*<------first menu page js---------*/
function initHomeList(){
    let listHtml = '';
    homeList.forEach((item,index)=>{
        listHtml += `<tr class="tableLine">
        <th align="left"  width="10%">${item.id}</th>
        <th align="left"  width="10%">${item.name}</th>
        <th align="left"  width="20%">${item.status}</th>
        <th align="left"  width="25%">${item.aTime}</th>
        <th align="left"  width="25%">${item.bTime}</th>
        <th align="left"  width="10%"><div class="button blueBg" onclick="aEditTable()" data-id="${item.id}">Edit</div></th>
        </tr>`
    })
    const listContent = document.getElementById('aTableBodyList');
    listContent.innerHTML = listHtml;
}

/*<------second menu page js---------*/   
editName= function (e){
    console.log(event)
    event.target.previousElementSibling.lastElementChild.classList.add('hideEle');
    event.target.previousElementSibling.firstElementChild.classList.add('inpShow');
    event.target.previousElementSibling.firstElementChild.focus();
}

aEditTable = function(){
    console.log(event.target.dataset.id);
    clickMenuLeft(1)
}

AddBotInMask = function(){
    console.log(0);
    let newBotName = $('.aMaskInp').val();
    if(!newBotName){return}
    $('#mask').slideUp();
}

inpBlur = function (){
    event.target.classList.remove('inpShow');
    event.target.nextElementSibling.classList.remove('hideEle');
    event.target.nextElementSibling.innerHTML = event.target.value;
}

cancelMask=function (){
    $('#mask').slideUp();
}

addBot = function(){
    $('#mask').slideDown();
} 
}