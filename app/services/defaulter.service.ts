import { Injectable } from "@angular/core";
import { Http, Response } from '@angular/http';
import 'rxjs/RX';

@Injectable()
export class DefaulterService {
	
	//private endpoint_url: string = "http://www.pactscheme.com/apiCustom/Defaulter/GetDefaulter?search=h";	
	private endpoint_url: string = "http://www.pactscheme.com/apiCustom/Defaulter/GetDefaulter";	

	defaulters: Array<{ name: string }>;

	constructor(private http:Http) {
		this.http = http;
	}

	getDefaulters(search:string){
		//this.endpoint_url = this.endpoint_url + "?search=" + search;
		//return this.http.get(this.endpoint_url).toPromise().then(res => res.json(), err => console.log(err));

		this.defaulters = [];
		for (var i = 0; i <= 10; i++) {
			this.defaulters.push({ name: "Defaulter " + i });
		}		
		return this.defaulters;
	}
}