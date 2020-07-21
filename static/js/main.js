
var listActive = document.querySelectorAll(".our_menu_child")
    for( i=0 ; i<listActive.length ; i++){
        listActive[i].addEventListener("click",function(){
            document.querySelector('.active').classList.remove('active')
            this.classList.add('active')
        })
    }

var item = document.querySelectorAll('.our_menu_category')
    for (var i = 0; i < item.length; i++) {
    item[i].style.display = "none"
    item[0].style.display = "flex"
    item[1].style.display = "flex"
    item[2].style.display = "flex"
}

function OnClickTab(tab1, tab2, tab3) {
    var item = document.querySelectorAll('.our_menu_category')
        for (var i = 0; i < item.length; i++) {
            item[i].style.display = "none"
            item[tab1].style.display = "flex"
            item[tab2].style.display = "flex"
            item[tab3].style.display = "flex"
        }
    }

function popupClick(index){
    var overlay = document.createElement("div")
        overlay.className = "popup-overlay"
        document.body.appendChild(overlay)
    var popup_Box = document.createElement("div")
        popup_Box.className = "up-box"
    var imageUp = document.createElement("img")
        imageUp.src = document.querySelectorAll(".gallery_content img")[index].src
        popup_Box.appendChild(imageUp)
        document.body.appendChild(popup_Box)
    var closeBtn = document.createElement("span")
        closeBtn.className = "close_btn"
    var closeText = document.createTextNode("X")
        closeBtn.appendChild(closeText)
        popup_Box.appendChild(closeBtn) 
}

document.addEventListener("click",function(e){
    if(e.target.className == "close_btn"){
        document.querySelector(".up-box").remove()
        document.querySelector(".popup-overlay").remove()
    }
})

document.getElementById("date").valueAsDate = new Date()

var reserveClick = document.getElementById("reservation")
var visibleDiv = document.querySelector(".reservation")
var closeClick = document.querySelector(".close")
    reserveClick.addEventListener("click",function(){
        var overlay = document.createElement("div")
        overlay.className = "popup-overlay"
        document.body.appendChild(overlay)
        visibleDiv.style.display = "block"
    });
    closeClick.addEventListener("click",function(){
        document.querySelector(".popup-overlay").remove()
        visibleDiv.style.display = "none"
    });
function isEmail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
}
    var reserve_btn =document.getElementById("reserve_btn")
    reserve_btn.addEventListener("click",function(){
        var input = document.querySelectorAll(".reservation input")
        var textarea_reservation = document.getElementById("textarea_reservation")
        var name = input[0].value
        var error = []
            if(input[0].value == "" || input[0].value.length < 3 || !isNaN(input[0].value)){
                error.push("Attention! You must enter your name.")
            }
            if(input[1].value == ""|| !isEmail(input[1].value) ){
                error.push ("Attention! Please enter a valid email address.")
            }
            if(input[2].value == "" || isNaN(input[2].value)){
                error.push("Attention! Please enter a valid phone number.")
            }
            if(error.length == 0){
                swal({
                    title: "Request send Successfully",
                    text: "Thank You "+ name,
                    icon: "success",
                    button: "OK",
                  })
                  input[0].value = ""
                  input[1].value = ""
                  input[2].value = ""
                  textarea_reservation.value = ""
            }else{
                swal({
                    title: error[0],
                    icon: "error",
                    button: "OK",
                  })

    }})
var news_btn = document.getElementById("news_btn")
    news_btn.addEventListener("click",function(){
        var newsInput = document.querySelector(".news_letter input")
        if(newsInput.value !== "" && isEmail(newsInput.value)){
            swal({
                title:"Request Sent Successfully ! we will sent you every new news about our restaurant",
                text: "Thank You ",
                icon: "success",
                button: "OK",
            })
            newsInput.value = ""
        }else{
            swal({
                title: "Attention! Please enter a valid email address.",
                text:"Try Again",
                icon: "error",
                button: "OK",
                })
        }
    })
var sendBtn = document.getElementById("send_btn")
    sendBtn.addEventListener("click",function(){
        var contactInput = document.querySelectorAll(".contact_form input")
        var textarea_btn = document.getElementById("textarea_btn")
        var err = 0;
        if(contactInput[0].value == "" || contactInput[0].value.length < 3 || !isNaN(contactInput[0].value) ){
            err++;
        }
        if(contactInput[1].value == "" || contactInput[1].value.length < 3 || !isNaN(contactInput[1].value) ){
            err++;
        }
        if(contactInput[2].value == "" || !isEmail(contactInput[2].value) ){
            err++;
        }  
        if(contactInput[3].value == "" || isNaN(contactInput[3].value) ){
            err++;
        }
        if( err != 0){
            swal({
                title: "Attention! You must enter the correct information in the right place",
                text:"Try Again",
                icon: "error",
                button: "OK",
              })
            }else
            swal({
                title:"Request Sent Successfully. Your application is accepted - We will contact you in less than 24h",
                text: "Thank You "+ contactInput[0].value + " " + contactInput[1].value,
                icon: "success",
                button: "OK",
              })
              contactInput[0].value = ""
              contactInput[1].value = ""
              contactInput[2].value = ""
              contactInput[3].value = ""
              textarea_btn.value = ""
        }
    )
