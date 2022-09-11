export class Anime {
    private _id: any;
    private _titulo: string;
    private _generos: string; //corrigir para array
    private _imageLink: string; //Link para imagem

    constructor(
        titulo: string,
        generos: string,
        imageLink: string,
    ){
        this._titulo = titulo;
        this._generos = generos;
        this._imageLink = imageLink;
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
    public get imageLink(): string{
        return this._imageLink;
    }
    public set imageLink(imageLink: string){
        this._imageLink = imageLink;
    }
}
