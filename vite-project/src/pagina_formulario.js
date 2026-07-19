

document.querySelector('#app').innerHTML = `
<section id = "center">
    <div class = "hero">
        <div class = "titulo">
            <h1>Cadastro do usuário - Adoção Pet</h1>
        </div>
        
        <form action='#' method="POST" autocomplete="on" role="form" aria-label="Formulário de cadastro para adoção de pet">
            <fieldset role="group" aria-labelledby="legend-dados-pessoais">

                <legend id="legend-dados-pessoais">Dados Pessoais</legend>

                <div>
                    <label for="name">Nome</label>
                    <input type="text" id="name" name="name" autocomplete="name" aria-required="true" placeholder="Seu nome completo">
                </div>

                <div>
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" autocomplete="email" aria-required="true" placeholder="exemplo@email.com">
                </div>

                <div>
                    <label for="senha">Senha</label>
                    <input type="password" id="senha" name="senha" autocomplete="new-password" aria-required="true" aria-describedby="senha-dica">
                    <small id="senha-dica">Mínimo de 8 caracteres</small>
                </div>

                <div>
                    <label for="confirmar_senha">Confirmar Senha</label>
                    <input type="password" id="confirmar_senha" name="confirmar_senha" autocomplete="new-password" aria-required="true" aria-describedby="confirmar-senha-dica">
                    <small id="confirmar-senha-dica">Repita a senha anterior</small>
                </div>

                <div>
                    <label for="data_de_nascimento">Data de Nascimento</label>
                    <input type="date" id="data_de_nascimento" name="data_de_nascimento" autocomplete="bday" aria-required="true">
                </div>

                <div>
                    <label for="telefone">Telefone</label>
                    <input type="tel" id="telefone" name="telefone" autocomplete="tel" aria-required="true" aria-describedby="telefone-dica" placeholder="(00) 00000-0000">
                    <small id="telefone-dica">Formato: (XX) XXXXX-XXXX</small>
                </div>
                <div>
                    <label for="genero">Genero</label>
                    <select id="genero" name="genero" autocomplete="sex" aria-required="true">
                    <option></option>
                        <option>Masculino</option>
                        <option>Feminino</option>
                        <option>Prefiro não dizer</option>
                </select>
                </div>
                <div>
                    <label for="documento_de_identidade">Documento de identidade (PDF)</label>
                    <input type="file" id="documento_de_identidade" name="documento_de_identidade" aria-required="true" aria-describedby="doc-dica" accept=".pdf">
                    <small id="doc-dica">Apenas arquivos PDF</small>
                </div>
                <div>
                    <label for="rede_social">Perfil de rede social pessoal</label>
                    <input type="url" id="rede_social" name="rede_social" autocomplete="url" placeholder="https://" aria-describedby="url-dica">
                    <small id="url-dica">Opcional — link do seu perfil</small>
                </div>

            </fieldset> 

            <fieldset role="group" aria-labelledby="legend-dados-pet">
                
                <legend id="legend-dados-pet">Dados do pet</legend>

                <div>
                    <label for="pesquisa">Pesquise o pet no nosso banco de dados</label>
                    <input type="search" id="pesquisa" name="pesquisa" autocomplete="off" aria-label="Pesquisar pet pelo nome ou código" placeholder="Nome ou código do pet">
                </div>

                <div>
                    <label for="especie">Especie do pet</label>
                    <select id="especie" name="especie" autocomplete="off" aria-required="true">
                        <option></option>
                        <option>Cachorro</option>
                        <option>Gato</option>
                    </select>
                </div>

                <div> 
                    <label for="nome_pet">Nome do pet (O nome dado pelo abrigo para identificar o animal)</label>
                    <input type="text" id="nome_pet" name="nome_pet" autocomplete="off" aria-required="true">
                </div>

                <div>
                    <label for="cor_coleira">Cor da coleira</label>
                    <input type="color" id="cor_coleira" name="cor_coleira" autocomplete="off" aria-label="Escolha a cor da coleira do pet">
                </div>
            </fieldset>
            
            <fieldset role="group" aria-labelledby="legend-buscar-pet">
                <legend id="legend-buscar-pet">Marcar dia para buscar o pet</legend>

                <div>
                    <label for="data_horario_busca">Dia e horario principal</label>
                    <input type="datetime-local" id="data_horario_busca" name="data_horario_busca" autocomplete="off" aria-required="true">
                </div>

                <div>
                    <label for="horario">Horario secundario</label>
                    <input type="time" id="horario" name="horario" autocomplete="off" aria-describedby="horario-dica">
                    <small id="horario-dica">Opcional — caso o horário principal não esteja disponível</small>
                </div>

            </fieldset>

            <fieldset role="group" aria-labelledby="legend-avaliacao">
                <legend id="legend-avaliacao">Avalie nosso atendimento</legend>

                <div>
                    <label for="servico">O quão provavel compartilharia nosso abrigo?</label>
                    <input type="range" id="servico" name="servico" min="1" max="5" aria-valuemin="1" aria-valuemax="5" aria-label="Nota de 1 a 5 para o serviço" />
                </div>

                <fieldset role="group" aria-labelledby="legend-mais-gostou">
                    <legend id="legend-mais-gostou">O que você mais gostou no atendimento?</legend>
                    <div>
                        <label for="mais_tratamento">Tratamento</label>
                        <input type="checkbox" name="mais_gostou" value="tratamento" id="mais_tratamento">
                    </div>
                    <div>
                        <label for="mais_localidade">Localidade</label>
                        <input type="checkbox" name="mais_gostou" value="localidade" id="mais_localidade">
                    </div>
                    <div>
                        <label for="mais_tratamento_animais">Tratamento aos animais</label>
                        <input type="checkbox" name="mais_gostou" value="tratamento_animais" id="mais_tratamento_animais">
                    </div>
                    <div>
                        <label for="mais_condicao_predio">Condição do predio</label>
                        <input type="checkbox" name="mais_gostou" value="condicao_predio" id="mais_condicao_predio">
                    </div>
                    <div>
                        <label for="mais_informacoes">informações</label>
                        <input type="checkbox" name="mais_gostou" value="informacoes" id="mais_informacoes">
                    </div> 
                </fieldset>
                <fieldset role="group" aria-labelledby="legend-menos-gostou">
                    <legend id="legend-menos-gostou">O que menos gostou no atendimento?</legend>
                    <div>
                        <label for="menos_tratamento">Tratamento</label>
                        <input type="checkbox" name="menos_gostou" value="tratamento" id="menos_tratamento">
                    </div>
                    <div>
                        <label for="menos_localidade">Localidade</label>
                        <input type="checkbox" name="menos_gostou" value="localidade" id="menos_localidade">
                    </div>
                    <div>
                        <label for="menos_tratamento_animais">Tratamento aos animais</label>
                        <input type="checkbox" name="menos_gostou" value="tratamento_animais" id="menos_tratamento_animais">
                    </div>
                    <div>
                        <label for="menos_condicao_predio">Condição do predio</label>
                        <input type="checkbox" name="menos_gostou" value="condicao_predio" id="menos_condicao_predio">
                    </div>
                    <div>
                        <label for="menos_informacoes">informações</label>
                        <input type="checkbox" name="menos_gostou" value="informacoes" id="menos_informacoes">
                    </div>
                </fieldset>

                <div>
                    <label for="feedback">Nós dê um feedback</label>
                    <textarea id="feedback" name="feedback" aria-label="Escreva seu feedback sobre o atendimento" rows="4" placeholder="Conte-nos sua experiência..."></textarea>
                </div>

            </fieldset>

            <fieldset role="group" aria-labelledby="legend-doacao">
                <legend id="legend-doacao">Nos ajude a manter o abrigo funcionando</legend>

                <div>
                    <label>Estaria disposto a doar um valor para o abrigo?</label>
                    
                    <div>
                        <label for="doacao_sim">Sim</label>
                        <input type="radio" name="doacao" value="sim" id="doacao_sim">
                    </div>

                    <div>
                        <label for="doacao_nao">Não</label>
                        <input type="radio" name="doacao" value="nao" id="doacao_nao">
                    </div>

                    <div>
                        <label for="valor_doacao">Valor de doacão</label>
                        <input type="number" id="valor_doacao" name="valor_doacao" min="0" step="0.01" aria-describedby="valor-dica" placeholder="0.00">
                        <small id="valor-dica">Valor em reais (R$)</small>
                    </div>

                </div>
            </fieldset>

            <div>
                <input type="hidden" name="id_formulario" value="adocao_pet_001">
            </div>

            <div>
                <button type="submit" aria-label="Enviar formulário de cadastro">Enviar</button>
            </div>
        </form>
    </div>
</section>
`