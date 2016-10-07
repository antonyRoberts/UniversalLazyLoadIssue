import { Component } from '@angular/core'

@Component({
    selector: 'main-header',
    template: ` <div>
        {{title}}
        </div>
    `
 })
export class MainToolbarComponent{
    private title = 'Lazy Load'
    constructor(){}

} 