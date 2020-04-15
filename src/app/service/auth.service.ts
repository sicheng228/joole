import { Injectable } from '@angular/core';

@Injectable({ providedIn: "root" })
export class AuthService {
  createUser(email: string, password: string) {
  const authData: AuthData = { email: email, password: password };
  this.http.post(BACKEND_URL + "/signup", authData).subscribe(
    () => {
      this.router.navigate(["/"]);
    },
    error => {
      this.authStatusListener.next(false);
    }
  );
}

login(email: string, password: string) {
  const authData: AuthData = { email: email, password: password };
  this.http
    .post<{ token: string; expiresIn: number; userId: string }>(
      BACKEND_URL + "/login",
      authData
    )
    .subscribe(
      response => {
        const token = response.token;
        this.token = token;
        if (token) {
          const expiresInDuration = response.expiresIn;
          this.setAuthTimer(expiresInDuration);
          this.isAuthenticated = true;
          this.userId = response.userId;
          this.authStatusListener.next(true);
          const now = new Date();
          const expirationDate = new Date(
            now.getTime() + expiresInDuration * 1000
          );
          console.log(expirationDate);
          this.saveAuthData(token, expirationDate, this.userId);
          this.router.navigate(["/"]);
        }
      },
      error => {
        this.authStatusListener.next(false);
      }
    );
}

}
