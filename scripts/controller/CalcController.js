class CalcController{
    constructor()
    {
        //atributos com underline são considerados privados - é uma convensão.
        this._displayCalc = "0";
        this.currentDate;
        this.initializer();
    }

    initializer(){
        let displayCalcEl = document.querySelector("#display");
        let dateEl = document.querySelector("#data");
        let timeEl = document.querySelector("#hora");

        displayCalcEl.innerHTML = "256";
        dateEl.innerHTML = "25/01/18";
        timeEl.innerHTML = "00:02";
    }

    get displayCalc(){
        return this._displayCalc;
    }

    set displayCalc(valor){
        this._displayCalc = valor;
    }

    get dataAtual(){
        return this.currentDate;
    }

    set dataAtual(value){
        this.currentDate = value;
    }
}