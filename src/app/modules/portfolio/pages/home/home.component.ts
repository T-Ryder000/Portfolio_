import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ProfileComponent } from '../../components/profile/profile.component';
import { SkillsComponent } from '../../components/skills/skills.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    ProfileComponent,
    SkillsComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
