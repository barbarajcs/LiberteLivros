// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class Gomba extends cc.Component {

     onLoad () {
        
         
        this.scheduleOnce(function() {
            this.GoombaWalk();
        }, 30);
         
     }

    GoombaWalk(){
            this.node.setPosition(-874, -310);
            var action =  cc.moveTo(15,800,-310);// posição fixa no grid XY
             this.node.runAction(action);
             
            this.scheduleOnce(function() {
                this.GoombaWalk();
                
            }, 30);
    }
    

}
