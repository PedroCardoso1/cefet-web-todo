let tarefas = [];
function Tarefa(nome, categoria, realizada){
    this.nome = nome;
    this.categoria = categoria;
    this.realizada = realizada;
}
tarefas.push(new Tarefa('Comprar leite', 'compras', false));
tarefas.push(new Tarefa('Escutar chimbinha', 'lazer', true));

let elLista = document.querySelector('#lista-tarefas');
elLista.innerHTML='';
function insereTarefaNaPagina(tarefa){
    let elNomeTarefa = document.createElement('li');
    elNomeTarefa.textContent = tarefa.nome;
    elNomeTarefa.classList.add('item-tarefa');
    if(tarefa.realizada){elNomeTarefa.classList.add('marcado');}
    elNomeTarefa.classList.add(`categoria-${tarefa.categoria}`);
    elLista.appendChild(elNomeTarefa);
}

tarefas.forEach(insereTarefaNaPagina);
let elIncluirTarefa = document.querySelector('#incluir-nova-tarefa');
let tarefa_nome = document.querySelector('#nova-tarefa-nome');

function eventoInsereTarefa(){
    let tarefa_categoria = document.querySelector('#nova-tarefa-categoria').value;
    let tarefa = new Tarefa(tarefa_nome.value,tarefa_categoria,false);
    tarefas.push(tarefa);
    insereTarefaNaPagina(tarefa);
    tarefa_nome.focus();
    tarefa_nome.value = '';
}

elIncluirTarefa.addEventListener('click',function(e){
    eventoInsereTarefa();
});

tarefa_nome.addEventListener('keyup',function(e){
    if(e.key === 'Enter'){eventoInsereTarefa();}
});

let elMostrar = document.querySelector('#filtro-de-categoria');
let itens = document.getElementsByClassName('item-tarefa');

function esmaecerTarefas(tarefa,index){
    if(elMostrar.value !== tarefa.categoria && elMostrar.value !== ''){
        itens[index].classList.add('retido-no-filtro');
        console.log(itens[index]);
    }else{
        itens[index].classList.remove('retido-no-filtro');
    }
}
elMostrar.addEventListener('change', function(e){
    tarefas.forEach(esmaecerTarefas); 
})
for(let i=0; i<itens.length; i++){
    itens[i].addEventListener('click',e => {
        itens[i].classList.toggle('marcado');
        for(let y=0; y<tarefas.length; y++){
            if(itens[i].textContent === tarefas[y].nome){
                if(tarefas[y].realizada){
                    tarefas[y].realizada=false;
                }else{
                    tarefas[y].realizada=true;
                }
                console.log(tarefas[y].realizada)
            }
        }
        
    })
}

