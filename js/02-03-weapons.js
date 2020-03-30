/**
 * 设计一个武器系统。
 * 有屠龙刀、倚天剑、打狗棍，
 * 每种武器都有属性：名字、伤害值。
 * 行为：输出武器所有信息。
 * 在第二题的基础上，每个武器都有大招，但实现不一样：
 * a)屠龙刀：一刀出手，天下我有
 * b)倚天剑：削铁如泥，武林至尊
 * c)打狗棍：一棍在手，美食不愁
 */
class Weapon {
    constructor(name, damage) {
        this.name = name
        this.damage = damage
    }
    show() {
        console.info("这把武器叫做：" + this.name + "   伤害值是：" + this.damage)
    }
    ultimateSkill() {

    }
}
class TuLongDao extends Weapon {
    constructor(name, damage) {
        super(...arguments)
    }
    ultimateSkill() {
        console.info("一刀出手，天下我有！")
    }
}
class YiTianJian extends Weapon {
    constructor(name, damage) {
        super(...arguments)
    }
    ultimateSkill() {
        console.info("削铁如泥，武林至尊！")
    }
}
class DaGouGun extends Weapon {
    constructor(name, damage) {
        super(...arguments)
    }
    ultimateSkill() {
        console.info("一棍在手，美食不愁！")
    }
}

var tld = new TuLongDao("屠龙刀", "一刀999")
var ytj = new YiTianJian("倚天剑", "一剑666")
var dgg = new DaGouGun("打狗棍", "一棍777")
tld.show()
tld.ultimateSkill()
ytj.show()
ytj.ultimateSkill()
dgg.show()
dgg.ultimateSkill()