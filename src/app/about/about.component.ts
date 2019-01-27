import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

    myInfo: MyInfo = {
        name: 'Emilio Arturo',
        lastName: 'Ochoa Ramirez',
        dni: '21.029.522',
        birthDate: '02/10/1992',
        origin: 'Valencia',
        country: 'Venezolano',
        civilState: 'Soltero'
    }

    skills: Skill[] = [
        {
            name: 'Base de datos SQL',
            percentage: 85
        },
        {
            name: 'HTML5',
            percentage: 100
        },
        {
            name: 'CSS3',
            percentage: 100
        },
        {
            name: 'PHP',
            percentage: 95
        },
        {
            name: 'Javascript',
            percentage: 85
        },
        {
            name: 'JQuery',
            percentage: 80
        },
        {
            name: 'Bootstrap',
            percentage: 80
        },
        {
            name: 'Laravel',
            percentage: 90
        },
        {
            name: 'Symfony',
            percentage: 85
        },
        {
            name: 'Angular',
            percentage: 70
        },
        {
            name: 'Vue',
            percentage: 85
        },
        {
            name: 'Git',
            percentage: 90
        }
    ]
    showPersonalInfo = true

    constructor() { }

    ngOnInit() { }
}

interface MyInfo {
    name: string,
    lastName: string,
    dni: string,
    birthDate: string,
    origin: string,
    country: string,
    civilState: string
}

interface Skill {
    name: string,
    percentage: number
}
