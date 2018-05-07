import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../services/manager.service';
import { Manager } from '../models/manager';
import { TemplateRef, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Notify } from '../../shared/notify';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css'],
  providers: [ManagerService, Notify]
})

export class ManagerComponent implements OnInit {
  //типы шаблонов
  @ViewChild('readOnlyTemplate') readOnlyTemplate: TemplateRef<any>;
  @ViewChild('editTemplate') editTemplate: TemplateRef<any>;

  editedManager: Manager;
  managers: Array<Manager>;
  isNewRecord: boolean;
  statusMessage: string;

  constructor(private serv: ManagerService, private notificator: Notify) {
    this.managers = new Array<Manager>();
  }

  ngOnInit() {
    this.loadmanagers();
   }
  
  //загрузка пользователей
  private loadmanagers() {
    this.serv.getManagers().subscribe((data: Manager[]) => {
      this.managers = data;
    });
  }

  private printManagers(){
    console.table(this.managers);
  }

  // добавление пользователя
  addManager() {
    this.editedManager= new Manager(0, "Manger", "", "", "", "",);
    this.managers.push(this.editedManager);
    this.isNewRecord = true;
  }

  // редактирование пользователя
  editManager(manager: Manager) {
    this.editedManager = new Manager(manager.id, manager.role, manager.email, manager.phoneNumber,  manager.firstName, manager.lastName);
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
        this.notificator.showSuccessMessage(this.statusMessage)
        this.loadmanagers();
      },
      err => this.notificator.showErrorHttpResponse(err),
      () => console.log('Completed'));
      this.isNewRecord = false;
      this.editedManager = null;
    } else {
      // изменяем пользователя
      this.serv.updateManager(this.editedManager.id, this.editedManager).subscribe(data => {
        this.statusMessage = 'Данные успешно обновлены'
        this.notificator.showSuccessMessage(this.statusMessage)
          this.loadmanagers();
      },
      err => this.notificator.showErrorHttpResponse(err),
      () => console.log('Completed'));
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
      this.statusMessage = 'Данные успешно удалены'
      this.notificator.showSuccessMessage(this.statusMessage)
      this.loadmanagers();
    },
    err => this.notificator.showErrorHttpResponse(err),
    () => console.log('Completed'));
  }
}
