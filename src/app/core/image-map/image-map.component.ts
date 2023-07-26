import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ImageMapCoordinate } from './image-map-coordinate';

@Component({
  selector: 'image-map',
  templateUrl: './image-map.component.html',
  styleUrls: ['./image-map.component.scss']
})
export class ImageMapComponent {

  @Input()
  src!: string;
  
  @Input()
  canEdit!: boolean

  @Input()
  coordinates!: ImageMapCoordinate[];
  
  @Output('onClick')
  onClick: EventEmitter<ImageMapCoordinate> = new EventEmitter();
  
  getCoordinateStyle(coordinate: ImageMapCoordinate): object {
    return {
      top: `${coordinate.y}px`,
      left: `${coordinate.x}px`,
      height: `${coordinate.height}px`,
      width: `${coordinate.width}px`,
    };
  }

  onAreaClick(coordinate: ImageMapCoordinate){
    this.onClick.emit(coordinate);
  }

  onAreaContext(e: MouseEvent, coordinate: ImageMapCoordinate) {
    if(this.canEdit)
    {
      if(coordinate) {
        console.log('editing')
       
      }
      else {
        console.log('creating')
      
      }
    
      e.stopPropagation();
      return false;
    }
    return true;
  }

  onAreaCreate(x: number, y: number): ImageMapCoordinate {
    const coordinate = new ImageMapCoordinate({x, y, width: 100, height: 100});
    return coordinate;
  }

  onAreaEdit(coordinate: ImageMapCoordinate): ImageMapCoordinate {
    return coordinate;
  }


}
