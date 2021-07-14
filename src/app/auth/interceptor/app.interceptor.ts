import {
  HttpErrorResponse,
  HttpEvent, HttpHandler, HttpInterceptor, HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

// const TOKEN = `eyJ4NXQiOiJaalJtWVRNd05USmpPV1U1TW1Jek1qZ3pOREkzWTJJeU1tSXlZMkV6TWpkaFpqVmlNamMwWmciLCJraWQiOiJaalJtWVRNd05USmpPV1U1TW1Jek1qZ3pOREkzWTJJeU1tSXlZMkV6TWpkaFpqVmlNamMwWmdfUlMyNTYiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJsZWlsYV9oZXJtZXMiLCJyb2xlIjpbIklOVFwvY3JtX3VzZXIiLCJJTlRcL2hndl9ncmNfZ2VzdG9yX2NhcnRlaXJhIiwiSU5UXC9vcmllbnRhZG9yX2FjZXNzbyIsIklOVFwvZm5jX2dlcmVudGVfcHJvZHV0b3NfaW52ZXN0aW1lbnRvX3ByZXZpZGVuY2lhIiwiSU5UXC9jb29wMDcwNF9wcm9ncmVzc28iLCJJTlRcL2Fncm9tYWlzX2F1dG9yaXphZG9yIiwiSU5UXC9jc2dfY2FwdHVyYSIsIklOVFwvaWlxX3VzZXJzX21pZ3JhZG9zIiwiSU5UXC9hdXRvcl9wcm9wb3N0YV9jcmVkaXRvIiwiSU5UXC9zZXN1aXRlX2JwbV9leGVjdXRvciIsIklOVFwvcGJpX2NvcnBvcmF0aXZvX3VzciIsIklOVFwvYW5hbGlzdGFfY3JlZGl0b19wcmVsaW1pbmFyIiwiSU5UXC9jb250cmF0YWNhb192aWV3IiwiSU5UXC9jb29wMDcwNF91YTA5X3NlZ3Vyb3MiLCJJTlRcL2dlc2dhcmFfcGlsb3RvIiwiSU5UXC90YWdfYXRlbmRpbWVudG9fY29vcCIsIklOVFwvY2FtcG90dl9hdGVuZGltZW50b19vcGVyYWRvciIsIklOVFwvY3JtX2Nvb3BlcmF0aXZhIiwiSU5UXC9mbmNfZ2VyZW50ZV9uZWdvY2lvcyIsIklOVFwvYWdyb19jb25zdWx0YSIsIklOVFwvYWdyb19jb29wZXJhdGl2YSIsIklOVFwvdGJsX2NybV9iaV91c3IiLCJJbnRlcm5hbFwvZXZlcnlvbmUiLCJJTlRcL2NhbGxfbWVuc2FsX2ludmVzdGltZW50b3MiLCJJTlRcL2dlc3Rhb19saW1pdGVfcGlsb3RvIiwiSU5UXC9mbmNfZ2VyZW50ZV9jYXB0YWNhbyIsIklOVFwvaWlxX3VzZXJzX2NhZGlyIiwiSU5UXC9wcm90ZWNfY29vcGVyYXRpdmFfZWRpY2FvIiwiSU5UXC9jb29wMDcwNF9uZWdvY2lvcyIsIklOVFwvYXNfbW9kdWxvX3VhIl0sImlzcyI6Imh0dHBzOlwvXC93c28yaWRlbnRpdHkuaG9tLnNpY3JlZGkubmV0XC9vYXV0aDJcL3Rva2VuIiwiYXVkIjoiQ2xTdENDQ21ReU1iaWZXbHZCdFBGQ1h1b0VVYSIsIlNpY3JlZGlTaXR1YWNhbyI6IjEwMCIsIm5iZiI6MTYyNDczMDA2NSwiYXpwIjoiQ2xTdENDQ21ReU1iaWZXbHZCdFBGQ1h1b0VVYSIsInNjb3BlIjoib3BlbmlkIHByb2ZpbGUiLCJuYW1lIjoiTGVpbGEgRGFpYW5hIEhlcm1lcyIsImV4cCI6MTYyNDczMzY2NSwiaWF0IjoxNjI0NzMwMDY1LCJqdGkiOiJkMjIwYTM5Mi1kMGUyLTQwMDAtYjljMC0yZDM3NWFlMTkyMTYiLCJlbWFpbCI6ImxlaWxhX2hlcm1lc0BzaWNyZWRpLmhvbS5jb20uYnIifQ.YLFgS0e1EnN_yYv3D-ubnjj3J6M-RbMJ75V4wLhLdE7LTyT2mikcz-9KBbqzk7vfuh7qnBZ_kcE63wphP_xad4XXDMLgtBGmlPH3WM1R8msm4bu8UAABYjumGQSad0xTI7WWrBz6qIPus9OGMw7091-UxmEhycfL_c2sZUO3PYM4aQrmlHi-UqOMfe-Bypxx5S5NI-3fkwEX_PalsyCKiDJj5pF9g5qvDaCeoJAjMTL1AT35H-Gqnse35hOzgxZugmis2obqb3COo2IEUEluA8ifgyFrHDZwTlNF5bvKqKlePU4h7EdtlFukfqAUaRmjHCsrAs5EvjZO9m7hLfJRqQ`
const TOKEN = `eyJ4NXQiOiJaalJtWVRNd05USmpPV1U1TW1Jek1qZ3pOREkzWTJJeU1tSXlZMkV6TWpkaFpqVmlNamMwWmciLCJraWQiOiJaalJtWVRNd05USmpPV1U1TW1Jek1qZ3pOREkzWTJJeU1tSXlZMkV6TWpkaFpqVmlNamMwWmdfUlMyNTYiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI0Nzc5NTI2OTA2MCIsInJvbGUiOlsiRVhUXC9hZ3JvbWFpc19yZXZlbmRhcyIsIkludGVybmFsXC9ldmVyeW9uZSJdLCJpc3MiOiJodHRwczpcL1wvd3NvMmlkZW50aXR5LmhvbS5zaWNyZWRpLm5ldFwvb2F1dGgyXC90b2tlbiIsImF1ZCI6IkNsU3RDQ0NtUXlNYmlmV2x2QnRQRkNYdW9FVWEiLCJTaWNyZWRpU2l0dWFjYW8iOiIxMDAiLCJuYmYiOjE2MjQ3MzI1OTIsImF6cCI6IkNsU3RDQ0NtUXlNYmlmV2x2QnRQRkNYdW9FVWEiLCJzY29wZSI6Im9wZW5pZCBwcm9maWxlIiwibmFtZSI6Ikpvw6NvIFJldmVuZGEiLCJleHAiOjE2MjQ3MzYxOTIsImlhdCI6MTYyNDczMjU5MiwianRpIjoiNjRjOTZiNWMtM2VhMy00NzM2LWIzOTItYjczZDM2NjQ4NjhmIiwiZW1haWwiOiJqZWZmZXJzb25fZGFzaWx2YUBzaWNyZWRpLmNvbS5iciJ9.L8VEM6dgraRqZsI2LzkAA3MPUOOWCwtHFESqGIDuuRTmHgk8fk72RRGBI7t4xzLrXIukS0k0YUCgyuFU3mVesKLHOXh4UDdsuOK0Ukic5yIA7FYDRNNaZ6m4RzpLORvhpMlsL8SKSEn2aJVRCVvGGhOFslA_FIsKUWKuYEDKTQ9_ZZdHfyeeIT3_mE-A9mYDR7BcUmEMmlRhSl-lQa1eQv85GTDqxtP0AMTREV82I8HyF9gITOQJr86WigN1b6E83KexO8s3iIavU9vJ1avjskGfjOZG_WXaHEvtxnbEfs0hE5kP0S-zkXJRdLnDneCJWh3hsBE__gfPiw_55xEUNA`
@Injectable()
export class AppInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): any {
    const token = window.localStorage.getItem('accessToken');

    console.log(token);

    let newRequest = request;
    if (token) {
      const headers: any = {
        'Access-Control-Allow-Origin': '*',
        'Cache-control': 'no-cache',
        Pragma: 'no-cache',
        Authorization: `Bearer ${TOKEN}`
      };

      newRequest = request.clone({
        setHeaders: headers,
        withCredentials: true,
      });
    }

    return next.handle(request).pipe(catchError(async (erro) => this.handlerError(erro)));
  }

  handlerError = (response: HttpErrorResponse) => {
    if (response.status === 401) {
      // window.location.href += '/forbidden'
      return;
    }

    return throwError(response);
  };

}
