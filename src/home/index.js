window.onload=function(){
    let menuLeftList = [
        {title:'New Bot',iconClass:'newBot'},
        {title:'Bot Set',iconClass:'botSet'},
        {title:'Ques and Ans',iconClass:'ques'},
    ];
    document.getElementById('setTheme').addEventListener('click',showThemeDrop)
    document.getElementById('themeDrop').addEventListener('click',chooseTheme)

    initPage();


    function initPage(){
        let listHtml = '';
        menuLeftList.forEach((item,index)=>{
            listHtml += `<li class="menuLi" data-id="${index}" onclick=clickMenuLeft()>
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

    function showThemeDrop(){

    }

    editName= function (e){
        console.log(event)
        event.target.previousElementSibling.lastElementChild.classList.add('hideEle');
        event.target.previousElementSibling.firstElementChild.classList.add('inpShow');
        event.target.previousElementSibling.firstElementChild.focus();
    }

    function chooseTheme(e){
        console.log(e)
        let curTheme = e.target.dataset.name;
        document.getElementById('body').setAttribute("class",curTheme ) 
    }

    inpBlur =function (){
        console.log(event)
        event.target.classList.remove('inpShow');
        event.target.nextElementSibling.classList.remove('hideEle');
        event.target.nextElementSibling.innerHTML = event.target.value;
    }

    clickMenuLeft = function (){
        let curId = event.target.dataset.id;
        console.log(event)
        Array.from(document.getElementsByClassName('contentBox')).forEach((s,idx)=>{
            s.classList.remove('show');
            if(idx == curId){
                s.classList.add('show');
            }
        });
     }  
}