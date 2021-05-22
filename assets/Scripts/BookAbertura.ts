// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class BookAbertura extends cc.Component {

    onBeginContact(contact, selfCollider, otherCollider) {
        this.node.destroy();
        this.node.parent.getComponent('ScrAbertura').spawnNewBook();
    }
    
}
