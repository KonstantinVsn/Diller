import {Injectable} from "@angular/core";
import {BrowserXhr} from "@angular/http";
@Injectable()
/**
 * @author AhsanAyaz
 * We're extending the BrowserXhr to support CORS
 */
export class CustExtBrowserXhr extends BrowserXhr {
  constructor() {
      super();
  }
  build(): any {
    let xhr = super.build();
    xhr.headers = new Headers({'Access-Control-Allow-Origin': '*'});
    xhr.withCredentials = true;             // this is all the magic we need for now
    return <any>(xhr);
  }
}