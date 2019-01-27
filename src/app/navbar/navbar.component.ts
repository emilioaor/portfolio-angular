import { Component, OnInit, Input } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    @Input() scrollTop: Number
    showMenu = false
    urlTitle = 'Home'
    url = '/'

    constructor(private router: Router, private titleService: Title) { }

    ngOnInit() {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                this.urlTitle = this.getUrlTitle(this.router.url)
                this.url = this.router.url
                this.titleService.setTitle(`Emilio Ochoa - ${this.urlTitle}`)
            }
        })
    }

    private getUrlTitle(route): string {
        let title = 'Home'

        if (route === '/') {
            title = 'Home'
        } else if (route === '/portfolio') {
            title = 'Portafolio'
        } else if (route === '/contact') {
            title = 'Contacto'
        }

        return title
    }
}
