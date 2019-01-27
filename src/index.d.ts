export { };

declare global {
    function Inject(target: Object, propKey: string): any;
    function Injectable(service: any): any;
}