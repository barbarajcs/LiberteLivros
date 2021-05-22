const {ccclass, property} = cc._decorator;

@ccclass
export default class Book extends cc.Component {
    
    onBeginContact(contact, selfCollider, otherCollider) {
         if ((otherCollider.node.name) == ('Caracter')){
            this.node.parent.getComponent('ScrCanvas').gainScore();
        }
        
        this.node.destroy();
        this.node.parent.getComponent('ScrCanvas').spawnNewBook();
    }
    
}
