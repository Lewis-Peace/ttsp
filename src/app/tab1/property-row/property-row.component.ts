import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Metadata } from 'src/app/Model/Metadata';

@Component({
  selector: 'app-property-row',
  templateUrl: './property-row.component.html',
  styleUrls: ['./property-row.component.css']
})
export class PropertyRowComponent implements OnInit {

  @Input() propertyName: string = '';
  @Input() propertyNumber: number = -1;
  @Input() propertyGroup: "0th" | "Exif" | "GPS" = '0th';
  @Input() metadata: Metadata | undefined;
  @Output() metadataChange: EventEmitter<Metadata | undefined> = new EventEmitter();

  public propertyValue: string | number | undefined;

  constructor() { }

  ngOnInit() {
    if (!this.metadata) {
      return;
    }
    const data = this.metadata[this.propertyGroup as keyof Metadata];
    this.propertyValue = data[this.propertyNumber as keyof typeof data]
    console.log(this.propertyValue)
  }

  onValueChange(value: string) {
    if (!this.metadata) {
      return;
    }
    if (this.propertyGroup == "0th") {
      this.metadata['0th'][this.propertyNumber] = value;
    } else if (this.propertyGroup == "Exif") {
      this.metadata['Exif'][this.propertyNumber] = value;
    } else if (this.propertyGroup == "GPS") {
      this.metadata['GPS'][this.propertyNumber] = value;
    }
    this.metadataChange.emit(this.metadata);
  }

}
