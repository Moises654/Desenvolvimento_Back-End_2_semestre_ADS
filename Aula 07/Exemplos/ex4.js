// exemplo de herança

class Usuario{
    constructor(){
        this.nome=null;
        this.idade=null;
    }
    exibeinfo(){
        console.log(`Nome ${this.nome},idade ${this.idade}`);
    }
}

// cria a classe filha
class cliente extends Usuario{
    constructor(){
        super(); // super faz a classe filha herdar os atributos da classe mae
        this.cargo = null; // cria o atributo cargo para aclasse cliente
    }
    exibeinfocargo(){
        console.log(`Nome ${this.nome}, idade: ${this.idade}, cargo: ${this.cargo} `);
    }
}

Daniel = new cliente();
Daniel.nome="Moisés";
Daniel.idade=30;
Daniel.cargo='Projetista de volante de locomotiva';

Rocky = new cliente();
Rocky.nome="Rocky";
Rocky.idade=3;
Rocky.cargo='Pet';
Daniel.exibeinfocargo();
Rocky.exibeinfocargo();