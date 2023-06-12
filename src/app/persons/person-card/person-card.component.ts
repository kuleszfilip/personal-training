
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Person } from 'src/app/model/person';

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonCardComponent {
  @Input()
  person!: Person;

}
