import { ToastrService } from "ngx-toastr";
import { Injectable } from '@angular/core';
import { HttpErrorResponse } from "@angular/common/http";

@Injectable()
export class Notify {

    constructor(private notify: ToastrService) {
    }

    log(info) {
        console.log(info);
    }
    
    showSuccess() {
        this.notify.success('Success!');
        //this.hide = true
    }

    showSuccessMessage(message: string) {
        this.notify.success(message);
        //this.hide = true
    }

    showError(responce: Response) {
        if (responce.status == 0)
            return this.notify.error('Error', "Status 500");
        var error = this.getResponseError(responce.json());
        this.logError(error)
        this.notify.error(error, 'Error');
        //this.hide = true
    }

    showErrorHttpResponse(responce: HttpErrorResponse) {
        var error = this.getResponseError(responce.error);
        this.logError(error)
        this.notify.error(error, 'Error');
        //this.hide = true
    }

    logError(err: string) {
        console.log('There was an error: ' + err);
    }

    getResponseError(error) {
        var result: string = ""
        for (var key in error) {
            if (error[key])
                result += error[key] + '\n';
        }
        return result
    }
}