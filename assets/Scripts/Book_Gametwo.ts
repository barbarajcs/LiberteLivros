// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class BookGameTwo extends cc.Component {

     onLoad () {
        this.node.on ('touchstart', function(){
             this.opacity=255;
         },this.node);
         
         
         this.node.on('touchmove',function(e){
             this.opacity=255;
             var pos = e.touch.getDelta();
             this.x+= pos.x;
             this.y+=pos.y;
             
             
         },this.node);
         
          
        this.node.on ('touchend', function(){
             this.opacity=160;
         },this.node);
    }


    onBeginContact(contact, selfCollider, otherCollider) {
        
        
   
        if ((otherCollider.node.name) == ('Goomba')){
                       this.node.destroy();
            
        }
        
        if (((selfCollider.node.name) == ('book_orange'))&&((otherCollider.node.name) == ('orangeHouse')){
             this.node.parent.getComponent('ScrCanvastwo').gainScore(1);
             
             this.node.destroy();
        }       
         if (((selfCollider.node.name) == ('book_blue'))&&((otherCollider.node.name) == ('blueHouse')){
            this.node.parent.getComponent('ScrCanvastwo').gainScore(2);
              
             this.node.destroy();
        }      

        if (((selfCollider.node.name) == ('book_dgreen'))&&((otherCollider.node.name) == ('darkgreenHouse')){
            this.node.parent.getComponent('ScrCanvastwo').gainScore(3);
             
             this.node.destroy();
        }    

        if (((selfCollider.node.name) == ('book_green'))&&((otherCollider.node.name) == ('greenHouse')){
            this.node.parent.getComponent('ScrCanvastwo').gainScore(4);
             
             this.node.destroy();
        }    
        
        
        
    }
}
