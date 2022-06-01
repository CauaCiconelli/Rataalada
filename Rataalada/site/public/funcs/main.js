class ocorrencias_b extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <div class="quadroBoletim">
        <p class="tipoBol">Selecione o tipo de ocorrência:</p> <select id="tipoBol">
            <option value="0">--Selecione uma opção--</option>
            <option value="1">Assalto/Furto</option>
            <option value="2">Violência/Assédio</option>
            <option value="3">Atropelamento</option>
            <option value="4">Outros</option>
        </select>
        <p class="localOcorBol">Insira a localização do crime:</p><input type="text" id="localOcorBol" placeholder="Ex: Rua dos Morcegos 3">
        <p class="descBol">Insira a descrição da ocorrência:</p><input type="text" id="descBol">
        <button onclick="concluirDen()">Enviar</button>
    </div>`
    }
}

customElements.define('ocorrencias-a', ocorrencias_b);