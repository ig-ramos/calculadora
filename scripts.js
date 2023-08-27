function Calculadora(){
    this.tela = document.querySelector('#tela');

    this.iniciar = ()=> {
        this.btnClick();
        this.pressEnter();
    }

    this.btnClick = () => {
        document.addEventListener('click', (e) => {
            const el = e.target;
            if(el.classList.contains('btn')){ this.escreveNumero(el.value); console.log(el.value)}
            if(el.classList.contains('res')){ this.resultado(); }
        })
    }

    this.escreveNumero = (valor) => {
        this.tela.focus();
        return this.tela.value += valor; 
    }

    this.resultado = () => {
        let conta = tela.value;
        try{
            conta = eval(conta);
            if(!conta){
                alert('INSIRA UM VALOR INVÁLIDO!!!');
                return;
            }
            tela.value = String(conta);
        }catch(e){
            alert('ERRO');
            return;    
        }
    }

    this.pressEnter = () => {
        document.addEventListener('keypress', (e) => {
            if(e.keyCode !== 13){ return; }
            this.resultado();
        })
    }

}

const calculadora = new Calculadora()
calculadora.iniciar();