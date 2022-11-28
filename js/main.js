
// EL HEROE:

let tipoHeroe = ""
let danioBase = 0
let vidaBase = 0


// EL ENEMIGO:

let tipoDeMonstruo = ""
let danioMonstruoBase = 0
let vidaMonstruoBase = 0


// Elegir Heroe:

function asignarHeroe () {
    tipoHeroe = prompt ( "¿Desea elegir un mago, un guerrero o un tanque?" )
    if ( tipoHeroe.match(/mago/i) ) {
        danioBase = 150
        vidaBase = 225
    } else if ( tipoHeroe.match(/guerrero/i) ) {
        danioBase = 80
        vidaBase = 300
    } else if ( tipoHeroe.match(/tanque/i) ) {
        danioBase = 50
        vidaBase = 450
    } else {
        alert ( "Tipo de héroe inválido, por favor elija entre: mago, guerrero o tanque" )
        asignarHeroe()
    }
}
asignarHeroe()


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


// Combate en 3 turnos

function combate () {
    for ( let i=0; i<3; i++ ) {
        vidaMonstruoBase = Math.max ( 0, vidaMonstruoBase - danioBase )
        alert ( `El ${tipoHeroe} ha atacado al ${tipoDeMonstruo}, por ${danioBase} puntos de daño.\nAl ${tipoDeMonstruo} le quedan ${vidaMonstruoBase} puntos de vida.` )
        if ( vidaMonstruoBase === 0 ) {
            alert ( `El ${tipoDeMonstruo} ha caído.\n¡El ${tipoHeroe} es el ganador!\n¡Felicidades campeón!` )
            break
        } else {
            vidaBase = Math.max ( 0, vidaBase - danioMonstruoBase )
            alert ( `El ${tipoDeMonstruo} ha atacado al ${tipoHeroe}, por ${danioMonstruoBase} puntos de daño.\nAl ${tipoHeroe} le quedan ${vidaBase} puntos de vida.` )
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