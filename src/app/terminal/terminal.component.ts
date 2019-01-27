import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormControl } from '@angular/forms';
import {NavigationEnd, Router} from '@angular/router';

@Component({
    selector: 'app-terminal',
    templateUrl: './terminal.component.html',
    styleUrls: ['./terminal.component.scss']
})
export class TerminalComponent implements OnInit {

    base = 'emilio@pc:~/'
    commandHistory: TerminalCommand[] = []
    commandControl: FormControl

    constructor(private renderer: Renderer2, private router: Router) { }

    ngOnInit() {
        this.commandControl = new FormControl('')

        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                this.base = `emilio@pc:~${this.router.url}`
            }
        })
    }

    onFocus() {
        this.renderer.selectRootElement('.terminal #commandInput').focus()
    }

    sendCommand(event) {
        if (event.keyCode === 13) {

            this.commandHistory .push({
                text: this.base + ' ' + this.commandControl.value,
                typeComamnd: 'command'
            })
            this.processCommand(this.commandControl.value)
            this.commandControl.setValue('')
        }
    }

    processCommand(command) {
        if (! command) {
            command = ''
        }
        command = command.split(' ').filter(c => c !== '').join(' ')
        const splitCommand = command.split(' ')

        if (command === 'clear') {
            this.commandHistory = []
        } else if (command === 'help') {
            this.helpCommand()
        } else if (splitCommand.length === 2 && splitCommand[0] === 'cd'                                                                                                   ) {
            this.cdCommand(splitCommand)
        } else if (command !== '') {
            this.commandHistory.push({text: 'Comando no existe', typeComamnd: 'output'})
        }

        window.setTimeout(() => {
            document.querySelector('.terminal').scrollTop = 999999
        })
    }

    helpCommand() {
        this.commandHistory.push({text: 'clear ............... Borra la salida del terminal', typeComamnd: 'output'})
        this.commandHistory.push({text: 'cd home .......... Ir al home', typeComamnd: 'output'})
        this.commandHistory.push({text: 'cd portafolio ..... Ir al portafolio', typeComamnd: 'output'})
        this.commandHistory.push({text: 'cd contacto ....... Ir a contacto', typeComamnd: 'output'})
    }

    cdCommand(splitCommand: string[]) {
        
        const locations = ['home', 'portafolio', 'contacto']
        const availableLocation = locations.find(l => l === splitCommand[1])

        if (availableLocation) {
            // Ubicacion valida
            if (splitCommand[1] === 'home') {
                splitCommand[1] = ''
            } else if (splitCommand[1] === 'portafolio') {
                splitCommand[1] = 'portfolio'
            } else if (splitCommand[1] === 'contacto') {
                splitCommand[1] = 'contact'
            }

            const route = '/' + splitCommand[1]
            this.router.navigate([route])
        } else {
            // Ubicacion invalida
            this.commandHistory.push({text: `Ubicación "${splitCommand[1]}" no existe`, typeComamnd: 'output'})
        }
    }
}

interface TerminalCommand {
    text: string,
    typeComamnd: TypeComamnd
}

type TypeComamnd = 'command' | 'output'
