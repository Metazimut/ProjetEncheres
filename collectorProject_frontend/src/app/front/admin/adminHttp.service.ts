import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Admin} from "../../model/admin";
import {AppConfigService} from "../../app-config.service";


@Injectable({
  providedIn: 'root'
})
export class AdminHttpService {

  constructor(private http: HttpClient, private appConfigService: AppConfigService) {
    // this.load();
  }

  findById(id: number): Observable<Admin> {
    return this.http.get<Admin>(this.appConfigService.backEndUrl + "admin/" + id);
  }

  create(admin: Admin): Observable<Admin> {
    return this.http.post<Admin>(this.appConfigService.backEndUrl + "admin/", admin);
  }

  modify(admin: Admin): Observable<Admin>{
    return this.http.put<Admin>(this.appConfigService.backEndUrl + "admin/" + admin.id, admin);
  }

  deleteById(id: number): Observable<void> {
    return this.http.delete<void>(this.appConfigService.backEndUrl + "admin/" + id);
  }

  load(admin:Admin) {
    this.http.get<Admin>(this.appConfigService.backEndUrl + "admin/" + admin.id).subscribe(response => {
    }, error => console.log(error));
  }
}
