import { Component, Input, Pipe, Directive, PipeTransform, OnInit, HostListener } from '@angular/core';

interface Task {
	name: string;
	deadline: Date;
	queued: boolean;
	tareasRequeridas: number;
}

class TaskService{
	public taskStore: Task[] = [];

	constructor(){
		const tasks = [
			{
				name: 'tarea 1',
				deadline: '03 Dic 2016',
				tareasRequeridas: 3
			},{
				name: 'tarea 2',
				deadline: '12 Dic 2016',
				tareasRequeridas: 2
			}{
				name: 'tarea 3',
				deadline: '21 Dic 2016',
				tareasRequeridas: 1
			}
		]
	}
}