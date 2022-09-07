export class Anime {
    private _id: any;
    private _titulo: string;
    private _generos: string; //corrigir para array

    constructor(
        titulo: string,
        generos: string,
    ){
        this._titulo = titulo;
        this._generos = generos;
    }

    public get id(): any{
        return this._id;
    }
    public get titulo(): string{
        return this._titulo;
    }
    public set titulo(titulo: string){
        this._titulo = titulo;
    }
    public get generos(): string{
        return this._generos;
    }
    public set generos(generos: string){
        this._generos = generos;
    }
}
