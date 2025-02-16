function formName() {
    
alert("Here");    
switch (formName) {
    case "Theme": alert(formName);
    default: alert('None');
    }
}


// PREPARE AND POPULATE A MODAL
$(document).ready(function () {
    $('.modal').modal({
        ready: function(modal, trigger) {
            var element = modal[0]
            var iframe = document.createElement("iframe");
            console.log('Boo hoo');
            iframe.src="";
            if(element.id === 'using-sarva-modal'){
                iframe.src = "http://app01.saeon.ac.za/PLATFORM_4/FRAME/accordian.html?URL=../../PLATFORM_4/SARVA/ATLAS/hardcopy_atlas.js&THEME=GREY";  
            }
            iframe.height = "100%";
            iframe.width = "100%";
            element.appendChild(iframe);                   
        }
    });
});