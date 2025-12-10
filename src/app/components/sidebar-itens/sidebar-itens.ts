import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar-itens',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar-itens.html',
  styleUrl: './sidebar-itens.css',
})
export class SidebarItens {
  @Input() label: string = '';
  @Input() icon: string = '';
  @Input() routerLink: string = '';
}
