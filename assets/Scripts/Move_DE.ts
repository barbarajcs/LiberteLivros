
const {ccclass, property} = cc._decorator;

@ccclass
export default class MoveDE extends cc.Component {

      
    @property(cc.Sprite)
    right: cc.Sprite = null;
    
    @property(cc.Sprite)
    left: cc.Sprite = null; 
    
    @property(cc.Sprite)
    up: cc.Sprite = null; 
    
   
    

    // LIFE-CYCLE CALLBACKS:
     moveLeft: 0;
     moveRight:0;
     movimento :0 // 0: stoped, 1: walking right, -1 : walking left

     onLoad () {
        
        this.right.node.on('touchstart', function(event){
            this.movimento = 1; //walking right
            this.getComponent(cc.Animation).getAnimationState("walk_left_anim").play();
            this.getComponent(cc.Animation).getAnimationState("Iddle_left_anim").pause();
            this.getComponent(cc.Animation).getAnimationState("walk_right_anim").pause();
            this.getComponent(cc.Animation).getAnimationState("Iddle_right_anim").pause();
        }, this);
        
        this.left.node.on('touchstart', function(event){
            this.movimento = -1; //walking left
            this.getComponent(cc.Animation).getAnimationState("walk_left_anim").pause();
            this.getComponent(cc.Animation).getAnimationState("Iddle_left_anim").pause();
            this.getComponent(cc.Animation).getAnimationState("walk_right_anim").play();
            this.getComponent(cc.Animation).getAnimationState("Iddle_right_anim").pause();
        }, this);
        
        this.up.node.on('touchstart', function(event){
            this.movimento = 2; //walking right
        }, this);
        
        
        this.right.node.on('touchend', function(event){
            this.movimento = 0; //stop right
            //stop animation
                this.getComponent(cc.Animation).getAnimationState("walk_left_anim").pause();
                this.getComponent(cc.Animation).getAnimationState("Iddle_left_anim").play();
                this.getComponent(cc.Animation).getAnimationState("walk_right_anim").pause();
                this.getComponent(cc.Animation).getAnimationState("Iddle_right_anim").pause();
            //increase the linear Damping for stopping
            this.getComponent(cc.RigidBody).linearDamping = 5;
        }, this);
        
        this.left.node.on('touchend', function(event){
            this.movimento = 0; //stop left
            //stop animation
                this.getComponent(cc.Animation).getAnimationState("walk_left_anim").pause();
                this.getComponent(cc.Animation).getAnimationState("Iddle_left_anim").pause();
                this.getComponent(cc.Animation).getAnimationState("walk_right_anim").pause();
                this.getComponent(cc.Animation).getAnimationState("Iddle_right_anim").play();
            this.getComponent(cc.RigidBody).linearDamping = 5;
        }, this);
        
        this.up.node.on('touchend', function(event){
            this.movimento = 0; //walking right
        }, this);
        
    }


	
    update (dt) {
        
       if (this.movimento == -1)
        {
            this.getComponent(cc.Animation).getAnimationState("walk_left_anim").play();
            this.getComponent(cc.Animation).getAnimationState("Iddle_left_anim").pause();
            this.getComponent(cc.Animation).getAnimationState("walk_right_anim").pause();
            this.getComponent(cc.Animation).getAnimationState("Iddle_right_anim").pause();
			this.getComponent(cc.RigidBody).linearVelocity = cc.v2( -300,this.node.position.y);
            //this.node.setPosition(this.node.position.x -= 300*dt, this.node.position.y)
        }
        if (this.movimento == 1)
        {
            this.getComponent(cc.Animation).getAnimationState("walk_left_anim").pause();
            this.getComponent(cc.Animation).getAnimationState("Iddle_left_anim").pause();
            this.getComponent(cc.Animation).getAnimationState("walk_right_anim").play();
            this.getComponent(cc.Animation).getAnimationState("Iddle_right_anim").pause();
            this.getComponent(cc.RigidBody).linearVelocity = cc.v2( 300,this.node.position.y);
            //this.node.setPosition(this.node.position.x += 300*dt, this.node.position.y)
        }
        if (this.movimento == 2)
        {
            this.getComponent(cc.Animation).getAnimationState("walk_left_anim").pause();
            this.getComponent(cc.Animation).getAnimationState("Iddle_left_anim").pause();
            this.getComponent(cc.Animation).getAnimationState("walk_right_anim").play();
            this.getComponent(cc.Animation).getAnimationState("Iddle_right_anim").pause();
            this.getComponent(cc.RigidBody).linearVelocity = cc.v2( this.node.position.x,300);
            //this.node.setPosition(this.node.position.x += 300*dt, this.node.position.y)
        }
      
    }
}
