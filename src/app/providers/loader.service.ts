import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  isLoading = false;

  constructor(private loadingController: LoadingController) { }

  async showLoading(loadingId: string, loadingMessage: string = 'Loading data...') {
    const loading = await this.loadingController.create({
      id: loadingId,
      message: loadingMessage
    });
    return await loading.present();
  }

  async dismissLoader(loadingId: string) {
      return await this.loadingController.dismiss(null, null, loadingId).then(() => console.log('loading dismissed'));
  }
}
