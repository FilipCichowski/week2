import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {catchError, mergeMap, Observable, retry, retryWhen, throwError} from "rxjs";
import {TokenService} from "./services/token.service";
import {ErrorDialogService} from "./error-dialog.service";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // return next.handle(req.clone({setHeaders: {Authorization: this.tokenService.getToken()}})).pipe(
    //   catchError(err => {
    //     console.log(err);
    //     this.errorDialog.renderDialog("Blad").subscribe(result => {
    //       if (result === "retry") {
    //         console.log("should retry");
    //       }
    //     })
    //     return throwError("Not working");
    //
    //   }),
    // )
    // return next.handle(req.clone({setHeaders: {Authorization: this.tokenService.getToken()}})).pipe(
    //   mergeMap((error, i) => {
    //     console.log(error);
    //     return throwError("Not working");
    //   })
    // )
    return next.handle(req.clone({setHeaders: {Authorization: this.tokenService.getToken()}}));
  }


  constructor(private tokenService: TokenService, private errorDialog: ErrorDialogService) {
  }
}
