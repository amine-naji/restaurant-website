function isEmail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
}
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