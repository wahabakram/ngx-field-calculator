import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  HostListener,
  ViewChild,
  ElementRef,
} from '@angular/core';

interface CalenderStyle {
  visibility: 'hidden' | 'visible';
  top: string | number;
  left: string | number;
}

interface Position {
  x: number;
  y: number;
}

@Component({
  selector: 'ngx-field-calculator',
  templateUrl: './ngx-field-calculator.component.html',
  styleUrls: ['./ngx-field-calculator.component.scss'],
})
export class NgxFieldCalculatorComponent implements OnInit {
  @Input() placeholder: string;
  @Input() name: string;
  @Input() value: string;
  @Output() valueChange = new EventEmitter<string>();
  @ViewChild('calculator') calculator: ElementRef<HTMLDivElement>;
  @ViewChild('calculatorIcon') calculatorIcon: ElementRef<HTMLDivElement>;
  position: Position;
  isVisible: boolean = false;
  calendarStyles: CalenderStyle = this.defaultStyles();
  operators: Array<string> = ['*', '/', '+', '-', '='];

  @HostListener('document:click', ['$event.target'])
  onClick(targetElement: HTMLElement) {
    if (this.calculator) {
      const clickedInsideCalculator =
        this.calculator?.nativeElement.contains(targetElement);
      const clickedInsideCalculatorIcon =
        this.calculatorIcon?.nativeElement.contains(targetElement);
      if (!clickedInsideCalculator && !clickedInsideCalculatorIcon) {
        this.isVisible = false;
        this.calendarStyles = this.defaultStyles();
      }
    }
  }

  constructor() {}

  ngOnInit(): void {}

  // Change function for value
  changeValue(newValue: any) {
    this.value = newValue;
    this.valueChange.emit(this.value);
  }

  clickHandler(val: string) {
    if (!this.value && !this.operators.includes(val)) {
      this.value = val;
      return;
    }

    if (val === 'AC') {
      this.value = '0';
    } else if (val === 'Back') {
      this.value =
        typeof this.value === 'string'
          ? this.value.slice(0, -1)
          : JSON.stringify(this.value).slice(0, -1);
      if (this.value.length === 0) this.value = '0';
    } else {
      this.value = this.value === '0' ? val : this.value + val;
    }
    this.valueChange.emit(this.value);
  }

  calcResult() {
    try {
      const result = eval(this.cleanNum(this.value));
      if (result < 0) {
        // this.helper.toastError("Value should not be negative.")
      } else if (result === Infinity) {
        // this.helper.toastError("Value should not be infinite.")
      } else {
        this.value = Number.isInteger(result)
          ? result
          : eval(this.cleanNum(this.value)).toFixed(2);
      }
      this.valueChange.emit(this.value);
    } catch (e) {
      // this.helper.toastError("Invalid input format.")
    }
  }

  displayCalculator(event: MouseEvent) {
    this.isVisible = !this.isVisible;

    this.position = {
      x: event?.x - 25,
      y: event?.y + 130,
    };

    this.calendarStyles = {
      visibility: this.isVisible ? 'visible' : 'hidden',
      left: this.isVisible ? `${this.position.x}px` : 0,
      top: this.isVisible ? `${this.position.y}px` : 0,
    };
  }

  // Default styles
  defaultStyles(): CalenderStyle {
    return {
      visibility: 'hidden',
      top: 0,
      left: 0,
    };
  }

  // Clean zero before integers
  cleanNum = (str: string) =>
    str.replace(/\d*(\.\d+)?/g, (n: string): any => n && +n);
}
