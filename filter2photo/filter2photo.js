// Imagem Usada para os Testes
var imagem = document.querySelector('.imagem');

// Blur
var sliderBlur   = document.querySelector('.blur');
sliderBlur.onchange = function () {
	var valor = this.value
	document.querySelector(".codeGerado").innerHTML = '<span class="spanCSS">css code:</span> filter: "blur(<span class="vHueRotate">'+ valor +'</span>px)"'
	imagem.style.webkitFilter = "blur("+valor+"px)"
}

// Invert
var sliderInvert = document.querySelector('.invert');
sliderInvert.onchange = function () {
	var valor = this.value
	document.querySelector(".codeGerado").innerHTML = '<span class="spanCSS">css code:</span> filter: "invert('+valor+'%)"'
	imagem.style.webkitFilter = "invert("+valor+"%)"
}

// Brightness
var sliderBrightness   = document.querySelector('.brightness');
sliderBrightness.onchange = function () {
	var valor = this.value
	document.querySelector(".vBrightness").innerHTML = valor
	imagem.style.webkitFilter = "brightness("+valor+"%)"
}

// Grayscale
var sliderGrayscale   = document.querySelector('.grayscale');
sliderGrayscale.onchange = function () {
	var valor = this.value
	document.querySelector(".vGrayscale").innerHTML = valor
	imagem.style.webkitFilter = "grayscale("+valor+"%)"
}

// Hue Rotate
var sliderHueRotate   = document.querySelector('.huerotate');
sliderHueRotate.onchange = function () {
	var valor = this.value
	document.querySelector(".vHueRotate").innerHTML = valor
	imagem.style.webkitFilter = "hue-rotate("+valor+"deg)"
}

// teste.php - ws.php
