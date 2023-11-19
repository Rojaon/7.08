export class Character {
  // private isDetailed: boolean = false;

    constructor(
      private _name: string,
      private _occupation: string,
      private _debt: string,
      private _weapon: string,
      private _id: number
      )
    {}
    
    public get isDetailed(): boolean {
      return this.isDetailed;
    }
    public set isDetailed(value: boolean) {
      this.isDetailed = value;
    }
    public get occupation(): string {
        return this._occupation;
      }
      public set occupation(value: string) {
        this._occupation = value;
      }
    public get debt(): string {
      return this._debt;
    }
    public set debt(value: string) {
      this._debt = value;
    }
    public get weapon(): string {
      return this._weapon;
    }
    public set weapon(value: string) {
      this._weapon = value;
    }
    public get id(): number {
      return this._id;
    }
    public set id(value: number) {
      this._id = value;
    }
    public get name(): string {
      return this._name;
    }
    public set name(value: string) {
      this._name = value;
    }
  
  }