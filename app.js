var htmlPage;

function reply_click(clicked_id) {
    htmlPage = clicked_id;

    var xhr = new XMLHttpRequest();
    xhr.open("get",  "https://rana-elkhouly.github.io/shrq/oa1.html");
    alert(htmlPage + ".html")
    alert(xhr.status)
    if (xhr.status == 200) {
        
        document.getElementById("details").innerHTML = xhr.responseText;
    };
    xhr.send();
}

