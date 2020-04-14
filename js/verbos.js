var verbos = [
    ["be", "was/were", "been", "ser/estar"],
    ["beat", "beat", "beaten", "golpear"],
    ["become", "became", "become", "convertirse en"],
    ["begin", "began", "begun", "empezar"],
    ["break", "broke", "broken", "romper"],
    ["bring", "brought", "brought", "traer"],
    ["build", "built", "built", "construir"],
    ["burn", "burnt", "burnt", "quemar(se)"],
    ["buy", "bought", "bought", "comprar"],
    ["catch", "caught", "caught", "coger"],
    ["choose", "chose", "chosen", "elegir"],
    ["come", "came", "come", "venir"],
    ["cost", "cost", "cost", "costar"],
    ["cut", "cut", "cut", "cortar"],
    ["do", "did", "done", "hacer"],
    ["draw", "drew", "drawn", "dibujar"],
    ["drink", "drank", "drunk", "beber"],
    ["drive", "drove", "driven", "conducir"],
    ["eat", "ate", "eaten", "comer"],
    ["fall", "fell", "fallen", "caer(se)"],
    ["feel", "felt", "felt", "sentirse"],
    ["find", "found", "found", "encontrar"],
    ["fly", "flew", "flown", "volar"],
    ["forget", "forgot", "forgotten", "olvidar(se)"],
    ["forgive", "forgave", "forgiven", "perdonar"],
    ["get", "got", "got", "conseguir"],
    ["give", "gave", "given", "dar"],
    ["go", "went", "gone", "irse"],
    ["grow", "grew", "grown", "crecer"],
    ["hang out", "hung out", "hung out", "colgar"],
    ["have", "had", "had", "haber, tener"],
    ["hear", "heard", "heard", "escuchar"],
    ["hide", "hid", "hidden", "esconder(se)"],
    ["hit", "hit", "hit", "golpear"],
    ["hurt", "hurt", "hurt", "hacer daño"],
    ["keep", "kept", "kept", "guardar"],
    ["know", "knew", "known", "saber, conocer"],
    ["lay", "laid", "laid", "poner"],
    ["learn", "learnt/learned", "learnt/learned", "aprender"],
    ["leave", "left", "left", "dejar"],
    ["let", "let", "let", "permitir"],
    ["lie", "lay", "lain", "echarse"],
    ["lose", "lost", "lost", "perder"],
    ["make", "made", "made", "hacer"],
    ["mean", "meant", "meant", "significar"],
    ["meet", "met", "met", "encontrar(se)"],
    ["pay", "paid", "paid", "pagar"],
    ["put", "put", "put", "poner"],
    ["read", "read", "read", "leer"],
    ["ride", "rode", "ridden", "montar"],
    ["ring", "rang", "rung", "sonar"],
    ["run", "ran", "run", "correr"],
    ["say", "said", "said", "decir"],
    ["see", "saw", "seen", "ver"],
    ["sell", "sold", "sold", "vender(se)"],
    ["send", "sent", "sent", "enviar"],
    ["set up", "set up", "set up", "poner"],
    ["shine", "shone", "shone", "brillar"],
    ["shoot", "shot", "shot", "disparar"],
    ["show", "showed", "shown", "mostrar"],
    ["sing", "sang", "sung", "cantar"],
    ["sit", "sat", "sat", "sentar(se)"],
    ["sleep", "slept", "slept", "dormir"],
    ["speak", "spoke", "spoken", "hablar"],
    ["speed", "sped", "sped", "acelerar"],
    ["spell", "spelt", "spelt", "deletrear"],
    ["spend", "spent", "spent", "pasar, gastar"],
    ["split up", "split up", "split up", "dividir, separar"],
    ["stand up", "stood up", "stood up", "ponerse en pie"],
    ["steal", "stole", "stolen", "robar"],
    ["swim", "swam", "swum", "nadar"],
    ["take", "took", "taken", "tomar(se)"],
    ["teach", "taught", "taught", "enseÒar"],
    ["tell", "told", "told", "contar, decir"],
    ["think", "thought", "thought", "pensar"],
    ["understand", "understood", "understood", "entender"],
    ["wake up", "woke up", "woken up", "despertar(se)"],
    ["wear", "wore", "worn", "llevar (puesto)"],
    ["win", "won", "won", "ganar"],
    ["write", "wrote", "written", "escribir"],
    ["arise", "arose", "arisen", "surgir"],
    ["awake", "awoke", "awoken", "despertar(se)"],
    ["bear", "bore", "borne", "soportar"],
    ["bid", "bid", "bid", "pujar"],
    ["bind", "bound", "bound", "unir"],
    ["bleed", "bled", "bled", "sangrar"],
    ["breed", "bred", "bred", "criar"],
    ["bend", "bent", "bent", "doblar(se)"],
    ["bet", "bet", "bet", "apostar"],
    ["bite", "bit", "bitten", "morder"],
    ["blow", "blew", "blown", "soplar"],
    ["cast", "cast", "cast", "tirar"],
    ["cling", "clung", "clung", "aferrarse"],
    ["dream", "dreamt", "dreamt", "soÒar"],
    ["grind", "ground", "ground", "moler"],
    ["lean", "leant", "leant", "apoyarse"],
    ["leap", "leapt", "leapt", "brincar"],
    ["overcome", "overcame", "overcome", "vencer"],
    ["saw", "sawed", "sawn", "serrar"],
    ["shear", "sheared", "shorn", "esquilar"],
    ["smell", "smelt", "smelt", "oler"],
    ["sow", "sowed", "sown", "sembrar"],
    ["spill", "spilt", "spilt", "derramar"],
    ["spoil", "spoilt", "spoilt", "estropear(se)"],
    ["strive", "strove", "striven", "esforzarse"],
    ["tread", "trod", "trodden", "pisar"],
    ["undergo", "underwent", "undergone", "sufrir"],
    ["upset", "upset", "upset", "afligir"],
    ["wind", "wound", "wound", "enrollar"],
    ["withdraw", "withdrew", "withdrawn", "retirar(se)"],
    ["wring", "wrung", "wrung", "torcer"],
    ["broadcast", "broadcast", "broadcast", "difundir"],
    ["creep", "crept", "crept", "arrastrar"],
    ["deal", "dealt", "dealt", "tratar"],
    ["dig", "dug", "dug", "cavar"],
    ["feed", "fed", "fed", "alimentar"],
    ["fight", "fought", "fought", "pelearse"],
    ["flee", "fled", "fled", "huir"],
    ["forbid", "forbade", "forbidden", "prohibir"],
    ["freeze", "froze", "frozen", "helar(se)"],
    ["hold", "held", "held", "agarrar(se)"],
    ["kneel", "knelt", "knelt", "arrodillarse"],
    ["lead", "led", "led", "llevar"],
    ["lend", "lent", "lent", "prestar"],
    ["light", "lit", "lit", "encender(se)"],
    ["rise", "rose", "risen", "levantarse"],
    ["seek", "sought", "sought", "buscar"],
    ["shake", "shook", "shaken", "agitar"],
    ["shrink", "shrank", "shrunk", "encoger(se)"],
    ["shut", "shut", "shut", "cerrar(se)"],
    ["sink", "sank", "sunk", "hundir(se)"],
    ["slide", "slid", "slid", "resbalar"],
    ["spit", "spat", "spat", "escupir"],
    ["spread", "spread", "spread", "extender(se)"],
    ["spring", "sprang", "sprung", "saltar"],
    ["stick", "stuck", "stuck", "pegar(se)"],
    ["sting", "stung", "stung", "picar"],
    ["stink", "stank", "stunk", "apestar"],
    ["strike", "struck", "struck", "golpear"],
    ["swear", "swore", "sworn", "jurar"],
    ["sweep", "swept", "swept", "barrer"],
    ["swing", "swung", "swung", "balancear(se)"],
    ["tear", "tore", "torn", "romper(se)"],
    ["throw", "threw", "thrown", "lanzar"],
    ["weave", "wove", "woven", "tejer"],
    ["weep", "wept", "wept", "llorar"]
];

//Array de verbos para el juego falta Una
var verbosJuego;

//Verbos a completar en el juego faltaUna
var objetivoVerbos; 



//Contador de aciertos
var aciertos;

//Función para los modales
$(document).ready(function () {
    $('.modal').modal();
});

$('#play').click(function () {
    $('#contenido').load('juego.html');

});

//Función random entre 2 números
function numRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//Función que quita una de las palabras
function faltaUna() {
    verbosJuego = JSON.parse(JSON.stringify(verbos));
    for (var i = 0; i < verbos.length; i++) {
        var quita = numRandom(0, 3);
        verbosJuego[i][quita] = "";
    }
}

/*
 * ********************* FALTA UNA NIVELES *********************
 * ********************* FALTA UNA NIVELES *********************
 * ********************* FALTA UNA NIVELES *********************
 */








 
$('#faltaUnaEasy').click(function () {
    //Esconde la carta de escondeUna.
    esconde('faltaUnaCard');
    //Quito el carrusel si lo hubiera
    $('#carrusel').remove();
    //Quita una de las palabras de cada fila
    faltaUna();
    //Genera la tabla del juego
    $('#contenidoJuego').text(generaTabla('verbosJuego', 'easy'));
    console.log("hola");
    $('.carousel').carousel();
    $('.carousel.carousel-slider').carousel({
        fullWidth: true
    });

});

$('#faltaUnaMedium').click(function () {
    //Esconde la carta de escondeUna.
    esconde('faltaUnaCard');
    //Quito el carrusel si lo hubiera
    $('#carrusel').remove();
    //Quita una de las palabras de cada fila
    faltaUna();
    //Genera la tabla del juego
    $('#contenidoJuego').text(generaTabla('verbosJuego', 'medium'));
    console.log("hola");
    $('.carousel').carousel();
    $('.carousel.carousel-slider').carousel({
        fullWidth: true
    });

});

$('#faltaUnaHard').click(function () {
    //Esconde la carta de escondeUna.
    esconde('faltaUnaCard');
    //Quito el carrusel si lo hubiera
    $('#carrusel').remove();
    //Quita una de las palabras de cada fila
    faltaUna();
    //Genera la tabla del juego
    $('#contenidoJuego').text(generaTabla('verbosJuego', 'hard'));
    console.log("hola");
    $('.carousel').carousel();
    $('.carousel.carousel-slider').carousel({
        fullWidth: true
    });

});
/*
 * ********************* FALTA UNA NIVELES *********************
 * ********************* FALTA UNA NIVELES *********************
 * ********************* FALTA UNA NIVELES *********************
 */
$('#review').click(function () {
    $('#carrusel').remove();
    $('#contenidoJuego').text(generaTabla());
    $('.carousel').carousel();
    $('.carousel.carousel-slider').carousel({
        fullWidth: true
    });
});

//********* CARRUSEL *********
$(document).ready(function () {
    $('.carousel').carousel();
});

$('.carousel.carousel-slider').carousel({
    fullWidth: true
});



//********* CARRUSEL *********


function generaTabla(array, level) {
    objetivoVerbos = verbos.length;
    if (array === 'verbosJuego') {
        aciertos = 0;
        objetivoVerbos = 0;
        array = verbosJuego;
        if(level === 'easy'){
            objetivoVerbos = 2;
        }else if(level === 'medium'){
            objetivoVerbos = 70;
        }else objetivoVerbos = 146;
    } else {
        array = verbos;
        esconde('numVerbo');
        esconde('buscaVerbo');
    }


    //Genera la estructura de la tabla
    $('#contenidoJuego').append('<div id="carrusel" class="carousel carousel-slider">\n\
                \n\
                ');
    for (var i = 0; i < objetivoVerbos; i++) {


        $('#carrusel').append('<div id="itemCarrusel' + i + '" class="carousel-item blue center-align white-text" style="border-radius: 3px;"><h4>Number ' + (i + 1) + ' / ' + objetivoVerbos + '</h4>');
        for (var j = 0; j < verbos[i].length; j++) {
            if (array[i][j] === "") {
                $('#itemCarrusel' + i + '').append($('<div class="input-field col s12 white" style="border: 1px solid #2196f3; border-radius: 3px;">\n\
\n\
<input id="hidden' + i.toString() + j.toString() + '" class="validate col s6 blue-text" style="border-bottom: 1px solid #2196f3; text-transform:uppercase;text-align: center;"></input>\n\
</div>'));
            } else
                $('#itemCarrusel' + i + '').append($('<h4 class="center-align">' + array[i][j] + '</h4>'));

        }
        if (array === verbosJuego) {
            $('#itemCarrusel' + i + '').append('<a id="' + i + '" class="btn white blue-text large waves-effect checkVerbo">Check</a>');
        }
    }
}


//Función para checkear que el verbo es correcto.
$('#contenidoJuego').on('click', '.checkVerbo', function () {

    for (var i = 0; i < verbos.length; i++) {

        if (verbosJuego[this.id][i] === "") {

            if ($('#hidden' + this.id + i).val().toString().toLowerCase() === verbos[this.id][i].toString().toLowerCase()) {

                console.log("Correcto");

                $('#hidden' + this.id + i).addClass('white-text');
                $('#hidden' + this.id + i).val($('#hidden' + this.id + i).val() + ' -> CORRECT!');
                $('#hidden' + this.id + i).addClass('green');

                //Se pone de sólo lectura
                $('#hidden' + this.id + i).attr('readonly', 'readonly');
                
                //Aumento los aciertos y compruebo si he ganado
                aciertos++;
                if(aciertos === objetivoVerbos){
                    hasGanado();                    
                }
                
                setTimeout(function () {
                    $('.carousel').carousel('next');

                }, 1000);


            } else {
                $('#hidden' + this.id + i).val('INCORRECT, TRY AGAIN');
                

                console.log("Error");
            }

        }
    }
});

//Función para que al fallar y volver a pulsar en el input se quite el cartel de 
//'INCORRECT, TRY AGAIN' y se ponga vacío
$('#contenidoJuego').on('click', '.validate', function () {
    //Checkea que no sea un campo ya acertado
    if(!document.getElementById(this.id).hasAttribute('readonly')){
        $('#' + this.id).val('');
    }
    
});

//Método para añadir funcionalidades al carrusel
$(document).on('click', '#faltaUna', function () {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, {
        duration: 250
    });
});

//Método para poner un slide específico
$(document).on('click', '#buscaVerbo', function () {

    var busca = $('#numVerbo').val().toString().toLowerCase();
    console.log(busca);

    var elemento;
    for (var i = 0; i < verbos.length; i++) {
        if (verbos[i].indexOf(busca) !== -1) {
            elemento = i;
            break;
        }
    }

    $('.carousel').carousel('set', elemento);
    console.log(elemento);

});

//Función que controla el modal al pulsar review the verbs
//Lo mostrará sólo si estamos en medio del juego y pulsamos avisando que perderemos 
//el progreso del juego actual.
$('a[href="#modal1"]').on('click', function (ev) {

    if ($('.checkVerbo').length === 0) {
        //Si no existe el carrusel de juego, abro el carrusel de verbos sin mostrar el modal
        ev.preventDefault();
        if ($('#carrusel').length !== 0) {
            $('#carrusel').remove();
            esconde('numVerbo');
            esconde('buscaVerbo');
        } else {
            $('#carrusel').remove();
            $('#contenidoJuego').text(generaTabla());
            $('.carousel').carousel();
            $('.carousel.carousel-slider').carousel({
                fullWidth: true
            });
        }
    } else {
        //Si existe el carrusel de juego, abro el modal y luego cargo el modal de juego encima
        $('#modal1').modal('open');

    }
});

function esconde(prop) {
    var x = document.getElementById(prop);

    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


function hasGanado () {
    $('#modalGanado').modal('open');
}

$('#win').click(function () {
    $('#contenido').load('correo.html');
});


//function check(aux) {
//    console.log('Edit user button clicked');
//    //Saco el id para buscar la respuesta
//    var idButton = aux.id;
//
//    for (var j = 0; j < verbosJuego[idButton].length; j++) {
//        if (verbosJuego[idButton][j] === "") {
//            //Saco la respuesta con el id extraído anteriormente
//            var hidden = '"#hidden' + idButton.toString() + j.toString() + '"';
//            console.log(hidden);
//            var respuesta = $(hidden).text();
//            console.log(respuesta);
//            //Compruebo si es la respuesta correcta
//            if (respuesta.toString().toLowerCase() === verbos[idButton][j]) {
//                console.log("Correct");
//            } else
//                console.log("False");
//        }
//    }
//}






