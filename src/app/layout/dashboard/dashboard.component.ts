import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    public alerts: Array<any> = [];
    public sliders: Array<any> = [];

    constructor() {
        this.sliders.push({
            imagePath: 'assets/images/slider1.jpg',
            label: 'Spak',
            text: 'Spak papers....'
        }, {
            imagePath: 'assets/images/slider2.jpg',
            label: 'Spak',
            text: 'Spak Greenbooks...'
        }, {
            imagePath: 'assets/images/slider3.jpg',
            label: 'New...',
            text: 'Upcoming....'
        });

        this.alerts.push({
            id: 1,
            type: 'success',
            message: `Alerts 1`
        }, {
            id: 2,
            type: 'warning',
            message: `You have the following approvals...`
        });
    }

    ngOnInit() {
    }

    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }
}
