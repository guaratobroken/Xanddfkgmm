var paulo = document.querySelector('#Paulo');
var pesoPaulo = paulo.querySelector(".info-peso").textContent;
var alturaPaulo = paulo.querySelector(".info-altura").textContent;
var imcPaulo = pesoPaulo / (alturaPaulo * alturaPaulo);
paulo.querySelector(".info-imc").textContent = imcPaulo;