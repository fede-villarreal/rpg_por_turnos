
// EL HEROE:

let tipoHeroe = ""
let danioBase = 0
let vidaBase = 0


// EL ENEMIGO:

let tipoDeMonstruo = ""
let danioMonstruoBase = 0
let vidaMonstruoBase = 0


// Items:

const items = [
    {
        "nombre": "Casco de Tela",
        "habilidad": 10,
        "defensa": 0,
        "tipoArmadura": "Ligera"
    },
    {
        "nombre": "Casco de Cuero",
        "habilidad": 5,
        "defensa": 5,
        "tipoArmadura": "Equilibrada"
    },
    {
        "nombre": "Casco de Hierro",
        "habilidad": 0,
        "defensa": 10,
        "tipoArmadura": "Pesada"
    },
    {
        "nombre": "Pechera de Tela",
        "habilidad": 10,
        "defensa": 0,
        "tipoArmadura": "Ligera"
    },
    {
        "nombre": "Pechera de Cuero",
        "habilidad": 5,
        "defensa": 5,
        "tipoArmadura": "Equilibrada"
    },
    {
        "nombre": "Pechera de Hierro",
        "habilidad": 0,
        "defensa": 10,
        "tipoArmadura": "Pesada"
    },
    {
        "nombre": "Guantes de Tela",
        "habilidad": 10,
        "defensa": 0,
        "tipoArmadura": "Ligera"
    },
    {
        "nombre": "Guantes de Cuero",
        "habilidad": 5,
        "defensa": 5,
        "tipoArmadura": "Equilibrada"
    },
    {
        "nombre": "Guantes de Hierro",
        "habilidad": 0,
        "defensa": 10,
        "tipoArmadura": "Pesada"
    },
    {
        "nombre": "Botas de Tela",
        "habilidad": 10,
        "defensa": 0,
        "tipoArmadura": "Ligera"
    },
    {
        "nombre": "Botas de Cuero",
        "habilidad": 5,
        "defensa": 5,
        "tipoArmadura": "Equilibrada"
    },
    {
        "nombre": "Botas de Hierro",
        "habilidad": 0,
        "defensa": 10,
        "tipoArmadura": "Pesada"
    }
]


// Elegir Heroe:

function asignarHeroe () {
    tipoHeroe = prompt ( "¿Desea elegir un mago, un cazador o un guerrero?" )
    if ( tipoHeroe.match(/mago/i) ) {
        danioBase = 150
        vidaBase = 225
    } else if ( tipoHeroe.match(/cazador/i) ) {
        danioBase = 80
        vidaBase = 300
    } else if ( tipoHeroe.match(/guerrero/i) ) {
        danioBase = 50
        vidaBase = 450
    } else {
        alert ( "Tipo de héroe inválido, por favor elija entre: mago, cazador o guerrero" )
        asignarHeroe()
    }
}
asignarHeroe()


// Elegir Equipo

let tipoEquipo = ""
function elegirEquipo () {
    const equipoElegido = prompt ( `Seleccione su armadura ingresando: ligera, pesada o equilibrada.\nLas armaduras ligeras tienen habilidad, lo que aumenta el daño del héroe. Las armaduras pesadas tienen defensa, lo que reduce el daño recibido. Mientras que las armaduras equilibradas, tienen una armonía entre los dos stats anteriores:` )
    if ( equipoElegido.match ( /liger[ao]/i ) ) {
        tipoEquipo = "Ligera"
    } else if ( equipoElegido.match ( /pesad[ao]/i ) ) {
        tipoEquipo = "Pesada"
    } else if ( equipoElegido.match ( /equilibrad[ao]/i ) ) {
        tipoEquipo = "Equilibrada"
    } else {
        alert ( `Tipo de armadura inválida, por favor elija entre: ligera, pesada o equilibrada` )
        elegirEquipo()
    }
}
elegirEquipo()


// Equipo asignado

const equipoHeroe = items.filter ( ( equipo ) => {
    return equipo.tipoArmadura == tipoEquipo
} )


// Habilidad total del equipo elegido

const habilidadEquipo = equipoHeroe.reduce ( ( habilidadTotal, equipo ) => {
    return habilidadTotal + equipo.habilidad
}, 0 )


// Defensa total del equipo elegido

const defensaEquipo = equipoHeroe.reduce ( ( defensaTotal, equipo ) => {
    return defensaTotal + equipo.defensa
}, 0 )


// Elegir Monstruo

function asignarMonstruo () {
    tipoDeMonstruo = prompt ( "¿Desea luchar contra un gobling, un orco o un demonio?" )
    if ( tipoDeMonstruo.match(/gobling/i) ) {
        danioMonstruoBase = 70
        vidaMonstruoBase = 180
    } else if ( tipoDeMonstruo.match(/orco/i) ) {
        danioMonstruoBase = 110
        vidaMonstruoBase = 350
    } else if ( tipoDeMonstruo.match(/demonio/i) ) {
        danioMonstruoBase = 130
        vidaMonstruoBase = 450
    } else {
        alert ( "Tipo de monstruo inválido, por favor elija entre: gobling, orco o demonio" )
        asignarMonstruo()
    }
}
asignarMonstruo()


// Combate en 3 turnos (Al daño del heroe se le suma la habilidad del equipo, y al daño del monstruo se le resta la defensa del heroe)

function combate () {
    for ( let i=0; i<3; i++ ) {
        vidaMonstruoBase = Math.max ( 0, vidaMonstruoBase - ( danioBase + habilidadEquipo ) )
        alert ( `El ${tipoHeroe} ha atacado al ${tipoDeMonstruo}, por ${ danioBase + habilidadEquipo } puntos de daño.\nAl ${tipoDeMonstruo} le quedan ${vidaMonstruoBase} puntos de vida.` )
        if ( vidaMonstruoBase === 0 ) {
            alert ( `El ${tipoDeMonstruo} ha caído.\n¡El ${tipoHeroe} es el ganador!\n¡Felicidades campeón!` )
            break
        } else {
            vidaBase = Math.max ( 0, vidaBase - ( danioMonstruoBase - defensaEquipo) )
            alert ( `El ${tipoDeMonstruo} ha atacado al ${tipoHeroe}, por ${ danioMonstruoBase - defensaEquipo } puntos de daño.\nAl ${tipoHeroe} le quedan ${vidaBase} puntos de vida.` )
            if ( vidaBase === 0 ) {
                alert ( `El ${tipoHeroe} ha caído.\n¡El ${tipoDeMonstruo} es el ganador!\nNo te desanimes, los héroes no se hacen en un día, sigue entrenando y vuelve a intentarlo...` )
                break
            }
        }
    }
}
combate()


// Resultado del combate en caso que ni el heroe ni el monstruo caigan:

function finDelCombate () {
    if ( vidaBase > 0 && vidaMonstruoBase > 0 ) {
        if ( vidaBase > vidaMonstruoBase ) {
            alert ( `El ${tipoDeMonstruo} huye malherido.\n¡El ${tipoHeroe} es el ganador!\n¡Felicidades campeón!` )
        } else if ( vidaBase < vidaMonstruoBase ) {
            alert ( `Huyes de la batalla antes de que sea demasiado tarde.\n¡El ${tipoDeMonstruo} es el ganador!\nNo te desanimes, los héroes no se hacen en un día, sigue entrenando y vuelve a intentarlo...` )
        } else {
            alert ( `¡Es un empate!\nSigue asi camarada, la proxima vez de seguro lo derrotarás.` )
        }
    }
}
finDelCombate()