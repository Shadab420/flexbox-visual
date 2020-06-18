var jcBtn = document.getElementsByName('jc');
var aiBtn = document.getElementsByName('ai');
var flexDirBtn = document.getElementsByName('flex-dir');
var flexWrapBtn = document.getElementsByName('flex-wrap');
var flexFlowBtn = document.getElementsByName('flex-flow');
var jcHeader = document.getElementById('jc-span');
var aiHeader = document.getElementById('ai-span');
var asBtn = document.getElementsByName('as');
var acBtn = document.getElementsByName('ac');
var flexDirHeader = document.getElementById('flex-dir-span');
var flexWrapHeader = document.getElementById('flex-wrap-span');
var flexFlowHeader = document.getElementById('flex-flow-span');
var flexGrowHeader = document.getElementById('flex-grow-span');
var flexShrinkHeader = document.getElementById('flex-shrink-span');
var acHeader = document.getElementById('ac-span');
var asHeader = document.getElementById('as-span');
var orderHeader = document.getElementById('order-span');
var flexGrowBox = document.getElementById('child8');
var flexGrowValue = document.getElementById('grow');
var flexShrinkBox = document.getElementById('child10');
var flexShrinkValue = document.getElementById('shrink');
var orderBox = document.getElementById('child9');
var orderValue = document.getElementById('order');


function callEventListener(element, value, parent, changeStyle){
    element.addEventListener('click', function(){
        
        if(changeStyle == "jc") {
            jcHeader.innerText = value;
            document.getElementById(parent).style.justifyContent = value;
        }

        else if(changeStyle == "ai") {
            aiHeader.innerText = value;
            document.getElementById(parent).style.alignItems = value;
        }

        else if(changeStyle == "fd"){
            flexDirHeader.innerText = value;
            document.getElementById(parent).style.flexDirection = value;
        }

        else if(changeStyle == "fw"){
            flexWrapHeader.innerText = value;
            document.getElementById(parent).style.flexWrap = value;
        }

        else if(changeStyle == "ac"){
            acHeader.innerText = value;
            document.getElementById(parent).style.alignContent = value;
        }

        else if(changeStyle == "ff"){
            flexFlowHeader.innerText = value;
            document.getElementById(parent).style.flexFlow = value;
        }

        else if(changeStyle == "as"){
            asHeader.innerText = value;
            var childNo = document.getElementById('child7').value;
            var childElement = document.querySelector('.'+parent+' .child:nth-child('+ childNo + ')');
            childElement.style.alignSelf = value;
        }


    })
}


function addEvents(items, parent, changeStyle){
    for(var i=0; i<items.length; i++){
        var item = items[i];
        var itemVal = item.value;
        callEventListener(item, itemVal, parent, changeStyle);

    }
}


function addChangeListener(item, changeStyle){
    item.addEventListener('change', function(){

        if(changeStyle == "fg"){
            var boxNo = flexGrowBox.value;
            var grow = flexGrowValue.value;
            flexGrowHeader.innerText = grow;
            document.querySelector(".parent8 .child:nth-child("+boxNo+")").style.flexGrow = grow;

        }
        else if(changeStyle == "fs"){
            var boxNo = flexShrinkBox.value;
            var shrink = flexShrinkValue.value;
            flexShrinkHeader.innerText = shrink;
            document.querySelector(".parent10 .child:nth-child("+boxNo+")").style.flexShrink = shrink;
        }
        else if(changeStyle == "order"){
            var boxNo = orderBox.value;
            var order = orderValue.value;

            orderHeader.innerText = order;
            document.querySelector(".parent9 .child:nth-child("+boxNo+")").style.order = order;
        }

    })
}


function displayMobileMenu(){
    var nav = document.getElementById('nav-items');

    if(window.innerWidth <= 992){
        if(nav.style.display == 'flex') nav.style.display = 'none';
        else nav.style.display = 'flex';
    }

}


addEvents(jcBtn, "parent1", "jc");
addEvents(aiBtn, "parent2", "ai");
addEvents(flexDirBtn, "parent3", "fd");
addEvents(flexWrapBtn, "parent4", "fw");
addEvents(acBtn, "parent5", "ac");
addEvents(flexFlowBtn, "parent6", "ff");
addEvents(asBtn, "parent7", "as");

addChangeListener(flexGrowBox, "fg");
addChangeListener(flexGrowValue, "fg");
addChangeListener(flexShrinkBox, "fs");
addChangeListener(flexShrinkValue, "fs");
addChangeListener(orderBox, "order");
addChangeListener(orderValue, "order");


