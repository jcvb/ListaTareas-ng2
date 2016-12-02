import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../task';

@Component({
	moduleId: module.id,
	selector: 'icon-lista-tareas',
	templateUrl: 'icon-lista-tareas.component.html',
	styleUrls: ['icon-lista-tareas.component.css']
})
export class IconListaTareasComponent implements OnInit{
	@Input() task: Task;
	@Input() size: number;
	icons: Object[] = [];

	ngOnInit(){
		this.icons.length = this.task.tareasRequeridas;
		this.icons.fill({name: this.task.name}); 
	}
}