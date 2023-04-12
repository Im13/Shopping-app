import { Component, OnDestroy, OnInit } from "@angular/core";
import { DataStorage } from "../shared/data-storage.service";
import { AuthService } from "../authenticate/auth/auth.service";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit, OnDestroy {
  collapsed = true;
  private userSub: Subscription;

  constructor(private dataStorageService: DataStorage, private authService: AuthService) {}

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe();
  }

  onSaveData() { 
    this.dataStorageService.storeRecipes();
  }

  onFetchData() {
    this.dataStorageService.fetchRecipes().subscribe();
  }
}
