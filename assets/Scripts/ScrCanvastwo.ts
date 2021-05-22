const {ccclass, property} = cc._decorator;

@ccclass
export default class SrcCanvasTwo extends cc.Component {
   
    @property (cc.Prefab)
    bookgreen: cc.Prefab = null; 
    
    @property (cc.Prefab)
    bookdgreen: cc.Prefab = null; 
    
    @property (cc.Prefab)
    bookblue: cc.Prefab = null; 
    
    @property (cc.Prefab)
    bookorange: cc.Prefab = null; 
    
    @property
    xMin:  int  = -400;
    @property 
    xMax: int = -100;
    @property 
    yMin: int =300;
    @property
    yMax: int = 312; 
    // LIFE-CYCLE CALLBACKS:
    
    /*@property 
    scoreGreen: int = 0; */
    
    
    @property(cc.Label)
    greenScore:cc.Label = null;
    gscore: number = 0;
    
    @property(cc.Label)
    orangeScore:cc.Label = null;
    oscore: number = 0;
    
    @property(cc.Label)
    dGreenScore:cc.Label = null;
    dgscore: number = 0;
    
    @property(cc.Label)
    blueScore:cc.Label = null;
    bscore: number = 0;
    
    
    
    

    onLoad () 
    {
        cc.director.getCollisionManager();
        var manager = cc.director.getCollisionManager();
         manager.enabled = true;
               
        var game = cc.director.getPhysicsManager();
         game.enabled=true;
  
               
        this.spawnNewBook();
        
        
    }
    
    spawnNewBook() {       
        
        var books = [this.bookgreen,this.bookdgreen,this.bookblue, this.bookorange];
        var random = Math.floor(Math.random()*books.length);
        var newbook = cc.instantiate(books[random]);
       var posx = this.xMin + Math.random() * (this.xMax - this.xMin);
       var posy = this.yMin + Math.random() * (this.yMax - this.yMin);
  
        newbook.setPosition(posx,posy);
        
        
        this.node.addChild(newbook);

        this.spawnCount++;
      
        this.scheduleOnce(function() {
            this.spawnNewBook();
        }, 2);
        
        
    }
        

    gainScore(casa) {
        if (casa ==1){
        this.oscore += 1;
        this.orangeScore.string = this.oscore;
        }
        if (casa ==2){
        this.bscore += 1;
        this.blueScore.string = this.bscore;
        }
        if (casa ==3){
        this.dgscore += 1;
        this.dGreenScore.string = this.dgscore;
        }
        if (casa ==4){
        this.gscore += 1;
        this.greenScore.string = this.gscore;
        }
    }

}
