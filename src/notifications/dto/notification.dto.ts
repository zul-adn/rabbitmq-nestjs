import { ApiProperty, ApiBody } from '@nestjs/swagger';
export class NotificationDto {
    // constructor(
    //     public identifier: string,
    //     public type: string,
    //     public device: string,
    //     public text: string
    // ){}

    constructor(partial: Partial<NotificationDto>) {
        Object.assign(this, partial);
      }

      @ApiProperty()
      identifier: string;

      @ApiProperty()
      type: string;
    
      @ApiProperty()
      device: string;

      @ApiProperty()
      public text: string
}