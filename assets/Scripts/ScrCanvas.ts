

const {ccclass, property} = cc._decorator;

@ccclass
export default class scrCanvas extends cc.Component {
  
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
   
    
    @property(cc.Label)
    GameScore:cc.Label = null;
    score: number = 0;
    
    @property (cc.Prefab)
    DicaLivro: cc.Prefab = null; 
    
    
    
    //newDica: cc.Prefab = null;

    onLoad () 
    {
        var game = cc.director.getPhysicsManager();
        game.enabled=true;
         
        this.spawnNewBook();
    }

    spawnNewBook() {
       var newBook = cc.instantiate(this.bookPrefab);
        
        var posx = this.xMin + Math.random() * (this.xMax - this.xMin);
        var posy = this.yMin + Math.random() * (this.yMax - this.yMin);

        newBook.setPosition(posx,posy);
        this.node.addChild(newBook);
    }

    gainScore() {
        this.score += 1;
        this.GameScore.string = 'Books : '+ this.score;
        
         if (this.score == 5){
            var newDica = cc.instantiate(this.DicaLivro);
            newDica.setPosition(356,99);
            this.node.addChild(newDica);
        }  
        
    }

}
