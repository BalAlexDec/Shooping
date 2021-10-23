class Professional {
    name :string;
    age :number;
    genre:string;
    weight:number;
    height:number;
    hairColor:string;
    eyeColor:string;
    race:string;
    isRetired:boolean;
    nationality:string;
    oscarNumber:number;
    professional:string;

    constructor(name:string,age:number,genre:string,weight:number,height:number,hairColor:string,eyeColor:string,race:string,isRetired:boolean,nationality:string,oscarNumber:number,professional:string){
        this.name=name;
        this.age=age;
        this.genre=genre;
        this.weight=weight;
        this.height=height;
        this.hairColor=hairColor;
        this.eyeColor=eyeColor;
        this.race=race;
        this.isRetired=isRetired;
        this.nationality=nationality;
        this.oscarNumber=oscarNumber;
        this.professional=professional;
    }
    printAll(){
        console.log("Nombre  "+this.name+" "+"age  "+this.age+" "+"genre  "+this.genre+" "+"weight  "+this.weight+" "+"height  "+this.height+" "+"hairColor  "+this.hairColor+" "+"eyeColor  "+this.eyeColor+" "+"race  "+this.race+" "+"isRetired  "+this.isRetired+" "+"nationality  "+this.nationality+" "+"nationality  "+this.nationality+" "+"oscarNumber  "+this.oscarNumber+" "+"professional  "+this.professional+" ");
    }
}

export{Professional};