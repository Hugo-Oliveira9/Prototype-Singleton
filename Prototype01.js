class Aluno{
    constructor(nome, idade, curso, instituição, periodo){
        this.nome;
        this.idade;
        this.curso;
        this.instituição;
        this.periodo;
    }

    //Clonagem (primeira copia)
    clone(){
        return Object.assign(
            Object.create(Object.getPrototypeOf(this)),
            this
        );
    }
}

//Gerenciar Alunos Siga

class GerenciarAlunos{

    constructor(){
        if (GerenciarAlunos.instace){
            return GerenciarAlunos.instance;
        }

        this.listaAlunos = [];
        GerenciarAlunos.instance =this;
    }

    MatriculaAluno(aluno){
        this.listaAlunos.push(aluno);
    }

    MatriculaAluno(){
        console.log("Aluno Matriculado na Disciplina: ");
        this.listaAlunos.forEach( aluno => {
            console.log(
                `Nome: ${aluno.nome}, Idade: ${aluno.idade}, Curso: ${aluno.curso}, Intituição: ${aluno.instituição}, Periodo: ${Aluno.periodo}`
            );
        });
    }
}

//Chamando o Singleton

const siga1 = new GerenciarAlunos();
const siga2 = new GerenciarAlunos();

console.log("Possui mais de um Siga?", siga1 == siga2);


//Aluno Prototype
const alunoPrototype = new Aluno(
    "James Rodriguez",
    22,
    "Dev. Sistema",
    "Campus Anchieta",
    "Manhã"

);

// Criando clones do Prototype
const aluno1 = alunoPrototipo.clone();
aluno1.nome = "Leonardo";
aluno1.idade = 20;

const aluno2 = alunoPrototipo.clone();
aluno2.nome = "Ricardo";
aluno2.idade = 22;
aluno2.curso = "Administração";
aluno2.unidade = "Logística";
aluno2.periodo = "Matutino";

const aluno3 = alunoPrototipo.clone();
aluno3.nome = "Taynah";
aluno3.idade = 25;
aluno3.unidade = "Fatec Diadema";

//Adicionando ao Singleton
siga1.adicionarAluno(aluno1);
siga1.adicionarAluno(aluno2);
siga1.adicionarAluno(aluno3);


//Listando alunos matriculados
siga1.listarAlunos();


//Verificando se Prototype não mudou
console.log("\nProtótipo original permanece:");
console.log(alunoPrototipo);