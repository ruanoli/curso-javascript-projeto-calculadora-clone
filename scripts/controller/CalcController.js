class CalcController{
    constructor()
    {
        //atributos com underline são considerados privados - é uma convensão.
        this._displayCalc = "0";
        this._dataAtual;
    }

    get displayCalc(){
        return this._displayCalc;
    }

    set displayCalc(valor){
        this._displayCalc = valor;
    }

    get dataAtual(){
        return this._dataAtual;
    }

    set dataAtual(valor){
        this._dataAtual = valor;
    }
}