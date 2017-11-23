export abstract class View<T> {

    private _elemento: JQuery;
    private _perScript: boolean;

    constructor(seletor: string, perScript?: boolean) {
        this._elemento = $(seletor);
        this._perScript = perScript;
    }

    update(model: T) {
        let template = this.template(model);

        if (!this._perScript) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }

        this._elemento.html(template);
    }

    abstract template(model: T): string;
}