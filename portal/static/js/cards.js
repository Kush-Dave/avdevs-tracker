//var dictionary_project = {"Roadhow": 23, "AV devs": 2 , "Street AI": 20 , "Object detection":15 , "Face recognization":52}

// var number=window.prompt("Enter project name");

function project_click(sel) 
{
    var selectedText = sel.options[sel.selectedIndex].innerHTML;
    var selectedValue = sel.value;
    alert("Selected Text: " + selectedText + " Value: " + selectedValue);
    var dynamic=document.querySelector('.cont');
    for(var i=0;i<selectedValue;i++)
    {   
        // var fetch=document.querySelector('.cont').innerHTML;
        dynamic.innerHTML=`
        <div class="cards">
                <div class="image">
                    <img src="img_avatar.jpg" alt="">
                </div>
                <div class="title">
                    <p>Emolpyee name:</p>
                    <h1> selectedValue </h1>
                </div>
                <div class="des">
                    <p>Emolpyee ID:</p>
                    <a href="#"><button>Read More...</button></a>
                </div>
            
        </div>`
    }
}


    
    
//     var dynamic=document.querySelector('.cont');
    
//     for(var i=0;i<selectedValue;i++)
//     {   
//         console.log(selectedValue);
//         var fetch = document.querySelector('.cont').innerHTML;
//         dynamic.innerHTML=`
//         <div class="cards">
//             <div class="image">
//                 <img src="img_avatar.jpg" alt="">
//             </div>
//             <div class="title">
//                 <p>Emolpyee name:</p>
//             </div>
//             <div class="des">
//                 <p>Emolpyee ID:</p>
//                 <a href="#"><button>Read More...</button></a>
//             </div>
//         </div>` + fetch ;  
//     }
// 

