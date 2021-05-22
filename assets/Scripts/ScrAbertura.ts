
const {ccclass, property} = cc._decorator;

@ccclass
export default class ScrAbertura extends cc.Component {
    
    @property (cc.Prefab)       
    bookPrefab: cc.Prefab = null; 
    
    @property
    xMin:  int  = -656;
    @property 
    xMax: int = 200;
    @property 
    yMin: int =300;
    @property
    yMax: int = 312; 

     onLoad () 
    {
        var game = cc.director.getPhysicsManager();
        game.enabled=true;
  
        this.spawnNewBook();

    }

     spawnNewBook() {
        var posx = this.xMin + Math.random() * (this.xMax - this.xMin);
        var posy = this.yMin + Math.random() * (this.yMax - this.yMin);
        
        var newBook = cc.instantiate(this.bookPrefab);
        newBook.setPosition(posx,posy);
        this.node.addChild(newBook);    
     
   
    }

}

    

