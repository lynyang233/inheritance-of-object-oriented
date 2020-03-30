/**定义一个战斗机类和直升飞机类。
 * 战斗机和直升飞机都有属性：种类、速度、型号  
 * 和行为；起飞，降落 。 
 * 战斗机有额外的属性：子弹数量  行为：攻击 。
 * 直升飞机 有额外的属性：螺旋桨个数 。设计这几个类 
 */

class Plane {
    constructor(kind, speed, model) {
        this.kind = kind
        this.speed = speed
        this.model = model
    }
    takeOff() {
        console.info("正在调试起飞中！")
    }
    land() {
        console.info("正在降落！")
    }

}
class Fighter extends Plane {
    constructor(kind, speed, model, bulletNum) {
        super(...arguments)
        this.bulletNum = bulletNum
    }
    attack() {
        console.info("正在发动攻击！")
    }
}
class Helicopter extends Plane {
    constructor(kind, speed, model, propellerNum) {
        super(...arguments)
        this.propellerNum = propellerNum
    }
}
let fig1 = new Fighter("战斗机", "960 km/h", "F-86", "400")
console.info(fig1)
fig1.takeOff()
fig1.attack()
fig1.land()
let hel1 = new Helicopter("直升机", "240 km/h", "S-70黑鹰", "1")
console.info(hel1)
hel1.takeOff()
hel1.land()