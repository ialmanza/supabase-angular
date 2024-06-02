import { Component, OnInit } from '@angular/core'
import { SupabaseService } from './services/supabase.service';
import { AccountComponent } from "./components/account/account.component";
import { AuthComponent } from "./components/auth/auth.component";
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [AccountComponent, AuthComponent, CommonModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  title = 'supabase-angular';
  session = this.supabase.session

  constructor(private readonly supabase: SupabaseService) {

  }

  ngOnInit() {
    this.supabase.authChanges((_, session) => (this.session = session))
  }
}
