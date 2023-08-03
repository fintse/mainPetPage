import { Component } from '@angular/core';

enum socials {
  Telegram = 'https://t.me/fintse_edya',
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  public readonly myLinks = socials;
}
