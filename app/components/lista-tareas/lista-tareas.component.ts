import { Component, Pipe, Directive, PipeTransform, HostListener } from '@angular/core';

import { Task } from '../../task';

const TASKS: Task[] = [
	{
		name: 'Completar el curso de Angular 2',
		deadline: new Date('11/12/2016'),
		queued: false,
		tareasRequeridas: 1
	},{
		name: 'Completar el curso de Polymer',
		deadline: new Date('12/22/2016'),
		queued: false,
		tareasRequeridas: 2
	},{
		name: 'Completar el curso de FireBase',
		deadline: new Date('12/30/2016'),
		queued: false,
		tareasRequeridas: 3
	},{
		name: 'Completar el curso de TypeScript',
		deadline: new Date('01/01/2017'),
		queued: false,
		tareasRequeridas: 4
	}		
];

@Component({
	moduleId: module.id,
	selector: 'lista-tareas',
	templateUrl: 'lista-tareas.component.html',
	styleUrls: ['lista-tareas.component.css']
})

export class ListaTareasComponent{
	today: Date;
	tasks: Task[];
	queuedTareas: number;
	queueHeaderMapping: any = {
		'=0': 'Sin tareas',
		'=1': 'Una tarea',
		'other': '# tareas'
	};

	constructor() {
		this.tasks = TASKS;
		this.today = new Date();
	}

	toggleTask( task: Task ): void {
		task.queued = !task.queued; 
		this.actualizarTareasEnCola();
	}

	private actualizarTareasEnCola(): void {
		this.queuedTareas = this.tasks
		.filter((task: Task) => task.queued)
		.reduce((tareas: number, queuedTask: Task) => {
			return tareas + queuedTask.tareasRequeridas;
		},0);
	}
}