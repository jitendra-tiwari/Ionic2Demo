import {Page, NavController, NavParams} from 'ionic-angular';
import {ItemDetailsPage} from '../item-details/item-details';
import { DefaulterService } from '../../services/defaulter.service';

@Page({
  templateUrl: 'build/pages/list/list.html',
  providers:[DefaulterService]
})
export class ListPage {  
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;
  searchItem: string;

  constructor(private nav: NavController, navParams: NavParams, service: DefaulterService) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    this.searchItem = navParams.get('search');

    service.getDefaulters(this.searchItem).then(d => this.searchItem = d.message);


    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    for(let i = 1; i < 15; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  itemTapped(event, item) {
    this.nav.push(ItemDetailsPage, {
      item: item
    });
  }
}
