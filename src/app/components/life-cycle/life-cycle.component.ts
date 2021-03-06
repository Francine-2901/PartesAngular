import { AfterContentChecked, AfterContentInit, AfterViewChecked, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent implements OnInit, OnChanges, DoCheck,
AfterContentInit, AfterContentChecked, AfterViewChecked, OnDestroy
 {
 @Input() number = 10;

  constructor() {
    console.log('chamou o construtor');
  }

  ngOnChanges(): void {
    console.log('chamou o changes');
  }

  ngOnInit(): void {
    console.log('chamou o on Init');
  }

  ngDoCheck(): void {
    console.log('chamou o check');
  }

  ngAfterContentInit(): void {
    console.log('chamou o After Content Init');
  }

  ngAfterContentChecked(): void {
    console.log('chamou o After Content Checked');
  }

  ngAfterViewChecked(): void {
    console.log('chamou o After view Checked'); 
  }

  ngOnDestroy(): void {
    console.log('chamou o on Destroy');
  }
}
