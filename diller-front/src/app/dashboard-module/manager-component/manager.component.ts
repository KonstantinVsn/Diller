import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../services/manager.service';
import { Manager } from '../models/manager';
import { TemplateRef, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css'],
  providers: [ManagerService]
})

export class ManagerComponent implements OnInit {
  //типы шаблонов
  @ViewChild('readOnlyTemplate') readOnlyTemplate: TemplateRef<any>;
  @ViewChild('editTemplate') editTemplate: TemplateRef<any>;

  editedManager: Manager;
  managers: Array<Manager>;
  isNewRecord: boolean;
  statusMessage: string;

  constructor(private serv: ManagerService) {
    this.managers = new Array<Manager>();
  }

  ngOnInit() {
    //this.loadmanagers();
   }
  
  //загрузка пользователей
  private loadmanagers() {
    this.serv.getManagers().subscribe((data: Manager[]) => {
      this.managers = data;
    });
  }
  // добавление пользователя
  addManager() {
    this.editedManager= new Manager("", "", 0, "");
    this.managers.push(this.editedManager);
    this.isNewRecord = true;
  }

  // редактирование пользователя
  editManager(manager: Manager) {
    this.editedManager = new Manager(manager.name, manager.email, manager.id,  manager.phone);
  }
  // загружаем один из двух шаблонов
  loadTemplate(manager: Manager) {
    if (this.editedManager && this.editedManager.id == manager.id) {
      return this.editTemplate;
    } else {
      return this.readOnlyTemplate;
    }
  }
  // сохраняем пользователя
  saveManager() {
    if (this.isNewRecord) {
      // добавляем пользователя
      this.serv.createManager(this.editedManager).subscribe(data => {
        this.statusMessage = 'Данные успешно добавлены',
          this.loadmanagers();
      });
      this.isNewRecord = false;
      this.editedManager = null;
    } else {
      // изменяем пользователя
      this.serv.updateManager(this.editedManager.id, this.editedManager).subscribe(data => {
        this.statusMessage = 'Данные успешно обновлены',
          this.loadmanagers();
      });
      this.editedManager = null;
    }
  }
  // отмена редактирования
  cancel() {
    // если отмена при добавлении, удаляем последнюю запись
    if (this.isNewRecord) {
      this.managers.pop();
      this.isNewRecord = false;
    }
    this.editedManager = null;
  }
  // удаление пользователя
  deleteManager(manager: Manager) {
    this.serv.deleteManager(manager.id).subscribe(data => {
      this.statusMessage = 'Данные успешно удалены',
        this.loadmanagers();
    });
  }
}
