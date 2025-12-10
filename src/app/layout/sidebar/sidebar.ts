import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SidebarItens } from '../../components/sidebar-itens/sidebar-itens';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, SidebarItens],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {}
