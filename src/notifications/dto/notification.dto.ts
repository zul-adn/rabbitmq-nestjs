export class NotificationDto {
    constructor(
        public identifier: string,
        public type: string,
        public device: string,
        public text: string
    ){}
}