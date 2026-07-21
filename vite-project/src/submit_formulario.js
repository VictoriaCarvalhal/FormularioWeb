let formElem = document.getElementById("form_adocao_pet");

function formHandler(){
    let response = await fetch('',{
        method: 'POST',
        body: 
    });

    if(response.ok){
        let result = await response.formData();
    }else{
        alert("HTTP-Error: " + response.status);
    }
}

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
