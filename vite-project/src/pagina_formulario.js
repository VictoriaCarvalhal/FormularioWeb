

document.querySelector('#app').innerHTML = `
<section id = "center">
    <div class = "hero">
        <div>
            <h1>Meu formulario fica aqui</h1>
        </div>
        
        <form>

            <div>
                <label for="name">Qual seu nome?</label>
                <input></input>
            </div>

            <div>
                <label for="idade">Qual sua idade?</label>
                <input></input>
            </div>

            <div>
                <Label for="escolaridade">Qual seu nivel de escolaridade?</label>
                <select>
                    <option></option>
                    <option>Nenhum nivel de escolaridade</option>
                    <option>Cursando Ensino Basico</option>
                    <option>Ensino Basico Cursado</option>
                    <option>Cursando Ensino Superior</option>
                    <option>Ensino Supeiror Cursado</option>
                </select>
            </div>
            
        </form>
    </div>
</section>
`