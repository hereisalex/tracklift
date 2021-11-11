import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { GroceriesServiceService } from '../groceries-service.service';
import { InputDialogServiceService } from '../input-dialog-service.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  
  title = "Groceries"

  constructor(public toastController: ToastController, 
              public alertController: AlertController, 
              public dataService: GroceriesServiceService,
              public inputDialogService: InputDialogServiceService) { 

  }

  loadItems() {
    return this.dataService.getItems();
  }

async removeItem(item, index) {
  console.log("Removing Item: ", item, index);
  const toast = await this.toastController.create({
    message: 'Removed ' + item.name,
    duration: 2000
  });
  toast.present();

  this.dataService.removeItem(index);
}

async editItem(item, index) {
  console.log("Editing Item: ", item, index);
  const toast = await this.toastController.create({
    message: 'Editing ' + item.name,
    duration: 2000
  });
  toast.present();
  this.inputDialogService.showPrompt(item, index);
}

async addItem() {
  console.log("Adding Item");
  this.inputDialogService.showPrompt();
  };
  

  

  
}
