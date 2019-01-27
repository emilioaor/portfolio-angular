import { Component, OnInit } from '@angular/core';
import { PortfolioItem } from '../portfolio-item';

@Component({
    selector: 'app-portfolio',
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
    portfolioItems: PortfolioItem[] = [
        {
            title: 'Clasificados',
            image: 'assets/img/portfolio/clasificados.jpg',
            description: 'Página web de clasificados, con pagos por paypal para publicaciones premium',
            github: 'https://github.com/emilioaor/clasificados',
            demo: 'https://clasificados.emilioochoa.com.ve/',
            showDescription: true,
            demoUsers: [
                {
                    user: 'admin@mail.com',
                    password: '123456'
                },
                {
                    user: 'user@mail.com',
                    password: '123456'
                }
            ]
        },
        {
            title: 'Control de inventario',
            image: 'assets/img/portfolio/inventory.jpg',
            description: 'Aplicación para el control de inventario y manejo de clientes y proveedores',
            github: 'https://github.com/emilioaor/control-de-inventario-symfony3',
            demo: 'https://control-inventario.emilioochoa.com.ve/',
            showDescription: true,
            demoUsers: [
                {
                    user: 'admin',
                    password: 'test1'
                }
            ]
        },
        {
            title: 'Maquinaria pesada',
            image: 'assets/img/portfolio/alquiler-de-maquinaria.jpg',
            description: 'Aplicación para el control de solicitudes de alquiler de maquinaria pesada',
            github: 'https://github.com/emilioaor/control-de-maquinaria-pesada',
            demo: 'https://maquinaria-pesada.emilioochoa.com.ve/',
            showDescription: true,
            demoUsers: [
                {
                    user: 'administrador',
                    password: '123456'
                },
                {
                    user: 'cliente',
                    password: '123456'
                },
                {
                    user: 'encargado',
                    password: '123456'
                }
            ]
        },
        {
            title: 'Tu hipico online',
            image: 'assets/img/portfolio/hipico.jpg',
            description: ([
                'Aplicación para el control de ventas de carreras de caballos, con',
                'ganadores, tablas fijas e impresión de ticket en una tickera'
            ]).join(' '),
            github: 'https://github.com/emilioaor/tu-hipico-online',
            demo: 'https://hipico.emilioochoa.com.ve/',
            showDescription: true,
            demoUsers: [
                {
                    user: 'admin',
                    password: '123456'
                },
                {
                    user: 'taq1',
                    password: '123456'
                }
            ]
        },
        {
            title: 'Control de solicitudes',
            image: 'assets/img/portfolio/control-de-solicitudes.jpg',
            description: 'Aplicación para el control de solicitudes de servicios, posee dos diferentes tipos de usuario',
            github: 'https://github.com/emilioaor/control-de-solicitudes',
            demo: 'https://control-solicitudes.emilioochoa.com.ve/',
            showDescription: true,
            demoUsers: [
                {
                    user: 'administrador',
                    password: '12345678'
                },
                {
                    user: 'usuario1',
                    password: '12345678'
                }
            ]
        },
        {
            title: 'Acorta enlaces',
            image: 'assets/img/portfolio/shorterLink.jpg',
            description: 'Aplicación para acortar y monitorear enlaces con graficas para representar las visitas',
            github: 'https://github.com/emilioaor/acortador-de-enlaces',
            demo: 'https://acorta-enlaces.emilioochoa.com.ve/',
            showDescription: true,
            demoUsers: [
                {
                    user: 'test@mail.com',
                    password: '123456'
                }
            ]
        }
    ]

    constructor() { }

    ngOnInit() {
    }

}
