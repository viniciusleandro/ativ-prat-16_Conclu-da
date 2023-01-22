/* Desenvolva aqui a rotina */
document.addEventListener("DOMContentLoaded", () => {
  const calcReceitas = document.getElementById("btn_calcular");
  let dataReceita = JSON.parse(localStorage.getItem("data")) || [];

  calcReceitas.addEventListener("click", (evento) => {
    function addRevenue() {
      const getValueBase = document.getElementById("valor_base");
      const getTransport = document.getElementById("valor_transporte");
      const getFood = document.getElementById("valor_alimentacao");

      let valueBase = parseFloat(getValueBase.value);
      let valueTransport = parseFloat(getTransport.value);
      let valueFood = parseFloat(getFood.value);
      valueTotalRevenue = document.getElementById("valor_receita").value =
        parseFloat(valueBase + valueTransport + valueFood).toFixed(2);

      function calcSaldo() {
        const getCarDiscount = document.getElementById("valor_automovel");
        const getAbsences = document.getElementById("faltas");
        let valueCarDiscount = parseFloat(getCarDiscount.value);
        let valueAbsences = parseFloat(getAbsences.value);

        valueDescontos = document.getElementById("valor_descontos").value =
          parseFloat(valueCarDiscount + valueAbsences).toFixed(2);

        const saldoReceita = (document.getElementById("valor_receita").value =
          parseFloat(valueTotalRevenue));
        const saldoDescontos = (document.getElementById(
          "valor_descontos"
        ).value = parseFloat(valueDescontos));

        const saldoTotal = (document.getElementById("valor_total").value =
          parseFloat(saldoReceita - saldoDescontos).toFixed(2));

        function saveData() {
          let calculos = {
            valorBase: valueBase,
            valorTransporte: valueTransport,
            valorAlimentacao: valueFood,
            receitaTotal: valueTotalRevenue,
            valorDescontoAuto: valueCarDiscount,
            valorFaltas: valueAbsences,
            valorDescontoTotal: valueDescontos,
            valorTotal: saldoTotal,
          };

          dataReceita.push(calculos);
          localStorage.setItem("data", JSON.stringify(dataReceita));
        }
        saveData();
      }
      calcSaldo();
    }
    addRevenue();
  });
});

