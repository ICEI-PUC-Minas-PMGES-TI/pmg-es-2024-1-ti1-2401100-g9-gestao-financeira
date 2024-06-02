document.addEventListener("DOMContentLoaded", function() {
    function loadMetas() {
        let metas = JSON.parse(localStorage.getItem('metas')) || [];
        const container = document.getElementById('metas-container');
        
        container.innerHTML = ''; 

        metas.forEach((meta, index) => {
            const metaElement = document.createElement('div');
            metaElement.classList.add('project-box-wrapper');
            metaElement.innerHTML = `
                <div class="project-box">
                    <div class="project-box-header">
                    <input type="hidden" id="metaId" value="">
                        <p class="box-content-header">${meta.nomeMeta}</p>
                        <div class="more-wrapper">
                        <a href= "./edit.html">
                            <button class="edit-participant" style="color: #15e82d;">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit">
                                    <path d="M12 20h9"></path>
                                    <path d="M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19.5 3 21l1.5-4L16.5 3.5z"></path>
                                </svg>
                            </button>  
                        </a>
                        </div>
                    </div>
                    <div class="box-progress-wrapper">
                        <p class="box-progress-header">Progresso</p>
                        <div class="box-progress-bar">
                            <span class="box-progress" style="width: ${calculateProgress(meta.valorInicial, meta.objetivo)}%;">
                                <span class="box-progress-percentage">${calculateProgress(meta.valorInicial, meta.objetivo)}%</span>
                            </span>
                        </div>
                        <div class="progress-values">
                            <span>Valor Atual: ${meta.valorInicial}</span>
                            <span>Objetivo: ${meta.objetivo}</span>
                        </div>
                    </div>
                    <div class="project-box-footer">
                        <div class="participants">
                        <a href= "./acréscimo.html">
                            <button class="add-participant larger-btn" style="color: #1cff03;">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus">
                                    <path d="M12 5v14M5 12h14"></path>
                                </svg>
                            </button>
                        </a>
                        <a href= "./decréscimo.html">
                            <button class="remove-participant larger-btn" style="color: #FF6F6F;">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-minus">
                                    <path d="M5 12h14"></path>
                                </svg>
                            </button>
                        </a>
                        </div>
                        <button class="delete-goal larger-btn delete-goal-button" style="color: #FF0000; position: absolute; right: 10px; bottom: 10px;" data-index="${index}">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2">
                                <polyline points="3 6 5 6 21 6"></polyline>
                                <path d="M19 6l-2 14H7L5 6"></path>
                                <path d="M10 11v6"></path>
                                <path d="M14 11v6"></path>
                                <path d="M15 4V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1 1v2"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            `;
            container.appendChild(metaElement);
        });

        attachDeleteHandlers();
    }

    function calculateProgress(valorInicial, objetivo) {
        const valorInicialNum = parseFloat(valorInicial.replace(/[^\d,]/g, '').replace(',', '.'));
        const objetivoNum = parseFloat(objetivo.replace(/[^\d,]/g, '').replace(',', '.'));
        return ((valorInicialNum / objetivoNum) * 100).toFixed(2);
    }

    function attachDeleteHandlers() {
        const deleteButtons = document.querySelectorAll('.delete-goal-button');
        deleteButtons.forEach(button => {
            button.addEventListener('click', function() {
                const index = this.getAttribute('data-index');
                deleteMeta(index);
            });
        });
    }

    function deleteMeta(index) {
        let metas = JSON.parse(localStorage.getItem('metas')) || [];
        metas.splice(index, 1);
        localStorage.setItem('metas', JSON.stringify(metas));
        loadMetas();
    }

    loadMetas();
});
