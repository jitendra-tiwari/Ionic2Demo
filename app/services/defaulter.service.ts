import { Injectable } from "@angular/core";
import { Http, Response } from '@angular/http';
import 'rxjs/RX';

@Injectable()
export class DefaulterService {
	
	//private endpoint_url: string = "http://www.pactscheme.com/apiCustom/Defaulter/GetDefaulter?search=h";	
	private endpoint_url: string = "http://www.pactscheme.com/apiCustom/Defaulter/GetDefaulter";	

	constructor(private http:Http) {
		this.http = http;
	}

	getDefaulters(search:string){
		this.endpoint_url = this.endpoint_url + "?search=" + search;
		return this.http.get(this.endpoint_url).toPromise().then(res => res.json(), err => console.log(err));
	}
}