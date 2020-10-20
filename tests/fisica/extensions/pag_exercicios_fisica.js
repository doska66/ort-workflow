var resspondido = true
var resspondido2 = true
var resspondido3 = true
var resspondido4 = true
var resspondido5 = true
var resspondido6 = true
var resspondido7 = true

		function responder(respondido){
			if(document.getElementById("form1").style.display == "block"){
				if(resspondido == true){
					var botao = document.getElementById('submitbutton')
					botao.name = respondido
					botao.style.display = "block"
				}
			}
			if(document.getElementById("form2").style.display == "block"){
				if(resspondido2 == true){
					var botao = document.getElementById('submitbutton2')
					botao.name = respondido
					botao.style.display = "block"
				}
			}
			if(document.getElementById("form3").style.display == "block"){
				if(resspondido3 == true){
					var botao = document.getElementById('submitbutton3')
					botao.name = respondido
					botao.style.display = "block"
				}
			}
			if(document.getElementById("form4").style.display == "block"){
				if(resspondido4 == true){
					var botao = document.getElementById('submitbutton4')
					botao.name = respondido
					botao.style.display = "block"
				}
			}
			if(document.getElementById("form5").style.display == "block"){
				if(resspondido5 == true){
					var botao = document.getElementById('submitbutton5')
					botao.name = respondido
					botao.style.display = "block"
				}
			}
			if(document.getElementById("form6").style.display == "block"){
				if(resspondido6 == true){
					var botao = document.getElementById('submitbutton6')
					botao.name = respondido
					botao.style.display = "block"
				}
			}
			if(document.getElementById("form7").style.display == "block"){
				if(resspondido7 == true){
					var botao = document.getElementById('submitbutton7')
					botao.name = respondido
					botao.style.display = "block"
				}
			}
		}

		function teste2(resposta){
			if(document.getElementById("form1").style.display == "block"){
				var label = document.getElementById('gabarito')
				if(resposta == "C"){
					label.value="Acertou"
				}else{
					label.value="Errou"
				}
				document.getElementById('submitbutton').style.display = "none"
				resspondido = false
				for(var i = 1;i <= 5; i++){
					document.getElementById(i).disabled = true;
				}
			}
			if(document.getElementById("form2").style.display == "block"){
				var label = document.getElementById('gabarito2')
				if(resposta == "B"){
					label.value="Acertou"
				}else{
					label.value="Errou"
				}
				document.getElementById('submitbutton2').style.display = "none"
				resspondido2 = false
				for(var i = 1;i <= 5; i++){
					document.getElementById(i+"a").disabled = true;
				}
			}
			if(document.getElementById("form3").style.display == "block"){
				var label = document.getElementById('gabarito3')
				if(resposta == "B"){
					label.value="Acertou"
				}else{
					label.value="Errou"
				}
				document.getElementById('submitbutton3').style.display = "none"
				resspondido2 = false
				for(var i = 1;i <= 5; i++){
					document.getElementById(i+"b").disabled = true;
				}
			}
			if(document.getElementById("form4").style.display == "block"){
				var label = document.getElementById('gabarito4')
				if(resposta == "E"){
					label.value="Acertou"
				}else{
					label.value="Errou"
				}
				document.getElementById('submitbutton4').style.display = "none"
				resspondido4 = false
				for(var i = 1;i <= 5; i++){
					document.getElementById(i+"c").disabled = true;
				}
			}
			if(document.getElementById("form5").style.display == "block"){
				var label = document.getElementById('gabarito5')
				if(resposta == "E"){
					label.value="Acertou"
				}else{
					label.value="Errou"
				}
				document.getElementById('submitbutton5').style.display = "none"
				resspondido5 = false
				for(var i = 1;i <= 5; i++){
					document.getElementById(i+"d").disabled = true;
				}
			}
			if(document.getElementById("form6").style.display == "block"){
				var label = document.getElementById('gabarito6')
				if(resposta == "C"){
					label.value="Acertou"
				}else{
					label.value="Errou"
				}
				document.getElementById('submitbutton6').style.display = "none"
				resspondido6 = false
				for(var i = 1;i <= 5; i++){
					document.getElementById(i+"e").disabled = true;
				}
			}
			if(document.getElementById("form7").style.display == "block"){
				var label = document.getElementById('gabarito7')
				if(resposta == "C"){
					label.value="Acertou"
				}else{
					label.value="Errou"
				}
				document.getElementById('submitbutton7').style.display = "none"
				resspondido7 = false
				for(var i = 1;i <= 5; i++){
					document.getElementById(i+"f").disabled = true;
				}
			}
		}

		function mudar(questaoEscolhida){
			document.getElementById("img_exercice").src = "imgs/" + questaoEscolhida + "enem.jpg"
			if(questaoEscolhida == "cinematica"){
				document.getElementById("enunciado").innerHTML = "(Enem/2018) Um piloto testa um carro em uma reta longa de um autódromo. A posição do carro nessa reta, em função do tempo, está representada no gráfico."
				document.getElementById("enunciado_secundario").innerHTML = "Os pontos em que a velocidade do carro é menor e maior são, respectivamente:"
				document.getElementById("form1").style.display = "block"
				document.getElementById("form2").style.display = "none"
				document.getElementById("form3").style.display = "none"
				document.getElementById("form4").style.display = "none"
				document.getElementById("form5").style.display = "none"
				document.getElementById("form6").style.display = "none"
				document.getElementById("form7").style.display = "none"
			} else if(questaoEscolhida == "mecanica"){
				document.getElementById("enunciado").innerHTML = "(Enem/2017) Em uma colisão frontal entre dois automóveis, a força que o cinto de segurança exerce sobre o tórax e abdômen do motorista pode causar lesões graves nos órgãos internos. Pensando na segurança do seu produto, um fabricante de automóveis realizou testes em cinco modelos diferentes de cinto. Os testes simularam uma colisão de 0,30 segundo de duração, e os bonecos que representavam os ocupantes foram equipados com acelerômetros. Esse equipamento registra o módulo da desaceleração do boneco em função do tempo. Os parâmetros como massa dos bonecos, dimensões dos cintos e velocidade imediatamente antes e após o impacto foram os mesmos para todos os testes. O resultado final obtido está no gráfico de aceleração por tempo."
				document.getElementById("enunciado_secundario").innerHTML = "Qual modelo de cinto oferece menor risco de lesão ao motorista?"
				document.getElementById("form1").style.display = "none"
				document.getElementById("form2").style.display = "block"
				document.getElementById("form3").style.display = "none"
				document.getElementById("form4").style.display = "none"
				document.getElementById("form5").style.display = "none"
				document.getElementById("form6").style.display = "none"
				document.getElementById("form7").style.display = "none"
			} else if(questaoEscolhida == "empuxo"){
				document.getElementById("enunciado").innerHTML = "(Enem/2010) Em um experimento realizado para determinar a densidade da água de um lago, foram utilizados alguns materiais conforme ilustrado: um dinamômetro D com graduação de 0 N a 50 N e um cubo maciço e homogêneo de 10 cm de aresta e 3 kg de massa. Inicialmente, foi conferida a calibração do dinamômetro, constatando-se a leitura de 30 N quando o cubo era preso ao dinamômetro e suspenso no ar. Ao mergulhar o cubo na água do lago, até que metade do seu volume ficasse submersa, foi registrada a leitura de 24 N no dinamômetro."
				document.getElementById("enunciado_secundario").innerHTML = "Considerando que a aceleração da gravidade local é de 10 m/s, a densidade da água do lago, em g/cm³, é"
				document.getElementById("form1").style.display = "none"
				document.getElementById("form2").style.display = "none"
				document.getElementById("form3").style.display = "block"
				document.getElementById("form4").style.display = "none"
				document.getElementById("form6").style.display = "none"
				document.getElementById("form5").style.display = "none"
				document.getElementById("form7").style.display = "none"
			} else if(questaoEscolhida == "termometria"){
				document.getElementById("enunciado").innerHTML = "(Enem/2013) Em um experimento foram utilizadas duas garrafas PET, uma pintada de branco e a outra de preto, acopladas cada uma a um termômetro. No ponto médio da distância entre as garrafas, foi mantida acesa, durante alguns minutos, uma lâmpada incandescente. Em seguida a lâmpada foi desligada. Durante o experimento, foram monitoradas as temperaturas das garrafas: a) enquanto a lâmpada permaneceu acesa e b) após a lâmpada ser desligada e atingirem equilíbrio térmico com o ambiente."
				document.getElementById("enunciado_secundario").innerHTML = "A taxa de variação da temperatura da garrafa preta, em comparação à da branca, durante todo experimento, foi"
				document.getElementById("form1").style.display = "none"
				document.getElementById("form2").style.display = "none"
				document.getElementById("form3").style.display = "none"
				document.getElementById("form4").style.display = "block"
				document.getElementById("form5").style.display = "none"
				document.getElementById("form6").style.display = "none"
				document.getElementById("form7").style.display = "none"
			} else if(questaoEscolhida == "termodinamica"){
				document.getElementById("enunciado").innerHTML = "(Enem/2014) Um sistema de pistão contendo um gás é mostrado na figura. Sobre a extremidade superior do êmbolo, que pode movimentar-se livremente sem atrito, encontra-se um objeto. Através de uma chapa de aquecimento é possível fornecer calor ao gás e, com auxílio de um manômetro, medir sua pressão. A partir de diferentes valores de calor fornecido, considerando o sistema como hermético, o objeto elevou-se em valores Ah, como mostrado no gráfico. Foram estudadas, separadamente, quantidades equimolares de dois diferentes gases, denominados M e V."
				document.getElementById("enunciado_secundario").innerHTML = "A diferença no comportamento dos gases no experimento decorre do fato de o gás M, em relação ao V, apresentar"
				document.getElementById("form1").style.display = "none"
				document.getElementById("form2").style.display = "none"
				document.getElementById("form3").style.display = "none"
				document.getElementById("form4").style.display = "none"
				document.getElementById("form5").style.display = "block"
				document.getElementById("form6").style.display = "none"
				document.getElementById("form7").style.display = "none"
			} else if(questaoEscolhida == "gases"){
				document.getElementById("enunciado").innerHTML = "Um gás ideal, em seu estado inicial 1, encontra-se a uma pressão PA e volume VA. Ao ser submetido a uma transformação isotérmica, o gás passa para o estado 2, em que PB = 0,8PA."
				document.getElementById("enunciado_secundario").innerHTML = "A relação entre os volumes VA e VB é:"
				document.getElementById("form1").style.display = "none"
				document.getElementById("form2").style.display = "none"
				document.getElementById("form3").style.display = "none"
				document.getElementById("form4").style.display = "none"
				document.getElementById("form5").style.display = "none"
				document.getElementById("form6").style.display = "block"
				document.getElementById("form7").style.display = "none"
			} else if(questaoEscolhida == "dilatacao"){
				document.getElementById("enunciado").innerHTML = "(Fuvest) Para ilustrar a dilatação dos corpos, um grupo de estudantes apresenta, em uma feira de ciências, o instrumento esquematizado na figura abaixo. Nessa montagem, uma barra de alumínio com 30 cm de comprimento está apoiada sobre dois suportes, tendo uma extremidade presa ao ponto inferior do ponteiro indicador e a outra encostada num anteparo fixo. O ponteiro pode girar livremente em torno do ponto O, sendo que o comprimento de sua parte superior é 10 cm e, o da inferior, 2 cm. Se a barra de alumínio, inicialmente à temperatura de 25ºC, for aquecida a 225ºC, o deslocamento da extremidade superior do ponteiro será, aproximadamente, de:"
				document.getElementById("enunciado_secundario").innerHTML = "DADOS: O coeficiente de dilatação linear da barra é de 2x10^-5 °C^-1"
				document.getElementById("form1").style.display = "none"
				document.getElementById("form2").style.display = "none"
				document.getElementById("form3").style.display = "none"
				document.getElementById("form4").style.display = "none"
				document.getElementById("form5").style.display = "none"
				document.getElementById("form6").style.display = "none"
				document.getElementById("form7").style.display = "block"
			}
		}