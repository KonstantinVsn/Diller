import { ToastrService } from "ngx-toastr";

export class Notify {

    constructor(public toastr: ToastrService) { }

    log(info) {
        console.log(info);
    }
    
    showSuccess() {
        this.toastr.success('Success!');
        //this.hide = true
    }

    showError(responce: Response) {
        if (responce.status == 0)
            return this.toastr.error('Error', "Status 500");
        var error = this.getResponseError(responce.json());
        this.logError(error)
        this.toastr.error(error, 'Error');
        //this.hide = true
    }

    logError(err: string) {
        debugger
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