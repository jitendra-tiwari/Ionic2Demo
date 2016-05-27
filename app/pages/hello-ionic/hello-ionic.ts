import {Page, NavController } from 'ionic-angular';

//import { DefaulterModel } from '../../models/defaulter.model';
import {ListPage} from '../list/list';
//import { DefaulterService } from '../../services/defaulter.service'

@Page({
  templateUrl: 'build/pages/hello-ionic/hello-ionic.html'
})

export class HelloIonicPage {	

	defaulter: string;
	list = ListPage;

	constructor(private nav:NavController){
		this.nav = nav;
	}
  	
	gotoResult(){
		console.log(this.defaulter);		
		this.nav.push(ListPage, { search: this.defaulter });
	}
}
