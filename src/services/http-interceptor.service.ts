import {
  HttpContextToken,
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, catchError, of, tap } from 'rxjs';
import { TranslatePipe } from 'src/pipes/translate.pipe';

export const NO_TOAST = new HttpContextToken<boolean>(() => false);

@Injectable({
  providedIn: 'root',
})
export class HttpInterceptorService implements HttpInterceptor {
  constructor(
    private toastr: ToastrService,
    private translate: TranslatePipe
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const shouldSkipInterceptor = req.context.get(NO_TOAST);
    if (shouldSkipInterceptor) return next.handle(req);

    return next.handle(req).pipe(
      tap((evt) => {
        //TODO
        if (evt instanceof HttpResponse) {
          if (evt.body && evt.body.success)
            this.toastr.success(
              evt.body.success.message,
              evt.body.success.title
            );
        }
      }),
      catchError((err: any) => {
        if (!(err instanceof HttpErrorResponse)) return of(err); //Observable of the error

        //Check for all possible error codes via err.status
        switch (err.status) {
          case 0:
            this.toastr.error(
              this.translate.transform('httpError_no_response_message'),
              this.translate.transform('httpError_no_response_title')
            );
            break;

          case 400:
            this.toastr.error(
              this.translate.transform(err.error.error.message),
              this.translate.transform('httpError_bad_request')
            );
            break;

          case 403:
            this.toastr.error(
              this.translate.transform(err.error.error.message),
              this.translate.transform('httpError_unauthorized')
            );
            break;

          case 404:
            this.toastr.error(
              this.translate.transform(err.error.error.message),
              this.translate.transform('httpError_not_found')
            );
            break;

          case 409:
            this.toastr.error(
              this.translate.transform(err.error.error.message),
              this.translate.transform('httpError_conflict_title')
            );
            break;

          //Used when forms are not published
          case 422:
            this.toastr.error(
              this.translate.transform(err.error.error.message),
              this.translate.transform('httpError_unprocessable_entity_title')
            );
            return next.handle(req);
            break;
        }
        return of(err); //Observable of the error
      })
    );
  }
}
