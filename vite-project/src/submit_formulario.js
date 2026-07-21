let formElem = document.getElementById("form_adocao_pet");

formElem.onsubmit = async (e) => {
    e.preventDefault();

    let response = await fetch('/artivle/formdata/post/user',{
        method: 'POST',
        body: FormData(formElem)
    });

    if (response.ok){
        let result = await response.FormData();
    }
    else{
        alert("HTTP-Error: " + response.status);
    }
}
